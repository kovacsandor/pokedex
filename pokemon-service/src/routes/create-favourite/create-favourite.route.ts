import { NextFunction, Request, Response, Router } from 'express';
import {
  PokemonServiceCreateFavouriteMethodType,
  PokemonServiceCreateFavouritePathType,
  PokemonServiceCreateFavouriteRequestType,
  PokemonServiceCreateFavouriteResponseType,
} from 'shared';
import { AuthoriseUserMiddleware } from '../../middlewares';
import { FavouriteModel } from '../../models';
import { AuthorisedLocalsType, FavouriteDocumentType, FavouriteType } from '../../types';

const path: PokemonServiceCreateFavouritePathType = '/api/pokemon-service/favourites';
const method: PokemonServiceCreateFavouriteMethodType = 'post';

export const CreateFavouriteRoute = Router();

CreateFavouriteRoute[method](
  path,
  AuthoriseUserMiddleware,
  async (
    req: Request<{}, PokemonServiceCreateFavouriteResponseType, PokemonServiceCreateFavouriteRequestType>,
    res: Response<PokemonServiceCreateFavouriteResponseType, AuthorisedLocalsType>,
    next: NextFunction,
  ) => {
    const {
      attack,
      defence,
      hitPoints,
      id,
      imageDefaultBackUrl,
      imageDefaultFrontUrl,
      imageFemaleBackUrl,
      imageFemaleFrontUrl,
      name,
      speed,
      type,
    } = req.body;

    if (
      attack == null ||
      defence == null ||
      hitPoints == null ||
      !id ||
      !imageDefaultBackUrl ||
      !imageDefaultFrontUrl ||
      !name ||
      speed == null ||
      !type
    ) {
      return res.status(400).send({
        message: 'Bad request',
        requestStatus: 'Failure',
      });
    }

    const favourite: FavouriteType = {
      pokemon: {
        attack,
        defence,
        hitPoints,
        id,
        imageDefaultBackUrl,
        imageDefaultFrontUrl,
        imageFemaleBackUrl,
        imageFemaleFrontUrl,
        name,
        speed,
        type,
      },
      userId: res.locals.userId,
    };

    const document: FavouriteDocumentType = new FavouriteModel(favourite);

    try {
      const saved = await document.save();
      const json = saved.toJSON();

      const response: PokemonServiceCreateFavouriteResponseType = {
        requestStatus: 'Success',
        favourite: {
          id: json._id.toHexString(),
          pokemon: {
            attack: json.pokemon.attack,
            defence: json.pokemon.defence,
            hitPoints: json.pokemon.hitPoints,
            id: json.pokemon.id,
            imageDefaultBackUrl: json.pokemon.imageDefaultBackUrl,
            imageDefaultFrontUrl: json.pokemon.imageDefaultFrontUrl,
            imageFemaleBackUrl: json.pokemon.imageFemaleBackUrl,
            imageFemaleFrontUrl: json.pokemon.imageFemaleFrontUrl,
            name: json.pokemon.name,
            speed: json.pokemon.speed,
            type: json.pokemon.type,
          },
          userId: json.userId,
        },
      };

      return res.status(201).send(response);
    } catch (error) {
      return next(error);
    }
  },
);
