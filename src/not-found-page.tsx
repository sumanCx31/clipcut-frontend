import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FileQuestion, Home, ArrowLeft, Search, Scissors, ShieldAlert } from 'lucide-react';

export default function NotFoundPage(): React.ReactElement {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 relative overflow-hidden font-sans">
      
      {/* Background Animated Ambient Lights */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-1000 pointer-events-none" />

      {/* Main Glassmorphic Wrapper */}
      <div className="relative w-full max-w-lg group">
        
        {/* Animated Glowing Outer Border */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-700" />

        <div className="relative bg-slate-900/90 border border-slate-800/80 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 shadow-2xl text-center space-y-6">
          
          {/* Top Brand Logo */}
          <div className="inline-flex items-center justify-center gap-2 bg-slate-950 border border-slate-800 rounded-full px-4 py-1.5 shadow-inner">
            <Scissors className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-semibold tracking-widest text-purple-300 uppercase">
              ClipVault Engine
            </span>
          </div>

          {/* Animated 404 Hero Visual */}
          <div className="relative flex items-center justify-center my-4">
            <span className="text-8xl sm:text-9xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 select-none opacity-20">
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-blue-600 p-0.5 shadow-xl shadow-purple-600/30 animate-bounce">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                  <FileQuestion className="w-8 h-8 text-purple-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Page Not Found
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xs mx-auto leading-relaxed">
              The page, campaign, or clip link you are looking for doesn't exist, was removed, or has moved.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto px-5 py-2.5 bg-slate-950 border border-slate-800 hover:bg-slate-800 hover:border-slate-700 rounded-xl text-slate-300 hover:text-white font-medium text-xs transition-all duration-200 flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Go Back</span>
            </button>

            <Link
              to="/login"
              className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-purple-600/25 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Useful Quick Links / Search Prompt */}
          <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-slate-400" />
              <span>Error Code: 404_NOT_FOUND</span>
            </span>
            <Link
              to="/help"
              className="text-purple-400 hover:text-purple-300 hover:underline transition-colors font-medium"
            >
              Contact Support
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}