import {Card} from 'react-bootstrap';

export default function BlankCardItem() {
   return (
      <Card className="lg_card">
         <div className="card-body-wrapper">
         <Card.Header className="d-flex flex-row">
               <div className="img-placeholder" />
               <div>
                  <Card.Title>Title</Card.Title>
                  <Card.Text>date</Card.Text>
               </div>   
         </Card.Header>   
         <div className="view overlay">
            <Card.Body>
               <Card.Img/>
               <Card.Title className="card-main-title">title</Card.Title>
               <Card.Text>text</Card.Text>
            </Card.Body>
            </div>
         </div>
    </Card>
   )
}
