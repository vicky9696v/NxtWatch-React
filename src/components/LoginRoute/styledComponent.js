/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: ${props => props.bgColor};
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  height: 45vh;
  width: 35vw;
  color: ${props => props.color};
  background: ${props => props.bgColor};
  border-radius: 8px;
  box-shadow: 0px 2px 2px 2px;
  padding: 2%;
  @media (max-width: 768px) {
    height: 55vh;
    width: 90vw;
    justify-content: center;
  }
`

export const LoginImage = styled.img`
  height: 40px;
  width: 150px;
  align-self: center;
`
export const LabelForLogin = styled.label`
  font-size: 13px;
  font-family: 'Roboto';
  align-self: flex-start;
  font-family: 'Bree Serif';
  margin-top: 2%;
  @media (max-width: 768px) {
    font-size: 19px;
  }
`

export const LabelForLoginTwo = styled.label`
  font-size: 13px;
  font-family: 'Roboto';
  align-self: flex-start;
  font-family: 'Bree Serif';
  margin-top: 1%;
  @media (max-width: 768px) {
    font-size: 19px;
  }
`

export const UserNameInput = styled.input`
  height: 40px;
  width: 80%;
  align-self: flex-start;
  margin-top: 4px;
  margin-bottom: 4px;
  outline: none;
  padding: 10px;
  border: 1px solid ${props => props.border};
  font-family: 'Bree Serif';
  border-radius: 2px;
  background: ${props => props.bgColor};
  @media (max-width: 768px) {
    height: 40px;
    width: 90%;
    font-size: 16px;
    font-family: 'Bree Serif';
  }
`
export const ErrorPara = styled.p`
  color: red;
  font-family: 'Roboto';
  font-size: 15px;
  font-family: 'Bree Serif';
`
export const LoginButton = styled.button`
  margin-top: 10px;
  height: 40px;
  width: 150px;
  border-radius: 7px;
  cursor: pointer;
  outline: none;
  background-color: #6366f1;
  color: #ffffff;
  border: transparent;
  font-family: 'Bree Serif';
  @media (max-width: 768px) {
    height: 40px;
    width: 90%;
    font-size: 17px;
  }
`

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`

export const CheckBox = styled.input`
  height: 15px;
  width: 15px;
`

export const LabelForCheckBox = styled.label`
  font-family: 'Rpboto';
  font-size: 14px;
  font-family: 'Bree Serif';
`
