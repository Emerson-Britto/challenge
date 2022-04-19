import { Response } from 'express';
import { Document } from 'mongoose';

export interface UserTransaction extends Response {
  transacao: {
    _id:string,
    usuarioId:number;
    valor:number,
    credito?:boolean,
    debito?:boolean,
  }
}

export interface TransactionModel extends Document {
  usuarioId: number,
  valor:number,
  debito?:boolean,
  credito?:boolean
}
