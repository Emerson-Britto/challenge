import { Request, NextFunction } from 'express';
import Transaction from '../schema/Transaction';
import { UserTransaction } from '../interface';

class UserMiddleware {
  public async validateId (req:Request, res:UserTransaction, next:NextFunction): Promise<UserTransaction> {
    const { id } = req.params;
    try {
      const userTransaction: UserTransaction[] = await Transaction.find({ userId: id }, null);

      res.transaction = userTransaction;
      if (!userTransaction) {
        return res.status(404).json({ error: "This User did not perform any transaction." });
      }
    } catch (err) {
      return res.status(500).json({ error: err.message })
    }
    next();
  }
}

export default new UserMiddleware();
