import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  movieState: state,
});
const LightComponent = ({ movieState }) => <div>{movieState}</div>;
export default connect(mapStateToProps)(LightComponent);
