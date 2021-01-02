import PageLayout from '../../components/PageLayout';
import { useRouter } from 'next/router';
import { Row, Col} from 'react-bootstrap';
import { getPostBySlug, getPaginatedBlogPosts } from 'lib/api';
import BlogPostHeader from 'components/BlogPostHeader';
import BlogContent from 'components/BlogContent';
import { Error } from 'next/error';
import PreviewAlert from '../../components/PreviewAlert';

export default function BlogPost({blogPost, preview, previewData}) {
   const router = useRouter();

   // no flalback or slug
   if(!router.isFallback && !blogPost?.slug){
      return <Error statusCode="404" />;
   }
   
   if(router.isFallback){
      return '...loading';
   }

   return (
      <PageLayout className="blog-post">
         {preview && <PreviewAlert/>}
         <Row>
            <Col>
               <BlogPostHeader 
                  author={blogPost.author} 
                  title={blogPost.title} 
                  subtitle={blogPost.subtitle} 
                  coverImage={blogPost.coverImage} 
                  date={blogPost.date} />
               <hr/>
               {/* Content goes here */}
              <BlogContent content={blogPost.content} />
            </Col>
         </Row>
      </PageLayout>
   )
}

export async function getStaticProps({params, preview, previewData}){
   const blogPost = await getPostBySlug(params.slug, preview);
   preview = !!preview;
   previewData = previewData ? previewData: false;
   return {
      props: {
         blogPost,
         preview,
         previewData
      }
   }
}

export async function getStaticPaths(){
   const blogPosts = await getPaginatedBlogPosts({offset: 0});
   return {
      paths: blogPosts.map(post => ({params: {slug: post.slug}})),
      fallback: true
   }
}