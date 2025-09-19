"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Twitter,
  Facebook,
  Instagram,
  Send,
} from "lucide-react";
import { Link } from "react-router-dom";


export default function ContactUs() {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
    errors: {},
    submitting: false,
    submitted: false,
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({ ...state, submitting: true });

    console.log("Form submitted:", {
      name: state.name,
      email: state.email,
      message: state.message,
    });

    setState({ ...state, submitting: false, submitted: true });
  };

  return (
    <section className="mx-auto w-full max-w-screen-md px-4 min-h-scree">
      <h2 className="mt-4 mb-5 bg-gradient-to-br from-gray-300 via-blue-300 to-gray-700 bg-clip-text text-center text-4xl font-bold text-transparent md:text-6xl">
        Let's Get in Touch
      </h2>
      <p className="mb-6 text-center text-gray-400">
        Fill out the form below and we&apos;ll get back to you as soon as
        possible.
      </p>

      <div
        className="grid gap-12 rounded-lg border border-gray-700 bg-white/10 px-6 py-10 shadow-inner shadow-slate-800 md:grid-cols-2"
        style={{
          backgroundImage:
            "radial-gradient(164.75% 100% at 50% 0,#272f3c 0,#0b1224 48.73%)",
        }}
      >
        <ContactForm
          state={state}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <ContactDetails />
      </div>
    </section>
  );
}

function ContactForm({ state, handleChange, handleSubmit }) {
  const inputClasses =
    "w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white shadow-inner shadow-slate-800 outline-none hover:border-slate-600 focus:border-slate-500";

  return (
    <form className="space-y-6 text-slate-300" onSubmit={handleSubmit}>
      <div>
        <label className="mb-1 block font-medium">Name</label>
        <input
          name="name"
          value={state.name}
          onChange={handleChange}
          type="text"
          placeholder="Enter your name"
          className={inputClasses}
          required
        />
      </div>

      <div>
        <label className="mb-1 block font-medium">Email</label>
        <input
          name="email"
          value={state.email}
          onChange={handleChange}
          type="email"
          placeholder="Enter your email"
          className={inputClasses}
          required
        />
        {state.errors.email && (
          <p className="text-sm text-red-500">{state.errors.email}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block font-medium">Message</label>
        <textarea
          name="message"
          value={state.message}
          onChange={handleChange}
          placeholder="Enter your message"
          className={`${inputClasses} min-h-[100px]`}
          required
        />
        {state.errors.message && (
          <p className="text-sm text-red-500">{state.errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="group relative h-12 w-full rounded-md bg-gradient-to-br from-slate-800 to-slate-700 font-medium text-white shadow-inner transition-all hover:from-slate-700 hover:to-slate-800"
      >
        {state.submitting ? "Sending..." : "Send"}
        <Send className="ml-2 inline h-4 w-4" />
      </button>
    </form>
  );
}

function ContactDetails() {
  const iconClasses =
    "flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 shadow-inner shadow-gray-800 hover:shadow-md hover:shadow-slate-500 transition duration-300 ease-in-out";

  return (
    <div>
      <h3 className="mb-8 text-2xl font-semibold text-slate-300">
        Connect with Us
      </h3>

      <div className="mb-6 flex items-center gap-4">
        <Link href="#" className={iconClasses}>
          <Mail className="h-5 w-5 text-white" />
        </Link>
        <div className="text-gray-300">
          <p>Email us at:</p>
          <p>subha9.5roy350@gmail.com</p>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <Link href="#" className={iconClasses}>
          <Phone className="h-5 w-5 text-white" />
        </Link>
        <div className="text-gray-300">
          <p>Call us at:</p>
          <p>XXXXX XXXXX</p>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <Link href="#" className={iconClasses}>
          <MapPin className="h-5 w-5 text-white" />
        </Link>
        <div className="text-gray-300">
          <p>Location:</p>
          <p>Techno Main Salt Lake, Sector-V, Kolkata-700091</p>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        {[Twitter, Facebook, Instagram, Github].map((Icon, i) => (
          <Link key={i} href="#" className={`${iconClasses} bg-gray-800`}>
            <Icon className="h-5 w-5 text-white" />
          </Link>
        ))}
      </div>
    </div>
  );
}
