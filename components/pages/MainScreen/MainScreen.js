import React, { Component } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

import shirt1 from '../../../assets/shirt1.png'
import pants1 from '../../../assets/pants1.png'
import shoes1 from '../../../assets/shoes1.png'

export default class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Image source={shirt1} style={styles.image} />
                    <View style={styles.separator} />
                    <Image source={pants1} style={styles.image} />
                    <View style={styles.separator} />
                    <Image source={shoes1} style={styles.image} />
                </View>

                <View style={styles.navigation}>
                    <Button color='#fff' title="Presets" onPress={() => console.log('presets')}>
                        Presets
                    </Button>
                    <Button color='#fff' title="Random" onPress={() => console.log('random')}>
                        Random
                    </Button>
                    <Button color='#fff' title="Results" onPress={() => this.props.navigation.navigate('Results')}>
                        Results
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    separator: {
        borderBottomColor: '#dfdfdf',
        borderBottomWidth: 2,
        height: 1,
        margin: 15,
        width: 300,
    },
    container: {
        backgroundColor: '#dfdfdf',
        flex: 1,
    },
    content: {
        alignItems: 'center',
        backgroundColor: 'skyblue',
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        height: 150,
        width: 150,
    },
    navigation: {
        backgroundColor: 'steelblue',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
    },
})
