import { Request, Response, NextFunction } from 'express';
import Transaction from '../schema/Transaction';

class TransactionController {
  async index (req:Request, res:Response) {
    try {
      const transaction = await Transaction.find();

      return res.status(200).json({ transaction });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async indexUser(req:Request, res:Response){
    try {
      const userTransaction = await res.transaction;
      return res.status(200).json({ userTransaction });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async store (req:Request, res:Response, next:NextFunction) {
    const { userId, value, credit, debit } = req.body;

    if (!userId || !value) {
      return res.status(400).json({ error: "Please insert your id (userId) and value." });
    }

    if ((!credit && !debit) || (credit && debit)) {
      return res.status(400).json({ error: "Enter the transaction type (debit or credit)." });
    }

    console.log("creating new transaction");

    const transaction = new Transaction({
      userId,
      value,
      debit,
      credit
    })

    console.log("saving new transaction");

    try {
      await transaction.save()
      console.log("transaction saved");
      next();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

export default new TransactionController();
