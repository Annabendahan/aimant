const createPosts = require(`./gatsby/createPosts`)


exports.createPages = async ({ actions, graphql }) => {
  const pluginOptions = {
    wordPressUrl: `https://aimant.art/`,
    uploadsUrl: `https://aimant.art/wp-content/uploads/`,
  }
  await createPosts({ actions, graphql }, pluginOptions)


}

