import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4">Calmora Foundation</h3>
            <p className="text-background/70 text-sm leading-relaxed max-w-md">
              Building emotionally resilient communities through preventive, structured, and ethical mental health care. Registered | 12A Certified | 80G Compliant | CSR-1 Registered.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "About Us", path: "/" },
                { label: "Our Programs", path: "/what-we-do" },
                { label: "Services", path: "/get-involved" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-background/60 hover:text-background transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Reach Us</h4>
            <div className="flex flex-col gap-3 text-sm text-background/60">
              <a href="tel:+919953585256" className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone size={14} /> +91-9953585256
              </a>
              <a href="mailto:info@calmorafoundation.org" className="flex items-center gap-2 hover:text-background transition-colors">
                <Mail size={14} /> info@calmorafoundation.org
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-1 flex-shrink-0" />
                <span>98-B, Third Floor, Namberdar Estate, Taimoor Nagar, New Friends Colony, New Delhi - 110065</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-xs text-background/40">© 2025 Calmora Foundation. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/company/calmora-foundation/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-background/40 hover:text-background transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="https://www.instagram.com/calmorafoundation?igsh=MXFncmYxcTZvYWdy&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-background/40 hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-background/40">
            Made with <Heart size={12} className="text-warm mx-1" /> for mental health
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
