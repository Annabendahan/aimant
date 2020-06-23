const createPosts = require(`./gatsby/createPosts`)
const createPages = require(`./gatsby/createPages`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)


exports.createPages = async ({ actions, graphql }) => {
  const pluginOptions = {
    wordPressUrl: `https://aimant.art/`,
    uploadsUrl: `https://aimant.art/wp-content/uploads/`,
  }
  await createPosts({ actions, graphql }, pluginOptions)
  await createPages({ actions, graphql }, pluginOptions)



}

exports.createResolvers = async (
  {
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  },
) => {
  const { createNode } = actions

  await createResolvers({
    WPGraphQL_MediaItem: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.sourceUrl

          if (source.mediaItemUrl !== undefined) {
            sourceUrl = source.mediaItemUrl
          }

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}