import { describe, expect, test } from '@jest/globals';
import { AxiosResponse } from 'axios';
import { Pokemon } from 'pokedex-promise-v2';
import {
  PokemonServiceSearchPokemonMethodType,
  PokemonServiceSearchPokemonPathType,
  PokemonServiceSearchPokemonQueryParamsType,
  PokemonServiceSearchPokemonResponseType,
} from 'shared';
import { agent } from 'supertest';
import { app } from '../../../app';
import { GetTestHeadersHelper } from '../../../helpers';
import { DeepPartialType } from '../../../types';

const mockAxiosGet = jest.fn();

jest.mock('axios', () => ({
  get: (url: string) => {
    mockAxiosGet.mockImplementation((args) => {
      const response: DeepPartialType<AxiosResponse<Pokemon>> = {
        data: {
          id: 25,
          sprites: {
            back_default: 'back_default',
            back_female: 'back_female',
            front_default: 'front_default',
            front_female: 'front_female',
          },
          name: 'pikachu',
          types: [
            {
              type: {
                name: 'electric',
              },
            },
          ],
          stats: [
            {
              base_stat: 35,
              stat: {
                name: 'hp',
              },
            },
            {
              base_stat: 55,
              stat: {
                name: 'attack',
              },
            },
            {
              base_stat: 40,
              stat: {
                name: 'defense',
              },
            },
            {
              base_stat: 90,
              stat: {
                name: 'speed',
              },
            },
          ],
        },
      };
      return Promise.resolve(response);
    });

    return mockAxiosGet(url);
  },
}));

describe('SearchPokemonRoute', () => {
  const getHeaders = GetTestHeadersHelper();
  const method: PokemonServiceSearchPokemonMethodType = 'get';
  const path: PokemonServiceSearchPokemonPathType = '/api/pokemon-service/search-pokemon';
  const params: PokemonServiceSearchPokemonQueryParamsType = {
    name: 'Pikachu',
  };

  test('calls pokedex with the correct parameters', async () => {
    await agent(app)[method](path).query(params).set(getHeaders());

    expect(mockAxiosGet).toBeCalledWith('https://pokeapi.co/api/v2/pokemon/pikachu');
  });

  test('returns the data received from pokedex correctly', async () => {
    const { body } = await agent(app)[method](path).query(params).set(getHeaders());

    const expected: PokemonServiceSearchPokemonResponseType = {
      requestStatus: 'Success',
      pokemon: {
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
      },
    };
    expect(body).toEqual(expected);
  });
});
