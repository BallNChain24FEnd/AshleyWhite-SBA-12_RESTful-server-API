 // Temporary movie search controller
 export const searchMovies = (req, res) => {
   res.json({
     message: "Movie search route is working!",
     title: req.query.title || null,
   });
 };

 // Temporary movie details controller
 export const getMovieDetails = (req, res) => {
   res.json({
     message: "Movie details route is working!",
     imdbID: req.params.id,
   });
 };
