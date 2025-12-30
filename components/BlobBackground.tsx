"use client";

import { motion } from "framer-motion";

export default function BlobBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Blob 1 */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-500 rounded-full opacity-30 filter blur-3xl top-10 left-10"
        animate={{ x: [0, 40, 0], y: [0, 20, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-500 rounded-full opacity-20 filter blur-3xl bottom-0 right-0"
        animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute w-64 h-64 bg-pink-500 rounded-full opacity-25 filter blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ x: [-20, 20, -20], y: [-10, 10, -10], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
    </div>
  );
}
