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
		const imageUrl = `../../../assets/${this.props.currentImage.url}.png`;

		return (
			<GestureRecognizer
				onSwipeLeft={this.swipedLeft.bind(this)}
				onSwipeRight={this.swipedRight.bind(this)}
				style={styles.carousel}
			>
				<Image
					style={{ width: "100%", height: 100 }}
					source={require(imageUrl)}
				/>
			</GestureRecognizer>
		)
	}
}

const styles = StyleSheet.create({
	carousel: {
		height: 150,
	},
})

AppRegistry.registerComponent('reactnativeapp', () => Carousel)