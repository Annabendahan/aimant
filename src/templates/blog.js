import React, { Component } from "react"
import { graphql, navigate } from "gatsby"
import Layout from "../components/layout"
import logo from "../images/aimant_logo.png"
import { Link } from "gatsby"
import pierre from "../images/pierre_guenard-003.png"

import SEO from "../components/seo"

class IndexPage extends Component {
  scrollTo = idd => {
    var element = document.getElementById(idd)
    element.scrollIntoView({ behavior: "smooth" })
  }

  //   getPicture = async (pic) => {
  //     const response = await fetch(pic)
  //     const data = await response.json()

  //     return data.source_url

  //   //         data: data,
  //   //         status: response.status
  //   //     })
  //   // ).then(res => {
  //   //     console.log(res.status, res.data)
  //   // }));
  // }

  render() {
    const data = this.props.data

    const cat1 = data.wpgraphql.categories.edges[2].node.name // Auteurs et réalisateurs
    const cat2 = data.wpgraphql.categories.edges[3].node.name // Comédiennes
    const cat3 = data.wpgraphql.categories.edges[4].node.name // Comédiens
    const cat4 = data.wpgraphql.categories.edges[8].node.name // Metteurs en scène

    const comediennes = data.wpgraphql.posts.nodes.filter(
      p => parseInt(p.categories.edges[0].node.categoryId, 10) === 2
    )
    const comediens = data.wpgraphql.posts.nodes.filter(
      p => parseInt(p.categories.edges[0].node.categoryId, 10) === 3
    )
    const auteurs = data.wpgraphql.posts.nodes.filter(
      p => parseInt(p.categories.edges[0].node.categoryId, 10) === 4
    )
    const metteurs = data.wpgraphql.posts.nodes.filter(
      p => parseInt(p.categories.edges[0].node.categoryId, 10) === 5
    )
    const apropos = data.wpgraphql.posts.nodes.filter(
      p => parseInt(p.categories.edges[0].node.categoryId, 10) === 6
    )
    const infos = data.wpgraphql.posts.nodes.filter(
      p => parseInt(p.categories.edges[0].node.categoryId, 10) === 7
    )
    const nom = data.wpgraphql.posts.nodes.filter(
      p => parseInt(p.categories.edges[0].node.categoryId, 10) === 8
    )
    const mail = data.wpgraphql.posts.nodes.filter(
      p => parseInt(p.categories.edges[0].node.categoryId, 10) === 9
    )
    const adresse = data.wpgraphql.posts.nodes.filter(
      p => parseInt(p.categories.edges[0].node.categoryId, 10) === 10
    )
    const ville = data.wpgraphql.posts.nodes.filter(
      p => parseInt(p.categories.edges[0].node.categoryId, 10) === 11
    )
    const numero = data.wpgraphql.posts.nodes.filter(
      p => parseInt(p.categories.edges[0].node.categoryId, 10) === 12
    )

    const contact = data.wpgraphql.posts.nodes.filter(
      p => parseInt(p.categories.edges[0].node.categoryId, 10) === 13
    )





    return (
      <Layout>
        <SEO title=".:: aimant ::: agence artistique ::." />
        <div className="home__main">
          <img src={logo} alt="logo" />
        </div>

        <div className="home__menu">
          <div className="home__tabs">
            <h4 onClick={() => this.scrollTo("comediennes")}>{cat2}</h4>

            <h4 onClick={() => this.scrollTo("comediens")}>{cat3}</h4>
            <h4 onClick={() => this.scrollTo("auteurs")}>
              {cat1}
            </h4>
            <h4 onClick={() => this.scrollTo("metteurs")}>{cat4}</h4>
          </div>
        </div>

        <div id="comediennes" className="section section__red">
          <div className="cards">
            <h2> {cat2} </h2>

            <div className="grid-container">
              {comediennes.map(c => (
                <Link key={c.uri} to={`profiles/${c.uri}`}>
                  <div className="grid-item">
                    <div className="picture">
                      {c.acf.mignature ? (
                        <img src={c.acf.mignature.sourceUrl} alt="photo" />
                      ) : (
                          " "
                        )}
                    </div>
                    <p>{c.excerpt.replace(/<\/?[^>]*?>/gi, "")}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div id="comediens" className="section section__white">
          <div className="cards">
            <h2> {cat3}</h2>

            <div className="grid-container">
              {comediens.map(c => (
                <Link key={c.uri} to={`profiles/${c.uri}`}>
                  <div className="grid-item">
                    <div className="picture">
                      {c.acf.mignature ? (
                        <img src={c.acf.mignature.sourceUrl} alt="photo" />
                      ) : (
                          " "
                        )}
                    </div>
                    <p>{c.excerpt.replace(/<\/?[^>]*?>/gi, "")}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div id="auteurs" className="section section__red">
          <div className="cards">
            <h2> {cat1}</h2>

            <div className="grid-container">
              {auteurs.map(c => (
                <Link key={c.uri} to={`profiles/${c.uri}`}>
                  <div className="grid-item">
                    <div className="picture">
                      {c.acf.mignature ? (
                        <img src={c.acf.mignature.sourceUrl} alt="photo" />
                      ) : (
                          " "
                        )}
                    </div>
                    <p>{c.excerpt.replace(/<\/?[^>]*?>/gi, "")}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div id="metteurs" className="section section__white">
          <div className="cards">
            <h2> {cat4}</h2>

            <div className="grid-container">
              {metteurs.map(c => (
                <Link key={c.uri} to={`profiles/${c.uri}`}>
                  <div className="grid-item">
                    <div className="picture">
                      {c.acf.mignature ? (
                        <img src={c.acf.mignature.sourceUrl} alt="photo" />
                      ) : (
                          " "
                        )}
                    </div>
                    <p>{c.excerpt.replace(/<\/?[^>]*?>/gi, "")}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div id="contact" className="home__footer">
          {apropos.map(c => (
            <p className="apropos">{c.content.replace(/<\/?[^>]*?>/gi, "")}</p>
          ))}

          <img src={logo} alt="logo" />

          {nom.map(c => (
            <p className="apropos">{c.content.replace(/<\/?[^>]*?>/gi, "")}</p>
          ))}

          {mail.map(c => (
            <a href={`mailto:${c.content.replace(/<\/?[^>]*?>/gi, "")}`}>
              <p className="infos">{c.content.replace(/<\/?[^>]*?>/gi, "")}</p>
            </a>
          ))}

          {adresse.map(c => (
            <p className="infos">{c.content.replace(/<\/?[^>]*?>/gi, "")}</p>
          ))}

          {ville.map(c => (
            <p className="infos">{c.content.replace(/<\/?[^>]*?>/gi, "")}</p>
          ))}

          {numero.map(c => (
            <p className="infos">{c.content.replace(/<\/?[^>]*?>/gi, "")}</p>
          ))}

          {contact.map(c => (
            <a href={`mailto:${c.content.replace(/<\/?[^>]*?>/gi, "")}`}>
              <p className="infos">{c.content.replace(/<\/?[^>]*?>/gi, "")}</p>
            </a>
          ))}

          {/* <p
                className="infos"
                dangerouslySetInnerHTML={{ __html: infos[0].node.content }}
              /> */}
        </div>

        <div className="instagram">
          <a href="https://www.instagram.com/agenceaimant/" target="blank">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" fill="#BA0000" />
              <path
                d="M25.6035 6.15381H14.1167C9.72596 6.15381 6.15381 9.72596 6.15381 14.1167V25.6035C6.15381 29.9942 9.72596 33.5664 14.1167 33.5664H25.6035C29.9942 33.5664 33.5664 29.9942 33.5664 25.6035V14.1167C33.5664 9.72596 29.9942 6.15381 25.6035 6.15381ZM31.4248 25.6035C31.4248 28.8134 28.8134 31.4248 25.6035 31.4248H14.1167C10.9068 31.4248 8.29542 28.8134 8.29542 25.6035V14.1167C8.29542 10.9068 10.9068 8.29542 14.1167 8.29542H25.6035C28.8134 8.29542 31.4248 10.9068 31.4248 14.1167V25.6035Z"
                fill="white"
              />
              <path
                d="M19.8602 12.4716C15.7861 12.4716 12.4717 15.786 12.4717 19.8601C12.4717 23.9342 15.7861 27.2487 19.8602 27.2487C23.9343 27.2487 27.2488 23.9342 27.2488 19.8601C27.2488 15.786 23.9343 12.4716 19.8602 12.4716ZM19.8602 25.107C16.9671 25.107 14.6133 22.7533 14.6133 19.8601C14.6133 16.967 16.9671 14.6132 19.8602 14.6132C22.7534 14.6132 25.1072 16.967 25.1072 19.8601C25.1072 22.7533 22.7534 25.107 19.8602 25.107Z"
                fill="white"
              />
              <path
                d="M27.3557 13.4353C27.9471 13.4353 28.4265 12.9559 28.4265 12.3645C28.4265 11.7731 27.9471 11.2937 27.3557 11.2937C26.7643 11.2937 26.2849 11.7731 26.2849 12.3645C26.2849 12.9559 26.7643 13.4353 27.3557 13.4353Z"
                fill="white"
              />
            </svg>
          </a>
        </div>

        <div className="contact" onClick={() => this.scrollTo("contact")}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="40" height="40" fill="#BA0000" />
            <path
              d="M21.484 30.7788L21.904 32.2138C20.854 32.4938 19.7807 32.6338 18.684 32.6338C15.4874 32.6338 12.8507 31.5605 10.774 29.4138C8.69736 27.2905 7.65902 24.6305 7.65902 21.4338C7.65902 18.9838 8.20736 16.6505 9.30402 14.4338C10.424 12.1938 12.0807 10.3271 14.274 8.83381C16.4674 7.34047 18.9524 6.59381 21.729 6.59381C24.949 6.59381 27.6557 7.55047 29.849 9.46381C32.0424 11.3771 33.139 13.9788 33.139 17.2688C33.139 19.6255 32.5207 21.7255 31.284 23.5688C30.0707 25.4121 28.484 26.3338 26.524 26.3338C24.774 26.3338 23.5724 25.6221 22.919 24.1988C22.8957 24.1755 22.8607 24.1638 22.814 24.1638C22.324 24.8638 21.7057 25.4121 20.959 25.8088C20.2357 26.2055 19.5124 26.4038 18.789 26.4038C17.3657 26.4038 16.304 25.9255 15.604 24.9688C14.904 23.9888 14.554 22.7521 14.554 21.2588C14.554 20.0455 14.8107 18.8088 15.324 17.5488C15.8607 16.2655 16.689 15.1455 17.809 14.1888C18.929 13.2321 20.189 12.7538 21.589 12.7538C22.779 12.7538 23.759 13.1738 24.529 14.0138C24.669 13.8038 24.8557 13.4655 25.089 12.9988H26.384C25.4507 19.1588 24.984 22.4955 24.984 23.0088C24.984 24.2221 25.5207 24.8288 26.594 24.8288C28.0174 24.8288 29.1724 24.0705 30.059 22.5538C30.9457 21.0138 31.389 19.2521 31.389 17.2688C31.389 14.4455 30.4674 12.2055 28.624 10.5488C26.7807 8.89214 24.4824 8.06381 21.729 8.06381C19.8857 8.06381 18.1707 8.46047 16.584 9.25381C14.9974 10.0238 13.6907 11.0505 12.664 12.3338C11.6374 13.5938 10.8324 15.0171 10.249 16.6038C9.68902 18.1905 9.40902 19.8005 9.40902 21.4338C9.40902 24.2105 10.284 26.5205 12.034 28.3638C13.784 30.2305 16.0007 31.1638 18.684 31.1638C19.594 31.1638 20.5274 31.0355 21.484 30.7788ZM23.724 15.5888C23.0474 14.8421 22.3007 14.4688 21.484 14.4688C20.5507 14.4688 19.734 14.9005 19.034 15.7638C18.334 16.6271 17.844 17.5605 17.564 18.5638C17.284 19.5671 17.144 20.4888 17.144 21.3288C17.144 23.5688 17.8557 24.6888 19.279 24.6888C20.049 24.6888 20.714 24.3855 21.274 23.7788C21.834 23.1721 22.2774 22.3088 22.604 21.1888C22.9307 20.0455 23.164 19.1121 23.304 18.3888C23.444 17.6655 23.584 16.7321 23.724 15.5888Z"
              fill="white"
            />
          </svg>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query GET_ALL_POSTS {
    wpgraphql {
      posts(first: 1000, where: { orderby: { field: TITLE, order: ASC } }) {
        nodes {
          id
          title
          content
          excerpt
          uri
          acf {
            mignature {
              id
              sourceUrl
            }
          }

          categories {
            edges {
              node {
                id
                categoryId
               
              }
            }
          }
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
    }
  }
`
