import React, { Component } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import BgAudio from 'react-native-background-audio'

import shirt1 from '../../../assets/shirt1.png'
import pants1 from '../../../assets/pants1.png'
import shoes1 from '../../../assets/shoes1.png'

export default class ResultsScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.heading}>Looking snazzy!</Text>
                    <Image source={shirt1} style={styles.image} />
                    <View style={styles.separator} />
                    <Image source={pants1} style={styles.image} />
                    <View style={styles.separator} />
                    <Image source={shoes1} style={styles.image} />
                </View>

                <View style={styles.navigation}>
                    <Button color='#fff' title="Change clothes" onPress={() => this.props.navigation.navigate('Main')} />
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