export const resolvers = {
  Query: {
    authInfo(_source, _args, context) {
      return context._auth0
    }    
  },
  Thing: {
    nft: {
      selectionSet: `
        {
          id
        }
      `,
      resolve: async (root, _args, context, info) => {
        // this works, but it not optimal
        // first fix should be checking if the thing has been minted or not
        const nft = await context.Mintbase.query_root.mb_views_nft_tokens({
          root,
          args: {
            where: {
              reference: { _eq: root.id }
            }
          },
          context,
          info
        })
        return nft[0];
      }
    }
  }
}
