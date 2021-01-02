import { getPaginatedBlogPosts } from 'lib/api'

export default async function getPosts(req, res){
   const offset = parseInt((req.query.offset || 0), 10);
   const date = (req.query.date == 'asc') ? 'asc' : 'desc';
   const posts = await getPaginatedBlogPosts({offset, date});
   res.status(200).json(posts);
}