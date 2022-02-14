// Write your React code here.
import {Component} from 'react'
import './index.css'
import Emoji from '../Emoji'

class Feedback extends Component {
  state = {isClick: false}

  greet = () => {
    this.setState({isClick: true})
  }

  render() {
    const {isClick} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div>
        {isClick && (
          <div>
            <img src={loveEmojiUrl} className="" alt="love emoji" />
            <h1>Thank You!</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
        {!isClick && (
          <div>
            <h1>How Satisfied are you with our customer support performance</h1>
            <div>
              <ul>
                {emojis.map(eachItem => (
                  <Emoji
                    emoji={eachItem}
                    key={eachItem.id}
                    greet={this.greet}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
