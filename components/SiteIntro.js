import { Row, Col, Media, Image } from 'react-bootstrap'
import { Component } from 'react'

export default class SiteIntro extends Component {
   render() {
      return (
         <Row className="my-5">
            <Col>
               <Media>
                  <Image roundedCircle width={64} height={64} className="mr-3" src="https://via.placeholder.com/300?text=Kev+Prunty" alt="Generic placeholder" />
                  <Media.Body>
                     <h5>Hi, I'm Kev</h5>
                     <p>
                     Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                     ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                     tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                     Donec lacinia congue felis in faucibus.
                     </p>
                  </Media.Body>
               </Media>
            </Col>
         </Row>
      )
   }
}
