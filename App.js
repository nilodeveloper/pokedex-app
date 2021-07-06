/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {SafeAreaView, StyleSheet } from 'react-native';
import { pokedexApi } from './services/pokedex';
import { Stats } from './components/stats/index';
import { Header } from './components/header/index';
import { Navigation } from './components/navigation/index';

const App = () => {
  const [pokemon, setPokemon] = useState({number: 1, data:{}})

  useEffect(async ()=>{
    let poke = await pokedexApi('1')
    setPokemon({number: 1, info: poke.data})
  }, [])

  return(
    <SafeAreaView style={styles.container}>
      <Header pokemon={pokemon}/>
      <Stats pokemon={pokemon}/>
      <Navigation 
        pokemon={pokemon} 
        setPokemon={setPokemon}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#FFF',
  },
})

export default App;
