import React, { useState, useEffect } from 'react';
import {
  Scissors,
  Compass,
  Briefcase,
  BookOpen,
  User,
  ChevronDown,
  Menu,
  X,
  Settings,
  LogOut,
  Sparkles,
  ExternalLink,
  Lightbulb
} from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.FC<{ className?: string }>;
  badge?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'explore', label: 'Explore', href: '/explore', icon: Compass },
  { id: 'opportunities', label: 'Opportunities', href: '/opportunities', icon: Briefcase, badge: '12' },
  { id: 'playbook', label: 'Playbook', href: '/playbook', icon: BookOpen },
  { id: 'Forge', label: 'Forge', href: '/forge', icon: Lightbulb },

];

export default function ClipCutNavbar(): React.ReactElement {
  const [activeTab, setActiveTab] = useState<string>('explore');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 font-sans selection:bg-zinc-800 selection:text-zinc-100 ${
        isScrolled
          ? 'bg-[#090a0f]/85 backdrop-blur-xl border-b border-zinc-800/80 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-2.5'
          : 'bg-[#090a0f]/60 backdrop-blur-md border-b border-zinc-800/40 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          <a
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-lg py-1"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-100 group-hover:border-zinc-700 group-hover:bg-zinc-850 transition-all duration-200 shadow-sm">
              <Scissors className="w-4 h-4 text-zinc-200 -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-out" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-base font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                ClipCut
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1 p-1 bg-zinc-900/60 border border-zinc-800/80 rounded-full backdrop-blur-md shadow-inner">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              const Icon = item.icon;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.id);
                  }}
                  className={`relative flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 ${
                    isActive
                      ? 'text-zinc-100 bg-zinc-800/90 border border-zinc-700/60 shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/30'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 transition-colors ${isActive ? 'text-zinc-200' : 'text-zinc-500'}`} />
                  <span>{item.label}</span>

                  {item.badge && (
                    <span className="px-1.5 py-0.2 text-[10px] font-mono font-semibold bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700/50">
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            
            <a
              href="/post-campaign"
              className="px-3.5 py-1.5 rounded-lg text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-800 hover:bg-zinc-850 hover:text-zinc-100 hover:border-zinc-700 transition-all duration-200 flex items-center gap-1.5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
              <span>Post Job</span>
            </a>

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsProfileOpen((prev) => !prev)}
                className="flex items-center gap-2.5 pl-1.5 pr-2 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 group"
              >
                {/* Avatar Image / Initials */}
                <div className="relative w-6 h-6 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-500 border border-zinc-600 flex items-center justify-center text-[10px] font-bold text-white overflow-hidden shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="User Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="text-xs font-medium text-zinc-300 group-hover:text-zinc-100">
                  Suman
                </span>

                <ChevronDown className={`w-3.5 h-3.5 text-zinc-500 group-hover:text-zinc-300 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-[#0c0d12] border border-zinc-800 rounded-xl shadow-2xl p-1.5 space-y-1 z-50 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150">
                  
                  {/* Account Header */}
                  <div className="px-3 py-2 border-b border-zinc-800/80">
                    <p className="text-xs font-semibold text-zinc-100">Alex Morgan</p>
                    <p className="text-[11px] text-zinc-400 truncate">alex@creator.io</p>
                  </div>

                  {/* Links */}
                  <a
                    href="/profile"
                    className="flex items-center justify-between px-3 py-2 rounded-lg text-xs text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-zinc-400" />
                      Creator Profile
                    </span>
                    <ExternalLink className="w-3 h-3 text-zinc-500" />
                  </a>

                  <a
                    href="/settings"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900 transition-colors"
                  >
                    <Settings className="w-3.5 h-3.5 text-zinc-400" />
                    Account Settings
                  </a>

                  <div className="border-t border-zinc-800/80 my-1" />

                  <button
                    type="button"
                    onClick={() => alert('Signing out...')}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-red-400 hover:bg-red-500/10 transition-colors text-left"
                  >
                    <LogOut className="w-3.5 h-3.5 text-red-400" />
                    Sign Out
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* ================= 4. MOBILE MENU CONTROLS ================= */}
          <div className="flex items-center gap-2 md:hidden">
            
            <a
              href="/profile"
              className="w-8 h-8 rounded-full border border-zinc-800 overflow-hidden flex items-center justify-center bg-zinc-900"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </a>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-zinc-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* ================= 5. MOBILE DRAWER MENU ================= */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-zinc-800/80 bg-[#090a0f]/95 backdrop-blur-2xl px-4 py-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
          
          <nav className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeTab === item.id;
              const Icon = item.icon;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-zinc-800 text-zinc-100 border border-zinc-700/60'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-zinc-400" />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span className="px-2 py-0.5 text-xs font-mono bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700/50">
                      {item.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-zinc-800/80 flex flex-col gap-2">
            <a
              href="/post-campaign"
              className="w-full py-2.5 text-center rounded-lg bg-zinc-100 text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-colors shadow-sm"
            >
              Post Job Opportunity
            </a>
          </div>
        </div>
      )}
    </header>
  );
}