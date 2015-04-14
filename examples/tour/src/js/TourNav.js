// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.
var React = require('react');
var LigoNavUnified = require('ligo/components/NavUnified');
var TourMenu = require('./TourMenu');

var TourNav = React.createClass({

  propTypes: {
    onRequestClose: React.PropTypes.func,
    router: React.PropTypes.object.isRequired
  },

  childContextTypes: {
    router: React.PropTypes.func.isRequired
  },

  getChildContext: function() {
    return { router: this.props.router };
  },

  render: function() {
    return (
      <LigoNavUnified onRequestClose={this.props.onRequestClose} menu={<TourMenu />} />
    );
  }

});

module.exports = TourNav;