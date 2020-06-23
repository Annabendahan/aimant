import React, { Fragment } from "react"
import { graphql } from "gatsby"

import contentParser from "gatsby-wpgraphql-inline-images"



const Post = props => {
  console.log("post")
  const {
    location,
    data: {
      wpgraphql: { post },
    },
    pageContext: {
      pluginOptions: { wordPressUrl, uploadsUrl },
    },
  } = props
  const { title, content } = post
  return (
    <div>
              <div>
              {post}
              <h1>{title}</h1>
              <h1>post</h1> post 
                {contentParser({ content }, { wordPressUrl, uploadsUrl })}
              </div>
             
                </div>
           
  )
}

export default Post

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        title
        content
        uri
        
       
      }
    }
  }
`