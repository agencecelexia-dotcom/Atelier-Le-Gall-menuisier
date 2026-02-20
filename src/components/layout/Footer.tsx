import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top: Brand + CTA row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div className="max-w-md">
            <h3 className="font-heading text-3xl font-bold text-white mb-3">
              Atelier Le Gall
            </h3>
            <p className="text-white/70 leading-relaxed">
              Menuiserie d&apos;excellence depuis plus de 20 ans.
              Créations sur mesure en Côtes-d&apos;Armor et toute la Bretagne.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent-700 transition-colors self-start lg:self-auto"
          >
            Demander un Devis Gratuit
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Separator */}
        <div className="h-px bg-white/10 mb-12" />

        {/* Grid: Contact + Nav + Services + Horaires */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:0673016237"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 group-hover:bg-accent/20 transition-colors">
                    <Phone size={16} className="text-accent-200" />
                  </span>
                  <span className="text-sm font-medium">06 73 01 62 37</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:atelier.legall22450@gmail.com"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 group-hover:bg-accent/20 transition-colors">
                    <Mail size={16} className="text-accent-200" />
                  </span>
                  <span className="text-sm font-medium break-all">atelier.legall22450@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Atelier+Le+Gall+menuisier/@48.711302,-3.2882653,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10 group-hover:bg-accent/20 transition-colors">
                    <MapPin size={16} className="text-accent-200" />
                  </span>
                  <span className="text-sm font-medium">22450, Côtes-d&apos;Armor</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Accueil" },
                { href: "/services", label: "Nos Services" },
                { href: "/realisations", label: "Réalisations" },
                { href: "/a-propos", label: "À Propos" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Cuisines Sur Mesure",
                "Escaliers Design",
                "Dressings & Rangements",
                "Bibliothèques",
                "Bureaux Intégrés",
                "Rénovation",
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-5">
              Horaires
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10">
                  <Clock size={16} className="text-accent-200" />
                </span>
                <div>
                  <p className="text-white/90 text-sm font-medium">Lun – Ven</p>
                  <p className="text-white/50 text-xs">8h00 – 18h00</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/10">
                  <Clock size={16} className="text-white/30" />
                </span>
                <div>
                  <p className="text-white/90 text-sm font-medium">Sam – Dim</p>
                  <p className="text-white/50 text-xs">Sur rendez-vous</p>
                </div>
              </div>
            </div>
            <p className="text-amber-300/80 text-xs font-medium italic mt-5">
              Artisan passionné, résultats exceptionnels.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} Atelier Le Gall. Tous droits réservés.
            </p>
            <div className="flex items-center gap-5">
              <Link
                href="/mentions-legales"
                className="text-white/40 text-xs hover:text-white/70 transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-white/40 text-xs hover:text-white/70 transition-colors"
              >
                Confidentialité
              </Link>
              <Link
                href="/admin/login"
                className="text-white/40 text-xs hover:text-white/70 transition-colors"
              >
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
