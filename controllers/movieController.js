import axios from "axios";

// Search for movies by title
export const searchMovies = async (req, res) => {
  // Get the movie title from the URL
  const title = req.query.title;

  // Validate the title
  if (
    typeof title !== "string" ||
    title.trim() === ""
  ) {
    return res.status(400).json({
      error: "Title query parameter is required",
    });
  }

  try {
    // Request matching movies from OMDb
    const response = await axios.get(
      "https://www.omdbapi.com/",
      {
        params: {
          s: title.trim(),
          apikey: process.env.OMDB_API_KEY,
        },
        timeout: 5000,
      }
    );

    // Handle unsuccessful OMDb responses
    if (response.data.Response === "False") {
      return res.status(404).json({
        error: response.data.Error || "Movies not found",
      });
    }

    // Return the movie search results
    res.json(response.data);
  } catch (error) {
    // Handle Axios or network errors
    console.error("Movie search error:", error.message);

    res.status(500).json({
      error: "Failed to search movies",
    });
  }
};

// Get movie details using an IMDb ID
export const getMovieDetails = async (req, res) => {
  // Get the IMDb ID from the URL
  const id = req.params.id;

  try {
    // Request movie details from OMDb
    const response = await axios.get(
      "https://www.omdbapi.com/",
      {
        params: {
          i: id,
          apikey: process.env.OMDB_API_KEY,
        },
        timeout: 5000,
      }
    );

    // Handle unsuccessful OMDb responses
    if (response.data.Response === "False") {
      return res.status(404).json({
        error: response.data.Error || "Movie not found",
      });
    }

    // Return movie details
    res.json(response.data);
  } catch (error) {
    // Handle Axios or network errors
    console.error("Movie details error:", error.message);

    res.status(500).json({
      error: "Failed to fetch movie details",
    });
  }
};
