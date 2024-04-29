// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachList, isEmojiClicked} = props
  const {id, emojiName, emojiUrl} = eachList

  const emojiClicked = () => {
    isEmojiClicked(id)
  }

  return (
    <li>
      <button type="button" className="each-emoji" onClick={emojiClicked}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
