import React from 'react';
// import useEffect from 'react'
import logo from './statics/logo.svg'
import Searcher from './components/Searcher';
import { Col } from 'antd';
import './App.css';
// import {getPokemon } from './api'
import PokemonList from './components/PokemonList';
// import { Component } from 'react-redux'

function App() {

  // useEffect(() =>{
  //   const fetchPokemons = async() => {
  //     await getPokemon();
  //   };
  //   fetchPokemons();
  // }, [])

  return (
    <div className='App'>
      <Col span={4} offset={10}>
      <img src={logo} alt='Pokedex'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList/>
    </div>
  );
}

export default App;
/*
const mapStateToProps = (state) => ({
  pokemons:state.pokemons,  
}); //recibir estado y retorna un objeto cuyas propiedades va a enviar al compoennte que se conecta a redux

const mapDispatchToProps = (dispatch)=> ({
  setPokemons: (value)=> dispatch(setPokemonsActions(value))
}); //recibe el dispatcher de redux y retorna el objeto mapeado pero ahora con los actions creators que habíamos establecido.


export default connect(mapStateToProps, mapDispatchToProps)(App);

//conectamos el componente con redux
*/