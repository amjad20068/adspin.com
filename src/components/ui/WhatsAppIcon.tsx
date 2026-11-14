import React from "react";
import { FaWhatsapp } from "react-icons/fa6";

interface WhatsAppIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({
  size = 20,
  className = "",
  ...props
}) => {
  return (
    <FaWhatsapp
      size={size}
      className={`inline-block shrink-0 ${className}`}
      aria-label="WhatsApp"
      {...props}
    />
  );
};
