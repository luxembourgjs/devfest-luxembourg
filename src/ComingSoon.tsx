import devFest1Img from "@/imports/dev_fest-1.png"

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center select-none">
      <div className="max-w-md w-full flex flex-col items-center">
        <img
          src={devFest1Img}
          alt="DevFest Luxembourg"
          className="w-64 sm:w-80 h-auto mb-6"
        />
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
          Coming soon
        </h1>
      </div>
    </main>
  )
}
