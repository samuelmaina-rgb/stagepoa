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
    </main>
  )
}

export default Home