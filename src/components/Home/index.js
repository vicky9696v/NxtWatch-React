import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import SideBar from '../SideBar'
import AppTheme from '../../Context/context'

import './index.css'

import {
  HomeResultContainer,
  HomeMainContainerOne,
  HomeMainContainer,
  HomeUnOrderList,
  HomeList,
  ThumbNailImg,
  ChannelImg,
  VideoHeading,
  ChannelLogoContainer,
  ChannelName,
  ViewsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  FailureContainer,
  FailureImage,
  RetryButton,
  LoaderContainer,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    search: '',
    dataListItems: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {search} = this.state
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
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
        dataListItems: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = e => {
    this.setState({search: e.target.value})
  }

  searchResults = () => {
    this.getData()
  }

  renderResults = () => {
    const {dataListItems} = this.state

    if (dataListItems.length > 0) {
      return (
        <AppTheme.Consumer>
          {values => {
            const {activeTheme} = values

            return (
              <>
                <HomeMainContainerOne
                  className={` main-container ${
                    activeTheme === 'light'
                      ? 'whiteBackground'
                      : 'blackBackground'
                  }`}
                >
                  <HomeUnOrderList
                    className={`${
                      activeTheme === 'light'
                        ? 'whiteBackground'
                        : 'blackBackground'
                    }`}
                  >
                    {dataListItems.map(each => (
                      <HomeList key={each.id}>
                        <Link
                          to={`/videos/${each.id}`}
                          style={{textDecoration: 'none'}}
                        >
                          <ThumbNailImg
                            src={each.thumbNailUrl}
                            alt={each.title}
                          />
                          <ChannelLogoContainer>
                            <ChannelImg
                              src={each.channel.profileLogo}
                              alt={each.name}
                            />
                            <VideoHeading
                              style={{
                                color:
                                  activeTheme === 'light'
                                    ? '#000000'
                                    : '#ffffff',
                              }}
                            >
                              {each.title}
                            </VideoHeading>
                          </ChannelLogoContainer>
                          <ChannelName
                            style={{
                              color:
                                activeTheme === 'light' ? '#000000' : '#ffffff',
                            }}
                          >
                            {each.channel.name}
                          </ChannelName>
                          <ViewsContainer>
                            <p
                              style={{
                                color:
                                  activeTheme === 'light'
                                    ? '#000000'
                                    : '#ffffff',
                              }}
                            >
                              {each.viewCount} Views
                            </p>
                            <p
                              style={{
                                color:
                                  activeTheme === 'light'
                                    ? '#000000'
                                    : '#ffffff',
                              }}
                            >
                              {' '}
                              . {each.publishedAt}
                            </p>
                          </ViewsContainer>
                        </Link>
                      </HomeList>
                    ))}
                  </HomeUnOrderList>
                </HomeMainContainerOne>
              </>
            )
          }}
        </AppTheme.Consumer>
      )
    }

    return (
      <AppTheme.Consumer>
        {values => {
          const {activeTheme} = values

          return (
            <>
              <HomeMainContainerOne
                className={`${
                  activeTheme === 'light'
                    ? 'whiteBackground'
                    : 'blackBackground'
                }`}
              >
                <FailureContainer>
                  <FailureImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos"
                  />
                  <h1
                    style={{
                      color: activeTheme === 'light' ? '#000000' : '#ffffff',
                    }}
                  >
                    No Search results found
                  </h1>
                  <p
                    style={{
                      color: activeTheme === 'light' ? '#000000' : '#ffffff',
                    }}
                  >
                    Try different key words or remove search filter
                  </p>
                  <RetryButton type="button" onClick={this.searchResults}>
                    Retry
                  </RetryButton>
                </FailureContainer>
              </HomeMainContainerOne>
            </>
          )
        }}
      </AppTheme.Consumer>
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
        <RetryButton type="button" onClick={this.getData}>
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
    const {search} = this.state

    return (
      <AppTheme.Consumer>
        {value => {
          const {activeTheme} = value
          return (
            <div>
              <Header />
              <HomeResultContainer>
                <SideBar />
                <HomeMainContainer
                  className={`${
                    activeTheme === 'light'
                      ? 'whiteBackground'
                      : 'blackBackground'
                  }`}
                >
                  <SearchContainer
                    className={`${
                      activeTheme === 'light'
                        ? 'whiteBackground'
                        : 'blackBackground'
                    }`}
                  >
                    <SearchInput
                      type="search"
                      value={search}
                      onChange={this.onChangeSearchInput}
                      placeholder="search"
                      style={{
                        backgroundColor:
                          activeTheme === 'light' ? '#ffffff' : '#000000',
                        color: activeTheme === 'light' ? '#000000' : '#fff',
                      }}
                    />
                    <SearchButton
                      type="button"
                      onClick={this.searchResults}
                      style={{
                        color: activeTheme === 'light' ? '#000000' : '#ffffff',
                      }}
                    >
                      <BsSearch />
                    </SearchButton>
                  </SearchContainer>
                  {this.renderFinalResult()}
                </HomeMainContainer>
              </HomeResultContainer>
            </div>
          )
        }}
      </AppTheme.Consumer>
    )
  }
}

export default Home
