import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { ProgressBar as PaperProgressBar } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;

const subjects = [
  {
    name: 'Discrete Mathematics',
    topics: [
      'Sets, Relations, and Functions',
      'Propositional Logic',
      'Predicate Logic',
      'Boolean Algebra',
      'Combinatorics',
      'Graph Theory',
      'Trees',
      'Algebraic Structures'
    ],
    properties: [
      { text: '20+ Hours Syllabus', bgColor: '#EAEAD9' },
      { text: 'High Scoring', bgColor: '#D2E7FF' },
      { text: '10-12 marks questions possible', bgColor: '#E0E0E0' },
      { text: 'Fundamental Concepts', bgColor: '#F0F0F0' }
    ]
  },
  {
    name: 'Computer Organization and Architecture',
    topics: [
      'Basic Computer Organization',
      'Processor Design',
      'Memory Organization',
      'I/O Organization',
      'Instruction Set Architecture',
      'Assembly Language',
      'Pipeline and Vector Processing',
      'Memory Management'
    ],
    properties: [
      { text: '15+ Hours Syllabus', bgColor: '#EAEAD9' },
      { text: 'Moderate Scoring', bgColor: '#D2E7FF' },
      { text: '8-10 marks questions possible', bgColor: '#E0E0E0' },
      { text: 'Essential for Hardware Understanding', bgColor: '#F0F0F0' }
    ]
  },
  {
    name: 'Programming and Data Structures',
    topics: [
      'Programming Basics',
      'Data Types and Operators',
      'Control Structures',
      'Functions',
      'Arrays and Strings',
      'Linked Lists',
      'Stacks and Queues',
      'Trees and Graphs'
    ],
    properties: [
      { text: '25+ Hours Syllabus', bgColor: '#EAEAD9' },
      { text: 'High Scoring', bgColor: '#D2E7FF' },
      { text: '12-15 marks questions possible', bgColor: '#E0E0E0' },
      { text: 'Core Programming Skills', bgColor: '#F0F0F0' }
    ]
  },
  {
    name: 'Algorithms',
    topics: [
      'Sorting and Searching',
      'Divide and Conquer',
      'Dynamic Programming',
      'Greedy Algorithms',
      'Graph Algorithms',
      'String Algorithms',
      'Complexity Analysis'
    ],
    properties: [
      { text: '20+ Hours Syllabus', bgColor: '#EAEAD9' },
      { text: 'High Scoring', bgColor: '#D2E7FF' },
      { text: '10-12 marks questions possible', bgColor: '#E0E0E0' },
      { text: 'Critical for Problem Solving', bgColor: '#F0F0F0' }
    ]
  },
  {
    name: 'Theory of Computation',
    topics: [
      'Formal Languages',
      'Finite Automata',
      'Regular Expressions',
      'Context-Free Grammars',
      'Pushdown Automata',
      'Turing Machines',
      'Decidability and Computability'
    ],
    properties: [
      { text: '18+ Hours Syllabus', bgColor: '#EAEAD9' },
      { text: 'Moderate Scoring', bgColor: '#D2E7FF' },
      { text: '8-10 marks questions possible', bgColor: '#E0E0E0' },
      { text: 'Foundational Concepts', bgColor: '#F0F0F0' }
    ]
  },
  {
    name: 'Database Management Systems',
    topics: [
      'Database Models',
      'Relational Algebra',
      'SQL',
      'Normalization',
      'Transaction Management',
      'Database Design',
      'Indexing and Hashing'
    ],
    properties: [
      { text: '15+ Hours Syllabus', bgColor: '#EAEAD9' },
      { text: 'High Scoring', bgColor: '#D2E7FF' },
      { text: '8-10 marks questions possible', bgColor: '#E0E0E0' },
      { text: 'Important for Data Handling', bgColor: '#F0F0F0' }
    ]
  },
  {
    name: 'Computer Networks',
    topics: [
      'Network Fundamentals',
      'OSI Model',
      'TCP/IP Protocols',
      'Routing and Switching',
      'Network Security',
      'Wireless Networks',
      'Network Management'
    ],
    properties: [
      { text: '15+ Hours Syllabus', bgColor: '#EAEAD9' },
      { text: 'Moderate Scoring', bgColor: '#D2E7FF' },
      { text: '8-10 marks questions possible', bgColor: '#E0E0E0' },
      { text: 'Crucial for Network Understanding', bgColor: '#F0F0F0' }
    ]
  },
  {
    name: 'Operating Systems',
    topics: [
      'Process Management',
      'Memory Management',
      'File Systems',
      'Concurrency',
      'Synchronization',
      'Deadlocks',
      'System Calls and I/O'
    ],
    properties: [
      { text: '20+ Hours Syllabus', bgColor: '#EAEAD9' },
      { text: 'Moderate Scoring', bgColor: '#D2E7FF' },
      { text: '10-12 marks questions possible', bgColor: '#E0E0E0' },
      { text: 'Essential for System Programming', bgColor: '#F0F0F0' }
    ]
  },
  {
    name: 'Software Engineering',
    topics: [
      'Software Development Life Cycle',
      'Software Requirements',
      'Design Patterns',
      'Testing and Debugging',
      'Project Management',
      'Software Maintenance'
    ],
    properties: [
      { text: '15+ Hours Syllabus', bgColor: '#EAEAD9' },
      { text: 'Moderate Scoring', bgColor: '#D2E7FF' },
      { text: '6-8 marks questions possible', bgColor: '#E0E0E0' },
      { text: 'Practical Software Knowledge', bgColor: '#F0F0F0' }
    ]
  }
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
                { backgroundColor: isChecked[subject.name] ? '#0D6EFD' : '#6C757D' }
              ]}
              onPress={() => handleCheckboxToggle(subject.name)}
            >
              <Text style={styles.ongoingButtonText}>{isChecked[subject.name] ? 'Ongoing' : 'Not Started'}</Text>
            </TouchableOpacity>
            <CheckBox
              checked={isChecked[subject.name]}
              onPress={() => handleCheckboxToggle(subject.name)}
              checkedColor="#0D6EFD"
              containerStyle={styles.checkboxContainer}
            />
          </View>
          {/* Subject name and progress bar */}
          <TouchableOpacity onPress={() => handleExpandToggle(subject.name)}>
            <Text style={styles.subjectTitle}>{subject.name}</Text>
            <PaperProgressBar
              progress={calculateProgress(subject.name)}
              color="#0D6EFD"
              style={styles.progressBar}
            />
          </TouchableOpacity>
          {/* Render properties */}
          <View style={styles.propertiesContainer}>
            {renderPropertyBoxes(subject.properties)}
          </View>
          {/* Expand/Collapse Button */}
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
                    checkedColor="#0D6EFD"
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
    backgroundColor: '#F5F5F5',
  },
  card: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  ongoingButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 2,
    alignItems: 'center',
  },
  ongoingButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  checkboxContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  subjectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  propertiesContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  propertyBox: {
    borderRadius: 20,
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
    color: '#000000',
    textAlign: 'center',
  },
  expandButton: {
    borderColor: '#90CAF9',
    borderRadius: 20,
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
