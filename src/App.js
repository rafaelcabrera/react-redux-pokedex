import React from 'react';
import {useEffect} from 'react'
import { connect } from 'react-redux'
import logo from './statics/logo.svg'
import Searcher from './components/Searcher';
import { Col } from 'antd';
import './App.css';
import {getPokemon } from './api'
import PokemonList from './components/PokemonList';
import {setPokemons as setPokemonsActions} from './actions'

function App({pokemons, setPokemons}) {
  // const [pokemons,setPokemons] = useState([]);
  useEffect(() =>{
    const fetchPokemons = async () => {
      const pokemonsRes= await getPokemon();
      setPokemons(pokemonsRes)
    };
    fetchPokemons();
  }, []);
  return (
    <div className='App'>
      <Col span={4} offset={10}>
      <img src={logo} alt='Pokedex'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons ={pokemons}/>
    </div>
  );
}

// export default App;

const mapStateToProps=(state)=>({pokemons:state.pokemons,}); //recibir estado y retorna un objeto cuyas propiedades va a enviar al compoennte que se conecta a redux
// const mapStateToProps=(state)=>({pokemons:state.pokemons,});


const mapDispatchToProps = (dispatch)=> ({setPokemons: (value) => dispatch(setPokemonsActions(value)),}); //recibe el dispatcher de redux y retorna el objeto mapeado pero ahora con los actions creators que habíamos establecido.


export default connect(mapStateToProps, mapDispatchToProps)(App);

//conectamos el componente con redux
