<script setup lang="ts">
import { projectNavItems, site, socialItems } from '#shared/data/site'

useSeoMeta({
  title: 'Privacy policy',
  description: 'How jourideligt.dev handles the personal data you share through the contact form. No cookies, no analytics and no tracking.',
})
</script>

<template>
  <div class="page">
    <AppNavbar :nav-items="projectNavItems" :social-items="socialItems" />
    <main id="main" tabindex="-1" class="outline-hidden">
      <section class="relative flex min-h-screen w-full items-start justify-center pt-32 pb-16 sm:pt-40">
        <SectionGradient mirrored priority />
        <div class="relative z-10 container flex flex-col">
          <h1 class="text-2xl font-bold capitalize lg:text-4xl"><TagLabel spaced>Privacy policy</TagLabel></h1>
          <p class="mt-4 text-sm font-light">Last updated: 5 October 2026</p>

          <div class="mt-16 rounded-2xl bg-white p-8 leading-relaxed sm:p-12">
            <p>
              This privacy policy explains which personal data is processed when you visit jourideligt.dev or get in
              touch through the contact form.
            </p>

            <h2 class="mt-8 text-xl font-bold text-jl-red">Who is responsible</h2>
            <p class="mt-2">
              jourideligt.dev is the personal website of Jouri de Ligt, based in the Netherlands. I am responsible for
              processing your personal data as described here. You can reach me at
              <a :href="`mailto:${site.email}`" class="font-bold text-jl-red underline">{{ site.email }}</a>.
            </p>

            <h2 class="mt-8 text-xl font-bold text-jl-red">Contact form</h2>
            <p class="mt-2">
              When you send a message through the contact form, I process your name, email address and message. I only
              use this to answer your message and, if we decide to work together, for the follow-up. The legal basis is
              my legitimate interest in responding to your request (article 6(1)(f) GDPR) or, when your message is about
              a possible assignment, taking steps at your request before entering into an agreement (article 6(1)(b)
              GDPR).
            </p>
            <p class="mt-2">
              Your message is delivered to my inbox and you receive an automatic confirmation by email. Both emails are
              sent through Brevo.
            </p>
            <p class="mt-2">
              To keep spam out, the contact form is protected by Cloudflare Turnstile. Once the form comes into view,
              Turnstile checks whether you are a person, based on technical data such as your IP address and browser
              details. The legal basis is my legitimate interest in protecting the form against abuse (article 6(1)(f)
              GDPR).
            </p>

            <h2 class="mt-8 text-xl font-bold text-jl-red">Visiting this website</h2>
            <p class="mt-2">
              This website does not set cookies and does not use analytics or any other kind of tracking. Apart from the
              spam check on the contact form, everything is served from this website itself, so loading a page does not
              share data with third parties such as Google. Like any web server, the hosting provider processes
              technical data such as your IP address and browser details to deliver the website and protect it against
              abuse.
            </p>

            <h2 class="mt-8 text-xl font-bold text-jl-red">Who processes your data</h2>
            <ul class="mt-2 list-disc pl-5">
              <li>Vercel Inc., hosting of this website</li>
              <li>Cloudflare, Inc. (Turnstile), spam protection of the contact form</li>
              <li>Brevo, based in France, delivery of the contact form emails</li>
              <li>My email provider, where your message is stored</li>
            </ul>
            <p class="mt-2">
              Some of these providers are based in the United States. Transfers of personal data rely on appropriate
              safeguards, such as the EU-US Data Privacy Framework or the standard contractual clauses of the European
              Commission.
            </p>

            <h2 class="mt-8 text-xl font-bold text-jl-red">How long your data is kept</h2>
            <p class="mt-2">
              I keep your message and contact details for as long as needed to handle your request and any follow-up,
              and delete them when they are no longer needed.
            </p>

            <h2 class="mt-8 text-xl font-bold text-jl-red">Your rights</h2>
            <p class="mt-2">
              You have the right to access, correct or delete your personal data, to object to or restrict its
              processing and to receive your data in a portable format. Send your request to
              <a :href="`mailto:${site.email}`" class="font-bold text-jl-red underline">{{ site.email }}</a>. If you
              think your data is not handled correctly, you can file a complaint with the Dutch Data Protection
              Authority,
              <a
                href="https://www.autoriteitpersoonsgegevens.nl/"
                target="_blank"
                rel="noopener"
                class="font-bold text-jl-red underline"
              >Autoriteit Persoonsgegevens</a>.
            </p>

            <h2 class="mt-8 text-xl font-bold text-jl-red">Changes</h2>
            <p class="mt-2">This policy may be updated. The date at the top shows when it was last changed.</p>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>
