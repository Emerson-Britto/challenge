import BalanceController from './controllers/BalanceController';
import CacheMiddleware from './middleware/CacheMiddleware';
import express from 'express';

const routes = express.Router();

routes.route('/balance/:id')
	.get(CacheMiddleware.useCache, BalanceController.store)

export default routes;

// .get(CacheMiddleware.useCache, BalanceController.indexUser)
// .post(BalanceController.store)