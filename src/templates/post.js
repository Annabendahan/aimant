import React from "react"
import { graphql } from "gatsby"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"

import contentParser from "gatsby-wpgraphql-inline-images"
import "../components/style.scss?version=4"

const options = {
  buttons: {
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: true,
    showPrevButton: true,
    showThumbnailsButton: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
  caption: {
    captionAlignment: "center",
    captionColor: "#FFFFFF",
    showCaption: true,
  },
}

const Post = props => {




  const {
    data: {
      wpgraphql: { post },
    },
    pageContext: {
      pluginOptions: { wordPressUrl, uploadsUrl },
    },
  } = props
  const { title, content } = post
  const customCaptions = Array(10)
    .fill(null)
    .map((item, index) => ({
      id: index,
      caption: <div className="caption">{title} &copy;</div>,
    }))
  console.log(customCaptions)
  console.log(props.data.wpgraphql.post)

  let url = props.data.wpgraphql.post.acf.video


  console.log(props.data.wpgraphql.post.acf.video)
  console.log(`URL ${url}`)




  let matches = document.querySelectorAll("h6")

  console.log('matchees' + matches)


  if (url) {
    matches.forEach(m => {
      console.log(m)
      m.classList.add("height")
    })

  }




  return (
    <SimpleReactLightbox>
      <div>
        {/* Bannière */}
        {props.data.wpgraphql.post.acf.bannertext ? (
          <div className="test">
            <div
              className="rect"
              style={{
                backgroundImage: `url(${props.data.wpgraphql.post.acf.bannerpicture.sourceUrl})`,
              }}
            >
              <div className="nameBig">
                {props.data.wpgraphql.post.acf.bannertext}
              </div>
            </div>
          </div>
        ) : <div className="test2"> </div>}

        {/* Vidéo */}


        {/* {props.data.wpgraphql.post.acf.video ? (
          <div className="demo">
            <div>



              <iframe width="420" height="315"
                src={url}>
              </iframe>





              <p> VIDEO{props.data.wpgraphql.post.acf.video}</p>

            </div>
          </div>
        ) : null} */}






        <SRLWrapper options={options} >
          {contentParser({ content }, { wordPressUrl, uploadsUrl })}
        </SRLWrapper>









      </div>
      <p className="download" onClick={() => window.print()}>
        Télécharger le cv
      </p>
    </SimpleReactLightbox>
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
        video
      }
    }
  }
}
`
