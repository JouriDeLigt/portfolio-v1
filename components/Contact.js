import { useState } from "react";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    console.log(data);
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
          <form onSubmit={handleSubmit} className="grid grid-cols-12">
            <h2 className="text-4xl font-bold col-span-12 sm:col-span-3 leading-relaxed">
              Want to get in touch?
            </h2>
            <div className="flex flex-col gap-8 col-span-12 sm:col-start-6 sm:col-end-13">
              <label
                htmlFor="name"
                className="text-md text-red-500 font-bold flex flex-col"
              >
                Name
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name..."
                  className="text-black font-bold py-3 px-4 mt-2 rounded border-y-2 border-white placeholder:font-bold outline-none focus:border-b-red-500"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label
                htmlFor="email"
                className="text-md text-red-500 font-bold flex flex-col"
              >
                Email
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email..."
                  className="text-black font-bold py-3 px-4 mt-2 rounded border-y-2 border-white placeholder:font-bold outline-none focus:border-b-red-500"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <label
              htmlFor="message"
              className="text-md text-red-500 font-bold flex flex-col col-span-12 mt-6"
            >
              Message
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message..."
                rows={4}
                className="text-black font-bold py-3 px-4 mt-2 rounded border-y-2 border-white placeholder:font-bold outline-none focus:border-b-red-500"
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
            <button
              type="submt"
              className="col-span-12 mt-8 py-2 bg-red-500 text-lg text-white font-bold rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
