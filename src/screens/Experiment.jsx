import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { ListItem, CheckBox } from 'react-native-elements';
import { ProgressBar as PaperProgressBar } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;

const subjects = [
  {
    name: 'Mathematics',
    topics: [
      'Algebra', 'Calculus', 'Geometry', 'Number Theory', 'Probability', 
      'Combinatorics', 'Linear Algebra', 'Differential Equations'
    ],
    properties: [
      { text: '17+ Hours Syllabus', bgColor: '#EAEAD9' },
      { text: 'Scoring', bgColor: '#D2E7FF' },
      { text: '8-10 marks questions possible', bgColor: '#E0E0E0' },
      { text: 'Additional Property', bgColor: '#F0F0F0' }
    ]
  },
  {
    name: 'Physics',
    topics: [
      'Mechanics', 'Optics', 'Electromagnetism', 'Quantum Mechanics', 'Thermodynamics', 
      'Relativity', 'Solid State Physics', 'Nuclear Physics'
    ],
    properties: [
      { text: '15+ Hours Syllabus', bgColor: '#EAEAD9' },
      { text: 'Scoring', bgColor: '#D2E7FF' },
      { text: '6-8 marks questions possible', bgColor: '#E0E0E0' },
      { text: 'Additional Property', bgColor: '#F0F0F0' }
    ]
  }
  // Add more subjects here in the future
];

const SyllabusTracker = () => {
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [completedTopics, setCompletedTopics] = useState({});
  const [isChecked, setIsChecked] = useState({});

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

  const handleCheckboxToggle = (subject) => {
    setIsChecked(prev => ({
      ...prev,
      [subject]: !prev[subject]
    }));
  };

  const handleExpandToggle = (subject) => {
    setExpandedSubject(expandedSubject === subject ? null : subject);
  };

  const renderPropertyBoxes = (properties) => {
    return properties.map((property, index) => (
      <View key={index} style={[styles.propertyBox, { backgroundColor: property.bgColor }]}>
        <Text style={styles.propertyText}>{property.text}</Text>
      </View>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      {subjects.map((subject, index) => (
        <View key={index} style={styles.card}>
          {/* Ongoing button and checkbox section */}
          <View style={styles.headerContainer}>
            <TouchableOpacity
              style={[
                styles.ongoingButton,
                { backgroundColor: isChecked[subject.name] ? '#0D47A1' : '#E3F2FD' }
              ]}
              onPress={() => { /* handle ongoing button press */ }}
            >
              <Text style={[
                styles.ongoingButtonText,
                { color: isChecked[subject.name] ? '#FFFFFF' : '#0D47A1' }
              ]}>
                Ongoing
              </Text>
            </TouchableOpacity>
            <CheckBox
              checked={!!isChecked[subject.name]}
              onPress={() => handleCheckboxToggle(subject.name)}
              checkedColor="#03346E"
              containerStyle={styles.checkboxContainer}
            />
          </View>

          {/* Subject Title and Progress Bar */}
          <Text style={styles.subjectTitle}>{subject.name}</Text>
          <PaperProgressBar
            progress={calculateProgress(subject.name)}
            style={styles.progressBar}
          />

          {/* Properties and Expand/Collapse Button */}
          <View style={styles.propertiesContainer}>
            {renderPropertyBoxes(subject.properties)}
          </View>
          <TouchableOpacity
            style={[
              styles.expandButton,
              expandedSubject === subject.name && styles.expandButtonActive
            ]}
            onPress={() => handleExpandToggle(subject.name)}
          >
            <Text style={[
              styles.expandButtonText,
              expandedSubject === subject.name && styles.expandButtonTextActive
            ]}>
              {expandedSubject === subject.name ? 'Collapse' : 'Expand'}
            </Text>
          </TouchableOpacity>

          {/* Topics */}
          {expandedSubject === subject.name && (
            <View style={styles.topicsContainer}>
              {subject.topics.map((topic, idx) => (
                <View key={idx} style={styles.topicContainer}>
                  <Text style={styles.topicText}>{topic}</Text>
                  <CheckBox
                    checked={!!completedTopics[subject.name]?.[topic]}
                    onPress={() => handleTopicToggle(subject.name, topic)}
                    checkedColor="#03346E"
                    containerStyle={styles.topicCheckboxContainer}
                  />
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    position: 'relative',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkboxContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  subjectTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
  },
  ongoingButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 28,
    borderWidth: 2,
    alignItems: 'center',
  },
  ongoingButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  propertiesContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  propertyBox: {
    borderRadius: 28,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginHorizontal: 4,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '30%',
  },
  propertyText: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#03346E',
    textAlign: 'center',
  },
  expandButton: {
    borderColor: '#90CAF9',
    borderRadius: 28,
    padding: 10,
    borderWidth: 2,
    backgroundColor: '#E3F2FD',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  expandButtonText: {
    color: '#0D47A1',
    fontSize: 12,
    fontWeight: 'bold',
  },
  expandButtonActive: {
    backgroundColor: '#0D47A1',
  },
  expandButtonTextActive: {
    color: '#FFFFFF',
  },
  topicsContainer: {
    marginTop: 10,
  },
  topicContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  topicText: {
    fontSize: 16,
  },
  topicCheckboxContainer: {
    marginLeft: 10,
    marginRight: 0,
  },
});

export default SyllabusTracker;
