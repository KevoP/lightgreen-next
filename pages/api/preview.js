import { getPostBySlug } from '../../lib/api';

export default async function enablePreview(req, res){

   if(req.query.secret != process.env.SANITY_STUDIO_PREVIEW_SECRET){
      return res.status(401).json({message: "Invalid token"});
   }

   if(!req.query.slug){
      return res.status(401).json({message: "Invalid request, slug missing"});
   }

   const post = await getPostBySlug(req.query.slug, true);

   if(!post){
      return res.status(401).json({message: "post not found"});
   }

   res.setPreviewData({message: "Hi Kev"}); // sets cookies __prerender_bypass __next_preview_data
   res.writeHead(307, {Location: `/posts/${post.slug}`});

   res.end();
}