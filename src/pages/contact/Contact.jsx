import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import{MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title = "Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam magni minus minima et, quos provident eius aut maxime odit error odio velit ab vel. Necessitatibus dicta accusantium unde harum hic.
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:ceo.krayr@gmail.com" target="_blank" rel="norefferer noopener"><MdEmail/></a>
          <a href="http://m.me/krayrpol.pl" target="_blank" rel="norefferer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+48660260459" target="_blank" rel="norefferer noopener"><IoLogoWhatsapp/></a>
        </div>
        
      </div>
    </section>
    </>


  )
}

export default Contact