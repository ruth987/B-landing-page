"use client"
import React from "react";
import { useRouter } from "next/navigation";

const StickyButton = () => {
  const router = useRouter();
  return (
      <button
      onClick={() => router.push("/contact")}
       className="fixed bottom-32 right-5 text-white font-semibold px-6 py-3 z-50 ">
        <div className="w-32 h-32 bg-primary bg-gradient-to-t from-primary via-primary to-secondary rounded-tl-[80px] rounded-tr-[80px] rounded-bl-[80px] rounded-br-[2px] flex justify-center items-center relative">
          <span className="absolute text-white text-xs">JETZT KONTAKTIEREN</span>
        </div>
      </button>
  );
};

export default StickyButton;
