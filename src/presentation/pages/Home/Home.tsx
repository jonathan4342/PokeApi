import { useEffect, useMemo, useState } from "react"
import { Container, ContainerDetails } from "./Home.style"
import { GetAllPokemonServiceImpl } from "../../../application/application_services/GetAllPokemonServiceImpl"
import { Card } from "../../atoms/card/Card"
import { Loading } from "../../atoms/loading/Loading"
import { usePokemonContext } from "../../context/PokemonContext"
import { NotFound } from "../../atoms/nofound/NoFound"
import { Header } from "../../organisms/header/Header"


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
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      (
        {loading ? <Loading/> : (
          <ContainerDetails >
            {filteredPokemon.length==0?<NotFound/>:filteredPokemon?.map((pokemon) => (
              <Card details={pokemon} />
            ))}
          </ContainerDetails>
        )}
      );


    </Container>
  )
}

export default App
