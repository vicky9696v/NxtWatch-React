import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import AppTheme from '../../Context/context'
import './index.css'

import {
  SideBarMainContainer,
  HomeIconContainer,
  ClickButton,
  SideBarBottomContainer,
  BottomHeading,
  ImagesContainer,
  LogoImage,
  Para,
} from './StyledComponent'

const SideBar = () => (
  <AppTheme.Consumer>
    {value => {
      const {activeTheme} = value
      const color = activeTheme === 'light' ? '#000000' : '#ffffff'

      return (
        <SideBarMainContainer
          className={`${
            activeTheme === 'light' ? 'whiteBackground' : 'blackBackground'
          }`}
        >
          <nav>
            <Link to="/">
              <ClickButton
                type="button"
                color={`${color}`}
                className={`${
                  activeTheme === 'light'
                    ? 'whiteBackground'
                    : 'blackBackground'
                }`}
              >
                <HomeIconContainer>
                  <AiFillHome size="25" /> Home
                </HomeIconContainer>
              </ClickButton>
            </Link>

            <Link to="/trending">
              <ClickButton
                type="button"
                className={`${
                  activeTheme === 'light'
                    ? 'whiteBackground'
                    : 'blackBackground'
                }`}
              >
                <HomeIconContainer>
                  <HiFire size="35" />
                  Trending
                </HomeIconContainer>
              </ClickButton>
            </Link>

            <Link
              to="/gaming"
              className={`${
                activeTheme === 'light' ? 'whiteBackground' : 'blackBackground'
              }`}
            >
              <ClickButton
                type="button"
                className={`${
                  activeTheme === 'light'
                    ? 'whiteBackground'
                    : 'blackBackground'
                }`}
              >
                <HomeIconContainer>
                  <SiYoutubegaming size="22" />
                  Gaming
                </HomeIconContainer>
              </ClickButton>
            </Link>
            <Link to="/saved-videos">
              <ClickButton
                type="button"
                className={`${
                  activeTheme === 'light'
                    ? 'whiteBackground'
                    : 'blackBackground'
                }`}
              >
                <HomeIconContainer>
                  <BiListPlus id="save" size="25" />
                  Saved Videos
                </HomeIconContainer>
              </ClickButton>
            </Link>
          </nav>

          <SideBarBottomContainer>
            <BottomHeading>CONTACT US</BottomHeading>
            <ImagesContainer>
              <LogoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <LogoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <LogoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ImagesContainer>
            <Para>Enjoy! Now to see your channels and recommendations!</Para>
          </SideBarBottomContainer>
        </SideBarMainContainer>
      )
    }}
  </AppTheme.Consumer>
)

export default SideBar
