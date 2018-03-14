import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import MainScreen from './components/pages/MainScreen'
import ResultsScreen from './components/pages/ResultsScreen'
import SplashScreen from './components/pages/SplashScreen'

const RootStack = StackNavigator(
    {
        Splash: {
            screen: SplashScreen,
            navigationOptions: {
                header: null
            },
        },
        Main: {
            screen: MainScreen,
            navigationOptions: {
                header: null
            },
        },
        Results: {
            screen: ResultsScreen,
            navigationOptions: {
                header: null
            },
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
