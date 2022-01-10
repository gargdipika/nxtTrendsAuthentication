// Write your JS code here
import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {username: '', password: '', errMsg: ''}

  onUsernameChange = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  navigateToHomePage = () => {
    const {history} = this.props
    history.replace('/')
  }

  getErrorMessage = errorMsg => {
    const errorMessage = errorMsg
    this.setState({errMsg: errorMessage})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const fetchedData = await fetch(url, options)
    const data = await fetchedData.json()
    console.log(data)

    if (fetchedData.ok === true) {
      this.navigateToHomePage()
    } else {
      const updateData = {
        statusCode: data.status_code,
        errMsg: data.error_msg,
      }
      this.getErrorMessage(updateData.errMsg)
    }
  }

  render() {
    const {username, password, errMsg} = this.state
    console.log(username)
    console.log(password)
    return (
      <div className="login-page-container">
        <img
          className="image-login"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
        />
        <div className="img-form-container">
          <img
            className="logo-style"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <label htmlFor="username">USERNAME</label>
            <input
              className="input-element-style"
              type="text"
              id="username"
              placeholder="Username"
              onChange={this.onUsernameChange}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              className="input-element-style"
              type="password"
              id="password"
              placeholder="Password"
              onChange={this.onChangePassword}
            />
            <button className="button-login" type="submit">
              login
            </button>
            {errMsg !== '' ? <p className="error-message">*{errMsg}</p> : ''}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
