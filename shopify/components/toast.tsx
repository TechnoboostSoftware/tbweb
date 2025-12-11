import { useEffect } from "react";

interface ToastProps {
  type: "success" | "error";
  message: string;
  show: boolean;
  onClose: () => void;
}

export default function Toast({ type, message, show, onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed top-6 right-6 z-[9999] animate-in fade-in zoom-in duration-200">
      <div
        className={`px-4 py-3 rounded-xl shadow-lg text-white flex items-center gap-3 min-w-[260px] ${
          type === "success" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        <span className="font-semibold capitalize">
          {type === "success" ? "Success" : "Error"}
        </span>
        <span className="flex-1">{message}</span>

        <button className="text-white/80 hover:text-white" onClick={onClose}>
          ✕
        </button>
      </div>
    </div>
  );
}
