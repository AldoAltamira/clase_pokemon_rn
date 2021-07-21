import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button, View, Text, TextInput} from 'react-native';
import PokemonDetail from './PokemonDetail';
import styles from '../style';

let Principal = ({navigation}) => {
  let numeroRandom = parseInt(Math.random() * 19);
  const [pokemon, setPokemon] = useState({});
  const [search, setSearch] = useState('');
  const [listadoPokemon, setListadoPokemon] = useState([]);
  const [rango, setRango] = useState([0, 20]);
  const [random, setRandom] = useState(numeroRandom);

  useEffect(() => {
    obtenerListado();
  }, []);

  const arrToMulti = (list, elementsPerSubArray) => {
    var matrix = [], i, k;
    for (i = 0, k = -1; i < list.length; i++) {
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }
        matrix[k].push(list[i]);
    }
    return matrix;
  }

  const obtenerListado = () => {
    let url = `https://pokeapi.co/api/v2/pokemon?offset=${rango[0]}&limit=${rango[1]}`
    axios.get(url).then((resp) => {
      let listado = resp.data.results.map((e, i) => {
        e.id = i;
        return e;
      });
      let listadoTres = arrToMulti(listado, 4);
      setListadoPokemon(listadoTres);
      console.log('listadoTres', listadoTres);
      let idRandom = 0;
      if (random <= resp.data.results.length) {
        idRandom = random;
      }
      let newPokemon = listado[idRandom];
      setPokemon(newPokemon);
      console.log('listadoPokeon', listadoPokemon);
    })
    .catch((err) => {
      console.log('listado pokemon error', err);
    });
  }

  const getRandomPokemon = (nuevoId) => {
    let url = 'https://pokeapi.co/api/v2/pokemon/' + nuevoId.toString().toLowerCase();
    axios.get(url).then((resp) => {
      let newPokemonRandom = {
        name: resp.data.name,
        url: url,
        img: resp.data.sprites.front_default,
        id: resp.data.id,
      };
      setPokemon(newPokemonRandom);
    })
    .catch((err) => {
      console.log('listado pokemon error', err);
      alert(`El pokemon ${nuevoId} no existe`);
    });
  };

  return (
    <View style={[styles.containerCenter, styles.centerDiv]}>
      <PokemonDetail pokemon={pokemon} />

      <TextInput
        onChangeText={setSearch}
        value={search}
        style={
          {
            width: '90%',
            margin: 12,
            borderWidth: 1,
          }
        }
      />
      
      <Button color="black" onPress={() => getRandomPokemon(search)} title="Buscar Pokemon" />

      <Button onPress={() => getRandomPokemon(parseInt(Math.random() * 800))} title="Pokemon Random" />
      {listadoPokemon.map((e, i) => (
        <View style={{flexDirection: 'row'}}>
        {e.map((f, ind) => {
          console.log('f', f);
          return <Button color='gold' title={f.name || 'Sin Nombre'} onPress={() => setPokemon(f)} />
        })}
        </View>
      ))}
    </View>
  )
}

export default Principal;