
import Transformer from '../../utils/transformer';

const Validator = {};

Validator.getSearch = (req, res, next) => {
  req.checkParams('query', 'query_string is invalid or less than 3 / greater than 30 characters').not().isEmpty().matches(/^\w+$/)
    .isLength({ min: 3 })
    .isLength({ max: 30 });
  req.checkQuery('page', 'Please enter a valid page number').optional().isDecimal();
  req.asyncValidationErrors()
    .then(next)
    .catch(errors => res.status(400).json(
      Transformer.transformExpressValidationErrors(errors),
    ));
};

Validator.getDetails = (req, res, next) => {
  req.checkParams('id', 'query_string is invalid or less than 5 / greater than 30 characters').not().isEmpty().matches(/^\w+$/)
    .isLength({ min: 5 })
    .isLength({ max: 10 });
  req.asyncValidationErrors()
    .then(next)
    .catch(errors => res.status(400).json(
      Transformer.transformExpressValidationErrors(errors),
    ));
};
export default Validator;
