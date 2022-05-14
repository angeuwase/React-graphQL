import BasicTable from './Table';
import {useQuery, gql} from '@apollo/client';

const GETCOCKTAILS = gql`
query GetCocktails {
  allCocktails {
    id
    name
    drinkInfo {
      category
      isAlcoholic
      glass
      instructions
    }
  }
}

`;

function App() {
  const {loading, error, data} = useQuery(GETCOCKTAILS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <h1>Cocktails</h1>
      <BasicTable data={data.allCocktails} />
    </>

  );
}

export default App;
