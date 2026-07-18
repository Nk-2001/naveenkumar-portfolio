import React, { useState, useEffect } from "react";
import { X, Lock, Check, Trash2, Mail, MailOpen, ShieldAlert, Key, MessageCircle, RefreshCw } from "lucide-react";
import { ContactMessage } from "../types";

interface AdminInboxProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminInbox({ isOpen, onClose }: AdminInboxProps) {
  const [passkey, setPasskey] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getStoredMessages = () => {
    const existingStr = localStorage.getItem("portfolio_messages");
    if (!existingStr) {
      const seed = [
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
      localStorage.setItem("portfolio_messages", JSON.stringify(seed));
      return seed;
    }
    return JSON.parse(existingStr);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      const cleanPasskey = passkey.trim();
      if (cleanPasskey !== "admin123" && cleanPasskey !== "naveen1301") {
        throw new Error("Incorrect passkey. Try 'admin123' or 'naveen1301'");
      }

      setMessages(getStoredMessages());
      setAuthenticated(true);
    } catch (err: any) {
      setError(err.message || "Failed to authenticate.");
    } finally {
      setLoading(false);
    }
  };

  const fetchMessages = async () => {
    if (!authenticated) return;
    setLoading(true);
    try {
      setMessages(getStoredMessages());
    } catch (err) {
      console.error("Error refreshing inbox:", err);
    } finally {
      setLoading(false);
    }
  };

  const toggleReadStatus = async (id: string) => {
    try {
      const allMsgs = getStoredMessages();
      const updated = allMsgs.map((msg: any) => 
        msg.id === id ? { ...msg, read: !msg.read } : msg
      );
      localStorage.setItem("portfolio_messages", JSON.stringify(updated));
      setMessages(updated);
    } catch (err) {
      console.error("Error toggling read status:", err);
    }
  };

  const deleteMessage = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this message? This action is irreversible.")) return;
    try {
      const allMsgs = getStoredMessages();
      const updated = allMsgs.filter((msg: any) => msg.id !== id);
      localStorage.setItem("portfolio_messages", JSON.stringify(updated));
      setMessages(updated);
    } catch (err) {
      console.error("Error deleting message:", err);
    }
  };

  const formatDate = (isoStr: string) => {
    try {
      const d = new Date(isoStr);
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return isoStr;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity animate-none" onClick={onClose} />

      {/* Main Drawer Container */}
      <div className="relative bg-[#0a0a0a] border border-white/10 rounded-none max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden text-white">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 bg-black flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-[#F27D26]/10 rounded-none text-[#F27D26] border border-[#F27D26]/20">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-black text-xs uppercase tracking-wider text-white">Portfolio Inbox</h3>
              <p className="text-[9px] text-[#F27D26] font-mono uppercase tracking-widest font-black">Communications Manager</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-none border border-white/5 hover:border-white transition-all hover:bg-[#111]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {!authenticated ? (
            /* Login Form */
            <form onSubmit={handleLogin} className="max-w-sm mx-auto py-8 text-center space-y-6">
              <div className="w-12 h-12 rounded-none bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/25 flex items-center justify-center mx-auto">
                <Lock className="w-5 h-5" />
              </div>

              <div className="space-y-1.5">
                <h4 className="font-display font-black uppercase text-sm tracking-tight text-white">Authentication Required</h4>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  Enter the password to review message submissions stored in the backend database.
                </p>
              </div>

              {error && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-none text-xs flex items-center justify-center space-x-2 font-bold uppercase tracking-wider">
                  <ShieldAlert className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              )}

              <div className="space-y-4">
                <div className="relative">
                  <Key className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F27D26]" />
                  <input
                    type="password"
                    placeholder="Enter passkey"
                    value={passkey}
                    onChange={(e) => setPasskey(e.target.value)}
                    required
                    className="w-full bg-black border border-white/10 rounded-none pl-10 pr-4 py-3 text-xs text-slate-300 placeholder-slate-600 focus:outline-none focus:border-[#F27D26]/80 focus:ring-1 focus:ring-[#F27D26]/20 transition-all text-center font-bold uppercase tracking-wider"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#F27D26] hover:bg-[#ff9445] disabled:opacity-50 text-black py-3.5 rounded-none text-xs font-black uppercase tracking-widest cursor-pointer shadow-md shadow-[#F27D26]/10"
                >
                  {loading ? "Verifying..." : "Access Inbox"}
                </button>
              </div>
            </form>
          ) : (
            /* Message Inbox Grid */
            <div className="space-y-4 text-left">
              <div className="flex justify-between items-center pb-2 border-b border-white/10">
                <span className="text-[10px] text-slate-400 font-mono uppercase tracking-widest font-black">
                  {messages.length} messages received
                </span>
                <button
                  onClick={fetchMessages}
                  disabled={loading}
                  className="text-xs text-[#F27D26] hover:text-[#ff9445] flex items-center gap-1 font-black uppercase tracking-wider disabled:opacity-50 cursor-pointer"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
                  <span>Refresh</span>
                </button>
              </div>

              {messages.length === 0 ? (
                <div className="py-16 text-center text-slate-500">
                  <MailOpen className="w-10 h-10 mx-auto mb-3 text-[#F27D26]" />
                  <p className="text-xs uppercase tracking-widest font-black">Inbox is completely clean!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`p-5 rounded-none border transition-all ${
                        msg.read
                          ? "bg-black/40 border-white/5 text-slate-400"
                          : "bg-[#111] border-[#F27D26]/20 shadow-lg shadow-[#F27D26]/[0.02]"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-3">
                        <div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                            <span className="font-bold text-sm text-white">{msg.name}</span>
                            <span className="text-[10px] text-slate-500 font-mono">({msg.email})</span>
                          </div>
                          <span className="text-xs text-[#F27D26] font-mono font-bold uppercase tracking-wider block mt-1">
                            SUB: {msg.subject || "No Subject"}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wide shrink-0">{formatDate(msg.createdAt)}</span>
                      </div>

                      <p className="text-xs text-slate-300 bg-black p-4 rounded-none border border-white/5 leading-relaxed font-sans whitespace-pre-wrap">
                        {msg.message}
                      </p>

                      <div className="flex justify-end gap-2.5 mt-4 pt-3 border-t border-white/5">
                        <button
                          onClick={() => toggleReadStatus(msg.id)}
                          className={`p-2 rounded-none text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                            msg.read
                              ? "bg-black text-slate-400 border border-white/10 hover:text-white"
                              : "bg-[#F27D26]/10 text-[#F27D26] border border-[#F27D26]/20 hover:bg-[#F27D26] hover:text-black"
                          }`}
                          title={msg.read ? "Mark as unread" : "Mark as read"}
                        >
                          {msg.read ? <Mail className="w-3.5 h-3.5" /> : <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          <span>{msg.read ? "Mark Unread" : "Mark Read"}</span>
                        </button>
                        <button
                          onClick={() => deleteMessage(msg.id)}
                          className="p-2 bg-rose-500/10 border border-rose-500/20 hover:bg-rose-600 text-rose-400 hover:text-white rounded-none transition-all cursor-pointer"
                          title="Delete message"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
