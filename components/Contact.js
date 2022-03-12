import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/router";

function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [succes, setSucces] = useState();

  const onSubmit = (data) => {
    fetch("/api/sendgrid", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setSucces(data.succes);
        router.push("/thankyou");
      });
  };

  return (
    <section
      className="relative w-full min-h-screen pt-16 flex items-start justify-center"
      id="contact"
    >
      <img
        src="/static/images/gradient-w.png"
        alt="gradient"
        className="absolute inset-0 transform -scale-x-100 opacity-50 object-contain"
      />
      <div className="container relative z-10 flex flex-col">
        <h2 className="text-2xl lg:text-4xl font-bold capitalize">
          &lt;Contact &#47;&gt;
        </h2>
        <div className="w-full border-2 border-black rounded-2xl mt-16 py-12 px-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`grid grid-cols-12 ${
              succes && "blur-md opacity-20 pointer-events-none"
            }`}
          >
            <h2 className="text-4xl font-bold col-span-12 sm:col-span-3 leading-relaxed">
              Want to get in touch?
            </h2>
            <div className="flex flex-col gap-8 col-span-12 sm:col-start-6 sm:col-end-13">
              <label
                htmlFor="name"
                className="text-md text-jl_red font-bold flex flex-col"
              >
                Name
                <input
                  type="text"
                  {...register("name", { required: true })}
                  id="name"
                  placeholder="Enter your name..."
                  className={`text-black font-bold py-3 px-4 mt-2 rounded border-y-2 placeholder:font-bold outline-none focus:border-b-jl_red ${
                    errors.firstname ? "border-b-jl_red" : "border-white"
                  }`}
                />
              </label>
              <label
                htmlFor="email"
                className="text-md text-jl_red font-bold flex flex-col"
              >
                Email
                <input
                  type="email"
                  {...register("email", { required: true })}
                  id="email"
                  placeholder="Enter your email..."
                  className={`text-black font-bold py-3 px-4 mt-2 rounded border-y-2 border-white placeholder:font-bold outline-none focus:border-b-jl_red ${
                    errors.email ? "border-b-jl_red" : "border-white"
                  }`}
                />
              </label>
            </div>
            <label
              htmlFor="message"
              className="text-md text-jl_red font-bold flex flex-col col-span-12 mt-6"
            >
              Message
              <textarea
                {...register("message", { required: true })}
                id="message"
                placeholder="Enter your message..."
                rows={4}
                className={`text-black font-bold py-3 px-4 mt-2 rounded border-y-2 border-white placeholder:font-bold outline-none focus:border-b-jl_red ${
                  errors.message ? "border-b-jl_red" : "border-white"
                }`}
              />
            </label>
            <button
              type="submt"
              className="col-span-12 mt-8 py-2 bg-jl_red text-lg text-white font-bold rounded"
            >
              Submit
            </button>
          </form>
          {succes && (
            <h3 className="absolute text-white text-2xl font-bold text-center top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
              {succes}
            </h3>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
