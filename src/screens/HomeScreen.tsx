import { useEffect, useRef, useState } from 'react'
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native'

const FadeView = ({
  children,
  fadeAnimation,
}: {
  children: React.ReactNode
  fadeAnimation: number
}) => {
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (fadeAnimation === 0) {
      return
    }
    Animated.timing(fadeAnim, {
      toValue: fadeAnimation % 2,
      duration: 2000,
      useNativeDriver: true,
    }).start()
  }, [fadeAnim, fadeAnimation])

  return (
    <Animated.View
      style={{
        ...styles.fadeInContainer,
        opacity: fadeAnim,
      }}>
      {children}
    </Animated.View>
  )
}

const MoveView = ({
  moveAnimation,
  children,
}: {
  children: React.ReactNode
  moveAnimation: number
}) => {
  const moveAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (moveAnimation === 0) {
      return
    }
    // Start the move animation
    Animated.timing(moveAnim, {
      toValue: moveAnimation % 2 ? 100 : 0,
      duration: 2000,
      // speed: 1,
      // bounciness: 0,
      useNativeDriver: true,
    }).start()
  }, [moveAnim, moveAnimation])

  return (
    <Animated.View
      style={{
        ...styles.moveContainer,
        transform: [{ translateY: moveAnim }],
      }}>
      {children}
    </Animated.View>
  )
}

const HomeScreen = () => {
  const [fadeAnimation, setFadeAnimation] = useState(0)
  const [moveAnimation, setMoveAnimation] = useState(0)
  return (
    <View style={styles.container}>
      <View style={styles.marginTop32}>
        <Text style={styles.title}>Learning react animations</Text>
      </View>
      <View style={styles.centeredContent}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={() => {
              console.log('LOGGERS animate button pressed')
              setFadeAnimation(prev => prev + 1)
            }}
            style={styles.animateButton}>
            <Text>FADE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log('LOGGERS move button pressed')
              setMoveAnimation(prev => prev + 1)
            }}
            style={styles.animateButton}>
            <Text>MOVE</Text>
          </TouchableOpacity>
        </View>
        <FadeView fadeAnimation={fadeAnimation}>
          <Text>Fade In Animation Example</Text>
        </FadeView>
        <MoveView moveAnimation={moveAnimation}>
          <Text>Move Animation Example</Text>
        </MoveView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DBFFCB',
  },
  animateButton: {
    padding: 8,
    backgroundColor: '#6FE6FC',
    borderRadius: 8,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.2,
    borderColor: '#273F4F',
  },
  fadeInContainer: {
    alignItems: 'center',
    padding: 24,
    margin: 24,
    borderRadius: 16,
    borderWidth: 0.2,
    borderColor: '#273F4F',
    backgroundColor: '#FFC6C6',
  },
  moveContainer: {
    alignItems: 'center',
    padding: 24,
    margin: 24,
    borderRadius: 16,
    borderWidth: 0.2,
    borderColor: '#273F4F',
    backgroundColor: '#FFC6C6',
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  marginTop32: {
    marginTop: 32,
  },
  centeredContent: {
    flex: 1,
    marginTop: 100,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})

export default HomeScreen
