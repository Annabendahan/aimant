import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <Layout>
        <div className="background-hono">
          <p
            className="high2"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />

          <p
            className="desc"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </Layout>
    )
  }
}

export default PostTemplate

export const pageQuery = graphql`
  query currentPostQuery($id: String!) {
    wordpressPost(id: { eq: $id }) {
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