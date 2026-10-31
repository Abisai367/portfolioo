import React, { useState } from 'react';
import Navbar from './navbar.jsx';
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { RiSendPlaneFill } from 'react-icons/ri';

const Contact = () => {
  const initialFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ text: "", isError: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setStatus({
        text: "Check that you've filled all the required fields.",
        isError: true,
      });
      return;
    }

    const payload = {
      username: formData.name.trim(),
      useremail: formData.email.trim(),
      usersubject: formData.subject.trim(),
      usermessage: formData.message.trim(), // FIXED: changed useremessage -> usermessage
    };

    setIsLoading(true);
    setStatus({
      text: "Sending...",
      isError: false,
    });

    try {
      const response = await fetch("api/sendmessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Server error");
      }

      setStatus({
        text: "Received Your Message I will Reach you!",
        isError: false,
      });

      setFormData(initialFormData);
    } catch (error) {
      console.error("Message submission error:", error);

      setStatus({
        text:
          error.message === "Failed to fetch"
            ? "Unable to connect to the server. Please try again."
            : error.message || "Message could not be sent.",
        isError: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contactDetails = [
    { icon: FaEnvelope, title: 'Email Me', value: 'webdevabisai@gmail.com', link: 'mailto:webdevabisai@gmail.com' },
    { icon: FaGithub, title: 'GitHub', value: 'Abisai367', link: 'https://github.com' },
    { icon: FaLinkedin, title: 'LinkedIn', value: 'dickson-abisai', link: 'https://linkedin.com' },
    { icon: FaMapMarkerAlt, title: 'Current Location', value: 'Chuka/ Tharaka Nithi County', link: null },
  ];

  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-12 min-h-screen flex flex-col justify-center">
      <Navbar />
      
      <motion.div className="max-w-5xl mx-auto w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{duration: 1.5, ease: "easeOut"}}
      >
        <motion.div className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0}}
          transition={{duration: 1, ease: "easeOut"}}
        >
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-green-500">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind, a question, or just want to say hello? Drop me a message!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <motion.div className="md:col-span-1 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{duration: 1, ease: "easeOut"}}        
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-300 border-b border-gray-700 pb-2">
              Contact Info
            </h3>
            
            {contactDetails.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex items-center gap-4">
                  <div className="p-3 bg-green-950 rounded-lg text-green-400 shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-sm font-medium text-gray-400">{info.title}</p>
                    {info.link ? (
                      <a href={info.link} target="_blank" rel="noreferrer" className="text-base font-semibold tracking-wide text-green-400 hover:underline block truncate">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-base font-semibold tracking-wide text-gray-200 block truncate">{info.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </motion.div>

          <motion.div className="md:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0}}
            transition={{duration: 1, ease: "easeOut"}}          
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-300 border-b border-gray-700 pb-2">
              Send Me A Message
            </h3>
            
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 md:p-8 rounded-lg shadow-md border border-gray-700 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                    placeholder="johndoe@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all"
                  placeholder="Project Inquiry / Job Opportunity"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea id="message" name="message" required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all resize-none"
                  placeholder="Hi, I'd love to work together on..."
                ></textarea>
              </div>

              {status.text && (
                <p className={`text-sm ${status.isError ? "text-red-400" : "text-green-400"}`}>
                  {status.text}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full sm:w-auto bg-green-600 hover:bg-green-500 active:bg-green-700 text-white font-bold px-6 py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <span>please wait</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <RiSendPlaneFill className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
