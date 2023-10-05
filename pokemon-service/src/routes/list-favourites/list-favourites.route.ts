import { NextFunction, Request, Response, Router } from 'express';
import {
  PokemonServiceListFavouritesMethodType,
  PokemonServiceListFavouritesPathType,
  PokemonServiceListFavouritesResponseType,
} from 'shared';
import { AuthoriseUserMiddleware } from '../../middlewares';
import { FavouriteModel } from '../../models';
import { AuthorisedLocalsType, FavouriteDocumentType, FavouriteType } from '../../types';

const path: PokemonServiceListFavouritesPathType = '/api/pokemon-service/favourites';
const method: PokemonServiceListFavouritesMethodType = 'get';

export const ListFavouritesRoute = Router();

ListFavouritesRoute[method](
  path,
  AuthoriseUserMiddleware,
  async (
    req: Request<{}, PokemonServiceListFavouritesResponseType>,
    res: Response<PokemonServiceListFavouritesResponseType, AuthorisedLocalsType>,
    next: NextFunction,
  ) => {
    try {
      const filter: Partial<FavouriteType> = { userId: res.locals.userId };
      const documents = await FavouriteModel.find<FavouriteDocumentType>(filter);

      const response: PokemonServiceListFavouritesResponseType = {
        requestStatus: 'Success',
        favourites: documents.map((document) => {
          const json = document.toJSON();
          return {
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
          };
        }),
      };

      return res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  },
);
