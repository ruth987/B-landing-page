"use client"
import React from "react";
import { useRouter } from "next/navigation";

const StickyButton = () => {
  const router = useRouter();
  return (
      <button
      onClick={() => router.push("/contact")}
       className="fixed md:bottom-32 bottom-20 right-5 text-white font-semibold px-6 py-3 z-50 ">
        <div className="md:w-32 w-24 h-24 md:h-32 bg-primary bg-gradient-to-t from-primary via-primary to-secondary rounded-tl-[80px] rounded-tr-[80px] rounded-bl-[80px] rounded-br-[2px] flex justify-center items-center relative">
          <span className="absolute text-white md:text-xs text-[10px]">JETZT KONTAKTIEREN</span>
        </div>
      </button>
  );
};

export default StickyButton;
