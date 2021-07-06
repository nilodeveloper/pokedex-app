import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const Stats = (props) => {
    return(
        <View style={styles.stats}>
            {props.pokemon?.info?.stats?.map(stats => (
            <Text key={stats.stat.name}>
                {stats?.stat?.name}: {stats?.base_stat}
            </Text>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    stats: {
      justifyContent: 'center',
      alignItems: 'center'
    }
})