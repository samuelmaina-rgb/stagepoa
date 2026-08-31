import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

import stages from "../data/stages";
import searchStages from "../utilities/searchStages";
import { findStageLocation } from "../utilities/findStageLocation";
import GoogleMap from "../components/GoogleMap";
import { useFavorites } from "../context/FavoritesContext";

import { auth } from "../firebase/firebase";

function Results() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const { isFavorite, toggleFavorite } = useFavorites();

  const destination = searchParams.get("destination") || "";


  const [selectedSacco, setSelectedSacco] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [maxFare, setMaxFare] = useState("All");


  const [userLocation, setUserLocation] = useState(null);
  const [stageLocations, setStageLocations] = useState({});
  const [locationLoading, setLocationLoading] = useState(true);


  const destinationResults = useMemo(() => {
    return searchStages(stages, destination);
  }, [destination]);


  useEffect(() => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by this browser.");
      setLocationLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        console.log("USER LOCATION:", location);

        setUserLocation(location);
        setLocationLoading(false);
      },
      (error) => {
        console.error("Unable to get user location:", error);
        setLocationLoading(false);
      }
    );
  }, []);


  useEffect(() => {
    let cancelled = false;

    async function findMatchingStageLocations() {
      if (destinationResults.length === 0) {
        setStageLocations({});
        return;
      }

      const locations = {};

      for (const stage of destinationResults) {
        try {
          const location = await findStageLocation(stage.stageName);

          if (!cancelled && location) {
            locations[stage.id] = location;
          }
        } catch (error) {
          console.error(
            `Could not find location for ${stage.stageName}:`,
            error
          );
        }
      }

      if (!cancelled) {
        setStageLocations(locations);
      }
    }

    findMatchingStageLocations();

    return () => {
      cancelled = true;
    };
  }, [destinationResults]);


  const saccoOptions = useMemo(() => {
    const allSaccos = destinationResults.flatMap(
      (stage) => stage.saccos || []
    );

    return ["All", ...new Set(allSaccos)];
  }, [destinationResults]);

  const statusOptions = [
    "All",
    "clear",
    "crowded",
    "peak hour",
  ];

  const filteredResults = useMemo(() => {
    return destinationResults.filter((stage) => {
      const matchesSacco =
        selectedSacco === "All" ||
        (stage.saccos || []).includes(selectedSacco);

      const matchesStatus =
        selectedStatus === "All" ||
        stage.status?.toLowerCase() ===
          selectedStatus.toLowerCase();

      const stageMinFare =
        stage.routes?.length > 0
          ? Math.min(
              ...stage.routes.map(
                (route) => route.fare?.min ?? Infinity
              )
            )
          : Infinity;

      let matchesFare = true;

      if (maxFare !== "All") {
        matchesFare = stageMinFare <= Number(maxFare);
      }

      return matchesSacco && matchesStatus && matchesFare;
    });
  }, [
    destinationResults,
    selectedSacco,
    selectedStatus,
    maxFare,
  ]);



  function getStatusClasses(status) {
    const normalizedStatus = status?.toLowerCase();

    if (normalizedStatus === "clear") {
      return "bg-[#00E676] text-black";
    }

    if (normalizedStatus === "crowded") {
      return "bg-[#FF6D00] text-black";
    }

    if (normalizedStatus === "peak hour") {
      return "bg-[#FBBF24] text-black";
    }

    return "bg-gray-300 text-black";
  }


  function resetFilters() {
    setSelectedSacco("All");
    setSelectedStatus("All");
    setMaxFare("All");
  }



  function handleGetDirections(googleLocation) {
   
    if (!auth.currentUser) {
      navigate("/login");
      return;
    }

   
    if (!googleLocation || !userLocation) {
      return;
    }

    const directionsUrl =
      `https://www.google.com/maps/dir/?api=1` +
      `&origin=${userLocation.latitude},${userLocation.longitude}` +
      `&destination=${googleLocation.latitude},${googleLocation.longitude}`;

    window.open(
      directionsUrl,
      "_blank",
      "noopener,noreferrer"
    );
  }



  return (
    <main className="min-h-screen bg-[#D9D9D9] px-4 md:px-6 py-10">

      <div className="max-w-7xl mx-auto">

       

        <div className="mb-6">

          <h1 className="text-4xl md:text-5xl font-extrabold text-black">
            Results for {destination}
          </h1>

          <p className="mt-2 text-gray-500 font-medium">
            Stages serving this destination
          </p>

        </div>


       

        <div className="bg-[#676E7E]/35 border-2 border-black rounded-2xl p-4 mb-8">

          <div className="flex flex-col md:flex-row md:items-end gap-4">

           

            <div className="flex-1">

              <label className="block text-sm font-extrabold mb-2">
                SACCO
              </label>

              <select
                value={selectedSacco}
                onChange={(e) =>
                  setSelectedSacco(e.target.value)
                }
                className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 font-medium outline-none focus:border-[#10B981]"
              >

                {saccoOptions.map((sacco) => (
                  <option key={sacco} value={sacco}>
                    {sacco}
                  </option>
                ))}

              </select>

            </div>


            

            <div className="flex-1">

              <label className="block text-sm font-extrabold mb-2">
                STATUS
              </label>

              <select
                value={selectedStatus}
                onChange={(e) =>
                  setSelectedStatus(e.target.value)
                }
                className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 font-medium outline-none focus:border-[#10B981]"
              >

                {statusOptions.map((status) => (
                  <option key={status} value={status}>
                    {status === "All"
                      ? "All"
                      : status.charAt(0).toUpperCase() +
                        status.slice(1)}
                  </option>
                ))}

              </select>

            </div>


           

            <div className="flex-1">

              <label className="block text-sm font-extrabold mb-2">
                MAX FARE
              </label>

              <select
                value={maxFare}
                onChange={(e) =>
                  setMaxFare(e.target.value)
                }
                className="w-full bg-white border-2 border-black rounded-xl px-4 py-3 font-medium outline-none focus:border-[#10B981]"
              >

                <option value="All">
                  Any fare
                </option>

                <option value="50">
                  KSh 50 or less
                </option>

                <option value="80">
                  KSh 80 or less
                </option>

                <option value="100">
                  KSh 100 or less
                </option>

                <option value="150">
                  KSh 150 or less
                </option>

                <option value="200">
                  KSh 200 or less
                </option>

              </select>

            </div>


           

            <button
              onClick={resetFilters}
              className="bg-[#10B981] text-white px-5 py-3 rounded-xl font-extrabold border-2 border-black border-r-4 border-b-4 hover:translate-y-[1px] transition"
            >
              Reset
            </button>

          </div>

        </div>


        

        <div className="mb-4">

          <p className="font-bold text-black">
            {filteredResults.length}{" "}
            {filteredResults.length === 1
              ? "stage"
              : "stages"}{" "}
            found
          </p>

        </div>


        

        {destinationResults.length === 0 ? (

          <div className="bg-white border-2 border-black rounded-2xl p-8">

            <h2 className="text-2xl font-extrabold">
              No stages found
            </h2>

            <p className="mt-2 text-gray-500">
              We couldn't find a stage serving "{destination}".
            </p>

          </div>

        ) : filteredResults.length === 0 ? (

          <div className="bg-white border-2 border-black rounded-2xl p-8">

            <h2 className="text-2xl font-extrabold">
              No stages match your filters
            </h2>

            <p className="mt-2 text-gray-500">
              Try changing your SACCO, status or fare filters.
            </p>

            <button
              onClick={resetFilters}
              className="mt-5 bg-[#10B981] text-white px-5 py-3 rounded-xl font-extrabold border-2 border-black border-r-4 border-b-4"
            >
              Clear Filters
            </button>

          </div>

        ) : (

          

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {filteredResults.map((stage) => {

              const googleLocation =
                stageLocations[stage.id];

              return (

                <div
                  key={stage.id}
                  className="bg-[#676E7E]/35 rounded-2xl p-5 border-2 border-black border-r-4 border-b-4 flex flex-col"
                >

                 

                  <div className="flex items-start justify-between gap-3">

                    <div className="flex items-center gap-2 min-w-0">

                      <h2 className="text-2xl font-extrabold text-black">
                        {stage.stageName}
                      </h2>

                      

                      <button
                        onClick={() => toggleFavorite(stage)}
                        aria-label={
                          isFavorite(stage.id)
                            ? `Remove ${stage.stageName} from saved stages`
                            : `Save ${stage.stageName}`
                        }
                        className="shrink-0 p-1 rounded-full hover:bg-white/50 transition"
                      >

                        <Heart
                          size={24}
                          className={
                            isFavorite(stage.id)
                              ? "fill-[#10B981] text-[#10B981]"
                              : "text-black"
                          }
                        />

                      </button>

                    </div>

                    <span
                      className={`shrink-0 border-2 border-black rounded-full px-3 py-1 text-xs font-extrabold ${getStatusClasses(
                        stage.status
                      )}`}
                    >
                      {stage.status}
                    </span>

                  </div>


                  

                  <p className="mt-3 text-black/80 text-sm leading-relaxed">
                    {stage.description}
                  </p>


                  

                  <div className="mt-4">

                    <p className="font-extrabold text-black text-sm">
                      MATATU SACCOs
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">

                      {stage.saccos?.length > 0 ? (

                        stage.saccos.map((sacco) => (

                          <span
                            key={sacco}
                            className="text-[#FF6D00] font-extrabold text-sm"
                          >
                            {sacco}
                          </span>

                        ))

                      ) : (

                        <span className="text-black/60 text-sm">
                          Information unavailable
                        </span>

                      )}

                    </div>

                  </div>


                 

                  <div className="mt-5">

                    <p className="font-extrabold text-black text-sm mb-2">
                      ROUTES
                    </p>

                    <div className="space-y-2">

                      {stage.routes?.map(
                        (route, index) => (

                          <div
                            key={`${route.routeName}-${index}`}
                            className="bg-white/40 rounded-xl p-3"
                          >

                            <div className="flex items-center justify-between gap-3">

                              <p className="font-extrabold text-[#10B981]">
                                {route.routeName}
                              </p>

                              <p className="text-black font-bold text-sm">
                                → {route.destination}
                              </p>

                            </div>


                            <div className="mt-2 flex flex-wrap gap-3 text-xs font-bold text-black">

                              <span>
                                KSh{" "}
                                {route.fare?.min ?? "—"}
                                –
                                {route.fare?.max ?? "—"}
                              </span>

                              <span>
                                Wait:{" "}
                                {route.estimatedWaitTime ||
                                  "—"}
                              </span>

                            </div>

                          </div>

                        )
                      )}

                    </div>

                  </div>


                  

                  <div className="mt-auto pt-5">

                    {googleLocation &&
                    userLocation ? (

                      <button
                        onClick={() =>
                          handleGetDirections(
                            googleLocation
                          )
                        }
                        className="w-full inline-flex items-center justify-center bg-[#10B981] text-white px-4 py-3 rounded-xl font-extrabold border-2 border-black border-r-4 border-b-4 hover:translate-y-[1px] transition"
                      >
                        Get Directions
                      </button>

                    ) : (

                      <button
                        disabled
                        className="w-full bg-gray-300 text-gray-500 px-4 py-3 rounded-xl font-extrabold border-2 border-black border-r-4 border-b-4 cursor-not-allowed"
                      >
                        Finding Stage Location...
                      </button>

                    )}

                  </div>

                </div>

              );

            })}

          </div>

        )}


        

        <section className="mt-12">

          <div className="mb-4">

            <h2 className="text-3xl font-extrabold text-black">
              Find Your Way to the Stage
            </h2>

            <p className="mt-1 text-gray-500 font-medium">
              Your location and the first available stage are
              shown on the map.
            </p>

          </div>


          <div className="bg-[#676E7E]/35 border-2 border-black rounded-2xl p-3 border-r-4 border-b-4">

            {locationLoading ? (

              <div className="h-[400px] flex items-center justify-center">

                <p className="font-bold text-black">
                  Getting your location...
                </p>

              </div>

            ) : !userLocation ? (

              <div className="h-[400px] flex items-center justify-center">

                <p className="font-bold text-black">
                  Unable to get your current location.
                </p>

              </div>

            ) : filteredResults.length === 0 ? (

              <div className="h-[400px] flex items-center justify-center">

                <p className="font-bold text-black">
                  No stage available to display on the map.
                </p>

              </div>

            ) : (

              (() => {

                const firstStage =
                  filteredResults[0];

                const firstStageLocation =
                  stageLocations[firstStage.id];

                if (!firstStageLocation) {

                  return (

                    <div className="h-[400px] flex items-center justify-center">

                      <p className="font-bold text-black">
                        Finding the stage location...
                      </p>

                    </div>

                  );

                }

                return (

                  <GoogleMap
                    key={firstStage.id}
                    latitude={userLocation.latitude}
                    longitude={userLocation.longitude}
                    stageLatitude={
                      firstStageLocation.latitude
                    }
                    stageLongitude={
                      firstStageLocation.longitude
                    }
                    zoom={14}
                  />

                );

              })()

            )}

          </div>

        </section>

      </div>

    </main>
  );
}

export default Results;