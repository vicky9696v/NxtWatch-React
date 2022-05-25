import {Component} from 'react'

import {Link, withRouter} from 'react-router-dom'
import {BsBrightnessHigh} from 'react-icons/bs'

import {IoMoon} from 'react-icons/io5'

import AppTheme from '../../Context/context'
import PopUp from '../PopUpVideos/index'

import './index.css'

import {
  HeaderContainer,
  HeaderLogoContainer,
  ImageLogo,
  UserLogo,
  ThemeButton,
} from './styledComponent'

class Header extends Component {
  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme, changeTheme} = value
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'

          const onChangeTheme = () => {
            const val = activeTheme === 'light' ? 'dark' : 'light'
            changeTheme(val)
          }
          return (
            <HeaderContainer
              className={`${
                activeTheme === 'light' ? 'whiteBackground' : 'blackBackground'
              }`}
            >
              <Link to="/">
                <ImageLogo
                  src={
                    activeTheme === 'light'
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                />
              </Link>

              <HeaderLogoContainer>
                <UserLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <ThemeButton
                  type="button"
                  onClick={onChangeTheme}
                  color={color}
                  data-testid="theme"
                >
                  {activeTheme === 'light' ? (
                    <IoMoon size="30" />
                  ) : (
                    <BsBrightnessHigh size="30" color="#ffffff" />
                  )}
                </ThemeButton>

                <PopUp />
              </HeaderLogoContainer>
            </HeaderContainer>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default withRouter(Header)
