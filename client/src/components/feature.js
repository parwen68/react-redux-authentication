import React, { Component } from 'react';
import requireAuth from './require_auth'

class Feature extends Component {
  render() {
    return (
      <div>
        This is the feature
      </div>
    );
  }
}

export default requireAuth(Feature);