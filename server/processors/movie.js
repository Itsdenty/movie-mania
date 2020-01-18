/* eslint-disable camelcase */
// import database from '../database/orm';
import omdb from '../database/omdb';
import redis from '../database/redis';
import log from '../utils/logger';
import serverErrors from '../utils/serverErrors';

/**
 * @description - Describes the movie processors
 */
class MovieProcessor {
  /**
   * @description - Gets movie search result
   * @param{Object} req - api request
   * @param{Object} res - route response
   * @return{json} the Category object
   */
  static async getSearch(query, page) {
    try {
      // find a customer with the auth id
      const cachedResponse = await redis.get(`s-${query}-${page}`);
      if (cachedResponse) {
        return JSON.parse(cachedResponse);
      }

      const response = await omdb.getSearch(query, page);

      let resp = JSON.parse(response);
      if (resp.Response === 'True') {
        redis.set(`s-${query}-${page}`, JSON.stringify(resp));
      } else {
        const err = serverErrors.ser1(500, resp.Error, 'query');
        throw resp.Error;
      }

      return resp;
    } catch (err) {
      // throw custom 500 error
      console.log('err',err);
      log.error(JSON.stringify({ error: err || 'an error occured' }));
      const error = serverErrors.ser1(500, err || "an error occured", 'id');
      throw error;
    }
  }

  /**
   * @description - Gets all department objects
   * @param{Object} req - api request
   * @param{Object} res - route response
   * @return{json} the department object
   */
  static async getDetails(id) {
    try {
      // find a customer with the auth id
      const cachedDetails = await redis.get(`t-${id}`);
      if (cachedDetails) {
        return JSON.parse(cachedDetails);
      }

      const details = await omdb.getDetails(id);
      let resp = JSON.parse(details);
      if (resp.Response === 'True') {
        redis.set(`t-${id}`, JSON.stringify(resp));
      } else {
        const err = serverErrors.ser1(500, resp.Error, 'id');
        throw resp.Error;
      }

      return resp;
    } catch (err) {
      console.log(err);
      // throw custom 500 error
      log.error(JSON.stringify({ error: 'an error occured' }));
      const error = serverErrors.ser1(500, err || 'an error occured', 'id');
      throw error;
    }
  }
}

export default MovieProcessor;
