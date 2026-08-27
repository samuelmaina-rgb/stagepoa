import { setOptions, importLibrary } from "@googlemaps/js-api-loader";

let initialized = false;

export async function initializeGoogleMaps() {
  if (!initialized) {
    setOptions({
      key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      v: "weekly",
    });

    initialized = true;
  }

  return importLibrary("places");
}