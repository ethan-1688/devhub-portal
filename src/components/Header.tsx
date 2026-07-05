"use client";

import { useState } from "react";
import { navLinks } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-white/85 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between">
        <a className="text-xl font-black tracking-tight text-ink" href="#">
          DevHub
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              className="text-sm font-medium text-slate-600 transition hover:text-ink"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="#subscribe">Get started</ButtonLink>
        </div>

        <button
          aria-label="Open menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-line bg-white md:hidden">
          <nav className="container-page flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <a
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                href={link.href}
                key={link.label}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="mt-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-white"
              href="#subscribe"
              onClick={() => setIsOpen(false)}
            >
              Get started
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
