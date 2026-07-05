import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const baseClass =
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-200";
  const variantClass =
    variant === "primary"
      ? "bg-ink text-white shadow-soft hover:-translate-y-0.5 hover:bg-black"
      : "border border-line bg-white text-ink hover:-translate-y-0.5 hover:border-ink";

  return (
    <a className={`${baseClass} ${variantClass}`} href={href}>
      {children}
    </a>
  );
}
