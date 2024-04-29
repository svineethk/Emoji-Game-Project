/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    isGameFinish: false,
    score: 0,
    topScore: 0,
    emojiClickedList: [],
  }

  playAgain = () => {
    const {score, topScore} = this.state
    let highScore = 0
    if (score > topScore) {
      highScore = score
    }
    this.setState({
      isGameFinish: false,
      score: 0,
      topScore: highScore,
      emojiClickedList: [],
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  isEmojiClicked = id => {
    const {emojiClickedList} = this.state

    if (emojiClickedList.includes(id)) {
      this.setState({isGameFinish: true})
    } else {
      this.setState(prevState => ({
        emojiClickedList: [...prevState.emojiClickedList, id],
        score: prevState.score + 1,
      }))
    }
  }

  displayEmoji = () => {
    const shuffledList = this.shuffledEmojisList()
    return (
      <ul className="game-container">
        {shuffledList.map(eachList => (
          <EmojiCard
            key={eachList.id}
            eachList={eachList}
            isEmojiClicked={this.isEmojiClicked}
          />
        ))}
      </ul>
    )
  }

  finishGamePlay = () => {
    const {score, topScore} = this.state
    return (
      <WinOrLoseCard
        score={score}
        topScore={topScore}
        playAgain={this.playAgain}
      />
    )
  }

  render() {
    const {isGameFinish, score, topScore} = this.state

    return (
      <div className="app-container">
        <NavBar isGameFinish={isGameFinish} score={score} topScore={topScore} />
        <div className="container">
          {isGameFinish || score === 12
            ? this.finishGamePlay()
            : this.displayEmoji()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
