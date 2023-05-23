import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

import './about.css'

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptates, amet eum aliquam deleniti qui blanditiis commodi? Aperiam ducimus, assumenda suscipit fugiat quaerat, nihil inventore doloremque, iure tempore quasi eum.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story Image"/>
          </div>
          <div className="about__section-content">
            <h1> Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa, iure modi quam unde perferendis aspernatur quibusdam atque eveniet. Et natus sed quidem repellendus nulla quos nostrum beatae molestiae voluptatibus.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem beatae exercitationem, magni aliquam aliquid velit atque cum cupiditate reprehenderit iusto dicta et adipisci. Atque hic nisi necessitatibus accusantium, pariatur repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ea sequi obcaecati nulla provident maiores tenetur distinctio? Quas enim at necessitatibus deserunt, cupiditate sunt doloribus possimus eligendi officiis aspernatur blanditiis.
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1> Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa, iure modi quam unde perferendis aspernatur quibusdam atque eveniet. Et natus sed quidem repellendus nulla quos nostrum beatae molestiae voluptatibus.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem beatae exercitationem, magni aliquam aliquid velit atque cum cupiditate reprehenderit iusto dicta et adipisci. Atque hic nisi necessitatibus accusantium, pariatur repudiandae?
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision Image"/>
          </div>
        </div>
      </section>
      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Vision Image"/>
          </div>
          <div className="about__section-content">
            <h1> Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa, iure modi quam unde perferendis aspernatur quibusdam atque eveniet. Et natus sed quidem repellendus nulla quos nostrum beatae molestiae voluptatibus.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem beatae exercitationem, magni aliquam aliquid velit atque cum cupiditate reprehenderit iusto dicta et adipisci. Atque hic nisi necessitatibus accusantium, pariatur repudiandae?
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
