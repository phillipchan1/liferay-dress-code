import React, { Component } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import BgAudio from 'react-native-background-audio'

export default class ResultsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Looking snazzy!</Text>

                <View style={styles.content}>
                    <Image source={this.props.navigation.state.params.tops.image} style={styles.image} />
                    <View style={styles.separator} />
                    <Image source={this.props.navigation.state.params.bottoms.image} style={styles.image} />
                    <View style={styles.separator} />
                    <Image source={this.props.navigation.state.params.shoes.image} style={styles.image} />
                </View>

                <View style={styles.navigation}>
                    <Button color='#fff' title="Change clothes" onPress={() => this.props.navigation.navigate('Main', this.props.navigation.state.params)} />
                </View>

               <BgAudio options={audioOptions}></BgAudio>
            </View>
        )
    }
}

const audioOptions = {
    source: {
        local: require('../../../assets/whatislove.mp3')
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'skyblue',
        flex: 1,
    },
    content: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        height: 100,
        width: 100,
    },
    heading: {
        color: '#fff',
        fontSize: 40,
        paddingBottom: 30,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 60,
        textAlign: 'center',
    },
    navigation: {
        backgroundColor: 'steelblue',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
    },
})