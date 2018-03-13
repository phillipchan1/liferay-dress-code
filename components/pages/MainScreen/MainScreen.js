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
                    <Text>Content</Text>
                    <Image source={shirt1} />
                    <Image source={pants1} />
                    <Image source={shoes1} />
                </View>

                <View style={styles.navigation}>
                    <Button title="presets" onPress={() => console.log('presets')}>
                        Presets
                    </Button>
                    <Button title="rand" onPress={() => console.log('rand')}>
                        Random
                    </Button>
                    <Button title="results" onPress={() => console.log('results')}>
                        Results
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
    navigation: {
        backgroundColor: 'steelblue',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
    },
})
