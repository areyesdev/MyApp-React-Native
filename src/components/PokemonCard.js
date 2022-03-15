import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

import getColorByPokemonType from '../utils/getColorByPokemonType';

export default function PokemonCard(props) {
  const { pokemon } = props;

  const pokemonColor = getColorByPokemonType(pokemon.type);
  const cardStyles = { backgroundColor: pokemonColor, ...styles.card };

  const goToPokemon = () => {
    console.log(`Vamos a pokemon: ${pokemon.name}`);
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={cardStyles}>
        <Text style={styles.number}># {`${pokemon.order}`.padStart(3, 0)}</Text>
        <Text style={styles.name}>{pokemon.name}</Text>
        <Image source={{ uri: pokemon.image }} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
    margin: 8,
    borderRadius: 15,
    padding: 5,
  },
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#fff',
    fontSize: 11,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10,
    textTransform: 'capitalize',
  },
  image: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
});
