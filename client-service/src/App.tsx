import './App.css';
import { useCreateFavouriteMutation, useListFavouritesQuery } from './hooks';
import { useSearchPokemonQuery } from './hooks/use-search-pokemon-query/use-search-pokemon-query.hook';

function App() {
  const searchQuery = useSearchPokemonQuery('ditto');
  const createMutation = useCreateFavouriteMutation();
  const listQuery = useListFavouritesQuery();
  return (
    <div>
      <div>
        Search result
        <div>{searchQuery.data ? JSON.stringify(searchQuery.data) : 'no data'}</div>
      </div>
      <div>
        Create result
        <div>{createMutation.data ? JSON.stringify(createMutation.data) : 'no data'}</div>
      </div>
      <div>
        List
        <div>{listQuery.data ? JSON.stringify(listQuery.data) : 'no data'}</div>
      </div>
      <button
        onClick={() => {
          if (searchQuery.data && searchQuery.data.requestStatus === 'Success') {
            createMutation.mutate(searchQuery.data.pokemon);
          }
        }}
      >
        Create
      </button>
      <button onClick={() => listQuery.refetch()}>List</button>
    </div>
  );
}

export default App;
