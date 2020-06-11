import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Layout from "../components/layout"


import { graphql } from "gatsby"

class ProfilesTemplate extends Component {
  constructor(props) {
    super(props)
   
  }

 
  render() {
    const data = this.props.data

    return (
      <Layout>
      
          
              <div>
                {data.allWordpressPost.edges.map(({ node }) => (
                  <div key={node.slug}>
                    <Link to={`/actualites/${node.path}`}>
                      {console.log(node.content)}
                      {/* <p className="high2"> {node.date} </p> */}
                      {this.state.cat.includes(node.tags[0]) ? (
                        <div className={"article"}>
                          {node.tags == 4 ? (
                            <p className="cat">DOMMAGE CORPOREL</p>
                          ) : null}
                          {node.tags == 5 ? (
                            <p className="cat">DROIT DU TRAVAIL</p>
                          ) : null}
                          {node.tags == 6 ? (
                            <p className="cat">PROTECTION SOCIALE</p>
                          ) : null}
                          {node.tags == 7 ? (
                            <p className="cat">DROIT DES ASSURANCES</p>
                          ) : null}
                          <p
                            className="high2"
                            dangerouslySetInnerHTML={{ __html: node.title }}
                          />

                          <p
                            className="desc"
                            dangerouslySetInnerHTML={{ __html: node.excerpt }}
                          />
                        </div>
                      ) : null}
                    </Link>
                  </div>
                ))}
              </div>
         

      </Layout>
    )
  }
}

ProfilesTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default ProfilesTemplate

export const pageQuery = graphql`
query MyQuery {
    allWordpressPost {
      nodes {
        id
        title
      }
    }
  }
  
`