import { useLoading } from "@/context/LoadingProvider";
import { motion } from "framer-motion";

const Loader = () => {

  const { isLoading } = useLoading();

  return (
    isLoading &&
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-background text-yellow-600 z-50">
      <motion.div
        className="text-6xl"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        ⚡
      </motion.div>
      <h1 className="text-5xl font-bold mt-4">Loading...</h1>
    </div>
  )

}

export default Loader;