import React, { Component } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import shirt1 from '../../../assets/shirt1.png'
import pants1 from '../../../assets/pants1.png'
import shoes1 from '../../../assets/shoes1.png'
import { StyleSheet, Text, View } from 'react-native'
// import Carousel from '../../molecules/carousel/carousel';

export default class MainScreen extends Component {
    constructor() {
        super();

        this.state = {
            tops: tops[0]
        }
    }

    handleImageChange(data) {
        this.setState(() => (
            {
                [data.group]: tops[data.index]
            }
        ));
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.container}>
                    <ScrollView>
                        <View style={styles.content}>
                            <Image source={shirt1} style={styles.image} />
                            <View style={styles.separator} />
                            <Image source={pants1} style={styles.image} />
                            <View style={styles.separator} />
                            <Image source={shoes1} style={styles.image} />
                        </View>
                    </ScrollView>
                </View>
            {/*    <Carousel
                    currentImage={this.state.tops}
                    style={styles.carousel}
                    group="tops"
                    length={tops.length - 1}
                    onImageChange={(data) => this.handleImageChange(data) }
                />*/}
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

var tops = [
    {
        url: 'shirt1',
        index: 0,
    },
    {
        url: 'shirt2',
        index: 1,
    },
    {
        url: 'shirt3',
        index: 2,
    }
];

const styles = StyleSheet.create({
    separator: {
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        height: 1,
        margin: 15,
        width: 300,
    },
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
    navigation: {
        backgroundColor: 'steelblue',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
    },
})
