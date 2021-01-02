import {Card} from 'react-bootstrap';
import Link from 'next/link';
import { urlFor } from '../lib/api';

export default function CardItem({img, title, text, buttonText, date, author, link}) {
   return (
   <Card className="lg_card mb-4">
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
            <img 
               variant="top" 
               src={ urlFor(author?.avatar)
                  .size(50,50)
                  .fit('clip')
                  .url()}
               className="image image_rounded"
               height="50px"
               width="50px"
               alt="avatar"/>
            <div>
               <Card.Title>By: {author.name}</Card.Title>
               <Card.Text>Posted: {date}</Card.Text>
            </div>   
        </Card.Header>   
        <div className="view overlay">
         <Card.Body>
            <Card.Img variant="top" src={ urlFor(img).size(320, 210).fit('clip').url() }/>
            <Card.Title className="card-main-title">{ title }</Card.Title>
            <Card.Text>{ text }</Card.Text>
         </Card.Body>
         </div>
      </div>
      {link &&
      <Link href={ link }>
         <a className="card-button btn btn-primary">{ buttonText }</a> 
      </Link>}
    </Card>
   )
}
