import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import MainScreen from './components/pages/MainScreen'
import ResultsScreen from './components/pages/ResultsScreen'
import SplashScreen from './components/pages/SplashScreen'

const RootStack = StackNavigator(
    {
        Home: {
            screen: SplashScreen,
        },
        Main: {
            screen: MainScreen,
        },
        Results: {
            screen: ResultsScreen,
        },
    },
    {
        initialRouteName: 'Main',
    }
)

export default class App extends Component {
    render() {
        return <RootStack />
    }
}
