import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class MainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>Content</Text>
                </View>
                <View style={styles.navigation}>
                    <Text>Navigation</Text>
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
        height: 100,
    },
})
