import 'react-native-reanimated'
import * as React from 'react'
import { SafeAreaView, useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { TestBokehExampleStory } from './src/test-bokeh-example/test-bokeh-example.story'

const MainTabs = createMaterialTopTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <MainTabs.Navigator>
        <MainTabs.Screen name='Home' component={TestBokehExampleStory} />
      </MainTabs.Navigator>
    </NavigationContainer>
  )
}

export default App
