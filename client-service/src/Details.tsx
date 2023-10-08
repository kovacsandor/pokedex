import classnames from 'classnames';
import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { PokemonServiceSearchPokemonResultType } from 'shared';
import { IconClose } from './IconClose';
import { IconFemale } from './IconFemale';
import { IconHeart } from './IconHeart';
import { IconHeartFull } from './IconHeartFull';
import { IconMale } from './IconMale';
import { PokemonType } from './PokemonType';
import { Stats } from './Stats';
import { useCreateFavouriteMutation, useListFavouritesQuery } from './hooks';

type Props = {
  readonly favourite?: boolean;
  readonly pokemon: PokemonServiceSearchPokemonResultType;
  readonly onClose: () => void;
  readonly onMutationSuccess: (id: number) => void;
};

export const Details = ({ favourite, onClose, onMutationSuccess, pokemon }: Props) => {
  const [selectedSide, setSelectedSide] = useState<'back' | 'front'>('front');
  const [selectedGender, setSelectedGender] = useState<'female' | 'male'>('male');
  const createMutation = useCreateFavouriteMutation();
  const listQuery = useListFavouritesQuery();

  const loading = createMutation.isLoading || listQuery.isFetching;
  const disabled = loading || favourite;

  useEffect(() => {
    if (createMutation.data?.requestStatus === 'Success') {
      listQuery.refetch();
      onMutationSuccess(createMutation.data.favourite.pokemon.id);
    }
  }, [createMutation.data?.requestStatus]);

  const femaleIconDisabled = !pokemon.imageFemaleBackUrl || !pokemon.imageFemaleBackUrl;
  const maleIconDisabled = !pokemon.imageDefaultBackUrl || !pokemon.imageDefaultBackUrl;

  const image = useMemo(() => {
    if (selectedSide === 'back' && selectedGender === 'female') {
      return pokemon.imageFemaleBackUrl;
    }
    if (selectedSide === 'back' && selectedGender === 'male') {
      return pokemon.imageDefaultBackUrl;
    }
    if (selectedSide === 'front' && selectedGender === 'female') {
      return pokemon.imageFemaleFrontUrl;
    }
    if (selectedSide === 'front' && selectedGender === 'male') {
      return pokemon.imageDefaultFrontUrl;
    }
    return femaleIconDisabled ? pokemon.imageDefaultFrontUrl : pokemon.imageFemaleFrontUrl;
  }, [selectedSide, selectedGender]);

  return createPortal(
    <div className='w-screen h-screen absolute top-0 p-4 flex items-center justify-center'>
      <div className='rounded-lg border border-solid bg-pokedex-white border-pokedex-black p-4 flex flex-col gap-2 whitespace-nowrap text-xs'>
        <div className='flex flex-col'>
          <div className='flex gap-2 items-center'>
            <div className='text-base font-bold capitalize flex-grow'>{pokemon.name}</div>
            <button disabled={loading || favourite} onClick={() => createMutation.mutate(pokemon)}>
              {favourite ? (
                <IconHeartFull
                  className={classnames({
                    'fill-pokedex-red': !disabled,
                    'stroke-pokedex-red': !disabled,
                    'fill-pokedex-gray': disabled,
                    'stroke-pokedex-gray': disabled,
                  })}
                />
              ) : (
                <IconHeart
                  className={classnames({
                    'stroke-pokedex-red': !disabled,
                    'stroke-pokedex-gray': disabled,
                  })}
                />
              )}
            </button>
            <button onClick={onClose}>
              <IconClose />
            </button>
          </div>
          <PokemonType type={pokemon.type} />
        </div>
        <div className='flex gap-2'>
          <div className='flex flex-col gap-2'>
            <Stats
              attack={pokemon.attack}
              defence={pokemon.defence}
              hitPoints={pokemon.hitPoints}
              speed={pokemon.speed}
            />
            <div className='flex gap-2'>
              <div className='flex flex-col gap-2 items-center'>
                <button disabled={femaleIconDisabled} onClick={() => setSelectedGender('female')}>
                  <IconFemale
                    className={classnames({
                      'fill-pokedex-black': selectedGender === 'female',
                      'fill-pokedex-gray': selectedGender === 'male',
                      'fill-pokedex-gray-light': femaleIconDisabled,
                    })}
                  />
                </button>
                <button
                  onClick={() => setSelectedSide('back')}
                  className={classnames({
                    'font-bold': selectedSide === 'back',
                  })}
                >
                  Back
                </button>
              </div>
              <div className='flex flex-col gap-2 items-center'>
                <button onClick={() => setSelectedGender('male')}>
                  <IconMale
                    className={classnames({
                      'stroke-pokedex-black': selectedGender === 'male',
                      'stroke-pokedex-gray': selectedGender === 'female',
                      'fill-pokedex-gray-light': maleIconDisabled,
                    })}
                  />
                </button>
                <button
                  onClick={() => setSelectedSide('front')}
                  className={classnames({
                    'font-bold': selectedSide === 'front',
                  })}
                >
                  Front
                </button>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-around'>
            <img width='96' height='96' src={image} alt={pokemon.name} />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};
