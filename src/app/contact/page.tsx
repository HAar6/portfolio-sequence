"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields before sending.");
      return;
    }
    
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    // Open default mail client
    window.location.href = `mailto:harshit.lnctbhopal@gmail.com?subject=${subject}&body=${body}`;
    
    // Optionally clear form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen text-white pt-32 px-6 md:px-24 flex flex-col justify-center items-center">
      <div className="max-w-2xl text-center w-full">
        <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tighter">Let's Connect.</h1>
        <p className="text-xl text-neutral-400 mb-6 font-light">
          I'm currently open to new opportunities, collaborations, or just a friendly chat.
          Feel free to reach out and I'll get back to you as soon as possible.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12 text-neutral-300">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <a href="mailto:harshit.lnctbhopal@gmail.com" className="hover:text-white transition-colors">harshit.lnctbhopal@gmail.com</a>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-full backdrop-blur-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <a href="tel:+919755654400" className="hover:text-white transition-colors">+91-9755654400</a>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md text-left mb-12">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can I help you?"
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-white text-black font-semibold rounded-xl py-4 hover:bg-neutral-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="flex justify-center items-center gap-8 pb-12">
          <a
            href="https://instagram.com/__har.shit___"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span className="font-medium">Instagram</span>
          </a>
          <a
            href="https://linkedin.com/in/harshit-yadav-6424a6b6"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span className="font-medium">LinkedIn</span>
          </a>
          <a
            href="https://github.com/HAar6"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:scale-110 transition-transform">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span className="font-medium">GitHub</span>
          </a>
        </div>
      </div>
    </main>
  );
}
