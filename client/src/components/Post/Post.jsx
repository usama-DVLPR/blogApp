import React from 'react'

export const Post = () => {
  return (
    <div className="post">
    <div className="image">
        <img
            src="https://img.freepik.com/free-photo/anthropomorphic-robot-indoors_23-2150405626.jpg?size=626&ext=jpg"
            alt="artical poster"/>
    </div>
     <div className="texts">
         <h2>How TRI is using Generative AI to teach robots</h2>
         <p className="info">
             <a href="" className="author">Usama Hameed</a>
             <time>2023-09-24</time>
         </p>
         <p className="summary">TRI was exploring the use of Generative Adversarial Networks (GANs) and other Generative AI techniques
             to enhance robot learning and adaptation. By employing GANs, which consist of a generator and discriminator network in a
             competitive learning setup</p>
     </div>
 </div>
  )
}
