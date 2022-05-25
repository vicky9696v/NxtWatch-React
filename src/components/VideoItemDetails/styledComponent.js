/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const HomeResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  width: 100vw;
`

export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 90vh;
  width: 85vw;
  padding: 2%;
  overflow-y: auto;
`
export const HomeMainContainerOne = styled.div`
  height: 55vh;
  width: 100%;
`

export const VideoHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
`

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`
export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
`
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  width: 50%;
`
export const Buttons = styled.button`
  height: 35px;
  width: 100px;
  background: transparent;
  border: transparent;
  cursor: pointer;
  outline: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 17px;
  margin-left: 10px;
`
export const ChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const ChannelLogo = styled.img`
  height: 40px;
  width: 45px;
`
export const ChannelNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-left: 20px;
`
export const Para = styled.p`
  font-size: 15px;
  margin: 5px;
`
export const Description = styled.p`
  font-size: 15px;
  margin-left: 65px;
  width: 80%;
`
export const FailureContainer = styled.div`
  height: 50vh;
  width: 50vw;
  align-self: center;
  align-items: center;
  margin: 20px;
  justify-content: center;
  text-align: center;
`
export const LoaderContainer = styled.div`
  height: 50vh;
  width: 50vw;
  align-items: center;
  justify-content: center;
`

export const FailureImage = styled.img`
  height: 350px;
  width: 400px;
`

export const RetryButton = styled.button`
  height: 35px;
  width: 100px;
  color: #fff;
  border: transparent;
  cursor: pointer;
  outline: none;
  background: #3b82f6;
  font-size: 15px;
`
export const SavedVideosMainDiv = styled.div`
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  height: 100vh;
  @media (max-width: 767px) {
    height: fit-content;
  }
`
export const MainHeader = styled.h1`
  background-color: ${props => props.bgColor};
  padding: 20px;
`

export const UnSavedVideosDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.color};
  @media (max-width: 767px) {
    padding-left: 20px;
  }
`

export const SavedVideosDiv = styled.div`
  color: ${props => props.color};
  display: flex;
  @media (min-width: 768px) {
    padding: 30px 30px;
    padding-bottom: 0px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`

export const ListContainer = styled.ul`
  list-style-type: none;
  @media (max-width: 767px) {
    align-self: baseline;
    padding: 10px;
  }
`

export const ListItems = styled.li`
  padding: 10px;
  font-size: ${props => props.fs};
  @media (max-width: 767px) {
    padding: 5px;
    font-size: 15px;
  }
`

export const VideosImageEl = styled.img`
  @media (min-width: 768px) {
    width: 40%;
    height: 200px;
  }
  @media (max-width: 767px) {
    width: 100%;
    object-fit: contain;
  }
`

export const NoVideosImageEl = styled.img`
  @media (max-width: 767px) {
    width: 100%;
    object-fit: contain;
    padding-top: 5%;
  }
  @media (min-width: 768px) {
    width: 50%;
    object-fit: contain;
    padding: 30px 40px;
  }
`
export const NotFoundHead = styled.h2``

export const NotFoundPara = styled.p``
