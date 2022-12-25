import * as React from 'react'
import { SafeAreaView, useColorScheme } from 'react-native'
import 'react-native-reanimated'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { TestBokehExampleStory } from './src/test-bokeh-example/test-bokeh-example.story'

const MainTabs = createMaterialTopTabNavigator()

const App = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={backgroundStyle}>
        <MainTabs.Navigator>
          <MainTabs.Screen name='Home' component={TestBokehExampleStory} />
        </MainTabs.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  )
}

export default App
