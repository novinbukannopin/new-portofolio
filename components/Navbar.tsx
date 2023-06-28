import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center my-4 py-4 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
        <span className="text-sm font-semibold tracking-widest">Portfolio</span>
      </div>
      <div className="flex gap-12 text-md text-zinc-400">
        <Link href="#" className="text-black font-medium">
          Home
        </Link>
        <Link href="#project">Project</Link>
        <Link href="#">Contact</Link>
      </div>
    </nav>
  );
}
