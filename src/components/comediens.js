import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

export default (props) => {
  const data = useStaticQuery(graphql`
    query ComQuery {
      wpgraphql {
        posts(first: 100, where: { categoryId: 3, orderby: { field: TITLE, order: ASC } }) {
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
          }
        }
      }
    }
  `);

  let posts = data.wpgraphql.posts.nodes;

  return (
    <div className="grid-container">
      {posts.map((c) => (
        <Link key={c.uri} to={`profiles${c.uri}`}>
          <div className="grid-item">
            <div className="picture">
              {c.acf.mignature ? <img src={c.acf.mignature.sourceUrl} alt="photo" /> : ' '}
            </div>
            <p>{c.excerpt.replace(/<\/?[^>]*?>/gi, '')}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
