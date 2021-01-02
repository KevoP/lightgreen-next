import {Card, Button} from 'react-bootstrap';

export default function BlankCardListItem() {
   return (
      <Card className="mb-3">
         <Card.Header className="d-flex flex-row">
            <div className="img-placeholder"></div>
            <div>
               <Card.Title>Title</Card.Title>
               <Card.Text>date</Card.Text>
            </div>
         </Card.Header>
         <Card.Body>
            <Card.Title>title</Card.Title>
            <Card.Text>text</Card.Text>         
         </Card.Body>
      </Card>
   )
}
