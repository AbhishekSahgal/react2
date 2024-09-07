import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ListItem, CheckBox } from 'react-native-elements';
import { ProgressBar as PaperProgressBar } from 'react-native-paper';

const subjects = [
  {
    name: 'Mathematics',
    topics: ['Algebra', 'Calculus', 'Geometry']
  },
  {
    name: 'Physics',
    topics: ['Mechanics', 'Optics', 'Electromagnetism']
  },
  {
    name: 'Mathematics',
    topics: ['Algebra', 'Calculus', 'Geometry']
  },
  {
    name: 'Physics',
    topics: ['Mechanics', 'Optics', 'Electromagnetism']
  },  {
    name: 'Mathematics',
    topics: ['Algebra', 'Calculus', 'Geometry']
  },
  {
    name: 'Physics',
    topics: ['Mechanics', 'Optics', 'Electromagnetism']
  },
  
  // Add more subjects here in the future
];

const SyllabusTracker = () => {
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [completedTopics, setCompletedTopics] = useState({});

  const handleTopicToggle = (subject, topic) => {
    setCompletedTopics(prev => ({
      ...prev,
      [subject]: {
        ...prev[subject],
        [topic]: !prev[subject]?.[topic]
      }
    }));
  };

  const calculateProgress = (subject) => {
    const topics = subjects.find(s => s.name === subject).topics;
    const completed = completedTopics[subject] || {};
    const completedCount = Object.keys(completed).filter(key => completed[key]).length;
    return topics.length ? (completedCount / topics.length) : 0;
  };

  return (
    <ScrollView style={styles.container}>
      {subjects.map((subject, index) => (
        <View key={index} style={styles.subjectContainer}>
          <Text style={styles.subjectTitle}>{subject.name}</Text>
          <PaperProgressBar
            progress={calculateProgress(subject.name)}
            style={styles.progressBar}
          />
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={() => setExpandedSubject(expandedSubject === subject.name ? null : subject.name)}
          >
            <Text style={styles.toggleButtonText}>
              {expandedSubject === subject.name ? 'Collapse' : 'Expand'}
            </Text>
          </TouchableOpacity>
          {expandedSubject === subject.name && (
            <View style={styles.topicsContainer}>
              {subject.topics.map((topic, idx) => (
                <ListItem key={idx} bottomDivider>
                  <CheckBox
                    checked={!!completedTopics[subject.name]?.[topic]}
                    onPress={() => handleTopicToggle(subject.name, topic)}
                  />
                  <ListItem.Content>
                    <ListItem.Title>{topic}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  subjectContainer: {
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  subjectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  toggleButton: {
    marginVertical: 10,
    alignItems: 'center',
  },
  toggleButtonText: {
    color: 'blue',
  },
  topicsContainer: {
    marginTop: 10,
  },
});

export default SyllabusTracker;
