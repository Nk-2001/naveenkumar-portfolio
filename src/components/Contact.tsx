import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, AlertCircle, CheckCircle, Lock, MessageSquareCode } from "lucide-react";
import { motion } from "motion/react";
import ScrollReveal from "./ScrollReveal";

interface ContactProps {
  onOpenAdmin: () => void;
  isAdminMode: boolean;
}

export default function Contact({ onOpenAdmin, isAdminMode }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [adminPasskey, setAdminPasskey] = useState("");
  const [adminError, setAdminError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setError(null);

    // Simulate short latency
    await new Promise((resolve) => setTimeout(resolve, 800));

    try {
      const { name, email, subject, message } = formData;
      if (!name || !email || !message) {
        throw new Error("Name, email, and message are required.");
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error("Please enter a valid email address.");
      }

      // Read existing or seed messages if empty
      const existingStr = localStorage.getItem("portfolio_messages");
      const existing = existingStr ? JSON.parse(existingStr) : [
        {
          id: "seed-1",
          name: "John Doe",
          email: "john@example.com",
          subject: "Collaboration Opportunity",
          message: "Hey Naveen, I saw your portfolio and was really impressed by your MERN stack and frontend expertise. We are looking for a React developer for a freelance project. Let me know if you are interested!",
          createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
          read: false,
        },
        {
          id: "seed-2",
          name: "Sarah Miller",
          email: "sarah.m@company.org",
          subject: "Hiring: Frontend Engineer",
          message: "Hi Naveenkumar, your experience at Subiksham Solutions matches an open position we have at our tech agency. Let's schedule a call this week. Here is my email for coordination.",
          createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
          read: true,
        }
      ];

      const newMessage = {
        id: "msg-" + Date.now().toString(),
        name: name.trim(),
        email: email.trim(),
        subject: (subject || "No Subject").trim(),
        message: message.trim(),
        createdAt: new Date().toISOString(),
        read: false,
      };

      const updated = [newMessage, ...existing];
      localStorage.setItem("portfolio_messages", JSON.stringify(updated));

      setSuccess("Your message has been sent successfully! Naveen will get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#050505] text-white relative border-t border-white/10">
      <div className="absolute top-1/4 right-5 w-80 h-80 rounded-full bg-[#F27D26]/[0.02] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[10px] font-mono text-[#F27D26] uppercase tracking-[0.3em] font-black">Get In Touch</h2>
            <p className="mt-2 text-4xl sm:text-5xl font-display font-black tracking-tighter uppercase text-white">
              Contact & Collaborations
            </p>
            <div className="mt-4 h-1.5 w-16 bg-[#F27D26] mx-auto rounded-none" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info, Location, & Social Link */}
          <ScrollReveal delay={0.1} className="lg:col-span-5">
            <div className="space-y-6">
              <div className="bg-[#111] p-8 rounded-none border border-white/10 text-left">
                <h3 className="text-xl font-display font-black uppercase text-white mb-6">Contact Information</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-8">
                  Let's discuss potential job opportunities, project contracts, or simply connect. Feel free to use the contact form or reach out directly using any of my official handles:
                </p>

                <div className="space-y-6">
                  {/* Email Link */}
                  <a
                    href="mailto:naveek1301@gmail.com"
                    className="flex items-center space-x-4 p-4 bg-black rounded-none border border-white/10 hover:border-[#F27D26]/40 hover:bg-[#111] transition-all group"
                  >
                    <div className="p-3 bg-[#F27D26]/10 rounded-none text-[#F27D26] group-hover:bg-[#F27D26] group-hover:text-black transition-all">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[9px] text-[#F27D26] font-mono uppercase tracking-wider font-bold">Email Address</span>
                      <span className="text-sm font-bold text-slate-200">naveek1301@gmail.com</span>
                    </div>
                  </a>

                  {/* Phone Link */}
                  <a
                    href="tel:6382709447"
                    className="flex items-center space-x-4 p-4 bg-black rounded-none border border-white/10 hover:border-[#F27D26]/40 hover:bg-[#111] transition-all group"
                  >
                    <div className="p-3 bg-[#F27D26]/10 rounded-none text-[#F27D26] group-hover:bg-[#F27D26] group-hover:text-black transition-all">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[9px] text-[#F27D26] font-mono uppercase tracking-wider font-bold">Phone Number</span>
                      <span className="text-sm font-bold text-slate-200">+91 6382709447</span>
                    </div>
                  </a>

                  {/* Location MapPin */}
                  <div className="flex items-center space-x-4 p-4 bg-black rounded-none border border-white/10">
                    <div className="p-3 bg-[#F27D26]/10 rounded-none text-[#F27D26]">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[9px] text-[#F27D26] font-mono uppercase tracking-wider font-bold">Current Residence</span>
                      <span className="text-sm font-bold text-slate-200">Tiruchengode, Namakkal DT</span>
                    </div>
                  </div>
                </div>

                {/* Social Channels Row */}
                <div className="mt-8 pt-8 border-t border-white/5">
                  <span className="block text-[9px] text-slate-500 font-mono uppercase tracking-widest font-black mb-4">Official Channels</span>
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Nk-2001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 bg-black hover:bg-[#111] text-slate-300 hover:text-white py-3.5 px-4 rounded-none border border-white/10 text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/naveenkumar-wd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 bg-black hover:bg-[#111] text-slate-300 hover:text-white py-3.5 px-4 rounded-none border border-white/10 text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Admin Backdoor card (Visible only in secret admin mode) */}
              {isAdminMode && (
                <div className="bg-[#111]/40 border border-white/10 p-6 rounded-none text-left animate-pulse">
                  <div className="flex items-center space-x-2 text-[#F27D26] mb-3">
                    <MessageSquareCode className="w-5 h-5" />
                    <h4 className="font-display font-black uppercase text-xs tracking-wider">Inbox Admin Access</h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4 font-sans">
                    Are you reviewing Naveen's applications? You can view live contact submissions by opening the mailbox. Passkey is <code className="bg-black px-2 py-1 rounded-none text-[#F27D26] font-mono font-bold border border-white/5">admin123</code>.
                  </p>
                  <button
                    onClick={onOpenAdmin}
                    className="w-full bg-black hover:bg-white hover:text-black text-slate-300 hover:border-white border border-white/10 py-3.5 rounded-none text-xs font-black uppercase tracking-widest flex items-center justify-center space-x-1.5 transition-colors cursor-pointer"
                  >
                    <Lock className="w-3.5 h-3.5" />
                    <span>Access Admin Inbox</span>
                  </button>
                </div>
              )}
            </div>
          </ScrollReveal>

          {/* Right Column: Interactive Form */}
          <ScrollReveal delay={0.2} className="lg:col-span-7">
            <div className="bg-[#111] p-8 rounded-none border border-white/10 text-left">
              <h3 className="text-xl font-display font-black uppercase text-white mb-6">Send a Message</h3>

              {/* Success Notification Banner */}
              {success && (
                <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-none text-xs flex items-start space-x-3.5">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{success}</span>
                </div>
              )}

              {/* Error Notification Banner */}
              {error && (
                <div className="mb-6 p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-none text-xs flex items-start space-x-3.5">
                  <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-slate-400 font-black tracking-wider">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 rounded-none px-4 py-3 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-[#F27D26] focus:ring-1 focus:ring-[#F27D26]/20 transition-all font-sans font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono uppercase text-slate-400 font-black tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black border border-white/10 rounded-none px-4 py-3 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-[#F27D26] focus:ring-1 focus:ring-[#F27D26]/20 transition-all font-sans font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase text-slate-400 font-black tracking-wider">Subject (Optional)</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Interview Schedule / Freelance Project"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded-none px-4 py-3 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-[#F27D26] focus:ring-1 focus:ring-[#F27D26]/20 transition-all font-sans font-medium"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono uppercase text-slate-400 font-black tracking-wider">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Hello Naveen, we looked at your portfolio and love your clean designs. Let's arrange a call..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 rounded-none px-4 py-3 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-[#F27D26] focus:ring-1 focus:ring-[#F27D26]/20 transition-all resize-none font-sans font-medium"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto inline-flex items-center justify-center space-x-2 bg-[#F27D26] hover:bg-[#ff9445] disabled:opacity-50 text-black px-8 py-4 rounded-none font-black uppercase tracking-widest shadow-lg shadow-[#F27D26]/10 transition-all cursor-pointer"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send message</span>
                      <Send className="w-4 h-4 stroke-[3]" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
