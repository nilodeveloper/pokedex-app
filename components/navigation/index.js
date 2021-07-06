import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet } from "react-native";
import axios from 'axios';
import { sumId, minusId, findIdOrName } from '../../services/pokedex';

export const Navigation = (props) => {
    const [identify, setIdentify] = useState('1')
    return (
        <View style={styles.buttons}>
            <Button
                title="Anterior"
                onPress={async () => {
                    const data = await minusId(props.pokemon?.number)
                    props.setPokemon({ number: data.number, info: data.info })
                }}
            />

            <TextInput style={styles.input}
                onChangeText={async (value) => {
                    setIdentify(value)
                }}
            />

            <Button
                title="Go"
                onPress={async () => {
                    const {number, info} = await findIdOrName(identify.toLowerCase())
                    props.setPokemon({ number: number, info: info })
                }
                }
            />
            
            <Button
                title="Próximo"
                onPress={async () => {
                    const data = await sumId(props.pokemon?.number)
                    props.setPokemon({ number: data.number, info: data.info })
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 50,
      width: 200,
      borderWidth: 1,
    },
  
    buttons: {
      flexDirection: "row",
      justifyContent: 'space-between',
    },
  })