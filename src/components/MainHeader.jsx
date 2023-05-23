import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'
import './mainHeader.css'

const Header = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4> #100DaysOfWorkOut</h4>
          <h1>Join The Legends of the Fitness world</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates incidunt minima illo, quia inventore earum vero illum dolores voluptatibus quos provident, reprehenderit molestias deleniti sequi iusto corrupti distinctio iste modi.

          </p>
          <Link to="/plans" className='btn lg'>Get Started </Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
