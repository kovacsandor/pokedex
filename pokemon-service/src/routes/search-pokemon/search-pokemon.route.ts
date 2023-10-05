import axios from 'axios';
import { NextFunction, Request, Response, Router } from 'express';
import { Pokemon } from 'pokedex-promise-v2';
import {
  PokemonServiceSearchPokemonMethodType,
  PokemonServiceSearchPokemonPathType,
  PokemonServiceSearchPokemonQueryParamsType,
  PokemonServiceSearchPokemonResponseType,
} from 'shared';
import { PokemonTypeLiteralUnionGuard } from '../../guards';
import { AuthoriseUserMiddleware } from '../../middlewares';
import { AuthorisedLocalsType } from '../../types';

const path: PokemonServiceSearchPokemonPathType = '/api/pokemon-service/search-pokemon';
const method: PokemonServiceSearchPokemonMethodType = 'get';

export const SearchPokemonRoute = Router();

SearchPokemonRoute[method](
  path,
  AuthoriseUserMiddleware,
  async (
    req: Request<{}, PokemonServiceSearchPokemonResponseType, {}, PokemonServiceSearchPokemonQueryParamsType>,
    res: Response<PokemonServiceSearchPokemonResponseType, AuthorisedLocalsType>,
    next: NextFunction,
  ) => {
    const name = req.query.name.toLowerCase();

    if (!name) {
      return res.status(400).send({
        message: 'No pokemon name sent',
        requestStatus: 'Failure',
      });
    }

    try {
      const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`);

      const attack = data.stats.find((item) => item.stat.name === 'attack').base_stat;
      const defence = data.stats.find((item) => item.stat.name === 'defense').base_stat;
      const hitPoints = data.stats.find((item) => item.stat.name === 'hp').base_stat;
      const speed = data.stats.find((item) => item.stat.name === 'speed').base_stat;
      const type = data.types[0].type.name;

      if (!PokemonTypeLiteralUnionGuard(type)) {
        return res.status(500).send({
          message: 'External service error',
          requestStatus: 'Failure',
        });
      }

      const response: PokemonServiceSearchPokemonResponseType = {
        requestStatus: 'Success',
        pokemon: {
          attack,
          defence,
          hitPoints,
          id: data.id,
          imageDefaultBackUrl: data.sprites.back_default,
          imageDefaultFrontUrl: data.sprites.front_default,
          imageFemaleBackUrl: data.sprites.back_female,
          imageFemaleFrontUrl: data.sprites.front_female,
          name: data.name,
          speed,
          type,
        },
      };

      return res.status(200).send(response);
    } catch (error) {
      return next(error);
    }
  },
);
