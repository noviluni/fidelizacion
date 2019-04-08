import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectForm: {},
      registerForm: null,
      thanksPage: null,
      formInfo: {},
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000')
      .then((response) => {
        return response.json();
      })
      .then((json_res) => {
        this.setState({selectForm:json_res});
      });
  }

  validateForm = () => {
    let formInfo = this.state.formInfo;
    let valid = this.state.registerForm.inputs.every(function(input){
      return input.required ? formInfo[input.key] : true
    })

    return valid
  }

  handleChange = event => {
    let formInfo = this.state.formInfo;
    formInfo[event.target.id] = event.target.value
    this.setState({
      formInfo: formInfo
    });
  }

  handleSubmit = event => {
    let userTypeName = event.target.id;
    for (let userType of this.state.selectForm.userTypes){
      if (userType.name === userTypeName) {
        this.setState({registerForm: userType.form})
      }
    }
  }

  handleSubmitRegister = () => {
    this.setState({thanksPage: this.state.registerForm.thanksPage})
  }

  handleContinue = () => {
    this.setState({registerForm: null, thanksPage: null, formInfo: {}})
  }

  removeRegisterForm = () => {
    this.setState({registerForm: null, formInfo: {}})
  }

  render() {
    const thanksPage = this.state.thanksPage;
    const registerForm = this.state.registerForm;
    const userTypes = this.state.selectForm.userTypes;
    
    if (thanksPage) {
      // Thanks page
      return (
        <div className="thanks-page">
          <span className="thanks-page__title">{`${thanksPage.title}`}</span>  
          <div className="thanks-page__content">
            <div className="thanks-page__content__text">{`${thanksPage.firstText}`}</div>
            <div className="thanks-page__content__text">{ !this.state.formInfo.firstname ? this.state.formInfo.name : ``}</div>
            <span className="check mainCheck">☑</span>
            <div className="thanks-page__content__text">{ this.state.formInfo.firstname ? "¡Welcome "+this.state.formInfo.firstname+"!" : ``}</div>
            <p className="thanks-page__advantage-title">{`${thanksPage.secondText}`}</p>

            {thanksPage.advantages.map(advantage => (
              <p key={`${advantage.id}`}><span className="check">☑</span>{`${advantage.text}`}</p>
            ))}
            <button 
              className="thanks-page__button"
              onClick={this.handleContinue}>
                {`${thanksPage.buttonText}`}
            </button>
          </div>
          <span className="close-button">✕</span>
        </div>
      )
    } else if (registerForm) {
      return (
        // Guest register
        <div className="register-form">
          <form onSubmit={this.handleSubmitRegister}>
            <span className="register-form__title">{`${registerForm.title}`} </span>  
            <div className="register-form__options">
              {registerForm.inputs.map(input => (
                <div key={`${input.key}`} className="register-form__option">
                  <label className="register-form__label">
                    {`${input.label}`} { input.required ? `*` : ``}
                  </label> 
                  <input
                    type={`${input.inputType}`}
                    placeholder={`${input.placeholder}`}
                    onChange={this.handleChange}
                    required={input.required}
                    id={input.key}
                  />
                </div>
              ))}  
            <span className="register-form__footer">{`${registerForm.footer}`}</span>
          </div>
          <button 
                disabled={!this.validateForm()}
                type="submit"
                className="register-form__button">
                {`${registerForm.buttonText}`}
            </button>
          </form>
          <span className="back-button" onClick={this.removeRegisterForm}>←</span>
          <span className="close-button">✕</span>
        </div>
    )} else if (userTypes) {
    return (
      // Select screen
      <div id="signup-form">
        <form onSubmit={this.handleSubmit}>
          <span className="signup-form__title">{`${this.state.selectForm.title}`}</span>  
          <span className="signup-form__subtitle">{`${this.state.selectForm.subtitle}`}</span>  
          <div className="signup-form__options">
            {userTypes.map(user_type => (
              <label key={`${user_type.name}`} className="signup-form__label">
                <input
                  type="radio"
                  id={`${user_type.name}`}
                  onClick={this.handleSubmit}
                  className="signup-form__option"
                />
                {`${user_type.text}`}
              </label>
            ))}     
            </div>
        </form>
        <span className="signup-form__footer">{`${this.state.selectForm.footer}`}</span>
        <div className="footer"><span>Are you registered?</span></div>
        <span className="close-button">✕</span>
      </div>
    );
  } else { return (<div>loading...</div>)}}
}

export default App;
