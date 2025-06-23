"use client";

import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { FaTwitter, FaInstagram, FaDiscord } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

const socials = [
  {
    icon: <FaTwitter size={28} />, link: "https://twitter.com/", label: "Twitter",
  },
  {
    icon: <FaInstagram size={28} />, link: "https://instagram.com/", label: "Instagram",
  },
  {
    icon: <FaDiscord size={28} />, link: "https://discord.com/", label: "Discord",
  },
];

const PsychedelicBg = () => (
  <div
    className="fixed inset-0 -z-10 h-full w-full overflow-hidden"
    style={{
      background:
        "radial-gradient(circle at 20% 20%, #a9f6ff 0%, #9d7af3 30%, #f5a8e6 60%, #3ddc97 100%)",
      animation: "bgmove 20s linear infinite alternate",
    }}
  >
    <style>{`
      @keyframes bgmove {
        0% { background-position: 0% 50%; filter: hue-rotate(0deg) blur(0px); }
        50% { background-position: 100% 50%; filter: hue-rotate(80deg) blur(4px); }
        100% { background-position: 0% 50%; filter: hue-rotate(360deg) blur(0px); }
      }
    `}</style>
    <svg className="absolute opacity-40" width="100vw" height="100vh">
      <defs>
        <radialGradient id="psy1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#ffe761" />
          <stop offset="100%" stopColor="#e949db" />
        </radialGradient>
      </defs>
      <ellipse cx="60%" cy="30%" rx="500" ry="200" fill="url(#psy1)" filter="blur(30px)" />
      <ellipse cx="20%" cy="80%" rx="350" ry="160" fill="#2de1fc" filter="blur(40px)" />
    </svg>
  </div>
);

const Toad = () => (
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 1, type: "spring" }}
    className="mx-auto flex justify-center my-8"
  >
    <Image
      src="/images/toad.png"
      alt="Psychedelic dapper toad"
      width={300}
      height={300}
      className="rounded-2xl shadow-2xl border-4 border-[#6ad877] bg-white/40"
      priority
    />
  </motion.div>
);

const InfoBox = () => (
  <Card className="max-w-lg mx-auto bg-white/70 shadow-2xl rounded-2xl p-6 mb-8 border-2 border-[#6ad877]">
    <CardContent>
      <h2 className="text-3xl font-bold mb-2 text-[#3c2c23] psychedelic-font">Toad Sensei 🐸</h2>
      <p className="text-lg mb-4 text-[#222]">
        Follow Toad Sensei on a journey of spiritual awakening.
      </p>
      <ul className="list-disc pl-4 text-base">
        <li>✨ Teachings of the Toad</li>
        <li>🐸 Toad Lore</li>
        <li>🔗 Fellow Toad Travelers</li>
      </ul>
    </CardContent>
  </Card>
);

const SocialLinks = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.7 }}
    className="flex flex-row gap-6 justify-center my-6"
  >
    {socials.map(({ icon, link, label }) => (
      <Button
        key={label}
        asChild
        variant="outline"
        size="icon"
        className="bg-white/80 hover:bg-[#a9f6ff]/60 border-2 border-[#e949db] shadow-lg rounded-full"
        aria-label={label}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          {icon}
        </a>
      </Button>
    ))}
  </motion.div>
);

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-2 py-8 relative">
      <PsychedelicBg />
      <Toad />
      <InfoBox />
      <SocialLinks />
      <style>{`
        .psychedelic-font {
          font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive;
          letter-spacing: 0.05em;
          text-shadow: 0 2px 12px #a9f6ff, 0 -2px 6px #f5a8e6;
        }
      `}</style>
    </main>
  );
}
