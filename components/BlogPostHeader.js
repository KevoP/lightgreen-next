import { urlFor } from '../lib/api';

export default function BlogPostHeader({author, date, title, subtitle, coverImage}) {
   return (
      <div className="blog-post-header">
         <p className="blog-post-header__post-meta">
            <img
               height={50}
               width={50} 
               src={urlFor(author?.avatar)
                     .size(50,50)
                     .fit('clip')
                     .url()} 
               alt={`${author?.name} avatar`} 
               className="rounded-circle mr-3"/>                  
            {author?.name}{`, `}{new Date(date).toLocaleDateString('en-GB', {month: 'long', day: 'numeric', year: 'numeric'})}
         </p>
         <h1 className="blog-post-header__title">{title}</h1>
         <h2 className="blog-post-header__subtitle">{subtitle}</h2>
         <img src={urlFor(coverImage)} className="img-fluid rounded"/>
      </div>
   )
}
