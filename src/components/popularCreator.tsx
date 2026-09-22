import {
  ChevronRight,
  Users,
  CheckCircle2,

} from "lucide-react"; 

const POPULAR_CREATORS= [
  {
    id: "c1",
    name: "Alex Morgan",
    handle: "@alexmorgan",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    specialty: "Short-form Editor",
    followers: "12.4K",
    totalViews: "342K",
    clipsCreated: 128,
    rating: 4.98,
    isVerified: true,
  },
  {
    id: "c2",
    name: "David Kalu",
    handle: "@dkalu_cuts",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
    specialty: "Tech & Gaming Clips",
    followers: "29.1K",
    totalViews: "890K",
    clipsCreated: 210,
    rating: 4.95,
    isVerified: true,
  },
  {
    id: "c3",
    name: "Sarah Jenkins",
    handle: "@sjenkins_fx",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
    specialty: "Kinetic Motion VFX",
    followers: "18.4K",
    totalViews: "512K",
    clipsCreated: 94,
    rating: 4.9,
    isVerified: true,
  },
  {
    id: "c4",
    name: "Lucas Rossi",
    handle: "@rossi_commercials",
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=80",
    specialty: "Commercial & Fashion",
    followers: "35.6K",
    totalViews: "1.2M",
    clipsCreated: 340,
    rating: 5.0,
    isVerified: true,
  },
];

function popularCreator() {
  return (
    <div>
       <section className="space-y-4 pt-4 border-t border-zinc-800/60">
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-zinc-300" />
                <h2 className="text-lg font-bold tracking-tight text-zinc-100">
                  Creators to Watch
                </h2>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Top editors consistently generating viral reach.
              </p>
            </div>
            <a
              href="/creators"
              className="text-xs font-medium text-zinc-400 hover:text-zinc-100 flex items-center gap-1 transition-colors"
            >
              <span>View Roster</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {POPULAR_CREATORS.map((creator) => (
              <div
                key={creator.id}
                className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-4 hover:border-zinc-700 transition-all duration-200 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={creator.avatar}
                      alt={creator.name}
                      className="w-10 h-10 rounded-full object-cover border border-zinc-700"
                    />
                    <div>
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-semibold text-zinc-100">
                          {creator.name}
                        </span>
                        {creator.isVerified && (
                          <CheckCircle2 className="w-3 h-3 text-zinc-400" />
                        )}
                      </div>
                      <p className="text-[11px] text-zinc-500 font-mono">
                        {creator.specialty}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-1 p-2 rounded-xl bg-zinc-950/60 border border-zinc-800/60 text-center font-mono text-[10px]">
                    <div>
                      <p className="text-zinc-400">Followers</p>
                      <p className="font-semibold text-zinc-200">
                        {creator.followers}
                      </p>
                    </div>
                    <div>
                      <p className="text-zinc-400">Views</p>
                      <p className="font-semibold text-zinc-200">
                        {creator.totalViews}
                      </p>
                    </div>
                    <div>
                      <p className="text-zinc-400">Clips</p>
                      <p className="font-semibold text-zinc-200">
                        {creator.clipsCreated}
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href={`/creator/${creator.id}`}
                  className="w-full py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold transition-colors text-center block"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        </section>
    </div>
  )
}

export default popularCreator

 
