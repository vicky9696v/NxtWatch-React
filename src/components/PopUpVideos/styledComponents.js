import styled from 'styled-components'

export const LogOutButton = styled.button`
  height: 30px;
  width: 100px;
  color: #4f46e5;
  border: 1px solid #4f46e5;
  background: transparent;
  font-size: 15px;
  cursor: pointer;
  outline: none;
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 250px;
  background: ${props => props.bgColor};
  justify-content: center;
  margin-top: 40vh;
  border-radius: 8px;
`
export const Para = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
`

export const CancelButton = styled.button`
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  height: 30px;
  width: 100px;
  border-radius: 7px;
  margin: 5px;
  outline: none;
  cursor: pointer;
  border: 1px solid ${props => props.color};
`

export const ConfirmButton = styled.button`
  color: #ffffff;
  background: #3b82f6;
  height: 30px;
  width: 100px;
  border-radius: 7px;
  margin: 5px;
  outline: none;
  cursor: pointer;
  border: transparent;
`
