import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top row: Brand left + Contact right */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
          <div>
            <Link href="/" className="font-heading text-2xl font-bold text-white hover:text-white/90 transition-colors">
              Atelier Le Gall
            </Link>
            <p className="text-white/50 text-sm mt-1">Menuiserie d&apos;excellence · Côtes-d&apos;Armor</p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <a href="tel:0673016237" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <Phone size={14} className="text-accent-200" />
              06 73 01 62 37
            </a>
            <a href="mailto:atelier.legall22450@gmail.com" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
              <Mail size={14} className="text-accent-200" />
              atelier.legall22450@gmail.com
            </a>
            <a
              href="https://www.google.com/maps/place/Atelier+Le+Gall+menuisier/@48.711302,-3.2882653,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <MapPin size={14} className="text-accent-200" />
              22450, Côtes-d&apos;Armor
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom row: Nav left + Legal right */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {[
              { href: "/", label: "Accueil" },
              { href: "/services", label: "Services" },
              { href: "/realisations", label: "Réalisations" },
              { href: "/a-propos", label: "À Propos" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/60 text-sm hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="text-white/30 text-xs">
              &copy; {new Date().getFullYear()} Atelier Le Gall
            </p>
            <Link href="/mentions-legales" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Confidentialité
            </Link>
            <Link href="/admin/login" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
