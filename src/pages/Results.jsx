function Results() {
  return (
    <main className="min-h-screen bg-[#D9D9D9]">

      <section className="max-w-5xl mx-auto px-6 py-8">

        {/* Find a Stage */}
        <button className="flex items-center gap-2 text-sm font-extrabold mb-5 hover:text-[#10B981] transition">
          ← Find a Stage
        </button>

        {/* Search Bar */}
        <div className="border-2 border-black rounded-2xl bg-white p-2 flex items-center">

          {/* From */}
          <div className="flex-1 px-4 py-2 border-r-2 border-black">
            <p className="text-xs font-bold text-gray-500">
              FROM
            </p>

            <input
              type="text"
              placeholder="Enter current location"
              className="w-full bg-transparent outline-none text-sm font-bold mt-1"
            />
          </div>

          {/* To */}
          <div className="flex-1 px-4 py-2">
            <p className="text-xs font-bold text-gray-500">
              TO
            </p>

            <input
              type="text"
              placeholder="Enter destination"
              className="w-full bg-transparent outline-none text-sm font-bold mt-1"
            />
          </div>

          {/* Search */}
          <button
            className="
              bg-[#10B981]
              text-black
              px-5
              py-3
              rounded-xl
              font-extrabold
              text-sm
              border-2
              border-black
              border-r-4
              border-b-4
              hover:bg-[#10B981]
              transition
            "
          >
            Search
          </button>

        </div>

      </section>

    </main>
  );
}

export default Results;