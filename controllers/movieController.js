   // Movie search controller
 export const searchMovies = (req, res) => {
   // Get the title from the query parameter
   const title = req.query.title;

   // Check if the title is missing or empty
   if (
     typeof title !== "string" ||
     title.trim() === ""
   ) {
     return res.status(400).json({
       error: "Title query parameter is required",
     });
   }

   // Temporary response until Axios is added
   res.json({
     message: "Movie search validation passed!",
     title: title.trim(),
   });
 };

 // Temporary movie details controller
 export const getMovieDetails = (req, res) => {
   res.json({
     message: "Movie details route is working!",
     imdbID: req.params.id,
   });
 };

