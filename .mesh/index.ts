// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { findAndParseConfig } from '@graphql-mesh/cli';
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { EverythingTypes } from './sources/everything/types';
import type { MintbaseTypes } from './sources/Mintbase/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };



/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Cursor: any;
  Datetime: any;
  JSON: any;
  bigint: any;
  jsonb: any;
  numeric: any;
  timestamp: any;
};

export type Query = {
  /** Reads and enables pagination through a set of `Attribute`. */
  attributes?: Maybe<AttributesConnection>;
  /** Reads and enables pagination through a set of `Characteristic`. */
  characteristics?: Maybe<CharacteristicsConnection>;
  /** Reads and enables pagination through a set of `Media`. */
  medias?: Maybe<MediaConnection>;
  /** Reads and enables pagination through a set of `Option`. */
  options?: Maybe<OptionsConnection>;
  /** Reads and enables pagination through a set of `Relationship`. */
  relationships?: Maybe<RelationshipsConnection>;
  /** Reads and enables pagination through a set of `Tag`. */
  tags?: Maybe<TagsConnection>;
  /** Reads and enables pagination through a set of `Thing`. */
  things?: Maybe<ThingsConnection>;
  /** Reads and enables pagination through a set of `User`. */
  users?: Maybe<UsersConnection>;
  attribute?: Maybe<Attribute>;
  attributeByName?: Maybe<Attribute>;
  characteristic?: Maybe<Characteristic>;
  media?: Maybe<Media>;
  option?: Maybe<Option>;
  relationship?: Maybe<Relationship>;
  tag?: Maybe<Tag>;
  thing?: Maybe<Thing>;
  user?: Maybe<User>;
  userByUsername?: Maybe<User>;
  userByWallet?: Maybe<User>;
  /** fetch data from the table: "blocks" */
  blocks: Array<blocks>;
  /** fetch aggregated fields from the table: "blocks" */
  blocks_aggregate: blocks_aggregate;
  /** fetch data from the table: "blocks" using primary key columns */
  blocks_by_pk?: Maybe<blocks>;
  /** fetch data from the table: "mb_store_minters" */
  mb_store_minters: Array<mb_store_minters>;
  /** fetch aggregated fields from the table: "mb_store_minters" */
  mb_store_minters_aggregate: mb_store_minters_aggregate;
  /** fetch data from the table: "mb_store_minters" using primary key columns */
  mb_store_minters_by_pk?: Maybe<mb_store_minters>;
  /** fetch data from the table: "mb_views.active_listings" */
  mb_views_active_listings: Array<mb_views_active_listings>;
  /** fetch aggregated fields from the table: "mb_views.active_listings" */
  mb_views_active_listings_aggregate: mb_views_active_listings_aggregate;
  /** fetch data from the table: "mb_views.active_listings_rollup" */
  mb_views_active_listings_rollup: Array<mb_views_active_listings_rollup>;
  /** fetch aggregated fields from the table: "mb_views.active_listings_rollup" */
  mb_views_active_listings_rollup_aggregate: mb_views_active_listings_rollup_aggregate;
  /** fetch data from the table: "mb_views.auctions_with_offer" */
  mb_views_auctions_with_offer: Array<mb_views_auctions_with_offer>;
  /** fetch aggregated fields from the table: "mb_views.auctions_with_offer" */
  mb_views_auctions_with_offer_aggregate: mb_views_auctions_with_offer_aggregate;
  /** fetch data from the table: "mb_views.nft_activities" */
  mb_views_nft_activities: Array<mb_views_nft_activities>;
  /** fetch aggregated fields from the table: "mb_views.nft_activities" */
  mb_views_nft_activities_aggregate: mb_views_nft_activities_aggregate;
  /** fetch data from the table: "mb_views.nft_metadata" */
  mb_views_nft_metadata: Array<mb_views_nft_metadata>;
  /** fetch aggregated fields from the table: "mb_views.nft_metadata" */
  mb_views_nft_metadata_aggregate: mb_views_nft_metadata_aggregate;
  /** fetch data from the table: "mb_views.nft_metadata_unburned" */
  mb_views_nft_metadata_unburned: Array<mb_views_nft_metadata_unburned>;
  /** fetch aggregated fields from the table: "mb_views.nft_metadata_unburned" */
  mb_views_nft_metadata_unburned_aggregate: mb_views_nft_metadata_unburned_aggregate;
  /** fetch data from the table: "mb_views.nft_owned_tokens" */
  mb_views_nft_owned_tokens: Array<mb_views_nft_owned_tokens>;
  /** fetch aggregated fields from the table: "mb_views.nft_owned_tokens" */
  mb_views_nft_owned_tokens_aggregate: mb_views_nft_owned_tokens_aggregate;
  /** fetch data from the table: "mb_views.nft_tokens" */
  mb_views_nft_tokens: Array<mb_views_nft_tokens>;
  /** fetch aggregated fields from the table: "mb_views.nft_tokens" */
  mb_views_nft_tokens_aggregate: mb_views_nft_tokens_aggregate;
  /** fetch data from the table: "mb_views.nft_tokens_with_listing" */
  mb_views_nft_tokens_with_listing: Array<mb_views_nft_tokens_with_listing>;
  /** fetch aggregated fields from the table: "mb_views.nft_tokens_with_listing" */
  mb_views_nft_tokens_with_listing_aggregate: mb_views_nft_tokens_with_listing_aggregate;
  /** fetch data from the table: "mb_views.nft_tokens_with_media_type" */
  mb_views_nft_tokens_with_media_type: Array<mb_views_nft_tokens_with_media_type>;
  /** fetch aggregated fields from the table: "mb_views.nft_tokens_with_media_type" */
  mb_views_nft_tokens_with_media_type_aggregate: mb_views_nft_tokens_with_media_type_aggregate;
  /** fetch data from the table: "mb_views.top_stores" */
  mb_views_top_stores: Array<mb_views_top_stores>;
  /** fetch aggregated fields from the table: "mb_views.top_stores" */
  mb_views_top_stores_aggregate: mb_views_top_stores_aggregate;
  /** fetch data from the table: "nft_activities" */
  nft_activities: Array<nft_activities>;
  /** fetch aggregated fields from the table: "nft_activities" */
  nft_activities_aggregate: nft_activities_aggregate;
  /** fetch data from the table: "nft_activities" using primary key columns */
  nft_activities_by_pk?: Maybe<nft_activities>;
  /** fetch data from the table: "nft_attributes" */
  nft_attributes: Array<nft_attributes>;
  /** fetch aggregated fields from the table: "nft_attributes" */
  nft_attributes_aggregate: nft_attributes_aggregate;
  /** fetch data from the table: "nft_attributes" using primary key columns */
  nft_attributes_by_pk?: Maybe<nft_attributes>;
  /** fetch data from the table: "nft_contracts" */
  nft_contracts: Array<nft_contracts>;
  /** fetch aggregated fields from the table: "nft_contracts" */
  nft_contracts_aggregate: nft_contracts_aggregate;
  /** fetch data from the table: "nft_contracts" using primary key columns */
  nft_contracts_by_pk?: Maybe<nft_contracts>;
  /** fetch data from the table: "nft_earnings" */
  nft_earnings: Array<nft_earnings>;
  /** fetch aggregated fields from the table: "nft_earnings" */
  nft_earnings_aggregate: nft_earnings_aggregate;
  /** fetch data from the table: "nft_earnings" using primary key columns */
  nft_earnings_by_pk?: Maybe<nft_earnings>;
  /** An array relationship */
  nft_listings: Array<nft_listings>;
  /** An aggregate relationship */
  nft_listings_aggregate: nft_listings_aggregate;
  /** fetch data from the table: "nft_listings" using primary key columns */
  nft_listings_by_pk?: Maybe<nft_listings>;
  /** fetch data from the table: "nft_metadata" */
  nft_metadata: Array<Thing>;
  /** fetch aggregated fields from the table: "nft_metadata" */
  nft_metadata_aggregate: nft_metadata_aggregate;
  /** fetch data from the table: "nft_metadata" using primary key columns */
  nft_metadata_by_pk?: Maybe<Thing>;
  /** fetch data from the table: "nft_offers" */
  nft_offers: Array<nft_offers>;
  /** fetch aggregated fields from the table: "nft_offers" */
  nft_offers_aggregate: nft_offers_aggregate;
  /** fetch data from the table: "nft_offers" using primary key columns */
  nft_offers_by_pk?: Maybe<nft_offers>;
  /** fetch data from the table: "nft_tokens" */
  nft_tokens: Array<nft_tokens>;
  /** fetch aggregated fields from the table: "nft_tokens" */
  nft_tokens_aggregate: nft_tokens_aggregate;
  /** fetch data from the table: "nft_tokens" using primary key columns */
  nft_tokens_by_pk?: Maybe<nft_tokens>;
  /** The authentication information of the request. */
  authInfo?: Maybe<AuthenticationInfo>;
};


export type QueryattributesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<AttributesOrderBy>>;
  condition?: InputMaybe<AttributeCondition>;
};


export type QuerycharacteristicsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<CharacteristicsOrderBy>>;
  condition?: InputMaybe<CharacteristicCondition>;
};


export type QuerymediasArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<MediaOrderBy>>;
  condition?: InputMaybe<MediaCondition>;
};


export type QueryoptionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<OptionsOrderBy>>;
  condition?: InputMaybe<OptionCondition>;
};


export type QueryrelationshipsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<RelationshipsOrderBy>>;
  condition?: InputMaybe<RelationshipCondition>;
};


export type QuerytagsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
  condition?: InputMaybe<TagCondition>;
};


export type QuerythingsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<ThingsOrderBy>>;
  condition?: InputMaybe<ThingCondition>;
};


export type QueryusersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  condition?: InputMaybe<UserCondition>;
};


export type QueryattributeArgs = {
  id: Scalars['Int'];
};


export type QueryattributeByNameArgs = {
  name: Scalars['String'];
};


export type QuerycharacteristicArgs = {
  thingId: Scalars['String'];
  attributeId: Scalars['Int'];
  optionId: Scalars['Int'];
};


export type QuerymediaArgs = {
  id: Scalars['Int'];
};


export type QueryoptionArgs = {
  id: Scalars['Int'];
};


export type QueryrelationshipArgs = {
  attributeId: Scalars['Int'];
  optionId: Scalars['Int'];
};


export type QuerytagArgs = {
  thingId: Scalars['String'];
  mediaId: Scalars['Int'];
};


export type QuerythingArgs = {
  id: Scalars['String'];
};


export type QueryuserArgs = {
  id: Scalars['String'];
};


export type QueryuserByUsernameArgs = {
  username: Scalars['String'];
};


export type QueryuserByWalletArgs = {
  wallet: Scalars['String'];
};


export type QueryblocksArgs = {
  distinct_on?: InputMaybe<Array<blocks_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<blocks_order_by>>;
  where?: InputMaybe<blocks_bool_exp>;
};


export type Queryblocks_aggregateArgs = {
  distinct_on?: InputMaybe<Array<blocks_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<blocks_order_by>>;
  where?: InputMaybe<blocks_bool_exp>;
};


export type Queryblocks_by_pkArgs = {
  synced_height: Scalars['bigint'];
};


export type Querymb_store_mintersArgs = {
  distinct_on?: InputMaybe<Array<mb_store_minters_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_store_minters_order_by>>;
  where?: InputMaybe<mb_store_minters_bool_exp>;
};


export type Querymb_store_minters_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_store_minters_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_store_minters_order_by>>;
  where?: InputMaybe<mb_store_minters_bool_exp>;
};


export type Querymb_store_minters_by_pkArgs = {
  minter_id: Scalars['String'];
  nft_contract_id: Scalars['String'];
};


export type Querymb_views_active_listingsArgs = {
  distinct_on?: InputMaybe<Array<mb_views_active_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_active_listings_order_by>>;
  where?: InputMaybe<mb_views_active_listings_bool_exp>;
};


export type Querymb_views_active_listings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_active_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_active_listings_order_by>>;
  where?: InputMaybe<mb_views_active_listings_bool_exp>;
};


export type Querymb_views_active_listings_rollupArgs = {
  distinct_on?: InputMaybe<Array<mb_views_active_listings_rollup_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_active_listings_rollup_order_by>>;
  where?: InputMaybe<mb_views_active_listings_rollup_bool_exp>;
};


export type Querymb_views_active_listings_rollup_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_active_listings_rollup_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_active_listings_rollup_order_by>>;
  where?: InputMaybe<mb_views_active_listings_rollup_bool_exp>;
};


export type Querymb_views_auctions_with_offerArgs = {
  distinct_on?: InputMaybe<Array<mb_views_auctions_with_offer_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_auctions_with_offer_order_by>>;
  where?: InputMaybe<mb_views_auctions_with_offer_bool_exp>;
};


export type Querymb_views_auctions_with_offer_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_auctions_with_offer_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_auctions_with_offer_order_by>>;
  where?: InputMaybe<mb_views_auctions_with_offer_bool_exp>;
};


export type Querymb_views_nft_activitiesArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_activities_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_activities_order_by>>;
  where?: InputMaybe<mb_views_nft_activities_bool_exp>;
};


export type Querymb_views_nft_activities_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_activities_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_activities_order_by>>;
  where?: InputMaybe<mb_views_nft_activities_bool_exp>;
};


export type Querymb_views_nft_metadataArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_metadata_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_metadata_order_by>>;
  where?: InputMaybe<mb_views_nft_metadata_bool_exp>;
};


export type Querymb_views_nft_metadata_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_metadata_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_metadata_order_by>>;
  where?: InputMaybe<mb_views_nft_metadata_bool_exp>;
};


export type Querymb_views_nft_metadata_unburnedArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_metadata_unburned_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_metadata_unburned_order_by>>;
  where?: InputMaybe<mb_views_nft_metadata_unburned_bool_exp>;
};


export type Querymb_views_nft_metadata_unburned_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_metadata_unburned_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_metadata_unburned_order_by>>;
  where?: InputMaybe<mb_views_nft_metadata_unburned_bool_exp>;
};


export type Querymb_views_nft_owned_tokensArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_owned_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_owned_tokens_order_by>>;
  where?: InputMaybe<mb_views_nft_owned_tokens_bool_exp>;
};


export type Querymb_views_nft_owned_tokens_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_owned_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_owned_tokens_order_by>>;
  where?: InputMaybe<mb_views_nft_owned_tokens_bool_exp>;
};


export type Querymb_views_nft_tokensArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_bool_exp>;
};


export type Querymb_views_nft_tokens_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_bool_exp>;
};


export type Querymb_views_nft_tokens_with_listingArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_with_listing_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_with_listing_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_with_listing_bool_exp>;
};


export type Querymb_views_nft_tokens_with_listing_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_with_listing_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_with_listing_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_with_listing_bool_exp>;
};


export type Querymb_views_nft_tokens_with_media_typeArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_with_media_type_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_with_media_type_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_with_media_type_bool_exp>;
};


export type Querymb_views_nft_tokens_with_media_type_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_with_media_type_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_with_media_type_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_with_media_type_bool_exp>;
};


export type Querymb_views_top_storesArgs = {
  distinct_on?: InputMaybe<Array<mb_views_top_stores_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_top_stores_order_by>>;
  where?: InputMaybe<mb_views_top_stores_bool_exp>;
};


export type Querymb_views_top_stores_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_top_stores_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_top_stores_order_by>>;
  where?: InputMaybe<mb_views_top_stores_bool_exp>;
};


export type Querynft_activitiesArgs = {
  distinct_on?: InputMaybe<Array<nft_activities_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_activities_order_by>>;
  where?: InputMaybe<nft_activities_bool_exp>;
};


export type Querynft_activities_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_activities_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_activities_order_by>>;
  where?: InputMaybe<nft_activities_bool_exp>;
};


export type Querynft_activities_by_pkArgs = {
  kind: Scalars['String'];
  nft_contract_id: Scalars['String'];
  receipt_id: Scalars['String'];
  token_id: Scalars['String'];
};


export type Querynft_attributesArgs = {
  distinct_on?: InputMaybe<Array<nft_attributes_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_attributes_order_by>>;
  where?: InputMaybe<nft_attributes_bool_exp>;
};


export type Querynft_attributes_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_attributes_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_attributes_order_by>>;
  where?: InputMaybe<nft_attributes_bool_exp>;
};


export type Querynft_attributes_by_pkArgs = {
  attribute_type: Scalars['String'];
  nft_contract_id: Scalars['String'];
  nft_metadata_id: Scalars['String'];
};


export type Querynft_contractsArgs = {
  distinct_on?: InputMaybe<Array<nft_contracts_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_contracts_order_by>>;
  where?: InputMaybe<nft_contracts_bool_exp>;
};


export type Querynft_contracts_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_contracts_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_contracts_order_by>>;
  where?: InputMaybe<nft_contracts_bool_exp>;
};


export type Querynft_contracts_by_pkArgs = {
  id: Scalars['String'];
};


export type Querynft_earningsArgs = {
  distinct_on?: InputMaybe<Array<nft_earnings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_earnings_order_by>>;
  where?: InputMaybe<nft_earnings_bool_exp>;
};


export type Querynft_earnings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_earnings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_earnings_order_by>>;
  where?: InputMaybe<nft_earnings_bool_exp>;
};


export type Querynft_earnings_by_pkArgs = {
  approval_id: Scalars['numeric'];
  is_mintbase_cut: Scalars['Boolean'];
  is_referral: Scalars['Boolean'];
  market_id: Scalars['String'];
  nft_contract_id: Scalars['String'];
  receiver_id: Scalars['String'];
  token_id: Scalars['String'];
};


export type Querynft_listingsArgs = {
  distinct_on?: InputMaybe<Array<nft_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_listings_order_by>>;
  where?: InputMaybe<nft_listings_bool_exp>;
};


export type Querynft_listings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_listings_order_by>>;
  where?: InputMaybe<nft_listings_bool_exp>;
};


export type Querynft_listings_by_pkArgs = {
  approval_id: Scalars['numeric'];
  market_id: Scalars['String'];
  nft_contract_id: Scalars['String'];
  token_id: Scalars['String'];
};


export type Querynft_metadataArgs = {
  distinct_on?: InputMaybe<Array<nft_metadata_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_metadata_order_by>>;
  where?: InputMaybe<nft_metadata_bool_exp>;
};


export type Querynft_metadata_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_metadata_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_metadata_order_by>>;
  where?: InputMaybe<nft_metadata_bool_exp>;
};


export type Querynft_metadata_by_pkArgs = {
  id: Scalars['String'];
};


export type Querynft_offersArgs = {
  distinct_on?: InputMaybe<Array<nft_offers_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_offers_order_by>>;
  where?: InputMaybe<nft_offers_bool_exp>;
};


export type Querynft_offers_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_offers_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_offers_order_by>>;
  where?: InputMaybe<nft_offers_bool_exp>;
};


export type Querynft_offers_by_pkArgs = {
  approval_id: Scalars['numeric'];
  market_id: Scalars['String'];
  nft_contract_id: Scalars['String'];
  offer_id: Scalars['bigint'];
  token_id: Scalars['String'];
};


export type Querynft_tokensArgs = {
  distinct_on?: InputMaybe<Array<nft_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_tokens_order_by>>;
  where?: InputMaybe<nft_tokens_bool_exp>;
};


export type Querynft_tokens_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_tokens_order_by>>;
  where?: InputMaybe<nft_tokens_bool_exp>;
};


export type Querynft_tokens_by_pkArgs = {
  nft_contract_id: Scalars['String'];
  token_id: Scalars['String'];
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  createThing?: Maybe<CreateThingPayload>;
  createMedia?: Maybe<CreateMediaPayload>;
  proposeAttribute?: Maybe<ProposeAttributePayload>;
  createAttribute?: Maybe<CreateAttributePayload>;
  proposeOption?: Maybe<ProposeOptionPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationcreateThingArgs = {
  input: CreateThingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationcreateMediaArgs = {
  input: CreateMediaInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationproposeAttributeArgs = {
  input: ProposeAttributeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationcreateAttributeArgs = {
  input: CreateAttributeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationproposeOptionArgs = {
  input: ProposeOptionInput;
};

/** Methods to use when ordering `Attribute`. */
export type AttributesOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'NAME_ASC'
  | 'NAME_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC';

/**
 * A condition to be used against `Attribute` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type AttributeCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Attribute` values. */
export type AttributesConnection = {
  /** A list of `Attribute` objects. */
  nodes: Array<Attribute>;
  /** A list of edges which contains the `Attribute` and cursor to aid in pagination. */
  edges: Array<AttributesEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Attribute` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Attribute = {
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  isApproved?: Maybe<Scalars['Boolean']>;
  /** Reads and enables pagination through a set of `Relationship`. */
  relationships: RelationshipsConnection;
  /** Reads and enables pagination through a set of `Characteristic`. */
  characteristics: CharacteristicsConnection;
};


export type AttributerelationshipsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<RelationshipsOrderBy>>;
  condition?: InputMaybe<RelationshipCondition>;
};


export type AttributecharacteristicsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<CharacteristicsOrderBy>>;
  condition?: InputMaybe<CharacteristicCondition>;
};

/** Methods to use when ordering `Relationship`. */
export type RelationshipsOrderBy =
  | 'NATURAL'
  | 'ATTRIBUTE_ID_ASC'
  | 'ATTRIBUTE_ID_DESC'
  | 'OPTION_ID_ASC'
  | 'OPTION_ID_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC';

/**
 * A condition to be used against `Relationship` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type RelationshipCondition = {
  /** Checks for equality with the object’s `attributeId` field. */
  attributeId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `optionId` field. */
  optionId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `Relationship` values. */
export type RelationshipsConnection = {
  /** A list of `Relationship` objects. */
  nodes: Array<Relationship>;
  /** A list of edges which contains the `Relationship` and cursor to aid in pagination. */
  edges: Array<RelationshipsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Relationship` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Relationship = {
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  attributeId: Scalars['Int'];
  optionId: Scalars['Int'];
  /** Reads a single `Attribute` that is related to this `Relationship`. */
  attribute?: Maybe<Attribute>;
  /** Reads a single `Option` that is related to this `Relationship`. */
  option?: Maybe<Option>;
};

export type Option = {
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  id: Scalars['Int'];
  value: Scalars['String'];
  isApproved?: Maybe<Scalars['Boolean']>;
  /** Reads and enables pagination through a set of `Relationship`. */
  relationships: RelationshipsConnection;
  /** Reads and enables pagination through a set of `Characteristic`. */
  characteristics: CharacteristicsConnection;
};


export type OptionrelationshipsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<RelationshipsOrderBy>>;
  condition?: InputMaybe<RelationshipCondition>;
};


export type OptioncharacteristicsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<CharacteristicsOrderBy>>;
  condition?: InputMaybe<CharacteristicCondition>;
};

/** Methods to use when ordering `Characteristic`. */
export type CharacteristicsOrderBy =
  | 'NATURAL'
  | 'THING_ID_ASC'
  | 'THING_ID_DESC'
  | 'ATTRIBUTE_ID_ASC'
  | 'ATTRIBUTE_ID_DESC'
  | 'OPTION_ID_ASC'
  | 'OPTION_ID_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC';

/**
 * A condition to be used against `Characteristic` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CharacteristicCondition = {
  /** Checks for equality with the object’s `thingId` field. */
  thingId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `attributeId` field. */
  attributeId?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `optionId` field. */
  optionId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `Characteristic` values. */
export type CharacteristicsConnection = {
  /** A list of `Characteristic` objects. */
  nodes: Array<Characteristic>;
  /** A list of edges which contains the `Characteristic` and cursor to aid in pagination. */
  edges: Array<CharacteristicsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Characteristic` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Characteristic = {
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  thingId: Scalars['String'];
  attributeId: Scalars['Int'];
  optionId: Scalars['Int'];
  /** Reads a single `Thing` that is related to this `Characteristic`. */
  thing?: Maybe<Thing>;
  /** Reads a single `Attribute` that is related to this `Characteristic`. */
  attribute?: Maybe<Attribute>;
  /** Reads a single `Option` that is related to this `Characteristic`. */
  option?: Maybe<Option>;
};

/** columns and relationships of "nft_metadata" */
export type Thing = {
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  id: Scalars['String'];
  ownerId: Scalars['String'];
  metadata?: Maybe<Scalars['JSON']>;
  privacyType?: Maybe<PrivacyType>;
  /** Reads and enables pagination through a set of `Tag`. */
  tags: TagsConnection;
  /** Reads and enables pagination through a set of `Characteristic`. */
  characteristics: CharacteristicsConnection;
  base_uri?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  /** An object relationship */
  nft_contract?: Maybe<nft_contracts>;
  nft_contract_id: Scalars['String'];
  /** An object relationship */
  nft_contracts?: Maybe<nft_contracts>;
  reference?: Maybe<Scalars['String']>;
  reference_blob?: Maybe<Scalars['jsonb']>;
  title?: Maybe<Scalars['String']>;
};


/** columns and relationships of "nft_metadata" */
export type ThingtagsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
  condition?: InputMaybe<TagCondition>;
};


/** columns and relationships of "nft_metadata" */
export type ThingcharacteristicsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<CharacteristicsOrderBy>>;
  condition?: InputMaybe<CharacteristicCondition>;
};


/** columns and relationships of "nft_metadata" */
export type Thingreference_blobArgs = {
  path?: InputMaybe<Scalars['String']>;
};

export type PrivacyType =
  | 'PRIVATE'
  | 'FRIENDS'
  | 'PUBLIC';

/** Methods to use when ordering `Tag`. */
export type TagsOrderBy =
  | 'NATURAL'
  | 'THING_ID_ASC'
  | 'THING_ID_DESC'
  | 'MEDIA_ID_ASC'
  | 'MEDIA_ID_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC';

/** A condition to be used against `Tag` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TagCondition = {
  /** Checks for equality with the object’s `thingId` field. */
  thingId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `mediaId` field. */
  mediaId?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `Tag` values. */
export type TagsConnection = {
  /** A list of `Tag` objects. */
  nodes: Array<Tag>;
  /** A list of edges which contains the `Tag` and cursor to aid in pagination. */
  edges: Array<TagsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Tag` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type Tag = {
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  thingId: Scalars['String'];
  mediaId: Scalars['Int'];
  /** Reads a single `Thing` that is related to this `Tag`. */
  thing?: Maybe<Thing>;
  /** Reads a single `Media` that is related to this `Tag`. */
  media?: Maybe<Media>;
};

export type Media = {
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  id: Scalars['Int'];
  mediaUrl: Scalars['String'];
  metadata?: Maybe<Scalars['JSON']>;
  /** Reads and enables pagination through a set of `Tag`. */
  tags: TagsConnection;
};


export type MediatagsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
  condition?: InputMaybe<TagCondition>;
};

/** A `Tag` edge in the connection. */
export type TagsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Tag` at the end of the edge. */
  node: Tag;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
};

/** A `Characteristic` edge in the connection. */
export type CharacteristicsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Characteristic` at the end of the edge. */
  node: Characteristic;
};

/** A `Relationship` edge in the connection. */
export type RelationshipsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Relationship` at the end of the edge. */
  node: Relationship;
};

/** A `Attribute` edge in the connection. */
export type AttributesEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Attribute` at the end of the edge. */
  node: Attribute;
};

/** Methods to use when ordering `Media`. */
export type MediaOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC';

/** A condition to be used against `Media` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type MediaCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `Media` values. */
export type MediaConnection = {
  /** A list of `Media` objects. */
  nodes: Array<Media>;
  /** A list of edges which contains the `Media` and cursor to aid in pagination. */
  edges: Array<MediaEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Media` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Media` edge in the connection. */
export type MediaEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Media` at the end of the edge. */
  node: Media;
};

/** Methods to use when ordering `Option`. */
export type OptionsOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC';

/** A condition to be used against `Option` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type OptionCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `Option` values. */
export type OptionsConnection = {
  /** A list of `Option` objects. */
  nodes: Array<Option>;
  /** A list of edges which contains the `Option` and cursor to aid in pagination. */
  edges: Array<OptionsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Option` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Option` edge in the connection. */
export type OptionsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Option` at the end of the edge. */
  node: Option;
};

/** Methods to use when ordering `Thing`. */
export type ThingsOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'OWNER_ID_ASC'
  | 'OWNER_ID_DESC'
  | 'PRIVACY_TYPE_ASC'
  | 'PRIVACY_TYPE_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC';

/** A condition to be used against `Thing` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ThingCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `ownerId` field. */
  ownerId?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `privacyType` field. */
  privacyType?: InputMaybe<PrivacyType>;
};

/** A connection to a list of `Thing` values. */
export type ThingsConnection = {
  /** A list of `Thing` objects. */
  nodes: Array<Thing>;
  /** A list of edges which contains the `Thing` and cursor to aid in pagination. */
  edges: Array<ThingsEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Thing` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Thing` edge in the connection. */
export type ThingsEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Thing` at the end of the edge. */
  node: Thing;
};

/** Methods to use when ordering `User`. */
export type UsersOrderBy =
  | 'NATURAL'
  | 'ID_ASC'
  | 'ID_DESC'
  | 'USERNAME_ASC'
  | 'USERNAME_DESC'
  | 'WALLET_ASC'
  | 'WALLET_DESC'
  | 'PRIMARY_KEY_ASC'
  | 'PRIMARY_KEY_DESC';

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `username` field. */
  username?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `wallet` field. */
  wallet?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int'];
};

export type User = {
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  id: Scalars['String'];
  username?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  favoriteColor?: Maybe<Scalars['String']>;
  wallet?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['JSON']>;
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `User` at the end of the edge. */
  node: User;
};

export type CreateThingInput = {
  thingId: Scalars['String'];
  characteristics: Array<NewCharacteristicInput>;
  ownerId: Scalars['String'];
};

export type NewCharacteristicInput = {
  attributeId: Scalars['Int'];
  optionId: Scalars['Int'];
};

export type CreateThingPayload = {
  thing?: Maybe<Thing>;
  query?: Maybe<Query>;
};

export type CreateMediaInput = {
  url: Scalars['String'];
  thingId?: InputMaybe<Scalars['String']>;
};

export type CreateMediaPayload = {
  media?: Maybe<Media>;
  query?: Maybe<Query>;
};

export type ProposeAttributeInput = {
  name: Scalars['String'];
};

export type ProposeAttributePayload = {
  attribute?: Maybe<Attribute>;
  query?: Maybe<Query>;
};

export type CreateAttributeInput = {
  name: Scalars['String'];
  options: Array<CreateOptionInput>;
};

export type CreateOptionInput = {
  value: Scalars['String'];
};

export type CreateAttributePayload = {
  attribute?: Maybe<Attribute>;
  query?: Maybe<Query>;
};

export type ProposeOptionInput = {
  value: Scalars['String'];
  attributeId: Scalars['Int'];
};

export type ProposeOptionPayload = {
  option?: Maybe<Option>;
  query?: Maybe<Query>;
};

export type Subscription = {
  /** fetch data from the table: "blocks" */
  blocks: Array<blocks>;
  /** fetch aggregated fields from the table: "blocks" */
  blocks_aggregate: blocks_aggregate;
  /** fetch data from the table: "blocks" using primary key columns */
  blocks_by_pk?: Maybe<blocks>;
  /** fetch data from the table in a streaming manner: "blocks" */
  blocks_stream: Array<blocks>;
  /** fetch data from the table: "mb_store_minters" */
  mb_store_minters: Array<mb_store_minters>;
  /** fetch aggregated fields from the table: "mb_store_minters" */
  mb_store_minters_aggregate: mb_store_minters_aggregate;
  /** fetch data from the table: "mb_store_minters" using primary key columns */
  mb_store_minters_by_pk?: Maybe<mb_store_minters>;
  /** fetch data from the table in a streaming manner: "mb_store_minters" */
  mb_store_minters_stream: Array<mb_store_minters>;
  /** fetch data from the table: "mb_views.active_listings" */
  mb_views_active_listings: Array<mb_views_active_listings>;
  /** fetch aggregated fields from the table: "mb_views.active_listings" */
  mb_views_active_listings_aggregate: mb_views_active_listings_aggregate;
  /** fetch data from the table: "mb_views.active_listings_rollup" */
  mb_views_active_listings_rollup: Array<mb_views_active_listings_rollup>;
  /** fetch aggregated fields from the table: "mb_views.active_listings_rollup" */
  mb_views_active_listings_rollup_aggregate: mb_views_active_listings_rollup_aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.active_listings_rollup" */
  mb_views_active_listings_rollup_stream: Array<mb_views_active_listings_rollup>;
  /** fetch data from the table in a streaming manner: "mb_views.active_listings" */
  mb_views_active_listings_stream: Array<mb_views_active_listings>;
  /** fetch data from the table: "mb_views.auctions_with_offer" */
  mb_views_auctions_with_offer: Array<mb_views_auctions_with_offer>;
  /** fetch aggregated fields from the table: "mb_views.auctions_with_offer" */
  mb_views_auctions_with_offer_aggregate: mb_views_auctions_with_offer_aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.auctions_with_offer" */
  mb_views_auctions_with_offer_stream: Array<mb_views_auctions_with_offer>;
  /** fetch data from the table: "mb_views.nft_activities" */
  mb_views_nft_activities: Array<mb_views_nft_activities>;
  /** fetch aggregated fields from the table: "mb_views.nft_activities" */
  mb_views_nft_activities_aggregate: mb_views_nft_activities_aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.nft_activities" */
  mb_views_nft_activities_stream: Array<mb_views_nft_activities>;
  /** fetch data from the table: "mb_views.nft_metadata" */
  mb_views_nft_metadata: Array<mb_views_nft_metadata>;
  /** fetch aggregated fields from the table: "mb_views.nft_metadata" */
  mb_views_nft_metadata_aggregate: mb_views_nft_metadata_aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.nft_metadata" */
  mb_views_nft_metadata_stream: Array<mb_views_nft_metadata>;
  /** fetch data from the table: "mb_views.nft_metadata_unburned" */
  mb_views_nft_metadata_unburned: Array<mb_views_nft_metadata_unburned>;
  /** fetch aggregated fields from the table: "mb_views.nft_metadata_unburned" */
  mb_views_nft_metadata_unburned_aggregate: mb_views_nft_metadata_unburned_aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.nft_metadata_unburned" */
  mb_views_nft_metadata_unburned_stream: Array<mb_views_nft_metadata_unburned>;
  /** fetch data from the table: "mb_views.nft_owned_tokens" */
  mb_views_nft_owned_tokens: Array<mb_views_nft_owned_tokens>;
  /** fetch aggregated fields from the table: "mb_views.nft_owned_tokens" */
  mb_views_nft_owned_tokens_aggregate: mb_views_nft_owned_tokens_aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.nft_owned_tokens" */
  mb_views_nft_owned_tokens_stream: Array<mb_views_nft_owned_tokens>;
  /** fetch data from the table: "mb_views.nft_tokens" */
  mb_views_nft_tokens: Array<mb_views_nft_tokens>;
  /** fetch aggregated fields from the table: "mb_views.nft_tokens" */
  mb_views_nft_tokens_aggregate: mb_views_nft_tokens_aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.nft_tokens" */
  mb_views_nft_tokens_stream: Array<mb_views_nft_tokens>;
  /** fetch data from the table: "mb_views.nft_tokens_with_listing" */
  mb_views_nft_tokens_with_listing: Array<mb_views_nft_tokens_with_listing>;
  /** fetch aggregated fields from the table: "mb_views.nft_tokens_with_listing" */
  mb_views_nft_tokens_with_listing_aggregate: mb_views_nft_tokens_with_listing_aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.nft_tokens_with_listing" */
  mb_views_nft_tokens_with_listing_stream: Array<mb_views_nft_tokens_with_listing>;
  /** fetch data from the table: "mb_views.nft_tokens_with_media_type" */
  mb_views_nft_tokens_with_media_type: Array<mb_views_nft_tokens_with_media_type>;
  /** fetch aggregated fields from the table: "mb_views.nft_tokens_with_media_type" */
  mb_views_nft_tokens_with_media_type_aggregate: mb_views_nft_tokens_with_media_type_aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.nft_tokens_with_media_type" */
  mb_views_nft_tokens_with_media_type_stream: Array<mb_views_nft_tokens_with_media_type>;
  /** fetch data from the table: "mb_views.top_stores" */
  mb_views_top_stores: Array<mb_views_top_stores>;
  /** fetch aggregated fields from the table: "mb_views.top_stores" */
  mb_views_top_stores_aggregate: mb_views_top_stores_aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.top_stores" */
  mb_views_top_stores_stream: Array<mb_views_top_stores>;
  /** fetch data from the table: "nft_activities" */
  nft_activities: Array<nft_activities>;
  /** fetch aggregated fields from the table: "nft_activities" */
  nft_activities_aggregate: nft_activities_aggregate;
  /** fetch data from the table: "nft_activities" using primary key columns */
  nft_activities_by_pk?: Maybe<nft_activities>;
  /** fetch data from the table in a streaming manner: "nft_activities" */
  nft_activities_stream: Array<nft_activities>;
  /** fetch data from the table: "nft_attributes" */
  nft_attributes: Array<nft_attributes>;
  /** fetch aggregated fields from the table: "nft_attributes" */
  nft_attributes_aggregate: nft_attributes_aggregate;
  /** fetch data from the table: "nft_attributes" using primary key columns */
  nft_attributes_by_pk?: Maybe<nft_attributes>;
  /** fetch data from the table in a streaming manner: "nft_attributes" */
  nft_attributes_stream: Array<nft_attributes>;
  /** fetch data from the table: "nft_contracts" */
  nft_contracts: Array<nft_contracts>;
  /** fetch aggregated fields from the table: "nft_contracts" */
  nft_contracts_aggregate: nft_contracts_aggregate;
  /** fetch data from the table: "nft_contracts" using primary key columns */
  nft_contracts_by_pk?: Maybe<nft_contracts>;
  /** fetch data from the table in a streaming manner: "nft_contracts" */
  nft_contracts_stream: Array<nft_contracts>;
  /** fetch data from the table: "nft_earnings" */
  nft_earnings: Array<nft_earnings>;
  /** fetch aggregated fields from the table: "nft_earnings" */
  nft_earnings_aggregate: nft_earnings_aggregate;
  /** fetch data from the table: "nft_earnings" using primary key columns */
  nft_earnings_by_pk?: Maybe<nft_earnings>;
  /** fetch data from the table in a streaming manner: "nft_earnings" */
  nft_earnings_stream: Array<nft_earnings>;
  /** An array relationship */
  nft_listings: Array<nft_listings>;
  /** An aggregate relationship */
  nft_listings_aggregate: nft_listings_aggregate;
  /** fetch data from the table: "nft_listings" using primary key columns */
  nft_listings_by_pk?: Maybe<nft_listings>;
  /** fetch data from the table in a streaming manner: "nft_listings" */
  nft_listings_stream: Array<nft_listings>;
  /** fetch data from the table: "nft_metadata" */
  nft_metadata: Array<Thing>;
  /** fetch aggregated fields from the table: "nft_metadata" */
  nft_metadata_aggregate: nft_metadata_aggregate;
  /** fetch data from the table: "nft_metadata" using primary key columns */
  nft_metadata_by_pk?: Maybe<Thing>;
  /** fetch data from the table in a streaming manner: "nft_metadata" */
  nft_metadata_stream: Array<Thing>;
  /** fetch data from the table: "nft_offers" */
  nft_offers: Array<nft_offers>;
  /** fetch aggregated fields from the table: "nft_offers" */
  nft_offers_aggregate: nft_offers_aggregate;
  /** fetch data from the table: "nft_offers" using primary key columns */
  nft_offers_by_pk?: Maybe<nft_offers>;
  /** fetch data from the table in a streaming manner: "nft_offers" */
  nft_offers_stream: Array<nft_offers>;
  /** fetch data from the table: "nft_tokens" */
  nft_tokens: Array<nft_tokens>;
  /** fetch aggregated fields from the table: "nft_tokens" */
  nft_tokens_aggregate: nft_tokens_aggregate;
  /** fetch data from the table: "nft_tokens" using primary key columns */
  nft_tokens_by_pk?: Maybe<nft_tokens>;
  /** fetch data from the table in a streaming manner: "nft_tokens" */
  nft_tokens_stream: Array<nft_tokens>;
};


export type SubscriptionblocksArgs = {
  distinct_on?: InputMaybe<Array<blocks_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<blocks_order_by>>;
  where?: InputMaybe<blocks_bool_exp>;
};


export type Subscriptionblocks_aggregateArgs = {
  distinct_on?: InputMaybe<Array<blocks_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<blocks_order_by>>;
  where?: InputMaybe<blocks_bool_exp>;
};


export type Subscriptionblocks_by_pkArgs = {
  synced_height: Scalars['bigint'];
};


export type Subscriptionblocks_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<blocks_stream_cursor_input>>;
  where?: InputMaybe<blocks_bool_exp>;
};


export type Subscriptionmb_store_mintersArgs = {
  distinct_on?: InputMaybe<Array<mb_store_minters_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_store_minters_order_by>>;
  where?: InputMaybe<mb_store_minters_bool_exp>;
};


export type Subscriptionmb_store_minters_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_store_minters_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_store_minters_order_by>>;
  where?: InputMaybe<mb_store_minters_bool_exp>;
};


export type Subscriptionmb_store_minters_by_pkArgs = {
  minter_id: Scalars['String'];
  nft_contract_id: Scalars['String'];
};


export type Subscriptionmb_store_minters_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_store_minters_stream_cursor_input>>;
  where?: InputMaybe<mb_store_minters_bool_exp>;
};


export type Subscriptionmb_views_active_listingsArgs = {
  distinct_on?: InputMaybe<Array<mb_views_active_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_active_listings_order_by>>;
  where?: InputMaybe<mb_views_active_listings_bool_exp>;
};


export type Subscriptionmb_views_active_listings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_active_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_active_listings_order_by>>;
  where?: InputMaybe<mb_views_active_listings_bool_exp>;
};


export type Subscriptionmb_views_active_listings_rollupArgs = {
  distinct_on?: InputMaybe<Array<mb_views_active_listings_rollup_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_active_listings_rollup_order_by>>;
  where?: InputMaybe<mb_views_active_listings_rollup_bool_exp>;
};


export type Subscriptionmb_views_active_listings_rollup_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_active_listings_rollup_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_active_listings_rollup_order_by>>;
  where?: InputMaybe<mb_views_active_listings_rollup_bool_exp>;
};


export type Subscriptionmb_views_active_listings_rollup_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_active_listings_rollup_stream_cursor_input>>;
  where?: InputMaybe<mb_views_active_listings_rollup_bool_exp>;
};


export type Subscriptionmb_views_active_listings_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_active_listings_stream_cursor_input>>;
  where?: InputMaybe<mb_views_active_listings_bool_exp>;
};


export type Subscriptionmb_views_auctions_with_offerArgs = {
  distinct_on?: InputMaybe<Array<mb_views_auctions_with_offer_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_auctions_with_offer_order_by>>;
  where?: InputMaybe<mb_views_auctions_with_offer_bool_exp>;
};


export type Subscriptionmb_views_auctions_with_offer_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_auctions_with_offer_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_auctions_with_offer_order_by>>;
  where?: InputMaybe<mb_views_auctions_with_offer_bool_exp>;
};


export type Subscriptionmb_views_auctions_with_offer_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_auctions_with_offer_stream_cursor_input>>;
  where?: InputMaybe<mb_views_auctions_with_offer_bool_exp>;
};


export type Subscriptionmb_views_nft_activitiesArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_activities_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_activities_order_by>>;
  where?: InputMaybe<mb_views_nft_activities_bool_exp>;
};


export type Subscriptionmb_views_nft_activities_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_activities_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_activities_order_by>>;
  where?: InputMaybe<mb_views_nft_activities_bool_exp>;
};


export type Subscriptionmb_views_nft_activities_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_nft_activities_stream_cursor_input>>;
  where?: InputMaybe<mb_views_nft_activities_bool_exp>;
};


export type Subscriptionmb_views_nft_metadataArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_metadata_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_metadata_order_by>>;
  where?: InputMaybe<mb_views_nft_metadata_bool_exp>;
};


export type Subscriptionmb_views_nft_metadata_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_metadata_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_metadata_order_by>>;
  where?: InputMaybe<mb_views_nft_metadata_bool_exp>;
};


export type Subscriptionmb_views_nft_metadata_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_nft_metadata_stream_cursor_input>>;
  where?: InputMaybe<mb_views_nft_metadata_bool_exp>;
};


export type Subscriptionmb_views_nft_metadata_unburnedArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_metadata_unburned_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_metadata_unburned_order_by>>;
  where?: InputMaybe<mb_views_nft_metadata_unburned_bool_exp>;
};


export type Subscriptionmb_views_nft_metadata_unburned_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_metadata_unburned_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_metadata_unburned_order_by>>;
  where?: InputMaybe<mb_views_nft_metadata_unburned_bool_exp>;
};


export type Subscriptionmb_views_nft_metadata_unburned_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_nft_metadata_unburned_stream_cursor_input>>;
  where?: InputMaybe<mb_views_nft_metadata_unburned_bool_exp>;
};


export type Subscriptionmb_views_nft_owned_tokensArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_owned_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_owned_tokens_order_by>>;
  where?: InputMaybe<mb_views_nft_owned_tokens_bool_exp>;
};


export type Subscriptionmb_views_nft_owned_tokens_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_owned_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_owned_tokens_order_by>>;
  where?: InputMaybe<mb_views_nft_owned_tokens_bool_exp>;
};


export type Subscriptionmb_views_nft_owned_tokens_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_nft_owned_tokens_stream_cursor_input>>;
  where?: InputMaybe<mb_views_nft_owned_tokens_bool_exp>;
};


export type Subscriptionmb_views_nft_tokensArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_bool_exp>;
};


export type Subscriptionmb_views_nft_tokens_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_bool_exp>;
};


export type Subscriptionmb_views_nft_tokens_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_nft_tokens_stream_cursor_input>>;
  where?: InputMaybe<mb_views_nft_tokens_bool_exp>;
};


export type Subscriptionmb_views_nft_tokens_with_listingArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_with_listing_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_with_listing_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_with_listing_bool_exp>;
};


export type Subscriptionmb_views_nft_tokens_with_listing_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_with_listing_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_with_listing_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_with_listing_bool_exp>;
};


export type Subscriptionmb_views_nft_tokens_with_listing_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_nft_tokens_with_listing_stream_cursor_input>>;
  where?: InputMaybe<mb_views_nft_tokens_with_listing_bool_exp>;
};


export type Subscriptionmb_views_nft_tokens_with_media_typeArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_with_media_type_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_with_media_type_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_with_media_type_bool_exp>;
};


export type Subscriptionmb_views_nft_tokens_with_media_type_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_with_media_type_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_with_media_type_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_with_media_type_bool_exp>;
};


export type Subscriptionmb_views_nft_tokens_with_media_type_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_nft_tokens_with_media_type_stream_cursor_input>>;
  where?: InputMaybe<mb_views_nft_tokens_with_media_type_bool_exp>;
};


export type Subscriptionmb_views_top_storesArgs = {
  distinct_on?: InputMaybe<Array<mb_views_top_stores_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_top_stores_order_by>>;
  where?: InputMaybe<mb_views_top_stores_bool_exp>;
};


export type Subscriptionmb_views_top_stores_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_top_stores_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_top_stores_order_by>>;
  where?: InputMaybe<mb_views_top_stores_bool_exp>;
};


export type Subscriptionmb_views_top_stores_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_top_stores_stream_cursor_input>>;
  where?: InputMaybe<mb_views_top_stores_bool_exp>;
};


export type Subscriptionnft_activitiesArgs = {
  distinct_on?: InputMaybe<Array<nft_activities_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_activities_order_by>>;
  where?: InputMaybe<nft_activities_bool_exp>;
};


export type Subscriptionnft_activities_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_activities_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_activities_order_by>>;
  where?: InputMaybe<nft_activities_bool_exp>;
};


export type Subscriptionnft_activities_by_pkArgs = {
  kind: Scalars['String'];
  nft_contract_id: Scalars['String'];
  receipt_id: Scalars['String'];
  token_id: Scalars['String'];
};


export type Subscriptionnft_activities_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<nft_activities_stream_cursor_input>>;
  where?: InputMaybe<nft_activities_bool_exp>;
};


export type Subscriptionnft_attributesArgs = {
  distinct_on?: InputMaybe<Array<nft_attributes_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_attributes_order_by>>;
  where?: InputMaybe<nft_attributes_bool_exp>;
};


export type Subscriptionnft_attributes_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_attributes_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_attributes_order_by>>;
  where?: InputMaybe<nft_attributes_bool_exp>;
};


export type Subscriptionnft_attributes_by_pkArgs = {
  attribute_type: Scalars['String'];
  nft_contract_id: Scalars['String'];
  nft_metadata_id: Scalars['String'];
};


export type Subscriptionnft_attributes_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<nft_attributes_stream_cursor_input>>;
  where?: InputMaybe<nft_attributes_bool_exp>;
};


export type Subscriptionnft_contractsArgs = {
  distinct_on?: InputMaybe<Array<nft_contracts_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_contracts_order_by>>;
  where?: InputMaybe<nft_contracts_bool_exp>;
};


export type Subscriptionnft_contracts_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_contracts_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_contracts_order_by>>;
  where?: InputMaybe<nft_contracts_bool_exp>;
};


export type Subscriptionnft_contracts_by_pkArgs = {
  id: Scalars['String'];
};


export type Subscriptionnft_contracts_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<nft_contracts_stream_cursor_input>>;
  where?: InputMaybe<nft_contracts_bool_exp>;
};


export type Subscriptionnft_earningsArgs = {
  distinct_on?: InputMaybe<Array<nft_earnings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_earnings_order_by>>;
  where?: InputMaybe<nft_earnings_bool_exp>;
};


export type Subscriptionnft_earnings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_earnings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_earnings_order_by>>;
  where?: InputMaybe<nft_earnings_bool_exp>;
};


export type Subscriptionnft_earnings_by_pkArgs = {
  approval_id: Scalars['numeric'];
  is_mintbase_cut: Scalars['Boolean'];
  is_referral: Scalars['Boolean'];
  market_id: Scalars['String'];
  nft_contract_id: Scalars['String'];
  receiver_id: Scalars['String'];
  token_id: Scalars['String'];
};


export type Subscriptionnft_earnings_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<nft_earnings_stream_cursor_input>>;
  where?: InputMaybe<nft_earnings_bool_exp>;
};


export type Subscriptionnft_listingsArgs = {
  distinct_on?: InputMaybe<Array<nft_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_listings_order_by>>;
  where?: InputMaybe<nft_listings_bool_exp>;
};


export type Subscriptionnft_listings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_listings_order_by>>;
  where?: InputMaybe<nft_listings_bool_exp>;
};


export type Subscriptionnft_listings_by_pkArgs = {
  approval_id: Scalars['numeric'];
  market_id: Scalars['String'];
  nft_contract_id: Scalars['String'];
  token_id: Scalars['String'];
};


export type Subscriptionnft_listings_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<nft_listings_stream_cursor_input>>;
  where?: InputMaybe<nft_listings_bool_exp>;
};


export type Subscriptionnft_metadataArgs = {
  distinct_on?: InputMaybe<Array<nft_metadata_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_metadata_order_by>>;
  where?: InputMaybe<nft_metadata_bool_exp>;
};


export type Subscriptionnft_metadata_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_metadata_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_metadata_order_by>>;
  where?: InputMaybe<nft_metadata_bool_exp>;
};


export type Subscriptionnft_metadata_by_pkArgs = {
  id: Scalars['String'];
};


export type Subscriptionnft_metadata_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<nft_metadata_stream_cursor_input>>;
  where?: InputMaybe<nft_metadata_bool_exp>;
};


export type Subscriptionnft_offersArgs = {
  distinct_on?: InputMaybe<Array<nft_offers_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_offers_order_by>>;
  where?: InputMaybe<nft_offers_bool_exp>;
};


export type Subscriptionnft_offers_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_offers_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_offers_order_by>>;
  where?: InputMaybe<nft_offers_bool_exp>;
};


export type Subscriptionnft_offers_by_pkArgs = {
  approval_id: Scalars['numeric'];
  market_id: Scalars['String'];
  nft_contract_id: Scalars['String'];
  offer_id: Scalars['bigint'];
  token_id: Scalars['String'];
};


export type Subscriptionnft_offers_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<nft_offers_stream_cursor_input>>;
  where?: InputMaybe<nft_offers_bool_exp>;
};


export type Subscriptionnft_tokensArgs = {
  distinct_on?: InputMaybe<Array<nft_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_tokens_order_by>>;
  where?: InputMaybe<nft_tokens_bool_exp>;
};


export type Subscriptionnft_tokens_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_tokens_order_by>>;
  where?: InputMaybe<nft_tokens_bool_exp>;
};


export type Subscriptionnft_tokens_by_pkArgs = {
  nft_contract_id: Scalars['String'];
  token_id: Scalars['String'];
};


export type Subscriptionnft_tokens_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<nft_tokens_stream_cursor_input>>;
  where?: InputMaybe<nft_tokens_bool_exp>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_comparison_exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_comparison_exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_comparison_exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type bigint_comparison_exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "blocks" */
export type blocks = {
  synced_height: Scalars['bigint'];
};

/** aggregated selection of "blocks" */
export type blocks_aggregate = {
  aggregate?: Maybe<blocks_aggregate_fields>;
  nodes: Array<blocks>;
};

/** aggregate fields of "blocks" */
export type blocks_aggregate_fields = {
  avg?: Maybe<blocks_avg_fields>;
  count: Scalars['Int'];
  max?: Maybe<blocks_max_fields>;
  min?: Maybe<blocks_min_fields>;
  stddev?: Maybe<blocks_stddev_fields>;
  stddev_pop?: Maybe<blocks_stddev_pop_fields>;
  stddev_samp?: Maybe<blocks_stddev_samp_fields>;
  sum?: Maybe<blocks_sum_fields>;
  var_pop?: Maybe<blocks_var_pop_fields>;
  var_samp?: Maybe<blocks_var_samp_fields>;
  variance?: Maybe<blocks_variance_fields>;
};


/** aggregate fields of "blocks" */
export type blocks_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<blocks_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type blocks_avg_fields = {
  synced_height?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "blocks". All fields are combined with a logical 'AND'. */
export type blocks_bool_exp = {
  _and?: InputMaybe<Array<blocks_bool_exp>>;
  _not?: InputMaybe<blocks_bool_exp>;
  _or?: InputMaybe<Array<blocks_bool_exp>>;
  synced_height?: InputMaybe<bigint_comparison_exp>;
};

/** aggregate max on columns */
export type blocks_max_fields = {
  synced_height?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type blocks_min_fields = {
  synced_height?: Maybe<Scalars['bigint']>;
};

/** Ordering options when selecting data from "blocks". */
export type blocks_order_by = {
  synced_height?: InputMaybe<order_by>;
};

/** select columns of table "blocks" */
export type blocks_select_column =
  /** column name */
  | 'synced_height';

/** aggregate stddev on columns */
export type blocks_stddev_fields = {
  synced_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type blocks_stddev_pop_fields = {
  synced_height?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type blocks_stddev_samp_fields = {
  synced_height?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "blocks" */
export type blocks_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: blocks_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type blocks_stream_cursor_value_input = {
  synced_height?: InputMaybe<Scalars['bigint']>;
};

/** aggregate sum on columns */
export type blocks_sum_fields = {
  synced_height?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type blocks_var_pop_fields = {
  synced_height?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type blocks_var_samp_fields = {
  synced_height?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type blocks_variance_fields = {
  synced_height?: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export type cursor_ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

export type jsonb_cast_exp = {
  String?: InputMaybe<String_comparison_exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type jsonb_comparison_exp = {
  _cast?: InputMaybe<jsonb_cast_exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** columns and relationships of "mb_store_minters" */
export type mb_store_minters = {
  minter_id: Scalars['String'];
  /** An object relationship */
  nft_contract?: Maybe<nft_contracts>;
  nft_contract_id: Scalars['String'];
  /** An object relationship */
  nft_contracts?: Maybe<nft_contracts>;
};

/** aggregated selection of "mb_store_minters" */
export type mb_store_minters_aggregate = {
  aggregate?: Maybe<mb_store_minters_aggregate_fields>;
  nodes: Array<mb_store_minters>;
};

/** aggregate fields of "mb_store_minters" */
export type mb_store_minters_aggregate_fields = {
  count: Scalars['Int'];
  max?: Maybe<mb_store_minters_max_fields>;
  min?: Maybe<mb_store_minters_min_fields>;
};


/** aggregate fields of "mb_store_minters" */
export type mb_store_minters_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<mb_store_minters_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "mb_store_minters". All fields are combined with a logical 'AND'. */
export type mb_store_minters_bool_exp = {
  _and?: InputMaybe<Array<mb_store_minters_bool_exp>>;
  _not?: InputMaybe<mb_store_minters_bool_exp>;
  _or?: InputMaybe<Array<mb_store_minters_bool_exp>>;
  minter_id?: InputMaybe<String_comparison_exp>;
  nft_contract?: InputMaybe<nft_contracts_bool_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  nft_contracts?: InputMaybe<nft_contracts_bool_exp>;
};

/** aggregate max on columns */
export type mb_store_minters_max_fields = {
  minter_id?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type mb_store_minters_min_fields = {
  minter_id?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "mb_store_minters". */
export type mb_store_minters_order_by = {
  minter_id?: InputMaybe<order_by>;
  nft_contract?: InputMaybe<nft_contracts_order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  nft_contracts?: InputMaybe<nft_contracts_order_by>;
};

/** select columns of table "mb_store_minters" */
export type mb_store_minters_select_column =
  /** column name */
  | 'minter_id'
  /** column name */
  | 'nft_contract_id';

/** Streaming cursor of the table "mb_store_minters" */
export type mb_store_minters_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: mb_store_minters_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type mb_store_minters_stream_cursor_value_input = {
  minter_id?: InputMaybe<Scalars['String']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "mb_views.active_listings" */
export type mb_views_active_listings = {
  approval_id?: Maybe<Scalars['numeric']>;
  base_uri?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  listed_by?: Maybe<Scalars['String']>;
  market_id?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  /** An array relationship */
  offers: Array<nft_offers>;
  /** An aggregate relationship */
  offers_aggregate: nft_offers_aggregate;
  price?: Maybe<Scalars['numeric']>;
  receipt_id?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_blob?: Maybe<Scalars['jsonb']>;
  title?: Maybe<Scalars['String']>;
  /** An object relationship */
  token?: Maybe<mb_views_nft_tokens>;
  token_id?: Maybe<Scalars['String']>;
};


/** columns and relationships of "mb_views.active_listings" */
export type mb_views_active_listingsoffersArgs = {
  distinct_on?: InputMaybe<Array<nft_offers_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_offers_order_by>>;
  where?: InputMaybe<nft_offers_bool_exp>;
};


/** columns and relationships of "mb_views.active_listings" */
export type mb_views_active_listingsoffers_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_offers_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_offers_order_by>>;
  where?: InputMaybe<nft_offers_bool_exp>;
};


/** columns and relationships of "mb_views.active_listings" */
export type mb_views_active_listingsreference_blobArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "mb_views.active_listings" */
export type mb_views_active_listings_aggregate = {
  aggregate?: Maybe<mb_views_active_listings_aggregate_fields>;
  nodes: Array<mb_views_active_listings>;
};

export type mb_views_active_listings_aggregate_bool_exp = {
  count?: InputMaybe<mb_views_active_listings_aggregate_bool_exp_count>;
};

export type mb_views_active_listings_aggregate_bool_exp_count = {
  arguments?: InputMaybe<Array<mb_views_active_listings_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<mb_views_active_listings_bool_exp>;
  predicate: Int_comparison_exp;
};

/** aggregate fields of "mb_views.active_listings" */
export type mb_views_active_listings_aggregate_fields = {
  avg?: Maybe<mb_views_active_listings_avg_fields>;
  count: Scalars['Int'];
  max?: Maybe<mb_views_active_listings_max_fields>;
  min?: Maybe<mb_views_active_listings_min_fields>;
  stddev?: Maybe<mb_views_active_listings_stddev_fields>;
  stddev_pop?: Maybe<mb_views_active_listings_stddev_pop_fields>;
  stddev_samp?: Maybe<mb_views_active_listings_stddev_samp_fields>;
  sum?: Maybe<mb_views_active_listings_sum_fields>;
  var_pop?: Maybe<mb_views_active_listings_var_pop_fields>;
  var_samp?: Maybe<mb_views_active_listings_var_samp_fields>;
  variance?: Maybe<mb_views_active_listings_variance_fields>;
};


/** aggregate fields of "mb_views.active_listings" */
export type mb_views_active_listings_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<mb_views_active_listings_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "mb_views.active_listings" */
export type mb_views_active_listings_aggregate_order_by = {
  avg?: InputMaybe<mb_views_active_listings_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<mb_views_active_listings_max_order_by>;
  min?: InputMaybe<mb_views_active_listings_min_order_by>;
  stddev?: InputMaybe<mb_views_active_listings_stddev_order_by>;
  stddev_pop?: InputMaybe<mb_views_active_listings_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<mb_views_active_listings_stddev_samp_order_by>;
  sum?: InputMaybe<mb_views_active_listings_sum_order_by>;
  var_pop?: InputMaybe<mb_views_active_listings_var_pop_order_by>;
  var_samp?: InputMaybe<mb_views_active_listings_var_samp_order_by>;
  variance?: InputMaybe<mb_views_active_listings_variance_order_by>;
};

/** aggregate avg on columns */
export type mb_views_active_listings_avg_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "mb_views.active_listings" */
export type mb_views_active_listings_avg_order_by = {
  approval_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "mb_views.active_listings". All fields are combined with a logical 'AND'. */
export type mb_views_active_listings_bool_exp = {
  _and?: InputMaybe<Array<mb_views_active_listings_bool_exp>>;
  _not?: InputMaybe<mb_views_active_listings_bool_exp>;
  _or?: InputMaybe<Array<mb_views_active_listings_bool_exp>>;
  approval_id?: InputMaybe<numeric_comparison_exp>;
  base_uri?: InputMaybe<String_comparison_exp>;
  content_flag?: InputMaybe<String_comparison_exp>;
  created_at?: InputMaybe<timestamp_comparison_exp>;
  currency?: InputMaybe<String_comparison_exp>;
  description?: InputMaybe<String_comparison_exp>;
  extra?: InputMaybe<String_comparison_exp>;
  kind?: InputMaybe<String_comparison_exp>;
  listed_by?: InputMaybe<String_comparison_exp>;
  market_id?: InputMaybe<String_comparison_exp>;
  media?: InputMaybe<String_comparison_exp>;
  metadata_id?: InputMaybe<String_comparison_exp>;
  minter?: InputMaybe<String_comparison_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  offers?: InputMaybe<nft_offers_bool_exp>;
  offers_aggregate?: InputMaybe<nft_offers_aggregate_bool_exp>;
  price?: InputMaybe<numeric_comparison_exp>;
  receipt_id?: InputMaybe<String_comparison_exp>;
  reference?: InputMaybe<String_comparison_exp>;
  reference_blob?: InputMaybe<jsonb_comparison_exp>;
  title?: InputMaybe<String_comparison_exp>;
  token?: InputMaybe<mb_views_nft_tokens_bool_exp>;
  token_id?: InputMaybe<String_comparison_exp>;
};

/** aggregate max on columns */
export type mb_views_active_listings_max_fields = {
  approval_id?: Maybe<Scalars['numeric']>;
  base_uri?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  listed_by?: Maybe<Scalars['String']>;
  market_id?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  receipt_id?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "mb_views.active_listings" */
export type mb_views_active_listings_max_order_by = {
  approval_id?: InputMaybe<order_by>;
  base_uri?: InputMaybe<order_by>;
  content_flag?: InputMaybe<order_by>;
  created_at?: InputMaybe<order_by>;
  currency?: InputMaybe<order_by>;
  description?: InputMaybe<order_by>;
  extra?: InputMaybe<order_by>;
  kind?: InputMaybe<order_by>;
  listed_by?: InputMaybe<order_by>;
  market_id?: InputMaybe<order_by>;
  media?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  minter?: InputMaybe<order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
  receipt_id?: InputMaybe<order_by>;
  reference?: InputMaybe<order_by>;
  title?: InputMaybe<order_by>;
  token_id?: InputMaybe<order_by>;
};

/** aggregate min on columns */
export type mb_views_active_listings_min_fields = {
  approval_id?: Maybe<Scalars['numeric']>;
  base_uri?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  listed_by?: Maybe<Scalars['String']>;
  market_id?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  receipt_id?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "mb_views.active_listings" */
export type mb_views_active_listings_min_order_by = {
  approval_id?: InputMaybe<order_by>;
  base_uri?: InputMaybe<order_by>;
  content_flag?: InputMaybe<order_by>;
  created_at?: InputMaybe<order_by>;
  currency?: InputMaybe<order_by>;
  description?: InputMaybe<order_by>;
  extra?: InputMaybe<order_by>;
  kind?: InputMaybe<order_by>;
  listed_by?: InputMaybe<order_by>;
  market_id?: InputMaybe<order_by>;
  media?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  minter?: InputMaybe<order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
  receipt_id?: InputMaybe<order_by>;
  reference?: InputMaybe<order_by>;
  title?: InputMaybe<order_by>;
  token_id?: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "mb_views.active_listings". */
export type mb_views_active_listings_order_by = {
  approval_id?: InputMaybe<order_by>;
  base_uri?: InputMaybe<order_by>;
  content_flag?: InputMaybe<order_by>;
  created_at?: InputMaybe<order_by>;
  currency?: InputMaybe<order_by>;
  description?: InputMaybe<order_by>;
  extra?: InputMaybe<order_by>;
  kind?: InputMaybe<order_by>;
  listed_by?: InputMaybe<order_by>;
  market_id?: InputMaybe<order_by>;
  media?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  minter?: InputMaybe<order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  offers_aggregate?: InputMaybe<nft_offers_aggregate_order_by>;
  price?: InputMaybe<order_by>;
  receipt_id?: InputMaybe<order_by>;
  reference?: InputMaybe<order_by>;
  reference_blob?: InputMaybe<order_by>;
  title?: InputMaybe<order_by>;
  token?: InputMaybe<mb_views_nft_tokens_order_by>;
  token_id?: InputMaybe<order_by>;
};

/** columns and relationships of "mb_views.active_listings_rollup" */
export type mb_views_active_listings_rollup = {
  approval_id?: Maybe<Scalars['numeric']>;
  base_uri?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  listed_by?: Maybe<Scalars['String']>;
  market_id?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  receipt_id?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_blob?: Maybe<Scalars['jsonb']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
};


/** columns and relationships of "mb_views.active_listings_rollup" */
export type mb_views_active_listings_rollupreference_blobArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "mb_views.active_listings_rollup" */
export type mb_views_active_listings_rollup_aggregate = {
  aggregate?: Maybe<mb_views_active_listings_rollup_aggregate_fields>;
  nodes: Array<mb_views_active_listings_rollup>;
};

/** aggregate fields of "mb_views.active_listings_rollup" */
export type mb_views_active_listings_rollup_aggregate_fields = {
  avg?: Maybe<mb_views_active_listings_rollup_avg_fields>;
  count: Scalars['Int'];
  max?: Maybe<mb_views_active_listings_rollup_max_fields>;
  min?: Maybe<mb_views_active_listings_rollup_min_fields>;
  stddev?: Maybe<mb_views_active_listings_rollup_stddev_fields>;
  stddev_pop?: Maybe<mb_views_active_listings_rollup_stddev_pop_fields>;
  stddev_samp?: Maybe<mb_views_active_listings_rollup_stddev_samp_fields>;
  sum?: Maybe<mb_views_active_listings_rollup_sum_fields>;
  var_pop?: Maybe<mb_views_active_listings_rollup_var_pop_fields>;
  var_samp?: Maybe<mb_views_active_listings_rollup_var_samp_fields>;
  variance?: Maybe<mb_views_active_listings_rollup_variance_fields>;
};


/** aggregate fields of "mb_views.active_listings_rollup" */
export type mb_views_active_listings_rollup_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<mb_views_active_listings_rollup_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type mb_views_active_listings_rollup_avg_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "mb_views.active_listings_rollup". All fields are combined with a logical 'AND'. */
export type mb_views_active_listings_rollup_bool_exp = {
  _and?: InputMaybe<Array<mb_views_active_listings_rollup_bool_exp>>;
  _not?: InputMaybe<mb_views_active_listings_rollup_bool_exp>;
  _or?: InputMaybe<Array<mb_views_active_listings_rollup_bool_exp>>;
  approval_id?: InputMaybe<numeric_comparison_exp>;
  base_uri?: InputMaybe<String_comparison_exp>;
  content_flag?: InputMaybe<String_comparison_exp>;
  created_at?: InputMaybe<timestamp_comparison_exp>;
  currency?: InputMaybe<String_comparison_exp>;
  description?: InputMaybe<String_comparison_exp>;
  extra?: InputMaybe<String_comparison_exp>;
  kind?: InputMaybe<String_comparison_exp>;
  listed_by?: InputMaybe<String_comparison_exp>;
  market_id?: InputMaybe<String_comparison_exp>;
  media?: InputMaybe<String_comparison_exp>;
  metadata_id?: InputMaybe<String_comparison_exp>;
  minter?: InputMaybe<String_comparison_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  price?: InputMaybe<numeric_comparison_exp>;
  receipt_id?: InputMaybe<String_comparison_exp>;
  reference?: InputMaybe<String_comparison_exp>;
  reference_blob?: InputMaybe<jsonb_comparison_exp>;
  title?: InputMaybe<String_comparison_exp>;
  token_id?: InputMaybe<String_comparison_exp>;
};

/** aggregate max on columns */
export type mb_views_active_listings_rollup_max_fields = {
  approval_id?: Maybe<Scalars['numeric']>;
  base_uri?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  listed_by?: Maybe<Scalars['String']>;
  market_id?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  receipt_id?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type mb_views_active_listings_rollup_min_fields = {
  approval_id?: Maybe<Scalars['numeric']>;
  base_uri?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  listed_by?: Maybe<Scalars['String']>;
  market_id?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  receipt_id?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "mb_views.active_listings_rollup". */
export type mb_views_active_listings_rollup_order_by = {
  approval_id?: InputMaybe<order_by>;
  base_uri?: InputMaybe<order_by>;
  content_flag?: InputMaybe<order_by>;
  created_at?: InputMaybe<order_by>;
  currency?: InputMaybe<order_by>;
  description?: InputMaybe<order_by>;
  extra?: InputMaybe<order_by>;
  kind?: InputMaybe<order_by>;
  listed_by?: InputMaybe<order_by>;
  market_id?: InputMaybe<order_by>;
  media?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  minter?: InputMaybe<order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
  receipt_id?: InputMaybe<order_by>;
  reference?: InputMaybe<order_by>;
  reference_blob?: InputMaybe<order_by>;
  title?: InputMaybe<order_by>;
  token_id?: InputMaybe<order_by>;
};

/** select columns of table "mb_views.active_listings_rollup" */
export type mb_views_active_listings_rollup_select_column =
  /** column name */
  | 'approval_id'
  /** column name */
  | 'base_uri'
  /** column name */
  | 'content_flag'
  /** column name */
  | 'created_at'
  /** column name */
  | 'currency'
  /** column name */
  | 'description'
  /** column name */
  | 'extra'
  /** column name */
  | 'kind'
  /** column name */
  | 'listed_by'
  /** column name */
  | 'market_id'
  /** column name */
  | 'media'
  /** column name */
  | 'metadata_id'
  /** column name */
  | 'minter'
  /** column name */
  | 'nft_contract_id'
  /** column name */
  | 'price'
  /** column name */
  | 'receipt_id'
  /** column name */
  | 'reference'
  /** column name */
  | 'reference_blob'
  /** column name */
  | 'title'
  /** column name */
  | 'token_id';

/** aggregate stddev on columns */
export type mb_views_active_listings_rollup_stddev_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type mb_views_active_listings_rollup_stddev_pop_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type mb_views_active_listings_rollup_stddev_samp_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "mb_views_active_listings_rollup" */
export type mb_views_active_listings_rollup_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: mb_views_active_listings_rollup_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type mb_views_active_listings_rollup_stream_cursor_value_input = {
  approval_id?: InputMaybe<Scalars['numeric']>;
  base_uri?: InputMaybe<Scalars['String']>;
  content_flag?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  extra?: InputMaybe<Scalars['String']>;
  kind?: InputMaybe<Scalars['String']>;
  listed_by?: InputMaybe<Scalars['String']>;
  market_id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  metadata_id?: InputMaybe<Scalars['String']>;
  minter?: InputMaybe<Scalars['String']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  receipt_id?: InputMaybe<Scalars['String']>;
  reference?: InputMaybe<Scalars['String']>;
  reference_blob?: InputMaybe<Scalars['jsonb']>;
  title?: InputMaybe<Scalars['String']>;
  token_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type mb_views_active_listings_rollup_sum_fields = {
  approval_id?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type mb_views_active_listings_rollup_var_pop_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type mb_views_active_listings_rollup_var_samp_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type mb_views_active_listings_rollup_variance_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** select columns of table "mb_views.active_listings" */
export type mb_views_active_listings_select_column =
  /** column name */
  | 'approval_id'
  /** column name */
  | 'base_uri'
  /** column name */
  | 'content_flag'
  /** column name */
  | 'created_at'
  /** column name */
  | 'currency'
  /** column name */
  | 'description'
  /** column name */
  | 'extra'
  /** column name */
  | 'kind'
  /** column name */
  | 'listed_by'
  /** column name */
  | 'market_id'
  /** column name */
  | 'media'
  /** column name */
  | 'metadata_id'
  /** column name */
  | 'minter'
  /** column name */
  | 'nft_contract_id'
  /** column name */
  | 'price'
  /** column name */
  | 'receipt_id'
  /** column name */
  | 'reference'
  /** column name */
  | 'reference_blob'
  /** column name */
  | 'title'
  /** column name */
  | 'token_id';

/** aggregate stddev on columns */
export type mb_views_active_listings_stddev_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "mb_views.active_listings" */
export type mb_views_active_listings_stddev_order_by = {
  approval_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
};

/** aggregate stddev_pop on columns */
export type mb_views_active_listings_stddev_pop_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "mb_views.active_listings" */
export type mb_views_active_listings_stddev_pop_order_by = {
  approval_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
};

/** aggregate stddev_samp on columns */
export type mb_views_active_listings_stddev_samp_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "mb_views.active_listings" */
export type mb_views_active_listings_stddev_samp_order_by = {
  approval_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
};

/** Streaming cursor of the table "mb_views_active_listings" */
export type mb_views_active_listings_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: mb_views_active_listings_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type mb_views_active_listings_stream_cursor_value_input = {
  approval_id?: InputMaybe<Scalars['numeric']>;
  base_uri?: InputMaybe<Scalars['String']>;
  content_flag?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  extra?: InputMaybe<Scalars['String']>;
  kind?: InputMaybe<Scalars['String']>;
  listed_by?: InputMaybe<Scalars['String']>;
  market_id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  metadata_id?: InputMaybe<Scalars['String']>;
  minter?: InputMaybe<Scalars['String']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  receipt_id?: InputMaybe<Scalars['String']>;
  reference?: InputMaybe<Scalars['String']>;
  reference_blob?: InputMaybe<Scalars['jsonb']>;
  title?: InputMaybe<Scalars['String']>;
  token_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type mb_views_active_listings_sum_fields = {
  approval_id?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "mb_views.active_listings" */
export type mb_views_active_listings_sum_order_by = {
  approval_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
};

/** aggregate var_pop on columns */
export type mb_views_active_listings_var_pop_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "mb_views.active_listings" */
export type mb_views_active_listings_var_pop_order_by = {
  approval_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
};

/** aggregate var_samp on columns */
export type mb_views_active_listings_var_samp_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "mb_views.active_listings" */
export type mb_views_active_listings_var_samp_order_by = {
  approval_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
};

/** aggregate variance on columns */
export type mb_views_active_listings_variance_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "mb_views.active_listings" */
export type mb_views_active_listings_variance_order_by = {
  approval_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
};

/** columns and relationships of "mb_views.auctions_with_offer" */
export type mb_views_auctions_with_offer = {
  approval_id?: Maybe<Scalars['numeric']>;
  base_uri?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  listed_by?: Maybe<Scalars['String']>;
  listing_accepted_at?: Maybe<Scalars['timestamp']>;
  listing_invalidated_at?: Maybe<Scalars['timestamp']>;
  listing_receipt_id?: Maybe<Scalars['String']>;
  market_id?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  nft_token?: Maybe<mb_views_nft_tokens>;
  offer_accepted_at?: Maybe<Scalars['timestamp']>;
  offer_expires_at?: Maybe<Scalars['timestamp']>;
  offer_id?: Maybe<Scalars['bigint']>;
  offer_price?: Maybe<Scalars['numeric']>;
  offer_receipt_id?: Maybe<Scalars['String']>;
  offer_withdrawn_at?: Maybe<Scalars['timestamp']>;
  offered_at?: Maybe<Scalars['timestamp']>;
  offered_by?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  reference?: Maybe<Scalars['String']>;
  reference_blob?: Maybe<Scalars['jsonb']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  unlisted_at?: Maybe<Scalars['timestamp']>;
};


/** columns and relationships of "mb_views.auctions_with_offer" */
export type mb_views_auctions_with_offerreference_blobArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "mb_views.auctions_with_offer" */
export type mb_views_auctions_with_offer_aggregate = {
  aggregate?: Maybe<mb_views_auctions_with_offer_aggregate_fields>;
  nodes: Array<mb_views_auctions_with_offer>;
};

/** aggregate fields of "mb_views.auctions_with_offer" */
export type mb_views_auctions_with_offer_aggregate_fields = {
  avg?: Maybe<mb_views_auctions_with_offer_avg_fields>;
  count: Scalars['Int'];
  max?: Maybe<mb_views_auctions_with_offer_max_fields>;
  min?: Maybe<mb_views_auctions_with_offer_min_fields>;
  stddev?: Maybe<mb_views_auctions_with_offer_stddev_fields>;
  stddev_pop?: Maybe<mb_views_auctions_with_offer_stddev_pop_fields>;
  stddev_samp?: Maybe<mb_views_auctions_with_offer_stddev_samp_fields>;
  sum?: Maybe<mb_views_auctions_with_offer_sum_fields>;
  var_pop?: Maybe<mb_views_auctions_with_offer_var_pop_fields>;
  var_samp?: Maybe<mb_views_auctions_with_offer_var_samp_fields>;
  variance?: Maybe<mb_views_auctions_with_offer_variance_fields>;
};


/** aggregate fields of "mb_views.auctions_with_offer" */
export type mb_views_auctions_with_offer_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<mb_views_auctions_with_offer_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type mb_views_auctions_with_offer_avg_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  offer_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "mb_views.auctions_with_offer". All fields are combined with a logical 'AND'. */
export type mb_views_auctions_with_offer_bool_exp = {
  _and?: InputMaybe<Array<mb_views_auctions_with_offer_bool_exp>>;
  _not?: InputMaybe<mb_views_auctions_with_offer_bool_exp>;
  _or?: InputMaybe<Array<mb_views_auctions_with_offer_bool_exp>>;
  approval_id?: InputMaybe<numeric_comparison_exp>;
  base_uri?: InputMaybe<String_comparison_exp>;
  content_flag?: InputMaybe<String_comparison_exp>;
  created_at?: InputMaybe<timestamp_comparison_exp>;
  currency?: InputMaybe<String_comparison_exp>;
  description?: InputMaybe<String_comparison_exp>;
  extra?: InputMaybe<String_comparison_exp>;
  kind?: InputMaybe<String_comparison_exp>;
  listed_by?: InputMaybe<String_comparison_exp>;
  listing_accepted_at?: InputMaybe<timestamp_comparison_exp>;
  listing_invalidated_at?: InputMaybe<timestamp_comparison_exp>;
  listing_receipt_id?: InputMaybe<String_comparison_exp>;
  market_id?: InputMaybe<String_comparison_exp>;
  media?: InputMaybe<String_comparison_exp>;
  metadata_id?: InputMaybe<String_comparison_exp>;
  minter?: InputMaybe<String_comparison_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  nft_token?: InputMaybe<mb_views_nft_tokens_bool_exp>;
  offer_accepted_at?: InputMaybe<timestamp_comparison_exp>;
  offer_expires_at?: InputMaybe<timestamp_comparison_exp>;
  offer_id?: InputMaybe<bigint_comparison_exp>;
  offer_price?: InputMaybe<numeric_comparison_exp>;
  offer_receipt_id?: InputMaybe<String_comparison_exp>;
  offer_withdrawn_at?: InputMaybe<timestamp_comparison_exp>;
  offered_at?: InputMaybe<timestamp_comparison_exp>;
  offered_by?: InputMaybe<String_comparison_exp>;
  price?: InputMaybe<numeric_comparison_exp>;
  reference?: InputMaybe<String_comparison_exp>;
  reference_blob?: InputMaybe<jsonb_comparison_exp>;
  title?: InputMaybe<String_comparison_exp>;
  token_id?: InputMaybe<String_comparison_exp>;
  unlisted_at?: InputMaybe<timestamp_comparison_exp>;
};

/** aggregate max on columns */
export type mb_views_auctions_with_offer_max_fields = {
  approval_id?: Maybe<Scalars['numeric']>;
  base_uri?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  listed_by?: Maybe<Scalars['String']>;
  listing_accepted_at?: Maybe<Scalars['timestamp']>;
  listing_invalidated_at?: Maybe<Scalars['timestamp']>;
  listing_receipt_id?: Maybe<Scalars['String']>;
  market_id?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  offer_accepted_at?: Maybe<Scalars['timestamp']>;
  offer_expires_at?: Maybe<Scalars['timestamp']>;
  offer_id?: Maybe<Scalars['bigint']>;
  offer_price?: Maybe<Scalars['numeric']>;
  offer_receipt_id?: Maybe<Scalars['String']>;
  offer_withdrawn_at?: Maybe<Scalars['timestamp']>;
  offered_at?: Maybe<Scalars['timestamp']>;
  offered_by?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  reference?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  unlisted_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type mb_views_auctions_with_offer_min_fields = {
  approval_id?: Maybe<Scalars['numeric']>;
  base_uri?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  listed_by?: Maybe<Scalars['String']>;
  listing_accepted_at?: Maybe<Scalars['timestamp']>;
  listing_invalidated_at?: Maybe<Scalars['timestamp']>;
  listing_receipt_id?: Maybe<Scalars['String']>;
  market_id?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  offer_accepted_at?: Maybe<Scalars['timestamp']>;
  offer_expires_at?: Maybe<Scalars['timestamp']>;
  offer_id?: Maybe<Scalars['bigint']>;
  offer_price?: Maybe<Scalars['numeric']>;
  offer_receipt_id?: Maybe<Scalars['String']>;
  offer_withdrawn_at?: Maybe<Scalars['timestamp']>;
  offered_at?: Maybe<Scalars['timestamp']>;
  offered_by?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  reference?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  unlisted_at?: Maybe<Scalars['timestamp']>;
};

/** Ordering options when selecting data from "mb_views.auctions_with_offer". */
export type mb_views_auctions_with_offer_order_by = {
  approval_id?: InputMaybe<order_by>;
  base_uri?: InputMaybe<order_by>;
  content_flag?: InputMaybe<order_by>;
  created_at?: InputMaybe<order_by>;
  currency?: InputMaybe<order_by>;
  description?: InputMaybe<order_by>;
  extra?: InputMaybe<order_by>;
  kind?: InputMaybe<order_by>;
  listed_by?: InputMaybe<order_by>;
  listing_accepted_at?: InputMaybe<order_by>;
  listing_invalidated_at?: InputMaybe<order_by>;
  listing_receipt_id?: InputMaybe<order_by>;
  market_id?: InputMaybe<order_by>;
  media?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  minter?: InputMaybe<order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  nft_token?: InputMaybe<mb_views_nft_tokens_order_by>;
  offer_accepted_at?: InputMaybe<order_by>;
  offer_expires_at?: InputMaybe<order_by>;
  offer_id?: InputMaybe<order_by>;
  offer_price?: InputMaybe<order_by>;
  offer_receipt_id?: InputMaybe<order_by>;
  offer_withdrawn_at?: InputMaybe<order_by>;
  offered_at?: InputMaybe<order_by>;
  offered_by?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
  reference?: InputMaybe<order_by>;
  reference_blob?: InputMaybe<order_by>;
  title?: InputMaybe<order_by>;
  token_id?: InputMaybe<order_by>;
  unlisted_at?: InputMaybe<order_by>;
};

/** select columns of table "mb_views.auctions_with_offer" */
export type mb_views_auctions_with_offer_select_column =
  /** column name */
  | 'approval_id'
  /** column name */
  | 'base_uri'
  /** column name */
  | 'content_flag'
  /** column name */
  | 'created_at'
  /** column name */
  | 'currency'
  /** column name */
  | 'description'
  /** column name */
  | 'extra'
  /** column name */
  | 'kind'
  /** column name */
  | 'listed_by'
  /** column name */
  | 'listing_accepted_at'
  /** column name */
  | 'listing_invalidated_at'
  /** column name */
  | 'listing_receipt_id'
  /** column name */
  | 'market_id'
  /** column name */
  | 'media'
  /** column name */
  | 'metadata_id'
  /** column name */
  | 'minter'
  /** column name */
  | 'nft_contract_id'
  /** column name */
  | 'offer_accepted_at'
  /** column name */
  | 'offer_expires_at'
  /** column name */
  | 'offer_id'
  /** column name */
  | 'offer_price'
  /** column name */
  | 'offer_receipt_id'
  /** column name */
  | 'offer_withdrawn_at'
  /** column name */
  | 'offered_at'
  /** column name */
  | 'offered_by'
  /** column name */
  | 'price'
  /** column name */
  | 'reference'
  /** column name */
  | 'reference_blob'
  /** column name */
  | 'title'
  /** column name */
  | 'token_id'
  /** column name */
  | 'unlisted_at';

/** aggregate stddev on columns */
export type mb_views_auctions_with_offer_stddev_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  offer_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type mb_views_auctions_with_offer_stddev_pop_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  offer_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type mb_views_auctions_with_offer_stddev_samp_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  offer_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "mb_views_auctions_with_offer" */
export type mb_views_auctions_with_offer_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: mb_views_auctions_with_offer_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type mb_views_auctions_with_offer_stream_cursor_value_input = {
  approval_id?: InputMaybe<Scalars['numeric']>;
  base_uri?: InputMaybe<Scalars['String']>;
  content_flag?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  extra?: InputMaybe<Scalars['String']>;
  kind?: InputMaybe<Scalars['String']>;
  listed_by?: InputMaybe<Scalars['String']>;
  listing_accepted_at?: InputMaybe<Scalars['timestamp']>;
  listing_invalidated_at?: InputMaybe<Scalars['timestamp']>;
  listing_receipt_id?: InputMaybe<Scalars['String']>;
  market_id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  metadata_id?: InputMaybe<Scalars['String']>;
  minter?: InputMaybe<Scalars['String']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
  offer_accepted_at?: InputMaybe<Scalars['timestamp']>;
  offer_expires_at?: InputMaybe<Scalars['timestamp']>;
  offer_id?: InputMaybe<Scalars['bigint']>;
  offer_price?: InputMaybe<Scalars['numeric']>;
  offer_receipt_id?: InputMaybe<Scalars['String']>;
  offer_withdrawn_at?: InputMaybe<Scalars['timestamp']>;
  offered_at?: InputMaybe<Scalars['timestamp']>;
  offered_by?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  reference?: InputMaybe<Scalars['String']>;
  reference_blob?: InputMaybe<Scalars['jsonb']>;
  title?: InputMaybe<Scalars['String']>;
  token_id?: InputMaybe<Scalars['String']>;
  unlisted_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type mb_views_auctions_with_offer_sum_fields = {
  approval_id?: Maybe<Scalars['numeric']>;
  offer_id?: Maybe<Scalars['bigint']>;
  offer_price?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type mb_views_auctions_with_offer_var_pop_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  offer_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type mb_views_auctions_with_offer_var_samp_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  offer_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type mb_views_auctions_with_offer_variance_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  offer_price?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "mb_views.nft_activities" */
export type mb_views_nft_activities = {
  action_receiver?: Maybe<Scalars['String']>;
  action_sender?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  /** An object relationship */
  nft_contract?: Maybe<nft_contracts>;
  nft_contract_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  receipt_id?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_blob?: Maybe<Scalars['jsonb']>;
  reference_hash?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  tx_sender?: Maybe<Scalars['String']>;
};


/** columns and relationships of "mb_views.nft_activities" */
export type mb_views_nft_activitiesreference_blobArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "mb_views.nft_activities" */
export type mb_views_nft_activities_aggregate = {
  aggregate?: Maybe<mb_views_nft_activities_aggregate_fields>;
  nodes: Array<mb_views_nft_activities>;
};

/** aggregate fields of "mb_views.nft_activities" */
export type mb_views_nft_activities_aggregate_fields = {
  avg?: Maybe<mb_views_nft_activities_avg_fields>;
  count: Scalars['Int'];
  max?: Maybe<mb_views_nft_activities_max_fields>;
  min?: Maybe<mb_views_nft_activities_min_fields>;
  stddev?: Maybe<mb_views_nft_activities_stddev_fields>;
  stddev_pop?: Maybe<mb_views_nft_activities_stddev_pop_fields>;
  stddev_samp?: Maybe<mb_views_nft_activities_stddev_samp_fields>;
  sum?: Maybe<mb_views_nft_activities_sum_fields>;
  var_pop?: Maybe<mb_views_nft_activities_var_pop_fields>;
  var_samp?: Maybe<mb_views_nft_activities_var_samp_fields>;
  variance?: Maybe<mb_views_nft_activities_variance_fields>;
};


/** aggregate fields of "mb_views.nft_activities" */
export type mb_views_nft_activities_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<mb_views_nft_activities_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type mb_views_nft_activities_avg_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "mb_views.nft_activities". All fields are combined with a logical 'AND'. */
export type mb_views_nft_activities_bool_exp = {
  _and?: InputMaybe<Array<mb_views_nft_activities_bool_exp>>;
  _not?: InputMaybe<mb_views_nft_activities_bool_exp>;
  _or?: InputMaybe<Array<mb_views_nft_activities_bool_exp>>;
  action_receiver?: InputMaybe<String_comparison_exp>;
  action_sender?: InputMaybe<String_comparison_exp>;
  content_flag?: InputMaybe<String_comparison_exp>;
  description?: InputMaybe<String_comparison_exp>;
  extra?: InputMaybe<String_comparison_exp>;
  kind?: InputMaybe<String_comparison_exp>;
  media?: InputMaybe<String_comparison_exp>;
  media_hash?: InputMaybe<String_comparison_exp>;
  nft_contract?: InputMaybe<nft_contracts_bool_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  price?: InputMaybe<numeric_comparison_exp>;
  receipt_id?: InputMaybe<String_comparison_exp>;
  reference?: InputMaybe<String_comparison_exp>;
  reference_blob?: InputMaybe<jsonb_comparison_exp>;
  reference_hash?: InputMaybe<String_comparison_exp>;
  timestamp?: InputMaybe<timestamp_comparison_exp>;
  title?: InputMaybe<String_comparison_exp>;
  token_id?: InputMaybe<String_comparison_exp>;
  tx_sender?: InputMaybe<String_comparison_exp>;
};

/** aggregate max on columns */
export type mb_views_nft_activities_max_fields = {
  action_receiver?: Maybe<Scalars['String']>;
  action_sender?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  receipt_id?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_hash?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  tx_sender?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type mb_views_nft_activities_min_fields = {
  action_receiver?: Maybe<Scalars['String']>;
  action_sender?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  receipt_id?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_hash?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  tx_sender?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "mb_views.nft_activities". */
export type mb_views_nft_activities_order_by = {
  action_receiver?: InputMaybe<order_by>;
  action_sender?: InputMaybe<order_by>;
  content_flag?: InputMaybe<order_by>;
  description?: InputMaybe<order_by>;
  extra?: InputMaybe<order_by>;
  kind?: InputMaybe<order_by>;
  media?: InputMaybe<order_by>;
  media_hash?: InputMaybe<order_by>;
  nft_contract?: InputMaybe<nft_contracts_order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
  receipt_id?: InputMaybe<order_by>;
  reference?: InputMaybe<order_by>;
  reference_blob?: InputMaybe<order_by>;
  reference_hash?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
  title?: InputMaybe<order_by>;
  token_id?: InputMaybe<order_by>;
  tx_sender?: InputMaybe<order_by>;
};

/** select columns of table "mb_views.nft_activities" */
export type mb_views_nft_activities_select_column =
  /** column name */
  | 'action_receiver'
  /** column name */
  | 'action_sender'
  /** column name */
  | 'content_flag'
  /** column name */
  | 'description'
  /** column name */
  | 'extra'
  /** column name */
  | 'kind'
  /** column name */
  | 'media'
  /** column name */
  | 'media_hash'
  /** column name */
  | 'nft_contract_id'
  /** column name */
  | 'price'
  /** column name */
  | 'receipt_id'
  /** column name */
  | 'reference'
  /** column name */
  | 'reference_blob'
  /** column name */
  | 'reference_hash'
  /** column name */
  | 'timestamp'
  /** column name */
  | 'title'
  /** column name */
  | 'token_id'
  /** column name */
  | 'tx_sender';

/** aggregate stddev on columns */
export type mb_views_nft_activities_stddev_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type mb_views_nft_activities_stddev_pop_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type mb_views_nft_activities_stddev_samp_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "mb_views_nft_activities" */
export type mb_views_nft_activities_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: mb_views_nft_activities_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type mb_views_nft_activities_stream_cursor_value_input = {
  action_receiver?: InputMaybe<Scalars['String']>;
  action_sender?: InputMaybe<Scalars['String']>;
  content_flag?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  extra?: InputMaybe<Scalars['String']>;
  kind?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  media_hash?: InputMaybe<Scalars['String']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  receipt_id?: InputMaybe<Scalars['String']>;
  reference?: InputMaybe<Scalars['String']>;
  reference_blob?: InputMaybe<Scalars['jsonb']>;
  reference_hash?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  title?: InputMaybe<Scalars['String']>;
  token_id?: InputMaybe<Scalars['String']>;
  tx_sender?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type mb_views_nft_activities_sum_fields = {
  price?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type mb_views_nft_activities_var_pop_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type mb_views_nft_activities_var_samp_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type mb_views_nft_activities_variance_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "mb_views.nft_metadata" */
export type mb_views_nft_metadata = {
  base_uri?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  /** An array relationship */
  listings: Array<mb_views_active_listings>;
  /** An aggregate relationship */
  listings_aggregate: mb_views_active_listings_aggregate;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  metadata_content_flag?: Maybe<Scalars['String']>;
  nft_contract_content_flag?: Maybe<Scalars['String']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']>;
  nft_contract_icon?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  nft_contract_is_mintbase?: Maybe<Scalars['Boolean']>;
  nft_contract_name?: Maybe<Scalars['String']>;
  nft_contract_owner_id?: Maybe<Scalars['String']>;
  nft_contract_reference?: Maybe<Scalars['String']>;
  nft_contract_spec?: Maybe<Scalars['String']>;
  nft_contract_symbol?: Maybe<Scalars['String']>;
  reference_blob?: Maybe<Scalars['jsonb']>;
  title?: Maybe<Scalars['String']>;
};


/** columns and relationships of "mb_views.nft_metadata" */
export type mb_views_nft_metadatalistingsArgs = {
  distinct_on?: InputMaybe<Array<mb_views_active_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_active_listings_order_by>>;
  where?: InputMaybe<mb_views_active_listings_bool_exp>;
};


/** columns and relationships of "mb_views.nft_metadata" */
export type mb_views_nft_metadatalistings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_active_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_active_listings_order_by>>;
  where?: InputMaybe<mb_views_active_listings_bool_exp>;
};


/** columns and relationships of "mb_views.nft_metadata" */
export type mb_views_nft_metadatareference_blobArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "mb_views.nft_metadata" */
export type mb_views_nft_metadata_aggregate = {
  aggregate?: Maybe<mb_views_nft_metadata_aggregate_fields>;
  nodes: Array<mb_views_nft_metadata>;
};

/** aggregate fields of "mb_views.nft_metadata" */
export type mb_views_nft_metadata_aggregate_fields = {
  count: Scalars['Int'];
  max?: Maybe<mb_views_nft_metadata_max_fields>;
  min?: Maybe<mb_views_nft_metadata_min_fields>;
};


/** aggregate fields of "mb_views.nft_metadata" */
export type mb_views_nft_metadata_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<mb_views_nft_metadata_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "mb_views.nft_metadata". All fields are combined with a logical 'AND'. */
export type mb_views_nft_metadata_bool_exp = {
  _and?: InputMaybe<Array<mb_views_nft_metadata_bool_exp>>;
  _not?: InputMaybe<mb_views_nft_metadata_bool_exp>;
  _or?: InputMaybe<Array<mb_views_nft_metadata_bool_exp>>;
  base_uri?: InputMaybe<String_comparison_exp>;
  description?: InputMaybe<String_comparison_exp>;
  extra?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  listings?: InputMaybe<mb_views_active_listings_bool_exp>;
  listings_aggregate?: InputMaybe<mb_views_active_listings_aggregate_bool_exp>;
  media?: InputMaybe<String_comparison_exp>;
  media_hash?: InputMaybe<String_comparison_exp>;
  metadata_content_flag?: InputMaybe<String_comparison_exp>;
  nft_contract_content_flag?: InputMaybe<String_comparison_exp>;
  nft_contract_created_at?: InputMaybe<timestamp_comparison_exp>;
  nft_contract_icon?: InputMaybe<String_comparison_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  nft_contract_is_mintbase?: InputMaybe<Boolean_comparison_exp>;
  nft_contract_name?: InputMaybe<String_comparison_exp>;
  nft_contract_owner_id?: InputMaybe<String_comparison_exp>;
  nft_contract_reference?: InputMaybe<String_comparison_exp>;
  nft_contract_spec?: InputMaybe<String_comparison_exp>;
  nft_contract_symbol?: InputMaybe<String_comparison_exp>;
  reference_blob?: InputMaybe<jsonb_comparison_exp>;
  title?: InputMaybe<String_comparison_exp>;
};

/** aggregate max on columns */
export type mb_views_nft_metadata_max_fields = {
  base_uri?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  metadata_content_flag?: Maybe<Scalars['String']>;
  nft_contract_content_flag?: Maybe<Scalars['String']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']>;
  nft_contract_icon?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  nft_contract_name?: Maybe<Scalars['String']>;
  nft_contract_owner_id?: Maybe<Scalars['String']>;
  nft_contract_reference?: Maybe<Scalars['String']>;
  nft_contract_spec?: Maybe<Scalars['String']>;
  nft_contract_symbol?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type mb_views_nft_metadata_min_fields = {
  base_uri?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  metadata_content_flag?: Maybe<Scalars['String']>;
  nft_contract_content_flag?: Maybe<Scalars['String']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']>;
  nft_contract_icon?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  nft_contract_name?: Maybe<Scalars['String']>;
  nft_contract_owner_id?: Maybe<Scalars['String']>;
  nft_contract_reference?: Maybe<Scalars['String']>;
  nft_contract_spec?: Maybe<Scalars['String']>;
  nft_contract_symbol?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "mb_views.nft_metadata". */
export type mb_views_nft_metadata_order_by = {
  base_uri?: InputMaybe<order_by>;
  description?: InputMaybe<order_by>;
  extra?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  listings_aggregate?: InputMaybe<mb_views_active_listings_aggregate_order_by>;
  media?: InputMaybe<order_by>;
  media_hash?: InputMaybe<order_by>;
  metadata_content_flag?: InputMaybe<order_by>;
  nft_contract_content_flag?: InputMaybe<order_by>;
  nft_contract_created_at?: InputMaybe<order_by>;
  nft_contract_icon?: InputMaybe<order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  nft_contract_is_mintbase?: InputMaybe<order_by>;
  nft_contract_name?: InputMaybe<order_by>;
  nft_contract_owner_id?: InputMaybe<order_by>;
  nft_contract_reference?: InputMaybe<order_by>;
  nft_contract_spec?: InputMaybe<order_by>;
  nft_contract_symbol?: InputMaybe<order_by>;
  reference_blob?: InputMaybe<order_by>;
  title?: InputMaybe<order_by>;
};

/** select columns of table "mb_views.nft_metadata" */
export type mb_views_nft_metadata_select_column =
  /** column name */
  | 'base_uri'
  /** column name */
  | 'description'
  /** column name */
  | 'extra'
  /** column name */
  | 'id'
  /** column name */
  | 'media'
  /** column name */
  | 'media_hash'
  /** column name */
  | 'metadata_content_flag'
  /** column name */
  | 'nft_contract_content_flag'
  /** column name */
  | 'nft_contract_created_at'
  /** column name */
  | 'nft_contract_icon'
  /** column name */
  | 'nft_contract_id'
  /** column name */
  | 'nft_contract_is_mintbase'
  /** column name */
  | 'nft_contract_name'
  /** column name */
  | 'nft_contract_owner_id'
  /** column name */
  | 'nft_contract_reference'
  /** column name */
  | 'nft_contract_spec'
  /** column name */
  | 'nft_contract_symbol'
  /** column name */
  | 'reference_blob'
  /** column name */
  | 'title';

/** Streaming cursor of the table "mb_views_nft_metadata" */
export type mb_views_nft_metadata_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: mb_views_nft_metadata_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type mb_views_nft_metadata_stream_cursor_value_input = {
  base_uri?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  extra?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  media_hash?: InputMaybe<Scalars['String']>;
  metadata_content_flag?: InputMaybe<Scalars['String']>;
  nft_contract_content_flag?: InputMaybe<Scalars['String']>;
  nft_contract_created_at?: InputMaybe<Scalars['timestamp']>;
  nft_contract_icon?: InputMaybe<Scalars['String']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
  nft_contract_is_mintbase?: InputMaybe<Scalars['Boolean']>;
  nft_contract_name?: InputMaybe<Scalars['String']>;
  nft_contract_owner_id?: InputMaybe<Scalars['String']>;
  nft_contract_reference?: InputMaybe<Scalars['String']>;
  nft_contract_spec?: InputMaybe<Scalars['String']>;
  nft_contract_symbol?: InputMaybe<Scalars['String']>;
  reference_blob?: InputMaybe<Scalars['jsonb']>;
  title?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "mb_views.nft_metadata_unburned" */
export type mb_views_nft_metadata_unburned = {
  base_uri?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  minted_timestamp?: Maybe<Scalars['timestamp']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  reference_blob?: Maybe<Scalars['jsonb']>;
  title?: Maybe<Scalars['String']>;
};


/** columns and relationships of "mb_views.nft_metadata_unburned" */
export type mb_views_nft_metadata_unburnedreference_blobArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "mb_views.nft_metadata_unburned" */
export type mb_views_nft_metadata_unburned_aggregate = {
  aggregate?: Maybe<mb_views_nft_metadata_unburned_aggregate_fields>;
  nodes: Array<mb_views_nft_metadata_unburned>;
};

/** aggregate fields of "mb_views.nft_metadata_unburned" */
export type mb_views_nft_metadata_unburned_aggregate_fields = {
  avg?: Maybe<mb_views_nft_metadata_unburned_avg_fields>;
  count: Scalars['Int'];
  max?: Maybe<mb_views_nft_metadata_unburned_max_fields>;
  min?: Maybe<mb_views_nft_metadata_unburned_min_fields>;
  stddev?: Maybe<mb_views_nft_metadata_unburned_stddev_fields>;
  stddev_pop?: Maybe<mb_views_nft_metadata_unburned_stddev_pop_fields>;
  stddev_samp?: Maybe<mb_views_nft_metadata_unburned_stddev_samp_fields>;
  sum?: Maybe<mb_views_nft_metadata_unburned_sum_fields>;
  var_pop?: Maybe<mb_views_nft_metadata_unburned_var_pop_fields>;
  var_samp?: Maybe<mb_views_nft_metadata_unburned_var_samp_fields>;
  variance?: Maybe<mb_views_nft_metadata_unburned_variance_fields>;
};


/** aggregate fields of "mb_views.nft_metadata_unburned" */
export type mb_views_nft_metadata_unburned_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<mb_views_nft_metadata_unburned_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type mb_views_nft_metadata_unburned_avg_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "mb_views.nft_metadata_unburned". All fields are combined with a logical 'AND'. */
export type mb_views_nft_metadata_unburned_bool_exp = {
  _and?: InputMaybe<Array<mb_views_nft_metadata_unburned_bool_exp>>;
  _not?: InputMaybe<mb_views_nft_metadata_unburned_bool_exp>;
  _or?: InputMaybe<Array<mb_views_nft_metadata_unburned_bool_exp>>;
  base_uri?: InputMaybe<String_comparison_exp>;
  content_flag?: InputMaybe<String_comparison_exp>;
  description?: InputMaybe<String_comparison_exp>;
  media?: InputMaybe<String_comparison_exp>;
  metadata_id?: InputMaybe<String_comparison_exp>;
  minted_timestamp?: InputMaybe<timestamp_comparison_exp>;
  minter?: InputMaybe<String_comparison_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  price?: InputMaybe<numeric_comparison_exp>;
  reference_blob?: InputMaybe<jsonb_comparison_exp>;
  title?: InputMaybe<String_comparison_exp>;
};

/** aggregate max on columns */
export type mb_views_nft_metadata_unburned_max_fields = {
  base_uri?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  minted_timestamp?: Maybe<Scalars['timestamp']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type mb_views_nft_metadata_unburned_min_fields = {
  base_uri?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  minted_timestamp?: Maybe<Scalars['timestamp']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  title?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "mb_views.nft_metadata_unburned". */
export type mb_views_nft_metadata_unburned_order_by = {
  base_uri?: InputMaybe<order_by>;
  content_flag?: InputMaybe<order_by>;
  description?: InputMaybe<order_by>;
  media?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  minted_timestamp?: InputMaybe<order_by>;
  minter?: InputMaybe<order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
  reference_blob?: InputMaybe<order_by>;
  title?: InputMaybe<order_by>;
};

/** select columns of table "mb_views.nft_metadata_unburned" */
export type mb_views_nft_metadata_unburned_select_column =
  /** column name */
  | 'base_uri'
  /** column name */
  | 'content_flag'
  /** column name */
  | 'description'
  /** column name */
  | 'media'
  /** column name */
  | 'metadata_id'
  /** column name */
  | 'minted_timestamp'
  /** column name */
  | 'minter'
  /** column name */
  | 'nft_contract_id'
  /** column name */
  | 'price'
  /** column name */
  | 'reference_blob'
  /** column name */
  | 'title';

/** aggregate stddev on columns */
export type mb_views_nft_metadata_unburned_stddev_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type mb_views_nft_metadata_unburned_stddev_pop_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type mb_views_nft_metadata_unburned_stddev_samp_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "mb_views_nft_metadata_unburned" */
export type mb_views_nft_metadata_unburned_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: mb_views_nft_metadata_unburned_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type mb_views_nft_metadata_unburned_stream_cursor_value_input = {
  base_uri?: InputMaybe<Scalars['String']>;
  content_flag?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  metadata_id?: InputMaybe<Scalars['String']>;
  minted_timestamp?: InputMaybe<Scalars['timestamp']>;
  minter?: InputMaybe<Scalars['String']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  reference_blob?: InputMaybe<Scalars['jsonb']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type mb_views_nft_metadata_unburned_sum_fields = {
  price?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type mb_views_nft_metadata_unburned_var_pop_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type mb_views_nft_metadata_unburned_var_samp_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type mb_views_nft_metadata_unburned_variance_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "mb_views.nft_owned_tokens" */
export type mb_views_nft_owned_tokens = {
  base_uri?: Maybe<Scalars['String']>;
  burned_receipt_id?: Maybe<Scalars['String']>;
  burned_timestamp?: Maybe<Scalars['timestamp']>;
  copies?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['timestamp']>;
  extra?: Maybe<Scalars['String']>;
  issued_at?: Maybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  listings: Array<nft_listings>;
  /** An aggregate relationship */
  listings_aggregate: nft_listings_aggregate;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  metadata_content_flag?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  mint_memo?: Maybe<Scalars['String']>;
  minted_receipt_id?: Maybe<Scalars['String']>;
  minted_timestamp?: Maybe<Scalars['timestamp']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']>;
  nft_contract_icon?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  nft_contract_is_mintbase?: Maybe<Scalars['Boolean']>;
  nft_contract_name?: Maybe<Scalars['String']>;
  nft_contract_owner_id?: Maybe<Scalars['String']>;
  nft_contract_reference?: Maybe<Scalars['String']>;
  nft_contract_spec?: Maybe<Scalars['String']>;
  nft_contract_symbol?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_blob?: Maybe<Scalars['jsonb']>;
  reference_hash?: Maybe<Scalars['String']>;
  royalties?: Maybe<Scalars['jsonb']>;
  royalties_percent?: Maybe<Scalars['Int']>;
  splits?: Maybe<Scalars['jsonb']>;
  starts_at?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};


/** columns and relationships of "mb_views.nft_owned_tokens" */
export type mb_views_nft_owned_tokenslistingsArgs = {
  distinct_on?: InputMaybe<Array<nft_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_listings_order_by>>;
  where?: InputMaybe<nft_listings_bool_exp>;
};


/** columns and relationships of "mb_views.nft_owned_tokens" */
export type mb_views_nft_owned_tokenslistings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_listings_order_by>>;
  where?: InputMaybe<nft_listings_bool_exp>;
};


/** columns and relationships of "mb_views.nft_owned_tokens" */
export type mb_views_nft_owned_tokensreference_blobArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "mb_views.nft_owned_tokens" */
export type mb_views_nft_owned_tokensroyaltiesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "mb_views.nft_owned_tokens" */
export type mb_views_nft_owned_tokenssplitsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "mb_views.nft_owned_tokens" */
export type mb_views_nft_owned_tokens_aggregate = {
  aggregate?: Maybe<mb_views_nft_owned_tokens_aggregate_fields>;
  nodes: Array<mb_views_nft_owned_tokens>;
};

/** aggregate fields of "mb_views.nft_owned_tokens" */
export type mb_views_nft_owned_tokens_aggregate_fields = {
  avg?: Maybe<mb_views_nft_owned_tokens_avg_fields>;
  count: Scalars['Int'];
  max?: Maybe<mb_views_nft_owned_tokens_max_fields>;
  min?: Maybe<mb_views_nft_owned_tokens_min_fields>;
  stddev?: Maybe<mb_views_nft_owned_tokens_stddev_fields>;
  stddev_pop?: Maybe<mb_views_nft_owned_tokens_stddev_pop_fields>;
  stddev_samp?: Maybe<mb_views_nft_owned_tokens_stddev_samp_fields>;
  sum?: Maybe<mb_views_nft_owned_tokens_sum_fields>;
  var_pop?: Maybe<mb_views_nft_owned_tokens_var_pop_fields>;
  var_samp?: Maybe<mb_views_nft_owned_tokens_var_samp_fields>;
  variance?: Maybe<mb_views_nft_owned_tokens_variance_fields>;
};


/** aggregate fields of "mb_views.nft_owned_tokens" */
export type mb_views_nft_owned_tokens_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<mb_views_nft_owned_tokens_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type mb_views_nft_owned_tokens_avg_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "mb_views.nft_owned_tokens". All fields are combined with a logical 'AND'. */
export type mb_views_nft_owned_tokens_bool_exp = {
  _and?: InputMaybe<Array<mb_views_nft_owned_tokens_bool_exp>>;
  _not?: InputMaybe<mb_views_nft_owned_tokens_bool_exp>;
  _or?: InputMaybe<Array<mb_views_nft_owned_tokens_bool_exp>>;
  base_uri?: InputMaybe<String_comparison_exp>;
  burned_receipt_id?: InputMaybe<String_comparison_exp>;
  burned_timestamp?: InputMaybe<timestamp_comparison_exp>;
  copies?: InputMaybe<bigint_comparison_exp>;
  description?: InputMaybe<String_comparison_exp>;
  expires_at?: InputMaybe<timestamp_comparison_exp>;
  extra?: InputMaybe<String_comparison_exp>;
  issued_at?: InputMaybe<timestamp_comparison_exp>;
  last_transfer_receipt_id?: InputMaybe<String_comparison_exp>;
  last_transfer_timestamp?: InputMaybe<timestamp_comparison_exp>;
  listings?: InputMaybe<nft_listings_bool_exp>;
  listings_aggregate?: InputMaybe<nft_listings_aggregate_bool_exp>;
  media?: InputMaybe<String_comparison_exp>;
  media_hash?: InputMaybe<String_comparison_exp>;
  metadata_content_flag?: InputMaybe<String_comparison_exp>;
  metadata_id?: InputMaybe<String_comparison_exp>;
  mint_memo?: InputMaybe<String_comparison_exp>;
  minted_receipt_id?: InputMaybe<String_comparison_exp>;
  minted_timestamp?: InputMaybe<timestamp_comparison_exp>;
  minter?: InputMaybe<String_comparison_exp>;
  nft_contract_created_at?: InputMaybe<timestamp_comparison_exp>;
  nft_contract_icon?: InputMaybe<String_comparison_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  nft_contract_is_mintbase?: InputMaybe<Boolean_comparison_exp>;
  nft_contract_name?: InputMaybe<String_comparison_exp>;
  nft_contract_owner_id?: InputMaybe<String_comparison_exp>;
  nft_contract_reference?: InputMaybe<String_comparison_exp>;
  nft_contract_spec?: InputMaybe<String_comparison_exp>;
  nft_contract_symbol?: InputMaybe<String_comparison_exp>;
  owner?: InputMaybe<String_comparison_exp>;
  reference?: InputMaybe<String_comparison_exp>;
  reference_blob?: InputMaybe<jsonb_comparison_exp>;
  reference_hash?: InputMaybe<String_comparison_exp>;
  royalties?: InputMaybe<jsonb_comparison_exp>;
  royalties_percent?: InputMaybe<Int_comparison_exp>;
  splits?: InputMaybe<jsonb_comparison_exp>;
  starts_at?: InputMaybe<timestamp_comparison_exp>;
  title?: InputMaybe<String_comparison_exp>;
  token_id?: InputMaybe<String_comparison_exp>;
  updated_at?: InputMaybe<timestamp_comparison_exp>;
};

/** aggregate max on columns */
export type mb_views_nft_owned_tokens_max_fields = {
  base_uri?: Maybe<Scalars['String']>;
  burned_receipt_id?: Maybe<Scalars['String']>;
  burned_timestamp?: Maybe<Scalars['timestamp']>;
  copies?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['timestamp']>;
  extra?: Maybe<Scalars['String']>;
  issued_at?: Maybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  metadata_content_flag?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  mint_memo?: Maybe<Scalars['String']>;
  minted_receipt_id?: Maybe<Scalars['String']>;
  minted_timestamp?: Maybe<Scalars['timestamp']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']>;
  nft_contract_icon?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  nft_contract_name?: Maybe<Scalars['String']>;
  nft_contract_owner_id?: Maybe<Scalars['String']>;
  nft_contract_reference?: Maybe<Scalars['String']>;
  nft_contract_spec?: Maybe<Scalars['String']>;
  nft_contract_symbol?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_hash?: Maybe<Scalars['String']>;
  royalties_percent?: Maybe<Scalars['Int']>;
  starts_at?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type mb_views_nft_owned_tokens_min_fields = {
  base_uri?: Maybe<Scalars['String']>;
  burned_receipt_id?: Maybe<Scalars['String']>;
  burned_timestamp?: Maybe<Scalars['timestamp']>;
  copies?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['timestamp']>;
  extra?: Maybe<Scalars['String']>;
  issued_at?: Maybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  metadata_content_flag?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  mint_memo?: Maybe<Scalars['String']>;
  minted_receipt_id?: Maybe<Scalars['String']>;
  minted_timestamp?: Maybe<Scalars['timestamp']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']>;
  nft_contract_icon?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  nft_contract_name?: Maybe<Scalars['String']>;
  nft_contract_owner_id?: Maybe<Scalars['String']>;
  nft_contract_reference?: Maybe<Scalars['String']>;
  nft_contract_spec?: Maybe<Scalars['String']>;
  nft_contract_symbol?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_hash?: Maybe<Scalars['String']>;
  royalties_percent?: Maybe<Scalars['Int']>;
  starts_at?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** Ordering options when selecting data from "mb_views.nft_owned_tokens". */
export type mb_views_nft_owned_tokens_order_by = {
  base_uri?: InputMaybe<order_by>;
  burned_receipt_id?: InputMaybe<order_by>;
  burned_timestamp?: InputMaybe<order_by>;
  copies?: InputMaybe<order_by>;
  description?: InputMaybe<order_by>;
  expires_at?: InputMaybe<order_by>;
  extra?: InputMaybe<order_by>;
  issued_at?: InputMaybe<order_by>;
  last_transfer_receipt_id?: InputMaybe<order_by>;
  last_transfer_timestamp?: InputMaybe<order_by>;
  listings_aggregate?: InputMaybe<nft_listings_aggregate_order_by>;
  media?: InputMaybe<order_by>;
  media_hash?: InputMaybe<order_by>;
  metadata_content_flag?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  mint_memo?: InputMaybe<order_by>;
  minted_receipt_id?: InputMaybe<order_by>;
  minted_timestamp?: InputMaybe<order_by>;
  minter?: InputMaybe<order_by>;
  nft_contract_created_at?: InputMaybe<order_by>;
  nft_contract_icon?: InputMaybe<order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  nft_contract_is_mintbase?: InputMaybe<order_by>;
  nft_contract_name?: InputMaybe<order_by>;
  nft_contract_owner_id?: InputMaybe<order_by>;
  nft_contract_reference?: InputMaybe<order_by>;
  nft_contract_spec?: InputMaybe<order_by>;
  nft_contract_symbol?: InputMaybe<order_by>;
  owner?: InputMaybe<order_by>;
  reference?: InputMaybe<order_by>;
  reference_blob?: InputMaybe<order_by>;
  reference_hash?: InputMaybe<order_by>;
  royalties?: InputMaybe<order_by>;
  royalties_percent?: InputMaybe<order_by>;
  splits?: InputMaybe<order_by>;
  starts_at?: InputMaybe<order_by>;
  title?: InputMaybe<order_by>;
  token_id?: InputMaybe<order_by>;
  updated_at?: InputMaybe<order_by>;
};

/** select columns of table "mb_views.nft_owned_tokens" */
export type mb_views_nft_owned_tokens_select_column =
  /** column name */
  | 'base_uri'
  /** column name */
  | 'burned_receipt_id'
  /** column name */
  | 'burned_timestamp'
  /** column name */
  | 'copies'
  /** column name */
  | 'description'
  /** column name */
  | 'expires_at'
  /** column name */
  | 'extra'
  /** column name */
  | 'issued_at'
  /** column name */
  | 'last_transfer_receipt_id'
  /** column name */
  | 'last_transfer_timestamp'
  /** column name */
  | 'media'
  /** column name */
  | 'media_hash'
  /** column name */
  | 'metadata_content_flag'
  /** column name */
  | 'metadata_id'
  /** column name */
  | 'mint_memo'
  /** column name */
  | 'minted_receipt_id'
  /** column name */
  | 'minted_timestamp'
  /** column name */
  | 'minter'
  /** column name */
  | 'nft_contract_created_at'
  /** column name */
  | 'nft_contract_icon'
  /** column name */
  | 'nft_contract_id'
  /** column name */
  | 'nft_contract_is_mintbase'
  /** column name */
  | 'nft_contract_name'
  /** column name */
  | 'nft_contract_owner_id'
  /** column name */
  | 'nft_contract_reference'
  /** column name */
  | 'nft_contract_spec'
  /** column name */
  | 'nft_contract_symbol'
  /** column name */
  | 'owner'
  /** column name */
  | 'reference'
  /** column name */
  | 'reference_blob'
  /** column name */
  | 'reference_hash'
  /** column name */
  | 'royalties'
  /** column name */
  | 'royalties_percent'
  /** column name */
  | 'splits'
  /** column name */
  | 'starts_at'
  /** column name */
  | 'title'
  /** column name */
  | 'token_id'
  /** column name */
  | 'updated_at';

/** aggregate stddev on columns */
export type mb_views_nft_owned_tokens_stddev_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type mb_views_nft_owned_tokens_stddev_pop_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type mb_views_nft_owned_tokens_stddev_samp_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "mb_views_nft_owned_tokens" */
export type mb_views_nft_owned_tokens_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: mb_views_nft_owned_tokens_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type mb_views_nft_owned_tokens_stream_cursor_value_input = {
  base_uri?: InputMaybe<Scalars['String']>;
  burned_receipt_id?: InputMaybe<Scalars['String']>;
  burned_timestamp?: InputMaybe<Scalars['timestamp']>;
  copies?: InputMaybe<Scalars['bigint']>;
  description?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['timestamp']>;
  extra?: InputMaybe<Scalars['String']>;
  issued_at?: InputMaybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: InputMaybe<Scalars['String']>;
  last_transfer_timestamp?: InputMaybe<Scalars['timestamp']>;
  media?: InputMaybe<Scalars['String']>;
  media_hash?: InputMaybe<Scalars['String']>;
  metadata_content_flag?: InputMaybe<Scalars['String']>;
  metadata_id?: InputMaybe<Scalars['String']>;
  mint_memo?: InputMaybe<Scalars['String']>;
  minted_receipt_id?: InputMaybe<Scalars['String']>;
  minted_timestamp?: InputMaybe<Scalars['timestamp']>;
  minter?: InputMaybe<Scalars['String']>;
  nft_contract_created_at?: InputMaybe<Scalars['timestamp']>;
  nft_contract_icon?: InputMaybe<Scalars['String']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
  nft_contract_is_mintbase?: InputMaybe<Scalars['Boolean']>;
  nft_contract_name?: InputMaybe<Scalars['String']>;
  nft_contract_owner_id?: InputMaybe<Scalars['String']>;
  nft_contract_reference?: InputMaybe<Scalars['String']>;
  nft_contract_spec?: InputMaybe<Scalars['String']>;
  nft_contract_symbol?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  reference?: InputMaybe<Scalars['String']>;
  reference_blob?: InputMaybe<Scalars['jsonb']>;
  reference_hash?: InputMaybe<Scalars['String']>;
  royalties?: InputMaybe<Scalars['jsonb']>;
  royalties_percent?: InputMaybe<Scalars['Int']>;
  splits?: InputMaybe<Scalars['jsonb']>;
  starts_at?: InputMaybe<Scalars['timestamp']>;
  title?: InputMaybe<Scalars['String']>;
  token_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type mb_views_nft_owned_tokens_sum_fields = {
  copies?: Maybe<Scalars['bigint']>;
  royalties_percent?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type mb_views_nft_owned_tokens_var_pop_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type mb_views_nft_owned_tokens_var_samp_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type mb_views_nft_owned_tokens_variance_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "mb_views.nft_tokens" */
export type mb_views_nft_tokens = {
  base_uri?: Maybe<Scalars['String']>;
  burned_receipt_id?: Maybe<Scalars['String']>;
  burned_timestamp?: Maybe<Scalars['timestamp']>;
  copies?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['timestamp']>;
  extra?: Maybe<Scalars['String']>;
  issued_at?: Maybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  listings: Array<nft_listings>;
  /** An aggregate relationship */
  listings_aggregate: nft_listings_aggregate;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  metadata_content_flag?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  mint_memo?: Maybe<Scalars['String']>;
  minted_receipt_id?: Maybe<Scalars['String']>;
  minted_timestamp?: Maybe<Scalars['timestamp']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_content_flag?: Maybe<Scalars['String']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']>;
  nft_contract_icon?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  nft_contract_is_mintbase?: Maybe<Scalars['Boolean']>;
  nft_contract_name?: Maybe<Scalars['String']>;
  nft_contract_owner_id?: Maybe<Scalars['String']>;
  nft_contract_reference?: Maybe<Scalars['String']>;
  nft_contract_spec?: Maybe<Scalars['String']>;
  nft_contract_symbol?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_blob?: Maybe<Scalars['jsonb']>;
  reference_hash?: Maybe<Scalars['String']>;
  royalties?: Maybe<Scalars['jsonb']>;
  royalties_percent?: Maybe<Scalars['Int']>;
  splits?: Maybe<Scalars['jsonb']>;
  starts_at?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};


/** columns and relationships of "mb_views.nft_tokens" */
export type mb_views_nft_tokenslistingsArgs = {
  distinct_on?: InputMaybe<Array<nft_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_listings_order_by>>;
  where?: InputMaybe<nft_listings_bool_exp>;
};


/** columns and relationships of "mb_views.nft_tokens" */
export type mb_views_nft_tokenslistings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_listings_order_by>>;
  where?: InputMaybe<nft_listings_bool_exp>;
};


/** columns and relationships of "mb_views.nft_tokens" */
export type mb_views_nft_tokensreference_blobArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "mb_views.nft_tokens" */
export type mb_views_nft_tokensroyaltiesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "mb_views.nft_tokens" */
export type mb_views_nft_tokenssplitsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "mb_views.nft_tokens" */
export type mb_views_nft_tokens_aggregate = {
  aggregate?: Maybe<mb_views_nft_tokens_aggregate_fields>;
  nodes: Array<mb_views_nft_tokens>;
};

/** aggregate fields of "mb_views.nft_tokens" */
export type mb_views_nft_tokens_aggregate_fields = {
  avg?: Maybe<mb_views_nft_tokens_avg_fields>;
  count: Scalars['Int'];
  max?: Maybe<mb_views_nft_tokens_max_fields>;
  min?: Maybe<mb_views_nft_tokens_min_fields>;
  stddev?: Maybe<mb_views_nft_tokens_stddev_fields>;
  stddev_pop?: Maybe<mb_views_nft_tokens_stddev_pop_fields>;
  stddev_samp?: Maybe<mb_views_nft_tokens_stddev_samp_fields>;
  sum?: Maybe<mb_views_nft_tokens_sum_fields>;
  var_pop?: Maybe<mb_views_nft_tokens_var_pop_fields>;
  var_samp?: Maybe<mb_views_nft_tokens_var_samp_fields>;
  variance?: Maybe<mb_views_nft_tokens_variance_fields>;
};


/** aggregate fields of "mb_views.nft_tokens" */
export type mb_views_nft_tokens_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<mb_views_nft_tokens_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type mb_views_nft_tokens_avg_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "mb_views.nft_tokens". All fields are combined with a logical 'AND'. */
export type mb_views_nft_tokens_bool_exp = {
  _and?: InputMaybe<Array<mb_views_nft_tokens_bool_exp>>;
  _not?: InputMaybe<mb_views_nft_tokens_bool_exp>;
  _or?: InputMaybe<Array<mb_views_nft_tokens_bool_exp>>;
  base_uri?: InputMaybe<String_comparison_exp>;
  burned_receipt_id?: InputMaybe<String_comparison_exp>;
  burned_timestamp?: InputMaybe<timestamp_comparison_exp>;
  copies?: InputMaybe<bigint_comparison_exp>;
  description?: InputMaybe<String_comparison_exp>;
  expires_at?: InputMaybe<timestamp_comparison_exp>;
  extra?: InputMaybe<String_comparison_exp>;
  issued_at?: InputMaybe<timestamp_comparison_exp>;
  last_transfer_receipt_id?: InputMaybe<String_comparison_exp>;
  last_transfer_timestamp?: InputMaybe<timestamp_comparison_exp>;
  listings?: InputMaybe<nft_listings_bool_exp>;
  listings_aggregate?: InputMaybe<nft_listings_aggregate_bool_exp>;
  media?: InputMaybe<String_comparison_exp>;
  media_hash?: InputMaybe<String_comparison_exp>;
  metadata_content_flag?: InputMaybe<String_comparison_exp>;
  metadata_id?: InputMaybe<String_comparison_exp>;
  mint_memo?: InputMaybe<String_comparison_exp>;
  minted_receipt_id?: InputMaybe<String_comparison_exp>;
  minted_timestamp?: InputMaybe<timestamp_comparison_exp>;
  minter?: InputMaybe<String_comparison_exp>;
  nft_contract_content_flag?: InputMaybe<String_comparison_exp>;
  nft_contract_created_at?: InputMaybe<timestamp_comparison_exp>;
  nft_contract_icon?: InputMaybe<String_comparison_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  nft_contract_is_mintbase?: InputMaybe<Boolean_comparison_exp>;
  nft_contract_name?: InputMaybe<String_comparison_exp>;
  nft_contract_owner_id?: InputMaybe<String_comparison_exp>;
  nft_contract_reference?: InputMaybe<String_comparison_exp>;
  nft_contract_spec?: InputMaybe<String_comparison_exp>;
  nft_contract_symbol?: InputMaybe<String_comparison_exp>;
  owner?: InputMaybe<String_comparison_exp>;
  reference?: InputMaybe<String_comparison_exp>;
  reference_blob?: InputMaybe<jsonb_comparison_exp>;
  reference_hash?: InputMaybe<String_comparison_exp>;
  royalties?: InputMaybe<jsonb_comparison_exp>;
  royalties_percent?: InputMaybe<Int_comparison_exp>;
  splits?: InputMaybe<jsonb_comparison_exp>;
  starts_at?: InputMaybe<timestamp_comparison_exp>;
  title?: InputMaybe<String_comparison_exp>;
  token_id?: InputMaybe<String_comparison_exp>;
  updated_at?: InputMaybe<timestamp_comparison_exp>;
};

/** aggregate max on columns */
export type mb_views_nft_tokens_max_fields = {
  base_uri?: Maybe<Scalars['String']>;
  burned_receipt_id?: Maybe<Scalars['String']>;
  burned_timestamp?: Maybe<Scalars['timestamp']>;
  copies?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['timestamp']>;
  extra?: Maybe<Scalars['String']>;
  issued_at?: Maybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  metadata_content_flag?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  mint_memo?: Maybe<Scalars['String']>;
  minted_receipt_id?: Maybe<Scalars['String']>;
  minted_timestamp?: Maybe<Scalars['timestamp']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_content_flag?: Maybe<Scalars['String']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']>;
  nft_contract_icon?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  nft_contract_name?: Maybe<Scalars['String']>;
  nft_contract_owner_id?: Maybe<Scalars['String']>;
  nft_contract_reference?: Maybe<Scalars['String']>;
  nft_contract_spec?: Maybe<Scalars['String']>;
  nft_contract_symbol?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_hash?: Maybe<Scalars['String']>;
  royalties_percent?: Maybe<Scalars['Int']>;
  starts_at?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type mb_views_nft_tokens_min_fields = {
  base_uri?: Maybe<Scalars['String']>;
  burned_receipt_id?: Maybe<Scalars['String']>;
  burned_timestamp?: Maybe<Scalars['timestamp']>;
  copies?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['timestamp']>;
  extra?: Maybe<Scalars['String']>;
  issued_at?: Maybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  metadata_content_flag?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  mint_memo?: Maybe<Scalars['String']>;
  minted_receipt_id?: Maybe<Scalars['String']>;
  minted_timestamp?: Maybe<Scalars['timestamp']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_content_flag?: Maybe<Scalars['String']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']>;
  nft_contract_icon?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  nft_contract_name?: Maybe<Scalars['String']>;
  nft_contract_owner_id?: Maybe<Scalars['String']>;
  nft_contract_reference?: Maybe<Scalars['String']>;
  nft_contract_spec?: Maybe<Scalars['String']>;
  nft_contract_symbol?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_hash?: Maybe<Scalars['String']>;
  royalties_percent?: Maybe<Scalars['Int']>;
  starts_at?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** Ordering options when selecting data from "mb_views.nft_tokens". */
export type mb_views_nft_tokens_order_by = {
  base_uri?: InputMaybe<order_by>;
  burned_receipt_id?: InputMaybe<order_by>;
  burned_timestamp?: InputMaybe<order_by>;
  copies?: InputMaybe<order_by>;
  description?: InputMaybe<order_by>;
  expires_at?: InputMaybe<order_by>;
  extra?: InputMaybe<order_by>;
  issued_at?: InputMaybe<order_by>;
  last_transfer_receipt_id?: InputMaybe<order_by>;
  last_transfer_timestamp?: InputMaybe<order_by>;
  listings_aggregate?: InputMaybe<nft_listings_aggregate_order_by>;
  media?: InputMaybe<order_by>;
  media_hash?: InputMaybe<order_by>;
  metadata_content_flag?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  mint_memo?: InputMaybe<order_by>;
  minted_receipt_id?: InputMaybe<order_by>;
  minted_timestamp?: InputMaybe<order_by>;
  minter?: InputMaybe<order_by>;
  nft_contract_content_flag?: InputMaybe<order_by>;
  nft_contract_created_at?: InputMaybe<order_by>;
  nft_contract_icon?: InputMaybe<order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  nft_contract_is_mintbase?: InputMaybe<order_by>;
  nft_contract_name?: InputMaybe<order_by>;
  nft_contract_owner_id?: InputMaybe<order_by>;
  nft_contract_reference?: InputMaybe<order_by>;
  nft_contract_spec?: InputMaybe<order_by>;
  nft_contract_symbol?: InputMaybe<order_by>;
  owner?: InputMaybe<order_by>;
  reference?: InputMaybe<order_by>;
  reference_blob?: InputMaybe<order_by>;
  reference_hash?: InputMaybe<order_by>;
  royalties?: InputMaybe<order_by>;
  royalties_percent?: InputMaybe<order_by>;
  splits?: InputMaybe<order_by>;
  starts_at?: InputMaybe<order_by>;
  title?: InputMaybe<order_by>;
  token_id?: InputMaybe<order_by>;
  updated_at?: InputMaybe<order_by>;
};

/** select columns of table "mb_views.nft_tokens" */
export type mb_views_nft_tokens_select_column =
  /** column name */
  | 'base_uri'
  /** column name */
  | 'burned_receipt_id'
  /** column name */
  | 'burned_timestamp'
  /** column name */
  | 'copies'
  /** column name */
  | 'description'
  /** column name */
  | 'expires_at'
  /** column name */
  | 'extra'
  /** column name */
  | 'issued_at'
  /** column name */
  | 'last_transfer_receipt_id'
  /** column name */
  | 'last_transfer_timestamp'
  /** column name */
  | 'media'
  /** column name */
  | 'media_hash'
  /** column name */
  | 'metadata_content_flag'
  /** column name */
  | 'metadata_id'
  /** column name */
  | 'mint_memo'
  /** column name */
  | 'minted_receipt_id'
  /** column name */
  | 'minted_timestamp'
  /** column name */
  | 'minter'
  /** column name */
  | 'nft_contract_content_flag'
  /** column name */
  | 'nft_contract_created_at'
  /** column name */
  | 'nft_contract_icon'
  /** column name */
  | 'nft_contract_id'
  /** column name */
  | 'nft_contract_is_mintbase'
  /** column name */
  | 'nft_contract_name'
  /** column name */
  | 'nft_contract_owner_id'
  /** column name */
  | 'nft_contract_reference'
  /** column name */
  | 'nft_contract_spec'
  /** column name */
  | 'nft_contract_symbol'
  /** column name */
  | 'owner'
  /** column name */
  | 'reference'
  /** column name */
  | 'reference_blob'
  /** column name */
  | 'reference_hash'
  /** column name */
  | 'royalties'
  /** column name */
  | 'royalties_percent'
  /** column name */
  | 'splits'
  /** column name */
  | 'starts_at'
  /** column name */
  | 'title'
  /** column name */
  | 'token_id'
  /** column name */
  | 'updated_at';

/** aggregate stddev on columns */
export type mb_views_nft_tokens_stddev_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type mb_views_nft_tokens_stddev_pop_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type mb_views_nft_tokens_stddev_samp_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "mb_views_nft_tokens" */
export type mb_views_nft_tokens_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: mb_views_nft_tokens_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type mb_views_nft_tokens_stream_cursor_value_input = {
  base_uri?: InputMaybe<Scalars['String']>;
  burned_receipt_id?: InputMaybe<Scalars['String']>;
  burned_timestamp?: InputMaybe<Scalars['timestamp']>;
  copies?: InputMaybe<Scalars['bigint']>;
  description?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['timestamp']>;
  extra?: InputMaybe<Scalars['String']>;
  issued_at?: InputMaybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: InputMaybe<Scalars['String']>;
  last_transfer_timestamp?: InputMaybe<Scalars['timestamp']>;
  media?: InputMaybe<Scalars['String']>;
  media_hash?: InputMaybe<Scalars['String']>;
  metadata_content_flag?: InputMaybe<Scalars['String']>;
  metadata_id?: InputMaybe<Scalars['String']>;
  mint_memo?: InputMaybe<Scalars['String']>;
  minted_receipt_id?: InputMaybe<Scalars['String']>;
  minted_timestamp?: InputMaybe<Scalars['timestamp']>;
  minter?: InputMaybe<Scalars['String']>;
  nft_contract_content_flag?: InputMaybe<Scalars['String']>;
  nft_contract_created_at?: InputMaybe<Scalars['timestamp']>;
  nft_contract_icon?: InputMaybe<Scalars['String']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
  nft_contract_is_mintbase?: InputMaybe<Scalars['Boolean']>;
  nft_contract_name?: InputMaybe<Scalars['String']>;
  nft_contract_owner_id?: InputMaybe<Scalars['String']>;
  nft_contract_reference?: InputMaybe<Scalars['String']>;
  nft_contract_spec?: InputMaybe<Scalars['String']>;
  nft_contract_symbol?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  reference?: InputMaybe<Scalars['String']>;
  reference_blob?: InputMaybe<Scalars['jsonb']>;
  reference_hash?: InputMaybe<Scalars['String']>;
  royalties?: InputMaybe<Scalars['jsonb']>;
  royalties_percent?: InputMaybe<Scalars['Int']>;
  splits?: InputMaybe<Scalars['jsonb']>;
  starts_at?: InputMaybe<Scalars['timestamp']>;
  title?: InputMaybe<Scalars['String']>;
  token_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type mb_views_nft_tokens_sum_fields = {
  copies?: Maybe<Scalars['bigint']>;
  royalties_percent?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type mb_views_nft_tokens_var_pop_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type mb_views_nft_tokens_var_samp_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type mb_views_nft_tokens_variance_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "mb_views.nft_tokens_with_listing" */
export type mb_views_nft_tokens_with_listing = {
  content_flag?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  reference_blob?: Maybe<Scalars['jsonb']>;
  token_id?: Maybe<Scalars['String']>;
};


/** columns and relationships of "mb_views.nft_tokens_with_listing" */
export type mb_views_nft_tokens_with_listingreference_blobArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "mb_views.nft_tokens_with_listing" */
export type mb_views_nft_tokens_with_listing_aggregate = {
  aggregate?: Maybe<mb_views_nft_tokens_with_listing_aggregate_fields>;
  nodes: Array<mb_views_nft_tokens_with_listing>;
};

/** aggregate fields of "mb_views.nft_tokens_with_listing" */
export type mb_views_nft_tokens_with_listing_aggregate_fields = {
  avg?: Maybe<mb_views_nft_tokens_with_listing_avg_fields>;
  count: Scalars['Int'];
  max?: Maybe<mb_views_nft_tokens_with_listing_max_fields>;
  min?: Maybe<mb_views_nft_tokens_with_listing_min_fields>;
  stddev?: Maybe<mb_views_nft_tokens_with_listing_stddev_fields>;
  stddev_pop?: Maybe<mb_views_nft_tokens_with_listing_stddev_pop_fields>;
  stddev_samp?: Maybe<mb_views_nft_tokens_with_listing_stddev_samp_fields>;
  sum?: Maybe<mb_views_nft_tokens_with_listing_sum_fields>;
  var_pop?: Maybe<mb_views_nft_tokens_with_listing_var_pop_fields>;
  var_samp?: Maybe<mb_views_nft_tokens_with_listing_var_samp_fields>;
  variance?: Maybe<mb_views_nft_tokens_with_listing_variance_fields>;
};


/** aggregate fields of "mb_views.nft_tokens_with_listing" */
export type mb_views_nft_tokens_with_listing_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<mb_views_nft_tokens_with_listing_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type mb_views_nft_tokens_with_listing_avg_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "mb_views.nft_tokens_with_listing". All fields are combined with a logical 'AND'. */
export type mb_views_nft_tokens_with_listing_bool_exp = {
  _and?: InputMaybe<Array<mb_views_nft_tokens_with_listing_bool_exp>>;
  _not?: InputMaybe<mb_views_nft_tokens_with_listing_bool_exp>;
  _or?: InputMaybe<Array<mb_views_nft_tokens_with_listing_bool_exp>>;
  content_flag?: InputMaybe<String_comparison_exp>;
  metadata_id?: InputMaybe<String_comparison_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  owner?: InputMaybe<String_comparison_exp>;
  price?: InputMaybe<numeric_comparison_exp>;
  reference_blob?: InputMaybe<jsonb_comparison_exp>;
  token_id?: InputMaybe<String_comparison_exp>;
};

/** aggregate max on columns */
export type mb_views_nft_tokens_with_listing_max_fields = {
  content_flag?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  token_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type mb_views_nft_tokens_with_listing_min_fields = {
  content_flag?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  token_id?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "mb_views.nft_tokens_with_listing". */
export type mb_views_nft_tokens_with_listing_order_by = {
  content_flag?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  owner?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
  reference_blob?: InputMaybe<order_by>;
  token_id?: InputMaybe<order_by>;
};

/** select columns of table "mb_views.nft_tokens_with_listing" */
export type mb_views_nft_tokens_with_listing_select_column =
  /** column name */
  | 'content_flag'
  /** column name */
  | 'metadata_id'
  /** column name */
  | 'nft_contract_id'
  /** column name */
  | 'owner'
  /** column name */
  | 'price'
  /** column name */
  | 'reference_blob'
  /** column name */
  | 'token_id';

/** aggregate stddev on columns */
export type mb_views_nft_tokens_with_listing_stddev_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type mb_views_nft_tokens_with_listing_stddev_pop_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type mb_views_nft_tokens_with_listing_stddev_samp_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "mb_views_nft_tokens_with_listing" */
export type mb_views_nft_tokens_with_listing_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: mb_views_nft_tokens_with_listing_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type mb_views_nft_tokens_with_listing_stream_cursor_value_input = {
  content_flag?: InputMaybe<Scalars['String']>;
  metadata_id?: InputMaybe<Scalars['String']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  reference_blob?: InputMaybe<Scalars['jsonb']>;
  token_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type mb_views_nft_tokens_with_listing_sum_fields = {
  price?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type mb_views_nft_tokens_with_listing_var_pop_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type mb_views_nft_tokens_with_listing_var_samp_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type mb_views_nft_tokens_with_listing_variance_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "mb_views.nft_tokens_with_media_type" */
export type mb_views_nft_tokens_with_media_type = {
  base_uri?: Maybe<Scalars['String']>;
  burned_receipt_id?: Maybe<Scalars['String']>;
  burned_timestamp?: Maybe<Scalars['timestamp']>;
  copies?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['timestamp']>;
  extra?: Maybe<Scalars['String']>;
  forever_media_type?: Maybe<Scalars['String']>;
  forever_media_url?: Maybe<Scalars['String']>;
  issued_at?: Maybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']>;
  /** An array relationship */
  listings: Array<nft_listings>;
  /** An aggregate relationship */
  listings_aggregate: nft_listings_aggregate;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  metadata_content_flag?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  mint_memo?: Maybe<Scalars['String']>;
  minted_receipt_id?: Maybe<Scalars['String']>;
  minted_timestamp?: Maybe<Scalars['timestamp']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_content_flag?: Maybe<Scalars['String']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']>;
  nft_contract_icon?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  nft_contract_is_mintbase?: Maybe<Scalars['Boolean']>;
  nft_contract_name?: Maybe<Scalars['String']>;
  nft_contract_owner_id?: Maybe<Scalars['String']>;
  nft_contract_reference?: Maybe<Scalars['String']>;
  nft_contract_spec?: Maybe<Scalars['String']>;
  nft_contract_symbol?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_blob?: Maybe<Scalars['jsonb']>;
  reference_hash?: Maybe<Scalars['String']>;
  royalties?: Maybe<Scalars['jsonb']>;
  royalties_percent?: Maybe<Scalars['Int']>;
  splits?: Maybe<Scalars['jsonb']>;
  starts_at?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};


/** columns and relationships of "mb_views.nft_tokens_with_media_type" */
export type mb_views_nft_tokens_with_media_typelistingsArgs = {
  distinct_on?: InputMaybe<Array<nft_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_listings_order_by>>;
  where?: InputMaybe<nft_listings_bool_exp>;
};


/** columns and relationships of "mb_views.nft_tokens_with_media_type" */
export type mb_views_nft_tokens_with_media_typelistings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_listings_order_by>>;
  where?: InputMaybe<nft_listings_bool_exp>;
};


/** columns and relationships of "mb_views.nft_tokens_with_media_type" */
export type mb_views_nft_tokens_with_media_typereference_blobArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "mb_views.nft_tokens_with_media_type" */
export type mb_views_nft_tokens_with_media_typeroyaltiesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "mb_views.nft_tokens_with_media_type" */
export type mb_views_nft_tokens_with_media_typesplitsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "mb_views.nft_tokens_with_media_type" */
export type mb_views_nft_tokens_with_media_type_aggregate = {
  aggregate?: Maybe<mb_views_nft_tokens_with_media_type_aggregate_fields>;
  nodes: Array<mb_views_nft_tokens_with_media_type>;
};

/** aggregate fields of "mb_views.nft_tokens_with_media_type" */
export type mb_views_nft_tokens_with_media_type_aggregate_fields = {
  avg?: Maybe<mb_views_nft_tokens_with_media_type_avg_fields>;
  count: Scalars['Int'];
  max?: Maybe<mb_views_nft_tokens_with_media_type_max_fields>;
  min?: Maybe<mb_views_nft_tokens_with_media_type_min_fields>;
  stddev?: Maybe<mb_views_nft_tokens_with_media_type_stddev_fields>;
  stddev_pop?: Maybe<mb_views_nft_tokens_with_media_type_stddev_pop_fields>;
  stddev_samp?: Maybe<mb_views_nft_tokens_with_media_type_stddev_samp_fields>;
  sum?: Maybe<mb_views_nft_tokens_with_media_type_sum_fields>;
  var_pop?: Maybe<mb_views_nft_tokens_with_media_type_var_pop_fields>;
  var_samp?: Maybe<mb_views_nft_tokens_with_media_type_var_samp_fields>;
  variance?: Maybe<mb_views_nft_tokens_with_media_type_variance_fields>;
};


/** aggregate fields of "mb_views.nft_tokens_with_media_type" */
export type mb_views_nft_tokens_with_media_type_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<mb_views_nft_tokens_with_media_type_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type mb_views_nft_tokens_with_media_type_avg_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "mb_views.nft_tokens_with_media_type". All fields are combined with a logical 'AND'. */
export type mb_views_nft_tokens_with_media_type_bool_exp = {
  _and?: InputMaybe<Array<mb_views_nft_tokens_with_media_type_bool_exp>>;
  _not?: InputMaybe<mb_views_nft_tokens_with_media_type_bool_exp>;
  _or?: InputMaybe<Array<mb_views_nft_tokens_with_media_type_bool_exp>>;
  base_uri?: InputMaybe<String_comparison_exp>;
  burned_receipt_id?: InputMaybe<String_comparison_exp>;
  burned_timestamp?: InputMaybe<timestamp_comparison_exp>;
  copies?: InputMaybe<bigint_comparison_exp>;
  description?: InputMaybe<String_comparison_exp>;
  expires_at?: InputMaybe<timestamp_comparison_exp>;
  extra?: InputMaybe<String_comparison_exp>;
  forever_media_type?: InputMaybe<String_comparison_exp>;
  forever_media_url?: InputMaybe<String_comparison_exp>;
  issued_at?: InputMaybe<timestamp_comparison_exp>;
  last_transfer_receipt_id?: InputMaybe<String_comparison_exp>;
  last_transfer_timestamp?: InputMaybe<timestamp_comparison_exp>;
  listings?: InputMaybe<nft_listings_bool_exp>;
  listings_aggregate?: InputMaybe<nft_listings_aggregate_bool_exp>;
  media?: InputMaybe<String_comparison_exp>;
  media_hash?: InputMaybe<String_comparison_exp>;
  metadata_content_flag?: InputMaybe<String_comparison_exp>;
  metadata_id?: InputMaybe<String_comparison_exp>;
  mint_memo?: InputMaybe<String_comparison_exp>;
  minted_receipt_id?: InputMaybe<String_comparison_exp>;
  minted_timestamp?: InputMaybe<timestamp_comparison_exp>;
  minter?: InputMaybe<String_comparison_exp>;
  nft_contract_content_flag?: InputMaybe<String_comparison_exp>;
  nft_contract_created_at?: InputMaybe<timestamp_comparison_exp>;
  nft_contract_icon?: InputMaybe<String_comparison_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  nft_contract_is_mintbase?: InputMaybe<Boolean_comparison_exp>;
  nft_contract_name?: InputMaybe<String_comparison_exp>;
  nft_contract_owner_id?: InputMaybe<String_comparison_exp>;
  nft_contract_reference?: InputMaybe<String_comparison_exp>;
  nft_contract_spec?: InputMaybe<String_comparison_exp>;
  nft_contract_symbol?: InputMaybe<String_comparison_exp>;
  owner?: InputMaybe<String_comparison_exp>;
  reference?: InputMaybe<String_comparison_exp>;
  reference_blob?: InputMaybe<jsonb_comparison_exp>;
  reference_hash?: InputMaybe<String_comparison_exp>;
  royalties?: InputMaybe<jsonb_comparison_exp>;
  royalties_percent?: InputMaybe<Int_comparison_exp>;
  splits?: InputMaybe<jsonb_comparison_exp>;
  starts_at?: InputMaybe<timestamp_comparison_exp>;
  title?: InputMaybe<String_comparison_exp>;
  token_id?: InputMaybe<String_comparison_exp>;
  updated_at?: InputMaybe<timestamp_comparison_exp>;
};

/** aggregate max on columns */
export type mb_views_nft_tokens_with_media_type_max_fields = {
  base_uri?: Maybe<Scalars['String']>;
  burned_receipt_id?: Maybe<Scalars['String']>;
  burned_timestamp?: Maybe<Scalars['timestamp']>;
  copies?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['timestamp']>;
  extra?: Maybe<Scalars['String']>;
  forever_media_type?: Maybe<Scalars['String']>;
  forever_media_url?: Maybe<Scalars['String']>;
  issued_at?: Maybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  metadata_content_flag?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  mint_memo?: Maybe<Scalars['String']>;
  minted_receipt_id?: Maybe<Scalars['String']>;
  minted_timestamp?: Maybe<Scalars['timestamp']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_content_flag?: Maybe<Scalars['String']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']>;
  nft_contract_icon?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  nft_contract_name?: Maybe<Scalars['String']>;
  nft_contract_owner_id?: Maybe<Scalars['String']>;
  nft_contract_reference?: Maybe<Scalars['String']>;
  nft_contract_spec?: Maybe<Scalars['String']>;
  nft_contract_symbol?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_hash?: Maybe<Scalars['String']>;
  royalties_percent?: Maybe<Scalars['Int']>;
  starts_at?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type mb_views_nft_tokens_with_media_type_min_fields = {
  base_uri?: Maybe<Scalars['String']>;
  burned_receipt_id?: Maybe<Scalars['String']>;
  burned_timestamp?: Maybe<Scalars['timestamp']>;
  copies?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['timestamp']>;
  extra?: Maybe<Scalars['String']>;
  forever_media_type?: Maybe<Scalars['String']>;
  forever_media_url?: Maybe<Scalars['String']>;
  issued_at?: Maybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  metadata_content_flag?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  mint_memo?: Maybe<Scalars['String']>;
  minted_receipt_id?: Maybe<Scalars['String']>;
  minted_timestamp?: Maybe<Scalars['timestamp']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_content_flag?: Maybe<Scalars['String']>;
  nft_contract_created_at?: Maybe<Scalars['timestamp']>;
  nft_contract_icon?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  nft_contract_name?: Maybe<Scalars['String']>;
  nft_contract_owner_id?: Maybe<Scalars['String']>;
  nft_contract_reference?: Maybe<Scalars['String']>;
  nft_contract_spec?: Maybe<Scalars['String']>;
  nft_contract_symbol?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_hash?: Maybe<Scalars['String']>;
  royalties_percent?: Maybe<Scalars['Int']>;
  starts_at?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** Ordering options when selecting data from "mb_views.nft_tokens_with_media_type". */
export type mb_views_nft_tokens_with_media_type_order_by = {
  base_uri?: InputMaybe<order_by>;
  burned_receipt_id?: InputMaybe<order_by>;
  burned_timestamp?: InputMaybe<order_by>;
  copies?: InputMaybe<order_by>;
  description?: InputMaybe<order_by>;
  expires_at?: InputMaybe<order_by>;
  extra?: InputMaybe<order_by>;
  forever_media_type?: InputMaybe<order_by>;
  forever_media_url?: InputMaybe<order_by>;
  issued_at?: InputMaybe<order_by>;
  last_transfer_receipt_id?: InputMaybe<order_by>;
  last_transfer_timestamp?: InputMaybe<order_by>;
  listings_aggregate?: InputMaybe<nft_listings_aggregate_order_by>;
  media?: InputMaybe<order_by>;
  media_hash?: InputMaybe<order_by>;
  metadata_content_flag?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  mint_memo?: InputMaybe<order_by>;
  minted_receipt_id?: InputMaybe<order_by>;
  minted_timestamp?: InputMaybe<order_by>;
  minter?: InputMaybe<order_by>;
  nft_contract_content_flag?: InputMaybe<order_by>;
  nft_contract_created_at?: InputMaybe<order_by>;
  nft_contract_icon?: InputMaybe<order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  nft_contract_is_mintbase?: InputMaybe<order_by>;
  nft_contract_name?: InputMaybe<order_by>;
  nft_contract_owner_id?: InputMaybe<order_by>;
  nft_contract_reference?: InputMaybe<order_by>;
  nft_contract_spec?: InputMaybe<order_by>;
  nft_contract_symbol?: InputMaybe<order_by>;
  owner?: InputMaybe<order_by>;
  reference?: InputMaybe<order_by>;
  reference_blob?: InputMaybe<order_by>;
  reference_hash?: InputMaybe<order_by>;
  royalties?: InputMaybe<order_by>;
  royalties_percent?: InputMaybe<order_by>;
  splits?: InputMaybe<order_by>;
  starts_at?: InputMaybe<order_by>;
  title?: InputMaybe<order_by>;
  token_id?: InputMaybe<order_by>;
  updated_at?: InputMaybe<order_by>;
};

/** select columns of table "mb_views.nft_tokens_with_media_type" */
export type mb_views_nft_tokens_with_media_type_select_column =
  /** column name */
  | 'base_uri'
  /** column name */
  | 'burned_receipt_id'
  /** column name */
  | 'burned_timestamp'
  /** column name */
  | 'copies'
  /** column name */
  | 'description'
  /** column name */
  | 'expires_at'
  /** column name */
  | 'extra'
  /** column name */
  | 'forever_media_type'
  /** column name */
  | 'forever_media_url'
  /** column name */
  | 'issued_at'
  /** column name */
  | 'last_transfer_receipt_id'
  /** column name */
  | 'last_transfer_timestamp'
  /** column name */
  | 'media'
  /** column name */
  | 'media_hash'
  /** column name */
  | 'metadata_content_flag'
  /** column name */
  | 'metadata_id'
  /** column name */
  | 'mint_memo'
  /** column name */
  | 'minted_receipt_id'
  /** column name */
  | 'minted_timestamp'
  /** column name */
  | 'minter'
  /** column name */
  | 'nft_contract_content_flag'
  /** column name */
  | 'nft_contract_created_at'
  /** column name */
  | 'nft_contract_icon'
  /** column name */
  | 'nft_contract_id'
  /** column name */
  | 'nft_contract_is_mintbase'
  /** column name */
  | 'nft_contract_name'
  /** column name */
  | 'nft_contract_owner_id'
  /** column name */
  | 'nft_contract_reference'
  /** column name */
  | 'nft_contract_spec'
  /** column name */
  | 'nft_contract_symbol'
  /** column name */
  | 'owner'
  /** column name */
  | 'reference'
  /** column name */
  | 'reference_blob'
  /** column name */
  | 'reference_hash'
  /** column name */
  | 'royalties'
  /** column name */
  | 'royalties_percent'
  /** column name */
  | 'splits'
  /** column name */
  | 'starts_at'
  /** column name */
  | 'title'
  /** column name */
  | 'token_id'
  /** column name */
  | 'updated_at';

/** aggregate stddev on columns */
export type mb_views_nft_tokens_with_media_type_stddev_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type mb_views_nft_tokens_with_media_type_stddev_pop_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type mb_views_nft_tokens_with_media_type_stddev_samp_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "mb_views_nft_tokens_with_media_type" */
export type mb_views_nft_tokens_with_media_type_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: mb_views_nft_tokens_with_media_type_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type mb_views_nft_tokens_with_media_type_stream_cursor_value_input = {
  base_uri?: InputMaybe<Scalars['String']>;
  burned_receipt_id?: InputMaybe<Scalars['String']>;
  burned_timestamp?: InputMaybe<Scalars['timestamp']>;
  copies?: InputMaybe<Scalars['bigint']>;
  description?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['timestamp']>;
  extra?: InputMaybe<Scalars['String']>;
  forever_media_type?: InputMaybe<Scalars['String']>;
  forever_media_url?: InputMaybe<Scalars['String']>;
  issued_at?: InputMaybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: InputMaybe<Scalars['String']>;
  last_transfer_timestamp?: InputMaybe<Scalars['timestamp']>;
  media?: InputMaybe<Scalars['String']>;
  media_hash?: InputMaybe<Scalars['String']>;
  metadata_content_flag?: InputMaybe<Scalars['String']>;
  metadata_id?: InputMaybe<Scalars['String']>;
  mint_memo?: InputMaybe<Scalars['String']>;
  minted_receipt_id?: InputMaybe<Scalars['String']>;
  minted_timestamp?: InputMaybe<Scalars['timestamp']>;
  minter?: InputMaybe<Scalars['String']>;
  nft_contract_content_flag?: InputMaybe<Scalars['String']>;
  nft_contract_created_at?: InputMaybe<Scalars['timestamp']>;
  nft_contract_icon?: InputMaybe<Scalars['String']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
  nft_contract_is_mintbase?: InputMaybe<Scalars['Boolean']>;
  nft_contract_name?: InputMaybe<Scalars['String']>;
  nft_contract_owner_id?: InputMaybe<Scalars['String']>;
  nft_contract_reference?: InputMaybe<Scalars['String']>;
  nft_contract_spec?: InputMaybe<Scalars['String']>;
  nft_contract_symbol?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  reference?: InputMaybe<Scalars['String']>;
  reference_blob?: InputMaybe<Scalars['jsonb']>;
  reference_hash?: InputMaybe<Scalars['String']>;
  royalties?: InputMaybe<Scalars['jsonb']>;
  royalties_percent?: InputMaybe<Scalars['Int']>;
  splits?: InputMaybe<Scalars['jsonb']>;
  starts_at?: InputMaybe<Scalars['timestamp']>;
  title?: InputMaybe<Scalars['String']>;
  token_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type mb_views_nft_tokens_with_media_type_sum_fields = {
  copies?: Maybe<Scalars['bigint']>;
  royalties_percent?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type mb_views_nft_tokens_with_media_type_var_pop_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type mb_views_nft_tokens_with_media_type_var_samp_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type mb_views_nft_tokens_with_media_type_variance_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "mb_views.top_stores" */
export type mb_views_top_stores = {
  date?: Maybe<Scalars['timestamp']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregated selection of "mb_views.top_stores" */
export type mb_views_top_stores_aggregate = {
  aggregate?: Maybe<mb_views_top_stores_aggregate_fields>;
  nodes: Array<mb_views_top_stores>;
};

/** aggregate fields of "mb_views.top_stores" */
export type mb_views_top_stores_aggregate_fields = {
  avg?: Maybe<mb_views_top_stores_avg_fields>;
  count: Scalars['Int'];
  max?: Maybe<mb_views_top_stores_max_fields>;
  min?: Maybe<mb_views_top_stores_min_fields>;
  stddev?: Maybe<mb_views_top_stores_stddev_fields>;
  stddev_pop?: Maybe<mb_views_top_stores_stddev_pop_fields>;
  stddev_samp?: Maybe<mb_views_top_stores_stddev_samp_fields>;
  sum?: Maybe<mb_views_top_stores_sum_fields>;
  var_pop?: Maybe<mb_views_top_stores_var_pop_fields>;
  var_samp?: Maybe<mb_views_top_stores_var_samp_fields>;
  variance?: Maybe<mb_views_top_stores_variance_fields>;
};


/** aggregate fields of "mb_views.top_stores" */
export type mb_views_top_stores_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<mb_views_top_stores_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type mb_views_top_stores_avg_fields = {
  total?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "mb_views.top_stores". All fields are combined with a logical 'AND'. */
export type mb_views_top_stores_bool_exp = {
  _and?: InputMaybe<Array<mb_views_top_stores_bool_exp>>;
  _not?: InputMaybe<mb_views_top_stores_bool_exp>;
  _or?: InputMaybe<Array<mb_views_top_stores_bool_exp>>;
  date?: InputMaybe<timestamp_comparison_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  total?: InputMaybe<numeric_comparison_exp>;
};

/** aggregate max on columns */
export type mb_views_top_stores_max_fields = {
  date?: Maybe<Scalars['timestamp']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate min on columns */
export type mb_views_top_stores_min_fields = {
  date?: Maybe<Scalars['timestamp']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['numeric']>;
};

/** Ordering options when selecting data from "mb_views.top_stores". */
export type mb_views_top_stores_order_by = {
  date?: InputMaybe<order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  total?: InputMaybe<order_by>;
};

/** select columns of table "mb_views.top_stores" */
export type mb_views_top_stores_select_column =
  /** column name */
  | 'date'
  /** column name */
  | 'nft_contract_id'
  /** column name */
  | 'total';

/** aggregate stddev on columns */
export type mb_views_top_stores_stddev_fields = {
  total?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type mb_views_top_stores_stddev_pop_fields = {
  total?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type mb_views_top_stores_stddev_samp_fields = {
  total?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "mb_views_top_stores" */
export type mb_views_top_stores_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: mb_views_top_stores_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type mb_views_top_stores_stream_cursor_value_input = {
  date?: InputMaybe<Scalars['timestamp']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
  total?: InputMaybe<Scalars['numeric']>;
};

/** aggregate sum on columns */
export type mb_views_top_stores_sum_fields = {
  total?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type mb_views_top_stores_var_pop_fields = {
  total?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type mb_views_top_stores_var_samp_fields = {
  total?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type mb_views_top_stores_variance_fields = {
  total?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "nft_activities" */
export type nft_activities = {
  action_receiver?: Maybe<Scalars['String']>;
  action_sender?: Maybe<Scalars['String']>;
  kind: Scalars['String'];
  memo?: Maybe<Scalars['String']>;
  /** An object relationship */
  nft_contract?: Maybe<nft_contracts>;
  nft_contract_id: Scalars['String'];
  /** An object relationship */
  nft_contracts?: Maybe<nft_contracts>;
  price?: Maybe<Scalars['numeric']>;
  receipt_id: Scalars['String'];
  timestamp: Scalars['timestamp'];
  token_id: Scalars['String'];
  tx_sender: Scalars['String'];
};

/** aggregated selection of "nft_activities" */
export type nft_activities_aggregate = {
  aggregate?: Maybe<nft_activities_aggregate_fields>;
  nodes: Array<nft_activities>;
};

/** aggregate fields of "nft_activities" */
export type nft_activities_aggregate_fields = {
  avg?: Maybe<nft_activities_avg_fields>;
  count: Scalars['Int'];
  max?: Maybe<nft_activities_max_fields>;
  min?: Maybe<nft_activities_min_fields>;
  stddev?: Maybe<nft_activities_stddev_fields>;
  stddev_pop?: Maybe<nft_activities_stddev_pop_fields>;
  stddev_samp?: Maybe<nft_activities_stddev_samp_fields>;
  sum?: Maybe<nft_activities_sum_fields>;
  var_pop?: Maybe<nft_activities_var_pop_fields>;
  var_samp?: Maybe<nft_activities_var_samp_fields>;
  variance?: Maybe<nft_activities_variance_fields>;
};


/** aggregate fields of "nft_activities" */
export type nft_activities_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<nft_activities_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type nft_activities_avg_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nft_activities". All fields are combined with a logical 'AND'. */
export type nft_activities_bool_exp = {
  _and?: InputMaybe<Array<nft_activities_bool_exp>>;
  _not?: InputMaybe<nft_activities_bool_exp>;
  _or?: InputMaybe<Array<nft_activities_bool_exp>>;
  action_receiver?: InputMaybe<String_comparison_exp>;
  action_sender?: InputMaybe<String_comparison_exp>;
  kind?: InputMaybe<String_comparison_exp>;
  memo?: InputMaybe<String_comparison_exp>;
  nft_contract?: InputMaybe<nft_contracts_bool_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  nft_contracts?: InputMaybe<nft_contracts_bool_exp>;
  price?: InputMaybe<numeric_comparison_exp>;
  receipt_id?: InputMaybe<String_comparison_exp>;
  timestamp?: InputMaybe<timestamp_comparison_exp>;
  token_id?: InputMaybe<String_comparison_exp>;
  tx_sender?: InputMaybe<String_comparison_exp>;
};

/** aggregate max on columns */
export type nft_activities_max_fields = {
  action_receiver?: Maybe<Scalars['String']>;
  action_sender?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  receipt_id?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  token_id?: Maybe<Scalars['String']>;
  tx_sender?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type nft_activities_min_fields = {
  action_receiver?: Maybe<Scalars['String']>;
  action_sender?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  memo?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  receipt_id?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  token_id?: Maybe<Scalars['String']>;
  tx_sender?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "nft_activities". */
export type nft_activities_order_by = {
  action_receiver?: InputMaybe<order_by>;
  action_sender?: InputMaybe<order_by>;
  kind?: InputMaybe<order_by>;
  memo?: InputMaybe<order_by>;
  nft_contract?: InputMaybe<nft_contracts_order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  nft_contracts?: InputMaybe<nft_contracts_order_by>;
  price?: InputMaybe<order_by>;
  receipt_id?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
  token_id?: InputMaybe<order_by>;
  tx_sender?: InputMaybe<order_by>;
};

/** select columns of table "nft_activities" */
export type nft_activities_select_column =
  /** column name */
  | 'action_receiver'
  /** column name */
  | 'action_sender'
  /** column name */
  | 'kind'
  /** column name */
  | 'memo'
  /** column name */
  | 'nft_contract_id'
  /** column name */
  | 'price'
  /** column name */
  | 'receipt_id'
  /** column name */
  | 'timestamp'
  /** column name */
  | 'token_id'
  /** column name */
  | 'tx_sender';

/** aggregate stddev on columns */
export type nft_activities_stddev_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type nft_activities_stddev_pop_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type nft_activities_stddev_samp_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "nft_activities" */
export type nft_activities_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: nft_activities_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type nft_activities_stream_cursor_value_input = {
  action_receiver?: InputMaybe<Scalars['String']>;
  action_sender?: InputMaybe<Scalars['String']>;
  kind?: InputMaybe<Scalars['String']>;
  memo?: InputMaybe<Scalars['String']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  receipt_id?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  token_id?: InputMaybe<Scalars['String']>;
  tx_sender?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type nft_activities_sum_fields = {
  price?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type nft_activities_var_pop_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type nft_activities_var_samp_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type nft_activities_variance_fields = {
  price?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "nft_attributes" */
export type nft_attributes = {
  attribute_display_type?: Maybe<Scalars['String']>;
  attribute_type: Scalars['String'];
  attribute_value?: Maybe<Scalars['String']>;
  /** An object relationship */
  metadata?: Maybe<Thing>;
  nft_contract_id: Scalars['String'];
  nft_metadata_id: Scalars['String'];
};

/** aggregated selection of "nft_attributes" */
export type nft_attributes_aggregate = {
  aggregate?: Maybe<nft_attributes_aggregate_fields>;
  nodes: Array<nft_attributes>;
};

/** aggregate fields of "nft_attributes" */
export type nft_attributes_aggregate_fields = {
  count: Scalars['Int'];
  max?: Maybe<nft_attributes_max_fields>;
  min?: Maybe<nft_attributes_min_fields>;
};


/** aggregate fields of "nft_attributes" */
export type nft_attributes_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<nft_attributes_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "nft_attributes". All fields are combined with a logical 'AND'. */
export type nft_attributes_bool_exp = {
  _and?: InputMaybe<Array<nft_attributes_bool_exp>>;
  _not?: InputMaybe<nft_attributes_bool_exp>;
  _or?: InputMaybe<Array<nft_attributes_bool_exp>>;
  attribute_display_type?: InputMaybe<String_comparison_exp>;
  attribute_type?: InputMaybe<String_comparison_exp>;
  attribute_value?: InputMaybe<String_comparison_exp>;
  metadata?: InputMaybe<nft_metadata_bool_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  nft_metadata_id?: InputMaybe<String_comparison_exp>;
};

/** aggregate max on columns */
export type nft_attributes_max_fields = {
  attribute_display_type?: Maybe<Scalars['String']>;
  attribute_type?: Maybe<Scalars['String']>;
  attribute_value?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  nft_metadata_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type nft_attributes_min_fields = {
  attribute_display_type?: Maybe<Scalars['String']>;
  attribute_type?: Maybe<Scalars['String']>;
  attribute_value?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  nft_metadata_id?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "nft_attributes". */
export type nft_attributes_order_by = {
  attribute_display_type?: InputMaybe<order_by>;
  attribute_type?: InputMaybe<order_by>;
  attribute_value?: InputMaybe<order_by>;
  metadata?: InputMaybe<nft_metadata_order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  nft_metadata_id?: InputMaybe<order_by>;
};

/** select columns of table "nft_attributes" */
export type nft_attributes_select_column =
  /** column name */
  | 'attribute_display_type'
  /** column name */
  | 'attribute_type'
  /** column name */
  | 'attribute_value'
  /** column name */
  | 'nft_contract_id'
  /** column name */
  | 'nft_metadata_id';

/** Streaming cursor of the table "nft_attributes" */
export type nft_attributes_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: nft_attributes_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type nft_attributes_stream_cursor_value_input = {
  attribute_display_type?: InputMaybe<Scalars['String']>;
  attribute_type?: InputMaybe<Scalars['String']>;
  attribute_value?: InputMaybe<Scalars['String']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
  nft_metadata_id?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "nft_contracts" */
export type nft_contracts = {
  base_uri?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  created_receipt_id?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  is_mintbase: Scalars['Boolean'];
  name: Scalars['String'];
  owner_id?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_hash?: Maybe<Scalars['String']>;
  spec: Scalars['String'];
  symbol?: Maybe<Scalars['String']>;
};

/** aggregated selection of "nft_contracts" */
export type nft_contracts_aggregate = {
  aggregate?: Maybe<nft_contracts_aggregate_fields>;
  nodes: Array<nft_contracts>;
};

/** aggregate fields of "nft_contracts" */
export type nft_contracts_aggregate_fields = {
  count: Scalars['Int'];
  max?: Maybe<nft_contracts_max_fields>;
  min?: Maybe<nft_contracts_min_fields>;
};


/** aggregate fields of "nft_contracts" */
export type nft_contracts_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<nft_contracts_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "nft_contracts". All fields are combined with a logical 'AND'. */
export type nft_contracts_bool_exp = {
  _and?: InputMaybe<Array<nft_contracts_bool_exp>>;
  _not?: InputMaybe<nft_contracts_bool_exp>;
  _or?: InputMaybe<Array<nft_contracts_bool_exp>>;
  base_uri?: InputMaybe<String_comparison_exp>;
  content_flag?: InputMaybe<String_comparison_exp>;
  created_at?: InputMaybe<timestamp_comparison_exp>;
  created_receipt_id?: InputMaybe<String_comparison_exp>;
  icon?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  is_mintbase?: InputMaybe<Boolean_comparison_exp>;
  name?: InputMaybe<String_comparison_exp>;
  owner_id?: InputMaybe<String_comparison_exp>;
  reference?: InputMaybe<String_comparison_exp>;
  reference_hash?: InputMaybe<String_comparison_exp>;
  spec?: InputMaybe<String_comparison_exp>;
  symbol?: InputMaybe<String_comparison_exp>;
};

/** aggregate max on columns */
export type nft_contracts_max_fields = {
  base_uri?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  created_receipt_id?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_hash?: Maybe<Scalars['String']>;
  spec?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type nft_contracts_min_fields = {
  base_uri?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamp']>;
  created_receipt_id?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_hash?: Maybe<Scalars['String']>;
  spec?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "nft_contracts". */
export type nft_contracts_order_by = {
  base_uri?: InputMaybe<order_by>;
  content_flag?: InputMaybe<order_by>;
  created_at?: InputMaybe<order_by>;
  created_receipt_id?: InputMaybe<order_by>;
  icon?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  is_mintbase?: InputMaybe<order_by>;
  name?: InputMaybe<order_by>;
  owner_id?: InputMaybe<order_by>;
  reference?: InputMaybe<order_by>;
  reference_hash?: InputMaybe<order_by>;
  spec?: InputMaybe<order_by>;
  symbol?: InputMaybe<order_by>;
};

/** select columns of table "nft_contracts" */
export type nft_contracts_select_column =
  /** column name */
  | 'base_uri'
  /** column name */
  | 'content_flag'
  /** column name */
  | 'created_at'
  /** column name */
  | 'created_receipt_id'
  /** column name */
  | 'icon'
  /** column name */
  | 'id'
  /** column name */
  | 'is_mintbase'
  /** column name */
  | 'name'
  /** column name */
  | 'owner_id'
  /** column name */
  | 'reference'
  /** column name */
  | 'reference_hash'
  /** column name */
  | 'spec'
  /** column name */
  | 'symbol';

/** Streaming cursor of the table "nft_contracts" */
export type nft_contracts_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: nft_contracts_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type nft_contracts_stream_cursor_value_input = {
  base_uri?: InputMaybe<Scalars['String']>;
  content_flag?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  created_receipt_id?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  is_mintbase?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  owner_id?: InputMaybe<Scalars['String']>;
  reference?: InputMaybe<Scalars['String']>;
  reference_hash?: InputMaybe<Scalars['String']>;
  spec?: InputMaybe<Scalars['String']>;
  symbol?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "nft_earnings" */
export type nft_earnings = {
  amount: Scalars['numeric'];
  approval_id: Scalars['numeric'];
  currency: Scalars['String'];
  is_mintbase_cut: Scalars['Boolean'];
  is_referral: Scalars['Boolean'];
  market_id: Scalars['String'];
  /** An object relationship */
  nft_contract?: Maybe<nft_contracts>;
  nft_contract_id: Scalars['String'];
  /** An object relationship */
  nft_contracts?: Maybe<nft_contracts>;
  /** An object relationship */
  nft_token?: Maybe<mb_views_nft_tokens>;
  /** An object relationship */
  offer?: Maybe<nft_offers>;
  offer_id: Scalars['bigint'];
  receipt_id: Scalars['String'];
  receiver_id: Scalars['String'];
  timestamp: Scalars['timestamp'];
  token_id: Scalars['String'];
};

/** aggregated selection of "nft_earnings" */
export type nft_earnings_aggregate = {
  aggregate?: Maybe<nft_earnings_aggregate_fields>;
  nodes: Array<nft_earnings>;
};

/** aggregate fields of "nft_earnings" */
export type nft_earnings_aggregate_fields = {
  avg?: Maybe<nft_earnings_avg_fields>;
  count: Scalars['Int'];
  max?: Maybe<nft_earnings_max_fields>;
  min?: Maybe<nft_earnings_min_fields>;
  stddev?: Maybe<nft_earnings_stddev_fields>;
  stddev_pop?: Maybe<nft_earnings_stddev_pop_fields>;
  stddev_samp?: Maybe<nft_earnings_stddev_samp_fields>;
  sum?: Maybe<nft_earnings_sum_fields>;
  var_pop?: Maybe<nft_earnings_var_pop_fields>;
  var_samp?: Maybe<nft_earnings_var_samp_fields>;
  variance?: Maybe<nft_earnings_variance_fields>;
};


/** aggregate fields of "nft_earnings" */
export type nft_earnings_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<nft_earnings_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type nft_earnings_avg_fields = {
  amount?: Maybe<Scalars['Float']>;
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nft_earnings". All fields are combined with a logical 'AND'. */
export type nft_earnings_bool_exp = {
  _and?: InputMaybe<Array<nft_earnings_bool_exp>>;
  _not?: InputMaybe<nft_earnings_bool_exp>;
  _or?: InputMaybe<Array<nft_earnings_bool_exp>>;
  amount?: InputMaybe<numeric_comparison_exp>;
  approval_id?: InputMaybe<numeric_comparison_exp>;
  currency?: InputMaybe<String_comparison_exp>;
  is_mintbase_cut?: InputMaybe<Boolean_comparison_exp>;
  is_referral?: InputMaybe<Boolean_comparison_exp>;
  market_id?: InputMaybe<String_comparison_exp>;
  nft_contract?: InputMaybe<nft_contracts_bool_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  nft_contracts?: InputMaybe<nft_contracts_bool_exp>;
  nft_token?: InputMaybe<mb_views_nft_tokens_bool_exp>;
  offer?: InputMaybe<nft_offers_bool_exp>;
  offer_id?: InputMaybe<bigint_comparison_exp>;
  receipt_id?: InputMaybe<String_comparison_exp>;
  receiver_id?: InputMaybe<String_comparison_exp>;
  timestamp?: InputMaybe<timestamp_comparison_exp>;
  token_id?: InputMaybe<String_comparison_exp>;
};

/** aggregate max on columns */
export type nft_earnings_max_fields = {
  amount?: Maybe<Scalars['numeric']>;
  approval_id?: Maybe<Scalars['numeric']>;
  currency?: Maybe<Scalars['String']>;
  market_id?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  offer_id?: Maybe<Scalars['bigint']>;
  receipt_id?: Maybe<Scalars['String']>;
  receiver_id?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  token_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type nft_earnings_min_fields = {
  amount?: Maybe<Scalars['numeric']>;
  approval_id?: Maybe<Scalars['numeric']>;
  currency?: Maybe<Scalars['String']>;
  market_id?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  offer_id?: Maybe<Scalars['bigint']>;
  receipt_id?: Maybe<Scalars['String']>;
  receiver_id?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  token_id?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "nft_earnings". */
export type nft_earnings_order_by = {
  amount?: InputMaybe<order_by>;
  approval_id?: InputMaybe<order_by>;
  currency?: InputMaybe<order_by>;
  is_mintbase_cut?: InputMaybe<order_by>;
  is_referral?: InputMaybe<order_by>;
  market_id?: InputMaybe<order_by>;
  nft_contract?: InputMaybe<nft_contracts_order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  nft_contracts?: InputMaybe<nft_contracts_order_by>;
  nft_token?: InputMaybe<mb_views_nft_tokens_order_by>;
  offer?: InputMaybe<nft_offers_order_by>;
  offer_id?: InputMaybe<order_by>;
  receipt_id?: InputMaybe<order_by>;
  receiver_id?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
  token_id?: InputMaybe<order_by>;
};

/** select columns of table "nft_earnings" */
export type nft_earnings_select_column =
  /** column name */
  | 'amount'
  /** column name */
  | 'approval_id'
  /** column name */
  | 'currency'
  /** column name */
  | 'is_mintbase_cut'
  /** column name */
  | 'is_referral'
  /** column name */
  | 'market_id'
  /** column name */
  | 'nft_contract_id'
  /** column name */
  | 'offer_id'
  /** column name */
  | 'receipt_id'
  /** column name */
  | 'receiver_id'
  /** column name */
  | 'timestamp'
  /** column name */
  | 'token_id';

/** aggregate stddev on columns */
export type nft_earnings_stddev_fields = {
  amount?: Maybe<Scalars['Float']>;
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type nft_earnings_stddev_pop_fields = {
  amount?: Maybe<Scalars['Float']>;
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type nft_earnings_stddev_samp_fields = {
  amount?: Maybe<Scalars['Float']>;
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "nft_earnings" */
export type nft_earnings_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: nft_earnings_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type nft_earnings_stream_cursor_value_input = {
  amount?: InputMaybe<Scalars['numeric']>;
  approval_id?: InputMaybe<Scalars['numeric']>;
  currency?: InputMaybe<Scalars['String']>;
  is_mintbase_cut?: InputMaybe<Scalars['Boolean']>;
  is_referral?: InputMaybe<Scalars['Boolean']>;
  market_id?: InputMaybe<Scalars['String']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
  offer_id?: InputMaybe<Scalars['bigint']>;
  receipt_id?: InputMaybe<Scalars['String']>;
  receiver_id?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  token_id?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type nft_earnings_sum_fields = {
  amount?: Maybe<Scalars['numeric']>;
  approval_id?: Maybe<Scalars['numeric']>;
  offer_id?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type nft_earnings_var_pop_fields = {
  amount?: Maybe<Scalars['Float']>;
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type nft_earnings_var_samp_fields = {
  amount?: Maybe<Scalars['Float']>;
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type nft_earnings_variance_fields = {
  amount?: Maybe<Scalars['Float']>;
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "nft_listings" */
export type nft_listings = {
  accepted_at?: Maybe<Scalars['timestamp']>;
  accepted_offer_id?: Maybe<Scalars['bigint']>;
  approval_id: Scalars['numeric'];
  created_at: Scalars['timestamp'];
  currency: Scalars['String'];
  invalidated_at?: Maybe<Scalars['timestamp']>;
  kind: Scalars['String'];
  listed_by: Scalars['String'];
  market_id: Scalars['String'];
  metadata_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  nft_contract?: Maybe<nft_contracts>;
  nft_contract_id: Scalars['String'];
  /** An object relationship */
  nft_contracts?: Maybe<nft_contracts>;
  /** An object relationship */
  nft_token?: Maybe<mb_views_nft_tokens>;
  /** An array relationship */
  offers: Array<nft_offers>;
  /** An aggregate relationship */
  offers_aggregate: nft_offers_aggregate;
  price?: Maybe<Scalars['numeric']>;
  receipt_id: Scalars['String'];
  /** An object relationship */
  token?: Maybe<mb_views_nft_tokens>;
  token_id: Scalars['String'];
  unlisted_at?: Maybe<Scalars['timestamp']>;
};


/** columns and relationships of "nft_listings" */
export type nft_listingsoffersArgs = {
  distinct_on?: InputMaybe<Array<nft_offers_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_offers_order_by>>;
  where?: InputMaybe<nft_offers_bool_exp>;
};


/** columns and relationships of "nft_listings" */
export type nft_listingsoffers_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_offers_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_offers_order_by>>;
  where?: InputMaybe<nft_offers_bool_exp>;
};

/** aggregated selection of "nft_listings" */
export type nft_listings_aggregate = {
  aggregate?: Maybe<nft_listings_aggregate_fields>;
  nodes: Array<nft_listings>;
};

export type nft_listings_aggregate_bool_exp = {
  count?: InputMaybe<nft_listings_aggregate_bool_exp_count>;
};

export type nft_listings_aggregate_bool_exp_count = {
  arguments?: InputMaybe<Array<nft_listings_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<nft_listings_bool_exp>;
  predicate: Int_comparison_exp;
};

/** aggregate fields of "nft_listings" */
export type nft_listings_aggregate_fields = {
  avg?: Maybe<nft_listings_avg_fields>;
  count: Scalars['Int'];
  max?: Maybe<nft_listings_max_fields>;
  min?: Maybe<nft_listings_min_fields>;
  stddev?: Maybe<nft_listings_stddev_fields>;
  stddev_pop?: Maybe<nft_listings_stddev_pop_fields>;
  stddev_samp?: Maybe<nft_listings_stddev_samp_fields>;
  sum?: Maybe<nft_listings_sum_fields>;
  var_pop?: Maybe<nft_listings_var_pop_fields>;
  var_samp?: Maybe<nft_listings_var_samp_fields>;
  variance?: Maybe<nft_listings_variance_fields>;
};


/** aggregate fields of "nft_listings" */
export type nft_listings_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<nft_listings_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "nft_listings" */
export type nft_listings_aggregate_order_by = {
  avg?: InputMaybe<nft_listings_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<nft_listings_max_order_by>;
  min?: InputMaybe<nft_listings_min_order_by>;
  stddev?: InputMaybe<nft_listings_stddev_order_by>;
  stddev_pop?: InputMaybe<nft_listings_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<nft_listings_stddev_samp_order_by>;
  sum?: InputMaybe<nft_listings_sum_order_by>;
  var_pop?: InputMaybe<nft_listings_var_pop_order_by>;
  var_samp?: InputMaybe<nft_listings_var_samp_order_by>;
  variance?: InputMaybe<nft_listings_variance_order_by>;
};

/** aggregate avg on columns */
export type nft_listings_avg_fields = {
  accepted_offer_id?: Maybe<Scalars['Float']>;
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "nft_listings" */
export type nft_listings_avg_order_by = {
  accepted_offer_id?: InputMaybe<order_by>;
  approval_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "nft_listings". All fields are combined with a logical 'AND'. */
export type nft_listings_bool_exp = {
  _and?: InputMaybe<Array<nft_listings_bool_exp>>;
  _not?: InputMaybe<nft_listings_bool_exp>;
  _or?: InputMaybe<Array<nft_listings_bool_exp>>;
  accepted_at?: InputMaybe<timestamp_comparison_exp>;
  accepted_offer_id?: InputMaybe<bigint_comparison_exp>;
  approval_id?: InputMaybe<numeric_comparison_exp>;
  created_at?: InputMaybe<timestamp_comparison_exp>;
  currency?: InputMaybe<String_comparison_exp>;
  invalidated_at?: InputMaybe<timestamp_comparison_exp>;
  kind?: InputMaybe<String_comparison_exp>;
  listed_by?: InputMaybe<String_comparison_exp>;
  market_id?: InputMaybe<String_comparison_exp>;
  metadata_id?: InputMaybe<String_comparison_exp>;
  nft_contract?: InputMaybe<nft_contracts_bool_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  nft_contracts?: InputMaybe<nft_contracts_bool_exp>;
  nft_token?: InputMaybe<mb_views_nft_tokens_bool_exp>;
  offers?: InputMaybe<nft_offers_bool_exp>;
  offers_aggregate?: InputMaybe<nft_offers_aggregate_bool_exp>;
  price?: InputMaybe<numeric_comparison_exp>;
  receipt_id?: InputMaybe<String_comparison_exp>;
  token?: InputMaybe<mb_views_nft_tokens_bool_exp>;
  token_id?: InputMaybe<String_comparison_exp>;
  unlisted_at?: InputMaybe<timestamp_comparison_exp>;
};

/** aggregate max on columns */
export type nft_listings_max_fields = {
  accepted_at?: Maybe<Scalars['timestamp']>;
  accepted_offer_id?: Maybe<Scalars['bigint']>;
  approval_id?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  invalidated_at?: Maybe<Scalars['timestamp']>;
  kind?: Maybe<Scalars['String']>;
  listed_by?: Maybe<Scalars['String']>;
  market_id?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  receipt_id?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  unlisted_at?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "nft_listings" */
export type nft_listings_max_order_by = {
  accepted_at?: InputMaybe<order_by>;
  accepted_offer_id?: InputMaybe<order_by>;
  approval_id?: InputMaybe<order_by>;
  created_at?: InputMaybe<order_by>;
  currency?: InputMaybe<order_by>;
  invalidated_at?: InputMaybe<order_by>;
  kind?: InputMaybe<order_by>;
  listed_by?: InputMaybe<order_by>;
  market_id?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
  receipt_id?: InputMaybe<order_by>;
  token_id?: InputMaybe<order_by>;
  unlisted_at?: InputMaybe<order_by>;
};

/** aggregate min on columns */
export type nft_listings_min_fields = {
  accepted_at?: Maybe<Scalars['timestamp']>;
  accepted_offer_id?: Maybe<Scalars['bigint']>;
  approval_id?: Maybe<Scalars['numeric']>;
  created_at?: Maybe<Scalars['timestamp']>;
  currency?: Maybe<Scalars['String']>;
  invalidated_at?: Maybe<Scalars['timestamp']>;
  kind?: Maybe<Scalars['String']>;
  listed_by?: Maybe<Scalars['String']>;
  market_id?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  receipt_id?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  unlisted_at?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "nft_listings" */
export type nft_listings_min_order_by = {
  accepted_at?: InputMaybe<order_by>;
  accepted_offer_id?: InputMaybe<order_by>;
  approval_id?: InputMaybe<order_by>;
  created_at?: InputMaybe<order_by>;
  currency?: InputMaybe<order_by>;
  invalidated_at?: InputMaybe<order_by>;
  kind?: InputMaybe<order_by>;
  listed_by?: InputMaybe<order_by>;
  market_id?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
  receipt_id?: InputMaybe<order_by>;
  token_id?: InputMaybe<order_by>;
  unlisted_at?: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "nft_listings". */
export type nft_listings_order_by = {
  accepted_at?: InputMaybe<order_by>;
  accepted_offer_id?: InputMaybe<order_by>;
  approval_id?: InputMaybe<order_by>;
  created_at?: InputMaybe<order_by>;
  currency?: InputMaybe<order_by>;
  invalidated_at?: InputMaybe<order_by>;
  kind?: InputMaybe<order_by>;
  listed_by?: InputMaybe<order_by>;
  market_id?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  nft_contract?: InputMaybe<nft_contracts_order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  nft_contracts?: InputMaybe<nft_contracts_order_by>;
  nft_token?: InputMaybe<mb_views_nft_tokens_order_by>;
  offers_aggregate?: InputMaybe<nft_offers_aggregate_order_by>;
  price?: InputMaybe<order_by>;
  receipt_id?: InputMaybe<order_by>;
  token?: InputMaybe<mb_views_nft_tokens_order_by>;
  token_id?: InputMaybe<order_by>;
  unlisted_at?: InputMaybe<order_by>;
};

/** select columns of table "nft_listings" */
export type nft_listings_select_column =
  /** column name */
  | 'accepted_at'
  /** column name */
  | 'accepted_offer_id'
  /** column name */
  | 'approval_id'
  /** column name */
  | 'created_at'
  /** column name */
  | 'currency'
  /** column name */
  | 'invalidated_at'
  /** column name */
  | 'kind'
  /** column name */
  | 'listed_by'
  /** column name */
  | 'market_id'
  /** column name */
  | 'metadata_id'
  /** column name */
  | 'nft_contract_id'
  /** column name */
  | 'price'
  /** column name */
  | 'receipt_id'
  /** column name */
  | 'token_id'
  /** column name */
  | 'unlisted_at';

/** aggregate stddev on columns */
export type nft_listings_stddev_fields = {
  accepted_offer_id?: Maybe<Scalars['Float']>;
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "nft_listings" */
export type nft_listings_stddev_order_by = {
  accepted_offer_id?: InputMaybe<order_by>;
  approval_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
};

/** aggregate stddev_pop on columns */
export type nft_listings_stddev_pop_fields = {
  accepted_offer_id?: Maybe<Scalars['Float']>;
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "nft_listings" */
export type nft_listings_stddev_pop_order_by = {
  accepted_offer_id?: InputMaybe<order_by>;
  approval_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
};

/** aggregate stddev_samp on columns */
export type nft_listings_stddev_samp_fields = {
  accepted_offer_id?: Maybe<Scalars['Float']>;
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "nft_listings" */
export type nft_listings_stddev_samp_order_by = {
  accepted_offer_id?: InputMaybe<order_by>;
  approval_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
};

/** Streaming cursor of the table "nft_listings" */
export type nft_listings_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: nft_listings_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type nft_listings_stream_cursor_value_input = {
  accepted_at?: InputMaybe<Scalars['timestamp']>;
  accepted_offer_id?: InputMaybe<Scalars['bigint']>;
  approval_id?: InputMaybe<Scalars['numeric']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  currency?: InputMaybe<Scalars['String']>;
  invalidated_at?: InputMaybe<Scalars['timestamp']>;
  kind?: InputMaybe<Scalars['String']>;
  listed_by?: InputMaybe<Scalars['String']>;
  market_id?: InputMaybe<Scalars['String']>;
  metadata_id?: InputMaybe<Scalars['String']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  receipt_id?: InputMaybe<Scalars['String']>;
  token_id?: InputMaybe<Scalars['String']>;
  unlisted_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type nft_listings_sum_fields = {
  accepted_offer_id?: Maybe<Scalars['bigint']>;
  approval_id?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "nft_listings" */
export type nft_listings_sum_order_by = {
  accepted_offer_id?: InputMaybe<order_by>;
  approval_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
};

/** aggregate var_pop on columns */
export type nft_listings_var_pop_fields = {
  accepted_offer_id?: Maybe<Scalars['Float']>;
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "nft_listings" */
export type nft_listings_var_pop_order_by = {
  accepted_offer_id?: InputMaybe<order_by>;
  approval_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
};

/** aggregate var_samp on columns */
export type nft_listings_var_samp_fields = {
  accepted_offer_id?: Maybe<Scalars['Float']>;
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "nft_listings" */
export type nft_listings_var_samp_order_by = {
  accepted_offer_id?: InputMaybe<order_by>;
  approval_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
};

/** aggregate variance on columns */
export type nft_listings_variance_fields = {
  accepted_offer_id?: Maybe<Scalars['Float']>;
  approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "nft_listings" */
export type nft_listings_variance_order_by = {
  accepted_offer_id?: InputMaybe<order_by>;
  approval_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
};

/** aggregated selection of "nft_metadata" */
export type nft_metadata_aggregate = {
  aggregate?: Maybe<nft_metadata_aggregate_fields>;
  nodes: Array<Thing>;
};

/** aggregate fields of "nft_metadata" */
export type nft_metadata_aggregate_fields = {
  count: Scalars['Int'];
  max?: Maybe<nft_metadata_max_fields>;
  min?: Maybe<nft_metadata_min_fields>;
};


/** aggregate fields of "nft_metadata" */
export type nft_metadata_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<nft_metadata_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "nft_metadata". All fields are combined with a logical 'AND'. */
export type nft_metadata_bool_exp = {
  _and?: InputMaybe<Array<nft_metadata_bool_exp>>;
  _not?: InputMaybe<nft_metadata_bool_exp>;
  _or?: InputMaybe<Array<nft_metadata_bool_exp>>;
  base_uri?: InputMaybe<String_comparison_exp>;
  content_flag?: InputMaybe<String_comparison_exp>;
  description?: InputMaybe<String_comparison_exp>;
  extra?: InputMaybe<String_comparison_exp>;
  id?: InputMaybe<String_comparison_exp>;
  media?: InputMaybe<String_comparison_exp>;
  media_hash?: InputMaybe<String_comparison_exp>;
  nft_contract?: InputMaybe<nft_contracts_bool_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  nft_contracts?: InputMaybe<nft_contracts_bool_exp>;
  reference?: InputMaybe<String_comparison_exp>;
  reference_blob?: InputMaybe<jsonb_comparison_exp>;
  title?: InputMaybe<String_comparison_exp>;
};

/** aggregate max on columns */
export type nft_metadata_max_fields = {
  base_uri?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type nft_metadata_min_fields = {
  base_uri?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "nft_metadata". */
export type nft_metadata_order_by = {
  base_uri?: InputMaybe<order_by>;
  content_flag?: InputMaybe<order_by>;
  description?: InputMaybe<order_by>;
  extra?: InputMaybe<order_by>;
  id?: InputMaybe<order_by>;
  media?: InputMaybe<order_by>;
  media_hash?: InputMaybe<order_by>;
  nft_contract?: InputMaybe<nft_contracts_order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  nft_contracts?: InputMaybe<nft_contracts_order_by>;
  reference?: InputMaybe<order_by>;
  reference_blob?: InputMaybe<order_by>;
  title?: InputMaybe<order_by>;
};

/** select columns of table "nft_metadata" */
export type nft_metadata_select_column =
  /** column name */
  | 'base_uri'
  /** column name */
  | 'content_flag'
  /** column name */
  | 'description'
  /** column name */
  | 'extra'
  /** column name */
  | 'id'
  /** column name */
  | 'media'
  /** column name */
  | 'media_hash'
  /** column name */
  | 'nft_contract_id'
  /** column name */
  | 'reference'
  /** column name */
  | 'reference_blob'
  /** column name */
  | 'title';

/** Streaming cursor of the table "nft_metadata" */
export type nft_metadata_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: nft_metadata_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type nft_metadata_stream_cursor_value_input = {
  base_uri?: InputMaybe<Scalars['String']>;
  content_flag?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  extra?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  media_hash?: InputMaybe<Scalars['String']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
  reference?: InputMaybe<Scalars['String']>;
  reference_blob?: InputMaybe<Scalars['jsonb']>;
  title?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "nft_offers" */
export type nft_offers = {
  accepted_at?: Maybe<Scalars['timestamp']>;
  approval_id: Scalars['numeric'];
  currency: Scalars['String'];
  expires_at?: Maybe<Scalars['timestamp']>;
  invalidated_at?: Maybe<Scalars['timestamp']>;
  /** An object relationship */
  listing?: Maybe<nft_listings>;
  market_id: Scalars['String'];
  /** An object relationship */
  nft_contract?: Maybe<nft_contracts>;
  nft_contract_id: Scalars['String'];
  /** An object relationship */
  nft_contracts?: Maybe<nft_contracts>;
  /** An object relationship */
  nft_token?: Maybe<mb_views_nft_tokens>;
  offer_id: Scalars['bigint'];
  offer_price: Scalars['numeric'];
  offered_at: Scalars['timestamp'];
  offered_by: Scalars['String'];
  outbid_at?: Maybe<Scalars['timestamp']>;
  receipt_id: Scalars['String'];
  referral_amount?: Maybe<Scalars['numeric']>;
  referrer_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  token?: Maybe<nft_tokens>;
  token_id: Scalars['String'];
  withdrawn_at?: Maybe<Scalars['timestamp']>;
};

/** aggregated selection of "nft_offers" */
export type nft_offers_aggregate = {
  aggregate?: Maybe<nft_offers_aggregate_fields>;
  nodes: Array<nft_offers>;
};

export type nft_offers_aggregate_bool_exp = {
  count?: InputMaybe<nft_offers_aggregate_bool_exp_count>;
};

export type nft_offers_aggregate_bool_exp_count = {
  arguments?: InputMaybe<Array<nft_offers_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<nft_offers_bool_exp>;
  predicate: Int_comparison_exp;
};

/** aggregate fields of "nft_offers" */
export type nft_offers_aggregate_fields = {
  avg?: Maybe<nft_offers_avg_fields>;
  count: Scalars['Int'];
  max?: Maybe<nft_offers_max_fields>;
  min?: Maybe<nft_offers_min_fields>;
  stddev?: Maybe<nft_offers_stddev_fields>;
  stddev_pop?: Maybe<nft_offers_stddev_pop_fields>;
  stddev_samp?: Maybe<nft_offers_stddev_samp_fields>;
  sum?: Maybe<nft_offers_sum_fields>;
  var_pop?: Maybe<nft_offers_var_pop_fields>;
  var_samp?: Maybe<nft_offers_var_samp_fields>;
  variance?: Maybe<nft_offers_variance_fields>;
};


/** aggregate fields of "nft_offers" */
export type nft_offers_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<nft_offers_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "nft_offers" */
export type nft_offers_aggregate_order_by = {
  avg?: InputMaybe<nft_offers_avg_order_by>;
  count?: InputMaybe<order_by>;
  max?: InputMaybe<nft_offers_max_order_by>;
  min?: InputMaybe<nft_offers_min_order_by>;
  stddev?: InputMaybe<nft_offers_stddev_order_by>;
  stddev_pop?: InputMaybe<nft_offers_stddev_pop_order_by>;
  stddev_samp?: InputMaybe<nft_offers_stddev_samp_order_by>;
  sum?: InputMaybe<nft_offers_sum_order_by>;
  var_pop?: InputMaybe<nft_offers_var_pop_order_by>;
  var_samp?: InputMaybe<nft_offers_var_samp_order_by>;
  variance?: InputMaybe<nft_offers_variance_order_by>;
};

/** aggregate avg on columns */
export type nft_offers_avg_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  offer_price?: Maybe<Scalars['Float']>;
  referral_amount?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "nft_offers" */
export type nft_offers_avg_order_by = {
  approval_id?: InputMaybe<order_by>;
  offer_id?: InputMaybe<order_by>;
  offer_price?: InputMaybe<order_by>;
  referral_amount?: InputMaybe<order_by>;
};

/** Boolean expression to filter rows from the table "nft_offers". All fields are combined with a logical 'AND'. */
export type nft_offers_bool_exp = {
  _and?: InputMaybe<Array<nft_offers_bool_exp>>;
  _not?: InputMaybe<nft_offers_bool_exp>;
  _or?: InputMaybe<Array<nft_offers_bool_exp>>;
  accepted_at?: InputMaybe<timestamp_comparison_exp>;
  approval_id?: InputMaybe<numeric_comparison_exp>;
  currency?: InputMaybe<String_comparison_exp>;
  expires_at?: InputMaybe<timestamp_comparison_exp>;
  invalidated_at?: InputMaybe<timestamp_comparison_exp>;
  listing?: InputMaybe<nft_listings_bool_exp>;
  market_id?: InputMaybe<String_comparison_exp>;
  nft_contract?: InputMaybe<nft_contracts_bool_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  nft_contracts?: InputMaybe<nft_contracts_bool_exp>;
  nft_token?: InputMaybe<mb_views_nft_tokens_bool_exp>;
  offer_id?: InputMaybe<bigint_comparison_exp>;
  offer_price?: InputMaybe<numeric_comparison_exp>;
  offered_at?: InputMaybe<timestamp_comparison_exp>;
  offered_by?: InputMaybe<String_comparison_exp>;
  outbid_at?: InputMaybe<timestamp_comparison_exp>;
  receipt_id?: InputMaybe<String_comparison_exp>;
  referral_amount?: InputMaybe<numeric_comparison_exp>;
  referrer_id?: InputMaybe<String_comparison_exp>;
  token?: InputMaybe<nft_tokens_bool_exp>;
  token_id?: InputMaybe<String_comparison_exp>;
  withdrawn_at?: InputMaybe<timestamp_comparison_exp>;
};

/** aggregate max on columns */
export type nft_offers_max_fields = {
  accepted_at?: Maybe<Scalars['timestamp']>;
  approval_id?: Maybe<Scalars['numeric']>;
  currency?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['timestamp']>;
  invalidated_at?: Maybe<Scalars['timestamp']>;
  market_id?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  offer_id?: Maybe<Scalars['bigint']>;
  offer_price?: Maybe<Scalars['numeric']>;
  offered_at?: Maybe<Scalars['timestamp']>;
  offered_by?: Maybe<Scalars['String']>;
  outbid_at?: Maybe<Scalars['timestamp']>;
  receipt_id?: Maybe<Scalars['String']>;
  referral_amount?: Maybe<Scalars['numeric']>;
  referrer_id?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  withdrawn_at?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "nft_offers" */
export type nft_offers_max_order_by = {
  accepted_at?: InputMaybe<order_by>;
  approval_id?: InputMaybe<order_by>;
  currency?: InputMaybe<order_by>;
  expires_at?: InputMaybe<order_by>;
  invalidated_at?: InputMaybe<order_by>;
  market_id?: InputMaybe<order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  offer_id?: InputMaybe<order_by>;
  offer_price?: InputMaybe<order_by>;
  offered_at?: InputMaybe<order_by>;
  offered_by?: InputMaybe<order_by>;
  outbid_at?: InputMaybe<order_by>;
  receipt_id?: InputMaybe<order_by>;
  referral_amount?: InputMaybe<order_by>;
  referrer_id?: InputMaybe<order_by>;
  token_id?: InputMaybe<order_by>;
  withdrawn_at?: InputMaybe<order_by>;
};

/** aggregate min on columns */
export type nft_offers_min_fields = {
  accepted_at?: Maybe<Scalars['timestamp']>;
  approval_id?: Maybe<Scalars['numeric']>;
  currency?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['timestamp']>;
  invalidated_at?: Maybe<Scalars['timestamp']>;
  market_id?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  offer_id?: Maybe<Scalars['bigint']>;
  offer_price?: Maybe<Scalars['numeric']>;
  offered_at?: Maybe<Scalars['timestamp']>;
  offered_by?: Maybe<Scalars['String']>;
  outbid_at?: Maybe<Scalars['timestamp']>;
  receipt_id?: Maybe<Scalars['String']>;
  referral_amount?: Maybe<Scalars['numeric']>;
  referrer_id?: Maybe<Scalars['String']>;
  token_id?: Maybe<Scalars['String']>;
  withdrawn_at?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "nft_offers" */
export type nft_offers_min_order_by = {
  accepted_at?: InputMaybe<order_by>;
  approval_id?: InputMaybe<order_by>;
  currency?: InputMaybe<order_by>;
  expires_at?: InputMaybe<order_by>;
  invalidated_at?: InputMaybe<order_by>;
  market_id?: InputMaybe<order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  offer_id?: InputMaybe<order_by>;
  offer_price?: InputMaybe<order_by>;
  offered_at?: InputMaybe<order_by>;
  offered_by?: InputMaybe<order_by>;
  outbid_at?: InputMaybe<order_by>;
  receipt_id?: InputMaybe<order_by>;
  referral_amount?: InputMaybe<order_by>;
  referrer_id?: InputMaybe<order_by>;
  token_id?: InputMaybe<order_by>;
  withdrawn_at?: InputMaybe<order_by>;
};

/** Ordering options when selecting data from "nft_offers". */
export type nft_offers_order_by = {
  accepted_at?: InputMaybe<order_by>;
  approval_id?: InputMaybe<order_by>;
  currency?: InputMaybe<order_by>;
  expires_at?: InputMaybe<order_by>;
  invalidated_at?: InputMaybe<order_by>;
  listing?: InputMaybe<nft_listings_order_by>;
  market_id?: InputMaybe<order_by>;
  nft_contract?: InputMaybe<nft_contracts_order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  nft_contracts?: InputMaybe<nft_contracts_order_by>;
  nft_token?: InputMaybe<mb_views_nft_tokens_order_by>;
  offer_id?: InputMaybe<order_by>;
  offer_price?: InputMaybe<order_by>;
  offered_at?: InputMaybe<order_by>;
  offered_by?: InputMaybe<order_by>;
  outbid_at?: InputMaybe<order_by>;
  receipt_id?: InputMaybe<order_by>;
  referral_amount?: InputMaybe<order_by>;
  referrer_id?: InputMaybe<order_by>;
  token?: InputMaybe<nft_tokens_order_by>;
  token_id?: InputMaybe<order_by>;
  withdrawn_at?: InputMaybe<order_by>;
};

/** select columns of table "nft_offers" */
export type nft_offers_select_column =
  /** column name */
  | 'accepted_at'
  /** column name */
  | 'approval_id'
  /** column name */
  | 'currency'
  /** column name */
  | 'expires_at'
  /** column name */
  | 'invalidated_at'
  /** column name */
  | 'market_id'
  /** column name */
  | 'nft_contract_id'
  /** column name */
  | 'offer_id'
  /** column name */
  | 'offer_price'
  /** column name */
  | 'offered_at'
  /** column name */
  | 'offered_by'
  /** column name */
  | 'outbid_at'
  /** column name */
  | 'receipt_id'
  /** column name */
  | 'referral_amount'
  /** column name */
  | 'referrer_id'
  /** column name */
  | 'token_id'
  /** column name */
  | 'withdrawn_at';

/** aggregate stddev on columns */
export type nft_offers_stddev_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  offer_price?: Maybe<Scalars['Float']>;
  referral_amount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "nft_offers" */
export type nft_offers_stddev_order_by = {
  approval_id?: InputMaybe<order_by>;
  offer_id?: InputMaybe<order_by>;
  offer_price?: InputMaybe<order_by>;
  referral_amount?: InputMaybe<order_by>;
};

/** aggregate stddev_pop on columns */
export type nft_offers_stddev_pop_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  offer_price?: Maybe<Scalars['Float']>;
  referral_amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "nft_offers" */
export type nft_offers_stddev_pop_order_by = {
  approval_id?: InputMaybe<order_by>;
  offer_id?: InputMaybe<order_by>;
  offer_price?: InputMaybe<order_by>;
  referral_amount?: InputMaybe<order_by>;
};

/** aggregate stddev_samp on columns */
export type nft_offers_stddev_samp_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  offer_price?: Maybe<Scalars['Float']>;
  referral_amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "nft_offers" */
export type nft_offers_stddev_samp_order_by = {
  approval_id?: InputMaybe<order_by>;
  offer_id?: InputMaybe<order_by>;
  offer_price?: InputMaybe<order_by>;
  referral_amount?: InputMaybe<order_by>;
};

/** Streaming cursor of the table "nft_offers" */
export type nft_offers_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: nft_offers_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type nft_offers_stream_cursor_value_input = {
  accepted_at?: InputMaybe<Scalars['timestamp']>;
  approval_id?: InputMaybe<Scalars['numeric']>;
  currency?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['timestamp']>;
  invalidated_at?: InputMaybe<Scalars['timestamp']>;
  market_id?: InputMaybe<Scalars['String']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
  offer_id?: InputMaybe<Scalars['bigint']>;
  offer_price?: InputMaybe<Scalars['numeric']>;
  offered_at?: InputMaybe<Scalars['timestamp']>;
  offered_by?: InputMaybe<Scalars['String']>;
  outbid_at?: InputMaybe<Scalars['timestamp']>;
  receipt_id?: InputMaybe<Scalars['String']>;
  referral_amount?: InputMaybe<Scalars['numeric']>;
  referrer_id?: InputMaybe<Scalars['String']>;
  token_id?: InputMaybe<Scalars['String']>;
  withdrawn_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type nft_offers_sum_fields = {
  approval_id?: Maybe<Scalars['numeric']>;
  offer_id?: Maybe<Scalars['bigint']>;
  offer_price?: Maybe<Scalars['numeric']>;
  referral_amount?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "nft_offers" */
export type nft_offers_sum_order_by = {
  approval_id?: InputMaybe<order_by>;
  offer_id?: InputMaybe<order_by>;
  offer_price?: InputMaybe<order_by>;
  referral_amount?: InputMaybe<order_by>;
};

/** aggregate var_pop on columns */
export type nft_offers_var_pop_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  offer_price?: Maybe<Scalars['Float']>;
  referral_amount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "nft_offers" */
export type nft_offers_var_pop_order_by = {
  approval_id?: InputMaybe<order_by>;
  offer_id?: InputMaybe<order_by>;
  offer_price?: InputMaybe<order_by>;
  referral_amount?: InputMaybe<order_by>;
};

/** aggregate var_samp on columns */
export type nft_offers_var_samp_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  offer_price?: Maybe<Scalars['Float']>;
  referral_amount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "nft_offers" */
export type nft_offers_var_samp_order_by = {
  approval_id?: InputMaybe<order_by>;
  offer_id?: InputMaybe<order_by>;
  offer_price?: InputMaybe<order_by>;
  referral_amount?: InputMaybe<order_by>;
};

/** aggregate variance on columns */
export type nft_offers_variance_fields = {
  approval_id?: Maybe<Scalars['Float']>;
  offer_id?: Maybe<Scalars['Float']>;
  offer_price?: Maybe<Scalars['Float']>;
  referral_amount?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "nft_offers" */
export type nft_offers_variance_order_by = {
  approval_id?: InputMaybe<order_by>;
  offer_id?: InputMaybe<order_by>;
  offer_price?: InputMaybe<order_by>;
  referral_amount?: InputMaybe<order_by>;
};

/** columns and relationships of "nft_tokens" */
export type nft_tokens = {
  burned_receipt_id?: Maybe<Scalars['String']>;
  burned_timestamp?: Maybe<Scalars['timestamp']>;
  copies?: Maybe<Scalars['bigint']>;
  expires_at?: Maybe<Scalars['timestamp']>;
  issued_at?: Maybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']>;
  metadata_id?: Maybe<Scalars['String']>;
  mint_memo?: Maybe<Scalars['String']>;
  minted_receipt_id?: Maybe<Scalars['String']>;
  minted_timestamp?: Maybe<Scalars['timestamp']>;
  minter?: Maybe<Scalars['String']>;
  /** An object relationship */
  nft_contract?: Maybe<nft_contracts>;
  nft_contract_id: Scalars['String'];
  /** An object relationship */
  nft_contracts?: Maybe<nft_contracts>;
  /** An array relationship */
  nft_listings: Array<nft_listings>;
  /** An aggregate relationship */
  nft_listings_aggregate: nft_listings_aggregate;
  owner: Scalars['String'];
  reference?: Maybe<Scalars['String']>;
  reference_hash?: Maybe<Scalars['String']>;
  royalties?: Maybe<Scalars['jsonb']>;
  royalties_percent?: Maybe<Scalars['Int']>;
  splits?: Maybe<Scalars['jsonb']>;
  starts_at?: Maybe<Scalars['timestamp']>;
  token_id: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamp']>;
};


/** columns and relationships of "nft_tokens" */
export type nft_tokensnft_listingsArgs = {
  distinct_on?: InputMaybe<Array<nft_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_listings_order_by>>;
  where?: InputMaybe<nft_listings_bool_exp>;
};


/** columns and relationships of "nft_tokens" */
export type nft_tokensnft_listings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_listings_order_by>>;
  where?: InputMaybe<nft_listings_bool_exp>;
};


/** columns and relationships of "nft_tokens" */
export type nft_tokensroyaltiesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "nft_tokens" */
export type nft_tokenssplitsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "nft_tokens" */
export type nft_tokens_aggregate = {
  aggregate?: Maybe<nft_tokens_aggregate_fields>;
  nodes: Array<nft_tokens>;
};

/** aggregate fields of "nft_tokens" */
export type nft_tokens_aggregate_fields = {
  avg?: Maybe<nft_tokens_avg_fields>;
  count: Scalars['Int'];
  max?: Maybe<nft_tokens_max_fields>;
  min?: Maybe<nft_tokens_min_fields>;
  stddev?: Maybe<nft_tokens_stddev_fields>;
  stddev_pop?: Maybe<nft_tokens_stddev_pop_fields>;
  stddev_samp?: Maybe<nft_tokens_stddev_samp_fields>;
  sum?: Maybe<nft_tokens_sum_fields>;
  var_pop?: Maybe<nft_tokens_var_pop_fields>;
  var_samp?: Maybe<nft_tokens_var_samp_fields>;
  variance?: Maybe<nft_tokens_variance_fields>;
};


/** aggregate fields of "nft_tokens" */
export type nft_tokens_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<nft_tokens_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type nft_tokens_avg_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "nft_tokens". All fields are combined with a logical 'AND'. */
export type nft_tokens_bool_exp = {
  _and?: InputMaybe<Array<nft_tokens_bool_exp>>;
  _not?: InputMaybe<nft_tokens_bool_exp>;
  _or?: InputMaybe<Array<nft_tokens_bool_exp>>;
  burned_receipt_id?: InputMaybe<String_comparison_exp>;
  burned_timestamp?: InputMaybe<timestamp_comparison_exp>;
  copies?: InputMaybe<bigint_comparison_exp>;
  expires_at?: InputMaybe<timestamp_comparison_exp>;
  issued_at?: InputMaybe<timestamp_comparison_exp>;
  last_transfer_receipt_id?: InputMaybe<String_comparison_exp>;
  last_transfer_timestamp?: InputMaybe<timestamp_comparison_exp>;
  metadata_id?: InputMaybe<String_comparison_exp>;
  mint_memo?: InputMaybe<String_comparison_exp>;
  minted_receipt_id?: InputMaybe<String_comparison_exp>;
  minted_timestamp?: InputMaybe<timestamp_comparison_exp>;
  minter?: InputMaybe<String_comparison_exp>;
  nft_contract?: InputMaybe<nft_contracts_bool_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  nft_contracts?: InputMaybe<nft_contracts_bool_exp>;
  nft_listings?: InputMaybe<nft_listings_bool_exp>;
  nft_listings_aggregate?: InputMaybe<nft_listings_aggregate_bool_exp>;
  owner?: InputMaybe<String_comparison_exp>;
  reference?: InputMaybe<String_comparison_exp>;
  reference_hash?: InputMaybe<String_comparison_exp>;
  royalties?: InputMaybe<jsonb_comparison_exp>;
  royalties_percent?: InputMaybe<Int_comparison_exp>;
  splits?: InputMaybe<jsonb_comparison_exp>;
  starts_at?: InputMaybe<timestamp_comparison_exp>;
  token_id?: InputMaybe<String_comparison_exp>;
  updated_at?: InputMaybe<timestamp_comparison_exp>;
};

/** aggregate max on columns */
export type nft_tokens_max_fields = {
  burned_receipt_id?: Maybe<Scalars['String']>;
  burned_timestamp?: Maybe<Scalars['timestamp']>;
  copies?: Maybe<Scalars['bigint']>;
  expires_at?: Maybe<Scalars['timestamp']>;
  issued_at?: Maybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']>;
  metadata_id?: Maybe<Scalars['String']>;
  mint_memo?: Maybe<Scalars['String']>;
  minted_receipt_id?: Maybe<Scalars['String']>;
  minted_timestamp?: Maybe<Scalars['timestamp']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_hash?: Maybe<Scalars['String']>;
  royalties_percent?: Maybe<Scalars['Int']>;
  starts_at?: Maybe<Scalars['timestamp']>;
  token_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate min on columns */
export type nft_tokens_min_fields = {
  burned_receipt_id?: Maybe<Scalars['String']>;
  burned_timestamp?: Maybe<Scalars['timestamp']>;
  copies?: Maybe<Scalars['bigint']>;
  expires_at?: Maybe<Scalars['timestamp']>;
  issued_at?: Maybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']>;
  metadata_id?: Maybe<Scalars['String']>;
  mint_memo?: Maybe<Scalars['String']>;
  minted_receipt_id?: Maybe<Scalars['String']>;
  minted_timestamp?: Maybe<Scalars['timestamp']>;
  minter?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  owner?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_hash?: Maybe<Scalars['String']>;
  royalties_percent?: Maybe<Scalars['Int']>;
  starts_at?: Maybe<Scalars['timestamp']>;
  token_id?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** Ordering options when selecting data from "nft_tokens". */
export type nft_tokens_order_by = {
  burned_receipt_id?: InputMaybe<order_by>;
  burned_timestamp?: InputMaybe<order_by>;
  copies?: InputMaybe<order_by>;
  expires_at?: InputMaybe<order_by>;
  issued_at?: InputMaybe<order_by>;
  last_transfer_receipt_id?: InputMaybe<order_by>;
  last_transfer_timestamp?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  mint_memo?: InputMaybe<order_by>;
  minted_receipt_id?: InputMaybe<order_by>;
  minted_timestamp?: InputMaybe<order_by>;
  minter?: InputMaybe<order_by>;
  nft_contract?: InputMaybe<nft_contracts_order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  nft_contracts?: InputMaybe<nft_contracts_order_by>;
  nft_listings_aggregate?: InputMaybe<nft_listings_aggregate_order_by>;
  owner?: InputMaybe<order_by>;
  reference?: InputMaybe<order_by>;
  reference_hash?: InputMaybe<order_by>;
  royalties?: InputMaybe<order_by>;
  royalties_percent?: InputMaybe<order_by>;
  splits?: InputMaybe<order_by>;
  starts_at?: InputMaybe<order_by>;
  token_id?: InputMaybe<order_by>;
  updated_at?: InputMaybe<order_by>;
};

/** select columns of table "nft_tokens" */
export type nft_tokens_select_column =
  /** column name */
  | 'burned_receipt_id'
  /** column name */
  | 'burned_timestamp'
  /** column name */
  | 'copies'
  /** column name */
  | 'expires_at'
  /** column name */
  | 'issued_at'
  /** column name */
  | 'last_transfer_receipt_id'
  /** column name */
  | 'last_transfer_timestamp'
  /** column name */
  | 'metadata_id'
  /** column name */
  | 'mint_memo'
  /** column name */
  | 'minted_receipt_id'
  /** column name */
  | 'minted_timestamp'
  /** column name */
  | 'minter'
  /** column name */
  | 'nft_contract_id'
  /** column name */
  | 'owner'
  /** column name */
  | 'reference'
  /** column name */
  | 'reference_hash'
  /** column name */
  | 'royalties'
  /** column name */
  | 'royalties_percent'
  /** column name */
  | 'splits'
  /** column name */
  | 'starts_at'
  /** column name */
  | 'token_id'
  /** column name */
  | 'updated_at';

/** aggregate stddev on columns */
export type nft_tokens_stddev_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type nft_tokens_stddev_pop_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type nft_tokens_stddev_samp_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "nft_tokens" */
export type nft_tokens_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: nft_tokens_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type nft_tokens_stream_cursor_value_input = {
  burned_receipt_id?: InputMaybe<Scalars['String']>;
  burned_timestamp?: InputMaybe<Scalars['timestamp']>;
  copies?: InputMaybe<Scalars['bigint']>;
  expires_at?: InputMaybe<Scalars['timestamp']>;
  issued_at?: InputMaybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: InputMaybe<Scalars['String']>;
  last_transfer_timestamp?: InputMaybe<Scalars['timestamp']>;
  metadata_id?: InputMaybe<Scalars['String']>;
  mint_memo?: InputMaybe<Scalars['String']>;
  minted_receipt_id?: InputMaybe<Scalars['String']>;
  minted_timestamp?: InputMaybe<Scalars['timestamp']>;
  minter?: InputMaybe<Scalars['String']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  reference?: InputMaybe<Scalars['String']>;
  reference_hash?: InputMaybe<Scalars['String']>;
  royalties?: InputMaybe<Scalars['jsonb']>;
  royalties_percent?: InputMaybe<Scalars['Int']>;
  splits?: InputMaybe<Scalars['jsonb']>;
  starts_at?: InputMaybe<Scalars['timestamp']>;
  token_id?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamp']>;
};

/** aggregate sum on columns */
export type nft_tokens_sum_fields = {
  copies?: Maybe<Scalars['bigint']>;
  royalties_percent?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type nft_tokens_var_pop_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type nft_tokens_var_samp_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type nft_tokens_variance_fields = {
  copies?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type numeric_comparison_exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export type order_by =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type timestamp_comparison_exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Describes the authentication object as provided by Auth0. */
export type AuthenticationInfo = {
  /** String that uniquely identifies an authenticated user. */
  sub: Scalars['String'];
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string | ((fieldNode: FieldNode) => SelectionSetNode);
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Cursor: ResolverTypeWrapper<Scalars['Cursor']>;
  AttributesOrderBy: AttributesOrderBy;
  AttributeCondition: AttributeCondition;
  String: ResolverTypeWrapper<Scalars['String']>;
  AttributesConnection: ResolverTypeWrapper<AttributesConnection>;
  Attribute: ResolverTypeWrapper<Attribute>;
  Datetime: ResolverTypeWrapper<Scalars['Datetime']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  RelationshipsOrderBy: RelationshipsOrderBy;
  RelationshipCondition: RelationshipCondition;
  RelationshipsConnection: ResolverTypeWrapper<RelationshipsConnection>;
  Relationship: ResolverTypeWrapper<Relationship>;
  Option: ResolverTypeWrapper<Option>;
  CharacteristicsOrderBy: CharacteristicsOrderBy;
  CharacteristicCondition: CharacteristicCondition;
  CharacteristicsConnection: ResolverTypeWrapper<CharacteristicsConnection>;
  Characteristic: ResolverTypeWrapper<Characteristic>;
  Thing: ResolverTypeWrapper<Thing>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  PrivacyType: PrivacyType;
  TagsOrderBy: TagsOrderBy;
  TagCondition: TagCondition;
  TagsConnection: ResolverTypeWrapper<TagsConnection>;
  Tag: ResolverTypeWrapper<Tag>;
  Media: ResolverTypeWrapper<Media>;
  TagsEdge: ResolverTypeWrapper<TagsEdge>;
  PageInfo: ResolverTypeWrapper<PageInfo>;
  CharacteristicsEdge: ResolverTypeWrapper<CharacteristicsEdge>;
  RelationshipsEdge: ResolverTypeWrapper<RelationshipsEdge>;
  AttributesEdge: ResolverTypeWrapper<AttributesEdge>;
  MediaOrderBy: MediaOrderBy;
  MediaCondition: MediaCondition;
  MediaConnection: ResolverTypeWrapper<MediaConnection>;
  MediaEdge: ResolverTypeWrapper<MediaEdge>;
  OptionsOrderBy: OptionsOrderBy;
  OptionCondition: OptionCondition;
  OptionsConnection: ResolverTypeWrapper<OptionsConnection>;
  OptionsEdge: ResolverTypeWrapper<OptionsEdge>;
  ThingsOrderBy: ThingsOrderBy;
  ThingCondition: ThingCondition;
  ThingsConnection: ResolverTypeWrapper<ThingsConnection>;
  ThingsEdge: ResolverTypeWrapper<ThingsEdge>;
  UsersOrderBy: UsersOrderBy;
  UserCondition: UserCondition;
  UsersConnection: ResolverTypeWrapper<UsersConnection>;
  User: ResolverTypeWrapper<User>;
  UsersEdge: ResolverTypeWrapper<UsersEdge>;
  CreateThingInput: CreateThingInput;
  NewCharacteristicInput: NewCharacteristicInput;
  CreateThingPayload: ResolverTypeWrapper<CreateThingPayload>;
  CreateMediaInput: CreateMediaInput;
  CreateMediaPayload: ResolverTypeWrapper<CreateMediaPayload>;
  ProposeAttributeInput: ProposeAttributeInput;
  ProposeAttributePayload: ResolverTypeWrapper<ProposeAttributePayload>;
  CreateAttributeInput: CreateAttributeInput;
  CreateOptionInput: CreateOptionInput;
  CreateAttributePayload: ResolverTypeWrapper<CreateAttributePayload>;
  ProposeOptionInput: ProposeOptionInput;
  ProposeOptionPayload: ResolverTypeWrapper<ProposeOptionPayload>;
  Subscription: ResolverTypeWrapper<{}>;
  Boolean_comparison_exp: Boolean_comparison_exp;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int_comparison_exp: Int_comparison_exp;
  String_comparison_exp: String_comparison_exp;
  bigint: ResolverTypeWrapper<Scalars['bigint']>;
  bigint_comparison_exp: bigint_comparison_exp;
  blocks: ResolverTypeWrapper<blocks>;
  blocks_aggregate: ResolverTypeWrapper<blocks_aggregate>;
  blocks_aggregate_fields: ResolverTypeWrapper<blocks_aggregate_fields>;
  blocks_avg_fields: ResolverTypeWrapper<blocks_avg_fields>;
  blocks_bool_exp: blocks_bool_exp;
  blocks_max_fields: ResolverTypeWrapper<blocks_max_fields>;
  blocks_min_fields: ResolverTypeWrapper<blocks_min_fields>;
  blocks_order_by: blocks_order_by;
  blocks_select_column: blocks_select_column;
  blocks_stddev_fields: ResolverTypeWrapper<blocks_stddev_fields>;
  blocks_stddev_pop_fields: ResolverTypeWrapper<blocks_stddev_pop_fields>;
  blocks_stddev_samp_fields: ResolverTypeWrapper<blocks_stddev_samp_fields>;
  blocks_stream_cursor_input: blocks_stream_cursor_input;
  blocks_stream_cursor_value_input: blocks_stream_cursor_value_input;
  blocks_sum_fields: ResolverTypeWrapper<blocks_sum_fields>;
  blocks_var_pop_fields: ResolverTypeWrapper<blocks_var_pop_fields>;
  blocks_var_samp_fields: ResolverTypeWrapper<blocks_var_samp_fields>;
  blocks_variance_fields: ResolverTypeWrapper<blocks_variance_fields>;
  cursor_ordering: cursor_ordering;
  jsonb: ResolverTypeWrapper<Scalars['jsonb']>;
  jsonb_cast_exp: jsonb_cast_exp;
  jsonb_comparison_exp: jsonb_comparison_exp;
  mb_store_minters: ResolverTypeWrapper<mb_store_minters>;
  mb_store_minters_aggregate: ResolverTypeWrapper<mb_store_minters_aggregate>;
  mb_store_minters_aggregate_fields: ResolverTypeWrapper<mb_store_minters_aggregate_fields>;
  mb_store_minters_bool_exp: mb_store_minters_bool_exp;
  mb_store_minters_max_fields: ResolverTypeWrapper<mb_store_minters_max_fields>;
  mb_store_minters_min_fields: ResolverTypeWrapper<mb_store_minters_min_fields>;
  mb_store_minters_order_by: mb_store_minters_order_by;
  mb_store_minters_select_column: mb_store_minters_select_column;
  mb_store_minters_stream_cursor_input: mb_store_minters_stream_cursor_input;
  mb_store_minters_stream_cursor_value_input: mb_store_minters_stream_cursor_value_input;
  mb_views_active_listings: ResolverTypeWrapper<mb_views_active_listings>;
  mb_views_active_listings_aggregate: ResolverTypeWrapper<mb_views_active_listings_aggregate>;
  mb_views_active_listings_aggregate_bool_exp: mb_views_active_listings_aggregate_bool_exp;
  mb_views_active_listings_aggregate_bool_exp_count: mb_views_active_listings_aggregate_bool_exp_count;
  mb_views_active_listings_aggregate_fields: ResolverTypeWrapper<mb_views_active_listings_aggregate_fields>;
  mb_views_active_listings_aggregate_order_by: mb_views_active_listings_aggregate_order_by;
  mb_views_active_listings_avg_fields: ResolverTypeWrapper<mb_views_active_listings_avg_fields>;
  mb_views_active_listings_avg_order_by: mb_views_active_listings_avg_order_by;
  mb_views_active_listings_bool_exp: mb_views_active_listings_bool_exp;
  mb_views_active_listings_max_fields: ResolverTypeWrapper<mb_views_active_listings_max_fields>;
  mb_views_active_listings_max_order_by: mb_views_active_listings_max_order_by;
  mb_views_active_listings_min_fields: ResolverTypeWrapper<mb_views_active_listings_min_fields>;
  mb_views_active_listings_min_order_by: mb_views_active_listings_min_order_by;
  mb_views_active_listings_order_by: mb_views_active_listings_order_by;
  mb_views_active_listings_rollup: ResolverTypeWrapper<mb_views_active_listings_rollup>;
  mb_views_active_listings_rollup_aggregate: ResolverTypeWrapper<mb_views_active_listings_rollup_aggregate>;
  mb_views_active_listings_rollup_aggregate_fields: ResolverTypeWrapper<mb_views_active_listings_rollup_aggregate_fields>;
  mb_views_active_listings_rollup_avg_fields: ResolverTypeWrapper<mb_views_active_listings_rollup_avg_fields>;
  mb_views_active_listings_rollup_bool_exp: mb_views_active_listings_rollup_bool_exp;
  mb_views_active_listings_rollup_max_fields: ResolverTypeWrapper<mb_views_active_listings_rollup_max_fields>;
  mb_views_active_listings_rollup_min_fields: ResolverTypeWrapper<mb_views_active_listings_rollup_min_fields>;
  mb_views_active_listings_rollup_order_by: mb_views_active_listings_rollup_order_by;
  mb_views_active_listings_rollup_select_column: mb_views_active_listings_rollup_select_column;
  mb_views_active_listings_rollup_stddev_fields: ResolverTypeWrapper<mb_views_active_listings_rollup_stddev_fields>;
  mb_views_active_listings_rollup_stddev_pop_fields: ResolverTypeWrapper<mb_views_active_listings_rollup_stddev_pop_fields>;
  mb_views_active_listings_rollup_stddev_samp_fields: ResolverTypeWrapper<mb_views_active_listings_rollup_stddev_samp_fields>;
  mb_views_active_listings_rollup_stream_cursor_input: mb_views_active_listings_rollup_stream_cursor_input;
  mb_views_active_listings_rollup_stream_cursor_value_input: mb_views_active_listings_rollup_stream_cursor_value_input;
  mb_views_active_listings_rollup_sum_fields: ResolverTypeWrapper<mb_views_active_listings_rollup_sum_fields>;
  mb_views_active_listings_rollup_var_pop_fields: ResolverTypeWrapper<mb_views_active_listings_rollup_var_pop_fields>;
  mb_views_active_listings_rollup_var_samp_fields: ResolverTypeWrapper<mb_views_active_listings_rollup_var_samp_fields>;
  mb_views_active_listings_rollup_variance_fields: ResolverTypeWrapper<mb_views_active_listings_rollup_variance_fields>;
  mb_views_active_listings_select_column: mb_views_active_listings_select_column;
  mb_views_active_listings_stddev_fields: ResolverTypeWrapper<mb_views_active_listings_stddev_fields>;
  mb_views_active_listings_stddev_order_by: mb_views_active_listings_stddev_order_by;
  mb_views_active_listings_stddev_pop_fields: ResolverTypeWrapper<mb_views_active_listings_stddev_pop_fields>;
  mb_views_active_listings_stddev_pop_order_by: mb_views_active_listings_stddev_pop_order_by;
  mb_views_active_listings_stddev_samp_fields: ResolverTypeWrapper<mb_views_active_listings_stddev_samp_fields>;
  mb_views_active_listings_stddev_samp_order_by: mb_views_active_listings_stddev_samp_order_by;
  mb_views_active_listings_stream_cursor_input: mb_views_active_listings_stream_cursor_input;
  mb_views_active_listings_stream_cursor_value_input: mb_views_active_listings_stream_cursor_value_input;
  mb_views_active_listings_sum_fields: ResolverTypeWrapper<mb_views_active_listings_sum_fields>;
  mb_views_active_listings_sum_order_by: mb_views_active_listings_sum_order_by;
  mb_views_active_listings_var_pop_fields: ResolverTypeWrapper<mb_views_active_listings_var_pop_fields>;
  mb_views_active_listings_var_pop_order_by: mb_views_active_listings_var_pop_order_by;
  mb_views_active_listings_var_samp_fields: ResolverTypeWrapper<mb_views_active_listings_var_samp_fields>;
  mb_views_active_listings_var_samp_order_by: mb_views_active_listings_var_samp_order_by;
  mb_views_active_listings_variance_fields: ResolverTypeWrapper<mb_views_active_listings_variance_fields>;
  mb_views_active_listings_variance_order_by: mb_views_active_listings_variance_order_by;
  mb_views_auctions_with_offer: ResolverTypeWrapper<mb_views_auctions_with_offer>;
  mb_views_auctions_with_offer_aggregate: ResolverTypeWrapper<mb_views_auctions_with_offer_aggregate>;
  mb_views_auctions_with_offer_aggregate_fields: ResolverTypeWrapper<mb_views_auctions_with_offer_aggregate_fields>;
  mb_views_auctions_with_offer_avg_fields: ResolverTypeWrapper<mb_views_auctions_with_offer_avg_fields>;
  mb_views_auctions_with_offer_bool_exp: mb_views_auctions_with_offer_bool_exp;
  mb_views_auctions_with_offer_max_fields: ResolverTypeWrapper<mb_views_auctions_with_offer_max_fields>;
  mb_views_auctions_with_offer_min_fields: ResolverTypeWrapper<mb_views_auctions_with_offer_min_fields>;
  mb_views_auctions_with_offer_order_by: mb_views_auctions_with_offer_order_by;
  mb_views_auctions_with_offer_select_column: mb_views_auctions_with_offer_select_column;
  mb_views_auctions_with_offer_stddev_fields: ResolverTypeWrapper<mb_views_auctions_with_offer_stddev_fields>;
  mb_views_auctions_with_offer_stddev_pop_fields: ResolverTypeWrapper<mb_views_auctions_with_offer_stddev_pop_fields>;
  mb_views_auctions_with_offer_stddev_samp_fields: ResolverTypeWrapper<mb_views_auctions_with_offer_stddev_samp_fields>;
  mb_views_auctions_with_offer_stream_cursor_input: mb_views_auctions_with_offer_stream_cursor_input;
  mb_views_auctions_with_offer_stream_cursor_value_input: mb_views_auctions_with_offer_stream_cursor_value_input;
  mb_views_auctions_with_offer_sum_fields: ResolverTypeWrapper<mb_views_auctions_with_offer_sum_fields>;
  mb_views_auctions_with_offer_var_pop_fields: ResolverTypeWrapper<mb_views_auctions_with_offer_var_pop_fields>;
  mb_views_auctions_with_offer_var_samp_fields: ResolverTypeWrapper<mb_views_auctions_with_offer_var_samp_fields>;
  mb_views_auctions_with_offer_variance_fields: ResolverTypeWrapper<mb_views_auctions_with_offer_variance_fields>;
  mb_views_nft_activities: ResolverTypeWrapper<mb_views_nft_activities>;
  mb_views_nft_activities_aggregate: ResolverTypeWrapper<mb_views_nft_activities_aggregate>;
  mb_views_nft_activities_aggregate_fields: ResolverTypeWrapper<mb_views_nft_activities_aggregate_fields>;
  mb_views_nft_activities_avg_fields: ResolverTypeWrapper<mb_views_nft_activities_avg_fields>;
  mb_views_nft_activities_bool_exp: mb_views_nft_activities_bool_exp;
  mb_views_nft_activities_max_fields: ResolverTypeWrapper<mb_views_nft_activities_max_fields>;
  mb_views_nft_activities_min_fields: ResolverTypeWrapper<mb_views_nft_activities_min_fields>;
  mb_views_nft_activities_order_by: mb_views_nft_activities_order_by;
  mb_views_nft_activities_select_column: mb_views_nft_activities_select_column;
  mb_views_nft_activities_stddev_fields: ResolverTypeWrapper<mb_views_nft_activities_stddev_fields>;
  mb_views_nft_activities_stddev_pop_fields: ResolverTypeWrapper<mb_views_nft_activities_stddev_pop_fields>;
  mb_views_nft_activities_stddev_samp_fields: ResolverTypeWrapper<mb_views_nft_activities_stddev_samp_fields>;
  mb_views_nft_activities_stream_cursor_input: mb_views_nft_activities_stream_cursor_input;
  mb_views_nft_activities_stream_cursor_value_input: mb_views_nft_activities_stream_cursor_value_input;
  mb_views_nft_activities_sum_fields: ResolverTypeWrapper<mb_views_nft_activities_sum_fields>;
  mb_views_nft_activities_var_pop_fields: ResolverTypeWrapper<mb_views_nft_activities_var_pop_fields>;
  mb_views_nft_activities_var_samp_fields: ResolverTypeWrapper<mb_views_nft_activities_var_samp_fields>;
  mb_views_nft_activities_variance_fields: ResolverTypeWrapper<mb_views_nft_activities_variance_fields>;
  mb_views_nft_metadata: ResolverTypeWrapper<mb_views_nft_metadata>;
  mb_views_nft_metadata_aggregate: ResolverTypeWrapper<mb_views_nft_metadata_aggregate>;
  mb_views_nft_metadata_aggregate_fields: ResolverTypeWrapper<mb_views_nft_metadata_aggregate_fields>;
  mb_views_nft_metadata_bool_exp: mb_views_nft_metadata_bool_exp;
  mb_views_nft_metadata_max_fields: ResolverTypeWrapper<mb_views_nft_metadata_max_fields>;
  mb_views_nft_metadata_min_fields: ResolverTypeWrapper<mb_views_nft_metadata_min_fields>;
  mb_views_nft_metadata_order_by: mb_views_nft_metadata_order_by;
  mb_views_nft_metadata_select_column: mb_views_nft_metadata_select_column;
  mb_views_nft_metadata_stream_cursor_input: mb_views_nft_metadata_stream_cursor_input;
  mb_views_nft_metadata_stream_cursor_value_input: mb_views_nft_metadata_stream_cursor_value_input;
  mb_views_nft_metadata_unburned: ResolverTypeWrapper<mb_views_nft_metadata_unburned>;
  mb_views_nft_metadata_unburned_aggregate: ResolverTypeWrapper<mb_views_nft_metadata_unburned_aggregate>;
  mb_views_nft_metadata_unburned_aggregate_fields: ResolverTypeWrapper<mb_views_nft_metadata_unburned_aggregate_fields>;
  mb_views_nft_metadata_unburned_avg_fields: ResolverTypeWrapper<mb_views_nft_metadata_unburned_avg_fields>;
  mb_views_nft_metadata_unburned_bool_exp: mb_views_nft_metadata_unburned_bool_exp;
  mb_views_nft_metadata_unburned_max_fields: ResolverTypeWrapper<mb_views_nft_metadata_unburned_max_fields>;
  mb_views_nft_metadata_unburned_min_fields: ResolverTypeWrapper<mb_views_nft_metadata_unburned_min_fields>;
  mb_views_nft_metadata_unburned_order_by: mb_views_nft_metadata_unburned_order_by;
  mb_views_nft_metadata_unburned_select_column: mb_views_nft_metadata_unburned_select_column;
  mb_views_nft_metadata_unburned_stddev_fields: ResolverTypeWrapper<mb_views_nft_metadata_unburned_stddev_fields>;
  mb_views_nft_metadata_unburned_stddev_pop_fields: ResolverTypeWrapper<mb_views_nft_metadata_unburned_stddev_pop_fields>;
  mb_views_nft_metadata_unburned_stddev_samp_fields: ResolverTypeWrapper<mb_views_nft_metadata_unburned_stddev_samp_fields>;
  mb_views_nft_metadata_unburned_stream_cursor_input: mb_views_nft_metadata_unburned_stream_cursor_input;
  mb_views_nft_metadata_unburned_stream_cursor_value_input: mb_views_nft_metadata_unburned_stream_cursor_value_input;
  mb_views_nft_metadata_unburned_sum_fields: ResolverTypeWrapper<mb_views_nft_metadata_unburned_sum_fields>;
  mb_views_nft_metadata_unburned_var_pop_fields: ResolverTypeWrapper<mb_views_nft_metadata_unburned_var_pop_fields>;
  mb_views_nft_metadata_unburned_var_samp_fields: ResolverTypeWrapper<mb_views_nft_metadata_unburned_var_samp_fields>;
  mb_views_nft_metadata_unburned_variance_fields: ResolverTypeWrapper<mb_views_nft_metadata_unburned_variance_fields>;
  mb_views_nft_owned_tokens: ResolverTypeWrapper<mb_views_nft_owned_tokens>;
  mb_views_nft_owned_tokens_aggregate: ResolverTypeWrapper<mb_views_nft_owned_tokens_aggregate>;
  mb_views_nft_owned_tokens_aggregate_fields: ResolverTypeWrapper<mb_views_nft_owned_tokens_aggregate_fields>;
  mb_views_nft_owned_tokens_avg_fields: ResolverTypeWrapper<mb_views_nft_owned_tokens_avg_fields>;
  mb_views_nft_owned_tokens_bool_exp: mb_views_nft_owned_tokens_bool_exp;
  mb_views_nft_owned_tokens_max_fields: ResolverTypeWrapper<mb_views_nft_owned_tokens_max_fields>;
  mb_views_nft_owned_tokens_min_fields: ResolverTypeWrapper<mb_views_nft_owned_tokens_min_fields>;
  mb_views_nft_owned_tokens_order_by: mb_views_nft_owned_tokens_order_by;
  mb_views_nft_owned_tokens_select_column: mb_views_nft_owned_tokens_select_column;
  mb_views_nft_owned_tokens_stddev_fields: ResolverTypeWrapper<mb_views_nft_owned_tokens_stddev_fields>;
  mb_views_nft_owned_tokens_stddev_pop_fields: ResolverTypeWrapper<mb_views_nft_owned_tokens_stddev_pop_fields>;
  mb_views_nft_owned_tokens_stddev_samp_fields: ResolverTypeWrapper<mb_views_nft_owned_tokens_stddev_samp_fields>;
  mb_views_nft_owned_tokens_stream_cursor_input: mb_views_nft_owned_tokens_stream_cursor_input;
  mb_views_nft_owned_tokens_stream_cursor_value_input: mb_views_nft_owned_tokens_stream_cursor_value_input;
  mb_views_nft_owned_tokens_sum_fields: ResolverTypeWrapper<mb_views_nft_owned_tokens_sum_fields>;
  mb_views_nft_owned_tokens_var_pop_fields: ResolverTypeWrapper<mb_views_nft_owned_tokens_var_pop_fields>;
  mb_views_nft_owned_tokens_var_samp_fields: ResolverTypeWrapper<mb_views_nft_owned_tokens_var_samp_fields>;
  mb_views_nft_owned_tokens_variance_fields: ResolverTypeWrapper<mb_views_nft_owned_tokens_variance_fields>;
  mb_views_nft_tokens: ResolverTypeWrapper<mb_views_nft_tokens>;
  mb_views_nft_tokens_aggregate: ResolverTypeWrapper<mb_views_nft_tokens_aggregate>;
  mb_views_nft_tokens_aggregate_fields: ResolverTypeWrapper<mb_views_nft_tokens_aggregate_fields>;
  mb_views_nft_tokens_avg_fields: ResolverTypeWrapper<mb_views_nft_tokens_avg_fields>;
  mb_views_nft_tokens_bool_exp: mb_views_nft_tokens_bool_exp;
  mb_views_nft_tokens_max_fields: ResolverTypeWrapper<mb_views_nft_tokens_max_fields>;
  mb_views_nft_tokens_min_fields: ResolverTypeWrapper<mb_views_nft_tokens_min_fields>;
  mb_views_nft_tokens_order_by: mb_views_nft_tokens_order_by;
  mb_views_nft_tokens_select_column: mb_views_nft_tokens_select_column;
  mb_views_nft_tokens_stddev_fields: ResolverTypeWrapper<mb_views_nft_tokens_stddev_fields>;
  mb_views_nft_tokens_stddev_pop_fields: ResolverTypeWrapper<mb_views_nft_tokens_stddev_pop_fields>;
  mb_views_nft_tokens_stddev_samp_fields: ResolverTypeWrapper<mb_views_nft_tokens_stddev_samp_fields>;
  mb_views_nft_tokens_stream_cursor_input: mb_views_nft_tokens_stream_cursor_input;
  mb_views_nft_tokens_stream_cursor_value_input: mb_views_nft_tokens_stream_cursor_value_input;
  mb_views_nft_tokens_sum_fields: ResolverTypeWrapper<mb_views_nft_tokens_sum_fields>;
  mb_views_nft_tokens_var_pop_fields: ResolverTypeWrapper<mb_views_nft_tokens_var_pop_fields>;
  mb_views_nft_tokens_var_samp_fields: ResolverTypeWrapper<mb_views_nft_tokens_var_samp_fields>;
  mb_views_nft_tokens_variance_fields: ResolverTypeWrapper<mb_views_nft_tokens_variance_fields>;
  mb_views_nft_tokens_with_listing: ResolverTypeWrapper<mb_views_nft_tokens_with_listing>;
  mb_views_nft_tokens_with_listing_aggregate: ResolverTypeWrapper<mb_views_nft_tokens_with_listing_aggregate>;
  mb_views_nft_tokens_with_listing_aggregate_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_listing_aggregate_fields>;
  mb_views_nft_tokens_with_listing_avg_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_listing_avg_fields>;
  mb_views_nft_tokens_with_listing_bool_exp: mb_views_nft_tokens_with_listing_bool_exp;
  mb_views_nft_tokens_with_listing_max_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_listing_max_fields>;
  mb_views_nft_tokens_with_listing_min_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_listing_min_fields>;
  mb_views_nft_tokens_with_listing_order_by: mb_views_nft_tokens_with_listing_order_by;
  mb_views_nft_tokens_with_listing_select_column: mb_views_nft_tokens_with_listing_select_column;
  mb_views_nft_tokens_with_listing_stddev_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_listing_stddev_fields>;
  mb_views_nft_tokens_with_listing_stddev_pop_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_listing_stddev_pop_fields>;
  mb_views_nft_tokens_with_listing_stddev_samp_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_listing_stddev_samp_fields>;
  mb_views_nft_tokens_with_listing_stream_cursor_input: mb_views_nft_tokens_with_listing_stream_cursor_input;
  mb_views_nft_tokens_with_listing_stream_cursor_value_input: mb_views_nft_tokens_with_listing_stream_cursor_value_input;
  mb_views_nft_tokens_with_listing_sum_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_listing_sum_fields>;
  mb_views_nft_tokens_with_listing_var_pop_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_listing_var_pop_fields>;
  mb_views_nft_tokens_with_listing_var_samp_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_listing_var_samp_fields>;
  mb_views_nft_tokens_with_listing_variance_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_listing_variance_fields>;
  mb_views_nft_tokens_with_media_type: ResolverTypeWrapper<mb_views_nft_tokens_with_media_type>;
  mb_views_nft_tokens_with_media_type_aggregate: ResolverTypeWrapper<mb_views_nft_tokens_with_media_type_aggregate>;
  mb_views_nft_tokens_with_media_type_aggregate_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_media_type_aggregate_fields>;
  mb_views_nft_tokens_with_media_type_avg_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_media_type_avg_fields>;
  mb_views_nft_tokens_with_media_type_bool_exp: mb_views_nft_tokens_with_media_type_bool_exp;
  mb_views_nft_tokens_with_media_type_max_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_media_type_max_fields>;
  mb_views_nft_tokens_with_media_type_min_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_media_type_min_fields>;
  mb_views_nft_tokens_with_media_type_order_by: mb_views_nft_tokens_with_media_type_order_by;
  mb_views_nft_tokens_with_media_type_select_column: mb_views_nft_tokens_with_media_type_select_column;
  mb_views_nft_tokens_with_media_type_stddev_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_media_type_stddev_fields>;
  mb_views_nft_tokens_with_media_type_stddev_pop_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_media_type_stddev_pop_fields>;
  mb_views_nft_tokens_with_media_type_stddev_samp_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_media_type_stddev_samp_fields>;
  mb_views_nft_tokens_with_media_type_stream_cursor_input: mb_views_nft_tokens_with_media_type_stream_cursor_input;
  mb_views_nft_tokens_with_media_type_stream_cursor_value_input: mb_views_nft_tokens_with_media_type_stream_cursor_value_input;
  mb_views_nft_tokens_with_media_type_sum_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_media_type_sum_fields>;
  mb_views_nft_tokens_with_media_type_var_pop_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_media_type_var_pop_fields>;
  mb_views_nft_tokens_with_media_type_var_samp_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_media_type_var_samp_fields>;
  mb_views_nft_tokens_with_media_type_variance_fields: ResolverTypeWrapper<mb_views_nft_tokens_with_media_type_variance_fields>;
  mb_views_top_stores: ResolverTypeWrapper<mb_views_top_stores>;
  mb_views_top_stores_aggregate: ResolverTypeWrapper<mb_views_top_stores_aggregate>;
  mb_views_top_stores_aggregate_fields: ResolverTypeWrapper<mb_views_top_stores_aggregate_fields>;
  mb_views_top_stores_avg_fields: ResolverTypeWrapper<mb_views_top_stores_avg_fields>;
  mb_views_top_stores_bool_exp: mb_views_top_stores_bool_exp;
  mb_views_top_stores_max_fields: ResolverTypeWrapper<mb_views_top_stores_max_fields>;
  mb_views_top_stores_min_fields: ResolverTypeWrapper<mb_views_top_stores_min_fields>;
  mb_views_top_stores_order_by: mb_views_top_stores_order_by;
  mb_views_top_stores_select_column: mb_views_top_stores_select_column;
  mb_views_top_stores_stddev_fields: ResolverTypeWrapper<mb_views_top_stores_stddev_fields>;
  mb_views_top_stores_stddev_pop_fields: ResolverTypeWrapper<mb_views_top_stores_stddev_pop_fields>;
  mb_views_top_stores_stddev_samp_fields: ResolverTypeWrapper<mb_views_top_stores_stddev_samp_fields>;
  mb_views_top_stores_stream_cursor_input: mb_views_top_stores_stream_cursor_input;
  mb_views_top_stores_stream_cursor_value_input: mb_views_top_stores_stream_cursor_value_input;
  mb_views_top_stores_sum_fields: ResolverTypeWrapper<mb_views_top_stores_sum_fields>;
  mb_views_top_stores_var_pop_fields: ResolverTypeWrapper<mb_views_top_stores_var_pop_fields>;
  mb_views_top_stores_var_samp_fields: ResolverTypeWrapper<mb_views_top_stores_var_samp_fields>;
  mb_views_top_stores_variance_fields: ResolverTypeWrapper<mb_views_top_stores_variance_fields>;
  nft_activities: ResolverTypeWrapper<nft_activities>;
  nft_activities_aggregate: ResolverTypeWrapper<nft_activities_aggregate>;
  nft_activities_aggregate_fields: ResolverTypeWrapper<nft_activities_aggregate_fields>;
  nft_activities_avg_fields: ResolverTypeWrapper<nft_activities_avg_fields>;
  nft_activities_bool_exp: nft_activities_bool_exp;
  nft_activities_max_fields: ResolverTypeWrapper<nft_activities_max_fields>;
  nft_activities_min_fields: ResolverTypeWrapper<nft_activities_min_fields>;
  nft_activities_order_by: nft_activities_order_by;
  nft_activities_select_column: nft_activities_select_column;
  nft_activities_stddev_fields: ResolverTypeWrapper<nft_activities_stddev_fields>;
  nft_activities_stddev_pop_fields: ResolverTypeWrapper<nft_activities_stddev_pop_fields>;
  nft_activities_stddev_samp_fields: ResolverTypeWrapper<nft_activities_stddev_samp_fields>;
  nft_activities_stream_cursor_input: nft_activities_stream_cursor_input;
  nft_activities_stream_cursor_value_input: nft_activities_stream_cursor_value_input;
  nft_activities_sum_fields: ResolverTypeWrapper<nft_activities_sum_fields>;
  nft_activities_var_pop_fields: ResolverTypeWrapper<nft_activities_var_pop_fields>;
  nft_activities_var_samp_fields: ResolverTypeWrapper<nft_activities_var_samp_fields>;
  nft_activities_variance_fields: ResolverTypeWrapper<nft_activities_variance_fields>;
  nft_attributes: ResolverTypeWrapper<nft_attributes>;
  nft_attributes_aggregate: ResolverTypeWrapper<nft_attributes_aggregate>;
  nft_attributes_aggregate_fields: ResolverTypeWrapper<nft_attributes_aggregate_fields>;
  nft_attributes_bool_exp: nft_attributes_bool_exp;
  nft_attributes_max_fields: ResolverTypeWrapper<nft_attributes_max_fields>;
  nft_attributes_min_fields: ResolverTypeWrapper<nft_attributes_min_fields>;
  nft_attributes_order_by: nft_attributes_order_by;
  nft_attributes_select_column: nft_attributes_select_column;
  nft_attributes_stream_cursor_input: nft_attributes_stream_cursor_input;
  nft_attributes_stream_cursor_value_input: nft_attributes_stream_cursor_value_input;
  nft_contracts: ResolverTypeWrapper<nft_contracts>;
  nft_contracts_aggregate: ResolverTypeWrapper<nft_contracts_aggregate>;
  nft_contracts_aggregate_fields: ResolverTypeWrapper<nft_contracts_aggregate_fields>;
  nft_contracts_bool_exp: nft_contracts_bool_exp;
  nft_contracts_max_fields: ResolverTypeWrapper<nft_contracts_max_fields>;
  nft_contracts_min_fields: ResolverTypeWrapper<nft_contracts_min_fields>;
  nft_contracts_order_by: nft_contracts_order_by;
  nft_contracts_select_column: nft_contracts_select_column;
  nft_contracts_stream_cursor_input: nft_contracts_stream_cursor_input;
  nft_contracts_stream_cursor_value_input: nft_contracts_stream_cursor_value_input;
  nft_earnings: ResolverTypeWrapper<nft_earnings>;
  nft_earnings_aggregate: ResolverTypeWrapper<nft_earnings_aggregate>;
  nft_earnings_aggregate_fields: ResolverTypeWrapper<nft_earnings_aggregate_fields>;
  nft_earnings_avg_fields: ResolverTypeWrapper<nft_earnings_avg_fields>;
  nft_earnings_bool_exp: nft_earnings_bool_exp;
  nft_earnings_max_fields: ResolverTypeWrapper<nft_earnings_max_fields>;
  nft_earnings_min_fields: ResolverTypeWrapper<nft_earnings_min_fields>;
  nft_earnings_order_by: nft_earnings_order_by;
  nft_earnings_select_column: nft_earnings_select_column;
  nft_earnings_stddev_fields: ResolverTypeWrapper<nft_earnings_stddev_fields>;
  nft_earnings_stddev_pop_fields: ResolverTypeWrapper<nft_earnings_stddev_pop_fields>;
  nft_earnings_stddev_samp_fields: ResolverTypeWrapper<nft_earnings_stddev_samp_fields>;
  nft_earnings_stream_cursor_input: nft_earnings_stream_cursor_input;
  nft_earnings_stream_cursor_value_input: nft_earnings_stream_cursor_value_input;
  nft_earnings_sum_fields: ResolverTypeWrapper<nft_earnings_sum_fields>;
  nft_earnings_var_pop_fields: ResolverTypeWrapper<nft_earnings_var_pop_fields>;
  nft_earnings_var_samp_fields: ResolverTypeWrapper<nft_earnings_var_samp_fields>;
  nft_earnings_variance_fields: ResolverTypeWrapper<nft_earnings_variance_fields>;
  nft_listings: ResolverTypeWrapper<nft_listings>;
  nft_listings_aggregate: ResolverTypeWrapper<nft_listings_aggregate>;
  nft_listings_aggregate_bool_exp: nft_listings_aggregate_bool_exp;
  nft_listings_aggregate_bool_exp_count: nft_listings_aggregate_bool_exp_count;
  nft_listings_aggregate_fields: ResolverTypeWrapper<nft_listings_aggregate_fields>;
  nft_listings_aggregate_order_by: nft_listings_aggregate_order_by;
  nft_listings_avg_fields: ResolverTypeWrapper<nft_listings_avg_fields>;
  nft_listings_avg_order_by: nft_listings_avg_order_by;
  nft_listings_bool_exp: nft_listings_bool_exp;
  nft_listings_max_fields: ResolverTypeWrapper<nft_listings_max_fields>;
  nft_listings_max_order_by: nft_listings_max_order_by;
  nft_listings_min_fields: ResolverTypeWrapper<nft_listings_min_fields>;
  nft_listings_min_order_by: nft_listings_min_order_by;
  nft_listings_order_by: nft_listings_order_by;
  nft_listings_select_column: nft_listings_select_column;
  nft_listings_stddev_fields: ResolverTypeWrapper<nft_listings_stddev_fields>;
  nft_listings_stddev_order_by: nft_listings_stddev_order_by;
  nft_listings_stddev_pop_fields: ResolverTypeWrapper<nft_listings_stddev_pop_fields>;
  nft_listings_stddev_pop_order_by: nft_listings_stddev_pop_order_by;
  nft_listings_stddev_samp_fields: ResolverTypeWrapper<nft_listings_stddev_samp_fields>;
  nft_listings_stddev_samp_order_by: nft_listings_stddev_samp_order_by;
  nft_listings_stream_cursor_input: nft_listings_stream_cursor_input;
  nft_listings_stream_cursor_value_input: nft_listings_stream_cursor_value_input;
  nft_listings_sum_fields: ResolverTypeWrapper<nft_listings_sum_fields>;
  nft_listings_sum_order_by: nft_listings_sum_order_by;
  nft_listings_var_pop_fields: ResolverTypeWrapper<nft_listings_var_pop_fields>;
  nft_listings_var_pop_order_by: nft_listings_var_pop_order_by;
  nft_listings_var_samp_fields: ResolverTypeWrapper<nft_listings_var_samp_fields>;
  nft_listings_var_samp_order_by: nft_listings_var_samp_order_by;
  nft_listings_variance_fields: ResolverTypeWrapper<nft_listings_variance_fields>;
  nft_listings_variance_order_by: nft_listings_variance_order_by;
  nft_metadata_aggregate: ResolverTypeWrapper<nft_metadata_aggregate>;
  nft_metadata_aggregate_fields: ResolverTypeWrapper<nft_metadata_aggregate_fields>;
  nft_metadata_bool_exp: nft_metadata_bool_exp;
  nft_metadata_max_fields: ResolverTypeWrapper<nft_metadata_max_fields>;
  nft_metadata_min_fields: ResolverTypeWrapper<nft_metadata_min_fields>;
  nft_metadata_order_by: nft_metadata_order_by;
  nft_metadata_select_column: nft_metadata_select_column;
  nft_metadata_stream_cursor_input: nft_metadata_stream_cursor_input;
  nft_metadata_stream_cursor_value_input: nft_metadata_stream_cursor_value_input;
  nft_offers: ResolverTypeWrapper<nft_offers>;
  nft_offers_aggregate: ResolverTypeWrapper<nft_offers_aggregate>;
  nft_offers_aggregate_bool_exp: nft_offers_aggregate_bool_exp;
  nft_offers_aggregate_bool_exp_count: nft_offers_aggregate_bool_exp_count;
  nft_offers_aggregate_fields: ResolverTypeWrapper<nft_offers_aggregate_fields>;
  nft_offers_aggregate_order_by: nft_offers_aggregate_order_by;
  nft_offers_avg_fields: ResolverTypeWrapper<nft_offers_avg_fields>;
  nft_offers_avg_order_by: nft_offers_avg_order_by;
  nft_offers_bool_exp: nft_offers_bool_exp;
  nft_offers_max_fields: ResolverTypeWrapper<nft_offers_max_fields>;
  nft_offers_max_order_by: nft_offers_max_order_by;
  nft_offers_min_fields: ResolverTypeWrapper<nft_offers_min_fields>;
  nft_offers_min_order_by: nft_offers_min_order_by;
  nft_offers_order_by: nft_offers_order_by;
  nft_offers_select_column: nft_offers_select_column;
  nft_offers_stddev_fields: ResolverTypeWrapper<nft_offers_stddev_fields>;
  nft_offers_stddev_order_by: nft_offers_stddev_order_by;
  nft_offers_stddev_pop_fields: ResolverTypeWrapper<nft_offers_stddev_pop_fields>;
  nft_offers_stddev_pop_order_by: nft_offers_stddev_pop_order_by;
  nft_offers_stddev_samp_fields: ResolverTypeWrapper<nft_offers_stddev_samp_fields>;
  nft_offers_stddev_samp_order_by: nft_offers_stddev_samp_order_by;
  nft_offers_stream_cursor_input: nft_offers_stream_cursor_input;
  nft_offers_stream_cursor_value_input: nft_offers_stream_cursor_value_input;
  nft_offers_sum_fields: ResolverTypeWrapper<nft_offers_sum_fields>;
  nft_offers_sum_order_by: nft_offers_sum_order_by;
  nft_offers_var_pop_fields: ResolverTypeWrapper<nft_offers_var_pop_fields>;
  nft_offers_var_pop_order_by: nft_offers_var_pop_order_by;
  nft_offers_var_samp_fields: ResolverTypeWrapper<nft_offers_var_samp_fields>;
  nft_offers_var_samp_order_by: nft_offers_var_samp_order_by;
  nft_offers_variance_fields: ResolverTypeWrapper<nft_offers_variance_fields>;
  nft_offers_variance_order_by: nft_offers_variance_order_by;
  nft_tokens: ResolverTypeWrapper<nft_tokens>;
  nft_tokens_aggregate: ResolverTypeWrapper<nft_tokens_aggregate>;
  nft_tokens_aggregate_fields: ResolverTypeWrapper<nft_tokens_aggregate_fields>;
  nft_tokens_avg_fields: ResolverTypeWrapper<nft_tokens_avg_fields>;
  nft_tokens_bool_exp: nft_tokens_bool_exp;
  nft_tokens_max_fields: ResolverTypeWrapper<nft_tokens_max_fields>;
  nft_tokens_min_fields: ResolverTypeWrapper<nft_tokens_min_fields>;
  nft_tokens_order_by: nft_tokens_order_by;
  nft_tokens_select_column: nft_tokens_select_column;
  nft_tokens_stddev_fields: ResolverTypeWrapper<nft_tokens_stddev_fields>;
  nft_tokens_stddev_pop_fields: ResolverTypeWrapper<nft_tokens_stddev_pop_fields>;
  nft_tokens_stddev_samp_fields: ResolverTypeWrapper<nft_tokens_stddev_samp_fields>;
  nft_tokens_stream_cursor_input: nft_tokens_stream_cursor_input;
  nft_tokens_stream_cursor_value_input: nft_tokens_stream_cursor_value_input;
  nft_tokens_sum_fields: ResolverTypeWrapper<nft_tokens_sum_fields>;
  nft_tokens_var_pop_fields: ResolverTypeWrapper<nft_tokens_var_pop_fields>;
  nft_tokens_var_samp_fields: ResolverTypeWrapper<nft_tokens_var_samp_fields>;
  nft_tokens_variance_fields: ResolverTypeWrapper<nft_tokens_variance_fields>;
  numeric: ResolverTypeWrapper<Scalars['numeric']>;
  numeric_comparison_exp: numeric_comparison_exp;
  order_by: order_by;
  timestamp: ResolverTypeWrapper<Scalars['timestamp']>;
  timestamp_comparison_exp: timestamp_comparison_exp;
  AuthenticationInfo: ResolverTypeWrapper<AuthenticationInfo>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Mutation: {};
  Int: Scalars['Int'];
  Cursor: Scalars['Cursor'];
  AttributeCondition: AttributeCondition;
  String: Scalars['String'];
  AttributesConnection: AttributesConnection;
  Attribute: Attribute;
  Datetime: Scalars['Datetime'];
  Boolean: Scalars['Boolean'];
  RelationshipCondition: RelationshipCondition;
  RelationshipsConnection: RelationshipsConnection;
  Relationship: Relationship;
  Option: Option;
  CharacteristicCondition: CharacteristicCondition;
  CharacteristicsConnection: CharacteristicsConnection;
  Characteristic: Characteristic;
  Thing: Thing;
  JSON: Scalars['JSON'];
  TagCondition: TagCondition;
  TagsConnection: TagsConnection;
  Tag: Tag;
  Media: Media;
  TagsEdge: TagsEdge;
  PageInfo: PageInfo;
  CharacteristicsEdge: CharacteristicsEdge;
  RelationshipsEdge: RelationshipsEdge;
  AttributesEdge: AttributesEdge;
  MediaCondition: MediaCondition;
  MediaConnection: MediaConnection;
  MediaEdge: MediaEdge;
  OptionCondition: OptionCondition;
  OptionsConnection: OptionsConnection;
  OptionsEdge: OptionsEdge;
  ThingCondition: ThingCondition;
  ThingsConnection: ThingsConnection;
  ThingsEdge: ThingsEdge;
  UserCondition: UserCondition;
  UsersConnection: UsersConnection;
  User: User;
  UsersEdge: UsersEdge;
  CreateThingInput: CreateThingInput;
  NewCharacteristicInput: NewCharacteristicInput;
  CreateThingPayload: CreateThingPayload;
  CreateMediaInput: CreateMediaInput;
  CreateMediaPayload: CreateMediaPayload;
  ProposeAttributeInput: ProposeAttributeInput;
  ProposeAttributePayload: ProposeAttributePayload;
  CreateAttributeInput: CreateAttributeInput;
  CreateOptionInput: CreateOptionInput;
  CreateAttributePayload: CreateAttributePayload;
  ProposeOptionInput: ProposeOptionInput;
  ProposeOptionPayload: ProposeOptionPayload;
  Subscription: {};
  Boolean_comparison_exp: Boolean_comparison_exp;
  Float: Scalars['Float'];
  Int_comparison_exp: Int_comparison_exp;
  String_comparison_exp: String_comparison_exp;
  bigint: Scalars['bigint'];
  bigint_comparison_exp: bigint_comparison_exp;
  blocks: blocks;
  blocks_aggregate: blocks_aggregate;
  blocks_aggregate_fields: blocks_aggregate_fields;
  blocks_avg_fields: blocks_avg_fields;
  blocks_bool_exp: blocks_bool_exp;
  blocks_max_fields: blocks_max_fields;
  blocks_min_fields: blocks_min_fields;
  blocks_order_by: blocks_order_by;
  blocks_stddev_fields: blocks_stddev_fields;
  blocks_stddev_pop_fields: blocks_stddev_pop_fields;
  blocks_stddev_samp_fields: blocks_stddev_samp_fields;
  blocks_stream_cursor_input: blocks_stream_cursor_input;
  blocks_stream_cursor_value_input: blocks_stream_cursor_value_input;
  blocks_sum_fields: blocks_sum_fields;
  blocks_var_pop_fields: blocks_var_pop_fields;
  blocks_var_samp_fields: blocks_var_samp_fields;
  blocks_variance_fields: blocks_variance_fields;
  jsonb: Scalars['jsonb'];
  jsonb_cast_exp: jsonb_cast_exp;
  jsonb_comparison_exp: jsonb_comparison_exp;
  mb_store_minters: mb_store_minters;
  mb_store_minters_aggregate: mb_store_minters_aggregate;
  mb_store_minters_aggregate_fields: mb_store_minters_aggregate_fields;
  mb_store_minters_bool_exp: mb_store_minters_bool_exp;
  mb_store_minters_max_fields: mb_store_minters_max_fields;
  mb_store_minters_min_fields: mb_store_minters_min_fields;
  mb_store_minters_order_by: mb_store_minters_order_by;
  mb_store_minters_stream_cursor_input: mb_store_minters_stream_cursor_input;
  mb_store_minters_stream_cursor_value_input: mb_store_minters_stream_cursor_value_input;
  mb_views_active_listings: mb_views_active_listings;
  mb_views_active_listings_aggregate: mb_views_active_listings_aggregate;
  mb_views_active_listings_aggregate_bool_exp: mb_views_active_listings_aggregate_bool_exp;
  mb_views_active_listings_aggregate_bool_exp_count: mb_views_active_listings_aggregate_bool_exp_count;
  mb_views_active_listings_aggregate_fields: mb_views_active_listings_aggregate_fields;
  mb_views_active_listings_aggregate_order_by: mb_views_active_listings_aggregate_order_by;
  mb_views_active_listings_avg_fields: mb_views_active_listings_avg_fields;
  mb_views_active_listings_avg_order_by: mb_views_active_listings_avg_order_by;
  mb_views_active_listings_bool_exp: mb_views_active_listings_bool_exp;
  mb_views_active_listings_max_fields: mb_views_active_listings_max_fields;
  mb_views_active_listings_max_order_by: mb_views_active_listings_max_order_by;
  mb_views_active_listings_min_fields: mb_views_active_listings_min_fields;
  mb_views_active_listings_min_order_by: mb_views_active_listings_min_order_by;
  mb_views_active_listings_order_by: mb_views_active_listings_order_by;
  mb_views_active_listings_rollup: mb_views_active_listings_rollup;
  mb_views_active_listings_rollup_aggregate: mb_views_active_listings_rollup_aggregate;
  mb_views_active_listings_rollup_aggregate_fields: mb_views_active_listings_rollup_aggregate_fields;
  mb_views_active_listings_rollup_avg_fields: mb_views_active_listings_rollup_avg_fields;
  mb_views_active_listings_rollup_bool_exp: mb_views_active_listings_rollup_bool_exp;
  mb_views_active_listings_rollup_max_fields: mb_views_active_listings_rollup_max_fields;
  mb_views_active_listings_rollup_min_fields: mb_views_active_listings_rollup_min_fields;
  mb_views_active_listings_rollup_order_by: mb_views_active_listings_rollup_order_by;
  mb_views_active_listings_rollup_stddev_fields: mb_views_active_listings_rollup_stddev_fields;
  mb_views_active_listings_rollup_stddev_pop_fields: mb_views_active_listings_rollup_stddev_pop_fields;
  mb_views_active_listings_rollup_stddev_samp_fields: mb_views_active_listings_rollup_stddev_samp_fields;
  mb_views_active_listings_rollup_stream_cursor_input: mb_views_active_listings_rollup_stream_cursor_input;
  mb_views_active_listings_rollup_stream_cursor_value_input: mb_views_active_listings_rollup_stream_cursor_value_input;
  mb_views_active_listings_rollup_sum_fields: mb_views_active_listings_rollup_sum_fields;
  mb_views_active_listings_rollup_var_pop_fields: mb_views_active_listings_rollup_var_pop_fields;
  mb_views_active_listings_rollup_var_samp_fields: mb_views_active_listings_rollup_var_samp_fields;
  mb_views_active_listings_rollup_variance_fields: mb_views_active_listings_rollup_variance_fields;
  mb_views_active_listings_stddev_fields: mb_views_active_listings_stddev_fields;
  mb_views_active_listings_stddev_order_by: mb_views_active_listings_stddev_order_by;
  mb_views_active_listings_stddev_pop_fields: mb_views_active_listings_stddev_pop_fields;
  mb_views_active_listings_stddev_pop_order_by: mb_views_active_listings_stddev_pop_order_by;
  mb_views_active_listings_stddev_samp_fields: mb_views_active_listings_stddev_samp_fields;
  mb_views_active_listings_stddev_samp_order_by: mb_views_active_listings_stddev_samp_order_by;
  mb_views_active_listings_stream_cursor_input: mb_views_active_listings_stream_cursor_input;
  mb_views_active_listings_stream_cursor_value_input: mb_views_active_listings_stream_cursor_value_input;
  mb_views_active_listings_sum_fields: mb_views_active_listings_sum_fields;
  mb_views_active_listings_sum_order_by: mb_views_active_listings_sum_order_by;
  mb_views_active_listings_var_pop_fields: mb_views_active_listings_var_pop_fields;
  mb_views_active_listings_var_pop_order_by: mb_views_active_listings_var_pop_order_by;
  mb_views_active_listings_var_samp_fields: mb_views_active_listings_var_samp_fields;
  mb_views_active_listings_var_samp_order_by: mb_views_active_listings_var_samp_order_by;
  mb_views_active_listings_variance_fields: mb_views_active_listings_variance_fields;
  mb_views_active_listings_variance_order_by: mb_views_active_listings_variance_order_by;
  mb_views_auctions_with_offer: mb_views_auctions_with_offer;
  mb_views_auctions_with_offer_aggregate: mb_views_auctions_with_offer_aggregate;
  mb_views_auctions_with_offer_aggregate_fields: mb_views_auctions_with_offer_aggregate_fields;
  mb_views_auctions_with_offer_avg_fields: mb_views_auctions_with_offer_avg_fields;
  mb_views_auctions_with_offer_bool_exp: mb_views_auctions_with_offer_bool_exp;
  mb_views_auctions_with_offer_max_fields: mb_views_auctions_with_offer_max_fields;
  mb_views_auctions_with_offer_min_fields: mb_views_auctions_with_offer_min_fields;
  mb_views_auctions_with_offer_order_by: mb_views_auctions_with_offer_order_by;
  mb_views_auctions_with_offer_stddev_fields: mb_views_auctions_with_offer_stddev_fields;
  mb_views_auctions_with_offer_stddev_pop_fields: mb_views_auctions_with_offer_stddev_pop_fields;
  mb_views_auctions_with_offer_stddev_samp_fields: mb_views_auctions_with_offer_stddev_samp_fields;
  mb_views_auctions_with_offer_stream_cursor_input: mb_views_auctions_with_offer_stream_cursor_input;
  mb_views_auctions_with_offer_stream_cursor_value_input: mb_views_auctions_with_offer_stream_cursor_value_input;
  mb_views_auctions_with_offer_sum_fields: mb_views_auctions_with_offer_sum_fields;
  mb_views_auctions_with_offer_var_pop_fields: mb_views_auctions_with_offer_var_pop_fields;
  mb_views_auctions_with_offer_var_samp_fields: mb_views_auctions_with_offer_var_samp_fields;
  mb_views_auctions_with_offer_variance_fields: mb_views_auctions_with_offer_variance_fields;
  mb_views_nft_activities: mb_views_nft_activities;
  mb_views_nft_activities_aggregate: mb_views_nft_activities_aggregate;
  mb_views_nft_activities_aggregate_fields: mb_views_nft_activities_aggregate_fields;
  mb_views_nft_activities_avg_fields: mb_views_nft_activities_avg_fields;
  mb_views_nft_activities_bool_exp: mb_views_nft_activities_bool_exp;
  mb_views_nft_activities_max_fields: mb_views_nft_activities_max_fields;
  mb_views_nft_activities_min_fields: mb_views_nft_activities_min_fields;
  mb_views_nft_activities_order_by: mb_views_nft_activities_order_by;
  mb_views_nft_activities_stddev_fields: mb_views_nft_activities_stddev_fields;
  mb_views_nft_activities_stddev_pop_fields: mb_views_nft_activities_stddev_pop_fields;
  mb_views_nft_activities_stddev_samp_fields: mb_views_nft_activities_stddev_samp_fields;
  mb_views_nft_activities_stream_cursor_input: mb_views_nft_activities_stream_cursor_input;
  mb_views_nft_activities_stream_cursor_value_input: mb_views_nft_activities_stream_cursor_value_input;
  mb_views_nft_activities_sum_fields: mb_views_nft_activities_sum_fields;
  mb_views_nft_activities_var_pop_fields: mb_views_nft_activities_var_pop_fields;
  mb_views_nft_activities_var_samp_fields: mb_views_nft_activities_var_samp_fields;
  mb_views_nft_activities_variance_fields: mb_views_nft_activities_variance_fields;
  mb_views_nft_metadata: mb_views_nft_metadata;
  mb_views_nft_metadata_aggregate: mb_views_nft_metadata_aggregate;
  mb_views_nft_metadata_aggregate_fields: mb_views_nft_metadata_aggregate_fields;
  mb_views_nft_metadata_bool_exp: mb_views_nft_metadata_bool_exp;
  mb_views_nft_metadata_max_fields: mb_views_nft_metadata_max_fields;
  mb_views_nft_metadata_min_fields: mb_views_nft_metadata_min_fields;
  mb_views_nft_metadata_order_by: mb_views_nft_metadata_order_by;
  mb_views_nft_metadata_stream_cursor_input: mb_views_nft_metadata_stream_cursor_input;
  mb_views_nft_metadata_stream_cursor_value_input: mb_views_nft_metadata_stream_cursor_value_input;
  mb_views_nft_metadata_unburned: mb_views_nft_metadata_unburned;
  mb_views_nft_metadata_unburned_aggregate: mb_views_nft_metadata_unburned_aggregate;
  mb_views_nft_metadata_unburned_aggregate_fields: mb_views_nft_metadata_unburned_aggregate_fields;
  mb_views_nft_metadata_unburned_avg_fields: mb_views_nft_metadata_unburned_avg_fields;
  mb_views_nft_metadata_unburned_bool_exp: mb_views_nft_metadata_unburned_bool_exp;
  mb_views_nft_metadata_unburned_max_fields: mb_views_nft_metadata_unburned_max_fields;
  mb_views_nft_metadata_unburned_min_fields: mb_views_nft_metadata_unburned_min_fields;
  mb_views_nft_metadata_unburned_order_by: mb_views_nft_metadata_unburned_order_by;
  mb_views_nft_metadata_unburned_stddev_fields: mb_views_nft_metadata_unburned_stddev_fields;
  mb_views_nft_metadata_unburned_stddev_pop_fields: mb_views_nft_metadata_unburned_stddev_pop_fields;
  mb_views_nft_metadata_unburned_stddev_samp_fields: mb_views_nft_metadata_unburned_stddev_samp_fields;
  mb_views_nft_metadata_unburned_stream_cursor_input: mb_views_nft_metadata_unburned_stream_cursor_input;
  mb_views_nft_metadata_unburned_stream_cursor_value_input: mb_views_nft_metadata_unburned_stream_cursor_value_input;
  mb_views_nft_metadata_unburned_sum_fields: mb_views_nft_metadata_unburned_sum_fields;
  mb_views_nft_metadata_unburned_var_pop_fields: mb_views_nft_metadata_unburned_var_pop_fields;
  mb_views_nft_metadata_unburned_var_samp_fields: mb_views_nft_metadata_unburned_var_samp_fields;
  mb_views_nft_metadata_unburned_variance_fields: mb_views_nft_metadata_unburned_variance_fields;
  mb_views_nft_owned_tokens: mb_views_nft_owned_tokens;
  mb_views_nft_owned_tokens_aggregate: mb_views_nft_owned_tokens_aggregate;
  mb_views_nft_owned_tokens_aggregate_fields: mb_views_nft_owned_tokens_aggregate_fields;
  mb_views_nft_owned_tokens_avg_fields: mb_views_nft_owned_tokens_avg_fields;
  mb_views_nft_owned_tokens_bool_exp: mb_views_nft_owned_tokens_bool_exp;
  mb_views_nft_owned_tokens_max_fields: mb_views_nft_owned_tokens_max_fields;
  mb_views_nft_owned_tokens_min_fields: mb_views_nft_owned_tokens_min_fields;
  mb_views_nft_owned_tokens_order_by: mb_views_nft_owned_tokens_order_by;
  mb_views_nft_owned_tokens_stddev_fields: mb_views_nft_owned_tokens_stddev_fields;
  mb_views_nft_owned_tokens_stddev_pop_fields: mb_views_nft_owned_tokens_stddev_pop_fields;
  mb_views_nft_owned_tokens_stddev_samp_fields: mb_views_nft_owned_tokens_stddev_samp_fields;
  mb_views_nft_owned_tokens_stream_cursor_input: mb_views_nft_owned_tokens_stream_cursor_input;
  mb_views_nft_owned_tokens_stream_cursor_value_input: mb_views_nft_owned_tokens_stream_cursor_value_input;
  mb_views_nft_owned_tokens_sum_fields: mb_views_nft_owned_tokens_sum_fields;
  mb_views_nft_owned_tokens_var_pop_fields: mb_views_nft_owned_tokens_var_pop_fields;
  mb_views_nft_owned_tokens_var_samp_fields: mb_views_nft_owned_tokens_var_samp_fields;
  mb_views_nft_owned_tokens_variance_fields: mb_views_nft_owned_tokens_variance_fields;
  mb_views_nft_tokens: mb_views_nft_tokens;
  mb_views_nft_tokens_aggregate: mb_views_nft_tokens_aggregate;
  mb_views_nft_tokens_aggregate_fields: mb_views_nft_tokens_aggregate_fields;
  mb_views_nft_tokens_avg_fields: mb_views_nft_tokens_avg_fields;
  mb_views_nft_tokens_bool_exp: mb_views_nft_tokens_bool_exp;
  mb_views_nft_tokens_max_fields: mb_views_nft_tokens_max_fields;
  mb_views_nft_tokens_min_fields: mb_views_nft_tokens_min_fields;
  mb_views_nft_tokens_order_by: mb_views_nft_tokens_order_by;
  mb_views_nft_tokens_stddev_fields: mb_views_nft_tokens_stddev_fields;
  mb_views_nft_tokens_stddev_pop_fields: mb_views_nft_tokens_stddev_pop_fields;
  mb_views_nft_tokens_stddev_samp_fields: mb_views_nft_tokens_stddev_samp_fields;
  mb_views_nft_tokens_stream_cursor_input: mb_views_nft_tokens_stream_cursor_input;
  mb_views_nft_tokens_stream_cursor_value_input: mb_views_nft_tokens_stream_cursor_value_input;
  mb_views_nft_tokens_sum_fields: mb_views_nft_tokens_sum_fields;
  mb_views_nft_tokens_var_pop_fields: mb_views_nft_tokens_var_pop_fields;
  mb_views_nft_tokens_var_samp_fields: mb_views_nft_tokens_var_samp_fields;
  mb_views_nft_tokens_variance_fields: mb_views_nft_tokens_variance_fields;
  mb_views_nft_tokens_with_listing: mb_views_nft_tokens_with_listing;
  mb_views_nft_tokens_with_listing_aggregate: mb_views_nft_tokens_with_listing_aggregate;
  mb_views_nft_tokens_with_listing_aggregate_fields: mb_views_nft_tokens_with_listing_aggregate_fields;
  mb_views_nft_tokens_with_listing_avg_fields: mb_views_nft_tokens_with_listing_avg_fields;
  mb_views_nft_tokens_with_listing_bool_exp: mb_views_nft_tokens_with_listing_bool_exp;
  mb_views_nft_tokens_with_listing_max_fields: mb_views_nft_tokens_with_listing_max_fields;
  mb_views_nft_tokens_with_listing_min_fields: mb_views_nft_tokens_with_listing_min_fields;
  mb_views_nft_tokens_with_listing_order_by: mb_views_nft_tokens_with_listing_order_by;
  mb_views_nft_tokens_with_listing_stddev_fields: mb_views_nft_tokens_with_listing_stddev_fields;
  mb_views_nft_tokens_with_listing_stddev_pop_fields: mb_views_nft_tokens_with_listing_stddev_pop_fields;
  mb_views_nft_tokens_with_listing_stddev_samp_fields: mb_views_nft_tokens_with_listing_stddev_samp_fields;
  mb_views_nft_tokens_with_listing_stream_cursor_input: mb_views_nft_tokens_with_listing_stream_cursor_input;
  mb_views_nft_tokens_with_listing_stream_cursor_value_input: mb_views_nft_tokens_with_listing_stream_cursor_value_input;
  mb_views_nft_tokens_with_listing_sum_fields: mb_views_nft_tokens_with_listing_sum_fields;
  mb_views_nft_tokens_with_listing_var_pop_fields: mb_views_nft_tokens_with_listing_var_pop_fields;
  mb_views_nft_tokens_with_listing_var_samp_fields: mb_views_nft_tokens_with_listing_var_samp_fields;
  mb_views_nft_tokens_with_listing_variance_fields: mb_views_nft_tokens_with_listing_variance_fields;
  mb_views_nft_tokens_with_media_type: mb_views_nft_tokens_with_media_type;
  mb_views_nft_tokens_with_media_type_aggregate: mb_views_nft_tokens_with_media_type_aggregate;
  mb_views_nft_tokens_with_media_type_aggregate_fields: mb_views_nft_tokens_with_media_type_aggregate_fields;
  mb_views_nft_tokens_with_media_type_avg_fields: mb_views_nft_tokens_with_media_type_avg_fields;
  mb_views_nft_tokens_with_media_type_bool_exp: mb_views_nft_tokens_with_media_type_bool_exp;
  mb_views_nft_tokens_with_media_type_max_fields: mb_views_nft_tokens_with_media_type_max_fields;
  mb_views_nft_tokens_with_media_type_min_fields: mb_views_nft_tokens_with_media_type_min_fields;
  mb_views_nft_tokens_with_media_type_order_by: mb_views_nft_tokens_with_media_type_order_by;
  mb_views_nft_tokens_with_media_type_stddev_fields: mb_views_nft_tokens_with_media_type_stddev_fields;
  mb_views_nft_tokens_with_media_type_stddev_pop_fields: mb_views_nft_tokens_with_media_type_stddev_pop_fields;
  mb_views_nft_tokens_with_media_type_stddev_samp_fields: mb_views_nft_tokens_with_media_type_stddev_samp_fields;
  mb_views_nft_tokens_with_media_type_stream_cursor_input: mb_views_nft_tokens_with_media_type_stream_cursor_input;
  mb_views_nft_tokens_with_media_type_stream_cursor_value_input: mb_views_nft_tokens_with_media_type_stream_cursor_value_input;
  mb_views_nft_tokens_with_media_type_sum_fields: mb_views_nft_tokens_with_media_type_sum_fields;
  mb_views_nft_tokens_with_media_type_var_pop_fields: mb_views_nft_tokens_with_media_type_var_pop_fields;
  mb_views_nft_tokens_with_media_type_var_samp_fields: mb_views_nft_tokens_with_media_type_var_samp_fields;
  mb_views_nft_tokens_with_media_type_variance_fields: mb_views_nft_tokens_with_media_type_variance_fields;
  mb_views_top_stores: mb_views_top_stores;
  mb_views_top_stores_aggregate: mb_views_top_stores_aggregate;
  mb_views_top_stores_aggregate_fields: mb_views_top_stores_aggregate_fields;
  mb_views_top_stores_avg_fields: mb_views_top_stores_avg_fields;
  mb_views_top_stores_bool_exp: mb_views_top_stores_bool_exp;
  mb_views_top_stores_max_fields: mb_views_top_stores_max_fields;
  mb_views_top_stores_min_fields: mb_views_top_stores_min_fields;
  mb_views_top_stores_order_by: mb_views_top_stores_order_by;
  mb_views_top_stores_stddev_fields: mb_views_top_stores_stddev_fields;
  mb_views_top_stores_stddev_pop_fields: mb_views_top_stores_stddev_pop_fields;
  mb_views_top_stores_stddev_samp_fields: mb_views_top_stores_stddev_samp_fields;
  mb_views_top_stores_stream_cursor_input: mb_views_top_stores_stream_cursor_input;
  mb_views_top_stores_stream_cursor_value_input: mb_views_top_stores_stream_cursor_value_input;
  mb_views_top_stores_sum_fields: mb_views_top_stores_sum_fields;
  mb_views_top_stores_var_pop_fields: mb_views_top_stores_var_pop_fields;
  mb_views_top_stores_var_samp_fields: mb_views_top_stores_var_samp_fields;
  mb_views_top_stores_variance_fields: mb_views_top_stores_variance_fields;
  nft_activities: nft_activities;
  nft_activities_aggregate: nft_activities_aggregate;
  nft_activities_aggregate_fields: nft_activities_aggregate_fields;
  nft_activities_avg_fields: nft_activities_avg_fields;
  nft_activities_bool_exp: nft_activities_bool_exp;
  nft_activities_max_fields: nft_activities_max_fields;
  nft_activities_min_fields: nft_activities_min_fields;
  nft_activities_order_by: nft_activities_order_by;
  nft_activities_stddev_fields: nft_activities_stddev_fields;
  nft_activities_stddev_pop_fields: nft_activities_stddev_pop_fields;
  nft_activities_stddev_samp_fields: nft_activities_stddev_samp_fields;
  nft_activities_stream_cursor_input: nft_activities_stream_cursor_input;
  nft_activities_stream_cursor_value_input: nft_activities_stream_cursor_value_input;
  nft_activities_sum_fields: nft_activities_sum_fields;
  nft_activities_var_pop_fields: nft_activities_var_pop_fields;
  nft_activities_var_samp_fields: nft_activities_var_samp_fields;
  nft_activities_variance_fields: nft_activities_variance_fields;
  nft_attributes: nft_attributes;
  nft_attributes_aggregate: nft_attributes_aggregate;
  nft_attributes_aggregate_fields: nft_attributes_aggregate_fields;
  nft_attributes_bool_exp: nft_attributes_bool_exp;
  nft_attributes_max_fields: nft_attributes_max_fields;
  nft_attributes_min_fields: nft_attributes_min_fields;
  nft_attributes_order_by: nft_attributes_order_by;
  nft_attributes_stream_cursor_input: nft_attributes_stream_cursor_input;
  nft_attributes_stream_cursor_value_input: nft_attributes_stream_cursor_value_input;
  nft_contracts: nft_contracts;
  nft_contracts_aggregate: nft_contracts_aggregate;
  nft_contracts_aggregate_fields: nft_contracts_aggregate_fields;
  nft_contracts_bool_exp: nft_contracts_bool_exp;
  nft_contracts_max_fields: nft_contracts_max_fields;
  nft_contracts_min_fields: nft_contracts_min_fields;
  nft_contracts_order_by: nft_contracts_order_by;
  nft_contracts_stream_cursor_input: nft_contracts_stream_cursor_input;
  nft_contracts_stream_cursor_value_input: nft_contracts_stream_cursor_value_input;
  nft_earnings: nft_earnings;
  nft_earnings_aggregate: nft_earnings_aggregate;
  nft_earnings_aggregate_fields: nft_earnings_aggregate_fields;
  nft_earnings_avg_fields: nft_earnings_avg_fields;
  nft_earnings_bool_exp: nft_earnings_bool_exp;
  nft_earnings_max_fields: nft_earnings_max_fields;
  nft_earnings_min_fields: nft_earnings_min_fields;
  nft_earnings_order_by: nft_earnings_order_by;
  nft_earnings_stddev_fields: nft_earnings_stddev_fields;
  nft_earnings_stddev_pop_fields: nft_earnings_stddev_pop_fields;
  nft_earnings_stddev_samp_fields: nft_earnings_stddev_samp_fields;
  nft_earnings_stream_cursor_input: nft_earnings_stream_cursor_input;
  nft_earnings_stream_cursor_value_input: nft_earnings_stream_cursor_value_input;
  nft_earnings_sum_fields: nft_earnings_sum_fields;
  nft_earnings_var_pop_fields: nft_earnings_var_pop_fields;
  nft_earnings_var_samp_fields: nft_earnings_var_samp_fields;
  nft_earnings_variance_fields: nft_earnings_variance_fields;
  nft_listings: nft_listings;
  nft_listings_aggregate: nft_listings_aggregate;
  nft_listings_aggregate_bool_exp: nft_listings_aggregate_bool_exp;
  nft_listings_aggregate_bool_exp_count: nft_listings_aggregate_bool_exp_count;
  nft_listings_aggregate_fields: nft_listings_aggregate_fields;
  nft_listings_aggregate_order_by: nft_listings_aggregate_order_by;
  nft_listings_avg_fields: nft_listings_avg_fields;
  nft_listings_avg_order_by: nft_listings_avg_order_by;
  nft_listings_bool_exp: nft_listings_bool_exp;
  nft_listings_max_fields: nft_listings_max_fields;
  nft_listings_max_order_by: nft_listings_max_order_by;
  nft_listings_min_fields: nft_listings_min_fields;
  nft_listings_min_order_by: nft_listings_min_order_by;
  nft_listings_order_by: nft_listings_order_by;
  nft_listings_stddev_fields: nft_listings_stddev_fields;
  nft_listings_stddev_order_by: nft_listings_stddev_order_by;
  nft_listings_stddev_pop_fields: nft_listings_stddev_pop_fields;
  nft_listings_stddev_pop_order_by: nft_listings_stddev_pop_order_by;
  nft_listings_stddev_samp_fields: nft_listings_stddev_samp_fields;
  nft_listings_stddev_samp_order_by: nft_listings_stddev_samp_order_by;
  nft_listings_stream_cursor_input: nft_listings_stream_cursor_input;
  nft_listings_stream_cursor_value_input: nft_listings_stream_cursor_value_input;
  nft_listings_sum_fields: nft_listings_sum_fields;
  nft_listings_sum_order_by: nft_listings_sum_order_by;
  nft_listings_var_pop_fields: nft_listings_var_pop_fields;
  nft_listings_var_pop_order_by: nft_listings_var_pop_order_by;
  nft_listings_var_samp_fields: nft_listings_var_samp_fields;
  nft_listings_var_samp_order_by: nft_listings_var_samp_order_by;
  nft_listings_variance_fields: nft_listings_variance_fields;
  nft_listings_variance_order_by: nft_listings_variance_order_by;
  nft_metadata_aggregate: nft_metadata_aggregate;
  nft_metadata_aggregate_fields: nft_metadata_aggregate_fields;
  nft_metadata_bool_exp: nft_metadata_bool_exp;
  nft_metadata_max_fields: nft_metadata_max_fields;
  nft_metadata_min_fields: nft_metadata_min_fields;
  nft_metadata_order_by: nft_metadata_order_by;
  nft_metadata_stream_cursor_input: nft_metadata_stream_cursor_input;
  nft_metadata_stream_cursor_value_input: nft_metadata_stream_cursor_value_input;
  nft_offers: nft_offers;
  nft_offers_aggregate: nft_offers_aggregate;
  nft_offers_aggregate_bool_exp: nft_offers_aggregate_bool_exp;
  nft_offers_aggregate_bool_exp_count: nft_offers_aggregate_bool_exp_count;
  nft_offers_aggregate_fields: nft_offers_aggregate_fields;
  nft_offers_aggregate_order_by: nft_offers_aggregate_order_by;
  nft_offers_avg_fields: nft_offers_avg_fields;
  nft_offers_avg_order_by: nft_offers_avg_order_by;
  nft_offers_bool_exp: nft_offers_bool_exp;
  nft_offers_max_fields: nft_offers_max_fields;
  nft_offers_max_order_by: nft_offers_max_order_by;
  nft_offers_min_fields: nft_offers_min_fields;
  nft_offers_min_order_by: nft_offers_min_order_by;
  nft_offers_order_by: nft_offers_order_by;
  nft_offers_stddev_fields: nft_offers_stddev_fields;
  nft_offers_stddev_order_by: nft_offers_stddev_order_by;
  nft_offers_stddev_pop_fields: nft_offers_stddev_pop_fields;
  nft_offers_stddev_pop_order_by: nft_offers_stddev_pop_order_by;
  nft_offers_stddev_samp_fields: nft_offers_stddev_samp_fields;
  nft_offers_stddev_samp_order_by: nft_offers_stddev_samp_order_by;
  nft_offers_stream_cursor_input: nft_offers_stream_cursor_input;
  nft_offers_stream_cursor_value_input: nft_offers_stream_cursor_value_input;
  nft_offers_sum_fields: nft_offers_sum_fields;
  nft_offers_sum_order_by: nft_offers_sum_order_by;
  nft_offers_var_pop_fields: nft_offers_var_pop_fields;
  nft_offers_var_pop_order_by: nft_offers_var_pop_order_by;
  nft_offers_var_samp_fields: nft_offers_var_samp_fields;
  nft_offers_var_samp_order_by: nft_offers_var_samp_order_by;
  nft_offers_variance_fields: nft_offers_variance_fields;
  nft_offers_variance_order_by: nft_offers_variance_order_by;
  nft_tokens: nft_tokens;
  nft_tokens_aggregate: nft_tokens_aggregate;
  nft_tokens_aggregate_fields: nft_tokens_aggregate_fields;
  nft_tokens_avg_fields: nft_tokens_avg_fields;
  nft_tokens_bool_exp: nft_tokens_bool_exp;
  nft_tokens_max_fields: nft_tokens_max_fields;
  nft_tokens_min_fields: nft_tokens_min_fields;
  nft_tokens_order_by: nft_tokens_order_by;
  nft_tokens_stddev_fields: nft_tokens_stddev_fields;
  nft_tokens_stddev_pop_fields: nft_tokens_stddev_pop_fields;
  nft_tokens_stddev_samp_fields: nft_tokens_stddev_samp_fields;
  nft_tokens_stream_cursor_input: nft_tokens_stream_cursor_input;
  nft_tokens_stream_cursor_value_input: nft_tokens_stream_cursor_value_input;
  nft_tokens_sum_fields: nft_tokens_sum_fields;
  nft_tokens_var_pop_fields: nft_tokens_var_pop_fields;
  nft_tokens_var_samp_fields: nft_tokens_var_samp_fields;
  nft_tokens_variance_fields: nft_tokens_variance_fields;
  numeric: Scalars['numeric'];
  numeric_comparison_exp: numeric_comparison_exp;
  timestamp: Scalars['timestamp'];
  timestamp_comparison_exp: timestamp_comparison_exp;
  AuthenticationInfo: AuthenticationInfo;
}>;

export type cachedDirectiveArgs = {
  ttl?: Scalars['Int'];
  refresh?: Scalars['Boolean'];
};

export type cachedDirectiveResolver<Result, Parent, ContextType = MeshContext, Args = cachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  attributes?: Resolver<Maybe<ResolversTypes['AttributesConnection']>, ParentType, ContextType, RequireFields<QueryattributesArgs, 'orderBy'>>;
  characteristics?: Resolver<Maybe<ResolversTypes['CharacteristicsConnection']>, ParentType, ContextType, RequireFields<QuerycharacteristicsArgs, 'orderBy'>>;
  medias?: Resolver<Maybe<ResolversTypes['MediaConnection']>, ParentType, ContextType, RequireFields<QuerymediasArgs, 'orderBy'>>;
  options?: Resolver<Maybe<ResolversTypes['OptionsConnection']>, ParentType, ContextType, RequireFields<QueryoptionsArgs, 'orderBy'>>;
  relationships?: Resolver<Maybe<ResolversTypes['RelationshipsConnection']>, ParentType, ContextType, RequireFields<QueryrelationshipsArgs, 'orderBy'>>;
  tags?: Resolver<Maybe<ResolversTypes['TagsConnection']>, ParentType, ContextType, RequireFields<QuerytagsArgs, 'orderBy'>>;
  things?: Resolver<Maybe<ResolversTypes['ThingsConnection']>, ParentType, ContextType, RequireFields<QuerythingsArgs, 'orderBy'>>;
  users?: Resolver<Maybe<ResolversTypes['UsersConnection']>, ParentType, ContextType, RequireFields<QueryusersArgs, 'orderBy'>>;
  attribute?: Resolver<Maybe<ResolversTypes['Attribute']>, ParentType, ContextType, RequireFields<QueryattributeArgs, 'id'>>;
  attributeByName?: Resolver<Maybe<ResolversTypes['Attribute']>, ParentType, ContextType, RequireFields<QueryattributeByNameArgs, 'name'>>;
  characteristic?: Resolver<Maybe<ResolversTypes['Characteristic']>, ParentType, ContextType, RequireFields<QuerycharacteristicArgs, 'thingId' | 'attributeId' | 'optionId'>>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType, RequireFields<QuerymediaArgs, 'id'>>;
  option?: Resolver<Maybe<ResolversTypes['Option']>, ParentType, ContextType, RequireFields<QueryoptionArgs, 'id'>>;
  relationship?: Resolver<Maybe<ResolversTypes['Relationship']>, ParentType, ContextType, RequireFields<QueryrelationshipArgs, 'attributeId' | 'optionId'>>;
  tag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<QuerytagArgs, 'thingId' | 'mediaId'>>;
  thing?: Resolver<Maybe<ResolversTypes['Thing']>, ParentType, ContextType, RequireFields<QuerythingArgs, 'id'>>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserArgs, 'id'>>;
  userByUsername?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserByUsernameArgs, 'username'>>;
  userByWallet?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryuserByWalletArgs, 'wallet'>>;
  blocks?: Resolver<Array<ResolversTypes['blocks']>, ParentType, ContextType, Partial<QueryblocksArgs>>;
  blocks_aggregate?: Resolver<ResolversTypes['blocks_aggregate'], ParentType, ContextType, Partial<Queryblocks_aggregateArgs>>;
  blocks_by_pk?: Resolver<Maybe<ResolversTypes['blocks']>, ParentType, ContextType, RequireFields<Queryblocks_by_pkArgs, 'synced_height'>>;
  mb_store_minters?: Resolver<Array<ResolversTypes['mb_store_minters']>, ParentType, ContextType, Partial<Querymb_store_mintersArgs>>;
  mb_store_minters_aggregate?: Resolver<ResolversTypes['mb_store_minters_aggregate'], ParentType, ContextType, Partial<Querymb_store_minters_aggregateArgs>>;
  mb_store_minters_by_pk?: Resolver<Maybe<ResolversTypes['mb_store_minters']>, ParentType, ContextType, RequireFields<Querymb_store_minters_by_pkArgs, 'minter_id' | 'nft_contract_id'>>;
  mb_views_active_listings?: Resolver<Array<ResolversTypes['mb_views_active_listings']>, ParentType, ContextType, Partial<Querymb_views_active_listingsArgs>>;
  mb_views_active_listings_aggregate?: Resolver<ResolversTypes['mb_views_active_listings_aggregate'], ParentType, ContextType, Partial<Querymb_views_active_listings_aggregateArgs>>;
  mb_views_active_listings_rollup?: Resolver<Array<ResolversTypes['mb_views_active_listings_rollup']>, ParentType, ContextType, Partial<Querymb_views_active_listings_rollupArgs>>;
  mb_views_active_listings_rollup_aggregate?: Resolver<ResolversTypes['mb_views_active_listings_rollup_aggregate'], ParentType, ContextType, Partial<Querymb_views_active_listings_rollup_aggregateArgs>>;
  mb_views_auctions_with_offer?: Resolver<Array<ResolversTypes['mb_views_auctions_with_offer']>, ParentType, ContextType, Partial<Querymb_views_auctions_with_offerArgs>>;
  mb_views_auctions_with_offer_aggregate?: Resolver<ResolversTypes['mb_views_auctions_with_offer_aggregate'], ParentType, ContextType, Partial<Querymb_views_auctions_with_offer_aggregateArgs>>;
  mb_views_nft_activities?: Resolver<Array<ResolversTypes['mb_views_nft_activities']>, ParentType, ContextType, Partial<Querymb_views_nft_activitiesArgs>>;
  mb_views_nft_activities_aggregate?: Resolver<ResolversTypes['mb_views_nft_activities_aggregate'], ParentType, ContextType, Partial<Querymb_views_nft_activities_aggregateArgs>>;
  mb_views_nft_metadata?: Resolver<Array<ResolversTypes['mb_views_nft_metadata']>, ParentType, ContextType, Partial<Querymb_views_nft_metadataArgs>>;
  mb_views_nft_metadata_aggregate?: Resolver<ResolversTypes['mb_views_nft_metadata_aggregate'], ParentType, ContextType, Partial<Querymb_views_nft_metadata_aggregateArgs>>;
  mb_views_nft_metadata_unburned?: Resolver<Array<ResolversTypes['mb_views_nft_metadata_unburned']>, ParentType, ContextType, Partial<Querymb_views_nft_metadata_unburnedArgs>>;
  mb_views_nft_metadata_unburned_aggregate?: Resolver<ResolversTypes['mb_views_nft_metadata_unburned_aggregate'], ParentType, ContextType, Partial<Querymb_views_nft_metadata_unburned_aggregateArgs>>;
  mb_views_nft_owned_tokens?: Resolver<Array<ResolversTypes['mb_views_nft_owned_tokens']>, ParentType, ContextType, Partial<Querymb_views_nft_owned_tokensArgs>>;
  mb_views_nft_owned_tokens_aggregate?: Resolver<ResolversTypes['mb_views_nft_owned_tokens_aggregate'], ParentType, ContextType, Partial<Querymb_views_nft_owned_tokens_aggregateArgs>>;
  mb_views_nft_tokens?: Resolver<Array<ResolversTypes['mb_views_nft_tokens']>, ParentType, ContextType, Partial<Querymb_views_nft_tokensArgs>>;
  mb_views_nft_tokens_aggregate?: Resolver<ResolversTypes['mb_views_nft_tokens_aggregate'], ParentType, ContextType, Partial<Querymb_views_nft_tokens_aggregateArgs>>;
  mb_views_nft_tokens_with_listing?: Resolver<Array<ResolversTypes['mb_views_nft_tokens_with_listing']>, ParentType, ContextType, Partial<Querymb_views_nft_tokens_with_listingArgs>>;
  mb_views_nft_tokens_with_listing_aggregate?: Resolver<ResolversTypes['mb_views_nft_tokens_with_listing_aggregate'], ParentType, ContextType, Partial<Querymb_views_nft_tokens_with_listing_aggregateArgs>>;
  mb_views_nft_tokens_with_media_type?: Resolver<Array<ResolversTypes['mb_views_nft_tokens_with_media_type']>, ParentType, ContextType, Partial<Querymb_views_nft_tokens_with_media_typeArgs>>;
  mb_views_nft_tokens_with_media_type_aggregate?: Resolver<ResolversTypes['mb_views_nft_tokens_with_media_type_aggregate'], ParentType, ContextType, Partial<Querymb_views_nft_tokens_with_media_type_aggregateArgs>>;
  mb_views_top_stores?: Resolver<Array<ResolversTypes['mb_views_top_stores']>, ParentType, ContextType, Partial<Querymb_views_top_storesArgs>>;
  mb_views_top_stores_aggregate?: Resolver<ResolversTypes['mb_views_top_stores_aggregate'], ParentType, ContextType, Partial<Querymb_views_top_stores_aggregateArgs>>;
  nft_activities?: Resolver<Array<ResolversTypes['nft_activities']>, ParentType, ContextType, Partial<Querynft_activitiesArgs>>;
  nft_activities_aggregate?: Resolver<ResolversTypes['nft_activities_aggregate'], ParentType, ContextType, Partial<Querynft_activities_aggregateArgs>>;
  nft_activities_by_pk?: Resolver<Maybe<ResolversTypes['nft_activities']>, ParentType, ContextType, RequireFields<Querynft_activities_by_pkArgs, 'kind' | 'nft_contract_id' | 'receipt_id' | 'token_id'>>;
  nft_attributes?: Resolver<Array<ResolversTypes['nft_attributes']>, ParentType, ContextType, Partial<Querynft_attributesArgs>>;
  nft_attributes_aggregate?: Resolver<ResolversTypes['nft_attributes_aggregate'], ParentType, ContextType, Partial<Querynft_attributes_aggregateArgs>>;
  nft_attributes_by_pk?: Resolver<Maybe<ResolversTypes['nft_attributes']>, ParentType, ContextType, RequireFields<Querynft_attributes_by_pkArgs, 'attribute_type' | 'nft_contract_id' | 'nft_metadata_id'>>;
  nft_contracts?: Resolver<Array<ResolversTypes['nft_contracts']>, ParentType, ContextType, Partial<Querynft_contractsArgs>>;
  nft_contracts_aggregate?: Resolver<ResolversTypes['nft_contracts_aggregate'], ParentType, ContextType, Partial<Querynft_contracts_aggregateArgs>>;
  nft_contracts_by_pk?: Resolver<Maybe<ResolversTypes['nft_contracts']>, ParentType, ContextType, RequireFields<Querynft_contracts_by_pkArgs, 'id'>>;
  nft_earnings?: Resolver<Array<ResolversTypes['nft_earnings']>, ParentType, ContextType, Partial<Querynft_earningsArgs>>;
  nft_earnings_aggregate?: Resolver<ResolversTypes['nft_earnings_aggregate'], ParentType, ContextType, Partial<Querynft_earnings_aggregateArgs>>;
  nft_earnings_by_pk?: Resolver<Maybe<ResolversTypes['nft_earnings']>, ParentType, ContextType, RequireFields<Querynft_earnings_by_pkArgs, 'approval_id' | 'is_mintbase_cut' | 'is_referral' | 'market_id' | 'nft_contract_id' | 'receiver_id' | 'token_id'>>;
  nft_listings?: Resolver<Array<ResolversTypes['nft_listings']>, ParentType, ContextType, Partial<Querynft_listingsArgs>>;
  nft_listings_aggregate?: Resolver<ResolversTypes['nft_listings_aggregate'], ParentType, ContextType, Partial<Querynft_listings_aggregateArgs>>;
  nft_listings_by_pk?: Resolver<Maybe<ResolversTypes['nft_listings']>, ParentType, ContextType, RequireFields<Querynft_listings_by_pkArgs, 'approval_id' | 'market_id' | 'nft_contract_id' | 'token_id'>>;
  nft_metadata?: Resolver<Array<ResolversTypes['Thing']>, ParentType, ContextType, Partial<Querynft_metadataArgs>>;
  nft_metadata_aggregate?: Resolver<ResolversTypes['nft_metadata_aggregate'], ParentType, ContextType, Partial<Querynft_metadata_aggregateArgs>>;
  nft_metadata_by_pk?: Resolver<Maybe<ResolversTypes['Thing']>, ParentType, ContextType, RequireFields<Querynft_metadata_by_pkArgs, 'id'>>;
  nft_offers?: Resolver<Array<ResolversTypes['nft_offers']>, ParentType, ContextType, Partial<Querynft_offersArgs>>;
  nft_offers_aggregate?: Resolver<ResolversTypes['nft_offers_aggregate'], ParentType, ContextType, Partial<Querynft_offers_aggregateArgs>>;
  nft_offers_by_pk?: Resolver<Maybe<ResolversTypes['nft_offers']>, ParentType, ContextType, RequireFields<Querynft_offers_by_pkArgs, 'approval_id' | 'market_id' | 'nft_contract_id' | 'offer_id' | 'token_id'>>;
  nft_tokens?: Resolver<Array<ResolversTypes['nft_tokens']>, ParentType, ContextType, Partial<Querynft_tokensArgs>>;
  nft_tokens_aggregate?: Resolver<ResolversTypes['nft_tokens_aggregate'], ParentType, ContextType, Partial<Querynft_tokens_aggregateArgs>>;
  nft_tokens_by_pk?: Resolver<Maybe<ResolversTypes['nft_tokens']>, ParentType, ContextType, RequireFields<Querynft_tokens_by_pkArgs, 'nft_contract_id' | 'token_id'>>;
  authInfo?: Resolver<Maybe<ResolversTypes['AuthenticationInfo']>, ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createThing?: Resolver<Maybe<ResolversTypes['CreateThingPayload']>, ParentType, ContextType, RequireFields<MutationcreateThingArgs, 'input'>>;
  createMedia?: Resolver<Maybe<ResolversTypes['CreateMediaPayload']>, ParentType, ContextType, RequireFields<MutationcreateMediaArgs, 'input'>>;
  proposeAttribute?: Resolver<Maybe<ResolversTypes['ProposeAttributePayload']>, ParentType, ContextType, RequireFields<MutationproposeAttributeArgs, 'input'>>;
  createAttribute?: Resolver<Maybe<ResolversTypes['CreateAttributePayload']>, ParentType, ContextType, RequireFields<MutationcreateAttributeArgs, 'input'>>;
  proposeOption?: Resolver<Maybe<ResolversTypes['ProposeOptionPayload']>, ParentType, ContextType, RequireFields<MutationproposeOptionArgs, 'input'>>;
}>;

export interface CursorScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Cursor'], any> {
  name: 'Cursor';
}

export type AttributesConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AttributesConnection'] = ResolversParentTypes['AttributesConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Attribute']>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['AttributesEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AttributeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Attribute'] = ResolversParentTypes['Attribute']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isApproved?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  relationships?: Resolver<ResolversTypes['RelationshipsConnection'], ParentType, ContextType, RequireFields<AttributerelationshipsArgs, 'orderBy'>>;
  characteristics?: Resolver<ResolversTypes['CharacteristicsConnection'], ParentType, ContextType, RequireFields<AttributecharacteristicsArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DatetimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime';
}

export type RelationshipsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RelationshipsConnection'] = ResolversParentTypes['RelationshipsConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Relationship']>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['RelationshipsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RelationshipResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Relationship'] = ResolversParentTypes['Relationship']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  attributeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  optionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  attribute?: Resolver<Maybe<ResolversTypes['Attribute']>, ParentType, ContextType>;
  option?: Resolver<Maybe<ResolversTypes['Option']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Option'] = ResolversParentTypes['Option']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isApproved?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  relationships?: Resolver<ResolversTypes['RelationshipsConnection'], ParentType, ContextType, RequireFields<OptionrelationshipsArgs, 'orderBy'>>;
  characteristics?: Resolver<ResolversTypes['CharacteristicsConnection'], ParentType, ContextType, RequireFields<OptioncharacteristicsArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CharacteristicsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CharacteristicsConnection'] = ResolversParentTypes['CharacteristicsConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Characteristic']>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['CharacteristicsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CharacteristicResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Characteristic'] = ResolversParentTypes['Characteristic']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  thingId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attributeId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  optionId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  thing?: Resolver<Maybe<ResolversTypes['Thing']>, ParentType, ContextType>;
  attribute?: Resolver<Maybe<ResolversTypes['Attribute']>, ParentType, ContextType>;
  option?: Resolver<Maybe<ResolversTypes['Option']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Thing'] = ResolversParentTypes['Thing']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ownerId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  privacyType?: Resolver<Maybe<ResolversTypes['PrivacyType']>, ParentType, ContextType>;
  tags?: Resolver<ResolversTypes['TagsConnection'], ParentType, ContextType, RequireFields<ThingtagsArgs, 'orderBy'>>;
  characteristics?: Resolver<ResolversTypes['CharacteristicsConnection'], ParentType, ContextType, RequireFields<ThingcharacteristicsArgs, 'orderBy'>>;
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract?: Resolver<Maybe<ResolversTypes['nft_contracts']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nft_contracts?: Resolver<Maybe<ResolversTypes['nft_contracts']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_blob?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<Thingreference_blobArgs>>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface JSONScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type TagsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TagsConnection'] = ResolversParentTypes['TagsConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['TagsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  thingId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mediaId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  thing?: Resolver<Maybe<ResolversTypes['Thing']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Media'] = ResolversParentTypes['Media']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  mediaUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  tags?: Resolver<ResolversTypes['TagsConnection'], ParentType, ContextType, RequireFields<MediatagsArgs, 'orderBy'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['TagsEdge'] = ResolversParentTypes['TagsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Tag'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PageInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  startCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  endCursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CharacteristicsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CharacteristicsEdge'] = ResolversParentTypes['CharacteristicsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Characteristic'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RelationshipsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RelationshipsEdge'] = ResolversParentTypes['RelationshipsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Relationship'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AttributesEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AttributesEdge'] = ResolversParentTypes['AttributesEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Attribute'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaConnection'] = ResolversParentTypes['MediaConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Media']>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['MediaEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MediaEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MediaEdge'] = ResolversParentTypes['MediaEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Media'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OptionsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OptionsConnection'] = ResolversParentTypes['OptionsConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Option']>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['OptionsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OptionsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['OptionsEdge'] = ResolversParentTypes['OptionsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Option'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThingsConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThingsConnection'] = ResolversParentTypes['ThingsConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['Thing']>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['ThingsEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThingsEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThingsEdge'] = ResolversParentTypes['ThingsEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['Thing'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersConnectionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UsersConnection'] = ResolversParentTypes['UsersConnection']> = ResolversObject<{
  nodes?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  edges?: Resolver<Array<ResolversTypes['UsersEdge']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  favoriteColor?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wallet?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UsersEdgeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['UsersEdge'] = ResolversParentTypes['UsersEdge']> = ResolversObject<{
  cursor?: Resolver<Maybe<ResolversTypes['Cursor']>, ParentType, ContextType>;
  node?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateThingPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CreateThingPayload'] = ResolversParentTypes['CreateThingPayload']> = ResolversObject<{
  thing?: Resolver<Maybe<ResolversTypes['Thing']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateMediaPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CreateMediaPayload'] = ResolversParentTypes['CreateMediaPayload']> = ResolversObject<{
  media?: Resolver<Maybe<ResolversTypes['Media']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProposeAttributePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProposeAttributePayload'] = ResolversParentTypes['ProposeAttributePayload']> = ResolversObject<{
  attribute?: Resolver<Maybe<ResolversTypes['Attribute']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateAttributePayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['CreateAttributePayload'] = ResolversParentTypes['CreateAttributePayload']> = ResolversObject<{
  attribute?: Resolver<Maybe<ResolversTypes['Attribute']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProposeOptionPayloadResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ProposeOptionPayload'] = ResolversParentTypes['ProposeOptionPayload']> = ResolversObject<{
  option?: Resolver<Maybe<ResolversTypes['Option']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  blocks?: SubscriptionResolver<Array<ResolversTypes['blocks']>, "blocks", ParentType, ContextType, Partial<SubscriptionblocksArgs>>;
  blocks_aggregate?: SubscriptionResolver<ResolversTypes['blocks_aggregate'], "blocks_aggregate", ParentType, ContextType, Partial<Subscriptionblocks_aggregateArgs>>;
  blocks_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['blocks']>, "blocks_by_pk", ParentType, ContextType, RequireFields<Subscriptionblocks_by_pkArgs, 'synced_height'>>;
  blocks_stream?: SubscriptionResolver<Array<ResolversTypes['blocks']>, "blocks_stream", ParentType, ContextType, RequireFields<Subscriptionblocks_streamArgs, 'batch_size' | 'cursor'>>;
  mb_store_minters?: SubscriptionResolver<Array<ResolversTypes['mb_store_minters']>, "mb_store_minters", ParentType, ContextType, Partial<Subscriptionmb_store_mintersArgs>>;
  mb_store_minters_aggregate?: SubscriptionResolver<ResolversTypes['mb_store_minters_aggregate'], "mb_store_minters_aggregate", ParentType, ContextType, Partial<Subscriptionmb_store_minters_aggregateArgs>>;
  mb_store_minters_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['mb_store_minters']>, "mb_store_minters_by_pk", ParentType, ContextType, RequireFields<Subscriptionmb_store_minters_by_pkArgs, 'minter_id' | 'nft_contract_id'>>;
  mb_store_minters_stream?: SubscriptionResolver<Array<ResolversTypes['mb_store_minters']>, "mb_store_minters_stream", ParentType, ContextType, RequireFields<Subscriptionmb_store_minters_streamArgs, 'batch_size' | 'cursor'>>;
  mb_views_active_listings?: SubscriptionResolver<Array<ResolversTypes['mb_views_active_listings']>, "mb_views_active_listings", ParentType, ContextType, Partial<Subscriptionmb_views_active_listingsArgs>>;
  mb_views_active_listings_aggregate?: SubscriptionResolver<ResolversTypes['mb_views_active_listings_aggregate'], "mb_views_active_listings_aggregate", ParentType, ContextType, Partial<Subscriptionmb_views_active_listings_aggregateArgs>>;
  mb_views_active_listings_rollup?: SubscriptionResolver<Array<ResolversTypes['mb_views_active_listings_rollup']>, "mb_views_active_listings_rollup", ParentType, ContextType, Partial<Subscriptionmb_views_active_listings_rollupArgs>>;
  mb_views_active_listings_rollup_aggregate?: SubscriptionResolver<ResolversTypes['mb_views_active_listings_rollup_aggregate'], "mb_views_active_listings_rollup_aggregate", ParentType, ContextType, Partial<Subscriptionmb_views_active_listings_rollup_aggregateArgs>>;
  mb_views_active_listings_rollup_stream?: SubscriptionResolver<Array<ResolversTypes['mb_views_active_listings_rollup']>, "mb_views_active_listings_rollup_stream", ParentType, ContextType, RequireFields<Subscriptionmb_views_active_listings_rollup_streamArgs, 'batch_size' | 'cursor'>>;
  mb_views_active_listings_stream?: SubscriptionResolver<Array<ResolversTypes['mb_views_active_listings']>, "mb_views_active_listings_stream", ParentType, ContextType, RequireFields<Subscriptionmb_views_active_listings_streamArgs, 'batch_size' | 'cursor'>>;
  mb_views_auctions_with_offer?: SubscriptionResolver<Array<ResolversTypes['mb_views_auctions_with_offer']>, "mb_views_auctions_with_offer", ParentType, ContextType, Partial<Subscriptionmb_views_auctions_with_offerArgs>>;
  mb_views_auctions_with_offer_aggregate?: SubscriptionResolver<ResolversTypes['mb_views_auctions_with_offer_aggregate'], "mb_views_auctions_with_offer_aggregate", ParentType, ContextType, Partial<Subscriptionmb_views_auctions_with_offer_aggregateArgs>>;
  mb_views_auctions_with_offer_stream?: SubscriptionResolver<Array<ResolversTypes['mb_views_auctions_with_offer']>, "mb_views_auctions_with_offer_stream", ParentType, ContextType, RequireFields<Subscriptionmb_views_auctions_with_offer_streamArgs, 'batch_size' | 'cursor'>>;
  mb_views_nft_activities?: SubscriptionResolver<Array<ResolversTypes['mb_views_nft_activities']>, "mb_views_nft_activities", ParentType, ContextType, Partial<Subscriptionmb_views_nft_activitiesArgs>>;
  mb_views_nft_activities_aggregate?: SubscriptionResolver<ResolversTypes['mb_views_nft_activities_aggregate'], "mb_views_nft_activities_aggregate", ParentType, ContextType, Partial<Subscriptionmb_views_nft_activities_aggregateArgs>>;
  mb_views_nft_activities_stream?: SubscriptionResolver<Array<ResolversTypes['mb_views_nft_activities']>, "mb_views_nft_activities_stream", ParentType, ContextType, RequireFields<Subscriptionmb_views_nft_activities_streamArgs, 'batch_size' | 'cursor'>>;
  mb_views_nft_metadata?: SubscriptionResolver<Array<ResolversTypes['mb_views_nft_metadata']>, "mb_views_nft_metadata", ParentType, ContextType, Partial<Subscriptionmb_views_nft_metadataArgs>>;
  mb_views_nft_metadata_aggregate?: SubscriptionResolver<ResolversTypes['mb_views_nft_metadata_aggregate'], "mb_views_nft_metadata_aggregate", ParentType, ContextType, Partial<Subscriptionmb_views_nft_metadata_aggregateArgs>>;
  mb_views_nft_metadata_stream?: SubscriptionResolver<Array<ResolversTypes['mb_views_nft_metadata']>, "mb_views_nft_metadata_stream", ParentType, ContextType, RequireFields<Subscriptionmb_views_nft_metadata_streamArgs, 'batch_size' | 'cursor'>>;
  mb_views_nft_metadata_unburned?: SubscriptionResolver<Array<ResolversTypes['mb_views_nft_metadata_unburned']>, "mb_views_nft_metadata_unburned", ParentType, ContextType, Partial<Subscriptionmb_views_nft_metadata_unburnedArgs>>;
  mb_views_nft_metadata_unburned_aggregate?: SubscriptionResolver<ResolversTypes['mb_views_nft_metadata_unburned_aggregate'], "mb_views_nft_metadata_unburned_aggregate", ParentType, ContextType, Partial<Subscriptionmb_views_nft_metadata_unburned_aggregateArgs>>;
  mb_views_nft_metadata_unburned_stream?: SubscriptionResolver<Array<ResolversTypes['mb_views_nft_metadata_unburned']>, "mb_views_nft_metadata_unburned_stream", ParentType, ContextType, RequireFields<Subscriptionmb_views_nft_metadata_unburned_streamArgs, 'batch_size' | 'cursor'>>;
  mb_views_nft_owned_tokens?: SubscriptionResolver<Array<ResolversTypes['mb_views_nft_owned_tokens']>, "mb_views_nft_owned_tokens", ParentType, ContextType, Partial<Subscriptionmb_views_nft_owned_tokensArgs>>;
  mb_views_nft_owned_tokens_aggregate?: SubscriptionResolver<ResolversTypes['mb_views_nft_owned_tokens_aggregate'], "mb_views_nft_owned_tokens_aggregate", ParentType, ContextType, Partial<Subscriptionmb_views_nft_owned_tokens_aggregateArgs>>;
  mb_views_nft_owned_tokens_stream?: SubscriptionResolver<Array<ResolversTypes['mb_views_nft_owned_tokens']>, "mb_views_nft_owned_tokens_stream", ParentType, ContextType, RequireFields<Subscriptionmb_views_nft_owned_tokens_streamArgs, 'batch_size' | 'cursor'>>;
  mb_views_nft_tokens?: SubscriptionResolver<Array<ResolversTypes['mb_views_nft_tokens']>, "mb_views_nft_tokens", ParentType, ContextType, Partial<Subscriptionmb_views_nft_tokensArgs>>;
  mb_views_nft_tokens_aggregate?: SubscriptionResolver<ResolversTypes['mb_views_nft_tokens_aggregate'], "mb_views_nft_tokens_aggregate", ParentType, ContextType, Partial<Subscriptionmb_views_nft_tokens_aggregateArgs>>;
  mb_views_nft_tokens_stream?: SubscriptionResolver<Array<ResolversTypes['mb_views_nft_tokens']>, "mb_views_nft_tokens_stream", ParentType, ContextType, RequireFields<Subscriptionmb_views_nft_tokens_streamArgs, 'batch_size' | 'cursor'>>;
  mb_views_nft_tokens_with_listing?: SubscriptionResolver<Array<ResolversTypes['mb_views_nft_tokens_with_listing']>, "mb_views_nft_tokens_with_listing", ParentType, ContextType, Partial<Subscriptionmb_views_nft_tokens_with_listingArgs>>;
  mb_views_nft_tokens_with_listing_aggregate?: SubscriptionResolver<ResolversTypes['mb_views_nft_tokens_with_listing_aggregate'], "mb_views_nft_tokens_with_listing_aggregate", ParentType, ContextType, Partial<Subscriptionmb_views_nft_tokens_with_listing_aggregateArgs>>;
  mb_views_nft_tokens_with_listing_stream?: SubscriptionResolver<Array<ResolversTypes['mb_views_nft_tokens_with_listing']>, "mb_views_nft_tokens_with_listing_stream", ParentType, ContextType, RequireFields<Subscriptionmb_views_nft_tokens_with_listing_streamArgs, 'batch_size' | 'cursor'>>;
  mb_views_nft_tokens_with_media_type?: SubscriptionResolver<Array<ResolversTypes['mb_views_nft_tokens_with_media_type']>, "mb_views_nft_tokens_with_media_type", ParentType, ContextType, Partial<Subscriptionmb_views_nft_tokens_with_media_typeArgs>>;
  mb_views_nft_tokens_with_media_type_aggregate?: SubscriptionResolver<ResolversTypes['mb_views_nft_tokens_with_media_type_aggregate'], "mb_views_nft_tokens_with_media_type_aggregate", ParentType, ContextType, Partial<Subscriptionmb_views_nft_tokens_with_media_type_aggregateArgs>>;
  mb_views_nft_tokens_with_media_type_stream?: SubscriptionResolver<Array<ResolversTypes['mb_views_nft_tokens_with_media_type']>, "mb_views_nft_tokens_with_media_type_stream", ParentType, ContextType, RequireFields<Subscriptionmb_views_nft_tokens_with_media_type_streamArgs, 'batch_size' | 'cursor'>>;
  mb_views_top_stores?: SubscriptionResolver<Array<ResolversTypes['mb_views_top_stores']>, "mb_views_top_stores", ParentType, ContextType, Partial<Subscriptionmb_views_top_storesArgs>>;
  mb_views_top_stores_aggregate?: SubscriptionResolver<ResolversTypes['mb_views_top_stores_aggregate'], "mb_views_top_stores_aggregate", ParentType, ContextType, Partial<Subscriptionmb_views_top_stores_aggregateArgs>>;
  mb_views_top_stores_stream?: SubscriptionResolver<Array<ResolversTypes['mb_views_top_stores']>, "mb_views_top_stores_stream", ParentType, ContextType, RequireFields<Subscriptionmb_views_top_stores_streamArgs, 'batch_size' | 'cursor'>>;
  nft_activities?: SubscriptionResolver<Array<ResolversTypes['nft_activities']>, "nft_activities", ParentType, ContextType, Partial<Subscriptionnft_activitiesArgs>>;
  nft_activities_aggregate?: SubscriptionResolver<ResolversTypes['nft_activities_aggregate'], "nft_activities_aggregate", ParentType, ContextType, Partial<Subscriptionnft_activities_aggregateArgs>>;
  nft_activities_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['nft_activities']>, "nft_activities_by_pk", ParentType, ContextType, RequireFields<Subscriptionnft_activities_by_pkArgs, 'kind' | 'nft_contract_id' | 'receipt_id' | 'token_id'>>;
  nft_activities_stream?: SubscriptionResolver<Array<ResolversTypes['nft_activities']>, "nft_activities_stream", ParentType, ContextType, RequireFields<Subscriptionnft_activities_streamArgs, 'batch_size' | 'cursor'>>;
  nft_attributes?: SubscriptionResolver<Array<ResolversTypes['nft_attributes']>, "nft_attributes", ParentType, ContextType, Partial<Subscriptionnft_attributesArgs>>;
  nft_attributes_aggregate?: SubscriptionResolver<ResolversTypes['nft_attributes_aggregate'], "nft_attributes_aggregate", ParentType, ContextType, Partial<Subscriptionnft_attributes_aggregateArgs>>;
  nft_attributes_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['nft_attributes']>, "nft_attributes_by_pk", ParentType, ContextType, RequireFields<Subscriptionnft_attributes_by_pkArgs, 'attribute_type' | 'nft_contract_id' | 'nft_metadata_id'>>;
  nft_attributes_stream?: SubscriptionResolver<Array<ResolversTypes['nft_attributes']>, "nft_attributes_stream", ParentType, ContextType, RequireFields<Subscriptionnft_attributes_streamArgs, 'batch_size' | 'cursor'>>;
  nft_contracts?: SubscriptionResolver<Array<ResolversTypes['nft_contracts']>, "nft_contracts", ParentType, ContextType, Partial<Subscriptionnft_contractsArgs>>;
  nft_contracts_aggregate?: SubscriptionResolver<ResolversTypes['nft_contracts_aggregate'], "nft_contracts_aggregate", ParentType, ContextType, Partial<Subscriptionnft_contracts_aggregateArgs>>;
  nft_contracts_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['nft_contracts']>, "nft_contracts_by_pk", ParentType, ContextType, RequireFields<Subscriptionnft_contracts_by_pkArgs, 'id'>>;
  nft_contracts_stream?: SubscriptionResolver<Array<ResolversTypes['nft_contracts']>, "nft_contracts_stream", ParentType, ContextType, RequireFields<Subscriptionnft_contracts_streamArgs, 'batch_size' | 'cursor'>>;
  nft_earnings?: SubscriptionResolver<Array<ResolversTypes['nft_earnings']>, "nft_earnings", ParentType, ContextType, Partial<Subscriptionnft_earningsArgs>>;
  nft_earnings_aggregate?: SubscriptionResolver<ResolversTypes['nft_earnings_aggregate'], "nft_earnings_aggregate", ParentType, ContextType, Partial<Subscriptionnft_earnings_aggregateArgs>>;
  nft_earnings_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['nft_earnings']>, "nft_earnings_by_pk", ParentType, ContextType, RequireFields<Subscriptionnft_earnings_by_pkArgs, 'approval_id' | 'is_mintbase_cut' | 'is_referral' | 'market_id' | 'nft_contract_id' | 'receiver_id' | 'token_id'>>;
  nft_earnings_stream?: SubscriptionResolver<Array<ResolversTypes['nft_earnings']>, "nft_earnings_stream", ParentType, ContextType, RequireFields<Subscriptionnft_earnings_streamArgs, 'batch_size' | 'cursor'>>;
  nft_listings?: SubscriptionResolver<Array<ResolversTypes['nft_listings']>, "nft_listings", ParentType, ContextType, Partial<Subscriptionnft_listingsArgs>>;
  nft_listings_aggregate?: SubscriptionResolver<ResolversTypes['nft_listings_aggregate'], "nft_listings_aggregate", ParentType, ContextType, Partial<Subscriptionnft_listings_aggregateArgs>>;
  nft_listings_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['nft_listings']>, "nft_listings_by_pk", ParentType, ContextType, RequireFields<Subscriptionnft_listings_by_pkArgs, 'approval_id' | 'market_id' | 'nft_contract_id' | 'token_id'>>;
  nft_listings_stream?: SubscriptionResolver<Array<ResolversTypes['nft_listings']>, "nft_listings_stream", ParentType, ContextType, RequireFields<Subscriptionnft_listings_streamArgs, 'batch_size' | 'cursor'>>;
  nft_metadata?: SubscriptionResolver<Array<ResolversTypes['Thing']>, "nft_metadata", ParentType, ContextType, Partial<Subscriptionnft_metadataArgs>>;
  nft_metadata_aggregate?: SubscriptionResolver<ResolversTypes['nft_metadata_aggregate'], "nft_metadata_aggregate", ParentType, ContextType, Partial<Subscriptionnft_metadata_aggregateArgs>>;
  nft_metadata_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['Thing']>, "nft_metadata_by_pk", ParentType, ContextType, RequireFields<Subscriptionnft_metadata_by_pkArgs, 'id'>>;
  nft_metadata_stream?: SubscriptionResolver<Array<ResolversTypes['Thing']>, "nft_metadata_stream", ParentType, ContextType, RequireFields<Subscriptionnft_metadata_streamArgs, 'batch_size' | 'cursor'>>;
  nft_offers?: SubscriptionResolver<Array<ResolversTypes['nft_offers']>, "nft_offers", ParentType, ContextType, Partial<Subscriptionnft_offersArgs>>;
  nft_offers_aggregate?: SubscriptionResolver<ResolversTypes['nft_offers_aggregate'], "nft_offers_aggregate", ParentType, ContextType, Partial<Subscriptionnft_offers_aggregateArgs>>;
  nft_offers_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['nft_offers']>, "nft_offers_by_pk", ParentType, ContextType, RequireFields<Subscriptionnft_offers_by_pkArgs, 'approval_id' | 'market_id' | 'nft_contract_id' | 'offer_id' | 'token_id'>>;
  nft_offers_stream?: SubscriptionResolver<Array<ResolversTypes['nft_offers']>, "nft_offers_stream", ParentType, ContextType, RequireFields<Subscriptionnft_offers_streamArgs, 'batch_size' | 'cursor'>>;
  nft_tokens?: SubscriptionResolver<Array<ResolversTypes['nft_tokens']>, "nft_tokens", ParentType, ContextType, Partial<Subscriptionnft_tokensArgs>>;
  nft_tokens_aggregate?: SubscriptionResolver<ResolversTypes['nft_tokens_aggregate'], "nft_tokens_aggregate", ParentType, ContextType, Partial<Subscriptionnft_tokens_aggregateArgs>>;
  nft_tokens_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['nft_tokens']>, "nft_tokens_by_pk", ParentType, ContextType, RequireFields<Subscriptionnft_tokens_by_pkArgs, 'nft_contract_id' | 'token_id'>>;
  nft_tokens_stream?: SubscriptionResolver<Array<ResolversTypes['nft_tokens']>, "nft_tokens_stream", ParentType, ContextType, RequireFields<Subscriptionnft_tokens_streamArgs, 'batch_size' | 'cursor'>>;
}>;

export interface bigintScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['bigint'], any> {
  name: 'bigint';
}

export type blocksResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['blocks'] = ResolversParentTypes['blocks']> = ResolversObject<{
  synced_height?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type blocks_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['blocks_aggregate'] = ResolversParentTypes['blocks_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['blocks_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['blocks']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type blocks_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['blocks_aggregate_fields'] = ResolversParentTypes['blocks_aggregate_fields']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['blocks_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<blocks_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['blocks_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['blocks_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['blocks_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['blocks_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['blocks_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['blocks_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['blocks_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['blocks_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['blocks_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type blocks_avg_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['blocks_avg_fields'] = ResolversParentTypes['blocks_avg_fields']> = ResolversObject<{
  synced_height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type blocks_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['blocks_max_fields'] = ResolversParentTypes['blocks_max_fields']> = ResolversObject<{
  synced_height?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type blocks_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['blocks_min_fields'] = ResolversParentTypes['blocks_min_fields']> = ResolversObject<{
  synced_height?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type blocks_stddev_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['blocks_stddev_fields'] = ResolversParentTypes['blocks_stddev_fields']> = ResolversObject<{
  synced_height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type blocks_stddev_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['blocks_stddev_pop_fields'] = ResolversParentTypes['blocks_stddev_pop_fields']> = ResolversObject<{
  synced_height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type blocks_stddev_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['blocks_stddev_samp_fields'] = ResolversParentTypes['blocks_stddev_samp_fields']> = ResolversObject<{
  synced_height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type blocks_sum_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['blocks_sum_fields'] = ResolversParentTypes['blocks_sum_fields']> = ResolversObject<{
  synced_height?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type blocks_var_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['blocks_var_pop_fields'] = ResolversParentTypes['blocks_var_pop_fields']> = ResolversObject<{
  synced_height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type blocks_var_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['blocks_var_samp_fields'] = ResolversParentTypes['blocks_var_samp_fields']> = ResolversObject<{
  synced_height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type blocks_variance_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['blocks_variance_fields'] = ResolversParentTypes['blocks_variance_fields']> = ResolversObject<{
  synced_height?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface jsonbScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['jsonb'], any> {
  name: 'jsonb';
}

export type mb_store_mintersResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_store_minters'] = ResolversParentTypes['mb_store_minters']> = ResolversObject<{
  minter_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nft_contract?: Resolver<Maybe<ResolversTypes['nft_contracts']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nft_contracts?: Resolver<Maybe<ResolversTypes['nft_contracts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_store_minters_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_store_minters_aggregate'] = ResolversParentTypes['mb_store_minters_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['mb_store_minters_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['mb_store_minters']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_store_minters_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_store_minters_aggregate_fields'] = ResolversParentTypes['mb_store_minters_aggregate_fields']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<mb_store_minters_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['mb_store_minters_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['mb_store_minters_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_store_minters_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_store_minters_max_fields'] = ResolversParentTypes['mb_store_minters_max_fields']> = ResolversObject<{
  minter_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_store_minters_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_store_minters_min_fields'] = ResolversParentTypes['mb_store_minters_min_fields']> = ResolversObject<{
  minter_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listingsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings'] = ResolversParentTypes['mb_views_active_listings']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listed_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  market_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offers?: Resolver<Array<ResolversTypes['nft_offers']>, ParentType, ContextType, Partial<mb_views_active_listingsoffersArgs>>;
  offers_aggregate?: Resolver<ResolversTypes['nft_offers_aggregate'], ParentType, ContextType, Partial<mb_views_active_listingsoffers_aggregateArgs>>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_blob?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<mb_views_active_listingsreference_blobArgs>>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_aggregate'] = ResolversParentTypes['mb_views_active_listings_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['mb_views_active_listings']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_aggregate_fields'] = ResolversParentTypes['mb_views_active_listings_aggregate_fields']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<mb_views_active_listings_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_avg_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_avg_fields'] = ResolversParentTypes['mb_views_active_listings_avg_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_max_fields'] = ResolversParentTypes['mb_views_active_listings_max_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listed_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  market_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_min_fields'] = ResolversParentTypes['mb_views_active_listings_min_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listed_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  market_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_rollupResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_rollup'] = ResolversParentTypes['mb_views_active_listings_rollup']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listed_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  market_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_blob?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<mb_views_active_listings_rollupreference_blobArgs>>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_rollup_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_rollup_aggregate'] = ResolversParentTypes['mb_views_active_listings_rollup_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_rollup_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['mb_views_active_listings_rollup']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_rollup_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_rollup_aggregate_fields'] = ResolversParentTypes['mb_views_active_listings_rollup_aggregate_fields']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_rollup_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<mb_views_active_listings_rollup_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_rollup_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_rollup_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_rollup_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_rollup_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_rollup_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_rollup_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_rollup_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_rollup_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['mb_views_active_listings_rollup_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_rollup_avg_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_rollup_avg_fields'] = ResolversParentTypes['mb_views_active_listings_rollup_avg_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_rollup_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_rollup_max_fields'] = ResolversParentTypes['mb_views_active_listings_rollup_max_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listed_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  market_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_rollup_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_rollup_min_fields'] = ResolversParentTypes['mb_views_active_listings_rollup_min_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listed_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  market_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_rollup_stddev_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_rollup_stddev_fields'] = ResolversParentTypes['mb_views_active_listings_rollup_stddev_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_rollup_stddev_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_rollup_stddev_pop_fields'] = ResolversParentTypes['mb_views_active_listings_rollup_stddev_pop_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_rollup_stddev_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_rollup_stddev_samp_fields'] = ResolversParentTypes['mb_views_active_listings_rollup_stddev_samp_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_rollup_sum_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_rollup_sum_fields'] = ResolversParentTypes['mb_views_active_listings_rollup_sum_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_rollup_var_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_rollup_var_pop_fields'] = ResolversParentTypes['mb_views_active_listings_rollup_var_pop_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_rollup_var_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_rollup_var_samp_fields'] = ResolversParentTypes['mb_views_active_listings_rollup_var_samp_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_rollup_variance_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_rollup_variance_fields'] = ResolversParentTypes['mb_views_active_listings_rollup_variance_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_stddev_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_stddev_fields'] = ResolversParentTypes['mb_views_active_listings_stddev_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_stddev_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_stddev_pop_fields'] = ResolversParentTypes['mb_views_active_listings_stddev_pop_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_stddev_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_stddev_samp_fields'] = ResolversParentTypes['mb_views_active_listings_stddev_samp_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_sum_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_sum_fields'] = ResolversParentTypes['mb_views_active_listings_sum_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_var_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_var_pop_fields'] = ResolversParentTypes['mb_views_active_listings_var_pop_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_var_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_var_samp_fields'] = ResolversParentTypes['mb_views_active_listings_var_samp_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_active_listings_variance_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_active_listings_variance_fields'] = ResolversParentTypes['mb_views_active_listings_variance_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_auctions_with_offerResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_auctions_with_offer'] = ResolversParentTypes['mb_views_auctions_with_offer']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listed_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listing_accepted_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  listing_invalidated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  listing_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  market_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_token?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens']>, ParentType, ContextType>;
  offer_accepted_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  offer_expires_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  offer_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offer_withdrawn_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  offered_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  offered_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_blob?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<mb_views_auctions_with_offerreference_blobArgs>>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unlisted_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_auctions_with_offer_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_auctions_with_offer_aggregate'] = ResolversParentTypes['mb_views_auctions_with_offer_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['mb_views_auctions_with_offer_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['mb_views_auctions_with_offer']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_auctions_with_offer_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_auctions_with_offer_aggregate_fields'] = ResolversParentTypes['mb_views_auctions_with_offer_aggregate_fields']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['mb_views_auctions_with_offer_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<mb_views_auctions_with_offer_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['mb_views_auctions_with_offer_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['mb_views_auctions_with_offer_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['mb_views_auctions_with_offer_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['mb_views_auctions_with_offer_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['mb_views_auctions_with_offer_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['mb_views_auctions_with_offer_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['mb_views_auctions_with_offer_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['mb_views_auctions_with_offer_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['mb_views_auctions_with_offer_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_auctions_with_offer_avg_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_auctions_with_offer_avg_fields'] = ResolversParentTypes['mb_views_auctions_with_offer_avg_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_auctions_with_offer_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_auctions_with_offer_max_fields'] = ResolversParentTypes['mb_views_auctions_with_offer_max_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listed_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listing_accepted_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  listing_invalidated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  listing_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  market_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offer_accepted_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  offer_expires_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  offer_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offer_withdrawn_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  offered_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  offered_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unlisted_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_auctions_with_offer_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_auctions_with_offer_min_fields'] = ResolversParentTypes['mb_views_auctions_with_offer_min_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listed_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listing_accepted_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  listing_invalidated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  listing_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  market_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offer_accepted_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  offer_expires_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  offer_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offer_withdrawn_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  offered_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  offered_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unlisted_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_auctions_with_offer_stddev_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_auctions_with_offer_stddev_fields'] = ResolversParentTypes['mb_views_auctions_with_offer_stddev_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_auctions_with_offer_stddev_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_auctions_with_offer_stddev_pop_fields'] = ResolversParentTypes['mb_views_auctions_with_offer_stddev_pop_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_auctions_with_offer_stddev_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_auctions_with_offer_stddev_samp_fields'] = ResolversParentTypes['mb_views_auctions_with_offer_stddev_samp_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_auctions_with_offer_sum_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_auctions_with_offer_sum_fields'] = ResolversParentTypes['mb_views_auctions_with_offer_sum_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_auctions_with_offer_var_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_auctions_with_offer_var_pop_fields'] = ResolversParentTypes['mb_views_auctions_with_offer_var_pop_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_auctions_with_offer_var_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_auctions_with_offer_var_samp_fields'] = ResolversParentTypes['mb_views_auctions_with_offer_var_samp_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_auctions_with_offer_variance_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_auctions_with_offer_variance_fields'] = ResolversParentTypes['mb_views_auctions_with_offer_variance_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_activitiesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_activities'] = ResolversParentTypes['mb_views_nft_activities']> = ResolversObject<{
  action_receiver?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  action_sender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract?: Resolver<Maybe<ResolversTypes['nft_contracts']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_blob?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<mb_views_nft_activitiesreference_blobArgs>>;
  reference_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tx_sender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_activities_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_activities_aggregate'] = ResolversParentTypes['mb_views_nft_activities_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['mb_views_nft_activities_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['mb_views_nft_activities']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_activities_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_activities_aggregate_fields'] = ResolversParentTypes['mb_views_nft_activities_aggregate_fields']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['mb_views_nft_activities_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<mb_views_nft_activities_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['mb_views_nft_activities_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['mb_views_nft_activities_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['mb_views_nft_activities_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['mb_views_nft_activities_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['mb_views_nft_activities_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['mb_views_nft_activities_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['mb_views_nft_activities_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['mb_views_nft_activities_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['mb_views_nft_activities_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_activities_avg_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_activities_avg_fields'] = ResolversParentTypes['mb_views_nft_activities_avg_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_activities_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_activities_max_fields'] = ResolversParentTypes['mb_views_nft_activities_max_fields']> = ResolversObject<{
  action_receiver?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  action_sender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tx_sender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_activities_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_activities_min_fields'] = ResolversParentTypes['mb_views_nft_activities_min_fields']> = ResolversObject<{
  action_receiver?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  action_sender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tx_sender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_activities_stddev_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_activities_stddev_fields'] = ResolversParentTypes['mb_views_nft_activities_stddev_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_activities_stddev_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_activities_stddev_pop_fields'] = ResolversParentTypes['mb_views_nft_activities_stddev_pop_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_activities_stddev_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_activities_stddev_samp_fields'] = ResolversParentTypes['mb_views_nft_activities_stddev_samp_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_activities_sum_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_activities_sum_fields'] = ResolversParentTypes['mb_views_nft_activities_sum_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_activities_var_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_activities_var_pop_fields'] = ResolversParentTypes['mb_views_nft_activities_var_pop_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_activities_var_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_activities_var_samp_fields'] = ResolversParentTypes['mb_views_nft_activities_var_samp_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_activities_variance_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_activities_variance_fields'] = ResolversParentTypes['mb_views_nft_activities_variance_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_metadataResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_metadata'] = ResolversParentTypes['mb_views_nft_metadata']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listings?: Resolver<Array<ResolversTypes['mb_views_active_listings']>, ParentType, ContextType, Partial<mb_views_nft_metadatalistingsArgs>>;
  listings_aggregate?: Resolver<ResolversTypes['mb_views_active_listings_aggregate'], ParentType, ContextType, Partial<mb_views_nft_metadatalistings_aggregateArgs>>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  nft_contract_icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_is_mintbase?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  nft_contract_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_owner_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_spec?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_blob?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<mb_views_nft_metadatareference_blobArgs>>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_metadata_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_metadata_aggregate'] = ResolversParentTypes['mb_views_nft_metadata_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['mb_views_nft_metadata_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['mb_views_nft_metadata']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_metadata_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_metadata_aggregate_fields'] = ResolversParentTypes['mb_views_nft_metadata_aggregate_fields']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<mb_views_nft_metadata_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['mb_views_nft_metadata_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['mb_views_nft_metadata_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_metadata_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_metadata_max_fields'] = ResolversParentTypes['mb_views_nft_metadata_max_fields']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  nft_contract_icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_owner_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_spec?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_metadata_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_metadata_min_fields'] = ResolversParentTypes['mb_views_nft_metadata_min_fields']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  nft_contract_icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_owner_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_spec?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_metadata_unburnedResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_metadata_unburned'] = ResolversParentTypes['mb_views_nft_metadata_unburned']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  reference_blob?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<mb_views_nft_metadata_unburnedreference_blobArgs>>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_metadata_unburned_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_metadata_unburned_aggregate'] = ResolversParentTypes['mb_views_nft_metadata_unburned_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['mb_views_nft_metadata_unburned_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['mb_views_nft_metadata_unburned']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_metadata_unburned_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_metadata_unburned_aggregate_fields'] = ResolversParentTypes['mb_views_nft_metadata_unburned_aggregate_fields']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['mb_views_nft_metadata_unburned_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<mb_views_nft_metadata_unburned_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['mb_views_nft_metadata_unburned_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['mb_views_nft_metadata_unburned_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['mb_views_nft_metadata_unburned_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['mb_views_nft_metadata_unburned_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['mb_views_nft_metadata_unburned_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['mb_views_nft_metadata_unburned_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['mb_views_nft_metadata_unburned_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['mb_views_nft_metadata_unburned_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['mb_views_nft_metadata_unburned_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_metadata_unburned_avg_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_metadata_unburned_avg_fields'] = ResolversParentTypes['mb_views_nft_metadata_unburned_avg_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_metadata_unburned_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_metadata_unburned_max_fields'] = ResolversParentTypes['mb_views_nft_metadata_unburned_max_fields']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_metadata_unburned_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_metadata_unburned_min_fields'] = ResolversParentTypes['mb_views_nft_metadata_unburned_min_fields']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_metadata_unburned_stddev_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_metadata_unburned_stddev_fields'] = ResolversParentTypes['mb_views_nft_metadata_unburned_stddev_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_metadata_unburned_stddev_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_metadata_unburned_stddev_pop_fields'] = ResolversParentTypes['mb_views_nft_metadata_unburned_stddev_pop_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_metadata_unburned_stddev_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_metadata_unburned_stddev_samp_fields'] = ResolversParentTypes['mb_views_nft_metadata_unburned_stddev_samp_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_metadata_unburned_sum_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_metadata_unburned_sum_fields'] = ResolversParentTypes['mb_views_nft_metadata_unburned_sum_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_metadata_unburned_var_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_metadata_unburned_var_pop_fields'] = ResolversParentTypes['mb_views_nft_metadata_unburned_var_pop_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_metadata_unburned_var_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_metadata_unburned_var_samp_fields'] = ResolversParentTypes['mb_views_nft_metadata_unburned_var_samp_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_metadata_unburned_variance_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_metadata_unburned_variance_fields'] = ResolversParentTypes['mb_views_nft_metadata_unburned_variance_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_owned_tokensResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_owned_tokens'] = ResolversParentTypes['mb_views_nft_owned_tokens']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  copies?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issued_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  last_transfer_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_transfer_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  listings?: Resolver<Array<ResolversTypes['nft_listings']>, ParentType, ContextType, Partial<mb_views_nft_owned_tokenslistingsArgs>>;
  listings_aggregate?: Resolver<ResolversTypes['nft_listings_aggregate'], ParentType, ContextType, Partial<mb_views_nft_owned_tokenslistings_aggregateArgs>>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mint_memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  nft_contract_icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_is_mintbase?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  nft_contract_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_owner_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_spec?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_blob?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<mb_views_nft_owned_tokensreference_blobArgs>>;
  reference_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  royalties?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<mb_views_nft_owned_tokensroyaltiesArgs>>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  splits?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<mb_views_nft_owned_tokenssplitsArgs>>;
  starts_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_owned_tokens_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_owned_tokens_aggregate'] = ResolversParentTypes['mb_views_nft_owned_tokens_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['mb_views_nft_owned_tokens_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['mb_views_nft_owned_tokens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_owned_tokens_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_owned_tokens_aggregate_fields'] = ResolversParentTypes['mb_views_nft_owned_tokens_aggregate_fields']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['mb_views_nft_owned_tokens_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<mb_views_nft_owned_tokens_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['mb_views_nft_owned_tokens_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['mb_views_nft_owned_tokens_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['mb_views_nft_owned_tokens_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['mb_views_nft_owned_tokens_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['mb_views_nft_owned_tokens_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['mb_views_nft_owned_tokens_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['mb_views_nft_owned_tokens_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['mb_views_nft_owned_tokens_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['mb_views_nft_owned_tokens_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_owned_tokens_avg_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_owned_tokens_avg_fields'] = ResolversParentTypes['mb_views_nft_owned_tokens_avg_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_owned_tokens_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_owned_tokens_max_fields'] = ResolversParentTypes['mb_views_nft_owned_tokens_max_fields']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  copies?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issued_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  last_transfer_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_transfer_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mint_memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  nft_contract_icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_owner_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_spec?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  starts_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_owned_tokens_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_owned_tokens_min_fields'] = ResolversParentTypes['mb_views_nft_owned_tokens_min_fields']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  copies?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issued_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  last_transfer_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_transfer_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mint_memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  nft_contract_icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_owner_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_spec?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  starts_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_owned_tokens_stddev_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_owned_tokens_stddev_fields'] = ResolversParentTypes['mb_views_nft_owned_tokens_stddev_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_owned_tokens_stddev_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_owned_tokens_stddev_pop_fields'] = ResolversParentTypes['mb_views_nft_owned_tokens_stddev_pop_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_owned_tokens_stddev_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_owned_tokens_stddev_samp_fields'] = ResolversParentTypes['mb_views_nft_owned_tokens_stddev_samp_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_owned_tokens_sum_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_owned_tokens_sum_fields'] = ResolversParentTypes['mb_views_nft_owned_tokens_sum_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_owned_tokens_var_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_owned_tokens_var_pop_fields'] = ResolversParentTypes['mb_views_nft_owned_tokens_var_pop_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_owned_tokens_var_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_owned_tokens_var_samp_fields'] = ResolversParentTypes['mb_views_nft_owned_tokens_var_samp_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_owned_tokens_variance_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_owned_tokens_variance_fields'] = ResolversParentTypes['mb_views_nft_owned_tokens_variance_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokensResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens'] = ResolversParentTypes['mb_views_nft_tokens']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  copies?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issued_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  last_transfer_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_transfer_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  listings?: Resolver<Array<ResolversTypes['nft_listings']>, ParentType, ContextType, Partial<mb_views_nft_tokenslistingsArgs>>;
  listings_aggregate?: Resolver<ResolversTypes['nft_listings_aggregate'], ParentType, ContextType, Partial<mb_views_nft_tokenslistings_aggregateArgs>>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mint_memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  nft_contract_icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_is_mintbase?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  nft_contract_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_owner_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_spec?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_blob?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<mb_views_nft_tokensreference_blobArgs>>;
  reference_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  royalties?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<mb_views_nft_tokensroyaltiesArgs>>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  splits?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<mb_views_nft_tokenssplitsArgs>>;
  starts_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_aggregate'] = ResolversParentTypes['mb_views_nft_tokens_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['mb_views_nft_tokens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_aggregate_fields'] = ResolversParentTypes['mb_views_nft_tokens_aggregate_fields']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<mb_views_nft_tokens_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_avg_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_avg_fields'] = ResolversParentTypes['mb_views_nft_tokens_avg_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_max_fields'] = ResolversParentTypes['mb_views_nft_tokens_max_fields']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  copies?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issued_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  last_transfer_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_transfer_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mint_memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  nft_contract_icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_owner_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_spec?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  starts_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_min_fields'] = ResolversParentTypes['mb_views_nft_tokens_min_fields']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  copies?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issued_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  last_transfer_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_transfer_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mint_memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  nft_contract_icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_owner_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_spec?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  starts_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_stddev_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_stddev_fields'] = ResolversParentTypes['mb_views_nft_tokens_stddev_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_stddev_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_stddev_pop_fields'] = ResolversParentTypes['mb_views_nft_tokens_stddev_pop_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_stddev_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_stddev_samp_fields'] = ResolversParentTypes['mb_views_nft_tokens_stddev_samp_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_sum_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_sum_fields'] = ResolversParentTypes['mb_views_nft_tokens_sum_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_var_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_var_pop_fields'] = ResolversParentTypes['mb_views_nft_tokens_var_pop_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_var_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_var_samp_fields'] = ResolversParentTypes['mb_views_nft_tokens_var_samp_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_variance_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_variance_fields'] = ResolversParentTypes['mb_views_nft_tokens_variance_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_listingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_listing'] = ResolversParentTypes['mb_views_nft_tokens_with_listing']> = ResolversObject<{
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  reference_blob?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<mb_views_nft_tokens_with_listingreference_blobArgs>>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_listing_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_listing_aggregate'] = ResolversParentTypes['mb_views_nft_tokens_with_listing_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_listing_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['mb_views_nft_tokens_with_listing']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_listing_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_listing_aggregate_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_listing_aggregate_fields']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_listing_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<mb_views_nft_tokens_with_listing_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_listing_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_listing_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_listing_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_listing_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_listing_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_listing_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_listing_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_listing_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_listing_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_listing_avg_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_listing_avg_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_listing_avg_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_listing_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_listing_max_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_listing_max_fields']> = ResolversObject<{
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_listing_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_listing_min_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_listing_min_fields']> = ResolversObject<{
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_listing_stddev_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_listing_stddev_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_listing_stddev_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_listing_stddev_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_listing_stddev_pop_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_listing_stddev_pop_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_listing_stddev_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_listing_stddev_samp_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_listing_stddev_samp_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_listing_sum_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_listing_sum_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_listing_sum_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_listing_var_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_listing_var_pop_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_listing_var_pop_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_listing_var_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_listing_var_samp_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_listing_var_samp_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_listing_variance_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_listing_variance_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_listing_variance_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_media_typeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_media_type'] = ResolversParentTypes['mb_views_nft_tokens_with_media_type']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  copies?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  forever_media_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  forever_media_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issued_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  last_transfer_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_transfer_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  listings?: Resolver<Array<ResolversTypes['nft_listings']>, ParentType, ContextType, Partial<mb_views_nft_tokens_with_media_typelistingsArgs>>;
  listings_aggregate?: Resolver<ResolversTypes['nft_listings_aggregate'], ParentType, ContextType, Partial<mb_views_nft_tokens_with_media_typelistings_aggregateArgs>>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mint_memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  nft_contract_icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_is_mintbase?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  nft_contract_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_owner_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_spec?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_blob?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<mb_views_nft_tokens_with_media_typereference_blobArgs>>;
  reference_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  royalties?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<mb_views_nft_tokens_with_media_typeroyaltiesArgs>>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  splits?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<mb_views_nft_tokens_with_media_typesplitsArgs>>;
  starts_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_media_type_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_media_type_aggregate'] = ResolversParentTypes['mb_views_nft_tokens_with_media_type_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_media_type_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['mb_views_nft_tokens_with_media_type']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_media_type_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_media_type_aggregate_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_media_type_aggregate_fields']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_media_type_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<mb_views_nft_tokens_with_media_type_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_media_type_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_media_type_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_media_type_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_media_type_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_media_type_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_media_type_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_media_type_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_media_type_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens_with_media_type_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_media_type_avg_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_media_type_avg_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_media_type_avg_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_media_type_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_media_type_max_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_media_type_max_fields']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  copies?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  forever_media_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  forever_media_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issued_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  last_transfer_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_transfer_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mint_memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  nft_contract_icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_owner_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_spec?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  starts_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_media_type_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_media_type_min_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_media_type_min_fields']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  copies?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  forever_media_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  forever_media_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  issued_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  last_transfer_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_transfer_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mint_memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  nft_contract_icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_owner_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_spec?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  starts_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_media_type_stddev_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_media_type_stddev_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_media_type_stddev_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_media_type_stddev_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_media_type_stddev_pop_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_media_type_stddev_pop_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_media_type_stddev_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_media_type_stddev_samp_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_media_type_stddev_samp_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_media_type_sum_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_media_type_sum_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_media_type_sum_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_media_type_var_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_media_type_var_pop_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_media_type_var_pop_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_media_type_var_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_media_type_var_samp_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_media_type_var_samp_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_nft_tokens_with_media_type_variance_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_nft_tokens_with_media_type_variance_fields'] = ResolversParentTypes['mb_views_nft_tokens_with_media_type_variance_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_top_storesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_top_stores'] = ResolversParentTypes['mb_views_top_stores']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_top_stores_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_top_stores_aggregate'] = ResolversParentTypes['mb_views_top_stores_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['mb_views_top_stores_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['mb_views_top_stores']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_top_stores_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_top_stores_aggregate_fields'] = ResolversParentTypes['mb_views_top_stores_aggregate_fields']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['mb_views_top_stores_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<mb_views_top_stores_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['mb_views_top_stores_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['mb_views_top_stores_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['mb_views_top_stores_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['mb_views_top_stores_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['mb_views_top_stores_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['mb_views_top_stores_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['mb_views_top_stores_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['mb_views_top_stores_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['mb_views_top_stores_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_top_stores_avg_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_top_stores_avg_fields'] = ResolversParentTypes['mb_views_top_stores_avg_fields']> = ResolversObject<{
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_top_stores_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_top_stores_max_fields'] = ResolversParentTypes['mb_views_top_stores_max_fields']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_top_stores_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_top_stores_min_fields'] = ResolversParentTypes['mb_views_top_stores_min_fields']> = ResolversObject<{
  date?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  total?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_top_stores_stddev_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_top_stores_stddev_fields'] = ResolversParentTypes['mb_views_top_stores_stddev_fields']> = ResolversObject<{
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_top_stores_stddev_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_top_stores_stddev_pop_fields'] = ResolversParentTypes['mb_views_top_stores_stddev_pop_fields']> = ResolversObject<{
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_top_stores_stddev_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_top_stores_stddev_samp_fields'] = ResolversParentTypes['mb_views_top_stores_stddev_samp_fields']> = ResolversObject<{
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_top_stores_sum_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_top_stores_sum_fields'] = ResolversParentTypes['mb_views_top_stores_sum_fields']> = ResolversObject<{
  total?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_top_stores_var_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_top_stores_var_pop_fields'] = ResolversParentTypes['mb_views_top_stores_var_pop_fields']> = ResolversObject<{
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_top_stores_var_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_top_stores_var_samp_fields'] = ResolversParentTypes['mb_views_top_stores_var_samp_fields']> = ResolversObject<{
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type mb_views_top_stores_variance_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['mb_views_top_stores_variance_fields'] = ResolversParentTypes['mb_views_top_stores_variance_fields']> = ResolversObject<{
  total?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_activitiesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_activities'] = ResolversParentTypes['nft_activities']> = ResolversObject<{
  action_receiver?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  action_sender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract?: Resolver<Maybe<ResolversTypes['nft_contracts']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nft_contracts?: Resolver<Maybe<ResolversTypes['nft_contracts']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  receipt_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['timestamp'], ParentType, ContextType>;
  token_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tx_sender?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_activities_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_activities_aggregate'] = ResolversParentTypes['nft_activities_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['nft_activities_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['nft_activities']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_activities_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_activities_aggregate_fields'] = ResolversParentTypes['nft_activities_aggregate_fields']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['nft_activities_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<nft_activities_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['nft_activities_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['nft_activities_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['nft_activities_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['nft_activities_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['nft_activities_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['nft_activities_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['nft_activities_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['nft_activities_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['nft_activities_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_activities_avg_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_activities_avg_fields'] = ResolversParentTypes['nft_activities_avg_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_activities_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_activities_max_fields'] = ResolversParentTypes['nft_activities_max_fields']> = ResolversObject<{
  action_receiver?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  action_sender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tx_sender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_activities_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_activities_min_fields'] = ResolversParentTypes['nft_activities_min_fields']> = ResolversObject<{
  action_receiver?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  action_sender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tx_sender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_activities_stddev_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_activities_stddev_fields'] = ResolversParentTypes['nft_activities_stddev_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_activities_stddev_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_activities_stddev_pop_fields'] = ResolversParentTypes['nft_activities_stddev_pop_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_activities_stddev_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_activities_stddev_samp_fields'] = ResolversParentTypes['nft_activities_stddev_samp_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_activities_sum_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_activities_sum_fields'] = ResolversParentTypes['nft_activities_sum_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_activities_var_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_activities_var_pop_fields'] = ResolversParentTypes['nft_activities_var_pop_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_activities_var_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_activities_var_samp_fields'] = ResolversParentTypes['nft_activities_var_samp_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_activities_variance_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_activities_variance_fields'] = ResolversParentTypes['nft_activities_variance_fields']> = ResolversObject<{
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_attributesResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_attributes'] = ResolversParentTypes['nft_attributes']> = ResolversObject<{
  attribute_display_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  attribute_value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['Thing']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nft_metadata_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_attributes_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_attributes_aggregate'] = ResolversParentTypes['nft_attributes_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['nft_attributes_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['nft_attributes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_attributes_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_attributes_aggregate_fields'] = ResolversParentTypes['nft_attributes_aggregate_fields']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<nft_attributes_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['nft_attributes_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['nft_attributes_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_attributes_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_attributes_max_fields'] = ResolversParentTypes['nft_attributes_max_fields']> = ResolversObject<{
  attribute_display_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_attributes_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_attributes_min_fields'] = ResolversParentTypes['nft_attributes_min_fields']> = ResolversObject<{
  attribute_display_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  attribute_value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_contractsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_contracts'] = ResolversParentTypes['nft_contracts']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  created_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_mintbase?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  spec?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_contracts_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_contracts_aggregate'] = ResolversParentTypes['nft_contracts_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['nft_contracts_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['nft_contracts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_contracts_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_contracts_aggregate_fields'] = ResolversParentTypes['nft_contracts_aggregate_fields']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<nft_contracts_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['nft_contracts_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['nft_contracts_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_contracts_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_contracts_max_fields'] = ResolversParentTypes['nft_contracts_max_fields']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  created_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  spec?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_contracts_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_contracts_min_fields'] = ResolversParentTypes['nft_contracts_min_fields']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  created_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  spec?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  symbol?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_earningsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_earnings'] = ResolversParentTypes['nft_earnings']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  approval_id?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  is_mintbase_cut?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  is_referral?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  market_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nft_contract?: Resolver<Maybe<ResolversTypes['nft_contracts']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nft_contracts?: Resolver<Maybe<ResolversTypes['nft_contracts']>, ParentType, ContextType>;
  nft_token?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens']>, ParentType, ContextType>;
  offer?: Resolver<Maybe<ResolversTypes['nft_offers']>, ParentType, ContextType>;
  offer_id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  receipt_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  receiver_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['timestamp'], ParentType, ContextType>;
  token_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_earnings_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_earnings_aggregate'] = ResolversParentTypes['nft_earnings_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['nft_earnings_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['nft_earnings']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_earnings_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_earnings_aggregate_fields'] = ResolversParentTypes['nft_earnings_aggregate_fields']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['nft_earnings_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<nft_earnings_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['nft_earnings_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['nft_earnings_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['nft_earnings_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['nft_earnings_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['nft_earnings_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['nft_earnings_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['nft_earnings_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['nft_earnings_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['nft_earnings_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_earnings_avg_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_earnings_avg_fields'] = ResolversParentTypes['nft_earnings_avg_fields']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_earnings_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_earnings_max_fields'] = ResolversParentTypes['nft_earnings_max_fields']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  market_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  receiver_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_earnings_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_earnings_min_fields'] = ResolversParentTypes['nft_earnings_min_fields']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  market_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  receiver_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_earnings_stddev_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_earnings_stddev_fields'] = ResolversParentTypes['nft_earnings_stddev_fields']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_earnings_stddev_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_earnings_stddev_pop_fields'] = ResolversParentTypes['nft_earnings_stddev_pop_fields']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_earnings_stddev_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_earnings_stddev_samp_fields'] = ResolversParentTypes['nft_earnings_stddev_samp_fields']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_earnings_sum_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_earnings_sum_fields'] = ResolversParentTypes['nft_earnings_sum_fields']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_earnings_var_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_earnings_var_pop_fields'] = ResolversParentTypes['nft_earnings_var_pop_fields']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_earnings_var_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_earnings_var_samp_fields'] = ResolversParentTypes['nft_earnings_var_samp_fields']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_earnings_variance_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_earnings_variance_fields'] = ResolversParentTypes['nft_earnings_variance_fields']> = ResolversObject<{
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_listingsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_listings'] = ResolversParentTypes['nft_listings']> = ResolversObject<{
  accepted_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  accepted_offer_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  approval_id?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamp'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  invalidated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  kind?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  listed_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  market_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract?: Resolver<Maybe<ResolversTypes['nft_contracts']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nft_contracts?: Resolver<Maybe<ResolversTypes['nft_contracts']>, ParentType, ContextType>;
  nft_token?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens']>, ParentType, ContextType>;
  offers?: Resolver<Array<ResolversTypes['nft_offers']>, ParentType, ContextType, Partial<nft_listingsoffersArgs>>;
  offers_aggregate?: Resolver<ResolversTypes['nft_offers_aggregate'], ParentType, ContextType, Partial<nft_listingsoffers_aggregateArgs>>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  receipt_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens']>, ParentType, ContextType>;
  token_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  unlisted_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_listings_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_listings_aggregate'] = ResolversParentTypes['nft_listings_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['nft_listings_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['nft_listings']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_listings_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_listings_aggregate_fields'] = ResolversParentTypes['nft_listings_aggregate_fields']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['nft_listings_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<nft_listings_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['nft_listings_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['nft_listings_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['nft_listings_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['nft_listings_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['nft_listings_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['nft_listings_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['nft_listings_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['nft_listings_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['nft_listings_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_listings_avg_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_listings_avg_fields'] = ResolversParentTypes['nft_listings_avg_fields']> = ResolversObject<{
  accepted_offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_listings_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_listings_max_fields'] = ResolversParentTypes['nft_listings_max_fields']> = ResolversObject<{
  accepted_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  accepted_offer_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invalidated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listed_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  market_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unlisted_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_listings_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_listings_min_fields'] = ResolversParentTypes['nft_listings_min_fields']> = ResolversObject<{
  accepted_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  accepted_offer_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  invalidated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  kind?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  listed_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  market_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unlisted_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_listings_stddev_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_listings_stddev_fields'] = ResolversParentTypes['nft_listings_stddev_fields']> = ResolversObject<{
  accepted_offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_listings_stddev_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_listings_stddev_pop_fields'] = ResolversParentTypes['nft_listings_stddev_pop_fields']> = ResolversObject<{
  accepted_offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_listings_stddev_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_listings_stddev_samp_fields'] = ResolversParentTypes['nft_listings_stddev_samp_fields']> = ResolversObject<{
  accepted_offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_listings_sum_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_listings_sum_fields'] = ResolversParentTypes['nft_listings_sum_fields']> = ResolversObject<{
  accepted_offer_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_listings_var_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_listings_var_pop_fields'] = ResolversParentTypes['nft_listings_var_pop_fields']> = ResolversObject<{
  accepted_offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_listings_var_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_listings_var_samp_fields'] = ResolversParentTypes['nft_listings_var_samp_fields']> = ResolversObject<{
  accepted_offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_listings_variance_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_listings_variance_fields'] = ResolversParentTypes['nft_listings_variance_fields']> = ResolversObject<{
  accepted_offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_metadata_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_metadata_aggregate'] = ResolversParentTypes['nft_metadata_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['nft_metadata_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['Thing']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_metadata_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_metadata_aggregate_fields'] = ResolversParentTypes['nft_metadata_aggregate_fields']> = ResolversObject<{
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<nft_metadata_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['nft_metadata_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['nft_metadata_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_metadata_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_metadata_max_fields'] = ResolversParentTypes['nft_metadata_max_fields']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_metadata_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_metadata_min_fields'] = ResolversParentTypes['nft_metadata_min_fields']> = ResolversObject<{
  base_uri?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content_flag?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  extra?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  media_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_offersResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_offers'] = ResolversParentTypes['nft_offers']> = ResolversObject<{
  accepted_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  approval_id?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  invalidated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  listing?: Resolver<Maybe<ResolversTypes['nft_listings']>, ParentType, ContextType>;
  market_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nft_contract?: Resolver<Maybe<ResolversTypes['nft_contracts']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nft_contracts?: Resolver<Maybe<ResolversTypes['nft_contracts']>, ParentType, ContextType>;
  nft_token?: Resolver<Maybe<ResolversTypes['mb_views_nft_tokens']>, ParentType, ContextType>;
  offer_id?: Resolver<ResolversTypes['bigint'], ParentType, ContextType>;
  offer_price?: Resolver<ResolversTypes['numeric'], ParentType, ContextType>;
  offered_at?: Resolver<ResolversTypes['timestamp'], ParentType, ContextType>;
  offered_by?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  outbid_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  receipt_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  referral_amount?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  referrer_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['nft_tokens']>, ParentType, ContextType>;
  token_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  withdrawn_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_offers_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_offers_aggregate'] = ResolversParentTypes['nft_offers_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['nft_offers_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['nft_offers']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_offers_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_offers_aggregate_fields'] = ResolversParentTypes['nft_offers_aggregate_fields']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['nft_offers_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<nft_offers_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['nft_offers_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['nft_offers_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['nft_offers_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['nft_offers_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['nft_offers_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['nft_offers_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['nft_offers_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['nft_offers_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['nft_offers_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_offers_avg_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_offers_avg_fields'] = ResolversParentTypes['nft_offers_avg_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  referral_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_offers_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_offers_max_fields'] = ResolversParentTypes['nft_offers_max_fields']> = ResolversObject<{
  accepted_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  invalidated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  market_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  offered_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  offered_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  outbid_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  referral_amount?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  referrer_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  withdrawn_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_offers_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_offers_min_fields'] = ResolversParentTypes['nft_offers_min_fields']> = ResolversObject<{
  accepted_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  currency?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  invalidated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  market_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  offered_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  offered_by?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  outbid_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  referral_amount?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  referrer_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  withdrawn_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_offers_stddev_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_offers_stddev_fields'] = ResolversParentTypes['nft_offers_stddev_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  referral_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_offers_stddev_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_offers_stddev_pop_fields'] = ResolversParentTypes['nft_offers_stddev_pop_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  referral_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_offers_stddev_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_offers_stddev_samp_fields'] = ResolversParentTypes['nft_offers_stddev_samp_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  referral_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_offers_sum_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_offers_sum_fields'] = ResolversParentTypes['nft_offers_sum_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  referral_amount?: Resolver<Maybe<ResolversTypes['numeric']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_offers_var_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_offers_var_pop_fields'] = ResolversParentTypes['nft_offers_var_pop_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  referral_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_offers_var_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_offers_var_samp_fields'] = ResolversParentTypes['nft_offers_var_samp_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  referral_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_offers_variance_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_offers_variance_fields'] = ResolversParentTypes['nft_offers_variance_fields']> = ResolversObject<{
  approval_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_id?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  offer_price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  referral_amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_tokensResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_tokens'] = ResolversParentTypes['nft_tokens']> = ResolversObject<{
  burned_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  copies?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  issued_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  last_transfer_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_transfer_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mint_memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract?: Resolver<Maybe<ResolversTypes['nft_contracts']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nft_contracts?: Resolver<Maybe<ResolversTypes['nft_contracts']>, ParentType, ContextType>;
  nft_listings?: Resolver<Array<ResolversTypes['nft_listings']>, ParentType, ContextType, Partial<nft_tokensnft_listingsArgs>>;
  nft_listings_aggregate?: Resolver<ResolversTypes['nft_listings_aggregate'], ParentType, ContextType, Partial<nft_tokensnft_listings_aggregateArgs>>;
  owner?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  royalties?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<nft_tokensroyaltiesArgs>>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  splits?: Resolver<Maybe<ResolversTypes['jsonb']>, ParentType, ContextType, Partial<nft_tokenssplitsArgs>>;
  starts_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  token_id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_tokens_aggregateResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_tokens_aggregate'] = ResolversParentTypes['nft_tokens_aggregate']> = ResolversObject<{
  aggregate?: Resolver<Maybe<ResolversTypes['nft_tokens_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['nft_tokens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_tokens_aggregate_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_tokens_aggregate_fields'] = ResolversParentTypes['nft_tokens_aggregate_fields']> = ResolversObject<{
  avg?: Resolver<Maybe<ResolversTypes['nft_tokens_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<nft_tokens_aggregate_fieldscountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['nft_tokens_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['nft_tokens_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['nft_tokens_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['nft_tokens_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['nft_tokens_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['nft_tokens_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['nft_tokens_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['nft_tokens_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['nft_tokens_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_tokens_avg_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_tokens_avg_fields'] = ResolversParentTypes['nft_tokens_avg_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_tokens_max_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_tokens_max_fields'] = ResolversParentTypes['nft_tokens_max_fields']> = ResolversObject<{
  burned_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  copies?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  issued_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  last_transfer_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_transfer_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mint_memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  starts_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_tokens_min_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_tokens_min_fields'] = ResolversParentTypes['nft_tokens_min_fields']> = ResolversObject<{
  burned_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  burned_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  copies?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  issued_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  last_transfer_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_transfer_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  metadata_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mint_memo?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_receipt_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  minted_timestamp?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  minter?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nft_contract_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reference_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  starts_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  token_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamp']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_tokens_stddev_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_tokens_stddev_fields'] = ResolversParentTypes['nft_tokens_stddev_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_tokens_stddev_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_tokens_stddev_pop_fields'] = ResolversParentTypes['nft_tokens_stddev_pop_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_tokens_stddev_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_tokens_stddev_samp_fields'] = ResolversParentTypes['nft_tokens_stddev_samp_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_tokens_sum_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_tokens_sum_fields'] = ResolversParentTypes['nft_tokens_sum_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_tokens_var_pop_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_tokens_var_pop_fields'] = ResolversParentTypes['nft_tokens_var_pop_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_tokens_var_samp_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_tokens_var_samp_fields'] = ResolversParentTypes['nft_tokens_var_samp_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type nft_tokens_variance_fieldsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['nft_tokens_variance_fields'] = ResolversParentTypes['nft_tokens_variance_fields']> = ResolversObject<{
  copies?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  royalties_percent?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface numericScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['numeric'], any> {
  name: 'numeric';
}

export interface timestampScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamp'], any> {
  name: 'timestamp';
}

export type AuthenticationInfoResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['AuthenticationInfo'] = ResolversParentTypes['AuthenticationInfo']> = ResolversObject<{
  sub?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Cursor?: GraphQLScalarType;
  AttributesConnection?: AttributesConnectionResolvers<ContextType>;
  Attribute?: AttributeResolvers<ContextType>;
  Datetime?: GraphQLScalarType;
  RelationshipsConnection?: RelationshipsConnectionResolvers<ContextType>;
  Relationship?: RelationshipResolvers<ContextType>;
  Option?: OptionResolvers<ContextType>;
  CharacteristicsConnection?: CharacteristicsConnectionResolvers<ContextType>;
  Characteristic?: CharacteristicResolvers<ContextType>;
  Thing?: ThingResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  TagsConnection?: TagsConnectionResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  Media?: MediaResolvers<ContextType>;
  TagsEdge?: TagsEdgeResolvers<ContextType>;
  PageInfo?: PageInfoResolvers<ContextType>;
  CharacteristicsEdge?: CharacteristicsEdgeResolvers<ContextType>;
  RelationshipsEdge?: RelationshipsEdgeResolvers<ContextType>;
  AttributesEdge?: AttributesEdgeResolvers<ContextType>;
  MediaConnection?: MediaConnectionResolvers<ContextType>;
  MediaEdge?: MediaEdgeResolvers<ContextType>;
  OptionsConnection?: OptionsConnectionResolvers<ContextType>;
  OptionsEdge?: OptionsEdgeResolvers<ContextType>;
  ThingsConnection?: ThingsConnectionResolvers<ContextType>;
  ThingsEdge?: ThingsEdgeResolvers<ContextType>;
  UsersConnection?: UsersConnectionResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UsersEdge?: UsersEdgeResolvers<ContextType>;
  CreateThingPayload?: CreateThingPayloadResolvers<ContextType>;
  CreateMediaPayload?: CreateMediaPayloadResolvers<ContextType>;
  ProposeAttributePayload?: ProposeAttributePayloadResolvers<ContextType>;
  CreateAttributePayload?: CreateAttributePayloadResolvers<ContextType>;
  ProposeOptionPayload?: ProposeOptionPayloadResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  bigint?: GraphQLScalarType;
  blocks?: blocksResolvers<ContextType>;
  blocks_aggregate?: blocks_aggregateResolvers<ContextType>;
  blocks_aggregate_fields?: blocks_aggregate_fieldsResolvers<ContextType>;
  blocks_avg_fields?: blocks_avg_fieldsResolvers<ContextType>;
  blocks_max_fields?: blocks_max_fieldsResolvers<ContextType>;
  blocks_min_fields?: blocks_min_fieldsResolvers<ContextType>;
  blocks_stddev_fields?: blocks_stddev_fieldsResolvers<ContextType>;
  blocks_stddev_pop_fields?: blocks_stddev_pop_fieldsResolvers<ContextType>;
  blocks_stddev_samp_fields?: blocks_stddev_samp_fieldsResolvers<ContextType>;
  blocks_sum_fields?: blocks_sum_fieldsResolvers<ContextType>;
  blocks_var_pop_fields?: blocks_var_pop_fieldsResolvers<ContextType>;
  blocks_var_samp_fields?: blocks_var_samp_fieldsResolvers<ContextType>;
  blocks_variance_fields?: blocks_variance_fieldsResolvers<ContextType>;
  jsonb?: GraphQLScalarType;
  mb_store_minters?: mb_store_mintersResolvers<ContextType>;
  mb_store_minters_aggregate?: mb_store_minters_aggregateResolvers<ContextType>;
  mb_store_minters_aggregate_fields?: mb_store_minters_aggregate_fieldsResolvers<ContextType>;
  mb_store_minters_max_fields?: mb_store_minters_max_fieldsResolvers<ContextType>;
  mb_store_minters_min_fields?: mb_store_minters_min_fieldsResolvers<ContextType>;
  mb_views_active_listings?: mb_views_active_listingsResolvers<ContextType>;
  mb_views_active_listings_aggregate?: mb_views_active_listings_aggregateResolvers<ContextType>;
  mb_views_active_listings_aggregate_fields?: mb_views_active_listings_aggregate_fieldsResolvers<ContextType>;
  mb_views_active_listings_avg_fields?: mb_views_active_listings_avg_fieldsResolvers<ContextType>;
  mb_views_active_listings_max_fields?: mb_views_active_listings_max_fieldsResolvers<ContextType>;
  mb_views_active_listings_min_fields?: mb_views_active_listings_min_fieldsResolvers<ContextType>;
  mb_views_active_listings_rollup?: mb_views_active_listings_rollupResolvers<ContextType>;
  mb_views_active_listings_rollup_aggregate?: mb_views_active_listings_rollup_aggregateResolvers<ContextType>;
  mb_views_active_listings_rollup_aggregate_fields?: mb_views_active_listings_rollup_aggregate_fieldsResolvers<ContextType>;
  mb_views_active_listings_rollup_avg_fields?: mb_views_active_listings_rollup_avg_fieldsResolvers<ContextType>;
  mb_views_active_listings_rollup_max_fields?: mb_views_active_listings_rollup_max_fieldsResolvers<ContextType>;
  mb_views_active_listings_rollup_min_fields?: mb_views_active_listings_rollup_min_fieldsResolvers<ContextType>;
  mb_views_active_listings_rollup_stddev_fields?: mb_views_active_listings_rollup_stddev_fieldsResolvers<ContextType>;
  mb_views_active_listings_rollup_stddev_pop_fields?: mb_views_active_listings_rollup_stddev_pop_fieldsResolvers<ContextType>;
  mb_views_active_listings_rollup_stddev_samp_fields?: mb_views_active_listings_rollup_stddev_samp_fieldsResolvers<ContextType>;
  mb_views_active_listings_rollup_sum_fields?: mb_views_active_listings_rollup_sum_fieldsResolvers<ContextType>;
  mb_views_active_listings_rollup_var_pop_fields?: mb_views_active_listings_rollup_var_pop_fieldsResolvers<ContextType>;
  mb_views_active_listings_rollup_var_samp_fields?: mb_views_active_listings_rollup_var_samp_fieldsResolvers<ContextType>;
  mb_views_active_listings_rollup_variance_fields?: mb_views_active_listings_rollup_variance_fieldsResolvers<ContextType>;
  mb_views_active_listings_stddev_fields?: mb_views_active_listings_stddev_fieldsResolvers<ContextType>;
  mb_views_active_listings_stddev_pop_fields?: mb_views_active_listings_stddev_pop_fieldsResolvers<ContextType>;
  mb_views_active_listings_stddev_samp_fields?: mb_views_active_listings_stddev_samp_fieldsResolvers<ContextType>;
  mb_views_active_listings_sum_fields?: mb_views_active_listings_sum_fieldsResolvers<ContextType>;
  mb_views_active_listings_var_pop_fields?: mb_views_active_listings_var_pop_fieldsResolvers<ContextType>;
  mb_views_active_listings_var_samp_fields?: mb_views_active_listings_var_samp_fieldsResolvers<ContextType>;
  mb_views_active_listings_variance_fields?: mb_views_active_listings_variance_fieldsResolvers<ContextType>;
  mb_views_auctions_with_offer?: mb_views_auctions_with_offerResolvers<ContextType>;
  mb_views_auctions_with_offer_aggregate?: mb_views_auctions_with_offer_aggregateResolvers<ContextType>;
  mb_views_auctions_with_offer_aggregate_fields?: mb_views_auctions_with_offer_aggregate_fieldsResolvers<ContextType>;
  mb_views_auctions_with_offer_avg_fields?: mb_views_auctions_with_offer_avg_fieldsResolvers<ContextType>;
  mb_views_auctions_with_offer_max_fields?: mb_views_auctions_with_offer_max_fieldsResolvers<ContextType>;
  mb_views_auctions_with_offer_min_fields?: mb_views_auctions_with_offer_min_fieldsResolvers<ContextType>;
  mb_views_auctions_with_offer_stddev_fields?: mb_views_auctions_with_offer_stddev_fieldsResolvers<ContextType>;
  mb_views_auctions_with_offer_stddev_pop_fields?: mb_views_auctions_with_offer_stddev_pop_fieldsResolvers<ContextType>;
  mb_views_auctions_with_offer_stddev_samp_fields?: mb_views_auctions_with_offer_stddev_samp_fieldsResolvers<ContextType>;
  mb_views_auctions_with_offer_sum_fields?: mb_views_auctions_with_offer_sum_fieldsResolvers<ContextType>;
  mb_views_auctions_with_offer_var_pop_fields?: mb_views_auctions_with_offer_var_pop_fieldsResolvers<ContextType>;
  mb_views_auctions_with_offer_var_samp_fields?: mb_views_auctions_with_offer_var_samp_fieldsResolvers<ContextType>;
  mb_views_auctions_with_offer_variance_fields?: mb_views_auctions_with_offer_variance_fieldsResolvers<ContextType>;
  mb_views_nft_activities?: mb_views_nft_activitiesResolvers<ContextType>;
  mb_views_nft_activities_aggregate?: mb_views_nft_activities_aggregateResolvers<ContextType>;
  mb_views_nft_activities_aggregate_fields?: mb_views_nft_activities_aggregate_fieldsResolvers<ContextType>;
  mb_views_nft_activities_avg_fields?: mb_views_nft_activities_avg_fieldsResolvers<ContextType>;
  mb_views_nft_activities_max_fields?: mb_views_nft_activities_max_fieldsResolvers<ContextType>;
  mb_views_nft_activities_min_fields?: mb_views_nft_activities_min_fieldsResolvers<ContextType>;
  mb_views_nft_activities_stddev_fields?: mb_views_nft_activities_stddev_fieldsResolvers<ContextType>;
  mb_views_nft_activities_stddev_pop_fields?: mb_views_nft_activities_stddev_pop_fieldsResolvers<ContextType>;
  mb_views_nft_activities_stddev_samp_fields?: mb_views_nft_activities_stddev_samp_fieldsResolvers<ContextType>;
  mb_views_nft_activities_sum_fields?: mb_views_nft_activities_sum_fieldsResolvers<ContextType>;
  mb_views_nft_activities_var_pop_fields?: mb_views_nft_activities_var_pop_fieldsResolvers<ContextType>;
  mb_views_nft_activities_var_samp_fields?: mb_views_nft_activities_var_samp_fieldsResolvers<ContextType>;
  mb_views_nft_activities_variance_fields?: mb_views_nft_activities_variance_fieldsResolvers<ContextType>;
  mb_views_nft_metadata?: mb_views_nft_metadataResolvers<ContextType>;
  mb_views_nft_metadata_aggregate?: mb_views_nft_metadata_aggregateResolvers<ContextType>;
  mb_views_nft_metadata_aggregate_fields?: mb_views_nft_metadata_aggregate_fieldsResolvers<ContextType>;
  mb_views_nft_metadata_max_fields?: mb_views_nft_metadata_max_fieldsResolvers<ContextType>;
  mb_views_nft_metadata_min_fields?: mb_views_nft_metadata_min_fieldsResolvers<ContextType>;
  mb_views_nft_metadata_unburned?: mb_views_nft_metadata_unburnedResolvers<ContextType>;
  mb_views_nft_metadata_unburned_aggregate?: mb_views_nft_metadata_unburned_aggregateResolvers<ContextType>;
  mb_views_nft_metadata_unburned_aggregate_fields?: mb_views_nft_metadata_unburned_aggregate_fieldsResolvers<ContextType>;
  mb_views_nft_metadata_unburned_avg_fields?: mb_views_nft_metadata_unburned_avg_fieldsResolvers<ContextType>;
  mb_views_nft_metadata_unburned_max_fields?: mb_views_nft_metadata_unburned_max_fieldsResolvers<ContextType>;
  mb_views_nft_metadata_unburned_min_fields?: mb_views_nft_metadata_unburned_min_fieldsResolvers<ContextType>;
  mb_views_nft_metadata_unburned_stddev_fields?: mb_views_nft_metadata_unburned_stddev_fieldsResolvers<ContextType>;
  mb_views_nft_metadata_unburned_stddev_pop_fields?: mb_views_nft_metadata_unburned_stddev_pop_fieldsResolvers<ContextType>;
  mb_views_nft_metadata_unburned_stddev_samp_fields?: mb_views_nft_metadata_unburned_stddev_samp_fieldsResolvers<ContextType>;
  mb_views_nft_metadata_unburned_sum_fields?: mb_views_nft_metadata_unburned_sum_fieldsResolvers<ContextType>;
  mb_views_nft_metadata_unburned_var_pop_fields?: mb_views_nft_metadata_unburned_var_pop_fieldsResolvers<ContextType>;
  mb_views_nft_metadata_unburned_var_samp_fields?: mb_views_nft_metadata_unburned_var_samp_fieldsResolvers<ContextType>;
  mb_views_nft_metadata_unburned_variance_fields?: mb_views_nft_metadata_unburned_variance_fieldsResolvers<ContextType>;
  mb_views_nft_owned_tokens?: mb_views_nft_owned_tokensResolvers<ContextType>;
  mb_views_nft_owned_tokens_aggregate?: mb_views_nft_owned_tokens_aggregateResolvers<ContextType>;
  mb_views_nft_owned_tokens_aggregate_fields?: mb_views_nft_owned_tokens_aggregate_fieldsResolvers<ContextType>;
  mb_views_nft_owned_tokens_avg_fields?: mb_views_nft_owned_tokens_avg_fieldsResolvers<ContextType>;
  mb_views_nft_owned_tokens_max_fields?: mb_views_nft_owned_tokens_max_fieldsResolvers<ContextType>;
  mb_views_nft_owned_tokens_min_fields?: mb_views_nft_owned_tokens_min_fieldsResolvers<ContextType>;
  mb_views_nft_owned_tokens_stddev_fields?: mb_views_nft_owned_tokens_stddev_fieldsResolvers<ContextType>;
  mb_views_nft_owned_tokens_stddev_pop_fields?: mb_views_nft_owned_tokens_stddev_pop_fieldsResolvers<ContextType>;
  mb_views_nft_owned_tokens_stddev_samp_fields?: mb_views_nft_owned_tokens_stddev_samp_fieldsResolvers<ContextType>;
  mb_views_nft_owned_tokens_sum_fields?: mb_views_nft_owned_tokens_sum_fieldsResolvers<ContextType>;
  mb_views_nft_owned_tokens_var_pop_fields?: mb_views_nft_owned_tokens_var_pop_fieldsResolvers<ContextType>;
  mb_views_nft_owned_tokens_var_samp_fields?: mb_views_nft_owned_tokens_var_samp_fieldsResolvers<ContextType>;
  mb_views_nft_owned_tokens_variance_fields?: mb_views_nft_owned_tokens_variance_fieldsResolvers<ContextType>;
  mb_views_nft_tokens?: mb_views_nft_tokensResolvers<ContextType>;
  mb_views_nft_tokens_aggregate?: mb_views_nft_tokens_aggregateResolvers<ContextType>;
  mb_views_nft_tokens_aggregate_fields?: mb_views_nft_tokens_aggregate_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_avg_fields?: mb_views_nft_tokens_avg_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_max_fields?: mb_views_nft_tokens_max_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_min_fields?: mb_views_nft_tokens_min_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_stddev_fields?: mb_views_nft_tokens_stddev_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_stddev_pop_fields?: mb_views_nft_tokens_stddev_pop_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_stddev_samp_fields?: mb_views_nft_tokens_stddev_samp_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_sum_fields?: mb_views_nft_tokens_sum_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_var_pop_fields?: mb_views_nft_tokens_var_pop_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_var_samp_fields?: mb_views_nft_tokens_var_samp_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_variance_fields?: mb_views_nft_tokens_variance_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_listing?: mb_views_nft_tokens_with_listingResolvers<ContextType>;
  mb_views_nft_tokens_with_listing_aggregate?: mb_views_nft_tokens_with_listing_aggregateResolvers<ContextType>;
  mb_views_nft_tokens_with_listing_aggregate_fields?: mb_views_nft_tokens_with_listing_aggregate_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_listing_avg_fields?: mb_views_nft_tokens_with_listing_avg_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_listing_max_fields?: mb_views_nft_tokens_with_listing_max_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_listing_min_fields?: mb_views_nft_tokens_with_listing_min_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_listing_stddev_fields?: mb_views_nft_tokens_with_listing_stddev_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_listing_stddev_pop_fields?: mb_views_nft_tokens_with_listing_stddev_pop_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_listing_stddev_samp_fields?: mb_views_nft_tokens_with_listing_stddev_samp_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_listing_sum_fields?: mb_views_nft_tokens_with_listing_sum_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_listing_var_pop_fields?: mb_views_nft_tokens_with_listing_var_pop_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_listing_var_samp_fields?: mb_views_nft_tokens_with_listing_var_samp_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_listing_variance_fields?: mb_views_nft_tokens_with_listing_variance_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_media_type?: mb_views_nft_tokens_with_media_typeResolvers<ContextType>;
  mb_views_nft_tokens_with_media_type_aggregate?: mb_views_nft_tokens_with_media_type_aggregateResolvers<ContextType>;
  mb_views_nft_tokens_with_media_type_aggregate_fields?: mb_views_nft_tokens_with_media_type_aggregate_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_media_type_avg_fields?: mb_views_nft_tokens_with_media_type_avg_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_media_type_max_fields?: mb_views_nft_tokens_with_media_type_max_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_media_type_min_fields?: mb_views_nft_tokens_with_media_type_min_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_media_type_stddev_fields?: mb_views_nft_tokens_with_media_type_stddev_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_media_type_stddev_pop_fields?: mb_views_nft_tokens_with_media_type_stddev_pop_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_media_type_stddev_samp_fields?: mb_views_nft_tokens_with_media_type_stddev_samp_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_media_type_sum_fields?: mb_views_nft_tokens_with_media_type_sum_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_media_type_var_pop_fields?: mb_views_nft_tokens_with_media_type_var_pop_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_media_type_var_samp_fields?: mb_views_nft_tokens_with_media_type_var_samp_fieldsResolvers<ContextType>;
  mb_views_nft_tokens_with_media_type_variance_fields?: mb_views_nft_tokens_with_media_type_variance_fieldsResolvers<ContextType>;
  mb_views_top_stores?: mb_views_top_storesResolvers<ContextType>;
  mb_views_top_stores_aggregate?: mb_views_top_stores_aggregateResolvers<ContextType>;
  mb_views_top_stores_aggregate_fields?: mb_views_top_stores_aggregate_fieldsResolvers<ContextType>;
  mb_views_top_stores_avg_fields?: mb_views_top_stores_avg_fieldsResolvers<ContextType>;
  mb_views_top_stores_max_fields?: mb_views_top_stores_max_fieldsResolvers<ContextType>;
  mb_views_top_stores_min_fields?: mb_views_top_stores_min_fieldsResolvers<ContextType>;
  mb_views_top_stores_stddev_fields?: mb_views_top_stores_stddev_fieldsResolvers<ContextType>;
  mb_views_top_stores_stddev_pop_fields?: mb_views_top_stores_stddev_pop_fieldsResolvers<ContextType>;
  mb_views_top_stores_stddev_samp_fields?: mb_views_top_stores_stddev_samp_fieldsResolvers<ContextType>;
  mb_views_top_stores_sum_fields?: mb_views_top_stores_sum_fieldsResolvers<ContextType>;
  mb_views_top_stores_var_pop_fields?: mb_views_top_stores_var_pop_fieldsResolvers<ContextType>;
  mb_views_top_stores_var_samp_fields?: mb_views_top_stores_var_samp_fieldsResolvers<ContextType>;
  mb_views_top_stores_variance_fields?: mb_views_top_stores_variance_fieldsResolvers<ContextType>;
  nft_activities?: nft_activitiesResolvers<ContextType>;
  nft_activities_aggregate?: nft_activities_aggregateResolvers<ContextType>;
  nft_activities_aggregate_fields?: nft_activities_aggregate_fieldsResolvers<ContextType>;
  nft_activities_avg_fields?: nft_activities_avg_fieldsResolvers<ContextType>;
  nft_activities_max_fields?: nft_activities_max_fieldsResolvers<ContextType>;
  nft_activities_min_fields?: nft_activities_min_fieldsResolvers<ContextType>;
  nft_activities_stddev_fields?: nft_activities_stddev_fieldsResolvers<ContextType>;
  nft_activities_stddev_pop_fields?: nft_activities_stddev_pop_fieldsResolvers<ContextType>;
  nft_activities_stddev_samp_fields?: nft_activities_stddev_samp_fieldsResolvers<ContextType>;
  nft_activities_sum_fields?: nft_activities_sum_fieldsResolvers<ContextType>;
  nft_activities_var_pop_fields?: nft_activities_var_pop_fieldsResolvers<ContextType>;
  nft_activities_var_samp_fields?: nft_activities_var_samp_fieldsResolvers<ContextType>;
  nft_activities_variance_fields?: nft_activities_variance_fieldsResolvers<ContextType>;
  nft_attributes?: nft_attributesResolvers<ContextType>;
  nft_attributes_aggregate?: nft_attributes_aggregateResolvers<ContextType>;
  nft_attributes_aggregate_fields?: nft_attributes_aggregate_fieldsResolvers<ContextType>;
  nft_attributes_max_fields?: nft_attributes_max_fieldsResolvers<ContextType>;
  nft_attributes_min_fields?: nft_attributes_min_fieldsResolvers<ContextType>;
  nft_contracts?: nft_contractsResolvers<ContextType>;
  nft_contracts_aggregate?: nft_contracts_aggregateResolvers<ContextType>;
  nft_contracts_aggregate_fields?: nft_contracts_aggregate_fieldsResolvers<ContextType>;
  nft_contracts_max_fields?: nft_contracts_max_fieldsResolvers<ContextType>;
  nft_contracts_min_fields?: nft_contracts_min_fieldsResolvers<ContextType>;
  nft_earnings?: nft_earningsResolvers<ContextType>;
  nft_earnings_aggregate?: nft_earnings_aggregateResolvers<ContextType>;
  nft_earnings_aggregate_fields?: nft_earnings_aggregate_fieldsResolvers<ContextType>;
  nft_earnings_avg_fields?: nft_earnings_avg_fieldsResolvers<ContextType>;
  nft_earnings_max_fields?: nft_earnings_max_fieldsResolvers<ContextType>;
  nft_earnings_min_fields?: nft_earnings_min_fieldsResolvers<ContextType>;
  nft_earnings_stddev_fields?: nft_earnings_stddev_fieldsResolvers<ContextType>;
  nft_earnings_stddev_pop_fields?: nft_earnings_stddev_pop_fieldsResolvers<ContextType>;
  nft_earnings_stddev_samp_fields?: nft_earnings_stddev_samp_fieldsResolvers<ContextType>;
  nft_earnings_sum_fields?: nft_earnings_sum_fieldsResolvers<ContextType>;
  nft_earnings_var_pop_fields?: nft_earnings_var_pop_fieldsResolvers<ContextType>;
  nft_earnings_var_samp_fields?: nft_earnings_var_samp_fieldsResolvers<ContextType>;
  nft_earnings_variance_fields?: nft_earnings_variance_fieldsResolvers<ContextType>;
  nft_listings?: nft_listingsResolvers<ContextType>;
  nft_listings_aggregate?: nft_listings_aggregateResolvers<ContextType>;
  nft_listings_aggregate_fields?: nft_listings_aggregate_fieldsResolvers<ContextType>;
  nft_listings_avg_fields?: nft_listings_avg_fieldsResolvers<ContextType>;
  nft_listings_max_fields?: nft_listings_max_fieldsResolvers<ContextType>;
  nft_listings_min_fields?: nft_listings_min_fieldsResolvers<ContextType>;
  nft_listings_stddev_fields?: nft_listings_stddev_fieldsResolvers<ContextType>;
  nft_listings_stddev_pop_fields?: nft_listings_stddev_pop_fieldsResolvers<ContextType>;
  nft_listings_stddev_samp_fields?: nft_listings_stddev_samp_fieldsResolvers<ContextType>;
  nft_listings_sum_fields?: nft_listings_sum_fieldsResolvers<ContextType>;
  nft_listings_var_pop_fields?: nft_listings_var_pop_fieldsResolvers<ContextType>;
  nft_listings_var_samp_fields?: nft_listings_var_samp_fieldsResolvers<ContextType>;
  nft_listings_variance_fields?: nft_listings_variance_fieldsResolvers<ContextType>;
  nft_metadata_aggregate?: nft_metadata_aggregateResolvers<ContextType>;
  nft_metadata_aggregate_fields?: nft_metadata_aggregate_fieldsResolvers<ContextType>;
  nft_metadata_max_fields?: nft_metadata_max_fieldsResolvers<ContextType>;
  nft_metadata_min_fields?: nft_metadata_min_fieldsResolvers<ContextType>;
  nft_offers?: nft_offersResolvers<ContextType>;
  nft_offers_aggregate?: nft_offers_aggregateResolvers<ContextType>;
  nft_offers_aggregate_fields?: nft_offers_aggregate_fieldsResolvers<ContextType>;
  nft_offers_avg_fields?: nft_offers_avg_fieldsResolvers<ContextType>;
  nft_offers_max_fields?: nft_offers_max_fieldsResolvers<ContextType>;
  nft_offers_min_fields?: nft_offers_min_fieldsResolvers<ContextType>;
  nft_offers_stddev_fields?: nft_offers_stddev_fieldsResolvers<ContextType>;
  nft_offers_stddev_pop_fields?: nft_offers_stddev_pop_fieldsResolvers<ContextType>;
  nft_offers_stddev_samp_fields?: nft_offers_stddev_samp_fieldsResolvers<ContextType>;
  nft_offers_sum_fields?: nft_offers_sum_fieldsResolvers<ContextType>;
  nft_offers_var_pop_fields?: nft_offers_var_pop_fieldsResolvers<ContextType>;
  nft_offers_var_samp_fields?: nft_offers_var_samp_fieldsResolvers<ContextType>;
  nft_offers_variance_fields?: nft_offers_variance_fieldsResolvers<ContextType>;
  nft_tokens?: nft_tokensResolvers<ContextType>;
  nft_tokens_aggregate?: nft_tokens_aggregateResolvers<ContextType>;
  nft_tokens_aggregate_fields?: nft_tokens_aggregate_fieldsResolvers<ContextType>;
  nft_tokens_avg_fields?: nft_tokens_avg_fieldsResolvers<ContextType>;
  nft_tokens_max_fields?: nft_tokens_max_fieldsResolvers<ContextType>;
  nft_tokens_min_fields?: nft_tokens_min_fieldsResolvers<ContextType>;
  nft_tokens_stddev_fields?: nft_tokens_stddev_fieldsResolvers<ContextType>;
  nft_tokens_stddev_pop_fields?: nft_tokens_stddev_pop_fieldsResolvers<ContextType>;
  nft_tokens_stddev_samp_fields?: nft_tokens_stddev_samp_fieldsResolvers<ContextType>;
  nft_tokens_sum_fields?: nft_tokens_sum_fieldsResolvers<ContextType>;
  nft_tokens_var_pop_fields?: nft_tokens_var_pop_fieldsResolvers<ContextType>;
  nft_tokens_var_samp_fields?: nft_tokens_var_samp_fieldsResolvers<ContextType>;
  nft_tokens_variance_fields?: nft_tokens_variance_fieldsResolvers<ContextType>;
  numeric?: GraphQLScalarType;
  timestamp?: GraphQLScalarType;
  AuthenticationInfo?: AuthenticationInfoResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = MeshContext> = ResolversObject<{
  cached?: cachedDirectiveResolver<any, any, ContextType>;
}>;

export type MeshContext = EverythingTypes.Context & MintbaseTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    default:
      return Promise.reject(new Error(`Cannot find module '${relativeModuleId}'.`));
  }
};

const rootStore = new MeshStore('.mesh', new FsStoreStorageAdapter({
  cwd: baseDir,
  importFn,
  fileType: "ts",
}), {
  readonly: true,
  validate: false
});

export function getMeshOptions() {
  console.warn('WARNING: These artifacts are built for development mode. Please run "mesh build" to build production artifacts');
  return findAndParseConfig({
    dir: baseDir,
    artifactsDir: ".mesh",
    configName: "mesh",
    additionalPackagePrefixes: [],
    initialLoggerPrefix: "🕸️  Mesh",
  });
}

export function createBuiltMeshHTTPHandler(): MeshHTTPHandler<MeshContext> {
  return createMeshHTTPHandler<MeshContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: undefined,
  })
}

let meshInstance$: Promise<MeshInstance> | undefined;

export function getBuiltMesh(): Promise<MeshInstance> {
  if (meshInstance$ == null) {
    meshInstance$ = getMeshOptions().then(meshOptions => getMesh(meshOptions)).then(mesh => {
      const id = mesh.pubsub.subscribe('destroy', () => {
        meshInstance$ = undefined;
        mesh.pubsub.unsubscribe(id);
      });
      return mesh;
    });
  }
  return meshInstance$;
}

export const execute: ExecuteMeshFn = (...args) => getBuiltMesh().then(({ execute }) => execute(...args));

export const subscribe: SubscribeMeshFn = (...args) => getBuiltMesh().then(({ subscribe }) => subscribe(...args));