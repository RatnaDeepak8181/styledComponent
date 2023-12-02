import {Component} from 'react'

import {
  AppContainer,
  FormContainer,
  ContainerHeading,
  Label,
  InputEle,
  BtnContainer,
  SelectOption,
  Option,
  FormButton,
  ImgContainer,
  Paragraph,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    activeOptionId: fontSizesOptionsList[0].optionId,
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSize: '',
    imageUrl: '',
    topText: '',
    bottomText: '',
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeOption = event => {
    this.setState({activeOptionId: event.target.value})
  }

  getImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      activeOptionId,
    } = this.state
    this.setState({
      imageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSize: activeOptionId,
    })
  }

  render() {
    const {imageUrl, topText, bottomText, activeFontSize} = this.state

    return (
      <AppContainer>
        <FormContainer onSubmit={this.onSubmitForm}>
          <ContainerHeading>Meme Generator</ContainerHeading>
          <Label id="inputLabel">Image URL</Label>
          <InputEle
            id="inputLabel"
            onChange={this.getImageUrl}
            placeholder="Enter the Image URL"
          />
          <Label id="inputTopTextLabel">Top Text</Label>
          <InputEle
            id="inputTopTextLabel"
            onChange={this.onChangeTopText}
            autoComplete="off"
            placeholder="Enter the Top Text"
          />
          <Label id="inputBottomTextLabel">Bottom Text</Label>
          <InputEle
            id="inputBottomTextLabel"
            onChange={this.onChangeBottomText}
            autoComplete="off"
            placeholder="Enter the Bottom Text"
          />
          <Label id="fontSize">Font Size</Label>
          <SelectOption onChange={this.onChangeOption} id="fontSize">
            {fontSizesOptionsList.map(eachOption => (
              <Option key={eachOption.optionId}>
                {eachOption.displayText}
              </Option>
            ))}
          </SelectOption>
          <BtnContainer>
            <FormButton type="submit">Generate</FormButton>
          </BtnContainer>
        </FormContainer>
        <ImgContainer imageUrl={imageUrl} data-testid="meme">
          <Paragraph fontSize={activeFontSize}>{topText}</Paragraph>
          <Paragraph fontSize={activeFontSize}>{bottomText}</Paragraph>
        </ImgContainer>
      </AppContainer>
    )
  }
}
export default MemeGenerator
