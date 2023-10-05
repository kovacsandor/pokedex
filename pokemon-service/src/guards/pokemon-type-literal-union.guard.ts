import { PokemonServicePokemonTypeLiteralUnion } from 'shared/src/types';

export const PokemonTypeLiteralUnionGuard = (value: string): value is PokemonServicePokemonTypeLiteralUnion => {
  switch (value) {
    case 'bug':
    case 'dark':
    case 'dragon':
    case 'electric':
    case 'fairy':
    case 'fighting':
    case 'fire':
    case 'flying':
    case 'ghost':
    case 'grass':
    case 'ground':
    case 'ice':
    case 'normal':
    case 'poison':
    case 'psychic':
    case 'rock':
    case 'steel':
    case 'water':
      return true;
    default:
      return false;
  }
};
