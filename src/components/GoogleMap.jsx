import { useEffect, useRef } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

function GoogleMap({
  latitude,
  longitude,
  stages = [],
  zoom = 13,
}) {
  const mapRef = useRef(null);

  useEffect(() => {
    async function loadMap() {
      try {
        setOptions({
          key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
          v: "weekly",
        });

        const { Map, InfoWindow } =
          await importLibrary("maps");

        const { AdvancedMarkerElement } =
          await importLibrary("marker");

        const map = new Map(mapRef.current, {
          center: {
            lat: latitude,
            lng: longitude,
          },
          zoom,
          mapId: "DEMO_MAP_ID",
        });


        new AdvancedMarkerElement({
          map,
          position: {
            lat: latitude,
            lng: longitude,
          },
          title: "Your Location",
        });


        const infoWindow = new InfoWindow();

       

        stages.forEach((stage) => {
          const marker = new AdvancedMarkerElement({
            map,

            position: {
              lat: stage.latitude,
              lng: stage.longitude,
            },

            title: stage.stageName,
          });

          
          marker.addListener("click", () => {
            infoWindow.setContent(`
              <div style="padding: 5px;">
                <h3 style="
                  margin: 0 0 5px;
                  font-weight: 800;
                  font-size: 16px;
                ">
                  ${stage.stageName}
                </h3>

                <p style="
                  margin: 0;
                  color: #555;
                  font-size: 13px;
                ">
                  ${stage.distance
                    ? `${stage.distance.toFixed(1)} km away`
                    : "Stage location"}
                </p>
              </div>
            `);

            infoWindow.open({
              map,
              anchor: marker,
            });
          });
        });
      } catch (error) {
        console.error(
          "Google Maps failed:",
          error
        );
      }
    }

    if (
      latitude !== undefined &&
      longitude !== undefined
    ) {
      loadMap();
    }
  }, [latitude, longitude, stages, zoom]);

  return (
    <div
      ref={mapRef}
      className="w-full h-[450px] rounded-2xl border-2 border-black"
    />
  );
}

export default GoogleMap;