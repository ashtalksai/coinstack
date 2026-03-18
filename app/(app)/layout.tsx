"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, History, User, Settings } from "lucide-react"; // install lucide-react if needed, but it should already be from shadcn

const navItems = [
  { href: "/dashboard", label: "Today", icon: LayoutDashboard },
  { href: "/history", label: "History", icon: History },
  { href: "/profile", label: "Profile", icon: User },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-60 md:flex-col bg-[#1B4332] text-white">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#D4A017] flex items-center justify-center text-[#1B4332] font-bold text-sm" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>C</div>
            <span className="text-lg font-bold text-white" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Coinstack</span>
          </Link>
        </div>
        <nav className="flex-1 px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white/15 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#D4A017] flex items-center justify-center text-[#1B4332] font-bold text-xs">AJ</div>
            <div>
              <p className="text-sm font-medium text-white">Alex Johnson</p>
              <p className="text-xs text-white/60">Free plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-[#FAFAF7] min-h-screen pb-20 md:pb-0">
        {children}
      </main>

      {/* Mobile Bottom Tab Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-[#E8E8E0] z-50">
        <div className="flex justify-around py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center gap-1 px-3 py-1 text-xs font-medium ${
                  isActive ? "text-[#1B4332]" : "text-[#8A8A80]"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/profile"
            className={`flex flex-col items-center gap-1 px-3 py-1 text-xs font-medium ${
              pathname === "/settings" ? "text-[#1B4332]" : "text-[#8A8A80]"
            }`}
          >
            <Settings className="w-5 h-5" />
            Settings
          </Link>
        </div>
      </nav>
    </div>
  );
}
