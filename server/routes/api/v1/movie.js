import express from 'express';
import validator from '../../../middlewares/validators/movie';
import controller from '../../../controllers/movie';

const router = express.Router();
router.get('/search/:query', validator.getSearch, controller.getSearch);
router.get('/details/:id', validator.getDetails, controller.getDetails);

export default router;
