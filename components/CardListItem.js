import {Card, Button} from 'react-bootstrap';
import { urlFor } from '../lib/api';
import Link from 'next/link';

export default function CardListItem({author, img, link = "#", title, text, buttonText, date}) {
   return (
      <Card className="mb-3">
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
         <Card.Body>
            {/* <Card.Img src={urlFor(img).url()} />  */}
            <Card.Title>{ title }</Card.Title>
            <Card.Text>
            { text }
            </Card.Text>
            <Link href={link}>
               <Button variant="primary">{ buttonText }</Button>
            </Link>
         </Card.Body>
    </Card>
   )
}
