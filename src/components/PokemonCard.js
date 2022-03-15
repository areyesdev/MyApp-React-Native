import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

export default function PokemonCard(props) {
  const { pokemon } = props;

  const goToPokemon = () => {
    console.log(`Vamos a pokemon: ${pokemon.name}`);
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
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
    backgroundColor: '#a4d1b3',
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 20,
  },
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#000',
    fontSize: 11,
  },
  name: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 10,
  },
  image: {
    position: 'absolute',
    bottom: 1,
    right: 8,
    width: 90,
    height: 90,
  },
});
