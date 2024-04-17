import BannerDesigns from './components/BannerCardItem/index'

import './App.css'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
  },
]

const App = () => (
  <div className="banner-container-details">
    <ul>
      <BannerDesigns bannerDetails={bannerCardsList[0]} />
      <BannerDesigns bannerDetails={bannerCardsList[1]} />
      <BannerDesigns bannerDetails={bannerCardsList[2]} />
    </ul>
  </div>
)

export default App
