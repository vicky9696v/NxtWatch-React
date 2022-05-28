import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import Loader from 'react-loader-spinner'
import {BiLike, BiListPlus, BiDislike} from 'react-icons/bi'

import ReactPlayer from 'react-player'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  HomeResultContainer,
  HomeMainContainer,
  HomeMainContainerOne,
  VideoHeading,
  BottomContainer,
  ViewsContainer,
  ButtonsContainer,
  Buttons,
  ChannelContainer,
  ChannelLogo,
  ChannelNameContainer,
  Para,
  Description,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  RetryButton,
} from './styledComponent'

import AppTheme from '../../Context/context'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    listDetails: [],
    channelDetails: [],
    isLiked: false,
    isDisLiked: false,
    isSaved: false,

    apiStatus: apiStatusConstants.initial,
    likeCount: 0,
    dislikeCount: 0,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
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
      const updatedData = {
        id: data.video_details.id,
        videoUrl: data.video_details.video_url,
        publishedAt: data.video_details.published_at,
        thumbNailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        description: data.video_details.description,
      }
      const channelData = {
        name: data.video_details.channel.name,
        profileLogo: data.video_details.channel.profile_image_url,
        subCount: data.video_details.channel.subscriber_count,
      }
      this.setState({
        listDetails: updatedData,
        channelDetails: channelData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  clickLikeButton = () => {
    const {likeCount} = this.state
    this.setState({isLiked: true, isDisLiked: false})
    this.setState(prev => ({likeCount: prev.likeCount + 1}))
    if (likeCount % 2) {
      this.setState({isLiked: false})
    }
    console.log(likeCount)
  }

  clickDislikeButton = () => {
    const {dislikeCount} = this.state
    this.setState({isLiked: false, isDisLiked: true})
    this.setState(prev => ({dislikeCount: prev.dislikeCount + 1}))
    if (dislikeCount % 2) {
      this.setState({isDisLiked: false})
    }
  }

  //   clickSaveButton = () => {
  //     const {isSaved} = this.state

  //     console.log(this.props)

  //     if (isSaved) {
  //       this.setState({})
  //     } else {
  //       this.setState({})
  //     }
  //     // updateData(this.state)
  //   }

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

  isSaved = async () => {
    const {isSaved} = this.state
    if (isSaved) {
      await this.setState({isSaved: false})
    } else {
      await this.setState({isSaved: true})
    }
  }

  renderResults = () => {
    const {
      listDetails,
      channelDetails,
      isLiked,
      isDisLiked,
      isSaved,
    } = this.state

    console.log(isSaved)
    const {name, profileLogo, subCount} = channelDetails
    const {
      videoUrl,
      publishedAt,
      title,
      description,
      viewCount,
      thumbNailUrl,
    } = listDetails

    const LikeClass = isLiked ? 'color-change' : 'button-change'
    const dislikeClass = isDisLiked ? 'color-change' : 'button-change'
    const saved = isSaved ? 'color-change' : 'button-change'

    return (
      <>
        <AppTheme.Consumer>
          {values => {
            const {activeTheme, addSavedVideos} = values

            const color = activeTheme === 'light' ? '#000000' : '#ffffff'
            const onSave = () => {
              this.isSaved()
              addSavedVideos(listDetails)
            }
            /* const savedVideo = async () => {
              if (isSaved) {
                await this.setState({isSaved: false})
              } else {
                await this.setState({isSaved: true})
                addSavedVideos(listDetails)
              }
              // this.setState(prev => ({isSaved: !prev.isSaved}))
            } */

            return (
              <>
                <HomeMainContainerOne color={`${color}`}>
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    className="videoFrame"
                    url={videoUrl}
                    playing={false}
                    controls
                  />

                  <VideoHeading>{title}</VideoHeading>
                  <BottomContainer>
                    <ViewsContainer>
                      <p>{viewCount} Views</p>
                      <p> . {publishedAt}</p>
                    </ViewsContainer>
                    <ButtonsContainer>
                      <Buttons
                        type="button"
                        onClick={this.clickLikeButton}
                        className={
                          activeTheme === 'light'
                            ? 'whiteBackground'
                            : 'blackBackground'
                        }
                      >
                        <BiLike
                          id="like"
                          size="25"
                          className={`${LikeClass}`}
                        />
                        <p className={`${LikeClass}`}>Like</p>
                      </Buttons>

                      <Buttons
                        type="button"
                        className={
                          activeTheme === 'light'
                            ? 'whiteBackground'
                            : 'blackBackground'
                        }
                        onClick={this.clickDislikeButton}
                      >
                        <BiDislike
                          id="dislike"
                          size="25"
                          className={`${dislikeClass}`}
                        />
                        <p className={`${dislikeClass}`}>Dislike</p>
                      </Buttons>
                      <Buttons
                        type="button"
                        onClick={onSave}
                        className={
                          activeTheme === 'light'
                            ? 'whiteBackground'
                            : 'blackBackground'
                        }
                        data-testid="savedVideos"
                      >
                        <BiListPlus
                          id="save"
                          size="25"
                          className={`${saved}`}
                        />
                        <p className={`${saved}`}>
                          {isSaved ? 'Saved' : 'Save'}
                        </p>
                      </Buttons>
                    </ButtonsContainer>
                    <hr />
                  </BottomContainer>
                  <ChannelContainer>
                    <ChannelLogo src={profileLogo} alt="channel logo" />
                    <ChannelNameContainer>
                      <Para>{name}</Para>
                      <Para>{subCount} Subscribers</Para>
                    </ChannelNameContainer>
                  </ChannelContainer>
                  <Description>{description}</Description>
                </HomeMainContainerOne>
              </>
            )
          }}
        </AppTheme.Consumer>
      </>
    )
  }

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
              <HomeResultContainer>
                <SideBar />
                <HomeMainContainer
                  data-testid="videoItemDetails"
                  className={`${
                    activeTheme === 'light'
                      ? 'whiteBackground'
                      : 'blackBackground'
                  }`}
                >
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

export default VideoItemDetails
