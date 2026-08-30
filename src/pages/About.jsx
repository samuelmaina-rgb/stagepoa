import { MapPin, Search, Heart, Navigation } from "lucide-react";

function About() {
  return (
    <main className="min-h-screen bg-[#D9D9D9] px-4 md:px-6 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <section className="bg-[#D9D9D9] border-2 border-black border-r-4 border-b-4 rounded-2xl p-8 md:p-12">
          <p className="text-[#10B981] font-extrabold uppercase tracking-wide">
            About StagePoa
          </p>

          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold text-black leading-tight">
            Making Nairobi's matatu network easier to navigate.
          </h1>

          <p className="mt-5 max-w-3xl text-gray-700 text-lg leading-relaxed font-medium">
            StagePoa helps you find matatu stages, discover routes,
            compare fares and get directions to the stage you need.
            No more guessing where to board your matatu.
          </p>
        </section>

        {/* What is StagePoa */}
        <section className="mt-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            What is StagePoa?
          </h2>

          <p className="mt-4 max-w-4xl text-gray-700 leading-relaxed font-medium">
            Getting around Nairobi can be confusing, especially when
            you're unfamiliar with the city's matatu stages. StagePoa
            was created to make that experience simpler by bringing
            useful stage and route information together in one place.
          </p>

          <p className="mt-4 max-w-4xl text-gray-700 leading-relaxed font-medium">
            Whether you're travelling to work, school, meeting friends,
            or exploring a new part of Nairobi, StagePoa helps you
            understand where to go and how to get there.
          </p>
        </section>

        {/* Features */}
        <section className="mt-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            What you can do with StagePoa
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">

            {/* Find Stages */}
            <div className="bg-[#D9D9D9] border-2 border-black border-r-4 border-b-4 rounded-2xl p-6">
              <div className="w-12 h-12 bg-#D9D9D9 text-[#10B981] rounded-xl flex items-center justify-center">
                <Search size={24} />
              </div>

              <h3 className="mt-5 text-xl font-extrabold">
                Find Stages
              </h3>

              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                Search for stages that serve your destination.
              </p>
            </div>

            {/* Discover Routes */}
            <div className="bg-[#D9D9D9] border-2 border-black border-r-4 border-b-4 rounded-2xl p-6">
              <div className="w-12 h-12 bg-#D9D9D9 text-[#10B981] rounded-xl flex items-center justify-center">
                <MapPin size={24} />
              </div>

              <h3 className="mt-5 text-xl font-extrabold">
                Discover Routes
              </h3>

              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                See routes, SACCOs, fares and estimated waiting times.
              </p>
            </div>

            {/* Save Stages */}
            <div className="bg-[#D9D9D9] border-2 border-black border-r-4 border-b-4 rounded-2xl p-6">
              <div className="w-12 h-12 bg-#D9D9D9 text-[#10B981] rounded-xl flex items-center justify-center">
                <Heart size={24} />
              </div>

              <h3 className="mt-5 text-xl font-extrabold">
                Save Stages
              </h3>

              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                Save your frequently used stages for quick access.
              </p>
            </div>

            {/* Get Directions */}
            <div className="bg-[#D9D9D9] border-2 border-black border-r-4 border-b-4 rounded-2xl p-6">
              <div className="w-12 h-12 bg-#D9D9D9 text-[#10B981] rounded-xl flex items-center justify-center">
                <Navigation size={24} />
              </div>

              <h3 className="mt-5 text-xl font-extrabold">
                Get Directions
              </h3>

              <p className="mt-2 text-gray-700 text-sm leading-relaxed">
                Get directions from your location to the selected stage.
              </p>
            </div>

          </div>
        </section>

        {/* Our Mission */}
        <section className="mt-12 mb-10 bg-[#D9D9D9] rounded-2xl p-8 md:p-10 border-2 border-black border-r-4 border-b-4">
          <h2 className="text-3xl font-extrabold text-[#10B981]">
            Our Mission
          </h2>

          <p className="mt-4 text-gray-700 max-w-4xl leading-relaxed font-medium">
            Our goal is simple: make public transport navigation in
            Nairobi easier, clearer and more accessible for everyone.
          </p>
        </section>

      </div>
    </main>
  );
}

export default About;