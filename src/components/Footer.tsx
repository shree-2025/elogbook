export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/elogo.png" alt="eLogbook" className="h-7 w-auto" />
            <span>eLogbook</span>
          </div>
          <p className="text-sm text-slate-600">Smart digital logbook for medical colleges. Track activities, competencies and outcomes.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Product</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="#features" className="hover:text-[color:var(--brand-600)]">Features</a></li>
            <li><a href="#pricing" className="hover:text-[color:var(--brand-600)]">Pricing</a></li>
            <li><a href="#contact" className="hover:text-[color:var(--brand-600)]">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900">Resources</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a href="/about" className="hover:text-[color:var(--brand-600)]">About</a></li>
            <li><a href="#" className="hover:text-[color:var(--brand-600)]">Docs</a></li>
            <li><a href="#" className="hover:text-[color:var(--brand-600)]">Support</a></li>
          </ul>
        </div>
        <div className="text-sm text-slate-600">
          <h4 className="font-semibold text-slate-900">Newsletter</h4>
          <p className="mt-3">Get updates about new features and improvements.</p>
          <form className="mt-3 flex gap-2">
            <input type="email" placeholder="you@college.edu" className="flex-1 rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[color:var(--brand)]" />
            <button className="btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="container mx-auto px-6 py-6 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} eLogbook. All rights reserved. Product By Citronics Infotech Pvt Ltd</p>
          <div className="flex gap-4 mt-3 sm:mt-0">
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
