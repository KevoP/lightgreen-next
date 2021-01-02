import PageLayout from 'components/PageLayout';
import SiteIntro from 'components/SiteIntro';
import FilterMenu from 'components/FilterMenu';
import PageOfPosts from 'components/PageOfPosts';

import { getPaginatedBlogPosts } from 'lib/api';
import { useState } from 'react'
import { useGetBlogPages } from 'actions/pagination';
import { Row , Button} from 'react-bootstrap';
import PreviewAlert from 'components/PreviewAlert';

export default function Home({ posts, preview }) {

  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

  const {
    data, error, mutate, size, setSize, isValidating, hitEnd
  } = useGetBlogPages({filter});

  posts = data ? [].concat(...data): posts;
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");

  const loadMore = () => {
    setSize(size + 1);
  }

  return(
    <PageLayout className="homepage-content mb-5">
      {preview && <PreviewAlert/>}
      <SiteIntro />
      <FilterMenu filter={filter} onChange={(option, value) => {setFilter({...filter, [option]: value})}} />

      <div>Showing: {posts.length} posts</div>
      <div>Size: {size ?? 'nope'}</div>

      <hr/>

      {posts ?
        <Row className="mt-5">
          <PageOfPosts posts={posts} listView={!!filter.view.list} />
        </Row>
      : 
      <h2>Loading...</h2>}

      <div className="text-center mt-4">
        <Button 
          variant="outline-secondary" 
          disabled={hitEnd}
          onClick={() => setSize(size + 1)}>
            {hitEnd ? "All done" : isLoadingMore ?  "Loading..." : "Load More"}
        </Button>
      </div>  
  
    </PageLayout> 
  )
}

export async function getStaticProps({preview = false}){
  const posts = await getPaginatedBlogPosts({offset: 0});
  return {
    props: {
      posts,
      preview
    }
  }
}