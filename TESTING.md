# SBA 12 - Movie Finder API Testing

## Local Server
- Port: 3015
- Framework: Express
- HTTP Client: Axios
- External API: OMDb

## Endpoint Testing

| Endpoint | Expected Result | Status |
|---|---|---|
| GET / | Welcome message | Passed |
| GET /api/search?title=batman | Movie search results | Passed |
| GET /api/movies/tt0372784 | Batman Begins details | Passed |
| GET /api/search | HTTP 400 validation error | Passed |
| GET /api/search?title= | HTTP 400 validation error | Passed |

## Security Checks
- API key stored in .env
- .env excluded by .gitignore
- No API key hardcoded in source files

## Error Handling
- Both controllers use try...catch
- Axios requests have timeout protection
- Error responses return JSON

## API Usage
- Batman search: 1 OMDb request
- Batman Begins details: 1 OMDb request
- Total reported live tests: 2 requests

## Notes
The application uses separate routes and controllers.
The Express server runs on localhost:3015.
