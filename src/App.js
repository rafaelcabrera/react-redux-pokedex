import React from "react";
import { useEffect } from "react";
// import { connect } from 'react-redux'
import { useDispatch, useSelector } from "react-redux";
import logo from "./statics/logo.svg";
import Searcher from "./components/Searcher";
import { Col, Spin } from "antd";
import "./App.css";
import { getPokemon } from "./api";
import PokemonList from "./components/PokemonList";
import { getPokemonsWithDetails, setLoading } from "./actions";

function App() {
  // const [pokemons,setPokemons] = useState([]);
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading); //obtenemos el loading del estado
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes)); //agrego el dispatcher de aca
      dispatch(setLoading(false)); //cambia el estado nuevamente
    };
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedex" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinnig size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;

// const mapStateToProps=(state)=>({pokemons:state.pokemons,}); //recibir estado y retorna un objeto cuyas propiedades va a enviar al compoennte que se conecta a redux
// // const mapStateToProps=(state)=>({pokemons:state.pokemons,});

// const mapDispatchToProps = (dispatch)=> ({setPokemons: (value) => dispatch(setPokemonsActions(value)),}); //recibe el dispatcher de redux y retorna el objeto mapeado pero ahora con los actions creators que habíamos establecido.

// export default connect(mapStateToProps, mapDispatchToProps)(App);

//conectamos el componente con redux
