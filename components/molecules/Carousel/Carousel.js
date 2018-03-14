import React from 'react'
import { AppRegistry, View, StyleSheet, Text, Image, style } from 'react-native'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'

const Carousel = ({ currentImage, length, group, onImageChange }) => {
    function swipedLeft() {
        if (currentImage.index === length) {
            onImageChange({
                group: group,
                index: 0,
            })
        } else {
            onImageChange({
                group: group,
                index: currentImage.index + 1,
            })
        }
    }

    function swipedRight() {
        if (currentImage.index === 0) {
            onImageChange({
                group: group,
                index: length,
            })
        } else {
            onImageChange({
                group: group,
                index: currentImage.index - 1,
            })
        }
    }

    return (
        <GestureRecognizer
            onSwipeLeft={swipedLeft}
            onSwipeRight={swipedRight}
            style={styles.carousel}
        >
            <Image style={styles.image} source={currentImage.image} />
        </GestureRecognizer>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
    },
    carousel: {
        backgroundColor: 'skyblue',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Carousel
