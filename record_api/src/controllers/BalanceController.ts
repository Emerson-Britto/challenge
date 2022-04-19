import { Request, Response, NextFunction } from 'express';
import Transaction from '../schema/Transaction';
import redisDB from '../redisDB';
import { UserTransaction } from '../interface';

class BalanceController {
  async update (req:Request, res:Response) {
    const { userId } = req.body;
    const userTransaction:UserTransaction[] = await Transaction.find({ userId }, null);

    const creditTotal = transaction
      .filter(item => item.credit)
      .map(item => item.value)
      .reduce((prev, curr) => prev + curr, 0);
    const debitTotal = transaction
      .filter(item => item.debit)
      .map(item => item.value)
      .reduce((prev, curr) => prev + curr, 0);

    const total = creditTotal - debitTotal;

    const user = {
      id: userId,
      balance: total
    };

    await redisDB.set(userId, JSON.stringify(user));
  }
}

export default new BalanceController();
