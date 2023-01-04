export const resolvers = {
  Query: {
    authInfo(_source, _args, context) {
      return context._auth0
    },
    listings: async (root, _args, context, info) => {
      return await context.Mintbase.query_root.mb_views_active_listings({
        root,
        args: {
          where: { nft_contract_id: { _eq: "everything.mintspace2.testnet" } }
        },
        context,
        info
      })
    },
    listingsByLister: async (root, _args, context, info) => {
      return await context.Mintbase.query_root.mb_views_active_listings({
        root,
        args: {
          where: { nft_contract_id: { _eq: "everything.mintspace2.testnet" }, listed_by: {_eq: _args.listerId} }
        },
        context,
        info
      })
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
  },
  Listing: {
    thing: {
      selectionSet: `
        {
          reference
        }
      `,
      resolve: async (root, _args, context, info) => {
        const thing = await context.everything.Query.thing({
          root,
          args: {
            id: root.reference
          },
          context,
          info
        })
        return thing;
      }
    }
  }
}
