import React from 'react';

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

export default FormInput;
