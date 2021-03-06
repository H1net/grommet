// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import CSSClassnames from '../utils/CSSClassnames';

const CLASS_ROOT = CSSClassnames.VALUE;
const COLOR_INDEX = CSSClassnames.COLOR_INDEX;

export default class Value extends Component {

  render () {
    const classes = [CLASS_ROOT];
    if (this.props.size) {
      classes.push(`${CLASS_ROOT}--${this.props.size}`);
    }
    if (this.props.align) {
      classes.push(`${CLASS_ROOT}--align-${this.props.align}`);
    }
    if (this.props.onClick) {
      classes.push(`${CLASS_ROOT}--interactive`);
    }
    if (this.props.colorIndex) {
      classes.push(`${COLOR_INDEX}-${this.props.colorIndex}`);
    }
    if (this.props.className) {
      classes.push(this.props.className);
    }

    let units;
    if (this.props.units) {
      units = (
        <span className={`${CLASS_ROOT}__units`}>
          {this.props.units}
        </span>
      );
    }

    let label;
    if (this.props.label) {
      label = (
        <span className={`${CLASS_ROOT}__label`}>
          {this.props.label}
        </span>
      );
    }

    return (
      <div className={classes.join(' ')} onClick={this.props.onClick}>
        <div className={`${CLASS_ROOT}__annotated`}>
          {this.props.icon}
          <span className={`${CLASS_ROOT}__value`}>
            {this.props.value}
          </span>
          {units}
          {this.props.trendIcon}
        </div>
        {label}
      </div>
    );
  }

}

Value.propTypes = {
  align: PropTypes.oneOf(['start', 'center', 'end']),
  colorIndex: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  trendIcon: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.node]),
  units: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

Value.defaultProps = {
  align: 'center'
};
