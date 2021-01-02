import useSWR from 'swr';
/* create the feetcher function */
export const fetcher = (url) => fetch(url).then(res => res.json());

export const useGetHello = () => useSWR('/api/hello', fetcher);

export const getPosts = (url) => {return fetcher(url)};

export const useGetPosts = ({offset = 0, filter = {date: {asc: true}}}, initialData) => {
   return useSWR(`/api/posts?offset=${offset || 0}&date=${filter.date.asc ? 'asc' : 'desc'}`, 
      fetcher, 
      {initialData});
}   