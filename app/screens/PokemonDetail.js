import {View, Text, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

let PokemonDetail = ({pokemon}) => {
  const [pokemonSelected, setPokemonSelected] = useState(pokemon);
  useEffect(() => {
    if (pokemon.img === '' || !pokemon.img) {
      axios.get(pokemon.url).then((resp) => {
        console.log('datos pokemon', resp);
        let newPokemon = pokemon;
        newPokemon.img = resp.data.sprites.front_default;
        newPokemon.id = resp.data.id;
        setPokemonSelected(newPokemon);
      });
    } else {
      setPokemonSelected(pokemon);
    }
  }, [pokemon]);

  return (
    <View>
      <Image source={{uri: pokemonSelected.img}} style={{width: 150, height: 150}}/>
      <Text>Nombre: {pokemonSelected.name}</Text>
    </View>
  )
}

export default PokemonDetail;