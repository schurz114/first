import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    if (showSplash) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setShowSplash(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [showSplash]);

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <TouchableOpacity 
          style={styles.adContainer}
          onPress={() => {
            alert('广告被点击');
          }}
        >
          <Image
            source={require('./assets/ad-image.png')}
            style={styles.adImage}
          />
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.skipButton}
          onPress={() => setShowSplash(false)}
        >
          <Text style={styles.skipText}>跳过 {timeLeft}s</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>欢迎来到主页面!</Text>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashContainer: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  adImage: {
    width: windowWidth,
    height: windowHeight,
    resizeMode: 'cover',
  },
  skipButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 8,
    borderRadius: 15,
    minWidth: 80,
    alignItems: 'center',
  },
  skipText: {
    color: '#fff',
    fontSize: 14,
  },
  adContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}); 