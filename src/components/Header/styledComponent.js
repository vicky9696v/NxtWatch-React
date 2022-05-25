/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  height: 10vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 5vw;
  padding-right: 3%;
`

export const HeaderLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 12%;
  justify-content: space-around;
  align-items: center;
`

export const ImageLogo = styled.img`
  height: 35px;
  width: 120px;
`

export const UserLogo = styled.img`
  height: 30px;
`

export const ThemeButton = styled.button`
  height: 25px;
  width: 500px;
  border: transparent;
  background: transparent;
  font-size: 15px;
  cursor: pointer;
  outline: none;
`
