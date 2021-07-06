import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

export const Header = (props) => {
    return (<>
        <View style={styles.image}>
            <Image
                source={{ uri: props.pokemon?.info?.sprites?.front_default }}
                style={{ width: 120, height: 120 }}
            />
            <Text style={{ flex: 1, flexWrap: 'wrap', paddingHorizontal: 5 }}>
                Nome: {props.pokemon?.info?.name}
            </Text>
            <Text style={{ flex: 1, flexWrap: 'wrap', paddingHorizontal: 5 }}>
                Número: {props.pokemon?.info?.id}
            </Text>
            <View>
            {props.pokemon?.info?.types.map(types => (
                <Text key={types.type.name}>
                    {types?.type?.name}
                </Text>
            ))}
        </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5
      }
})