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
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Header } from "../components/header";

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
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-12">
      {/* Decorative elements */}
      <div className="bg-primary/5 absolute top-20 -left-20 h-64 w-64 rounded-full blur-3xl" />
      <div className="bg-primary/5 absolute -right-20 bottom-20 h-64 w-64 rounded-full blur-3xl" />

      <div className="not-prose relative mt-8 overflow-hidden px-4 py-8 sm:mt-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="bg-primary/10 absolute -top-[10%] left-[50%] h-[40%] w-[60%] -translate-x-1/2 rounded-full blur-3xl" />
          <div className="bg-primary/5 absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
          <div className="bg-primary/5 absolute -bottom-[10%] -left-[10%] h-[40%] w-[40%] rounded-full blur-3xl" />
        </div>
        <Header />

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="from-foreground to-foreground/30 mb-4 bg-gradient-to-b bg-clip-text text-center text-4xl font-bold text-transparent sm:text-5xl md:text-6xl"
        >
          Let's Get in Touch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 text-center text-gray-400"
        >
          Fill out the form below and we&apos;ll get back to you as soon as
          possible.
        </motion.p>

        {/* Form & Details Container */}
        <div className="grid w-full max-w-screen-md gap-12 rounded-lg border px-6 py-10 shadow-inner md:grid-cols-2">
          <ContactForm
            state={state}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <ContactDetails />
        </div>
      </div>
    </section>
  );
}

function ContactForm({ state, handleChange, handleSubmit }) {
  const inputClasses =
    "w-full rounded-md border border-slate-700 px-3 py-2 text-sm text-black shadow-inner outline-none hover:border-red-500 focus:border-slate-500";

  return (
    <form className="space-y-6 text-slate-300" onSubmit={handleSubmit}>
      <div>
        <label class="mb-1 block font-medium text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">
          Name
        </label>
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
        <label class="mb-1 block font-medium text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">
          Email
        </label>
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
        <label class="mb-1 block font-medium text-gray-700 after:ml-0.5 after:text-red-500 after:content-['*'] ...">
          Message
        </label>
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

      <Button
        type="submit"
        disabled={state.submitting}
        className="group relative h-12 w-full rounded-md font-medium text-white shadow-inner transition-all hover:to-slate-800"
      >
        {state.submitting ? "Sending..." : "Send"}
        <Send className="ml-2 inline h-4 w-4" />
      </Button>
    </form>
  );
}

function ContactDetails() {
  const iconClasses =
    "flex h-10 w-10 items-center justify-center rounded-full border border-slate-600  bg-primary hover:shadow-md hover:shadow-red-300 transition duration-300 ease-in-out";

  return (
    <div>
      <h3 className="mb-8 text-2xl font-semibold text-black">
        Connect with Us
      </h3>

      <div className="mb-6 flex items-center gap-4">
        <Link href="#" className={iconClasses}>
          <Mail className="h-5 w-5 text-white" />
        </Link>
        <div className="text-gray-600">
          <p>Email us at:</p>
          <p>subha9.5roy350@gmail.com</p>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <Link href="#" className={iconClasses}>
          <Phone className="h-5 w-5 text-white" />
        </Link>
        <div className="text-gray-600">
          <p>Call us at:</p>
          <p>XXXXX XXXXX</p>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <Link href="#" className={iconClasses}>
          <MapPin className="h-5 w-5 text-white" />
        </Link>
        <div className="text-gray-600">
          <p>Location:</p>
          <p>Techno Main Salt Lake, Sector-V, Kolkata-700091</p>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        {[Twitter, Facebook, Github].map((Icon, i) => (
          <Link key={i} href="#" className={`${iconClasses} bg-white`}>
            <Icon className="text-grey h-5 w-5" />
          </Link>
        ))}
      </div>
    </div>
  );
}
