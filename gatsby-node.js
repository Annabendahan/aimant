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

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions
  createResolvers({
    GraphCMS_BlogPost: {
      createdAt: {
        type: `String`,
        resolve(source, args, context, info) {
          return dateformat(source.date, `fullDate`)
        },
      },
      post: {
        resolve(source, args, context, info) {
          return remark().use(html).processSync(source.post).contents
        },
      },
    },
    GraphCMS_Asset: {
      imageFile: {
        type: `File`,
        // projection: { url: true },
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.url,
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