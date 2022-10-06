import { Col } from 'antd';
import Searcher from './components/Searcher';
import './App.css';
import React from 'react'
import { Component } from 'react-redux'

function App() {
  return (
    <div className='App'>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
    </div>
  );
}

const mapStateToProps = (state) => ({
  pokemons:state.pokemons,  
}); //recibir estado y retorna un objeto cuyas propiedades va a enviar al compoennte que se conecta a redux

const mapDispatchToProps = (dispatch)=> ({
  setPokemons: (value)=> dispatch(setPokemonsActions(value))
}); //recibe el dispatcher de redux y retorna el objeto mapeado pero ahora con los actions creators que habíamos establecido.


export default connect(mapStateToProps, mapDispatchToProps)(App);

//conectamos el componente con redux