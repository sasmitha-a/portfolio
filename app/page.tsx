export default function HomePage() {
  return (
    <div className="min-h-screen flex items-start justify-start px-4 sm:px-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg.jpg')" }}>
      <div className="max-w-4xl absolute left-0 bottom-0 px-4 sm:px-8 py-8 text-left">
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
          Sasmitha
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light tracking-widest">
          ANALYST | DEVELOPER
        </p>
      </div>
    </div>
  )
}
