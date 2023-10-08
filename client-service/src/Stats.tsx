import { PokemonServiceSearchPokemonResultType } from 'shared';

type Props = Pick<PokemonServiceSearchPokemonResultType, 'attack' | 'defence' | 'hitPoints' | 'speed'>;

export const Stats = ({ attack, defence, hitPoints, speed }: Props) => {
  return (
    <div>
      <div className='flex gap-2 justify-between'>
        <div className='p-1'>Hp {hitPoints}</div>
        <div className='p-1'>Atk {attack}</div>
      </div>
      <div className='flex gap-2 justify-between'>
        <div className='p-1'>Def {defence}</div>
        <div className='p-1'>Sp {speed}</div>
      </div>
    </div>
  );
};
