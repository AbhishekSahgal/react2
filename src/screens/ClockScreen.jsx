import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, useWindowDimensions, TouchableOpacity, Platform } from 'react-native';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

const CountdownScreen = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining('2025-02-01'));
  const [selectedDate, setSelectedDate] = useState(moment('2025-02-01'));
  const [showPicker, setShowPicker] = useState(false);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(selectedDate.format('YYYY-MM-DD')));
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedDate]);

  // Use useCallback to avoid unnecessary re-renders
  const handleDateChange = useCallback((event, date) => {
    if (date && event.type === 'set') {
      setSelectedDate(moment(date));
    }
    setShowPicker(false);
  }, []);

  function calculateTimeRemaining(targetDate) {
    const target = moment(targetDate);
    const now = moment();
    const duration = moment.duration(target.diff(now));

    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  }

  const isLandscape = width > height;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={[styles.timerContainer, isLandscape && styles.landscapeContainer]}>
        <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.titleContainer}>
          <Text style={styles.title}>Countdown to {selectedDate.format('DD MMMM YYYY')}</Text>
        </TouchableOpacity>
        <View style={[styles.timeBlocks, isLandscape && styles.landscapeTimeBlocks]}>
          <View style={styles.timeBlock}>
            <Text style={styles.timeText}>{timeRemaining.days}</Text>
            <Text style={styles.label}>Days</Text>
          </View>
          <View style={styles.timeBlock}>
            <Text style={styles.timeText}>{timeRemaining.hours}</Text>
            <Text style={styles.label}>Hours</Text>
          </View>
          <View style={styles.timeBlock}>
            <Text style={styles.timeText}>{timeRemaining.minutes}</Text>
            <Text style={styles.label}>Minutes</Text>
          </View>
          <View style={styles.timeBlock}>
            <Text style={styles.timeText}>{timeRemaining.seconds}</Text>
            <Text style={styles.label}>Seconds</Text>
          </View>
        </View>
      </View>
      {showPicker && (
        <DateTimePicker
          value={selectedDate.toDate()}
          mode='date'
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          onChange={handleDateChange}
        />
      )}
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
  titleContainer: {
    width: '100%',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  timerContainer: {
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
  title: {
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    marginBottom: 10,
  },
  timeBlocks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  landscapeTimeBlocks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  timeBlock: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    backgroundColor: "#1e1e1e",
    borderRadius: 15,
    padding: 10,
    paddingTop: 20,
  },
  timeText: {
    fontSize: 85,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  label: {
    fontSize: 15,
    color: '#b0b0b0',
    paddingBottom: 20,
  },
});

export default CountdownScreen;
