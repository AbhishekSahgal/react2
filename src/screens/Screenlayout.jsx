import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MyScreen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <View style={styles.container6}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Image source={require('../assests/user.png')} style={styles.profileImage} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assests/notification.png')} style={styles.notificationIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assests/widgets.png')} style={styles.gridIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Your main content goes here */}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Image source={require('../assests/home.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assests/calendar.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assests/clock.png')} style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleMenu}>
          <Image source={require('../assests/menu.png')} style={styles.footerIcon} />
        </TouchableOpacity>
      </View>

      {isMenuOpen && (
        <View style={styles.menu}>
          {/* Menu items here */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container6: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    // marginTop: 40,
    // marginBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginLeft:16,
    marginRight:16,
    marginTop:40,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  notificationIcon: {
    width: 40,
    height: 40,
  },
  gridIcon: {
    width: 40,
    height: 40,
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
    backgroundColor: '#021526',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 15,
  },
  footerIcon: {
    width: 24,
    height: 24,
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '70%',
    backgroundColor: 'black',
    padding: 20,
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
});

export default MyScreen;