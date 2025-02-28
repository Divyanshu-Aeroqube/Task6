import { motion } from "framer-motion";
import { useEffect } from "react";

const Loader: React.FC<{ show: boolean }> = ({ show }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);

  return (
    show && (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-yellow-300 z-50">
        <motion.div
          className="text-6xl"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          ⚡
        </motion.div>
        <h1 className="text-4xl font-bold mt-4">Loading...</h1>
      </div>
    )
  );
};

export default Loader;