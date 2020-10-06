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
  return (
    <SimpleReactLightbox>
      <div>
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
        ) : null}

        <SRLWrapper options={options} customCaptions={customCaptions}>
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
        }
      }
    }
  }
`
