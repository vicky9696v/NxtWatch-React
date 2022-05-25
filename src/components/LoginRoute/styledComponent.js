/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: #f1f5f9;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  height: 45vh;
  width: 35vw;
  background: #ffffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 2px 2px;
  padding: 3%;
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
  margin-top: 5%;
`

export const LabelForLoginTwo = styled.label`
  font-size: 13px;
  font-family: 'Roboto';
  align-self: flex-start;
  margin-top: 1%;
`

export const UserNameInput = styled.input`
  height: 30px;
  width: 80%;
  align-self: flex-start;
  margin-top: 4px;
  margin-bottom: 4px;
  outline: none;
  padding: 5px;
  border: 1px solid #7e858e;
  border-radius: 2px;
`
export const ErrorPara = styled.p`
  color: red;
  font-family: 'Roboto';
  font-size: 12px;
`
export const LoginButton = styled.button`
  margin-top: 10px;
  height: 30px;
  width: 150px;
  border-radius: 7px;
  cursor: pointer;
  outline: none;
  background-color: #6366f1;
  color: #ffffff;
  border: transparent;
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
  font-size: 17px;
`
