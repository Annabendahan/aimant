import React from 'react';
import { graphql } from 'gatsby';
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox';
import Vimeo from '@u-wave/react-vimeo';
import YouTube from 'react-youtube';

import contentParser from 'gatsby-wpgraphql-inline-images';
import '../components/style.scss?version=4';

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
    captionAlignment: 'center',
    captionColor: '#FFFFFF',
    showCaption: true,
  },
};

const replaceImage = (content) =>
  content &&
  content.replace(/http:\/\/aimantarwm.cluster021.hosting.ovh.net/gim, `https://cms.aimant.art`);

const Post = (props) => {
  const {
    data: {
      wpgraphql: { post },
    },
    pageContext: {
      pluginOptions: { wordPressUrl, uploadsUrl },
    },
  } = props;

  const { title, content = '', acf } = post;
  const clearContent = replaceImage(content);

  const postHaveBanner = clearContent.indexOf('banner') >= 0;
  const { video = '' } = acf || {};

  const customCaptions = Array(10)
    .fill(null)
    .map((item, index) => ({
      id: index,
      caption: <div className="caption">{title} &copy;</div>,
    }));

  const isVimeo = video && video.indexOf('vimeo') >= 0;

  const youtubeMatches =
    !isVimeo && video && video.match(/^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);
  const youtubeId = youtubeMatches && youtubeMatches.length >= 1 ? youtubeMatches[2] : '';
  return (
    <SimpleReactLightbox>
      <React.Fragment>
        {/* Bannière */}
        {props.data.wpgraphql.post.acf.bannerpicture &&
          props.data.wpgraphql.post.acf.bannerpicture.sourceUrl && (
            <div
              className="banner-container"
              style={{
                backgroundImage: `url(${props.data.wpgraphql.post.acf.bannerpicture.sourceUrl})`,
              }}
            >
              {!postHaveBanner && props.data.wpgraphql.post.acf.bannertext && (
                <div className="nameBig">{props.data.wpgraphql.post.acf.bannertext}</div>
              )}
            </div>
          )}

        {video && (
          <React.Fragment>
            {' '}
            {isVimeo ? (
              <Vimeo
                className="artist-video"
                video={video}
                autplay={true}
                autopause={true}
                height="350"
                width="800"
              />
            ) : (
              <div className="artist-video">
                <YouTube
                  videoId={youtubeId}
                  opts={{
                    height: '390',
                    width: '640',
                    playerVars: {
                      autoplay: 1,
                    },
                  }}
                />
              </div>
            )}
          </React.Fragment>
        )}

        <SRLWrapper options={options} customCaptions={customCaptions}>
          {contentParser({ content: clearContent }, { wordPressUrl, uploadsUrl })}
        </SRLWrapper>
      </React.Fragment>
      <p role="button" className="download" onClick={() => window.print()}>
        Télécharger le cv
      </p>
    </SimpleReactLightbox>
  );
};

export default Post;

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
`;
