import React from 'react'
import {
  Sparkles,
  Play,
  ArrowRight,
} from "lucide-react";
export const PICKED_FOR_YOU = [
  {
    id: "pick-1",
    brandName: "SoundWave Inc",
    brandAvatar:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&auto=format&fit=crop&q=80",
    isVerifiedBrand: true,
    title: "Studio Monitor Speakers — Bass Isolation Test B-Roll",
    category: "Tech",
    sourceThumbnail:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80",
    duration: "03:40 Source File",
    creatorBudget: 22000,
    remainingBudget: 19100,
    rewardPer1k: 220,
    activeCreators: 18,
    totalViews: "72.4K",
    rawTotalViews: 72400,
    tags: ["Matched 98%", "Sound Design"],
  },
  {
    id: "pick-2",
    brandName: "Apex Performance",
    brandAvatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&q=80",
    isVerifiedBrand: true,
    title: "Pre-Workout Energy Mix — High Energy Transition Pack",
    category: "Fitness",
    sourceThumbnail:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&auto=format&fit=crop&q=80",
    duration: "01:50 Source File",
    creatorBudget: 16000,
    remainingBudget: 11800,
    rewardPer1k: 200,
    activeCreators: 22,
    totalViews: "84.0K",
    rawTotalViews: 84000,
    tags: ["Matched 95%", "High Retention"],
  },
];

function pickedforyou() {
    function setActiveSourceVideoModal(camp: { id: string; brandName: string; brandAvatar: string; isVerifiedBrand: boolean; title: string; category: string; sourceThumbnail: string; duration: string; creatorBudget: number; remainingBudget: number; rewardPer1k: number; activeCreators: number; totalViews: string; rawTotalViews: number; tags: string[]; }): void {
        throw new Error('Function not implemented.');
    }

    function handleOpenClipDrawer(camp: { id: string; brandName: string; brandAvatar: string; isVerifiedBrand: boolean; title: string; category: string; sourceThumbnail: string; duration: string; creatorBudget: number; remainingBudget: number; rewardPer1k: number; activeCreators: number; totalViews: string; rawTotalViews: number; tags: string[]; }, e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        throw new Error('Function not implemented.');
    }

  return (
    <div>
      
      <section className="space-y-4 pt-4 border-t border-zinc-800/60">
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-zinc-300" />
                <h2 className="text-lg font-bold tracking-tight text-zinc-100">
                  Picked for You
                </h2>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Recommendations tailored to your clip editing history and
                interest categories.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PICKED_FOR_YOU.map((camp) => (
              <div
                key={camp.id}
                onClick={() => setActiveSourceVideoModal(camp)}
                className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-4 hover:border-zinc-700 transition-all duration-200 cursor-pointer flex flex-col sm:flex-row gap-4"
              >
                <div className="relative w-full sm:w-48 aspect-video rounded-xl overflow-hidden bg-zinc-950 shrink-0">
                  <img
                    src={camp.sourceThumbnail}
                    alt={camp.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-zinc-100/90 text-zinc-950 flex items-center justify-center">
                      <Play className="w-3.5 h-3.5 fill-zinc-950 ml-0.5" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between space-y-2 w-full">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-500/20">
                        {camp.tags[0]}
                      </span>
                      <span className="text-xs font-mono text-emerald-400 font-semibold">
                        Rs. {camp.rewardPer1k} / 1K
                      </span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-semibold text-zinc-100 mt-1.5">
                      {camp.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-zinc-800/60">
                    <span className="text-[11px] font-mono text-zinc-400">
                      Budget: Rs. {camp.remainingBudget.toLocaleString()} left
                    </span>
                    <button
                      type="button"
                      onClick={(e) => handleOpenClipDrawer(camp, e)}
                      className="text-xs font-semibold text-zinc-200 hover:text-white flex items-center gap-1"
                    >
                      <span>Clip Now</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
    </div>
  )
}

export default pickedforyou