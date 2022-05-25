import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  HomeResultContainer,
  HomeMainContainerOne,
  HomeMainContainer,
  HomeUnOrderList,
  TrendingList,
  ThumbNailImg,
  VideoHeading,
  ChannelName,
  ViewsContainer,
  ItemsContainer,
  FailureContainer,
  FailureImage,
  RetryButton,
  LoaderContainer,
  PublishedDate,
  LogoMainContainer,
  GamingHeading,
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
    trendingList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingData()
  }

  getTrendingData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/videos/trending'
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
      const updatedData = data.videos.map(each => ({
        id: each.id,
        channel: {
          name: each.channel.name,
          profileLogo: each.channel.profile_image_url,
        },
        publishedAt: each.published_at,
        thumbNailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        trendingList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderResults = () => {
    const {trendingList} = this.state

    return (
      <HomeMainContainerOne>
        <HomeUnOrderList>
          {trendingList.map(each => (
            <TrendingList key={each.id}>
              <Link to={`/videos/${each.id}`} style={{textDecoration: 'none'}}>
                <TrendingList>
                  <ThumbNailImg src={each.thumbNailUrl} alt="video thumbnail" />
                  <ItemsContainer>
                    <VideoHeading>{each.title}</VideoHeading>
                    <ChannelName>{each.channel.name}</ChannelName>
                    <ViewsContainer>
                      <ChannelName>{each.viewCount} Views</ChannelName>
                      <PublishedDate>.{each.publishedAt}</PublishedDate>
                    </ViewsContainer>
                  </ItemsContainer>
                </TrendingList>
              </Link>
            </TrendingList>
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
        <RetryButton type="button" onClick={this.getTrendingData}>
          Retry
        </RetryButton>
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
          const color = activeTheme === 'light' ? '#0f0f0f' : '#fff'
          return (
            <>
              <Header />
              <HomeResultContainer>
                <SideBar />
                <HomeMainContainer
                  bgColor={`${activeTheme === 'light' ? '#' : '#0f0f0f'} `}
                  color={color}
                >
                  <LogoMainContainer color={color}>
                    <HiFire size="37" />
                    <GamingHeading color={color}>Trending</GamingHeading>
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
