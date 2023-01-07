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
    activeListingsByLister: async (root, _args, context, info) => {
      return await context.Mintbase.query_root.mb_views_active_listings({
        root,
        args: {
          where: { nft_contract_id: { _eq: "everything.mintspace2.testnet" }, listed_by: {_eq: _args.listerId} }
        },
        context,
        info
      });
    },
    minter: async (root, _args, context, info) => {
      return await context.Mintbase.query_root.mb_store_minters_by_pk({
        root,
        args: {
          nft_contract_id: "everything.mintspace2.testnet",
          minter_id: _args.minterId
        },
        context,
        info
      });
    },
  },
  Thing: {
    nft: {
      selectionSet: `
        {
          id
        }
      `,
      resolve: async (root, _args, context, info) => {
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
