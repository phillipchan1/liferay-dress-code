import React, { Component } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import Carousel from '../../molecules/carousel/carousel';

export default class MainScreen extends Component {
    constructor() {
        super();

        this.state = {
            tops: clothing.tops[0],
            bottoms: clothing.bottoms[0],
            shoes: clothing.shoes[0]
        }
    }

    handleImageChange(data) {
        console.log(data.group);
        this.setState(() => (
            {
                [data.group]: clothing[data.group][data.index]
            }
        ));
    }

    render() {
        return (
            <View style={styles.container}>
                <Carousel
                    currentImage={this.state.tops}
                    style={styles.carousel}
                    group="tops"
                    length={clothing.tops.length - 1}
                    onImageChange={(data) => this.handleImageChange(data) }
                />
                <Carousel
                    currentImage={this.state.bottoms}
                    style={styles.carousel}
                    group="bottoms"
                    length={clothing.bottoms.length - 1}
                    onImageChange={(data) => this.handleImageChange(data) }
                />
                <Carousel
                    currentImage={this.state.shoes}
                    style={styles.carousel}
                    group="shoes"
                    length={clothing.shoes.length - 1}
                    onImageChange={(data) => this.handleImageChange(data) }
                />
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

const clothing = {
    tops: [
        {
            image: require('../../../assets/shirt1.png'),
            index: 0,
        },
        {
            image: require('../../../assets/shirt2.png'),
            index: 1,
        },
        {
            image: require('../../../assets/shirt3.png'),
            index: 2,
        }
    ],
    bottoms: [
        {
            image: require('../../../assets/pants1.png'),
            index: 0,
        },
        {
            image: require('../../../assets/pants2.png'),
            index: 1,
        },
        {
            image: require('../../../assets/pants3.png'),
            index: 2,
        }
    ],
    shoes: [
        {
            image: require('../../../assets/shoes1.png'),
            index: 0,
        },
        {
            image: require('../../../assets/shoes2.png'),
            index: 1,
        },
        {
            image: require('../../../assets/shoes3.png'),
            index: 2,
        }
    ]
}

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
        height: "100%",
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
