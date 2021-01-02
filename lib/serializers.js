import { urlFor } from '../lib/api';

export default {
   types: {
      image: ({node: {asset, alt, caption, position = "left"}}) => {                  
         return(
            <div className={`block-image block-image_position_${position}`}>
               <img src={urlFor(asset).height(300).fit('max').url()} alt={alt} />
               <span className="caption">{caption}</span>
            </div>
         )
      }
   },
   container: ({children}) => (
      <div className="block-container">{children}</div>
   )
}