/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const HomeResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 90vh;
  width: 100vw;
  position: sticky;
`

export const HomeMainContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 90vh;
  width: 85vw;
  overflow-y: auto;
  padding: 2%;
`

export const HomeMainContainerOne = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
`

export const HomeUnOrderList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const HomeList = styled.li`
  list-style-type: none;
  margin: 5px;
  width: 30%;
`
export const ThumbNailImg = styled.img`
  height: 200px;
  width: 350px;
`
export const ChannelImg = styled.img`
  height: 35px;
  width: 40px;
`
export const VideoHeading = styled.p`
  font-size: 15px;
  margin-left: 10px;
  margin-left: 4%;
  color: #64748b;
`
export const ChannelLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  color: #64748b;
`

export const ChannelName = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  margin-left: 50px;
  margin-top: 0px;
  margin-bottom: 0px;
  color: #64748b;
`

export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 50px;
  width: 60%;
  justify-content: space-between;
`

export const SearchContainer = styled.div`
  height: 35px;
  width: 30%;
  border: 1px solid #616e7c;
  margin-left: 4%;
  align-items: center;
`

export const SearchInput = styled.input`
  height: 33px;
  width: 80%;
  border: transparent;
  outline: none;
  padding: 5px;
  font-size: 15px;
`

export const SearchButton = styled.button`
  height: 100%;
  width: 19%;
  border: transparent;
  outline: none;
  background: transparent;
  font-weight: 20px;
  align-items: center;
  cursor: pointer;
  outline: none;
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

export const LoaderContainer = styled.div`
  height: 50vh;
  width: 50vw;
  align-items: center;
  justify-content: center;
`
export const BannerContainer = styled.div`
  height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 10px;
  padding-left: 30px;
  margin-bottom: 20px;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ButtonContainer = styled.div`
  display: flex;
  height: 20px;
`

export const ImageBanner = styled.img`
  height: 100%;
  width: 70%;
`
export const ImageLogo = styled.img`
  height: 35px;
  width: 120px;
`

export const GetINowButton = styled.button`
  height: 30px;
  width: 120px;
  background-color: transparent;
`
