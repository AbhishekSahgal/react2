import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, useWindowDimensions } from 'react-native';
import moment from 'moment';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const FlipClockScreen = () => {
  const [currentTime, setCurrentTime] = useState(moment().format('HH:mm:ss.SSS'));
  const { width, height } = useWindowDimensions();
  
  const previousTime = useSharedValue(currentTime);
  const rotateX = useSharedValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newTime = moment().format('HH:mm:ss.SSS');
      if (newTime !== currentTime) {
        rotateX.value = withTiming(180, { duration: 500 }, () => {
          rotateX.value = withTiming(0, { duration: 0 });
          previousTime.value = newTime;
          setCurrentTime(newTime);
        });
      }
    }, 1);

    return () => clearInterval(interval);
  }, [currentTime, rotateX, previousTime]);

  const flipStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { perspective: 1000 },
        { rotateX: `${rotateX.value}deg` },
      ],
    };
  });

  const isLandscape = width > height;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={[styles.clockContainer, isLandscape && styles.landscapeContainer]}>
        <Animated.View style={[styles.flipCard, flipStyle]}>
          <Text style={styles.clockText}>{previousTime.value}</Text>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 25,
  },
  landscapeContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    width: '100%',
  },
  flipCard: {
    backfaceVisibility: 'hidden',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    padding: 20,
  },
  clockText: {
    fontSize: 80,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default FlipClockScreen;
