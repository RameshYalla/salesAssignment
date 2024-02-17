import {Component} from 'react'
import './index.css'

class Content extends Component {
  render() {
    const {details} = this.props
    const {id, title} = details
    return (
      <div key={id} className="item">
        <img className="img" src={details.image_url} alt="title" />
        <h2>{title}</h2>
        <div className="price">
          <p>
            ₹4899 <span className="op">8999</span>
            <span className="dis"> (50% OFF)</span>
          </p>
          <img
            src="https://res.cloudinary.com/dv5f6io4i/image/upload/v1708150196/saleAssist%20Assignment/header/ku2epwdsgyuvffywlfjn.png"
            alt="icon"
          />
        </div>
        <badge className="badge">
          <img
            src="https://res.cloudinary.com/dv5f6io4i/image/upload/v1708150855/saleAssist%20Assignment/header/zgsahvt630v4vlc9hkfa.png"
            alt="fav"
          />
        </badge>
      </div>
    )
  }
}

export default Content
