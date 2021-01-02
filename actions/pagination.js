import { useSWRInfinite } from 'swr';
import { getPosts } from 'actions';

export const useGetBlogPages = ({filter}) => { 
   
   const result = useSWRInfinite((index, previousPageData) => {
      if (index === 0){ // first page
         return `/api/posts?index=0&date=${filter.date.asc ? 'asc' : 'desc'}`
      }
      if (!previousPageData.length) {
         return null // reached the end
      }
      return `/api/posts?offset=${index * 3}&date=${filter.date.asc ? 'asc' : 'desc'}`;
   }, getPosts);

   let hitEnd = false;
   const { data } = result;

   if (data) {
      hitEnd = data[data.length - 1].length === 0
   }

   return {...result, hitEnd}
}