"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    total: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "", total: "" });
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <div
      className="bg-cover bg-center p-8 py-20 bg-primary"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-lg"
      >
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-md shadow-md"
          >
            SEND
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-semibold">Get in Touch</h2>
          <div className="space-y-1 text-muted-foreground">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 5 }}
            >
              <Phone className="h-4 w-4" />
              <span>+91 9692727075</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 5 }}
            >
              <Mail className="h-4 w-4" />
              <span className="text-sm">lifesparkinfra@gmail.com</span>
            </motion.div>
            <motion.div
              className="flex gap-3"
              whileHover={{ x: 5 }}
            >
              <MapPin className="h-4 w-4 mt-1 shrink-0" />
              <p className="text-sm leading-relaxed">
                Plot no- 817/1243, M/s Lifespark Infra & Consulting PRIVATE
                LIMITED, Telenga Sahi New Bridge, Bhaskarganj, Balasore,
                Odisha, 756001
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
