import React from 'react'
import {
  Scissors,
  Briefcase,
  Play,
  ChevronRight,
  CheckCircle2,

} from "lucide-react";

const FRESH_CAMPAIGNS= [
  {
    id: "camp-1",
    brandName: "Pulse Fitness",
    brandAvatar:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=120&auto=format&fit=crop&q=80",
    isVerifiedBrand: true,
    title: "HydraFit Smart Bottle — 30s Kinetic Workout Cut",
    category: "Fitness",
    sourceThumbnail:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
    duration: "02:45 Source File",
    creatorBudget: 15000,
    remainingBudget: 12400,
    rewardPer1k: 200,
    activeCreators: 24,
    totalViews: "96.2K",
    rawTotalViews: 96200,
    tags: ["Fitness", "Kinetic", "UGC"],
  },
  {
    id: "camp-2",
    brandName: "CyberGear Lab",
    brandAvatar:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80",
    isVerifiedBrand: true,
    title: "Titan RGB Mechanical Keyboard Gameplay Teaser",
    category: "Gaming",
    sourceThumbnail:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
    duration: "05:20 Source File",
    creatorBudget: 30000,
    remainingBudget: 24100,
    rewardPer1k: 250,
    activeCreators: 52,
    totalViews: "230.5K",
    rawTotalViews: 230500,
    tags: ["Gaming", "RGB", "Keyboards"],
  },
  {
    id: "camp-3",
    brandName: "Verve Streetwear",
    brandAvatar:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=120&auto=format&fit=crop&q=80",
    isVerifiedBrand: false,
    title: "Autumn Oversized Hoodie Capsule Collection Lookbook",
    category: "Fashion",
    sourceThumbnail:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop&q=80",
    duration: "01:30 Source File",
    creatorBudget: 10000,
    remainingBudget: 6200,
    rewardPer1k: 180,
    activeCreators: 19,
    totalViews: "68.4K",
    rawTotalViews: 68400,
    tags: ["Streetwear", "Lookbook"],
  },
  {
    id: "camp-4",
    brandName: "Nourish Kitchen",
    brandAvatar:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=120&auto=format&fit=crop&q=80",
    isVerifiedBrand: true,
    title: "15-Minute Artisan Espresso Drinks & Cold Brew Hacks",
    category: "Food",
    sourceThumbnail:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=80",
    duration: "03:10 Source File",
    creatorBudget: 12500,
    remainingBudget: 9800,
    rewardPer1k: 200,
    activeCreators: 28,
    totalViews: "112.0K",
    rawTotalViews: 112000,
    tags: ["Food", "Coffee", "Recipes"],
  },
  {
    id: "camp-5",
    brandName: "AeroDrone Co.",
    brandAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    isVerifiedBrand: true,
    title: "AeroX FPV Mountain Chase Cinematic B-Roll Raw Footage",
    category: "Tech",
    sourceThumbnail:
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&auto=format&fit=crop&q=80",
    duration: "08:45 Source File",
    creatorBudget: 40000,
    remainingBudget: 31200,
    rewardPer1k: 300,
    activeCreators: 64,
    totalViews: "340.8K",
    rawTotalViews: 340800,
    tags: ["FPV", "Drone", "4K Cinematic"],
  },
  {
    id: "camp-6",
    brandName: "Zenith Watches",
    brandAvatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
    isVerifiedBrand: true,
    title: "Automatic Skeleton Chronograph Macro Detail Shots",
    category: "Lifestyle",
    sourceThumbnail:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    duration: "02:15 Source File",
    creatorBudget: 18000,
    remainingBudget: 14500,
    rewardPer1k: 220,
    activeCreators: 31,
    totalViews: "142.1K",
    rawTotalViews: 142100,
    tags: ["Watches", "Luxury", "Macro"],
  },
];

function oppurtunity() {
    function setActiveSourceVideoModal(camp: { id: string; brandName: string; brandAvatar: string; isVerifiedBrand: boolean; title: string; category: string; sourceThumbnail: string; duration: string; creatorBudget: number; remainingBudget: number; rewardPer1k: number; activeCreators: number; totalViews: string; rawTotalViews: number; tags: string[]; }): void {
        throw new Error('Function not implemented.');
    }

    function handleOpenClipDrawer(camp: { id: string; brandName: string; brandAvatar: string; isVerifiedBrand: boolean; title: string; category: string; sourceThumbnail: string; duration: string; creatorBudget: number; remainingBudget: number; rewardPer1k: number; activeCreators: number; totalViews: string; rawTotalViews: number; tags: string[]; }, e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        throw new Error('Function not implemented.');
    }

  return (
    <div>
       <section className="space-y-4">
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-zinc-300" />
                <h2 className="text-lg font-bold tracking-tight text-zinc-100">
                  Fresh Opportunities
                </h2>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                New campaigns ready for your next clip.
              </p>
            </div>
            <a
              href="/opportunities"
              className="text-xs font-medium text-zinc-400 hover:text-zinc-100 flex items-center gap-1 transition-colors"
            >
              <span>View All Campaigns</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Campaign Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FRESH_CAMPAIGNS.map((camp) => (
              <div
                key={camp.id}
                onClick={() => setActiveSourceVideoModal(camp)}
                className="group relative bg-zinc-900/40 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-zinc-950">
                    <img
                      src={camp.sourceThumbnail}
                      alt={camp.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-black/20" />

                    {/* Source File Duration */}
                    <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono text-zinc-300 border border-white/10">
                      {camp.duration}
                    </div>

                    {/* Reward Rate Badge */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-emerald-950/90 backdrop-blur-md text-[10px] font-mono font-semibold text-emerald-400 border border-emerald-500/30">
                      Rs. {camp.rewardPer1k} / 1K Views
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-zinc-100 text-zinc-950 flex items-center justify-center shadow-lg">
                        <Play className="w-4 h-4 fill-zinc-950 ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4 space-y-3">
                    {/* Brand */}
                    <div className="flex items-center gap-2">
                      <img
                        src={camp.brandAvatar}
                        alt={camp.brandName}
                        className="w-5 h-5 rounded-full object-cover"
                      />
                      <span className="text-xs font-semibold text-zinc-300">
                        {camp.brandName}
                      </span>
                      {camp.isVerifiedBrand && (
                        <CheckCircle2 className="w-3 h-3 text-zinc-400" />
                      )}
                    </div>

                    <h3 className="text-sm font-semibold text-zinc-100 line-clamp-2 leading-snug group-hover:text-white">
                      {camp.title}
                    </h3>

                    {/* Economics Breakdown */}
                    <div className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-800/60 space-y-2 text-xs font-mono">
                      <div className="flex items-center justify-between text-zinc-300">
                        <span className="text-zinc-500 text-[11px]">
                          Remaining Budget:
                        </span>
                        <span className="font-bold text-emerald-400">
                          Rs. {camp.remainingBudget.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                        <span>Active Creators: {camp.activeCreators}</span>
                        <span>Total Views: {camp.totalViews}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-4 pt-0">
                  <button
                    type="button"
                    onClick={(e) => handleOpenClipDrawer(camp, e)}
                    className="w-full py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-100 text-zinc-200 hover:text-zinc-950 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Scissors className="w-3.5 h-3.5" />
                    <span>Create a Clip</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
    </div>
  )
}

export default oppurtunity
