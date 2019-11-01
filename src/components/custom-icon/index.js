import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

class CustomIcon extends Component {
  render() {
  const { nameIcon, sizeIcon, colorIcon } = this.props;
    return (
      <Ionicons name={nameIcon} size={sizeIcon} color={colorIcon} />
    );
  }
}

CustomIcon.defaultProps = {
  nameIcon: 'md-checkmark-circle',
  sizeIcon: 32,
  colorIcon: 'green'
};

CustomIcon.propTypes = {
  nameIcon: PropTypes.string,
  sizeIcon: PropTypes.number,
  colorIcon: PropTypes.string,
};

export default CustomIcon
