import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    name: { type: String },
    price: { type: Number },
    description: { type: String },
    inventory: { type: Number },
  },
  {
    timestamps: true,
    collection: 'products',
  },
);
