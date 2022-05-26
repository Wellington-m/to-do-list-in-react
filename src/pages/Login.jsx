import React from 'react';
import FormInput from '../components/FormInput';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      btnDisabled: true,
    }
  }

  validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  handleInputEmail = ({target}) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      const { email } = this.state;
      this.validateEmail(email) ? (this.setState({ btnDisabled: false })) : (this.setState({ btnDisabled: true }));
    });
  }

  saveUserEmail = (element) => {
    element.preventDefault();
    const { history } = this.props;
    history.push('/tasks');
  }

  render() {
    const { email, btnDisabled } = this.state;
    return (
      <form onSubmit={ this.saveUserEmail }>
        <FormInput
          type='text'
          name='email'
          value={ email }
          onChange={ this.handleInputEmail }
          placeHolder='Digite seu e-mail'
        />
        <button
          type='submit'
          disabled={ btnDisabled }
        >
          Entrar
        </button>
      </form>

    );
  }
}

export default Login;
