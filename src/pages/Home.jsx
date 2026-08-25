import heroImage from "../assets/heroimage.png";
function Home() {
  return (
    <main className="min-h-screen bg-[#D9D9D9]">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-black">
              Locate Your Matatu Stage Instantly
            </h1>

            <p className="mt-6 max-w-lg text-lg text-gray-500 font-medium">
              Don't Get Lost In The Chaotic CBD, Find Your Stage and Board Easily Using StagePoa
            </p>
          </div>

          
          <div className="h-full flex items-center justify-center">
  <img 
    src={heroImage} 
    alt="Find your matatu stage" 
    className="w-full h-auto max-h-96 object-contain rounded-[2rem]" 
  />
</div>

        </div>
      </section>
      
<section id="how-it-works" className="max-w-7xl mx-auto px-6 pb-16">
  <div className="border-2 border-black rounded-3xl p-6">

    
    <h2 className="text-3xl font-bold text-center mb-6">
      HOW STAGEPOA WORKS
    </h2>

    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      
      <div className="bg-[#676E7E] rounded-2xl p-5 border-2 border-black border-r-4 border-b-4">
        <div className="w-9 h-9 rounded-full bg-[#10B981] text-black flex items-center justify-center font-extrabold text-sm border-2 border-black">
          01
        </div>

        <h3 className="mt-4 text-lg font-extrabold text-white">
          SEARCH DESTINATION
        </h3>

        <p className="mt-2 text-sm text-white/70">
          Type where you want to go. Our smart system cross-references all known Nairobi saccos and routes.
        </p>
      </div>

      
      <div className="bg-[#676E7E] rounded-2xl p-5 border-2 border-black border-r-4 border-b-4">
        <div className="w-9 h-9 rounded-full bg-[#10B981] text-black flex items-center justify-center font-extrabold text-sm border-2 border-black">
          02
        </div>

        <h3 className="mt-4 text-lg font-extrabold text-white">
          GET EXACT STAGE
        </h3>

        <p className="mt-2 text-sm text-white/70">
          Receive exact stage names, map coordinates and visual landmarks
        </p>
      </div>

      
      <div className="bg-[#676E7E] rounded-2xl p-5 border-2 border-black border-r-4 border-b-4">
        <div className="w-9 h-9 rounded-full bg-[#10B981] text-black flex items-center justify-center font-extrabold text-sm border-2 border-black">
          03
        </div>

        <h3 className="mt-4 text-lg font-extrabold text-white">
          BOARD & RIDE
        </h3>

        <p className="mt-2 text-sm text-white/70">
          See standard fares, current queue levels, sacco ratings and catch the best matatu without hassle.
        </p>
      </div>

    </div>
  </div>
</section>

<section id="find-a-stage" className="max-w-7xl mx-auto px-6 pb-16">
  <div className="border-2 border-black rounded-3xl p-6">

    
    <h2 className="text-xl font-bold mb-4">
      Where are you going?
    </h2>

    
    <div className="flex flex-col md:flex-row gap-3">

      
      <div className="flex-1">
        <label className="block text-sm font-bold mb-2">
          From
        </label>

        <input
          type="text"
          placeholder="Enter your current location"
          className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 outline-none focus:border-[#10B981]"
        />
      </div>

      
      <div className="flex-1">
        <label className="block text-sm font-bold mb-2">
          To
        </label>

        <input
          type="text"
          placeholder="Enter your destination"
          className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 outline-none focus:border-[#10B981]"
        />
      </div>

      
      <div className="flex items-end">
        <button
          className="bg-[#10B981] hover:bg-[#10B981] text-white px-5 py-3 rounded-xl font-extrabold border-2 border-black border-r-4 border-b-4 transition"
        >
          Search
        </button>
      </div>

    </div>

    
    <div className="mt-6">
      <p className="text-sm font-bold mb-3">
        Popular destinations
      </p>

      <div className="flex flex-wrap gap-3">

        <button className="bg-white border-2 border-black rounded-full px-4 py-2 text-sm font-bold hover:bg-[#10B981] transition">
          Dagoretti
        </button>

        <button className="bg-white border-2 border-black rounded-full px-4 py-2 text-sm font-bold hover:bg-[#10B981] transition">
          Kitengela
        </button>

        <button className="bg-white border-2 border-black rounded-full px-4 py-2 text-sm font-bold hover:bg-[#10B981] transition">
          Kilimani
        </button>

      </div>
    </div>

  </div>
</section>

      
    </main>
  )
}

export default Home