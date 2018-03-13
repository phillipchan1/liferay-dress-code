import React, { Component } from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import shirt1 from '../../../assets/shirt1.png'

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Main')} style={styles.content}>
                        <Image source={shirt1} style={styles.image} />

                        <Text style={styles.button}>Get dressed for work!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        color: '#fff',
        fontSize: 25,
        paddingTop: 15,
    },
    container: {
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
})