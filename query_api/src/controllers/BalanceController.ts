import { Request, Response } from 'express';
import cache from 'memory-cache';
import redisDB from '../redisDB';
import api from '../services/api';
import { TransactionData, UserTransaction } from '../interface';

class BalanceController {
  async indexUser(req:Request, res:Response) {
    try {
      const user = await res.user;
      return res.status(200).json({ user });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async store(req:Request, res:{ id: string, balance: number }) {
    const { id } = req.params;

    try {
      const { data }:TransactionData = await api.get(`/transaction/${id}`);
      const transaction:UserTransaction[] = data.userTransaction;

      const itensCredit = transaction.filter(item => item.credit)
      const itensDebit = transaction.filter(item => item.debit)

      const creditTotal = itensCredit.map(item => item.value).reduce((prev, curr) => prev + curr, 0);
      const debitTotal = itensDebit.map(item => item.value).reduce((prev, curr) => prev + curr, 0);
      const balance = creditTotal - debitTotal;

      const user = { id, balance };

      cache.put(id, user, 3 * 60000) // three minute;
      await redisDB.set(id, user);

      res.status(200).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default new BalanceController();
