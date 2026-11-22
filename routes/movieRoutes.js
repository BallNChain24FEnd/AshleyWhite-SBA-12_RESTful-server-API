 import express from "express";

 // Import movie controller functions
 import {
   searchMovies,
   getMovieDetails,
 } from "../controllers/movieController.js";

 // Create a router
 const router = express.Router();

 // GET /api/search?title=batman
 router.get("/search", searchMovies);

 // GET /api/movies/tt0372784
 router.get("/movies/:id", getMovieDetails);

 // Export router for server.js
 export default router;
