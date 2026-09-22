import {
  Play,
  Eye,
  ChevronRight,
  Flame,
} from "lucide-react";

const TOP_7_TRENDING_CLIPS = [
  {
    id: "clip-1",
    rank: 1,
    creatorName: "Elena Rostova",
    creatorHandle: "@elena_fx",
    creatorAvatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    clipThumbnail:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
    views: "52.4K",
    likes: "8.2K",
    campaignTitle: "Summer Product Launch",
    brandName: "AuraTech",
    earnings: 10480,
  },
  {
    id: "clip-2",
    rank: 2,
    creatorName: "Marcus Vance",
    creatorHandle: "@mvance_cuts",
    creatorAvatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    clipThumbnail:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&auto=format&fit=crop&q=80",
    views: "41.8K",
    likes: "6.4K",
    campaignTitle: "CyberGear RGB Teaser",
    brandName: "CyberGear",
    earnings: 10450,
  },
  {
    id: "clip-3",
    rank: 3,
    creatorName: "Kai Tanaka",
    creatorHandle: "@kaitanaka",
    creatorAvatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    clipThumbnail:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&auto=format&fit=crop&q=80",
    views: "38.2K",
    likes: "5.1K",
    campaignTitle: "FPV Mountain Chase",
    brandName: "AeroDrone",
    earnings: 11460,
  },
  {
    id: "clip-4",
    rank: 4,
    creatorName: "Maya Lin",
    creatorHandle: "@mayalin_3d",
    creatorAvatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    clipThumbnail:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80",
    views: "29.6K",
    likes: "3.9K",
    campaignTitle: "Summer Product Launch",
    brandName: "AuraTech",
    earnings: 5920,
  },
  {
    id: "clip-5",
    rank: 5,
    creatorName: "Lucas Rossi",
    creatorHandle: "@rossi_commercials",
    creatorAvatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    clipThumbnail:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=80",
    views: "24.1K",
    likes: "3.2K",
    campaignTitle: "Artisan Espresso Hacks",
    brandName: "Nourish",
    earnings: 4820,
  },
  {
    id: "clip-6",
    rank: 6,
    creatorName: "Devon Wright",
    creatorHandle: "@devon_cuts",
    creatorAvatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
    clipThumbnail:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80",
    views: "21.0K",
    likes: "2.8K",
    campaignTitle: "HydraFit Smart Bottle",
    brandName: "Pulse Fitness",
    earnings: 4200,
  },
  {
    id: "clip-7",
    rank: 7,
    creatorName: "Aria Chen",
    creatorHandle: "@ariachen_edit",
    creatorAvatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    clipThumbnail:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=80",
    views: "18.9K",
    likes: "2.4K",
    campaignTitle: "Chronograph Detail",
    brandName: "Zenith Watches",
    earnings: 4158,
  },
];


function trending() {
    function setActiveClipModal(clip: { id: string; rank: number; creatorName: string; creatorHandle: string; creatorAvatar: string; clipThumbnail: string; views: string; likes: string; campaignTitle: string; brandName: string; earnings: number; }): void {
        throw new Error("Function not implemented.");
    }

  return (
    <>
     <section className="space-y-4 pt-4 border-t border-zinc-800/60">
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400" />
                <h2 className="text-lg font-bold tracking-tight text-zinc-100">
                  🔥 Trending Clips
                </h2>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                See what’s taking off across ClipCut creators right now.
              </p>
            </div>
            <a
              href="/trending"
              className="text-xs font-medium text-zinc-400 hover:text-zinc-100 flex items-center gap-1 transition-colors"
            >
              <span>View Leaderboard</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Top 7 Horizontal Scrollable Leaderboard */}
          <div className="flex items-stretch gap-4 overflow-x-auto no-scrollbar pb-2">
            {TOP_7_TRENDING_CLIPS.map((clip) => (
              <div
                key={clip.id}
                onClick={() => setActiveClipModal(clip)}
                className="w-60 sm:w-64 shrink-0 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Clip Thumbnail */}
                  <div className="relative aspect-[9/12] bg-zinc-950 overflow-hidden">
                    <img
                      src={clip.clipThumbnail}
                      alt={clip.creatorName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-black/30" />

                    {/* Rank Badge */}
                    <div
                      className={`absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg text-xs font-mono font-extrabold border ${
                        clip.rank === 1
                          ? "bg-amber-400 text-black border-amber-300 shadow-lg"
                          : clip.rank === 2
                            ? "bg-zinc-200 text-black border-white"
                            : clip.rank === 3
                              ? "bg-amber-700 text-white border-amber-600"
                              : "bg-zinc-900/90 text-zinc-300 border-zinc-700"
                      }`}
                    >
                      #{clip.rank}
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-zinc-100 text-zinc-950 flex items-center justify-center shadow-xl">
                        <Play className="w-4 h-4 fill-zinc-950 ml-0.5" />
                      </div>
                    </div>

                    {/* Creator Info on Thumbnail */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center gap-2">
                      <img
                        src={clip.creatorAvatar}
                        alt={clip.creatorName}
                        className="w-6 h-6 rounded-full object-cover border border-zinc-700"
                      />
                      <div className="truncate">
                        <p className="text-xs font-semibold text-zinc-100 truncate">
                          {clip.creatorName}
                        </p>
                        <p className="text-[10px] text-zinc-400 font-mono truncate">
                          {clip.creatorHandle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Clip Performance Details */}
                  <div className="p-3 space-y-2">
                    <p className="text-[11px] text-zinc-400 font-mono truncate">
                      Campaign:{" "}
                      <span className="text-zinc-200">
                        {clip.campaignTitle}
                      </span>
                    </p>

                    <div className="flex items-center justify-between pt-1 border-t border-zinc-800/60 text-xs font-mono">
                      <span className="text-zinc-300 flex items-center gap-1">
                        <Eye className="w-3 h-3 text-zinc-500" />
                        {clip.views}
                      </span>
                      <span className="text-emerald-400 font-bold">
                        Rs. {clip.earnings.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
    </>
  )
}

export default trending
