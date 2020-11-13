const path = require(`path`)
module.exports = async ({ actions, graphql }, pluginOptions) => {
  const GET_POSTS = `
  query GET_POSTS($first:Int $after:String){
    wpgraphql {
      posts(
        first: $first
        after:$after
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          uri
          postId
          title
        }
      }
    }
  }
  `
  const { createPage } = actions
  const allPosts = []
  const blogPages = []
  let pageNumber = 0
  const fetchPosts = async variables =>
    await graphql(GET_POSTS, variables).then(({ data }) => {

      const {
        wpgraphql: {
          posts: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      const nodeIds = nodes.map(node => node.postId)
      const blogTemplate = path.resolve(`./src/templates/blog.js`)
      const blogPagePath = !variables.after ? `/` : `/page/${pageNumber}`

      blogPages[pageNumber] = {
        path: blogPagePath,
        component: blogTemplate,
        context: {
          ids: nodeIds,
          pageNumber: pageNumber,
          hasNextPage: hasNextPage,
        },
        ids: nodeIds,
      }
      nodes.map(post => {
        allPosts.push(post)
      })
      if (hasNextPage) {
        pageNumber++
        return fetchPosts({ first: 12, after: endCursor })
      }
      return allPosts
    })

  await fetchPosts({ first: 12, after: null }).then(allPosts => {
    const postTemplate = path.resolve(`./src/templates/post.js`)

    blogPages.map(blogPage => {

      createPage(blogPage)
    })

    allPosts.map(post => {

      createPage({
        path: `/profiles${post.uri}`,
        component: postTemplate,
        context: {
          pluginOptions,
          ...post,
        },
      })
    })
  })
}
