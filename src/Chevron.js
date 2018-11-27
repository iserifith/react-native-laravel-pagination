import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LeftChevron from './left-chevron.png';
import RightChevron from './right-chevron.png';

const Chevron = ({ isActive, isDisabled, prop, onPress }) => {
  if (isActive) {
    return (
      <TouchableOpacity
        style={styles.containerActive}
        disabled={isDisabled}
        onPress={() => onPress(prop)}
      >
        <Text style={[styles.prop, styles.textPropActive]}>{prop}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={() => onPress(prop)}
      style={styles.container}
      disabled={isDisabled}
    >
      {typeof prop === 'string' ? (
        <Image
          style={[styles.prop, styles.imageProp]}
          source={prop === 'left' ? LeftChevron : RightChevron}
        />
      ) : (
        <Text style={[styles.prop, styles.textProp]}>{prop}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 5,
    margin: 10,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3
  },
  prop: { width: 20, height: 20 },
  imageProp: { tintColor: '#1199EE', alignSelf: 'center' },
  textProp: { color: '#1199EE', textAlign: 'center' },
  containerActive: {
    backgroundColor: '#1199EE',
    padding: 5,
    margin: 10,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3
  },
  textPropActive: { color: 'white', textAlign: 'center' }
});

Chevron.propTypes = {
  onPress: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired,
  prop: PropTypes.oneOfType([
    PropTypes.oneOf(['left', 'right']).isRequired,
    PropTypes.number.isRequired
  ]).isRequired
};

export default Chevron;
