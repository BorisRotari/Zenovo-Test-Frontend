export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12">
      {/* Animated background */}
      <div className="animated-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl w-full px-4 sm:px-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
          Zenovo AI
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-3 sm:mb-4">
          Win More Proposals
        </p>
        <p className="text-slate-400 text-base sm:text-lg max-w-md mx-auto">
          The platform is currently under update. We&apos;ll be back soon with improvements.
        </p>
        <div className="mt-8 sm:mt-12 flex gap-3 sm:gap-4 justify-center flex-wrap">
          <span className="px-3 py-2 sm:px-4 rounded-lg bg-amber-500/20 text-amber-400 text-xs sm:text-sm font-medium backdrop-blur-sm">
            SaaS Platform
          </span>
          <span className="px-3 py-2 sm:px-4 rounded-lg bg-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium backdrop-blur-sm">
            Under Update
          </span>
        </div>
      </div>
    </main>
  )
}
