function searchStages(stages, destination) {
  if (!destination || destination.trim() === "") {
    return [];
  }

  const searchTerm = destination.trim().toLowerCase();

  return stages
    .map((stage) => {
      const matchingRoutes = stage.routes.filter((route) =>
        route.destination.toLowerCase().includes(searchTerm)
      );

      return {
        ...stage,
        routes: matchingRoutes,
      };
    })
    .filter((stage) => stage.routes.length > 0);
}

export default searchStages;