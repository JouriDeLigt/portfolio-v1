<script setup lang="ts">
type Field = 'name' | 'email' | 'message'

const fields: Field[] = ['name', 'email', 'message']

const form = reactive({ name: '', email: '', message: '', reason: '' })
const errors = reactive<Record<Field, boolean>>({ name: false, email: false, message: false })
const inputs = {
  name: useTemplateRef<HTMLInputElement>('name'),
  email: useTemplateRef<HTMLInputElement>('email'),
  message: useTemplateRef<HTMLTextAreaElement>('message'),
}

const submitted = ref(false)
const pending = ref(false)
const sendFailed = ref(false)

const turnstileToken = ref('')
// Changing the key renders a fresh widget, which fetches a new token
const turnstileKey = ref(0)

// Turnstile normally finishes in the background before anyone is done typing; if the
// visitor is quicker than that, wait for it instead of failing
function waitForTurnstile(timeoutMs = 10_000) {
  if (turnstileToken.value) return Promise.resolve(true)
  return new Promise<boolean>((resolve) => {
    const timer = setTimeout(() => {
      stop()
      resolve(false)
    }, timeoutMs)
    const stop = watch(turnstileToken, (token) => {
      if (!token) return
      clearTimeout(timer)
      stop()
      resolve(true)
    })
  })
}

function validate() {
  for (const field of fields) {
    errors[field] = !form[field].trim()
  }
  return fields.find(field => errors[field])
}

// After the first submit, errors clear as soon as a field gets filled in
watch(form, () => {
  if (submitted.value) validate()
})

async function onSubmit() {
  submitted.value = true
  const firstInvalid = validate()
  if (firstInvalid) {
    inputs[firstInvalid].value?.focus()
    return
  }

  // Honeypot: only bots fill in the hidden "reason" field
  if (form.reason || pending.value) return

  pending.value = true
  sendFailed.value = false
  try {
    if (!await waitForTurnstile()) throw new Error('Turnstile did not finish')
    await $fetch('/api/contact', { method: 'POST', body: { ...form, turnstileToken: turnstileToken.value } })
    await navigateTo('/thankyou')
  }
  catch {
    sendFailed.value = true
    // Tokens are single-use and the server may already have spent this one
    turnstileToken.value = ''
    turnstileKey.value++
  }
  finally {
    pending.value = false
  }
}

const inputClass = 'mt-2 rounded border-y-2 border-white bg-white px-4 py-3 font-bold text-black outline-hidden placeholder:font-bold focus:border-b-jl-red'
</script>

<template>
  <section id="contact" class="relative flex min-h-screen w-full items-start justify-center pt-16">
    <SectionGradient mirrored />
    <div class="relative z-10 container flex flex-col">
      <h2 class="text-2xl font-bold capitalize lg:text-4xl"><TagLabel spaced>Contact</TagLabel></h2>
      <div class="mt-16 w-full rounded-2xl border-2 border-black px-8 py-12">
        <form class="grid grid-cols-12" @submit.prevent="onSubmit">
          <h2 class="col-span-12 text-4xl leading-relaxed font-bold sm:col-span-3">Want to get in touch?</h2>
          <div class="col-span-12 flex flex-col gap-8 sm:col-start-6 sm:col-end-13">
            <label for="name" class="flex flex-col font-bold text-jl-red">
              Name
              <input
                id="name"
                ref="name"
                v-model="form.name"
                type="text"
                name="name"
                autocomplete="name"
                placeholder="Enter your name..."
                aria-required="true"
                :aria-invalid="errors.name"
                :class="[inputClass, { 'border-b-jl-red': errors.name }]"
              >
            </label>
            <label for="email" class="flex flex-col font-bold text-jl-red">
              Email
              <input
                id="email"
                ref="email"
                v-model="form.email"
                type="email"
                name="email"
                autocomplete="email"
                placeholder="Enter your email..."
                aria-required="true"
                :aria-invalid="errors.email"
                :class="[inputClass, { 'border-b-jl-red': errors.email }]"
              >
            </label>
          </div>
          <label for="message" class="col-span-12 mt-6 flex flex-col font-bold text-jl-red">
            Message
            <textarea
              id="message"
              ref="message"
              v-model="form.message"
              name="message"
              placeholder="Enter your message..."
              rows="4"
              aria-required="true"
              :aria-invalid="errors.message"
              :class="[inputClass, { 'border-b-jl-red': errors.message }]"
            />
          </label>
          <div class="coolest-field" aria-hidden="true">
            <input id="reason" v-model="form.reason" type="text" name="reason" placeholder="Enter your reason..." tabindex="-1" autocomplete="off">
          </div>
          <!--
            Spam check by Cloudflare Turnstile. Its code (hydrate-on-visible) and Cloudflare's script
            (trigger, which also skips the script preload in <head>) only load once the form scrolls into
            view. It stays invisible unless Cloudflare asks for an interaction; only then does the margin apply.
          -->
          <LazyNuxtTurnstile
            :key="turnstileKey"
            v-model="turnstileToken"
            hydrate-on-visible
            trigger="visible"
            :options="{ appearance: 'interaction-only', size: 'flexible', theme: 'light' }"
            class="col-span-12 [&_iframe]:mt-8"
          />
          <button type="submit" class="col-span-12 mt-8 rounded bg-jl-red py-2 text-lg font-bold text-white" :aria-busy="pending">
            {{ pending ? 'Sending...' : 'Submit' }}
          </button>
          <p v-if="sendFailed" role="alert" class="col-span-12 mt-4 font-bold text-jl-red">
            Something went wrong while sending your message. Please try again or email me at
            <a href="mailto:hello@jourideligt.dev" class="underline">hello@jourideligt.dev</a>.
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
