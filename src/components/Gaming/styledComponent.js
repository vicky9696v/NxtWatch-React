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
  height: 400px;
  width: 300px;
`
export const ChannelImg = styled.img`
  height: 35px;
  width: 40px;
`
export const VideoHeading = styled.p`
  font-size: 15px;
  color: #000;
  align-self: left;
  margin-bottom: 0px;
`
export const ChannelLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  color: #64748b;
`

export const ViewsCountPara = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  margin-top: 0px;
  margin-bottom: 10px;
  color: #64748b;
`

export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 50px;
  width: 60%;
  justify-content: space-between;
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
export const LogoMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 13%;
  justify-content: space-between;
`
