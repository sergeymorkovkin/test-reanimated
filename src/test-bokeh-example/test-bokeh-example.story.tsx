import React from 'react'
import { Dimensions, View } from 'react-native'
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { styles } from './test-bokeh-example.styles'

const { width, height } = Dimensions.get('window')

function getRandomWidth() {
  return Math.random() * width
}

function getRandomHeight() {
  return Math.random() * height
}

function getRandomHue() {
  return 100 + Math.random() * 100
}

function getRandomPositionDiff() {
  return -100 + Math.random() * 200
}

function getRandomHueDiff() {
  return Math.random() * 100
}

function Circle() {

  // @ts-ignore
  const left = useSharedValue(getRandomWidth(), true)

  // @ts-ignore
  const top = useSharedValue(getRandomHeight(), true)

  // @ts-ignore
  const hue = useSharedValue(getRandomHue(), true)

  const duration = 2000 + Math.random() * 1000
  const power = Math.random()
  const config = { duration, easing: Easing.linear }

  const update = () => {
    left.value = withTiming(left.value + getRandomPositionDiff(), config)
    top.value = withTiming(top.value + getRandomPositionDiff(), config)
    hue.value = withTiming(hue.value + getRandomHueDiff(), config)
  }

  React.useEffect(() => {
    update()
    const id = setInterval(update, duration)
    return () => clearInterval(id)
  })

  const size = 100 + power * 250

  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: `hsl(${hue.value}, 100%, 50%)`,
      // width: size,
      // height: size,
      // top: top.value - size / 2,
      // left: left.value - size / 2,
      opacity: 0.1 + (1 - power) * 0.1,
      transform: [
        { translateX: top.value - size / 2 },
        { translateY: left.value - size / 2 },
      ]
    }
  }, [])

  return <Animated.View style={[styles.Bokeh, { width: size, height: size }, animatedStyle]} />
}

interface BokehProps {
  count: number
}

function Bokeh({ count }: BokehProps) {
  return (
    <>
      {[...Array(count)].map((_, i) => (
          <Circle key={i} />
      ))}
    </>
  )
}

export function TestBokehExampleStory() {
  return (
    <View style={styles.Container}>
      <Bokeh count={100} />
    </View>
  )
}
