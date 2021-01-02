import sanityClient, { previewClient } from './sanity';
import imageUrlBuilder from '@sanity/image-url';

/*
 * sanity image URL implementation
 * see https://www.sanity.io/docs/image-url
 */
const imageBuilder = imageUrlBuilder(sanityClient);

const getClient = isPreview => isPreview ? previewClient : sanityClient

export function urlFor(source){
   return imageBuilder.image(source);
}

const blogPostFields = `
   title,
   subtitle,
   coverImage,
   "slug": slug.current,
   "author": author->{
      name,
      "avatar": avatar.asset->url,
   },
   date,
   "url": '/posts/' + slug.current,
   "content": content[]{..., "asset":asset->},
`;

export async function getPaginatedBlogPosts({offset = 0, date = 'desc'}){
   return await sanityClient
      .fetch(`*[_type == 'blog'] | order(_createdAt ${date}) [${offset}...${offset + 3}]{${blogPostFields}}`);
}

export async function getAllBlogPosts(){
   return await sanityClient
      .fetch(`*[_type == 'blog']{${blogPostFields}}`);
}

export async function getPostBySlug(slug, isPreview){
   const client = getClient(isPreview);
   const result = await client
      .fetch(`*[slug.current ==  $slug]{ ${blogPostFields}}`, {slug})
      .then(results => isPreview && results.length > 1  ? results[1] : results[0] );

   return result;   
}
