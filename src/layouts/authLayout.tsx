import React from "react";
import { Outlet } from "react-router-dom";
import { Scissors, ShieldCheck, Lock } from "lucide-react";

export default function AuthLayout(): React.ReactElement {
  return (
    <div className="relative min-h-screen w-full bg-[#090a0f] text-slate-200 flex items-center justify-center p-4 sm:p-6 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-900/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-slate-800/20 rounded-full blur-[90px] pointer-events-none" />
      <div className="relative w-full max-w-[420px] my-auto">
        <div className="absolute -inset-[1px] bg-gradient-to-b from-slate-700/50 via-slate-800/20 to-slate-900/50 rounded-[24px] pointer-events-none" />
        <div className="relative bg-[#0d0f17]/90 backdrop-blur-xl rounded-[23px] p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-7">
          <div className="flex flex-col items-center text-center space-y-4"></div>

          {/* Dynamic Route Content */}
          <div className="relative">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
