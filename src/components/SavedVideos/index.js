import {Link} from 'react-router-dom'

import {HiFire} from 'react-icons/hi'

import {
  SavedMainContainer,
  SavedVideoContainer,
  NoResultImage,
  Heading,
  NotResultsPara,
  UnOrderList,
  ListContainer,
  ImageThumbNail,
  TextContainer,
  ListMaintainContainer,
  VideoHeading,
  ViewsAndContainer,
  ViewPara,
  PubPara,
  LogoMainContainer,
  GamingHeading,
} from './styledComponent'

import AppTheme from '../../Context/context'

import Header from '../Header'
import SideBar from '../SideBar'

const SavedVideosList = () => (
  <AppTheme.Consumer>
    {value => {
      const {activeTheme, savedVideos} = value
      const color = activeTheme === 'light' ? '#000000' : '#ffffff'
      const bgColor = activeTheme === 'light' ? '#f1f1f1' : '#000'

      console.log(savedVideos)
      if (savedVideos.length === 0) {
        return (
          <>
            <Header />
            <SavedMainContainer>
              <SideBar />
              <SavedVideoContainer bgColor={bgColor} color={color}>
                <LogoMainContainer color={color}>
                  <HiFire size="37" />
                  <GamingHeading color={color}>Saved Videos</GamingHeading>
                </LogoMainContainer>
                <NoResultImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <Heading color={color}>No saved videos found</Heading>
                <NotResultsPara color={color}>
                  <p>Save your videos by clicking a button</p>
                  You can save your videos while watching
                </NotResultsPara>
              </SavedVideoContainer>
            </SavedMainContainer>
          </>
        )
      }
      return (
        <>
          <Header />
          <SavedMainContainer>
            <SideBar />
            <SavedVideoContainer bgColor={bgColor} color={color}>
              <LogoMainContainer color={color}>
                <HiFire
                  size="27"
                  color={activeTheme === 'light' ? '#000' : ' #ff0000'}
                />
                <h1>Saved Videos</h1>
              </LogoMainContainer>
              <UnOrderList>
                {savedVideos.map(each => (
                  <ListContainer key={each.key}>
                    <Link
                      to={`/videos/${each.id}`}
                      style={{textDecoration: 'none'}}
                    >
                      <ListMaintainContainer>
                        <ImageThumbNail
                          src={each.thumbNailUrl}
                          alt="video thumbnail"
                        />
                        <TextContainer>
                          <VideoHeading color={color}>
                            {each.title}
                          </VideoHeading>
                          <ViewsAndContainer>
                            <ViewPara color={color}>
                              {each.viewCount} Views
                            </ViewPara>
                            <PubPara color={color}>{each.publishedAt}</PubPara>
                          </ViewsAndContainer>
                        </TextContainer>
                      </ListMaintainContainer>
                    </Link>
                  </ListContainer>
                ))}
              </UnOrderList>
            </SavedVideoContainer>
          </SavedMainContainer>
        </>
      )
    }}
  </AppTheme.Consumer>
)
export default SavedVideosList
