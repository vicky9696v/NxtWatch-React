import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import AppTheme from '../../Context/context'

import {
  LogOutButton,
  ModalContainer,
  Para,
  CancelButton,
  ConfirmButton,
} from './styledComponents'
import './index.css'

class PopUp extends Component {
  logoutFunction = props => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme} = value
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          const bgColor = activeTheme === 'light' ? '#f1f1f1' : '#000'
          return (
            <Popup
              modal
              trigger={
                <LogOutButton
                  className="hamburger-icon-button"
                  type="button"
                  testid="hamburgerIconButton"
                >
                  Logout
                </LogOutButton>
              }
              className="popup-content"
            >
              {close => (
                <ModalContainer bgColor={bgColor}>
                  <Para color={color}>Are you sure, you want to logout ?</Para>
                  <div>
                    <CancelButton
                      color={color}
                      bgColor={bgColor}
                      type="button"
                      onClick={() => close()}
                    >
                      Cancel
                    </CancelButton>
                    <Link to="/login">
                      <ConfirmButton
                        type="button"
                        onClick={this.logoutFunction}
                      >
                        Confirm
                      </ConfirmButton>
                    </Link>
                  </div>
                </ModalContainer>
              )}
            </Popup>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default PopUp
