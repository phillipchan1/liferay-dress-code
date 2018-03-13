import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class ResultsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text>Results Screen</Text>
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
        flex: 1,
        justifyContent: 'center',
    },
})
