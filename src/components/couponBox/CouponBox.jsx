import React, { useState, useRef } from "react";
import { Copy, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";



export default function CouponBox({ onApply }) {
  const [code, setCode] = useState("");
  const [applied, setApplied] = useState(null); 
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  
  const COUPONS = {
    SAVE10: { type: "percent", value: 10, label: "10% off" },
    FLAT5: { type: "flat", value: 5, label: "$5 off" },
    WELCOME20: { type: "percent", value: 20, label: "20% off" },
  };

  const applyCoupon = async () => {
    const trimmed = (code || "").trim().toUpperCase();
    if (!trimmed) {
      setMessage({ type: "error", text: "Please enter a coupon code." });
      return;
    }

    setLoading(true);
    setMessage(null);

    // Fake async check (simulate API) =============================
    await new Promise((r) => setTimeout(r, 350));

    const found = COUPONS[trimmed];
    if (!found) {
      setMessage({ type: "error", text: "Invalid coupon code." });
      setLoading(false);
      return;
    }

    setApplied({ code: trimmed, ...found });
    setMessage({ type: "success", text: `Applied ${found.label}` });
    setLoading(false);

    // optional callback to parent with the applied coupon =============================
    if (onApply) onApply({ code: trimmed, ...found });
  };

  const removeCoupon = () => {
    setApplied(null);
    setMessage({ type: "info", text: "Coupon removed." });
  };

  const copyCode = async () => {
    if (!applied) return;
    try {
      await navigator.clipboard.writeText(applied.code);
      setMessage({ type: "success", text: "Coupon code copied!" });
    } catch (e) {
      setMessage({ type: "error", text: "Unable to copy. Try manually." });
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-6 rounded-xl shadow space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">Have a coupon?</h3>
            <p className="text-sm text-gray-500">Apply your discount code at checkout.</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">Secure</div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter coupon code"
              className="flex-1 px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-400"
              onKeyDown={(e) => e.key === "Enter" && applyCoupon()}
            />

            <button
              onClick={applyCoupon}
              disabled={loading}
              className="px-4 py-2 rounded-xl bg-secondary hover:bg-primary duration-300 cursor-pointer text-white font-medium disabled:opacity-60"
            >
              {loading ? "Applying..." : "Apply"}
            </button>
          </div>

          <AnimatePresence>
            {message && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className={`mt-3 text-sm px-3 py-2 rounded-lg ${{
                  success: "bg-green-50 text-green-700",
                  error: "bg-red-50 text-red-700",
                  info: "bg-gray-50 text-gray-700",
                }[message.type]}`}
              >
                {message.text}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-4">
            <AnimatePresence>
              {applied ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  className="flex items-center justify-between bg-indigo-50 border border-indigo-100 p-3 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-white p-2 border">
                      <Check size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{applied.code}</div>
                      <div className="text-xs text-gray-500">{applied.label}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button onClick={copyCode} className="text-sm px-2 py-1 rounded bg-white border flex items-center gap-2">
                      <Copy size={14} /> Copy
                    </button>
                    <button onClick={removeCoupon} className="text-sm px-2 py-1 rounded bg-white border flex items-center gap-2">
                      <X size={14} /> Remove
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-3 gap-2 mt-2"
                >
                  {Object.keys(COUPONS).map((k) => (
                    <div key={k} className="col-span-1">
                      <button
                        onClick={() => setCode(k)}
                        className="w-full text-xs px-3 py-2 rounded-lg border hover:shadow-sm"
                      >
                        {k}
                        <div className="text-[10px] text-gray-500">{COUPONS[k].label}</div>
                      </button>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="mt-3 text-xs text-gray-500 text-center">
        Tip: Try <span className="font-semibold">SAVE10</span> or <span className="font-semibold">FLAT5</span>
      </div>
    </div>
  );
}
