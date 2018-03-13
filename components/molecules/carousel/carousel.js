import React from 'react';
import { AppRegistry, View, Text } from 'react-native';

export default class Carousel extends React.Component {
    render() {
        return (
            <View>
                <Text>This is the carousel component</Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('reactnativeapp', () => Carousel);