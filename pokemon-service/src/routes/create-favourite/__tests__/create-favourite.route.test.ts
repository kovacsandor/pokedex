import { describe, expect, test } from '@jest/globals';
import {
  PokemonServiceCreateFavouriteMethodType,
  PokemonServiceCreateFavouritePathType,
  PokemonServiceCreateFavouriteRequestType,
} from 'shared';
import { agent } from 'supertest';
import { app } from '../../../app';
import { PokemonServiceCreateFavouriteResponseTypeGuard } from '../../../guards';
import { GetTestHeadersHelper } from '../../../helpers';

describe('CreateFavouriteRoute', () => {
  test('can create favourite', async () => {
    const getHeaders = GetTestHeadersHelper();
    const method: PokemonServiceCreateFavouriteMethodType = 'post';
    const path: PokemonServiceCreateFavouritePathType = '/api/pokemon-service/favourites';
    const requestBody: PokemonServiceCreateFavouriteRequestType = {
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

    const { body } = await agent(app)[method](path).set(getHeaders()).send(requestBody);

    if (!PokemonServiceCreateFavouriteResponseTypeGuard(body) || body.requestStatus !== 'Success') {
      throw new Error('Unexpected failure');
    }

    expect(body.favourite.id).toBeDefined();
    expect(body.favourite.pokemon.attack).toBe(requestBody.attack);
    expect(body.favourite.pokemon.defence).toBe(requestBody.defence);
    expect(body.favourite.pokemon.hitPoints).toBe(requestBody.hitPoints);
    expect(body.favourite.pokemon.id).toBe(requestBody.id);
    expect(body.favourite.pokemon.imageDefaultBackUrl).toBe(requestBody.imageDefaultBackUrl);
    expect(body.favourite.pokemon.imageDefaultFrontUrl).toBe(requestBody.imageDefaultFrontUrl);
    expect(body.favourite.pokemon.imageFemaleBackUrl).toBe(requestBody.imageFemaleBackUrl);
    expect(body.favourite.pokemon.imageFemaleFrontUrl).toBe(requestBody.imageFemaleFrontUrl);
    expect(body.favourite.pokemon.name).toBe(requestBody.name);
    expect(body.favourite.pokemon.speed).toBe(requestBody.speed);
    expect(body.favourite.pokemon.type).toBe(requestBody.type);
    expect(body.favourite.userId).toBeDefined();
  });
});
