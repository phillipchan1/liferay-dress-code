import React, { Component } from 'react'
import { Button, View, Text } from 'react-native'

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Spash Screen</Text>
                <Button
                    title="Dress Yo Self"
                    onPress={() => this.props.navigation.navigate('Main')}
                />
            </View>
        )
    }
}
