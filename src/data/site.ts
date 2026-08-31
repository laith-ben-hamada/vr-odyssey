/**
 * Central business information for VR Land Tunisia.
 * EDIT THIS FILE to update contact details, links and experience content.
 * Empty strings are intentional placeholders — nothing here is invented.
 */

export const site = {
  name: "VR Land",
  fullName: "VR Land Tunisia",
  tagline: "Immersive VR experiences • Tunis",
  address: "Bd Cheikh Zayed, Tunis, Tunisia",
  mapsEmbed:
    "https://www.google.com/maps?q=VR+Land+Bd+Cheikh+Zayed+Tunis+Tunisia&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=VR+Land+Bd+Cheikh+Zayed+Tunis+Tunisia",

  // TODO: replace with the venue's confirmed details.
  email: "", // e.g. "contact@vrland.tn"
  phone: "", // e.g. "+216 00 000 000"
  whatsapp: "", // international number without "+", e.g. "21600000000"

  // TODO: replace with the real accounts once confirmed.
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
  },
} as const;

export const mailHref = site.email ? `mailto:${site.email}` : "#location";
export const telHref = site.phone ? `tel:${site.phone.replace(/\s/g, "")}` : "#location";
export const whatsappHref = site.whatsapp
  ? `https://wa.me/${site.whatsapp}`
  : "#location";

export const navLinks = [
  { label: "Experiences", href: "#experiences" },
  { label: "About", href: "#about" },
  { label: "Groups", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
] as const;
