import { useEffect, useMemo, useState } from "react"
import { Header } from "../../molecules/header/Header"
import { Container, ContainerDetails } from "./Home.style"
import { GetAllPokemonServiceImpl } from "../../../application/application_services/GetAllPokemonServiceImpl"
import { Card } from "../../atoms/card/Card"
import { Loading } from "../../atoms/loading/Loading"
import { usePokemonContext } from "../../context/PokemonContext"


function App() {
  const { pokemonData = [], setPokemonData,filter } = usePokemonContext();
  const [loading, setLoading] = useState(true);
  const [currentPage,setCurrentPage] = useState(1);
  const resultsPerPage = 20;
  const iGetAllPokemonServiceImpl = useMemo(() => new GetAllPokemonServiceImpl(), []);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const list = await iGetAllPokemonServiceImpl.GetAllPokemon(resultsPerPage, currentPage);
        setPokemonData(list);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [iGetAllPokemonServiceImpl, currentPage, setPokemonData]);
  
  const filteredPokemon = pokemonData?.filter(pokemon => 
    pokemon.getName().toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} resultsPerPage={resultsPerPage}/>
      (
        {loading ? <Loading/> : (
          <ContainerDetails >
            {filteredPokemon.length==0?<h1>NO HAY POKEMONES</h1>:filteredPokemon?.map((pokemon) => (
              <Card details={pokemon} />
            ))}
          </ContainerDetails>
        )}
      );


    </Container>
  )
}

export default App
