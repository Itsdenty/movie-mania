/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *     type: apiKey
 *     name: USER-KEY
 *     in: header
 * definition:
 *   Search:
 *     properties:
 *       Title:
 *         type: string
 *       Year:
 *         type: string
 *       imdbID:
 *         type: string
 *       Type:
 *         type: string
 *       Poster:
 *         type: string
 *   Rating:
 *     properties:
 *       Source:
 *         type: string
 *       Volume:
 *         type: string
 *   MovieDetails:
 *     properties:
 *       Title:
 *         type: string
 *       Year:
 *         type: string
 *       Rated:
 *         type: string
 *       Released:
 *         type: string
 *       Runtime:
 *         type: string
 *       Genre:
 *         type: string
 *       Director:
 *         type: string
 *       Writer:
 *         type: string
 *       Actors:
 *         type: string
 *       Plot:
 *         type: string
 *       Language:
 *         type: string
 *       Country:
 *         type: string
 *       Awards:
 *         type: string
 *       Poster:
 *         type: string
 *       Ratings:
 *         type: array
 *         items:
 *           $ref: '#/definitions/Rating'
 *       Metascore:
 *         type: string
 *       imdbRating:
 *         type: string
 *       imdbVotes:
 *         type: string
 *       imdbID:
 *         type: string
 *       Type:
 *         type: string
 *       DVD:
 *         type: string
 *       BoxOffice:
 *         type: string
 *       Production:
 *         type: string
 *       Website:
 *         type: string
 *       Response:
 *         type: string
 *   SearchResponse:
 *     properties:
 *       Search:
 *         type: array
 *         items:
 *           $ref: '#/definitions/Search'
 *       totalResults:
 *         type: number
 *       Response:
 *         type: boolean
 */

/**
 * @swagger
 * /movie/details/{id}:
 *   get:
 *     tags:
 *       - Movie details
 *     description: Get movie Details
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Movie detail retrieved successfully successfully
 *         schema:
 *           $ref: '#/definitions/MovieDetails'
 *       400:
 *         description: invalid request body
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */

/**
 * @swagger
 * /movie/search/{query}:
 *   get:
 *     tags:
 *       - Search
 *     description: Search for a movie
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: query
 *         description: Search query
 *         in: path
 *         required: true
 *         type: string
 *       - name: page
 *         description: Search pagination
 *         in: query
 *         type: number
 *     responses:
 *       200:
 *         description: Search successfully retrieved
 *         schema:
 *           $ref: '#/definitions/SearchResponse'
 *       400:
 *         description: invalid request body
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */