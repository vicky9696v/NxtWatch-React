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
  color: ${props => props.color};
  background: ${props => props.bgColor};
  height: 90vh;
  width: 85vw;
  overflow-y: auto;
  padding: 2%;
`

export const HomeMainContainerOne = styled.div`
  display: flex;
  flex-direction: row;

  height: 100%;
  width: 100%;
`

export const HomeUnOrderList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`

export const TrendingList = styled.li`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 5px;
  width: 100%;
  height: 100%;
`
export const ThumbNailImg = styled.img`
  height: 200px;
  width: 350px;
`

export const VideoHeading = styled.p`
  font-size: 15px;

  color: #64748b;
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`

export const ChannelName = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  margin-top: 0px;
  color: #64748b;
`

export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`

export const PublishedDate = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: #64748b;
  margin-left: 15px;
  margin-top: 0px;
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

  color: #ff0000;
  justify-content: space-between;
  align-self: flex-start;
  margin-left: 30px;
`
export const GamingHeading = styled.h1`
  color: ${props => props.color};
  font-size: 25px;
  font-family: 'Roboto';
  margin-left: 10px;
`
