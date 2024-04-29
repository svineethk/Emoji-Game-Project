// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {score, playAgain} = props

  const AgainPlayClicked = () => {
    playAgain()
  }

  const win = score === 12

  return (
    <div className="result-container">
      <div className="mark-container">
        <h1 className="score-result">{win ? 'You Won' : 'You Lose'}</h1>
        <p className="score">{win ? 'Best Score' : 'Score'}</p>
        <p className="score-mark">{score}/12</p>
        <button type="button" className="play-again" onClick={AgainPlayClicked}>
          Play Again
        </button>
      </div>
      <div className="emotion-image-container">
        <img
          src={
            win
              ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
          }
          alt="win or lose"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
