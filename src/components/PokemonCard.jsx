import React from "react";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import "./PokemonList.css";
import StarButton from "./StarButton";
import { useDispatch } from "react-redux";
import { setFavorites } from "../actions";

const PokemonCard = ({ name, image, types, id , favorite}) => {
  const dispatch = useDispatch();
  const typesString = types.map((e) => e.type.name).join(", ");

  const handleOnFavorite = () => {
    dispatch(setFavorites({pokemonId: id}));
  };
  return (
    <Card
      title={name}
      cover={<img src={image} alt={name} />}
      extra={
        <StarButton
          isFavorite = {favorite}
          onClick={handleOnFavorite}
        />
      }
    >
      <Meta description={typesString} />
    </Card>
  );
};

export default PokemonCard;

//podríamos pedir que el componente realice la petición de los detalles pero lo hacemos con redux thunk
