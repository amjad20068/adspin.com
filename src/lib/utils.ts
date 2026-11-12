import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const AGENCY_CONFIG = {
  name: "AD SPIN",
  tagline: "Creativity in Motion",
  officialWebsite: "https://www.adspin.in",
  displayWebsite: "www.adspin.in",
  instagram: "https://www.instagram.com/ad_spin?rpxt=cjI0Mmk2ZWFmd25p",
  instagramHandle: "@ad_spin",
  email: "adspin.branding@gmail.com",
  phones: ["+91 773 625 9099", "+91 819 725 5805"],
  whatsappNumber: "917736259099",
  whatsappAltNumber: "918197255805",
  getWhatsAppUrl: (message?: string) => {
    const defaultMsg = "Hello Ad Spin team! I'm interested in working with you on a creative project.";
    const text = encodeURIComponent(message || defaultMsg);
    return `https://wa.me/917736259099?text=${text}`;
  },
  year: 2026,
};

