import { PokemonServiceSearchPokemonResultType } from 'shared';
import { IconHeart } from './IconHeart';
import { IconHeartFull } from './IconHeartFull';
import { PokemonType } from './PokemonType';
import { Stats } from './Stats';

type ListItem = PokemonServiceSearchPokemonResultType & { readonly favourite: boolean };

type Props = {
  readonly onClick: (id: ListItem) => void;
  readonly pokemon: ListItem;
};

export const Card = ({ onClick, pokemon }: Props) => {
  return (
    <div
      onClick={() => onClick(pokemon)}
      className='rounded-lg border border-solid border-pokedex-black p-4 flex flex-col gap-2 whitespace-nowrap text-xs cursor-pointer'
    >
      <div className='rounded-lg bg-pokedex-gray p-2 relative'>
        <img width='96' height='96' src={pokemon.imageDefaultFrontUrl} alt={pokemon.name} />
        {pokemon.favourite ? (
          <IconHeartFull className='fill-pokedex-red stroke-pokedex-red absolute top-2 right-2' />
        ) : (
          <IconHeart className='stroke-pokedex-red absolute top-2 right-2' />
        )}
      </div>
      <div className='flex gap-2'>
        <div className='flex-grow capitalize'>{pokemon.name}</div>
        <PokemonType type={pokemon.type} />
      </div>
      <Stats attack={pokemon.attack} defence={pokemon.defence} hitPoints={pokemon.hitPoints} speed={pokemon.speed} />
    </div>
  );
};
