import { useEffect, useMemo, useRef, useState } from 'react';
import { PokemonServiceFavouriteType, PokemonServiceSearchPokemonResultType } from 'shared';
import { Card } from './Card';
import { Details } from './Details';
import { IconClose } from './IconClose';
import { IconLogout } from './IconLogout';
import { IconRightArrow } from './IconRightArrow';
import { IconSearch } from './IconSearch';
import { UserProfile } from './UserProfile';
import { useListFavouritesQuery, useSearchPokemonQuery } from './hooks';

type ListItem = PokemonServiceSearchPokemonResultType & { readonly favourite: boolean };

function App() {
  const listQuery = useListFavouritesQuery();
  const [name, setName] = useState('');
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState<ListItem | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const searchPokemonQuery = useSearchPokemonQuery(query);
  const [pokemons, setPokemons] = useState<ListItem[]>([]);
  const pokemonIds = useMemo(() => pokemons.map((pokemon) => pokemon.id), [pokemons]);

  useEffect(() => {
    if (
      searchPokemonQuery.data?.requestStatus === 'Success' &&
      !pokemonIds.includes(searchPokemonQuery.data.pokemon.id)
    ) {
      setPokemons([
        ...pokemons,
        {
          ...searchPokemonQuery.data.pokemon,
          favourite: false,
        },
      ]);
      setName('');
    }
  }, [searchPokemonQuery.data]);

  useEffect(() => {
    if (listQuery.data?.requestStatus === 'Success') {
      const listItems: ListItem[] = listQuery.data.favourites.reduce(
        (acc: ListItem[], curr: PokemonServiceFavouriteType): ListItem[] => {
          if (pokemonIds.includes(curr.pokemon.id)) {
            return acc;
          }

          return [
            ...acc,
            {
              ...curr.pokemon,
              favourite: true,
            },
          ];
        },
        [],
      );

      setPokemons([...pokemons, ...listItems]);
    }
  }, [listQuery.data]);

  const onMutationSuccess = (id: number) => {
    const list = pokemons.map((pokemon) => {
      if (pokemon.id === id) {
        return {
          ...pokemon,
          favourite: true,
        };
      }

      return pokemon;
    });

    setPokemons(list);
    setOpen({
      ...open!,
      favourite: true,
    });
  };

  return (
    <div className='container mx-auto p-5 flex gap-5 items-start'>
      <div className='flex gap-5 flex-col flex-[2] xl:flex-[3]'>
        <div
          className='flex gap-2 border border-solid border-pokedex-black rounded-lg py-2 px-4 items-center cursor-pointer'
          onClick={() => inputRef.current?.focus()}
        >
          <IconSearch />
          <input
            disabled={searchPokemonQuery.isLoading}
            className='flex-grow'
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder='Search pokemon by name...'
            ref={inputRef}
            value={name}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setQuery(name);
              }
            }}
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setName('');
            }}
          >
            <IconClose />
          </button>
        </div>
        <div className='flex gap-5 flex-wrap'>
          {pokemons.map((pokemon) => (
            <Card onClick={setOpen} key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
        {open && (
          <Details
            favourite={open.favourite}
            onClose={() => setOpen(null)}
            pokemon={open}
            onMutationSuccess={onMutationSuccess}
          />
        )}
      </div>
      <div className='md:flex-1 flex flex-col gap-2 border border-solid border-pokedex-black p-5 rounded-lg'>
        <div className='flex gap-2'>
          <div className='bg-pokedex-gray p-2 rounded'>
            <UserProfile />
          </div>
          <div className='flex-grow'>Mr Raptor</div>
          <IconLogout />
        </div>
        <div className='md:flex-1 flex gap-2 items-center'>
          <div className='font-bold'>Favourite pokemons</div>
          <IconRightArrow />
        </div>
        <div className='flex gap-5 flex-wrap'>
          {listQuery.data?.requestStatus === 'Success' &&
            listQuery.data.favourites.map((favourite) => {
              return <img width='96' height='96' key={favourite.id} src={favourite.pokemon.imageDefaultFrontUrl} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
