import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import HomeScreen from './components/pages/HomeScreen'
import ResultsScreen from './components/pages/ResultsScreen'
import MainScreen from './components/pages/MainScreen'

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Main: {
            screen: MainScreen,
        },
        Results: {
            screen: ResultsScreen,
        },
    },
    {
        initialRouteName: 'Home',
    }
)

export default class App extends Component {
    render() {
        return <RootStack />
    }
}
