import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#1E293B]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="text-white font-bold text-xl tracking-tight mb-2">
              Auto<span className="text-blue-500">AI</span>Tech
            </div>
            <p className="text-slate-400 text-sm max-w-xs">
              AI infrastructure for agencies and B2B businesses. Built to run. Built to compound.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div className="flex flex-col gap-3">
              <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Company</span>
              <Link href="/" className="text-slate-400 hover:text-white text-sm transition-colors">Home</Link>
              <Link href="/systems" className="text-slate-400 hover:text-white text-sm transition-colors">Systems</Link>
              <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">Contact</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Get Started</span>
              <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">Book a Strategy Call</Link>
              <Link href="/contact" className="text-slate-400 hover:text-white text-sm transition-colors">Talk to Us</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">© 2026 AutoAITech. All rights reserved.</p>
          <p className="text-slate-600 text-xs">Built for agencies. Powered by AI.</p>
        </div>
      </div>
    </footer>
  );
}
