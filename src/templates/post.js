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
              
         
                {contentParser({ content }, { wordPressUrl, uploadsUrl })}
                <a href="http://pdf-ace.com/pdfme" style="margin-left: 1em; margin-right: 1em;" target="_blank"><img alt="Save as PDF" height="27" src="" width="120" /></a>
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