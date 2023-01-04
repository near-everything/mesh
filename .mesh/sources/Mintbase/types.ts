// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace MintbaseTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _text: any;
  bigint: any;
  jsonb: any;
  numeric: any;
  timestamp: any;
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

/** Boolean expression to compare columns of type "_text". All fields are combined with logical 'AND'. */
export type _text_comparison_exp = {
  _eq?: InputMaybe<Scalars['_text']>;
  _gt?: InputMaybe<Scalars['_text']>;
  _gte?: InputMaybe<Scalars['_text']>;
  _in?: InputMaybe<Array<Scalars['_text']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['_text']>;
  _lte?: InputMaybe<Scalars['_text']>;
  _neq?: InputMaybe<Scalars['_text']>;
  _nin?: InputMaybe<Array<Scalars['_text']>>;
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
  copies?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
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
  copies?: Maybe<Scalars['Float']>;
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
  copies?: InputMaybe<bigint_comparison_exp>;
  description?: InputMaybe<String_comparison_exp>;
  extra?: InputMaybe<String_comparison_exp>;
  kind?: InputMaybe<String_comparison_exp>;
  media?: InputMaybe<String_comparison_exp>;
  media_hash?: InputMaybe<String_comparison_exp>;
  metadata_id?: InputMaybe<String_comparison_exp>;
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
  copies?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
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
  copies?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
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
  copies?: InputMaybe<order_by>;
  description?: InputMaybe<order_by>;
  extra?: InputMaybe<order_by>;
  kind?: InputMaybe<order_by>;
  media?: InputMaybe<order_by>;
  media_hash?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
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

/** columns and relationships of "mb_views.nft_activities_rollup" */
export type mb_views_nft_activities_rollup = {
  action_receiver?: Maybe<Scalars['String']>;
  action_sender?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  nft_contract?: Maybe<nft_contracts>;
  nft_contract_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  receipt_id?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  reference_blob?: Maybe<Scalars['jsonb']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  token_ids?: Maybe<Scalars['_text']>;
  tx_sender?: Maybe<Scalars['String']>;
};


/** columns and relationships of "mb_views.nft_activities_rollup" */
export type mb_views_nft_activities_rollupreference_blobArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "mb_views.nft_activities_rollup" */
export type mb_views_nft_activities_rollup_aggregate = {
  aggregate?: Maybe<mb_views_nft_activities_rollup_aggregate_fields>;
  nodes: Array<mb_views_nft_activities_rollup>;
};

/** aggregate fields of "mb_views.nft_activities_rollup" */
export type mb_views_nft_activities_rollup_aggregate_fields = {
  avg?: Maybe<mb_views_nft_activities_rollup_avg_fields>;
  count: Scalars['Int'];
  max?: Maybe<mb_views_nft_activities_rollup_max_fields>;
  min?: Maybe<mb_views_nft_activities_rollup_min_fields>;
  stddev?: Maybe<mb_views_nft_activities_rollup_stddev_fields>;
  stddev_pop?: Maybe<mb_views_nft_activities_rollup_stddev_pop_fields>;
  stddev_samp?: Maybe<mb_views_nft_activities_rollup_stddev_samp_fields>;
  sum?: Maybe<mb_views_nft_activities_rollup_sum_fields>;
  var_pop?: Maybe<mb_views_nft_activities_rollup_var_pop_fields>;
  var_samp?: Maybe<mb_views_nft_activities_rollup_var_samp_fields>;
  variance?: Maybe<mb_views_nft_activities_rollup_variance_fields>;
};


/** aggregate fields of "mb_views.nft_activities_rollup" */
export type mb_views_nft_activities_rollup_aggregate_fieldscountArgs = {
  columns?: InputMaybe<Array<mb_views_nft_activities_rollup_select_column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type mb_views_nft_activities_rollup_avg_fields = {
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "mb_views.nft_activities_rollup". All fields are combined with a logical 'AND'. */
export type mb_views_nft_activities_rollup_bool_exp = {
  _and?: InputMaybe<Array<mb_views_nft_activities_rollup_bool_exp>>;
  _not?: InputMaybe<mb_views_nft_activities_rollup_bool_exp>;
  _or?: InputMaybe<Array<mb_views_nft_activities_rollup_bool_exp>>;
  action_receiver?: InputMaybe<String_comparison_exp>;
  action_sender?: InputMaybe<String_comparison_exp>;
  content_flag?: InputMaybe<String_comparison_exp>;
  count?: InputMaybe<bigint_comparison_exp>;
  description?: InputMaybe<String_comparison_exp>;
  extra?: InputMaybe<String_comparison_exp>;
  kind?: InputMaybe<String_comparison_exp>;
  media?: InputMaybe<String_comparison_exp>;
  media_hash?: InputMaybe<String_comparison_exp>;
  metadata_id?: InputMaybe<String_comparison_exp>;
  nft_contract?: InputMaybe<nft_contracts_bool_exp>;
  nft_contract_id?: InputMaybe<String_comparison_exp>;
  price?: InputMaybe<numeric_comparison_exp>;
  receipt_id?: InputMaybe<String_comparison_exp>;
  reference?: InputMaybe<String_comparison_exp>;
  reference_blob?: InputMaybe<jsonb_comparison_exp>;
  timestamp?: InputMaybe<timestamp_comparison_exp>;
  title?: InputMaybe<String_comparison_exp>;
  token_ids?: InputMaybe<_text_comparison_exp>;
  tx_sender?: InputMaybe<String_comparison_exp>;
};

/** aggregate max on columns */
export type mb_views_nft_activities_rollup_max_fields = {
  action_receiver?: Maybe<Scalars['String']>;
  action_sender?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  receipt_id?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  tx_sender?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type mb_views_nft_activities_rollup_min_fields = {
  action_receiver?: Maybe<Scalars['String']>;
  action_sender?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  count?: Maybe<Scalars['bigint']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  kind?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['String']>;
  media_hash?: Maybe<Scalars['String']>;
  metadata_id?: Maybe<Scalars['String']>;
  nft_contract_id?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  receipt_id?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  title?: Maybe<Scalars['String']>;
  tx_sender?: Maybe<Scalars['String']>;
};

/** Ordering options when selecting data from "mb_views.nft_activities_rollup". */
export type mb_views_nft_activities_rollup_order_by = {
  action_receiver?: InputMaybe<order_by>;
  action_sender?: InputMaybe<order_by>;
  content_flag?: InputMaybe<order_by>;
  count?: InputMaybe<order_by>;
  description?: InputMaybe<order_by>;
  extra?: InputMaybe<order_by>;
  kind?: InputMaybe<order_by>;
  media?: InputMaybe<order_by>;
  media_hash?: InputMaybe<order_by>;
  metadata_id?: InputMaybe<order_by>;
  nft_contract?: InputMaybe<nft_contracts_order_by>;
  nft_contract_id?: InputMaybe<order_by>;
  price?: InputMaybe<order_by>;
  receipt_id?: InputMaybe<order_by>;
  reference?: InputMaybe<order_by>;
  reference_blob?: InputMaybe<order_by>;
  timestamp?: InputMaybe<order_by>;
  title?: InputMaybe<order_by>;
  token_ids?: InputMaybe<order_by>;
  tx_sender?: InputMaybe<order_by>;
};

/** select columns of table "mb_views.nft_activities_rollup" */
export type mb_views_nft_activities_rollup_select_column =
  /** column name */
  | 'action_receiver'
  /** column name */
  | 'action_sender'
  /** column name */
  | 'content_flag'
  /** column name */
  | 'count'
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
  | 'metadata_id'
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
  | 'timestamp'
  /** column name */
  | 'title'
  /** column name */
  | 'token_ids'
  /** column name */
  | 'tx_sender';

/** aggregate stddev on columns */
export type mb_views_nft_activities_rollup_stddev_fields = {
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type mb_views_nft_activities_rollup_stddev_pop_fields = {
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type mb_views_nft_activities_rollup_stddev_samp_fields = {
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "mb_views_nft_activities_rollup" */
export type mb_views_nft_activities_rollup_stream_cursor_input = {
  /** Stream column input with initial value */
  initial_value: mb_views_nft_activities_rollup_stream_cursor_value_input;
  /** cursor ordering */
  ordering?: InputMaybe<cursor_ordering>;
};

/** Initial value of the column from where the streaming should start */
export type mb_views_nft_activities_rollup_stream_cursor_value_input = {
  action_receiver?: InputMaybe<Scalars['String']>;
  action_sender?: InputMaybe<Scalars['String']>;
  content_flag?: InputMaybe<Scalars['String']>;
  count?: InputMaybe<Scalars['bigint']>;
  description?: InputMaybe<Scalars['String']>;
  extra?: InputMaybe<Scalars['String']>;
  kind?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  media_hash?: InputMaybe<Scalars['String']>;
  metadata_id?: InputMaybe<Scalars['String']>;
  nft_contract_id?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  receipt_id?: InputMaybe<Scalars['String']>;
  reference?: InputMaybe<Scalars['String']>;
  reference_blob?: InputMaybe<Scalars['jsonb']>;
  timestamp?: InputMaybe<Scalars['timestamp']>;
  title?: InputMaybe<Scalars['String']>;
  token_ids?: InputMaybe<Scalars['_text']>;
  tx_sender?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type mb_views_nft_activities_rollup_sum_fields = {
  count?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type mb_views_nft_activities_rollup_var_pop_fields = {
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type mb_views_nft_activities_rollup_var_samp_fields = {
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type mb_views_nft_activities_rollup_variance_fields = {
  count?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
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
  | 'copies'
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
  | 'metadata_id'
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
  copies?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type mb_views_nft_activities_stddev_pop_fields = {
  copies?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type mb_views_nft_activities_stddev_samp_fields = {
  copies?: Maybe<Scalars['Float']>;
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
  copies?: InputMaybe<Scalars['bigint']>;
  description?: InputMaybe<Scalars['String']>;
  extra?: InputMaybe<Scalars['String']>;
  kind?: InputMaybe<Scalars['String']>;
  media?: InputMaybe<Scalars['String']>;
  media_hash?: InputMaybe<Scalars['String']>;
  metadata_id?: InputMaybe<Scalars['String']>;
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
  copies?: Maybe<Scalars['bigint']>;
  price?: Maybe<Scalars['numeric']>;
};

/** aggregate var_pop on columns */
export type mb_views_nft_activities_var_pop_fields = {
  copies?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type mb_views_nft_activities_var_samp_fields = {
  copies?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type mb_views_nft_activities_variance_fields = {
  copies?: Maybe<Scalars['Float']>;
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
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['timestamp']>;
  extra?: Maybe<Scalars['String']>;
  issued_at?: Maybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']>;
  listing_approval_id?: Maybe<Scalars['numeric']>;
  listing_kind?: Maybe<Scalars['String']>;
  /** An array relationship */
  listings: Array<nft_listings>;
  /** An aggregate relationship */
  listings_aggregate: nft_listings_aggregate;
  market_id?: Maybe<Scalars['String']>;
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
  price?: Maybe<Scalars['numeric']>;
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
  listing_approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
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
  currency?: InputMaybe<String_comparison_exp>;
  description?: InputMaybe<String_comparison_exp>;
  expires_at?: InputMaybe<timestamp_comparison_exp>;
  extra?: InputMaybe<String_comparison_exp>;
  issued_at?: InputMaybe<timestamp_comparison_exp>;
  last_transfer_receipt_id?: InputMaybe<String_comparison_exp>;
  last_transfer_timestamp?: InputMaybe<timestamp_comparison_exp>;
  listing_approval_id?: InputMaybe<numeric_comparison_exp>;
  listing_kind?: InputMaybe<String_comparison_exp>;
  listings?: InputMaybe<nft_listings_bool_exp>;
  listings_aggregate?: InputMaybe<nft_listings_aggregate_bool_exp>;
  market_id?: InputMaybe<String_comparison_exp>;
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
  price?: InputMaybe<numeric_comparison_exp>;
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
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['timestamp']>;
  extra?: Maybe<Scalars['String']>;
  issued_at?: Maybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']>;
  listing_approval_id?: Maybe<Scalars['numeric']>;
  listing_kind?: Maybe<Scalars['String']>;
  market_id?: Maybe<Scalars['String']>;
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
  price?: Maybe<Scalars['numeric']>;
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
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['timestamp']>;
  extra?: Maybe<Scalars['String']>;
  issued_at?: Maybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: Maybe<Scalars['String']>;
  last_transfer_timestamp?: Maybe<Scalars['timestamp']>;
  listing_approval_id?: Maybe<Scalars['numeric']>;
  listing_kind?: Maybe<Scalars['String']>;
  market_id?: Maybe<Scalars['String']>;
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
  price?: Maybe<Scalars['numeric']>;
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
  currency?: InputMaybe<order_by>;
  description?: InputMaybe<order_by>;
  expires_at?: InputMaybe<order_by>;
  extra?: InputMaybe<order_by>;
  issued_at?: InputMaybe<order_by>;
  last_transfer_receipt_id?: InputMaybe<order_by>;
  last_transfer_timestamp?: InputMaybe<order_by>;
  listing_approval_id?: InputMaybe<order_by>;
  listing_kind?: InputMaybe<order_by>;
  listings_aggregate?: InputMaybe<nft_listings_aggregate_order_by>;
  market_id?: InputMaybe<order_by>;
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
  price?: InputMaybe<order_by>;
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
  | 'currency'
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
  | 'listing_approval_id'
  /** column name */
  | 'listing_kind'
  /** column name */
  | 'market_id'
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
  | 'price'
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
  listing_approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type mb_views_nft_owned_tokens_stddev_pop_fields = {
  copies?: Maybe<Scalars['Float']>;
  listing_approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type mb_views_nft_owned_tokens_stddev_samp_fields = {
  copies?: Maybe<Scalars['Float']>;
  listing_approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
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
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['timestamp']>;
  extra?: InputMaybe<Scalars['String']>;
  issued_at?: InputMaybe<Scalars['timestamp']>;
  last_transfer_receipt_id?: InputMaybe<Scalars['String']>;
  last_transfer_timestamp?: InputMaybe<Scalars['timestamp']>;
  listing_approval_id?: InputMaybe<Scalars['numeric']>;
  listing_kind?: InputMaybe<Scalars['String']>;
  market_id?: InputMaybe<Scalars['String']>;
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
  price?: InputMaybe<Scalars['numeric']>;
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
  listing_approval_id?: Maybe<Scalars['numeric']>;
  price?: Maybe<Scalars['numeric']>;
  royalties_percent?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type mb_views_nft_owned_tokens_var_pop_fields = {
  copies?: Maybe<Scalars['Float']>;
  listing_approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type mb_views_nft_owned_tokens_var_samp_fields = {
  copies?: Maybe<Scalars['Float']>;
  listing_approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  royalties_percent?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type mb_views_nft_owned_tokens_variance_fields = {
  copies?: Maybe<Scalars['Float']>;
  listing_approval_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
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
  metadata?: Maybe<nft_metadata>;
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

/** columns and relationships of "nft_metadata" */
export type nft_metadata = {
  base_uri?: Maybe<Scalars['String']>;
  content_flag?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extra?: Maybe<Scalars['String']>;
  id: Scalars['String'];
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
export type nft_metadatareference_blobArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "nft_metadata" */
export type nft_metadata_aggregate = {
  aggregate?: Maybe<nft_metadata_aggregate_fields>;
  nodes: Array<nft_metadata>;
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

export type query_root = {
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
  /** fetch data from the table: "mb_views.nft_activities_rollup" */
  mb_views_nft_activities_rollup: Array<mb_views_nft_activities_rollup>;
  /** fetch aggregated fields from the table: "mb_views.nft_activities_rollup" */
  mb_views_nft_activities_rollup_aggregate: mb_views_nft_activities_rollup_aggregate;
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
  nft_metadata: Array<nft_metadata>;
  /** fetch aggregated fields from the table: "nft_metadata" */
  nft_metadata_aggregate: nft_metadata_aggregate;
  /** fetch data from the table: "nft_metadata" using primary key columns */
  nft_metadata_by_pk?: Maybe<nft_metadata>;
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
};


export type query_rootblocksArgs = {
  distinct_on?: InputMaybe<Array<blocks_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<blocks_order_by>>;
  where?: InputMaybe<blocks_bool_exp>;
};


export type query_rootblocks_aggregateArgs = {
  distinct_on?: InputMaybe<Array<blocks_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<blocks_order_by>>;
  where?: InputMaybe<blocks_bool_exp>;
};


export type query_rootblocks_by_pkArgs = {
  synced_height: Scalars['bigint'];
};


export type query_rootmb_store_mintersArgs = {
  distinct_on?: InputMaybe<Array<mb_store_minters_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_store_minters_order_by>>;
  where?: InputMaybe<mb_store_minters_bool_exp>;
};


export type query_rootmb_store_minters_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_store_minters_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_store_minters_order_by>>;
  where?: InputMaybe<mb_store_minters_bool_exp>;
};


export type query_rootmb_store_minters_by_pkArgs = {
  minter_id: Scalars['String'];
  nft_contract_id: Scalars['String'];
};


export type query_rootmb_views_active_listingsArgs = {
  distinct_on?: InputMaybe<Array<mb_views_active_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_active_listings_order_by>>;
  where?: InputMaybe<mb_views_active_listings_bool_exp>;
};


export type query_rootmb_views_active_listings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_active_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_active_listings_order_by>>;
  where?: InputMaybe<mb_views_active_listings_bool_exp>;
};


export type query_rootmb_views_active_listings_rollupArgs = {
  distinct_on?: InputMaybe<Array<mb_views_active_listings_rollup_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_active_listings_rollup_order_by>>;
  where?: InputMaybe<mb_views_active_listings_rollup_bool_exp>;
};


export type query_rootmb_views_active_listings_rollup_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_active_listings_rollup_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_active_listings_rollup_order_by>>;
  where?: InputMaybe<mb_views_active_listings_rollup_bool_exp>;
};


export type query_rootmb_views_auctions_with_offerArgs = {
  distinct_on?: InputMaybe<Array<mb_views_auctions_with_offer_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_auctions_with_offer_order_by>>;
  where?: InputMaybe<mb_views_auctions_with_offer_bool_exp>;
};


export type query_rootmb_views_auctions_with_offer_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_auctions_with_offer_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_auctions_with_offer_order_by>>;
  where?: InputMaybe<mb_views_auctions_with_offer_bool_exp>;
};


export type query_rootmb_views_nft_activitiesArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_activities_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_activities_order_by>>;
  where?: InputMaybe<mb_views_nft_activities_bool_exp>;
};


export type query_rootmb_views_nft_activities_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_activities_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_activities_order_by>>;
  where?: InputMaybe<mb_views_nft_activities_bool_exp>;
};


export type query_rootmb_views_nft_activities_rollupArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_activities_rollup_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_activities_rollup_order_by>>;
  where?: InputMaybe<mb_views_nft_activities_rollup_bool_exp>;
};


export type query_rootmb_views_nft_activities_rollup_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_activities_rollup_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_activities_rollup_order_by>>;
  where?: InputMaybe<mb_views_nft_activities_rollup_bool_exp>;
};


export type query_rootmb_views_nft_metadataArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_metadata_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_metadata_order_by>>;
  where?: InputMaybe<mb_views_nft_metadata_bool_exp>;
};


export type query_rootmb_views_nft_metadata_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_metadata_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_metadata_order_by>>;
  where?: InputMaybe<mb_views_nft_metadata_bool_exp>;
};


export type query_rootmb_views_nft_metadata_unburnedArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_metadata_unburned_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_metadata_unburned_order_by>>;
  where?: InputMaybe<mb_views_nft_metadata_unburned_bool_exp>;
};


export type query_rootmb_views_nft_metadata_unburned_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_metadata_unburned_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_metadata_unburned_order_by>>;
  where?: InputMaybe<mb_views_nft_metadata_unburned_bool_exp>;
};


export type query_rootmb_views_nft_owned_tokensArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_owned_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_owned_tokens_order_by>>;
  where?: InputMaybe<mb_views_nft_owned_tokens_bool_exp>;
};


export type query_rootmb_views_nft_owned_tokens_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_owned_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_owned_tokens_order_by>>;
  where?: InputMaybe<mb_views_nft_owned_tokens_bool_exp>;
};


export type query_rootmb_views_nft_tokensArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_bool_exp>;
};


export type query_rootmb_views_nft_tokens_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_bool_exp>;
};


export type query_rootmb_views_nft_tokens_with_listingArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_with_listing_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_with_listing_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_with_listing_bool_exp>;
};


export type query_rootmb_views_nft_tokens_with_listing_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_with_listing_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_with_listing_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_with_listing_bool_exp>;
};


export type query_rootmb_views_nft_tokens_with_media_typeArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_with_media_type_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_with_media_type_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_with_media_type_bool_exp>;
};


export type query_rootmb_views_nft_tokens_with_media_type_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_with_media_type_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_with_media_type_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_with_media_type_bool_exp>;
};


export type query_rootmb_views_top_storesArgs = {
  distinct_on?: InputMaybe<Array<mb_views_top_stores_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_top_stores_order_by>>;
  where?: InputMaybe<mb_views_top_stores_bool_exp>;
};


export type query_rootmb_views_top_stores_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_top_stores_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_top_stores_order_by>>;
  where?: InputMaybe<mb_views_top_stores_bool_exp>;
};


export type query_rootnft_activitiesArgs = {
  distinct_on?: InputMaybe<Array<nft_activities_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_activities_order_by>>;
  where?: InputMaybe<nft_activities_bool_exp>;
};


export type query_rootnft_activities_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_activities_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_activities_order_by>>;
  where?: InputMaybe<nft_activities_bool_exp>;
};


export type query_rootnft_activities_by_pkArgs = {
  kind: Scalars['String'];
  nft_contract_id: Scalars['String'];
  receipt_id: Scalars['String'];
  token_id: Scalars['String'];
};


export type query_rootnft_attributesArgs = {
  distinct_on?: InputMaybe<Array<nft_attributes_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_attributes_order_by>>;
  where?: InputMaybe<nft_attributes_bool_exp>;
};


export type query_rootnft_attributes_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_attributes_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_attributes_order_by>>;
  where?: InputMaybe<nft_attributes_bool_exp>;
};


export type query_rootnft_attributes_by_pkArgs = {
  attribute_type: Scalars['String'];
  nft_contract_id: Scalars['String'];
  nft_metadata_id: Scalars['String'];
};


export type query_rootnft_contractsArgs = {
  distinct_on?: InputMaybe<Array<nft_contracts_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_contracts_order_by>>;
  where?: InputMaybe<nft_contracts_bool_exp>;
};


export type query_rootnft_contracts_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_contracts_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_contracts_order_by>>;
  where?: InputMaybe<nft_contracts_bool_exp>;
};


export type query_rootnft_contracts_by_pkArgs = {
  id: Scalars['String'];
};


export type query_rootnft_earningsArgs = {
  distinct_on?: InputMaybe<Array<nft_earnings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_earnings_order_by>>;
  where?: InputMaybe<nft_earnings_bool_exp>;
};


export type query_rootnft_earnings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_earnings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_earnings_order_by>>;
  where?: InputMaybe<nft_earnings_bool_exp>;
};


export type query_rootnft_earnings_by_pkArgs = {
  approval_id: Scalars['numeric'];
  is_mintbase_cut: Scalars['Boolean'];
  is_referral: Scalars['Boolean'];
  market_id: Scalars['String'];
  nft_contract_id: Scalars['String'];
  receiver_id: Scalars['String'];
  token_id: Scalars['String'];
};


export type query_rootnft_listingsArgs = {
  distinct_on?: InputMaybe<Array<nft_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_listings_order_by>>;
  where?: InputMaybe<nft_listings_bool_exp>;
};


export type query_rootnft_listings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_listings_order_by>>;
  where?: InputMaybe<nft_listings_bool_exp>;
};


export type query_rootnft_listings_by_pkArgs = {
  approval_id: Scalars['numeric'];
  market_id: Scalars['String'];
  nft_contract_id: Scalars['String'];
  token_id: Scalars['String'];
};


export type query_rootnft_metadataArgs = {
  distinct_on?: InputMaybe<Array<nft_metadata_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_metadata_order_by>>;
  where?: InputMaybe<nft_metadata_bool_exp>;
};


export type query_rootnft_metadata_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_metadata_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_metadata_order_by>>;
  where?: InputMaybe<nft_metadata_bool_exp>;
};


export type query_rootnft_metadata_by_pkArgs = {
  id: Scalars['String'];
};


export type query_rootnft_offersArgs = {
  distinct_on?: InputMaybe<Array<nft_offers_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_offers_order_by>>;
  where?: InputMaybe<nft_offers_bool_exp>;
};


export type query_rootnft_offers_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_offers_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_offers_order_by>>;
  where?: InputMaybe<nft_offers_bool_exp>;
};


export type query_rootnft_offers_by_pkArgs = {
  approval_id: Scalars['numeric'];
  market_id: Scalars['String'];
  nft_contract_id: Scalars['String'];
  offer_id: Scalars['bigint'];
  token_id: Scalars['String'];
};


export type query_rootnft_tokensArgs = {
  distinct_on?: InputMaybe<Array<nft_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_tokens_order_by>>;
  where?: InputMaybe<nft_tokens_bool_exp>;
};


export type query_rootnft_tokens_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_tokens_order_by>>;
  where?: InputMaybe<nft_tokens_bool_exp>;
};


export type query_rootnft_tokens_by_pkArgs = {
  nft_contract_id: Scalars['String'];
  token_id: Scalars['String'];
};

export type subscription_root = {
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
  /** fetch data from the table: "mb_views.nft_activities_rollup" */
  mb_views_nft_activities_rollup: Array<mb_views_nft_activities_rollup>;
  /** fetch aggregated fields from the table: "mb_views.nft_activities_rollup" */
  mb_views_nft_activities_rollup_aggregate: mb_views_nft_activities_rollup_aggregate;
  /** fetch data from the table in a streaming manner: "mb_views.nft_activities_rollup" */
  mb_views_nft_activities_rollup_stream: Array<mb_views_nft_activities_rollup>;
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
  nft_metadata: Array<nft_metadata>;
  /** fetch aggregated fields from the table: "nft_metadata" */
  nft_metadata_aggregate: nft_metadata_aggregate;
  /** fetch data from the table: "nft_metadata" using primary key columns */
  nft_metadata_by_pk?: Maybe<nft_metadata>;
  /** fetch data from the table in a streaming manner: "nft_metadata" */
  nft_metadata_stream: Array<nft_metadata>;
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


export type subscription_rootblocksArgs = {
  distinct_on?: InputMaybe<Array<blocks_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<blocks_order_by>>;
  where?: InputMaybe<blocks_bool_exp>;
};


export type subscription_rootblocks_aggregateArgs = {
  distinct_on?: InputMaybe<Array<blocks_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<blocks_order_by>>;
  where?: InputMaybe<blocks_bool_exp>;
};


export type subscription_rootblocks_by_pkArgs = {
  synced_height: Scalars['bigint'];
};


export type subscription_rootblocks_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<blocks_stream_cursor_input>>;
  where?: InputMaybe<blocks_bool_exp>;
};


export type subscription_rootmb_store_mintersArgs = {
  distinct_on?: InputMaybe<Array<mb_store_minters_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_store_minters_order_by>>;
  where?: InputMaybe<mb_store_minters_bool_exp>;
};


export type subscription_rootmb_store_minters_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_store_minters_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_store_minters_order_by>>;
  where?: InputMaybe<mb_store_minters_bool_exp>;
};


export type subscription_rootmb_store_minters_by_pkArgs = {
  minter_id: Scalars['String'];
  nft_contract_id: Scalars['String'];
};


export type subscription_rootmb_store_minters_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_store_minters_stream_cursor_input>>;
  where?: InputMaybe<mb_store_minters_bool_exp>;
};


export type subscription_rootmb_views_active_listingsArgs = {
  distinct_on?: InputMaybe<Array<mb_views_active_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_active_listings_order_by>>;
  where?: InputMaybe<mb_views_active_listings_bool_exp>;
};


export type subscription_rootmb_views_active_listings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_active_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_active_listings_order_by>>;
  where?: InputMaybe<mb_views_active_listings_bool_exp>;
};


export type subscription_rootmb_views_active_listings_rollupArgs = {
  distinct_on?: InputMaybe<Array<mb_views_active_listings_rollup_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_active_listings_rollup_order_by>>;
  where?: InputMaybe<mb_views_active_listings_rollup_bool_exp>;
};


export type subscription_rootmb_views_active_listings_rollup_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_active_listings_rollup_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_active_listings_rollup_order_by>>;
  where?: InputMaybe<mb_views_active_listings_rollup_bool_exp>;
};


export type subscription_rootmb_views_active_listings_rollup_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_active_listings_rollup_stream_cursor_input>>;
  where?: InputMaybe<mb_views_active_listings_rollup_bool_exp>;
};


export type subscription_rootmb_views_active_listings_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_active_listings_stream_cursor_input>>;
  where?: InputMaybe<mb_views_active_listings_bool_exp>;
};


export type subscription_rootmb_views_auctions_with_offerArgs = {
  distinct_on?: InputMaybe<Array<mb_views_auctions_with_offer_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_auctions_with_offer_order_by>>;
  where?: InputMaybe<mb_views_auctions_with_offer_bool_exp>;
};


export type subscription_rootmb_views_auctions_with_offer_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_auctions_with_offer_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_auctions_with_offer_order_by>>;
  where?: InputMaybe<mb_views_auctions_with_offer_bool_exp>;
};


export type subscription_rootmb_views_auctions_with_offer_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_auctions_with_offer_stream_cursor_input>>;
  where?: InputMaybe<mb_views_auctions_with_offer_bool_exp>;
};


export type subscription_rootmb_views_nft_activitiesArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_activities_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_activities_order_by>>;
  where?: InputMaybe<mb_views_nft_activities_bool_exp>;
};


export type subscription_rootmb_views_nft_activities_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_activities_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_activities_order_by>>;
  where?: InputMaybe<mb_views_nft_activities_bool_exp>;
};


export type subscription_rootmb_views_nft_activities_rollupArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_activities_rollup_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_activities_rollup_order_by>>;
  where?: InputMaybe<mb_views_nft_activities_rollup_bool_exp>;
};


export type subscription_rootmb_views_nft_activities_rollup_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_activities_rollup_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_activities_rollup_order_by>>;
  where?: InputMaybe<mb_views_nft_activities_rollup_bool_exp>;
};


export type subscription_rootmb_views_nft_activities_rollup_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_nft_activities_rollup_stream_cursor_input>>;
  where?: InputMaybe<mb_views_nft_activities_rollup_bool_exp>;
};


export type subscription_rootmb_views_nft_activities_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_nft_activities_stream_cursor_input>>;
  where?: InputMaybe<mb_views_nft_activities_bool_exp>;
};


export type subscription_rootmb_views_nft_metadataArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_metadata_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_metadata_order_by>>;
  where?: InputMaybe<mb_views_nft_metadata_bool_exp>;
};


export type subscription_rootmb_views_nft_metadata_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_metadata_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_metadata_order_by>>;
  where?: InputMaybe<mb_views_nft_metadata_bool_exp>;
};


export type subscription_rootmb_views_nft_metadata_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_nft_metadata_stream_cursor_input>>;
  where?: InputMaybe<mb_views_nft_metadata_bool_exp>;
};


export type subscription_rootmb_views_nft_metadata_unburnedArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_metadata_unburned_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_metadata_unburned_order_by>>;
  where?: InputMaybe<mb_views_nft_metadata_unburned_bool_exp>;
};


export type subscription_rootmb_views_nft_metadata_unburned_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_metadata_unburned_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_metadata_unburned_order_by>>;
  where?: InputMaybe<mb_views_nft_metadata_unburned_bool_exp>;
};


export type subscription_rootmb_views_nft_metadata_unburned_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_nft_metadata_unburned_stream_cursor_input>>;
  where?: InputMaybe<mb_views_nft_metadata_unburned_bool_exp>;
};


export type subscription_rootmb_views_nft_owned_tokensArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_owned_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_owned_tokens_order_by>>;
  where?: InputMaybe<mb_views_nft_owned_tokens_bool_exp>;
};


export type subscription_rootmb_views_nft_owned_tokens_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_owned_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_owned_tokens_order_by>>;
  where?: InputMaybe<mb_views_nft_owned_tokens_bool_exp>;
};


export type subscription_rootmb_views_nft_owned_tokens_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_nft_owned_tokens_stream_cursor_input>>;
  where?: InputMaybe<mb_views_nft_owned_tokens_bool_exp>;
};


export type subscription_rootmb_views_nft_tokensArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_bool_exp>;
};


export type subscription_rootmb_views_nft_tokens_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_bool_exp>;
};


export type subscription_rootmb_views_nft_tokens_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_nft_tokens_stream_cursor_input>>;
  where?: InputMaybe<mb_views_nft_tokens_bool_exp>;
};


export type subscription_rootmb_views_nft_tokens_with_listingArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_with_listing_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_with_listing_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_with_listing_bool_exp>;
};


export type subscription_rootmb_views_nft_tokens_with_listing_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_with_listing_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_with_listing_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_with_listing_bool_exp>;
};


export type subscription_rootmb_views_nft_tokens_with_listing_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_nft_tokens_with_listing_stream_cursor_input>>;
  where?: InputMaybe<mb_views_nft_tokens_with_listing_bool_exp>;
};


export type subscription_rootmb_views_nft_tokens_with_media_typeArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_with_media_type_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_with_media_type_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_with_media_type_bool_exp>;
};


export type subscription_rootmb_views_nft_tokens_with_media_type_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_nft_tokens_with_media_type_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_nft_tokens_with_media_type_order_by>>;
  where?: InputMaybe<mb_views_nft_tokens_with_media_type_bool_exp>;
};


export type subscription_rootmb_views_nft_tokens_with_media_type_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_nft_tokens_with_media_type_stream_cursor_input>>;
  where?: InputMaybe<mb_views_nft_tokens_with_media_type_bool_exp>;
};


export type subscription_rootmb_views_top_storesArgs = {
  distinct_on?: InputMaybe<Array<mb_views_top_stores_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_top_stores_order_by>>;
  where?: InputMaybe<mb_views_top_stores_bool_exp>;
};


export type subscription_rootmb_views_top_stores_aggregateArgs = {
  distinct_on?: InputMaybe<Array<mb_views_top_stores_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<mb_views_top_stores_order_by>>;
  where?: InputMaybe<mb_views_top_stores_bool_exp>;
};


export type subscription_rootmb_views_top_stores_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<mb_views_top_stores_stream_cursor_input>>;
  where?: InputMaybe<mb_views_top_stores_bool_exp>;
};


export type subscription_rootnft_activitiesArgs = {
  distinct_on?: InputMaybe<Array<nft_activities_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_activities_order_by>>;
  where?: InputMaybe<nft_activities_bool_exp>;
};


export type subscription_rootnft_activities_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_activities_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_activities_order_by>>;
  where?: InputMaybe<nft_activities_bool_exp>;
};


export type subscription_rootnft_activities_by_pkArgs = {
  kind: Scalars['String'];
  nft_contract_id: Scalars['String'];
  receipt_id: Scalars['String'];
  token_id: Scalars['String'];
};


export type subscription_rootnft_activities_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<nft_activities_stream_cursor_input>>;
  where?: InputMaybe<nft_activities_bool_exp>;
};


export type subscription_rootnft_attributesArgs = {
  distinct_on?: InputMaybe<Array<nft_attributes_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_attributes_order_by>>;
  where?: InputMaybe<nft_attributes_bool_exp>;
};


export type subscription_rootnft_attributes_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_attributes_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_attributes_order_by>>;
  where?: InputMaybe<nft_attributes_bool_exp>;
};


export type subscription_rootnft_attributes_by_pkArgs = {
  attribute_type: Scalars['String'];
  nft_contract_id: Scalars['String'];
  nft_metadata_id: Scalars['String'];
};


export type subscription_rootnft_attributes_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<nft_attributes_stream_cursor_input>>;
  where?: InputMaybe<nft_attributes_bool_exp>;
};


export type subscription_rootnft_contractsArgs = {
  distinct_on?: InputMaybe<Array<nft_contracts_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_contracts_order_by>>;
  where?: InputMaybe<nft_contracts_bool_exp>;
};


export type subscription_rootnft_contracts_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_contracts_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_contracts_order_by>>;
  where?: InputMaybe<nft_contracts_bool_exp>;
};


export type subscription_rootnft_contracts_by_pkArgs = {
  id: Scalars['String'];
};


export type subscription_rootnft_contracts_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<nft_contracts_stream_cursor_input>>;
  where?: InputMaybe<nft_contracts_bool_exp>;
};


export type subscription_rootnft_earningsArgs = {
  distinct_on?: InputMaybe<Array<nft_earnings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_earnings_order_by>>;
  where?: InputMaybe<nft_earnings_bool_exp>;
};


export type subscription_rootnft_earnings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_earnings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_earnings_order_by>>;
  where?: InputMaybe<nft_earnings_bool_exp>;
};


export type subscription_rootnft_earnings_by_pkArgs = {
  approval_id: Scalars['numeric'];
  is_mintbase_cut: Scalars['Boolean'];
  is_referral: Scalars['Boolean'];
  market_id: Scalars['String'];
  nft_contract_id: Scalars['String'];
  receiver_id: Scalars['String'];
  token_id: Scalars['String'];
};


export type subscription_rootnft_earnings_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<nft_earnings_stream_cursor_input>>;
  where?: InputMaybe<nft_earnings_bool_exp>;
};


export type subscription_rootnft_listingsArgs = {
  distinct_on?: InputMaybe<Array<nft_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_listings_order_by>>;
  where?: InputMaybe<nft_listings_bool_exp>;
};


export type subscription_rootnft_listings_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_listings_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_listings_order_by>>;
  where?: InputMaybe<nft_listings_bool_exp>;
};


export type subscription_rootnft_listings_by_pkArgs = {
  approval_id: Scalars['numeric'];
  market_id: Scalars['String'];
  nft_contract_id: Scalars['String'];
  token_id: Scalars['String'];
};


export type subscription_rootnft_listings_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<nft_listings_stream_cursor_input>>;
  where?: InputMaybe<nft_listings_bool_exp>;
};


export type subscription_rootnft_metadataArgs = {
  distinct_on?: InputMaybe<Array<nft_metadata_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_metadata_order_by>>;
  where?: InputMaybe<nft_metadata_bool_exp>;
};


export type subscription_rootnft_metadata_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_metadata_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_metadata_order_by>>;
  where?: InputMaybe<nft_metadata_bool_exp>;
};


export type subscription_rootnft_metadata_by_pkArgs = {
  id: Scalars['String'];
};


export type subscription_rootnft_metadata_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<nft_metadata_stream_cursor_input>>;
  where?: InputMaybe<nft_metadata_bool_exp>;
};


export type subscription_rootnft_offersArgs = {
  distinct_on?: InputMaybe<Array<nft_offers_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_offers_order_by>>;
  where?: InputMaybe<nft_offers_bool_exp>;
};


export type subscription_rootnft_offers_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_offers_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_offers_order_by>>;
  where?: InputMaybe<nft_offers_bool_exp>;
};


export type subscription_rootnft_offers_by_pkArgs = {
  approval_id: Scalars['numeric'];
  market_id: Scalars['String'];
  nft_contract_id: Scalars['String'];
  offer_id: Scalars['bigint'];
  token_id: Scalars['String'];
};


export type subscription_rootnft_offers_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<nft_offers_stream_cursor_input>>;
  where?: InputMaybe<nft_offers_bool_exp>;
};


export type subscription_rootnft_tokensArgs = {
  distinct_on?: InputMaybe<Array<nft_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_tokens_order_by>>;
  where?: InputMaybe<nft_tokens_bool_exp>;
};


export type subscription_rootnft_tokens_aggregateArgs = {
  distinct_on?: InputMaybe<Array<nft_tokens_select_column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<nft_tokens_order_by>>;
  where?: InputMaybe<nft_tokens_bool_exp>;
};


export type subscription_rootnft_tokens_by_pkArgs = {
  nft_contract_id: Scalars['String'];
  token_id: Scalars['String'];
};


export type subscription_rootnft_tokens_streamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<nft_tokens_stream_cursor_input>>;
  where?: InputMaybe<nft_tokens_bool_exp>;
};

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

  export type QuerySdk = {
      /** fetch data from the table: "blocks" **/
  blocks: InContextSdkMethod<query_root['blocks'], query_rootblocksArgs, MeshContext>,
  /** fetch aggregated fields from the table: "blocks" **/
  blocks_aggregate: InContextSdkMethod<query_root['blocks_aggregate'], query_rootblocks_aggregateArgs, MeshContext>,
  /** fetch data from the table: "blocks" using primary key columns **/
  blocks_by_pk: InContextSdkMethod<query_root['blocks_by_pk'], query_rootblocks_by_pkArgs, MeshContext>,
  /** fetch data from the table: "mb_store_minters" **/
  mb_store_minters: InContextSdkMethod<query_root['mb_store_minters'], query_rootmb_store_mintersArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_store_minters" **/
  mb_store_minters_aggregate: InContextSdkMethod<query_root['mb_store_minters_aggregate'], query_rootmb_store_minters_aggregateArgs, MeshContext>,
  /** fetch data from the table: "mb_store_minters" using primary key columns **/
  mb_store_minters_by_pk: InContextSdkMethod<query_root['mb_store_minters_by_pk'], query_rootmb_store_minters_by_pkArgs, MeshContext>,
  /** fetch data from the table: "mb_views.active_listings" **/
  mb_views_active_listings: InContextSdkMethod<query_root['mb_views_active_listings'], query_rootmb_views_active_listingsArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.active_listings" **/
  mb_views_active_listings_aggregate: InContextSdkMethod<query_root['mb_views_active_listings_aggregate'], query_rootmb_views_active_listings_aggregateArgs, MeshContext>,
  /** fetch data from the table: "mb_views.active_listings_rollup" **/
  mb_views_active_listings_rollup: InContextSdkMethod<query_root['mb_views_active_listings_rollup'], query_rootmb_views_active_listings_rollupArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.active_listings_rollup" **/
  mb_views_active_listings_rollup_aggregate: InContextSdkMethod<query_root['mb_views_active_listings_rollup_aggregate'], query_rootmb_views_active_listings_rollup_aggregateArgs, MeshContext>,
  /** fetch data from the table: "mb_views.auctions_with_offer" **/
  mb_views_auctions_with_offer: InContextSdkMethod<query_root['mb_views_auctions_with_offer'], query_rootmb_views_auctions_with_offerArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.auctions_with_offer" **/
  mb_views_auctions_with_offer_aggregate: InContextSdkMethod<query_root['mb_views_auctions_with_offer_aggregate'], query_rootmb_views_auctions_with_offer_aggregateArgs, MeshContext>,
  /** fetch data from the table: "mb_views.nft_activities" **/
  mb_views_nft_activities: InContextSdkMethod<query_root['mb_views_nft_activities'], query_rootmb_views_nft_activitiesArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.nft_activities" **/
  mb_views_nft_activities_aggregate: InContextSdkMethod<query_root['mb_views_nft_activities_aggregate'], query_rootmb_views_nft_activities_aggregateArgs, MeshContext>,
  /** fetch data from the table: "mb_views.nft_activities_rollup" **/
  mb_views_nft_activities_rollup: InContextSdkMethod<query_root['mb_views_nft_activities_rollup'], query_rootmb_views_nft_activities_rollupArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.nft_activities_rollup" **/
  mb_views_nft_activities_rollup_aggregate: InContextSdkMethod<query_root['mb_views_nft_activities_rollup_aggregate'], query_rootmb_views_nft_activities_rollup_aggregateArgs, MeshContext>,
  /** fetch data from the table: "mb_views.nft_metadata" **/
  mb_views_nft_metadata: InContextSdkMethod<query_root['mb_views_nft_metadata'], query_rootmb_views_nft_metadataArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.nft_metadata" **/
  mb_views_nft_metadata_aggregate: InContextSdkMethod<query_root['mb_views_nft_metadata_aggregate'], query_rootmb_views_nft_metadata_aggregateArgs, MeshContext>,
  /** fetch data from the table: "mb_views.nft_metadata_unburned" **/
  mb_views_nft_metadata_unburned: InContextSdkMethod<query_root['mb_views_nft_metadata_unburned'], query_rootmb_views_nft_metadata_unburnedArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.nft_metadata_unburned" **/
  mb_views_nft_metadata_unburned_aggregate: InContextSdkMethod<query_root['mb_views_nft_metadata_unburned_aggregate'], query_rootmb_views_nft_metadata_unburned_aggregateArgs, MeshContext>,
  /** fetch data from the table: "mb_views.nft_owned_tokens" **/
  mb_views_nft_owned_tokens: InContextSdkMethod<query_root['mb_views_nft_owned_tokens'], query_rootmb_views_nft_owned_tokensArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.nft_owned_tokens" **/
  mb_views_nft_owned_tokens_aggregate: InContextSdkMethod<query_root['mb_views_nft_owned_tokens_aggregate'], query_rootmb_views_nft_owned_tokens_aggregateArgs, MeshContext>,
  /** fetch data from the table: "mb_views.nft_tokens" **/
  mb_views_nft_tokens: InContextSdkMethod<query_root['mb_views_nft_tokens'], query_rootmb_views_nft_tokensArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.nft_tokens" **/
  mb_views_nft_tokens_aggregate: InContextSdkMethod<query_root['mb_views_nft_tokens_aggregate'], query_rootmb_views_nft_tokens_aggregateArgs, MeshContext>,
  /** fetch data from the table: "mb_views.nft_tokens_with_listing" **/
  mb_views_nft_tokens_with_listing: InContextSdkMethod<query_root['mb_views_nft_tokens_with_listing'], query_rootmb_views_nft_tokens_with_listingArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.nft_tokens_with_listing" **/
  mb_views_nft_tokens_with_listing_aggregate: InContextSdkMethod<query_root['mb_views_nft_tokens_with_listing_aggregate'], query_rootmb_views_nft_tokens_with_listing_aggregateArgs, MeshContext>,
  /** fetch data from the table: "mb_views.nft_tokens_with_media_type" **/
  mb_views_nft_tokens_with_media_type: InContextSdkMethod<query_root['mb_views_nft_tokens_with_media_type'], query_rootmb_views_nft_tokens_with_media_typeArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.nft_tokens_with_media_type" **/
  mb_views_nft_tokens_with_media_type_aggregate: InContextSdkMethod<query_root['mb_views_nft_tokens_with_media_type_aggregate'], query_rootmb_views_nft_tokens_with_media_type_aggregateArgs, MeshContext>,
  /** fetch data from the table: "mb_views.top_stores" **/
  mb_views_top_stores: InContextSdkMethod<query_root['mb_views_top_stores'], query_rootmb_views_top_storesArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.top_stores" **/
  mb_views_top_stores_aggregate: InContextSdkMethod<query_root['mb_views_top_stores_aggregate'], query_rootmb_views_top_stores_aggregateArgs, MeshContext>,
  /** fetch data from the table: "nft_activities" **/
  nft_activities: InContextSdkMethod<query_root['nft_activities'], query_rootnft_activitiesArgs, MeshContext>,
  /** fetch aggregated fields from the table: "nft_activities" **/
  nft_activities_aggregate: InContextSdkMethod<query_root['nft_activities_aggregate'], query_rootnft_activities_aggregateArgs, MeshContext>,
  /** fetch data from the table: "nft_activities" using primary key columns **/
  nft_activities_by_pk: InContextSdkMethod<query_root['nft_activities_by_pk'], query_rootnft_activities_by_pkArgs, MeshContext>,
  /** fetch data from the table: "nft_attributes" **/
  nft_attributes: InContextSdkMethod<query_root['nft_attributes'], query_rootnft_attributesArgs, MeshContext>,
  /** fetch aggregated fields from the table: "nft_attributes" **/
  nft_attributes_aggregate: InContextSdkMethod<query_root['nft_attributes_aggregate'], query_rootnft_attributes_aggregateArgs, MeshContext>,
  /** fetch data from the table: "nft_attributes" using primary key columns **/
  nft_attributes_by_pk: InContextSdkMethod<query_root['nft_attributes_by_pk'], query_rootnft_attributes_by_pkArgs, MeshContext>,
  /** fetch data from the table: "nft_contracts" **/
  nft_contracts: InContextSdkMethod<query_root['nft_contracts'], query_rootnft_contractsArgs, MeshContext>,
  /** fetch aggregated fields from the table: "nft_contracts" **/
  nft_contracts_aggregate: InContextSdkMethod<query_root['nft_contracts_aggregate'], query_rootnft_contracts_aggregateArgs, MeshContext>,
  /** fetch data from the table: "nft_contracts" using primary key columns **/
  nft_contracts_by_pk: InContextSdkMethod<query_root['nft_contracts_by_pk'], query_rootnft_contracts_by_pkArgs, MeshContext>,
  /** fetch data from the table: "nft_earnings" **/
  nft_earnings: InContextSdkMethod<query_root['nft_earnings'], query_rootnft_earningsArgs, MeshContext>,
  /** fetch aggregated fields from the table: "nft_earnings" **/
  nft_earnings_aggregate: InContextSdkMethod<query_root['nft_earnings_aggregate'], query_rootnft_earnings_aggregateArgs, MeshContext>,
  /** fetch data from the table: "nft_earnings" using primary key columns **/
  nft_earnings_by_pk: InContextSdkMethod<query_root['nft_earnings_by_pk'], query_rootnft_earnings_by_pkArgs, MeshContext>,
  /** An array relationship **/
  nft_listings: InContextSdkMethod<query_root['nft_listings'], query_rootnft_listingsArgs, MeshContext>,
  /** An aggregate relationship **/
  nft_listings_aggregate: InContextSdkMethod<query_root['nft_listings_aggregate'], query_rootnft_listings_aggregateArgs, MeshContext>,
  /** fetch data from the table: "nft_listings" using primary key columns **/
  nft_listings_by_pk: InContextSdkMethod<query_root['nft_listings_by_pk'], query_rootnft_listings_by_pkArgs, MeshContext>,
  /** fetch data from the table: "nft_metadata" **/
  nft_metadata: InContextSdkMethod<query_root['nft_metadata'], query_rootnft_metadataArgs, MeshContext>,
  /** fetch aggregated fields from the table: "nft_metadata" **/
  nft_metadata_aggregate: InContextSdkMethod<query_root['nft_metadata_aggregate'], query_rootnft_metadata_aggregateArgs, MeshContext>,
  /** fetch data from the table: "nft_metadata" using primary key columns **/
  nft_metadata_by_pk: InContextSdkMethod<query_root['nft_metadata_by_pk'], query_rootnft_metadata_by_pkArgs, MeshContext>,
  /** fetch data from the table: "nft_offers" **/
  nft_offers: InContextSdkMethod<query_root['nft_offers'], query_rootnft_offersArgs, MeshContext>,
  /** fetch aggregated fields from the table: "nft_offers" **/
  nft_offers_aggregate: InContextSdkMethod<query_root['nft_offers_aggregate'], query_rootnft_offers_aggregateArgs, MeshContext>,
  /** fetch data from the table: "nft_offers" using primary key columns **/
  nft_offers_by_pk: InContextSdkMethod<query_root['nft_offers_by_pk'], query_rootnft_offers_by_pkArgs, MeshContext>,
  /** fetch data from the table: "nft_tokens" **/
  nft_tokens: InContextSdkMethod<query_root['nft_tokens'], query_rootnft_tokensArgs, MeshContext>,
  /** fetch aggregated fields from the table: "nft_tokens" **/
  nft_tokens_aggregate: InContextSdkMethod<query_root['nft_tokens_aggregate'], query_rootnft_tokens_aggregateArgs, MeshContext>,
  /** fetch data from the table: "nft_tokens" using primary key columns **/
  nft_tokens_by_pk: InContextSdkMethod<query_root['nft_tokens_by_pk'], query_rootnft_tokens_by_pkArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
      /** fetch data from the table: "blocks" **/
  blocks: InContextSdkMethod<subscription_root['blocks'], subscription_rootblocksArgs, MeshContext>,
  /** fetch aggregated fields from the table: "blocks" **/
  blocks_aggregate: InContextSdkMethod<subscription_root['blocks_aggregate'], subscription_rootblocks_aggregateArgs, MeshContext>,
  /** fetch data from the table: "blocks" using primary key columns **/
  blocks_by_pk: InContextSdkMethod<subscription_root['blocks_by_pk'], subscription_rootblocks_by_pkArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "blocks" **/
  blocks_stream: InContextSdkMethod<subscription_root['blocks_stream'], subscription_rootblocks_streamArgs, MeshContext>,
  /** fetch data from the table: "mb_store_minters" **/
  mb_store_minters: InContextSdkMethod<subscription_root['mb_store_minters'], subscription_rootmb_store_mintersArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_store_minters" **/
  mb_store_minters_aggregate: InContextSdkMethod<subscription_root['mb_store_minters_aggregate'], subscription_rootmb_store_minters_aggregateArgs, MeshContext>,
  /** fetch data from the table: "mb_store_minters" using primary key columns **/
  mb_store_minters_by_pk: InContextSdkMethod<subscription_root['mb_store_minters_by_pk'], subscription_rootmb_store_minters_by_pkArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "mb_store_minters" **/
  mb_store_minters_stream: InContextSdkMethod<subscription_root['mb_store_minters_stream'], subscription_rootmb_store_minters_streamArgs, MeshContext>,
  /** fetch data from the table: "mb_views.active_listings" **/
  mb_views_active_listings: InContextSdkMethod<subscription_root['mb_views_active_listings'], subscription_rootmb_views_active_listingsArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.active_listings" **/
  mb_views_active_listings_aggregate: InContextSdkMethod<subscription_root['mb_views_active_listings_aggregate'], subscription_rootmb_views_active_listings_aggregateArgs, MeshContext>,
  /** fetch data from the table: "mb_views.active_listings_rollup" **/
  mb_views_active_listings_rollup: InContextSdkMethod<subscription_root['mb_views_active_listings_rollup'], subscription_rootmb_views_active_listings_rollupArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.active_listings_rollup" **/
  mb_views_active_listings_rollup_aggregate: InContextSdkMethod<subscription_root['mb_views_active_listings_rollup_aggregate'], subscription_rootmb_views_active_listings_rollup_aggregateArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "mb_views.active_listings_rollup" **/
  mb_views_active_listings_rollup_stream: InContextSdkMethod<subscription_root['mb_views_active_listings_rollup_stream'], subscription_rootmb_views_active_listings_rollup_streamArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "mb_views.active_listings" **/
  mb_views_active_listings_stream: InContextSdkMethod<subscription_root['mb_views_active_listings_stream'], subscription_rootmb_views_active_listings_streamArgs, MeshContext>,
  /** fetch data from the table: "mb_views.auctions_with_offer" **/
  mb_views_auctions_with_offer: InContextSdkMethod<subscription_root['mb_views_auctions_with_offer'], subscription_rootmb_views_auctions_with_offerArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.auctions_with_offer" **/
  mb_views_auctions_with_offer_aggregate: InContextSdkMethod<subscription_root['mb_views_auctions_with_offer_aggregate'], subscription_rootmb_views_auctions_with_offer_aggregateArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "mb_views.auctions_with_offer" **/
  mb_views_auctions_with_offer_stream: InContextSdkMethod<subscription_root['mb_views_auctions_with_offer_stream'], subscription_rootmb_views_auctions_with_offer_streamArgs, MeshContext>,
  /** fetch data from the table: "mb_views.nft_activities" **/
  mb_views_nft_activities: InContextSdkMethod<subscription_root['mb_views_nft_activities'], subscription_rootmb_views_nft_activitiesArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.nft_activities" **/
  mb_views_nft_activities_aggregate: InContextSdkMethod<subscription_root['mb_views_nft_activities_aggregate'], subscription_rootmb_views_nft_activities_aggregateArgs, MeshContext>,
  /** fetch data from the table: "mb_views.nft_activities_rollup" **/
  mb_views_nft_activities_rollup: InContextSdkMethod<subscription_root['mb_views_nft_activities_rollup'], subscription_rootmb_views_nft_activities_rollupArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.nft_activities_rollup" **/
  mb_views_nft_activities_rollup_aggregate: InContextSdkMethod<subscription_root['mb_views_nft_activities_rollup_aggregate'], subscription_rootmb_views_nft_activities_rollup_aggregateArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "mb_views.nft_activities_rollup" **/
  mb_views_nft_activities_rollup_stream: InContextSdkMethod<subscription_root['mb_views_nft_activities_rollup_stream'], subscription_rootmb_views_nft_activities_rollup_streamArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "mb_views.nft_activities" **/
  mb_views_nft_activities_stream: InContextSdkMethod<subscription_root['mb_views_nft_activities_stream'], subscription_rootmb_views_nft_activities_streamArgs, MeshContext>,
  /** fetch data from the table: "mb_views.nft_metadata" **/
  mb_views_nft_metadata: InContextSdkMethod<subscription_root['mb_views_nft_metadata'], subscription_rootmb_views_nft_metadataArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.nft_metadata" **/
  mb_views_nft_metadata_aggregate: InContextSdkMethod<subscription_root['mb_views_nft_metadata_aggregate'], subscription_rootmb_views_nft_metadata_aggregateArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "mb_views.nft_metadata" **/
  mb_views_nft_metadata_stream: InContextSdkMethod<subscription_root['mb_views_nft_metadata_stream'], subscription_rootmb_views_nft_metadata_streamArgs, MeshContext>,
  /** fetch data from the table: "mb_views.nft_metadata_unburned" **/
  mb_views_nft_metadata_unburned: InContextSdkMethod<subscription_root['mb_views_nft_metadata_unburned'], subscription_rootmb_views_nft_metadata_unburnedArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.nft_metadata_unburned" **/
  mb_views_nft_metadata_unburned_aggregate: InContextSdkMethod<subscription_root['mb_views_nft_metadata_unburned_aggregate'], subscription_rootmb_views_nft_metadata_unburned_aggregateArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "mb_views.nft_metadata_unburned" **/
  mb_views_nft_metadata_unburned_stream: InContextSdkMethod<subscription_root['mb_views_nft_metadata_unburned_stream'], subscription_rootmb_views_nft_metadata_unburned_streamArgs, MeshContext>,
  /** fetch data from the table: "mb_views.nft_owned_tokens" **/
  mb_views_nft_owned_tokens: InContextSdkMethod<subscription_root['mb_views_nft_owned_tokens'], subscription_rootmb_views_nft_owned_tokensArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.nft_owned_tokens" **/
  mb_views_nft_owned_tokens_aggregate: InContextSdkMethod<subscription_root['mb_views_nft_owned_tokens_aggregate'], subscription_rootmb_views_nft_owned_tokens_aggregateArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "mb_views.nft_owned_tokens" **/
  mb_views_nft_owned_tokens_stream: InContextSdkMethod<subscription_root['mb_views_nft_owned_tokens_stream'], subscription_rootmb_views_nft_owned_tokens_streamArgs, MeshContext>,
  /** fetch data from the table: "mb_views.nft_tokens" **/
  mb_views_nft_tokens: InContextSdkMethod<subscription_root['mb_views_nft_tokens'], subscription_rootmb_views_nft_tokensArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.nft_tokens" **/
  mb_views_nft_tokens_aggregate: InContextSdkMethod<subscription_root['mb_views_nft_tokens_aggregate'], subscription_rootmb_views_nft_tokens_aggregateArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "mb_views.nft_tokens" **/
  mb_views_nft_tokens_stream: InContextSdkMethod<subscription_root['mb_views_nft_tokens_stream'], subscription_rootmb_views_nft_tokens_streamArgs, MeshContext>,
  /** fetch data from the table: "mb_views.nft_tokens_with_listing" **/
  mb_views_nft_tokens_with_listing: InContextSdkMethod<subscription_root['mb_views_nft_tokens_with_listing'], subscription_rootmb_views_nft_tokens_with_listingArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.nft_tokens_with_listing" **/
  mb_views_nft_tokens_with_listing_aggregate: InContextSdkMethod<subscription_root['mb_views_nft_tokens_with_listing_aggregate'], subscription_rootmb_views_nft_tokens_with_listing_aggregateArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "mb_views.nft_tokens_with_listing" **/
  mb_views_nft_tokens_with_listing_stream: InContextSdkMethod<subscription_root['mb_views_nft_tokens_with_listing_stream'], subscription_rootmb_views_nft_tokens_with_listing_streamArgs, MeshContext>,
  /** fetch data from the table: "mb_views.nft_tokens_with_media_type" **/
  mb_views_nft_tokens_with_media_type: InContextSdkMethod<subscription_root['mb_views_nft_tokens_with_media_type'], subscription_rootmb_views_nft_tokens_with_media_typeArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.nft_tokens_with_media_type" **/
  mb_views_nft_tokens_with_media_type_aggregate: InContextSdkMethod<subscription_root['mb_views_nft_tokens_with_media_type_aggregate'], subscription_rootmb_views_nft_tokens_with_media_type_aggregateArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "mb_views.nft_tokens_with_media_type" **/
  mb_views_nft_tokens_with_media_type_stream: InContextSdkMethod<subscription_root['mb_views_nft_tokens_with_media_type_stream'], subscription_rootmb_views_nft_tokens_with_media_type_streamArgs, MeshContext>,
  /** fetch data from the table: "mb_views.top_stores" **/
  mb_views_top_stores: InContextSdkMethod<subscription_root['mb_views_top_stores'], subscription_rootmb_views_top_storesArgs, MeshContext>,
  /** fetch aggregated fields from the table: "mb_views.top_stores" **/
  mb_views_top_stores_aggregate: InContextSdkMethod<subscription_root['mb_views_top_stores_aggregate'], subscription_rootmb_views_top_stores_aggregateArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "mb_views.top_stores" **/
  mb_views_top_stores_stream: InContextSdkMethod<subscription_root['mb_views_top_stores_stream'], subscription_rootmb_views_top_stores_streamArgs, MeshContext>,
  /** fetch data from the table: "nft_activities" **/
  nft_activities: InContextSdkMethod<subscription_root['nft_activities'], subscription_rootnft_activitiesArgs, MeshContext>,
  /** fetch aggregated fields from the table: "nft_activities" **/
  nft_activities_aggregate: InContextSdkMethod<subscription_root['nft_activities_aggregate'], subscription_rootnft_activities_aggregateArgs, MeshContext>,
  /** fetch data from the table: "nft_activities" using primary key columns **/
  nft_activities_by_pk: InContextSdkMethod<subscription_root['nft_activities_by_pk'], subscription_rootnft_activities_by_pkArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "nft_activities" **/
  nft_activities_stream: InContextSdkMethod<subscription_root['nft_activities_stream'], subscription_rootnft_activities_streamArgs, MeshContext>,
  /** fetch data from the table: "nft_attributes" **/
  nft_attributes: InContextSdkMethod<subscription_root['nft_attributes'], subscription_rootnft_attributesArgs, MeshContext>,
  /** fetch aggregated fields from the table: "nft_attributes" **/
  nft_attributes_aggregate: InContextSdkMethod<subscription_root['nft_attributes_aggregate'], subscription_rootnft_attributes_aggregateArgs, MeshContext>,
  /** fetch data from the table: "nft_attributes" using primary key columns **/
  nft_attributes_by_pk: InContextSdkMethod<subscription_root['nft_attributes_by_pk'], subscription_rootnft_attributes_by_pkArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "nft_attributes" **/
  nft_attributes_stream: InContextSdkMethod<subscription_root['nft_attributes_stream'], subscription_rootnft_attributes_streamArgs, MeshContext>,
  /** fetch data from the table: "nft_contracts" **/
  nft_contracts: InContextSdkMethod<subscription_root['nft_contracts'], subscription_rootnft_contractsArgs, MeshContext>,
  /** fetch aggregated fields from the table: "nft_contracts" **/
  nft_contracts_aggregate: InContextSdkMethod<subscription_root['nft_contracts_aggregate'], subscription_rootnft_contracts_aggregateArgs, MeshContext>,
  /** fetch data from the table: "nft_contracts" using primary key columns **/
  nft_contracts_by_pk: InContextSdkMethod<subscription_root['nft_contracts_by_pk'], subscription_rootnft_contracts_by_pkArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "nft_contracts" **/
  nft_contracts_stream: InContextSdkMethod<subscription_root['nft_contracts_stream'], subscription_rootnft_contracts_streamArgs, MeshContext>,
  /** fetch data from the table: "nft_earnings" **/
  nft_earnings: InContextSdkMethod<subscription_root['nft_earnings'], subscription_rootnft_earningsArgs, MeshContext>,
  /** fetch aggregated fields from the table: "nft_earnings" **/
  nft_earnings_aggregate: InContextSdkMethod<subscription_root['nft_earnings_aggregate'], subscription_rootnft_earnings_aggregateArgs, MeshContext>,
  /** fetch data from the table: "nft_earnings" using primary key columns **/
  nft_earnings_by_pk: InContextSdkMethod<subscription_root['nft_earnings_by_pk'], subscription_rootnft_earnings_by_pkArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "nft_earnings" **/
  nft_earnings_stream: InContextSdkMethod<subscription_root['nft_earnings_stream'], subscription_rootnft_earnings_streamArgs, MeshContext>,
  /** An array relationship **/
  nft_listings: InContextSdkMethod<subscription_root['nft_listings'], subscription_rootnft_listingsArgs, MeshContext>,
  /** An aggregate relationship **/
  nft_listings_aggregate: InContextSdkMethod<subscription_root['nft_listings_aggregate'], subscription_rootnft_listings_aggregateArgs, MeshContext>,
  /** fetch data from the table: "nft_listings" using primary key columns **/
  nft_listings_by_pk: InContextSdkMethod<subscription_root['nft_listings_by_pk'], subscription_rootnft_listings_by_pkArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "nft_listings" **/
  nft_listings_stream: InContextSdkMethod<subscription_root['nft_listings_stream'], subscription_rootnft_listings_streamArgs, MeshContext>,
  /** fetch data from the table: "nft_metadata" **/
  nft_metadata: InContextSdkMethod<subscription_root['nft_metadata'], subscription_rootnft_metadataArgs, MeshContext>,
  /** fetch aggregated fields from the table: "nft_metadata" **/
  nft_metadata_aggregate: InContextSdkMethod<subscription_root['nft_metadata_aggregate'], subscription_rootnft_metadata_aggregateArgs, MeshContext>,
  /** fetch data from the table: "nft_metadata" using primary key columns **/
  nft_metadata_by_pk: InContextSdkMethod<subscription_root['nft_metadata_by_pk'], subscription_rootnft_metadata_by_pkArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "nft_metadata" **/
  nft_metadata_stream: InContextSdkMethod<subscription_root['nft_metadata_stream'], subscription_rootnft_metadata_streamArgs, MeshContext>,
  /** fetch data from the table: "nft_offers" **/
  nft_offers: InContextSdkMethod<subscription_root['nft_offers'], subscription_rootnft_offersArgs, MeshContext>,
  /** fetch aggregated fields from the table: "nft_offers" **/
  nft_offers_aggregate: InContextSdkMethod<subscription_root['nft_offers_aggregate'], subscription_rootnft_offers_aggregateArgs, MeshContext>,
  /** fetch data from the table: "nft_offers" using primary key columns **/
  nft_offers_by_pk: InContextSdkMethod<subscription_root['nft_offers_by_pk'], subscription_rootnft_offers_by_pkArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "nft_offers" **/
  nft_offers_stream: InContextSdkMethod<subscription_root['nft_offers_stream'], subscription_rootnft_offers_streamArgs, MeshContext>,
  /** fetch data from the table: "nft_tokens" **/
  nft_tokens: InContextSdkMethod<subscription_root['nft_tokens'], subscription_rootnft_tokensArgs, MeshContext>,
  /** fetch aggregated fields from the table: "nft_tokens" **/
  nft_tokens_aggregate: InContextSdkMethod<subscription_root['nft_tokens_aggregate'], subscription_rootnft_tokens_aggregateArgs, MeshContext>,
  /** fetch data from the table: "nft_tokens" using primary key columns **/
  nft_tokens_by_pk: InContextSdkMethod<subscription_root['nft_tokens_by_pk'], subscription_rootnft_tokens_by_pkArgs, MeshContext>,
  /** fetch data from the table in a streaming manner: "nft_tokens" **/
  nft_tokens_stream: InContextSdkMethod<subscription_root['nft_tokens_stream'], subscription_rootnft_tokens_streamArgs, MeshContext>
  };

  export type Context = {
      ["Mintbase"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
