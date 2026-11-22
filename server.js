 // Load environment variables
 import "dotenv/config";

 // Import Express and movie routes
 import express from "express";
 import movieRoutes from "./routes/movieRoutes.js";

 // Create the Express application
 const app = express();

 // Use port 3015 unless another port is configured
 const port = process.env.PORT || 3015;

 // Middleware to read JSON request bodies
 app.use(express.json());

 // Mount movie routes under /api
 app.use("/api", movieRoutes);

 // Home route to verify the server is running
 app.get("/", (req, res) => {
   res.json({ message: "Welcome to the Movie Finder API!" });
 });

 // Start the Express server
 app.listen(port, () => {
   console.log(`Movie Finder API running on http://localhost:${port}`);
 });
