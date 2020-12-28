import React from 'react';

function SiteInfo({ link, image, title, category }){
    return (
        <a href={link} target="_blank" rel="noreferrer">
           <div className="site">
               <div className="siteImg">
                   <img src={image} alt={title} />
               </div>
               <div className="siteText">
                    <h2>{title}</h2>
                    <p>{category}</p>
               </div>
           </div>
        </a>
    )
}
export default SiteInfo;