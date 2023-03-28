import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Hcards from './Hcards';
import Sponsers from './Sponsers';

function Home() {
  let a={
    title:"CSI",
    image:"https://klecet.edu.in/assets/admin/ckeditor/kcfinder/upload/images/csi-logo-300x300.png",
    info:"The majority of the officers of the organization, along with most of its teachers and staff, are volunteers.[6] Many of its programs are conducted through, or in conjunction with a partner organization, the International Association for Human Values (IAHV).[7] It's programs draw on Advaita Vedanta tradition and practices.[8] The Foundation operates as a charitable or a non-profit organization with chapters in many parts of the world."
  }
  let b={
    title:"Art Of Living",
    image:"https://radiozindagi.com/wp-content/uploads/2016/06/Art-of-Living-Logo.jpg",
    info:"The majority of the officers of the organization, along with most of its teachers and staff, are volunteers.[6] Many of its programs are conducted through, or in conjunction with a partner organization, the International Association for Human Values (IAHV).[7] It's programs draw on Advaita Vedanta tradition and practices.[8] The Foundation operates as a charitable or a non-profit organization with chapters in many parts of the world."
  }
  let c={
    title:"IEEE",
    image:"https://1000logos.net/wp-content/uploads/2019/03/IEEE-Logo-768x432.png",
    info:"The majority of the officers of the organization, along with most of its teachers and staff, are volunteers.[6] Many of its programs are conducted through, or in conjunction with a partner organization, the International Association for Human Values (IAHV).[7] It's programs draw on Advaita Vedanta tradition and practices.[8] The Foundation operates as a charitable or a non-profit organization with chapters in many parts of the world."
  }


  return (
    <div className='container mt-5' >
      <img src='https://cdn-ggaeb.nitrocdn.com/ierIjoDhqbXFTpnaXdMdlpDwKkpyqcsx/assets/images/source/rev-10a520c/wp-content/uploads/2021/03/event-1200x600.jpg' height='400px' width='1300px' ></img>
      <h3>Trending Events</h3>
<Carousel style={{backgroundColor:"rgb(245, 216, 162)",borderRadius:"100px 100px 100px 100px"}} className='p-3'>
      <Carousel.Item>
        <img
          className="d-block w-50 h-50 m-auto"
          src="http://www.vnrvjiet.ac.in/snt23.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 h-50 m-auto"
          src="http://www.vnrvjiet.ac.in/winter.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 h-50 m-auto"
          src="http://www.vnrvjiet.ac.in/oh231.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className='mt-5 mb-5 '>
      <h3>Clubs</h3>
          <div >
          <Hcards x={a}/>
          </div>
 
         <div >
         <Hcards x={b}/>
         </div>
         <div>
         <Hcards x={c}/>
         </div>
        
    </div>
    <h3>Sponsers</h3>
    <Sponsers/>

    </div>
  )
}

export default Home