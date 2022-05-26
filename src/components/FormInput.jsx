import React from 'react';
import PropTypes from 'prop-types';

class FormInput extends React.Component {
  render() {
    const { type, name, value, onChange, placeHolder } = this.props;
    return (
      <input
        type={ type }
        name={ name }
        value={ value }
        onChange={ onChange }
        placeholder={ placeHolder }
      />
    );
  }
}

FormInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
};

export default FormInput;
