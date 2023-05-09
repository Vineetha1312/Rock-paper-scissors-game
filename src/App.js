import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const randomNumber = Math.floor(Math.random() * choicesList.length)

class App extends Component {
  state = {
    score: 0,
    isRockButtonClicked: false,
    isScissorsButtonClicked: false,
    isPaperButtonClicked: false,
    isGameStarted: false,
    gameResult: 'YOU',
    opponentImageUrl: choicesList[randomNumber].imageUrl,
    opponentId: choicesList[randomNumber].id,
  }

  onClickRock = () => {
    const {opponentId} = this.state
    this.setState({
      isRockButtonClicked: true,
      isGameStarted: true,
      isScissorsButtonClicked: false,
      isPaperButtonClicked: false,
    })
    if (opponentId === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      this.setState({gameResult: 'YOU WON'})
    }
    if (opponentId === 'ROCK') {
      this.setState({gameResult: 'IT IS DRAW'})
    }
    if (opponentId === 'PAPER') {
      this.setState({gameResult: 'YOU LOSE'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    }
  }

  onClickScissors = () => {
    const {opponentId} = this.state
    this.setState({
      isScissorsButtonClicked: true,
      isGameStarted: true,
      isPaperButtonClicked: false,
      isRockButtonClicked: false,
    })
    if (opponentId === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      this.setState({gameResult: 'YOU WON'})
    }
    if (opponentId === 'SCISSORS') {
      this.setState({gameResult: 'IT IS DRAW'})
    }
    if (opponentId === 'ROCK') {
      this.setState({gameResult: 'YOU LOSE'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    }
  }

  onClickPaper = () => {
    const {opponentId} = this.state
    this.setState({
      isPaperButtonClicked: true,
      isGameStarted: true,
      isRockButtonClicked: false,
      isScissorsButtonClicked: false,
    })
    if (opponentId === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      this.setState({gameResult: 'YOU WON'})
    }
    if (opponentId === 'PAPER') {
      this.setState({gameResult: 'IT IS DRAW'})
    }
    if (opponentId === 'SCISSORS') {
      this.setState({gameResult: 'YOU LOSE'})
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
    }
  }

  renderPaperComponent = () => {
    const yourImage = choicesList[2].imageUrl
    const {opponentImageUrl, gameResult, opponentId} = this.state

    return (
      <div className="gaming-container">
        <div className="gaming-card">
          <p className="you-text">YOU</p>
          <p className="you-text">OPPONENT</p>
        </div>
        <div className="gaming-card">
          <img src={yourImage} alt="your choice" className="paper-image" />
          <img
            src={opponentImageUrl}
            alt="opponent choice"
            className="paper-image"
            key={opponentId}
          />
        </div>
        <p className="result-text">{gameResult}</p>
        <button
          className="play-again-button"
          type="button"
          onClick={this.onClickPlayAgainButton}
        >
          PLAY AGAIN
        </button>
      </div>
    )
  }

  renderRockComponent = () => {
    const {opponentImageUrl, gameResult, opponentId} = this.state
    return (
      <div className="gaming-container">
        <div className="gaming-card">
          <p className="you-text">YOU</p>
          <p className="you-text">OPPONENT</p>
        </div>
        <div className="gaming-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
            alt="your choice"
            className="paper-image"
          />
          <img
            src={opponentImageUrl}
            alt="opponent choice"
            className="paper-image"
            key={opponentId}
          />
        </div>
        <p className="result-text">{gameResult}</p>
        <button
          className="play-again-button"
          type="button"
          onClick={this.onClickPlayAgainButton}
        >
          PLAY AGAIN
        </button>
      </div>
    )
  }

  renderScissorsComponent = () => {
    const {gameResult, opponentImageUrl, opponentId} = this.state

    return (
      <div className="gaming-container">
        <div className="gaming-card">
          <p className="you-text">YOU</p>
          <p className="you-text">OPPONENT</p>
        </div>
        <div className="gaming-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
            alt="your choice"
            className="paper-image"
          />
          <img
            src={opponentImageUrl}
            alt="opponent choice"
            className="paper-image"
            key={opponentId}
          />
        </div>
        <p className="result-text">{gameResult}</p>
        <button
          className="play-again-button"
          type="button"
          onClick={this.onClickPlayAgainButton}
        >
          PLAY AGAIN
        </button>
      </div>
    )
  }

  renderGameComponent = () => {
    const rockImageId = choicesList[0].id
    const scissorsImageId = choicesList[1].id
    const paperImageId = choicesList[2].id

    return (
      <div className="game-card">
        <div className="game-items-container">
          <button
            className="rock-button"
            type="button"
            data-testid="rockButton"
            onClick={this.onClickRock}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png"
              className="rock-image"
              alt={rockImageId}
            />
          </button>
          <button
            className="scissors-button"
            type="button"
            data-testid="scissorsButton"
            onClick={this.onClickScissors}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png"
              className="rock-image"
              alt={scissorsImageId}
            />
          </button>
        </div>
        <button
          className="paper-button"
          type="button"
          data-testid="paperButton"
          onClick={this.onClickPaper}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png"
            className="rock-image"
            alt={paperImageId}
          />
        </button>
      </div>
    )
  }

  renderGameCard = () => {
    const {
      isPaperButtonClicked,
      isRockButtonClicked,
      isScissorsButtonClicked,
    } = this.state
    if (
      isPaperButtonClicked === true &&
      isRockButtonClicked === false &&
      isScissorsButtonClicked === false
    ) {
      return this.renderPaperComponent()
    }
    if (
      isRockButtonClicked === true &&
      isPaperButtonClicked === false &&
      isScissorsButtonClicked === false
    ) {
      return this.renderRockComponent()
    }
    if (
      isScissorsButtonClicked === true &&
      isRockButtonClicked === false &&
      isPaperButtonClicked === false
    ) {
      return this.renderScissorsComponent()
    }
    return null
  }

  onClickPlayAgainButton = () => {
    this.setState({isGameStarted: false})
  }

  render() {
    const {score, isGameStarted} = this.state

    return (
      <div className="bg-container">
        <div className="score-container">
          <div className="text-container">
            <h1 className="text">Rock Paper Scissors</h1>
          </div>
          <div className="score-card">
            <p className="score-text">Score</p>
            <p className="score">{score}</p>
          </div>
        </div>
        {isGameStarted ? this.renderGameCard() : this.renderGameComponent()}
        <Popup
          modal
          trigger={
            <button type="button" className="rules-button">
              Rules
            </button>
          }
        >
          {close => (
            <div className="rules-bg-container">
              <button
                className="trigger-button"
                type="button"
                onClick={() => close()}
              >
                <RiCloseLine />
              </button>
              <div className="rules-card">
                <h1 className="heading">Rules</h1>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                  className="rules-image"
                />
              </div>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default App
