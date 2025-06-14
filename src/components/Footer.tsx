
import { Instagram, Mail } from "lucide-react";

const Footer = () => (
  <footer className="w-full bg-[#faf9f6] border-t border-gray-200 py-8 md:py-12 px-3 sm:px-6 mt-8 section-fade">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-y-6">
      <div>
        <span className="font-playfair text-2xl md:text-3xl font-bold uppercase tracking-wide text-[#231f20]">
          homme
        </span>
        <p className="text-gray-500 mt-1 text-sm md:text-base">© 2025 Все права защищены</p>
      </div>
      <div className="flex items-center gap-7">
        <a href="mailto:hello@hommedesign.ru" className="hover:text-accentGold transition-colors" title="Email">
          <Mail size={32} />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accentGold transition-colors" title="Instagram">
          <Instagram size={32} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
