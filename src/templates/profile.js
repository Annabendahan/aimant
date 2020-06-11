import React, { Component } from "react"
import Layout from "../components/layout"
import Link from "gatsby-link"
import { graphql } from "gatsby"

class ProfileTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout>
   
         
            <div >
              

              

              <p
                className="desc"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            
      </Layout>
    )
  }
}

export default ProfileTemplate

export const pageQuery = graphql`
  query actualitePostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      content
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`