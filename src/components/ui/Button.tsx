import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "white" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg";
  isExternal?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  href,
  variant = "primary",
  size = "md",
  isExternal = false,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full tracking-wide select-none group";

  const sizeStyles = {
    sm: "text-xs px-4 py-2 gap-2",
    md: "text-sm px-6 py-3 gap-2.5",
    lg: "text-base px-8 py-4 gap-3",
  };

  const variantStyles = {
    primary:
      "bg-brand-black text-white hover:bg-brand-red border border-transparent shadow-sm hover:shadow-md",
    secondary:
      "bg-brand-red text-white hover:bg-brand-black border border-transparent shadow-sm hover:shadow-md",
    outline:
      "bg-transparent text-brand-black border border-brand-black/20 hover:border-brand-red hover:text-brand-red hover:bg-brand-red/5",
    white:
      "bg-white text-brand-black hover:bg-brand-red hover:text-white border border-transparent shadow-sm",
    ghost:
      "bg-transparent text-brand-black hover:text-brand-red hover:bg-brand-gray-100",
    whatsapp:
      "bg-[#25D366] text-white hover:bg-[#1EBE5D] border border-transparent shadow-sm hover:shadow-md font-semibold",
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

