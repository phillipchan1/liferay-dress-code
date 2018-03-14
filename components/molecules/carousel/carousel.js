import React from 'react'
import { AppRegistry, View, StyleSheet, Text, Image } from 'react-native'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'

export default class Carousel extends React.Component {

	swipedLeft() {
		if (this.props.currentImage.index === this.props.length) {
			this.props.onImageChange({
				group: this.props.group,
				index: 0,
			})
		} else {
			this.props.onImageChange({
				group: this.props.group,
				index: this.props.currentImage.index + 1,
			})
		}
	}

	swipedRight() {
		if (this.props.currentImage.index === 0) {
			this.props.onImageChange({
				group: this.props.group,
				index: this.props.length,
			})
		} else {
			this.props.onImageChange({
				group: this.props.group,
				index: this.props.currentImage.index - 1,
			})
		}
	}

	render() {
		return (
			<GestureRecognizer
				onSwipeLeft={this.swipedLeft.bind(this)}
				onSwipeRight={this.swipedRight.bind(this)}
				style={this.props.style}
			>
				<Image
					style={styles.image}
					source={this.props.currentImage.image}
				/>
			</GestureRecognizer>
		)
	}
}

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
    },
})