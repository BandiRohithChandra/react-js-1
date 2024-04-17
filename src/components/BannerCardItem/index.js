// Write your code here.

import './index.css'

const BannerDesigns = props => {
  const {bannerDetails, key} = props
  const {headerText, description, className, buttons} = bannerDetails
  return (
    <div className="banner-container">
      <li className={className}>
        <h1 className="title">The Seasons Latest</h1>
        <p className="decription">{description}</p>
        <button className="button">{buttons}</button>
      </li>
    </div>
  )
}

export default BannerDesigns
