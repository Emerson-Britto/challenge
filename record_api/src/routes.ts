import express from 'express';
import TransactionController from './controllers/TransactionController';
import BalanceController from './controllers/BalanceController';
import UserMiddleware from './middlewares/UserMiddleware';

const routes = express.Router();

routes.route('/transaction')
	.get(TransactionController.index)
	.post(TransactionController.store, BalanceController.update)

routes.route('/transaction/:id')
	.get(UserMiddleware.validateId, TransactionController.indexUser)

export default routes;
