import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';

const API_KEY = 'xV0d3OpX9JtcNcjzBsK89mn0UsjzYaBU'; // Replace with your Calendarific API key

const ScheduleScreen = () => {
  const [selectedDate, setSelectedDate] = useState('2024-01-02');
  const [todayEvents, setTodayEvents] = useState([]);
  const [tomorrowEvents, setTomorrowEvents] = useState([]);
  const [holiday, setHoliday] = useState('');
  const [markedDates, setMarkedDates] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEventsFromAPI();
  }, [selectedDate]);

  // Fetch events and holidays from API
  const fetchEventsFromAPI = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://calendarific.com/api/v2/holidays?&api_key=${API_KEY}&country=US&year=2024`);

      const holidaysData = response.data.response.holidays;

      // Process and map holidays to the required format
      const holidayMap = holidaysData.reduce((acc, holiday) => {
        const date = holiday.date.iso; // ISO format date
        acc[date] = { marked: true, dotColor: 'red', holiday: holiday.name };
        return acc;
      }, {});

      // Mark the selected date
      holidayMap[selectedDate] = { selected: true, selectedColor: '#007AFF' };

      setMarkedDates(holidayMap);

      // Update today's and tomorrow's events
      const todayHoliday = holidayMap[selectedDate] ? holidayMap[selectedDate].holiday : '';
      setHoliday(todayHoliday);

      const tomorrowDate = new Date(selectedDate);
      tomorrowDate.setDate(tomorrowDate.getDate() + 1);
      const tomorrowDateString = tomorrowDate.toISOString().split('T')[0];
      const tomorrowHoliday = holidayMap[tomorrowDateString] ? holidayMap[tomorrowDateString].holiday : '';
      setTomorrowEvents(tomorrowHoliday ? [{ title: tomorrowHoliday, time: 'Holiday', color: 'red' }] : []);

      // For now, just using static events for today/tomorrow; you can replace with actual data
      setTodayEvents([
        { title: 'Daily Standup', time: '08:00', color: 'green' },
        { title: 'Budget Review', time: '09:00', color: 'red' },
        { title: 'Sasha Jay 121', time: '10:00', color: 'yellow' },
        { title: 'Web Team Progress Update', time: '11:00', color: 'green' },
        { title: 'Social team briefing', time: '12:00', color: 'green' },
      ]);

      setLoading(false);
    } catch (error) {
      console.error('Error fetching holidays:', error);
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Calendar */}
      <View style={styles.calendarContainer}>
        <Calendar
          current={selectedDate}
          onDayPress={(day) => setSelectedDate(day.dateString)} // Handle date selection
          markedDates={markedDates}
          theme={{
            selectedDayBackgroundColor: '#007AFF',
            todayTextColor: '#007AFF',
            arrowColor: '#007AFF',
          }}
        />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <>
          {/* Holiday Message */}
          {holiday ? <Text style={styles.holidayText}>Holiday: {holiday}</Text> : null}

          {/* Today's Schedule */}
          <View style={styles.scheduleContainer}>
            <Text style={styles.heading}>Today</Text>
            {todayEvents.length > 0 ? (
              todayEvents.map((event, index) => (
                <View key={index} style={styles.scheduleItem}>
                  <View style={[styles.dot, { backgroundColor: event.color }]} />
                  <Text style={styles.taskText}>{event.title}</Text>
                  <Text style={styles.timeText}>{event.time}</Text>
                </View>
              ))
            ) : (
              <Text>No events today.</Text>
            )}
          </View>

          {/* Tomorrow's Schedule */}
          <View style={styles.scheduleContainer}>
            <Text style={styles.heading}>Tomorrow</Text>
            {tomorrowEvents.length > 0 ? (
              tomorrowEvents.map((event, index) => (
                <View key={index} style={styles.scheduleItem}>
                  <View style={[styles.dot, { backgroundColor: event.color }]} />
                  <Text style={styles.taskText}>{event.title}</Text>
                  <Text style={styles.timeText}>{event.time}</Text>
                </View>
              ))
            ) : (
              <Text>No events tomorrow.</Text>
            )}
          </View>
        </>
      )}

      {/* Vacations */}
      <View style={styles.vacationContainer}>
        <Icon name="plane" size={24} color="#007AFF" />
        <Text style={styles.vacationText}>Vacations</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  calendarContainer: {
    marginBottom: 20,
  },
  scheduleContainer: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  scheduleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  taskText: {
    flex: 1,
    fontSize: 16,
  },
  timeText: {
    fontSize: 16,
    color: '#999',
  },
  holidayText: {
    fontSize: 16,
    color: '#F44336',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  vacationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  vacationText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#007AFF',
  },
});

export default ScheduleScreen;
