import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
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


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  const renderPropertyBoxes = (properties) => {
    return properties.map((property, index) => (
      <View key={index} style={[styles.propertyBox, { backgroundColor: property.bgColor }]}>
        <Text style={styles.propertyText}>{property.text}</Text>
      </View>
    ));
  };

  return (


    <View style={styles.container7}>

      <View style={styles.container6}>

        <View style={styles.header}>
        <View style={styles.header2}>
          <TouchableOpacity onPress={toggleMenu}>
            <Image source={require('../assests/user.png')} style={styles.profileImage} />
          </TouchableOpacity>
          </View>
          <View style={styles.header3}>
          <TouchableOpacity>
            <Image source={require('../assests/notification.png')} style={styles.notificationIcon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../assests/menublack.png')} style={styles.gridIcon} />
          </TouchableOpacity>
          </View>
        </View>

        <View style={styles.content}>
          {/* Your main content goes here */}
        </View>

      </View>




      <ScrollView style={styles.container}>

        {subjects.map((subject, index) => (
          <View key={index} style={styles.card}>
            {/* Ongoing button and checkbox section */}
            <View style={styles.headerContainer}>
              <TouchableOpacity
                style={[
                  styles.ongoingButton,
                  {
                    backgroundColor: isChecked[subject.name] ? '#4CAF50' : '#F5F5F5',
                    borderColor: isChecked[subject.name] ? '#66BB6A' : '#E0E0E0', // Lighter border color than the background
                  }
                ]}
                onPress={() => handleCheckboxToggle(subject.name)}
              >
                <Text
                  style={[
                    styles.ongoingButtonText,
                    {
                      color: isChecked[subject.name] ? '#FFFFFF' : '#333333', // Text color changes based on state
                    }
                  ]}
                >
                  {isChecked[subject.name] ? 'Completed' : 'Not Started'}
                </Text>
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
                color="#000"
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
                      checkedColor="#000"
                      containerStyle={styles.topicCheckboxContainer}
                    />
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
        </ScrollView>
              <View style={styles.container6}>

<View style={styles.footer}>
  <TouchableOpacity>
    <Image source={require('../assests/stories.png')} style={styles.footerIcon} />
  </TouchableOpacity>
  <TouchableOpacity>
    <Image source={require('../assests/timer.png')} style={styles.footerIcon} />
  </TouchableOpacity>
  <TouchableOpacity>
    <Image source={require('../assests/clock.png')} style={styles.footerIcon} />
  </TouchableOpacity>
  <TouchableOpacity onPress={toggleMenu}>
    <Image source={require('../assests/draw.png')} style={styles.footerIcon} />
  </TouchableOpacity>
</View>

{isMenuOpen && (
  <View style={styles.menu}>
    {/* Menu items here */}
  </View>
)}
</View>
      



    </View>
  );
};








const styles = StyleSheet.create({

  container7:{
    flex: 1,
    position: 'relative',
    

  },

  container6: {
    // flex: 1,
    backgroundColor: '#f0f0f0',
    // marginTop: 40,
    // marginBottom: 40,
    backgroundColor: '#FFFFFF',

    
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: 10,
    // marginLeft: 16,
    // marginRight: 16,
    marginTop: 45,
    // marginBottom:4,
    // backgroundcolor: '#FFFFFF', /* Light Gray */
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    height: 60,
    marginTop: 40,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "#E0E0E0",
    // borderWidth: 2,
    borderBottomWidth: 2,

  },
  header2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header3: {
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems: 'center',
    // padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 22,

  },
  notificationIcon: {
    width: 50,
    height: 50,
    marginRight: 12,

  },
  gridIcon: {
    width: 32,
    height: 32,
    marginRight: 22,
  },
  content: {
    flex: 1,
    // Add your content styling here
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
    marginBottom: 25,
    // backgroundColor: '#021526',
    backgroundColor: '#021526',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    zIndex: 10,
    // Shadow properties
    shadowColor: '#000', // Shadow ka color
    shadowOffset: { width: 0, height: 5 }, // Shadow ka offset (horizontal, vertical)
    shadowOpacity: 0.3, // Shadow ki opacity
    shadowRadius: 0.9, // Shadow ka radius (blur)
    elevation: 15, // Android ke liye shadow effect
  },
  footerIcon: {
    width: 24,
    height: 24,
  },
  menu: {
    position: 'absolute',
    top: -800, 
    left: 0,
    bottom: 0,
    width: '80%',
    backgroundColor: 'black',
    padding: 20,
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },




  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingBottom: 60,
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
    // marginBottom: 5,
  },
  ongoingButton: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 2,
    alignItems: 'center',
    borderColor: '#B0BEC5'
  },
  ongoingButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  checkboxContainer: {
    marginLeft: 10,
    marginRight: 10,
    
  },
  subjectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    // marginVertical: 5,
    marginBottom: 16,

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
    color: '#000',
    textAlign: 'center',
  },
  expandButton: {
    borderColor: '#E0E0E0',
    borderRadius: 20,
    padding: 10,
    borderWidth: 2,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  expandButtonText: {
    color: '#000',
    fontSize: 12,
    fontWeight: 'bold',
  },
  expandButtonActive: {
    backgroundColor: '#000',
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
    // margin: 12,
    marginVertical: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  topicText: {
    fontSize: 14,
    color: '#333333',
  },
  topicCheckboxContainer: {
    margin: 0,
    padding: 0,
  },
});

export default SyllabusTracker;
