import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  HomeResultContainer,
  HomeMainContainerOne,
  HomeMainContainer,
  HomeUnOrderList,
  HomeList,
  ThumbNailImg,
  VideoHeading,
  ViewsContainer,
  FailureContainer,
  FailureImage,
  RetryButton,
  LoaderContainer,
  ViewsCountPara,
  LogoMainContainer,
} from './styledComponent'

import AppTheme from '../../Context/context'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    gamingList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(each => ({
        id: each.id,
        thumbNailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        gamingList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderResults = () => {
    const {gamingList} = this.state

    return (
      <HomeMainContainerOne>
        <HomeUnOrderList>
          {gamingList.map(each => (
            <HomeList key={each.id}>
              <Link to={`/videos/${each.id}`} style={{textDecoration: 'none'}}>
                <ThumbNailImg src={each.thumbNailUrl} alt="video thumbnail" />
                <ViewsContainer>
                  <VideoHeading style={{color: '#64748b'}}>
                    {each.title}
                  </VideoHeading>
                  <ViewsCountPara style={{color: '#64748b'}}>
                    {each.viewCount} Watching Worldwide
                  </ViewsCountPara>
                </ViewsContainer>
              </Link>
            </HomeList>
          ))}
        </HomeUnOrderList>
      </HomeMainContainerOne>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <HomeMainContainerOne>
      <FailureContainer>
        <FailureImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="failure view"
        />
        <h1>Oops! Something Went Wrong</h1>
        <p>
          We are having some trouble to complete your request. <br />
          Please try again.
        </p>
        <button type="button" onClick={this.getTrendingData}>
          Retry
        </button>
      </FailureContainer>
    </HomeMainContainerOne>
  )

  renderFinalResult = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderResults()
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme} = value
          return (
            <>
              <Header />

              <HomeResultContainer
                data-testid="gaming"
                className={`${
                  activeTheme === 'light'
                    ? 'whiteBackground'
                    : 'blackBackground'
                }`}
              >
                <SideBar />
                <HomeMainContainer>
                  <LogoMainContainer>
                    <SiYoutubegaming
                      size="27"
                      color={activeTheme === 'light' ? '#000' : ' #ff0000'}
                    />
                    <h1>Gaming</h1>
                  </LogoMainContainer>

                  {this.renderFinalResult()}
                </HomeMainContainer>
              </HomeResultContainer>
            </>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Trending
