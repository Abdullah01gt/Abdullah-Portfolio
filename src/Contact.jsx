import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState({ loading: false, success: null, message: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, message: "" });

  emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  formRef.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
      .then(
        () => {
          setStatus({
            loading: false,
            success: true,
            message: "Thank you! Your message has been sent successfully.",
          });
          formRef.current.reset();
        },
        (error) => {
          setStatus({
            loading: false,
            success: false,
            message: "Failed to send message. Please try again or email directly.",
          });
        }
      );
  };

  return (
    <section className="max-w-xl mx-auto p-6 mt-9">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 text-center" >Get In Touch</h2>
      <p className="text-slate-400 mb-6 text-sm text-center">
        Have a project in mind or want to discuss opportunities? Send a message.
      </p>

      <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            required
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-violet-500 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="from_email"
            required
            placeholder="your.email@example.com"
            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-violet-500 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Write your message here..."
            className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-violet-500 text-sm resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status.loading}
          className="w-full py-2.5 px-4 bg-violet-600 hover:bg-violet-700 disabled:opacity-50 text-white font-medium rounded-lg text-sm transition"
        >
          {status.loading ? "Sending..." : "Send Message"}
        </button>

        {status.message && (
          <p
            className={`text-sm text-center mt-2 ${
              status.success ? "text-emerald-400" : "text-rose-400"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
}