import { describe, expect, test } from '@jest/globals';
import {
  PokemonServiceCreateFavouriteMethodType,
  PokemonServiceCreateFavouritePathType,
  PokemonServiceCreateFavouriteRequestType,
  PokemonServiceListFavouritesMethodType,
  PokemonServiceListFavouritesPathType,
} from 'shared';
import { agent } from 'supertest';
import { app } from '../../../app';
import { PokemonServiceCreateFavouriteResponseTypeGuard } from '../../../guards';
import { PokemonServiceListFavouritesResponseTypeGuard } from '../../../guards/pokemon-service-list-favourites-response-type.guard';
import { GetTestHeadersHelper } from '../../../helpers';

describe('ListFavouritesRoute', () => {
  test('can list favourites', async () => {
    const getHeaders = GetTestHeadersHelper();
    const createMethod: PokemonServiceCreateFavouriteMethodType = 'post';
    const createPath: PokemonServiceCreateFavouritePathType = '/api/pokemon-service/favourites';
    const createRequestBody: PokemonServiceCreateFavouriteRequestType = {
      attack: 55,
      defence: 40,
      hitPoints: 35,
      id: 25,
      imageDefaultBackUrl: 'back_default',
      imageDefaultFrontUrl: 'front_default',
      imageFemaleBackUrl: 'back_female',
      imageFemaleFrontUrl: 'front_female',
      name: 'pikachu',
      speed: 90,
      type: 'electric',
    };

    const { body: createResponse } = await agent(app)
      [createMethod](createPath)
      .set(getHeaders())
      .send(createRequestBody);

    if (!PokemonServiceCreateFavouriteResponseTypeGuard(createResponse) || createResponse.requestStatus !== 'Success') {
      throw new Error('Unexpected failure');
    }

    const method: PokemonServiceListFavouritesMethodType = 'get';
    const path: PokemonServiceListFavouritesPathType = '/api/pokemon-service/favourites';

    const { body } = await agent(app)[method](path).set(getHeaders());

    if (!PokemonServiceListFavouritesResponseTypeGuard(body) || body.requestStatus !== 'Success') {
      throw new Error('Unexpected failure');
    }

    const [first] = body.favourites;

    expect(body.favourites).toHaveLength(1);
    expect(first.id).toBe(createResponse.favourite.id);
    expect(first.pokemon.attack).toBe(createResponse.favourite.pokemon.attack);
    expect(first.pokemon.defence).toBe(createResponse.favourite.pokemon.defence);
    expect(first.pokemon.hitPoints).toBe(createResponse.favourite.pokemon.hitPoints);
    expect(first.pokemon.id).toBe(createResponse.favourite.pokemon.id);
    expect(first.pokemon.imageDefaultBackUrl).toBe(createResponse.favourite.pokemon.imageDefaultBackUrl);
    expect(first.pokemon.imageDefaultFrontUrl).toBe(createResponse.favourite.pokemon.imageDefaultFrontUrl);
    expect(first.pokemon.imageFemaleBackUrl).toBe(createResponse.favourite.pokemon.imageFemaleBackUrl);
    expect(first.pokemon.imageFemaleFrontUrl).toBe(createResponse.favourite.pokemon.imageFemaleFrontUrl);
    expect(first.pokemon.name).toBe(createResponse.favourite.pokemon.name);
    expect(first.pokemon.speed).toBe(createResponse.favourite.pokemon.speed);
    expect(first.pokemon.type).toBe(createResponse.favourite.pokemon.type);
    expect(first.userId).toBe(createResponse.favourite.userId);
  });
});
