import "./HomePageCover.css"
import background from '../homepagecover/kiki-main-cover.jpg'

function HomePageCover() {
  return (
    <div className="mainPageCover">
        <img src={background} alt="pozadina" className='background-cover'/>
    </div>
  )
}

export default HomePageCover