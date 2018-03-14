import React, { Component } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

import Carousel from '../../molecules/Carousel'
import Presets from '../../molecules/Presets'
import clothing from '../../../assets/clothing'

export default class MainScreen extends Component {
    constructor(props) {
        super(props)

        let params = props.navigation.state.params

        this.state = {
            tops: params ? params.tops : clothing.tops[0],
            bottoms: params ? params.bottoms : clothing.bottoms[1],
            shoes: params ? params.shoes : clothing.shoes[1],
        }
    }

    handleImageChange(data) {
        this.setState(() => ({
            [data.group]: clothing[data.group][data.index],
        }))
    }

    handlePresetChange(option) {
        const { wardrobe } = option

        this.setState({
            tops: clothing.tops[wardrobe.tops],
            bottoms: clothing.bottoms[wardrobe.bottoms],
            shoes: clothing.shoes[wardrobe.shoes],
        })
    }

    handleRandomChange() {
        this.setState({
            tops: clothing.tops[Math.floor(Math.random() * clothing.tops.length)],
            bottoms: clothing.bottoms[Math.floor(Math.random() * clothing.bottoms.length)],
            shoes: clothing.shoes[Math.floor(Math.random() * clothing.shoes.length)],
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Carousel
                        currentImage={this.state.tops}
                        style={styles.carousel}
                        group="tops"
                        length={clothing.tops.length - 1}
                        onImageChange={data => this.handleImageChange(data)}
                    />

                    <View style={styles.separator} />

                    <Carousel
                        currentImage={this.state.bottoms}
                        style={styles.carousel}
                        group="bottoms"
                        length={clothing.bottoms.length - 1}
                        onImageChange={data => this.handleImageChange(data)}
                    />
                    <View style={styles.separator} />
                    <Carousel
                        currentImage={this.state.shoes}
                        style={styles.carousel}
                        group="shoes"
                        length={clothing.shoes.length - 1}
                        onImageChange={data => this.handleImageChange(data)}
                    />
                </View>
                <View style={styles.navigation}>
                    <Presets handlePresetChange={option => this.handlePresetChange(option)} />

                    <Button
                        style={styles.button}
                        title="Random"
                        onPress={() => this.handleRandomChange()}
                    >
                        Random
                    </Button>

                    <Button
                        style={styles.button}
                        title="Results"
                        onPress={() => this.props.navigation.navigate('Results', this.state)}
                    >
                        Results
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        color: 'white',
    },
    separator: {
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        height: 1,
        margin: '5%',
        width: '90%',
    },
    carousel: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: 'skyblue',
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 30,
    },
    image: {
        height: '100%',
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
