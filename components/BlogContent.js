import BlockContent from '@sanity/block-content-to-react';
import serializers from '../lib/serializers';

export default function BlogContent({content}) {
   return (
      <BlockContent 
         serializers={serializers}
         blocks={content} />
   )
}
