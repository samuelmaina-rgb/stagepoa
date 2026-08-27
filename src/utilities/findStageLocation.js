import { initializeGoogleMaps } from "./googleMaps";

export async function findStageLocation(stageName) {
  try {
    const { Place } = await initializeGoogleMaps();

    const request = {
      textQuery: `${stageName} stage Nairobi Kenya`,
      fields: [
        "id",
        "displayName",
        "formattedAddress",
        "location",
      ],
      maxResultCount: 1,
    };

    const { places } = await Place.searchByText(request);

    if (!places || places.length === 0) {
      console.warn(`No location found for ${stageName}`);
      return null;
    }

    const place = places[0];

    return {
      placeId: place.id,
      name: place.displayName,
      address: place.formattedAddress,
      latitude: place.location?.lat(),
      longitude: place.location?.lng(),
    };
  } catch (error) {
    console.error(`Failed to find ${stageName}:`, error);
    return null;
  }
}