"use client"
import React from "react";
import { useRouter } from "next/navigation";

const StickyButton = () => {
  const router = useRouter();
  return (
      <button
      onClick={() => router.push("/contact")}
       className="fixed md:bottom-32 bottom-20 right-5 text-white font-semibold px-6 py-3 z-50 ">
        <div className="md:w-24 w-16 h-16 md:h-24 bg-primary bg-gradient-to-t from-primary via-primary to-secondary rounded-tl-[80px] rounded-tr-[80px] rounded-bl-[80px] rounded-br-[2px] flex justify-center items-center relative">
          <span className="absolute text-white md:text-[10px] text-[8px]">JETZT KONTAKTIEREN</span>
        </div>
      </button>
  );
};

export default StickyButton;
