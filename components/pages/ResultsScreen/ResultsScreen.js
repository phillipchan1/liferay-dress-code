import React, { Component } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import BgAudio from 'react-native-background-audio'

export default class ResultsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.heading}>Looking snazzy!</Text>
                    <Image source={this.props.navigation.state.params.tops.image} style={styles.image} />
                    <View style={styles.separator} />
                    <Image source={this.props.navigation.state.params.bottoms.image} style={styles.image} />
                    <View style={styles.separator} />
                    <Image source={this.props.navigation.state.params.shoes.image} style={styles.image} />
                </View>

                <View style={styles.navigation}>
                    <Button color='#fff' title="Change clothes" />
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
        paddingTop: 30,
    },
    image: {
        height: 150,
        width: 150,
    },
    heading: {
        color: '#fff',
        fontSize: 50,
        paddingBottom: 30,
        paddingLeft: 15,
        paddingRight: 15,
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