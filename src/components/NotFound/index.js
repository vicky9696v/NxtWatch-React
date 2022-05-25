import {
  NotFoundContainer,
  ImageItem,
  NotFoundHeading,
  NotFoundPara,
  NotFoundImageContainer,
} from './styledComponent'
import Header from '../Header'
import SideBar from '../SideBar'
import './index.css'

import AppTheme from '../../Context/context'

const NotFound = () => (
  <AppTheme.Consumer>
    {value => {
      const {activeTheme} = value
      return (
        <>
          <Header />
          <NotFoundContainer>
            <SideBar />
            <NotFoundImageContainer
              className={`${
                activeTheme === 'light' ? 'whiteBackground' : 'blackBackground'
              }`}
            >
              <ImageItem
                src={
                  activeTheme === 'light'
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                }
                alt="not found"
              />
              <NotFoundHeading>Page Not Found</NotFoundHeading>
              <NotFoundPara>
                we are sorry, the page you requested could not be found.
              </NotFoundPara>
            </NotFoundImageContainer>
          </NotFoundContainer>
        </>
      )
    }}
  </AppTheme.Consumer>
)

export default NotFound
