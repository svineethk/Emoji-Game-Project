// Write your code here.
import './index.css'

const NavBar = props => {
  let {isGameFinish} = props
  const {score, topScore} = props

  if (score === 12) {
    isGameFinish = !isGameFinish
  }

  return (
    <div className="navbar">
      <div className="emoji-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="emoji-logo"
        />
        <h1 className="emoji-header">Emoji Game</h1>
      </div>
      {!isGameFinish && (
        <div className="score-container">
          <p className="scores">Score: {score}</p>
          <p className="top-score">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
