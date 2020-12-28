import React from 'react';
import { graphql } from 'gatsby';

import contentParser from 'gatsby-wpgraphql-inline-images';

const Page = props => {

  const {
    location,
    data: {
      wpgraphql: { page },
    },
    pageContext: {
      pluginOptions: { wordPressUrl, uploadsUrl },
    },
  } = props;
  const { title, content } = page;
  return (
    <div>
      <div>
        <h1>page</h1> page
                {contentParser({ content }, { wordPressUrl, uploadsUrl })}
      </div>
    </div>
  )
}

export default Page;

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
      }
    }
  }
`;
