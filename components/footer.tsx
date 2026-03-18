import Link from "next/link";

const productLinks = [
  { href: "#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "/docs", label: "Docs" },
];

const companyLinks = [
  { href: "/pitch", label: "About" },
  { href: "/docs", label: "Blog" },
  { href: "#", label: "Careers" },
  { href: "#", label: "Press" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "#", label: "Cookie Policy" },
];

export function Footer() {
  return (
    <footer className="bg-[#1B4332] text-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#D4A017] flex items-center justify-center text-[#1B4332] font-bold text-sm" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>C</div>
              <span className="text-lg font-bold" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Coinstack</span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              3 minutes a day.<br />Real money habits.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/90">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/90">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-white/90">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-sm text-white/40">&copy; 2026 Coinstack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
