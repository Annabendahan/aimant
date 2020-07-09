import React, { Fragment } from "react"
import { graphql } from "gatsby"

import contentParser from "gatsby-wpgraphql-inline-images"
import "../components/style.scss?version=4"



const Post = props => {
  console.log("post")
  console.log(props)
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
        {props.data.wpgraphql.post.acf.bannertext ?
          <div className="test">
            {/* <div className="rect" style={{backgroundImage: 'url(' + require('../images/pierre_guenard-003.png') + ')'}}> */}
            <div className="rect" style={{ backgroundImage: `url(${props.data.wpgraphql.post.acf.bannerpicture.sourceUrl})` }}>

              <div className="nameBig">{props.data.wpgraphql.post.acf.bannertext}</div>

            </div>


          </div>
          : null}


        {contentParser({ content }, { wordPressUrl, uploadsUrl })}

      </div>
      <p className="download" onClick={() => window.print()}>Télécharger le cv</p>

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
        acf {
          bannertext
          bannerpicture {
            sourceUrl
          }
        }
        
       
      }
    }
  }
`