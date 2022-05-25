import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  LoginMainContainer,
  LoginForm,
  LoginImage,
  LabelForLogin,
  UserNameInput,
  LabelForLoginTwo,
  ErrorPara,
  LoginButton,
  CheckBox,
  LabelForCheckBox,
  CheckBoxContainer,
} from './styledComponent'

// const apiStatusConstants = {
//   initial: 'INITIAL',
//   success: 'SUCCESS',
//   failure: 'FAILURE',
//   inProgress: 'IN_PROGRESS',
// }

class Login extends Component {
  state = {
    username: '',
    password: '',
    showError: false,
    error: '',
    showPassword: false,
  }

  onUserName = e => {
    this.setState({username: e.target.value})
  }

  onPassword = e => {
    this.setState({password: e.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 20})
    history.replace('/')
  }

  onSubmitFailure = error => {
    this.setState({showError: true, error})
    console.log(error)
  }

  showPasswordFunction = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  onSubmitForm = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const userData = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  getLogin = () => {}

  render() {
    const {showError, error, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginMainContainer>
        <LoginForm onSubmit={this.onSubmitForm}>
          <LoginImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          <LabelForLogin htmlFor="user-name" className="label-name">
            USERNAME
          </LabelForLogin>
          <UserNameInput
            type="text"
            id="user-name"
            placeholder="Username"
            onChange={this.onUserName}
          />
          <LabelForLoginTwo htmlFor="password" className="label-name1">
            PASSWORD
          </LabelForLoginTwo>
          <UserNameInput
            type={inputType}
            id="password"
            placeholder="Password"
            onChange={this.onPassword}
          />
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              id="checkbox"
              onChange={this.showPasswordFunction}
            />{' '}
            <LabelForCheckBox htmlFor="checkbox">
              Show Password
            </LabelForCheckBox>
          </CheckBoxContainer>

          <LoginButton type="submit" className="button">
            Login
          </LoginButton>
          {showError && <ErrorPara>* {error}</ErrorPara>}
        </LoginForm>
      </LoginMainContainer>
    )
  }
}

export default Login
