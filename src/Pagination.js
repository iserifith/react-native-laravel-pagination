import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Chevron from './Chevron';

class Pagination extends Component {
  static propTypes = {
    links: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
      prev: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.oneOf([null])
      ]),
      next: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.oneOf([null])
      ])
    }).isRequired,
    meta: PropTypes.shape({
      current_page: PropTypes.number.isRequired,
      from: PropTypes.number.isRequired,
      last_page: PropTypes.number.isRequired,
      path: PropTypes.string.isRequired,
      per_page: PropTypes.number.isRequired,
      to: PropTypes.number.isRequired,
      total: PropTypes.number.isRequired
    }).isRequired,
    actions: PropTypes.shape({
      next: PropTypes.func.isRequired,
      prev: PropTypes.func.isRequired,
      callback: PropTypes.func.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  _isOnCurrentPage = val => {
    if (val === this.props.meta.current_page) {
      return true;
    }
    return false;
  };

  _renderBullets() {
    const bullets = [];

    const {
      current_page,
      from,
      last_page,
      per_page,
      to,
      total
    } = this.props.meta;

    for (let i = 0; i < last_page; i++) {
      bullets.push(
        <Chevron
          onPress={this.props.getData}
          isActive={this._isOnCurrentPage(i + 1)}
          key={i}
          isDisabled={false}
          prop={i + 1}
        />
      );
    }
    return bullets;
  }

  render() {
    return (
      <View style={styles.container}>
        <Chevron
          onPress={this.props.actions.prev}
          isActive={false}
          prop="left"
          isDisabled={this.props.links.prev !== null ? false : true}
        />
        {this._renderBullets()}
        <Chevron
          onPress={this.props.actions.next}
          isActive={false}
          prop="right"
          isDisabled={this.props.links.next !== null ? false : true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Pagination;
