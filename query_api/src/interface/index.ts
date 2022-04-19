import { Response } from 'express';
import { Document } from 'mongoose';

export interface TransactionData {
  data : {
    userTransaction: [
      {
        _id: string,
        userId: number,
        value: number,
        debit: boolean,
        credit: boolean,
        createdAt: string,
      }
    ]
  }
}

export interface UserTransaction {
  _id: string,
  userId: number,
  value: number,
  debit: boolean,
  credit: boolean,
  createdAt: string,
}

export interface Cache extends Response {
  id: Number,
  balance: Number
}
