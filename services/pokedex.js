import React from 'react';
import axios from 'axios';
import { Alert } from 'react-native';

const API = 'https://pokeapi.co/api/v2/pokemon/'

export const pokedexApi = async (id) => {
    return await axios.get(`${API}${id}`)
}

export const sumId = async (number) => {
    let id = Number(number) + 1
    let pokemon = await pokedexApi(id)
    console.log('pokemon', pokemon?.data)
    return {number: id, info: pokemon?.data}
}

export const minusId = async (number) => {
    let id = Number(number) - 1
    if(id>=1){
        let pokemon = await pokedexApi(id)
        console.log('pokemon', pokemon?.data)
        return {number: id, info: pokemon?.data}
    }else{
        Alert.alert('Calma lá!', 'Não existe id menor que 1!')
    }
}

export const findIdOrName = async (find) => {
    if(!find || find === ''){
        const id = parseInt(Math.random()*897+1).toString()
        console.log('random', id)
        let pokemon = await pokedexApi(id)
        return {number: pokemon?.data?.id, info: pokemon?.data}
    }
    let pokemon = await pokedexApi(find)
    return {number: pokemon?.data?.id, info: pokemon?.data}
}