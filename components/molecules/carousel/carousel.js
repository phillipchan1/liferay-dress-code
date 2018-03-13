import React from 'react';
import { AppRegistry, View, StyleSheet, Text } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class Carousel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numOfImages: props.images.length,
            selectedImage: 0
        }
    }

    swipedLeft() {
        console.log('swipedleft')
        this.setState(prevState => ({ selectedImage: prevState.selectedImage + 1 }));

        console.log(this.state.selectedImage);
    }

    swipedRight() {
        console.log('swipedRight');
        this.setState(prevState => ({ selectedImage: prevState.selectedImage - 1 }));

        if (this.state.selectedImage < 0)
        console.log(this.state.selectedImage);
    }

    render() {
        return (
            <GestureRecognizer
            onSwipeLeft={this.swipedLeft.bind(this)}
            onSwipeRight={this.swipedRight.bind(this)}
            style={styles.carousel}
            >
            <Text>This is the carousel numofImages: {this.state.numOfImages} currentImage: {this.state.selectedImage} component</Text>
            </GestureRecognizer>
            )
    }
}

const styles = StyleSheet.create({
  carousel: {
    height: 100
  }
});

AppRegistry.registerComponent('reactnativeapp', () => Carousel);