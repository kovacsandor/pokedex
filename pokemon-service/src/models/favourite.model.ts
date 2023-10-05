import { model, Schema } from 'mongoose';
import { FavouriteDocumentType } from '../types';

const pokemonSchema = new Schema({
  attack: {
    type: Number,
    required: true,
  },
  defence: {
    type: Number,
    required: true,
  },
  hitPoints: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  imageFemaleBackUrl: {
    type: String,
  },
  imageFemaleFrontUrl: {
    type: String,
  },
  imageDefaultBackUrl: {
    type: String,
    required: true,
  },
  imageDefaultFrontUrl: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: [
      'bug',
      'dark',
      'dragon',
      'electric',
      'fairy',
      'fighting',
      'fire',
      'flying',
      'ghost',
      'grass',
      'ground',
      'ice',
      'normal',
      'poison',
      'psychic',
      'rock',
      'steel',
      'water',
    ],
  },
});

const favouriteSchema = new Schema({
  pokemon: {
    type: pokemonSchema,
    required: true,
  },
  userId: {
    required: true,
    type: String,
  },
});
export const FavouriteModel = model<FavouriteDocumentType>('Favourite', favouriteSchema);
