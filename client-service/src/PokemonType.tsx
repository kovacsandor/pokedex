import classnames from 'classnames';
import { PokemonServiceSearchPokemonResultType } from 'shared';

type Props = {
  readonly type: PokemonServiceSearchPokemonResultType['type'];
};

export const PokemonType = ({ type }: Props) => {
  return (
    <div
      className={classnames(`rounded-sm py-[1] px-1 w-fit`, {
        'bg-pokedex-type-bug': type === 'bug',
        'bg-pokedex-type-dark': type === 'dark',
        'bg-pokedex-type-dragon': type === 'dragon',
        'bg-pokedex-type-electric': type === 'electric',
        'bg-pokedex-type-fairy': type === 'fairy',
        'bg-pokedex-type-fighting': type === 'fighting',
        'bg-pokedex-type-fire': type === 'fire',
        'bg-pokedex-type-flying': type === 'flying',
        'bg-pokedex-type-ghost': type === 'ghost',
        'bg-pokedex-type-grass': type === 'grass',
        'bg-pokedex-type-ground': type === 'ground',
        'bg-pokedex-type-ice': type === 'ice',
        'bg-pokedex-type-normal': type === 'normal',
        'bg-pokedex-type-poison': type === 'poison',
        'bg-pokedex-type-psychic': type === 'psychic',
        'bg-pokedex-type-rock': type === 'rock',
        'bg-pokedex-type-steel': type === 'steel',
        'bg-pokedex-type-water': type === 'water',
      })}
    >
      {type}
    </div>
  );
};
