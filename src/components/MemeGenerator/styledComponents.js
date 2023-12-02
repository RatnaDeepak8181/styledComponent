import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-left: 50px;
  justify-content: space-around;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const ContainerHeading = styled.h1`
  color: #35469c;
  font-family: 'Open Sans';
  font-size: 32px;
  font-weight: 700;
`
export const Label = styled.label`
  color: #7e858e;
  font-family: 'Open Sans';
  font-size: 10px;
  font-weight: 300;
  margin-bottom: 6px;
  margin-top: 12px;
`

export const InputEle = styled.input`
  width: 350px;
  height: 30px;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  padding: 5px 12px 5px 12px;
  outline: none;
  color: #5a7184;
  font-family: 'Open Sans';
  font-weight: 300;
`
export const BtnContainer = styled.div``

export const SelectOption = styled.select`
  width: 350px;
  height: 30px;
  border: 1px solid #d7dfe9;
  border-radius: 4px;
  padding: 5px 12px 5px 12px;
  outline: none;
`
export const Option = styled.option`
  color: #1e293b;
  font-family: 'Open Sans';
  font-weight: 500;
`

export const FormButton = styled.button`
    background-color:  #0b69ff;
    font-family: "Open Sans"
    font-size: 6px;
    color: #ffffff;
    font-weight: 400;
    outline: none;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 5px 20px 5px 20px;
    border-radius: 4px;
`
export const ImgContainer = styled.div`
  height: 300px;
  width: 450px;
  background-image: ${props => `url(${props.imageUrl})`};
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Paragraph = styled.p`
  color: #ffffff;
  font-family: 'Open Sans';
  font-size: ${props => `${props.fontSize}px`};
  font-weight: 500;
  margin: 0px;
  text-align: center;
`
