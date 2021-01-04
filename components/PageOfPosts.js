import CardListItem from './CardListItem';
import CardItem from './CardItem';
import { Col } from 'react-bootstrap';
import { useGetPosts } from 'actions';
import BlankCardItem from './BlankCardItem';
import BlankCardListItem from './BlankCardListItem';
import { dateToLocale } from '../lib/utils';

export default function PageOfPosts({posts, listView}) {
   
   if(!posts) {
      return Array(3).fill(0).map((item, index) => {
         return listView ? 
            <Col md={9} key={`card-list-item-${index}`}>
               <BlankCardListItem></BlankCardListItem>
            </Col>   
            :
            <Col md={4} key={`card-item-${index}`}>
               <BlankCardItem></BlankCardItem>
            </Col>
      });
   }

   if(listView){
      return posts.map(post => (
         <Col md={9} key={post.slug}>
            <CardListItem 
                  author={post.author}
                  img={post.coverImage}
                  date={datetoLocale(post.date)}
                  title={post.title}
                  text={post.subtitle}
                  link={post.url}
                  buttonText={post.title} />
         </Col>)
         )}

   return posts.map(post => (
      <Col md={4} key={post.slug}>
         <CardItem 
               author={post.author}
               img={post.coverImage}
               date={dateToLocale(post.date)}
               title={post.title}
               text={post.subtitle}
               link={post.url}
               buttonText={post.title} />
      </Col>)
      )}

