import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-white mb-4">
              Atelier Le Gall
            </h3>
            <p className="text-primary-200 text-sm leading-relaxed mb-4">
              Menuiserie d&apos;excellence depuis plus de 20 ans. Créations sur
              mesure en Côtes-d&apos;Armor et toute la Bretagne.
            </p>
            <p className="text-accent-alt text-sm font-medium">
              Artisan passionné, résultats exceptionnels.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
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
                    className="text-primary-200 text-sm hover:text-accent-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Cuisines Sur Mesure",
                "Escaliers Design",
                "Dressings & Rangements",
                "Bibliothèques",
                "Bureaux Intégrés",
                "Rénovation",
              ].map((service) => (
                <li key={service}>
                  <span className="text-primary-200 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-accent-300 mt-0.5 shrink-0" />
                <a
                  href="tel:0673016237"
                  className="text-primary-200 text-sm hover:text-white transition-colors"
                >
                  06 73 01 62 37
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-accent-300 mt-0.5 shrink-0" />
                <a
                  href="mailto:atelier.legall22450@gmail.com"
                  className="text-primary-200 text-sm hover:text-white transition-colors break-all"
                >
                  atelier.legall22450@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent-300 mt-0.5 shrink-0" />
                <span className="text-primary-200 text-sm">
                  22450, Côtes-d&apos;Armor, Bretagne
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-accent-300 mt-0.5 shrink-0" />
                <span className="text-primary-200 text-sm">
                  Lun – Ven : 8h – 18h
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-300 text-sm">
              &copy; {new Date().getFullYear()} Atelier Le Gall. Tous droits
              réservés.
            </p>
            <div className="flex gap-6">
              <Link
                href="/mentions-legales"
                className="text-primary-300 text-sm hover:text-white transition-colors"
              >
                Mentions légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-primary-300 text-sm hover:text-white transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
