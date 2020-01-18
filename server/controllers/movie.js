/* eslint-disable camelcase */
import processor from '../processors/movie';
import logger from '../utils/logger';

/**
 *
 *
 * @class attributeController
 */
class movieController {
  static async getSearch(req, res) {
    const { query } = req.params;
    const page = req.query.page || 1;
    console.log(page);
    try {
      const response = await processor.getSearch(query, page);
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  static async getDetails(req, res) {
    try {
      const { id } = req.params;
      const details = await processor.getDetails(id);
      res.status(200).json(details);
    } catch (error) {
      logger.error({ error });
      res.status(500).json(error);
    }
  }

  // static async getAttributeValues(req, res) {
  //   const { attribute_id } = req.params;

  //   try {
  //     const values = await processor.getAttributeValues(attribute_id);
  //     res.status(200).json(values);
  //   } catch (error) {
  //     res.status(500).json(error);
  //   }
  // }

  // static async getProductAttributes(req, res) {
  //   const { product_id } = req.params;

  //   try {
  //     const values = await processor.getProductAttributes(product_id);
  //     res.status(200).json(values);
  //   } catch (error) {
  //     res.status(500).json(error);
  //   }
  // }
}

export default movieController;
