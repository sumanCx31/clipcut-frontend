import { useRef, useState, useEffect, type ComponentType, type SVGProps } from "react";
import {
  Play,
  Eye,
  Users,
  CheckCircle2,
  Flame,
  Film,
  Scissors,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Campaign = {
  id: string;
  brandName: string;
  brandAvatar: string;
  isVerifiedBrand: boolean;
  title: string;
  category: string;
  sourceThumbnail: string;
  duration: string;
  creatorBudget: number;
  remainingBudget: number;
  rewardPer1k: number;
  activeCreators: number;
  totalViews: string;
};

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type CampaignAction = (campaign: Campaign) => void;

type StatPillProps = {
  icon: IconComponent;
  value: string | number;
  label: string;
};

type CampaignCardProps = {
  campaign: Campaign;
  onPreview?: CampaignAction;
  onJoinClip?: CampaignAction;
};

type FeaturedCampaignCarouselProps = {
  campaigns?: Campaign[];
  onPreview?: CampaignAction;
  onJoinClip?: CampaignAction;
};

const FEATURED_CAMPAIGNS: Campaign[] = [
  {
    id: "camp-feat-1",
    brandName: "AuraTech Audio",
    brandAvatar:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=120&auto=format&fit=crop&q=80",
    isVerifiedBrand: true,
    title: "Summer Product Launch — NextGen ANC Earbuds Launch Film",
    category: "Tech",
    sourceThumbnail:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1200&auto=format&fit=crop&q=80",
    duration: "04:15 Source File",
    creatorBudget: 20000,
    remainingBudget: 18000,
    rewardPer1k: 200,
    activeCreators: 37,
    totalViews: "184K",
  },
  {
    id: "camp-feat-2",
    brandName: "Lumen Skincare",
    brandAvatar:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=120&auto=format&fit=crop&q=80",
    isVerifiedBrand: true,
    title: "Glow Serum Relaunch — Before/After Transformation Reel",
    category: "Beauty",
    sourceThumbnail:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&auto=format&fit=crop&q=80",
    duration: "02:48 Source File",
    creatorBudget: 15000,
    remainingBudget: 9000,
    rewardPer1k: 175,
    activeCreators: 52,
    totalViews: "266K",
  },
  {
    id: "camp-feat-3",
    brandName: "Voltage Sneakers",
    brandAvatar:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=120&auto=format&fit=crop&q=80",
    isVerifiedBrand: false,
    title: "Street Drop Vol. 3 — Unboxing & Try-On Challenge",
    category: "Fashion",
    sourceThumbnail:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=1200&auto=format&fit=crop&q=80",
    duration: "03:32 Source File",
    creatorBudget: 12000,
    remainingBudget: 11000,
    rewardPer1k: 220,
    activeCreators: 21,
    totalViews: "94K",
  },
];

function StatPill({ icon: Icon, value, label }: StatPillProps) {
  return (
    <div className="p-2.5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 flex items-center gap-2.5">
      <div className="p-1.5 rounded-lg bg-zinc-800 text-zinc-300">
        <Icon className="w-3.5 h-3.5" />
      </div>
      <div>
        <p className="text-xs font-bold text-zinc-100 font-mono leading-none">{value}</p>
        <p className="text-[10px] text-zinc-500 mt-0.5">{label}</p>
      </div>
    </div>
  );
}

function CampaignCard({ campaign, onPreview, onJoinClip }: CampaignCardProps) {
  const paidOut = campaign.creatorBudget - campaign.remainingBudget;
  const percentLeft = (campaign.remainingBudget / campaign.creatorBudget) * 100;

  return (
    <div className="min-w-full snap-center bg-zinc-900/50 border border-zinc-800/90 rounded-3xl overflow-hidden hover:border-zinc-700 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 shadow-2xl lg:h-[320px]">
      {/* Left: Video Thumbnail Preview */}
      <div
        onClick={() => onPreview?.(campaign)}
        className="lg:col-span-7 relative aspect-video lg:aspect-auto lg:h-full overflow-hidden bg-zinc-950 cursor-pointer group"
      >
        <img
          src={campaign.sourceThumbnail}
          alt={campaign.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />

        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono text-zinc-200 border border-white/10 flex items-center gap-1.5">
            <Film className="w-3 h-3 text-emerald-400" />
            Client Source Video
          </span>
          <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono text-zinc-400">
            {campaign.duration}
          </span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-zinc-100/90 text-zinc-950 flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 fill-zinc-950 ml-0.5" />
          </div>
        </div>

        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={campaign.brandAvatar}
              alt={campaign.brandName}
              className="w-7 h-7 rounded-full object-cover border border-zinc-700"
            />
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-semibold text-zinc-200">
                  {campaign.brandName}
                </span>
                {campaign.isVerifiedBrand && (
                  <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400" />
                )}
              </div>
              <p className="text-[10px] text-zinc-400 font-mono">
                Official Brand Campaign
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-zinc-300 bg-zinc-900/80 px-2.5 py-1 rounded-lg border border-zinc-800">
            Category: {campaign.category}
          </span>
        </div>
      </div>

      {/* Right: Campaign Economics & Action */}
      <div className="lg:col-span-5 p-4 sm:p-5 flex flex-col justify-between gap-3 bg-[#0c0d12] overflow-hidden">
        <div className="space-y-2.5">
          <h3 className="text-sm sm:text-base font-bold text-zinc-100 leading-snug line-clamp-2">
            {campaign.title}
          </h3>

          <div className="p-3 rounded-2xl bg-zinc-900/80 border border-zinc-800/80 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono">
                  Total Budget
                </p>
                <p className="text-lg font-extrabold text-zinc-100 font-mono leading-tight">
                  Rs. {campaign.creatorBudget.toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-zinc-400 uppercase tracking-wider font-mono">
                  Reward Rate
                </p>
                <p className="text-xs font-bold text-emerald-400 font-mono">
                  Rs. {campaign.rewardPer1k} / 1,000
                </p>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono">
                <span className="text-emerald-400 font-semibold">
                  Rs. {campaign.remainingBudget.toLocaleString()} left
                </span>
                <span className="text-zinc-500">
                  Rs. {paidOut.toLocaleString()} paid
                </span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                <div
                  className="h-full bg-emerald-500 rounded-full"
                  style={{ width: `${percentLeft}%` }}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <StatPill icon={Users} value={campaign.activeCreators} label="Active Creators" />
            <StatPill icon={Eye} value={campaign.totalViews} label="Total Views" />
          </div>
        </div>

        <button
          onClick={() => onJoinClip?.(campaign)}
          className="group relative w-full overflow-hidden rounded-xl px-4 py-2.5 font-semibold text-xs sm:text-sm text-zinc-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2"
        >
          <Scissors className="w-3.5 h-3.5 transition-transform group-hover:rotate-12" />
          Join Clip
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </button>
      </div>
    </div>
  );
}

export default function FeaturedCampaignCarousel({
  campaigns = FEATURED_CAMPAIGNS,
  onPreview,
  onJoinClip,
}: FeaturedCampaignCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(campaigns.length - 1, i));
    setIndex(clamped);
    trackRef.current?.children[clamped]?.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });
  };

  // Keep index in sync if the user swipes/scrolls manually
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const width = el.clientWidth;
        const i = Math.round(el.scrollLeft / width);
        setIndex(i);
      }, 100);
    };
    el.addEventListener("scroll", onScroll);
    return () => {
      el.removeEventListener("scroll", onScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="space-y-2.5">
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-orange-950/40 border border-orange-500/30 text-orange-400 text-xs font-semibold">
          <Flame className="w-3.5 h-3.5 fill-orange-400" />
          <span>Featured Opportunities</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-zinc-500 hidden sm:inline">
            Verified Creator Budget • No Platform Fee Included
          </span>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center hover:text-zinc-100 hover:border-zinc-700 disabled:opacity-30 disabled:hover:text-zinc-400 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => goTo(index + 1)}
              disabled={index === campaigns.length - 1}
              className="w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 flex items-center justify-center hover:text-zinc-100 hover:border-zinc-700 disabled:opacity-30 disabled:hover:text-zinc-400 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel track */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar gap-4 -mx-1 px-1"
        style={{ scrollbarWidth: "none" }}
      >
        {campaigns.map((campaign) => (
          <CampaignCard
            key={campaign.id}
            campaign={campaign}
            onPreview={onPreview}
            onJoinClip={onJoinClip}
          />
        ))}
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-1.5 pt-1">
        {campaigns.map((c, i) => (
          <button
            key={c.id}
            onClick={() => goTo(i)}
            aria-label={`Go to campaign ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-5 bg-emerald-400" : "w-1.5 bg-zinc-700 hover:bg-zinc-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
}