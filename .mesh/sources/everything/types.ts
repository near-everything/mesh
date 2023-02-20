// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace EverythingTypes {
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
  Cursor: any;
  Datetime: any;
  JSON: any;
};

/** The root query type which gives access points into the data universe. */
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
  /** A list of `Thing` objects. */
  things: Array<Thing>;
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
};


/** The root query type which gives access points into the data universe. */
export type QueryattributesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<AttributesOrderBy>>;
  condition?: InputMaybe<AttributeCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QuerycharacteristicsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<CharacteristicsOrderBy>>;
  condition?: InputMaybe<CharacteristicCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QuerymediasArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<MediaOrderBy>>;
  condition?: InputMaybe<MediaCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryoptionsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<OptionsOrderBy>>;
  condition?: InputMaybe<OptionCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryrelationshipsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<RelationshipsOrderBy>>;
  condition?: InputMaybe<RelationshipCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QuerytagsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
  condition?: InputMaybe<TagCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QuerythingsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<ThingsOrderBy>>;
  condition?: InputMaybe<ThingCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryusersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
  condition?: InputMaybe<UserCondition>;
};


/** The root query type which gives access points into the data universe. */
export type QueryattributeArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryattributeByNameArgs = {
  name: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QuerycharacteristicArgs = {
  thingId: Scalars['String'];
  attributeId: Scalars['Int'];
  optionId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QuerymediaArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryoptionArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryrelationshipArgs = {
  attributeId: Scalars['Int'];
  optionId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QuerytagArgs = {
  thingId: Scalars['String'];
  mediaId: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QuerythingArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryuserArgs = {
  id: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryuserByUsernameArgs = {
  username: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryuserByWalletArgs = {
  wallet: Scalars['String'];
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

export type Thing = {
  createdAt: Scalars['Datetime'];
  updatedAt: Scalars['Datetime'];
  id: Scalars['String'];
  ownerId: Scalars['String'];
  metadata?: Maybe<Scalars['JSON']>;
  privacyType?: Maybe<PrivacyType>;
  /** A list of `Tag` objects. */
  tags: Array<Tag>;
  /** Reads and enables pagination through a set of `Characteristic`. */
  characteristics: CharacteristicsConnection;
};


export type ThingtagsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<TagsOrderBy>>;
  condition?: InputMaybe<TagCondition>;
};


export type ThingcharacteristicsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  before?: InputMaybe<Scalars['Cursor']>;
  after?: InputMaybe<Scalars['Cursor']>;
  orderBy?: InputMaybe<Array<CharacteristicsOrderBy>>;
  condition?: InputMaybe<CharacteristicCondition>;
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

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  /** Updates a single `Thing` using a unique key and a patch. */
  updateThing?: Maybe<UpdateThingPayload>;
  createThing?: Maybe<CreateThingPayload>;
  createMedia?: Maybe<CreateMediaPayload>;
  proposeAttribute?: Maybe<ProposeAttributePayload>;
  createAttribute?: Maybe<CreateAttributePayload>;
  proposeOption?: Maybe<ProposeOptionPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationupdateThingArgs = {
  input: UpdateThingInput;
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

/** All input for the `updateThing` mutation. */
export type UpdateThingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Thing` being updated. */
  patch: ThingPatch;
  id: Scalars['String'];
};

/** Represents an update to a `Thing`. Fields that are set will be updated. */
export type ThingPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  id?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['JSON']>;
  privacyType?: InputMaybe<PrivacyType>;
};

/** The output of our update `Thing` mutation. */
export type UpdateThingPayload = {
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Thing` that was updated by this mutation. */
  thing?: Maybe<Thing>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** An edge for our `Thing`. May be used by Relay 1. */
  thingEdge?: Maybe<ThingsEdge>;
};


/** The output of our update `Thing` mutation. */
export type UpdateThingPayloadthingEdgeArgs = {
  orderBy?: InputMaybe<Array<ThingsOrderBy>>;
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

  export type QuerySdk = {
      /** Reads and enables pagination through a set of `Attribute`. **/
  attributes: InContextSdkMethod<Query['attributes'], QueryattributesArgs, MeshContext>,
  /** Reads and enables pagination through a set of `Characteristic`. **/
  characteristics: InContextSdkMethod<Query['characteristics'], QuerycharacteristicsArgs, MeshContext>,
  /** Reads and enables pagination through a set of `Media`. **/
  medias: InContextSdkMethod<Query['medias'], QuerymediasArgs, MeshContext>,
  /** Reads and enables pagination through a set of `Option`. **/
  options: InContextSdkMethod<Query['options'], QueryoptionsArgs, MeshContext>,
  /** Reads and enables pagination through a set of `Relationship`. **/
  relationships: InContextSdkMethod<Query['relationships'], QueryrelationshipsArgs, MeshContext>,
  /** Reads and enables pagination through a set of `Tag`. **/
  tags: InContextSdkMethod<Query['tags'], QuerytagsArgs, MeshContext>,
  /** A list of `Thing` objects. **/
  things: InContextSdkMethod<Query['things'], QuerythingsArgs, MeshContext>,
  /** Reads and enables pagination through a set of `User`. **/
  users: InContextSdkMethod<Query['users'], QueryusersArgs, MeshContext>,
  /** null **/
  attribute: InContextSdkMethod<Query['attribute'], QueryattributeArgs, MeshContext>,
  /** null **/
  attributeByName: InContextSdkMethod<Query['attributeByName'], QueryattributeByNameArgs, MeshContext>,
  /** null **/
  characteristic: InContextSdkMethod<Query['characteristic'], QuerycharacteristicArgs, MeshContext>,
  /** null **/
  media: InContextSdkMethod<Query['media'], QuerymediaArgs, MeshContext>,
  /** null **/
  option: InContextSdkMethod<Query['option'], QueryoptionArgs, MeshContext>,
  /** null **/
  relationship: InContextSdkMethod<Query['relationship'], QueryrelationshipArgs, MeshContext>,
  /** null **/
  tag: InContextSdkMethod<Query['tag'], QuerytagArgs, MeshContext>,
  /** null **/
  thing: InContextSdkMethod<Query['thing'], QuerythingArgs, MeshContext>,
  /** null **/
  user: InContextSdkMethod<Query['user'], QueryuserArgs, MeshContext>,
  /** null **/
  userByUsername: InContextSdkMethod<Query['userByUsername'], QueryuserByUsernameArgs, MeshContext>,
  /** null **/
  userByWallet: InContextSdkMethod<Query['userByWallet'], QueryuserByWalletArgs, MeshContext>
  };

  export type MutationSdk = {
      /** Updates a single `Thing` using a unique key and a patch. **/
  updateThing: InContextSdkMethod<Mutation['updateThing'], MutationupdateThingArgs, MeshContext>,
  /** null **/
  createThing: InContextSdkMethod<Mutation['createThing'], MutationcreateThingArgs, MeshContext>,
  /** null **/
  createMedia: InContextSdkMethod<Mutation['createMedia'], MutationcreateMediaArgs, MeshContext>,
  /** null **/
  proposeAttribute: InContextSdkMethod<Mutation['proposeAttribute'], MutationproposeAttributeArgs, MeshContext>,
  /** null **/
  createAttribute: InContextSdkMethod<Mutation['createAttribute'], MutationcreateAttributeArgs, MeshContext>,
  /** null **/
  proposeOption: InContextSdkMethod<Mutation['proposeOption'], MutationproposeOptionArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["everything"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
