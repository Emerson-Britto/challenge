import mongoose from 'mongoose';
import { TransactionModel } from '../interface';

const TransactionSchema = new mongoose.Schema({
  userId: {
    type: Number,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  debit: {
    type: Boolean,
    default: false
  },
  credit: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: {
    createdAt: true, 
    updatedAt: false
  }
})

export default mongoose.model<TransactionModel>('Transaction', TransactionSchema);
