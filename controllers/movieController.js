import axios from "axios";

// Movie search controller
export const searchMovies = async (req, res) => {
  // Get the title from the query parameter
  const title = req.query.title;

  // Validate the movie title
  if (
    typeof title !== "string" ||
    title.trim() === ""
  ) {
    return res.status(400).json({
      error: "Title query parameter is required",
    });
  }

  try {
    // Request movie data from OMDb using Axios
    const response = await axios.get(
      "https://www.omdbapi.com/",
      {
        params: {
          s: title.trim(),
          apikey: process.env.OMDB_API_KEY,
        },
      }
    );

    // Return the movie search results as JSON
    res.json(response.data);
  } catch (error) {
    // Handle errors from the external API
    console.error("Movie search error:", error.message);

    res.status(500).json({
      error: "Failed to search movies",
    });
  }
};

// Temporary movie details controller
export const getMovieDetails = (req, res) => {
  res.json({
    message: "Movie details route is working!",
    imdbID: req.params.id,
  });
};
