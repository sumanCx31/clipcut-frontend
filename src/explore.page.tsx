import React, { useState, useEffect } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import Herosection from "./components/home-herosection";
import Trending from "./components/trending";
import Opportunity from "./components/oppurtunity";
import ClipCutNavbar from "./components/navbar";
import FeaturedCampaign from "./components/featured.campaign";

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "trending", label: "🔥 Trending" },
  { id: "new", label: "⚡ New" },
  { id: "tech", label: "Tech" },
  { id: "gaming", label: "Gaming" },
  { id: "fashion", label: "Fashion" },
  { id: "fitness", label: "Fitness" },
  { id: "food", label: "Food" },
  { id: "lifestyle", label: "Lifestyle" },
];

export default function ClipCutExplorePage(): React.ReactElement {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");


  return (
    <div className="min-h-screen bg-[#08090e] text-zinc-100 font-sans selection:bg-zinc-800 selection:text-white pb-24">
      <ClipCutNavbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 space-y-12">
        <section className="relative pt-4 pb-2">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-28 bg-zinc-800/20 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative max-w-2xl mx-auto text-center space-y-3">
            <div>
              <Herosection />
            </div>

            <div className="pt-2">
              <div className="relative flex items-center max-w-xl mx-auto">
                <Search className="w-4 h-4 absolute left-4 text-zinc-500 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search campaigns, creators, or videos..."
                  className="w-full pl-11 pr-24 py-3 bg-zinc-900/90 border border-zinc-800 rounded-2xl text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all shadow-inner"
                />
                <div className="absolute right-3 flex items-center gap-1.5">
                  <span className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700/60 text-[10px] font-mono text-zinc-400">
                    ⌘K
                  </span>
                  <button
                    type="button"
                    className="p-1.5 rounded-lg bg-zinc-800 text-zinc-300 hover:text-white"
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Category Pills */}
            <div className="pt-3">
              <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-1">
                {CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 border ${
                        isActive
                          ? "bg-zinc-100 text-zinc-950 border-zinc-100 font-semibold shadow-sm"
                          : "bg-zinc-900/60 text-zinc-400 border-zinc-800/80 hover:text-zinc-200 hover:bg-zinc-800"
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <FeaturedCampaign />
        <Trending />
        <Opportunity />
      </main>
    </div>
  );
}
