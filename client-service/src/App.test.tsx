import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from 'react-query';
import { PokemonServiceListFavouritesResponseType, PokemonServiceSearchPokemonResponseType } from 'shared';
import App from './App';

type Response<T> = { readonly data: T };

const mockGET = jest.fn();

jest.mock('openapi-fetch', () => () => ({
  GET: mockGET,
}));

describe('App', () => {
  const listFavouritesResponse: Partial<Response<PokemonServiceListFavouritesResponseType>> = {
    data: {
      requestStatus: 'Success',
      favourites: [
        {
          id: 'favouriteId',
          pokemon: {
            attack: 49,
            defence: 49,
            hitPoints: 45,
            id: 1,
            imageDefaultBackUrl: 'imageDefaultBackUrl',
            imageDefaultFrontUrl: 'imageDefaultFrontUrl',
            imageFemaleBackUrl: 'imageFemaleBackUrl',
            imageFemaleFrontUrl: 'imageFemaleFrontUrl',
            name: 'bulbasaur',
            speed: 45,
            type: 'grass',
          },
          userId: 'userId',
        },
      ],
    },
  };

  const searchPokemonResponse: Partial<Response<PokemonServiceSearchPokemonResponseType>> = {
    data: {
      requestStatus: 'Success',
      pokemon: {
        attack: 55,
        defence: 40,
        hitPoints: 35,
        id: 25,
        imageDefaultBackUrl: 'imageDefaultBackUrl',
        imageDefaultFrontUrl: 'imageDefaultFrontUrl',
        imageFemaleBackUrl: 'imageFemaleBackUrl',
        imageFemaleFrontUrl: 'imageFemaleFrontUrl',
        name: 'pikachu',
        speed: 90,
        type: 'electric',
      },
    },
  };

  test('renders pokemons', async () => {
    mockGET.mockResolvedValueOnce(listFavouritesResponse);
    mockGET.mockResolvedValueOnce(searchPokemonResponse);

    const queryClient = new QueryClient();
    const sut = render(
      <QueryClientProvider client={queryClient}>
        <App />)
      </QueryClientProvider>,
    );

    const input = screen.getByPlaceholderText(/search pokemon by name.../i);

    await act(async () => {
      await waitFor(() => userEvent.type(input, 'user types something'));
      await waitFor(() => userEvent.type(input, '{enter}'));
    });

    const element = await screen.findByText(/pikachu/i);

    expect(element).toBeInTheDocument();
  });
});
