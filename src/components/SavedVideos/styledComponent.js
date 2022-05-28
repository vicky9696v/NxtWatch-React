import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const SavedMainContainer = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`

export const SavedVideoContainer = styled.div`
  height: 90vh;
  width: 85vw;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  color: ${props => props.color}
  padding: 10px;
  align-items: center;
  overflow-y: auto;
`

export const NoResultImage = styled.img`
  height: 500px;
  width: 550px;
`
export const Heading = styled.h1`
  font-size: 25px;
  color: ${props => props.color};
  font-family: 'Roboto';
`

export const NotResultsPara = styled.p`
  font-size: 15px;
  color: ${props => props.color};
  font-family: 'Roboto';
`

export const ListContainer = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px;
`

export const UnOrderList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ImageThumbNail = styled.img`
  height: 170px;
  width: 300px;
`

export const TextContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  width: 50%;
`
export const ListMaintainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 10px;
`

export const VideoHeading = styled.p`
  color: ${props => props.color};
  font-size: 20px;
  font-family: 'Roboto';
`

export const ViewsAndContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
export const PubPara = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-family: 'Roboto';
  margin-left: 20px;
`

export const ViewPara = styled.p`
  color: ${props => props.color};
  font-size: 15px;
  font-family: 'Roboto';
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
