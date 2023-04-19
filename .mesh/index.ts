// @ts-nocheck
import { GraphQLResolveInfo, SelectionSetNode, FieldNode } from 'graphql';
import type { GetMeshOptions } from '@graphql-mesh/runtime';
import type { YamlConfig } from '@graphql-mesh/types';
import { PubSub } from '@graphql-mesh/utils';
import { DefaultLogger } from '@graphql-mesh/utils';
import MeshCache from "@graphql-mesh/cache-localforage";
import { fetch as fetchFn } from '@whatwg-node/fetch';

import { MeshResolvedSource } from '@graphql-mesh/runtime';
import { MeshTransform, MeshPlugin } from '@graphql-mesh/types';
import GraphqlHandler from "@graphql-mesh/graphql"
import { useCSRFPrevention } from "@graphql-yoga/plugin-csrf-prevention";
import BareMerger from "@graphql-mesh/merger-bare";
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { ThingsTypes } from './sources/Things/types';
import * as importedModule$0 from "./sources/Things/introspectionSchema";
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
};

/** Below the list of queries available for database. */
export type Query = {
  /** Retrieves current user */
  me?: Maybe<FiberyUser>;
  /**
   * Find ThingsDocument records.
   *
   * By default, offset equals to 0 and limit equals to 100
   *
   * ```{findDocuments{id,name}}```
   */
  findDocuments?: Maybe<Array<Maybe<ThingsDocument>>>;
  /**
   * Find ThingsEvent records.
   *
   * By default, offset equals to 0 and limit equals to 100
   *
   * ```{findEvents{id,name}}```
   */
  findEvents?: Maybe<Array<Maybe<ThingsEvent>>>;
  /**
   * Find ThingsIdea records.
   *
   * By default, offset equals to 0 and limit equals to 100
   *
   * ```{findIdeas{id,name}}```
   */
  findIdeas?: Maybe<Array<Maybe<ThingsIdea>>>;
  /**
   * Find ThingsPerson records.
   *
   * By default, offset equals to 0 and limit equals to 100
   *
   * ```{findPeople{id,name}}```
   */
  findPeople?: Maybe<Array<Maybe<ThingsPerson>>>;
  /**
   * Find ThingsPost records.
   *
   * By default, offset equals to 0 and limit equals to 100
   *
   * ```{findPosts{id,name}}```
   */
  findPosts?: Maybe<Array<Maybe<ThingsPost>>>;
  /**
   * Find ThingsThing records.
   *
   * By default, offset equals to 0 and limit equals to 100
   *
   * ```{findThings{id,name}}```
   */
  findThings?: Maybe<Array<Maybe<ThingsThing>>>;
};


/** Below the list of queries available for database. */
export type QueryfindDocumentsArgs = {
  orderBy?: InputMaybe<ThingsDocumentOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<IDFilter>;
  publicId?: InputMaybe<StringFilter>;
  creationDate?: InputMaybe<StringFilter>;
  modificationDate?: InputMaybe<StringFilter>;
  rank?: InputMaybe<FloatFilter>;
  createdBy?: InputMaybe<FiberyUserFilter>;
  author?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};


/** Below the list of queries available for database. */
export type QueryfindEventsArgs = {
  orderBy?: InputMaybe<ThingsEventOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<IDFilter>;
  publicId?: InputMaybe<StringFilter>;
  creationDate?: InputMaybe<StringFilter>;
  modificationDate?: InputMaybe<StringFilter>;
  rank?: InputMaybe<FloatFilter>;
  createdBy?: InputMaybe<FiberyUserFilter>;
  allDay?: InputMaybe<BooleanFilter>;
  endStr?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  source?: InputMaybe<StringFilter>;
  startStr?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};


/** Below the list of queries available for database. */
export type QueryfindIdeasArgs = {
  orderBy?: InputMaybe<ThingsIdeaOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<IDFilter>;
  publicId?: InputMaybe<StringFilter>;
  creationDate?: InputMaybe<StringFilter>;
  modificationDate?: InputMaybe<StringFilter>;
  rank?: InputMaybe<FloatFilter>;
  createdBy?: InputMaybe<FiberyUserFilter>;
  name?: InputMaybe<StringFilter>;
};


/** Below the list of queries available for database. */
export type QueryfindPeopleArgs = {
  orderBy?: InputMaybe<ThingsPersonOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<IDFilter>;
  publicId?: InputMaybe<StringFilter>;
  creationDate?: InputMaybe<StringFilter>;
  modificationDate?: InputMaybe<StringFilter>;
  rank?: InputMaybe<FloatFilter>;
  createdBy?: InputMaybe<FiberyUserFilter>;
  accountId?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  widgetSrc?: InputMaybe<StringFilter>;
};


/** Below the list of queries available for database. */
export type QueryfindPostsArgs = {
  orderBy?: InputMaybe<ThingsPostOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<IDFilter>;
  publicId?: InputMaybe<StringFilter>;
  creationDate?: InputMaybe<StringFilter>;
  modificationDate?: InputMaybe<StringFilter>;
  rank?: InputMaybe<FloatFilter>;
  createdBy?: InputMaybe<FiberyUserFilter>;
  name?: InputMaybe<StringFilter>;
};


/** Below the list of queries available for database. */
export type QueryfindThingsArgs = {
  orderBy?: InputMaybe<ThingsThingOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<IDFilter>;
  publicId?: InputMaybe<StringFilter>;
  creationDate?: InputMaybe<StringFilter>;
  modificationDate?: InputMaybe<StringFilter>;
  rank?: InputMaybe<FloatFilter>;
  createdBy?: InputMaybe<FiberyUserFilter>;
  name?: InputMaybe<StringFilter>;
};

/** Available fields and relations for Things/Document */
export type ThingsDocument = {
  /** fibery/id */
  id?: Maybe<Scalars['ID']>;
  /** fibery/public-id */
  publicId?: Maybe<Scalars['String']>;
  /** fibery/creation-date */
  creationDate?: Maybe<Scalars['String']>;
  /** fibery/modification-date */
  modificationDate?: Maybe<Scalars['String']>;
  /** fibery/rank */
  rank?: Maybe<Scalars['Float']>;
  /** fibery/created-by */
  createdBy?: Maybe<FiberyUser>;
  /** Things/Author */
  author?: Maybe<Scalars['String']>;
  /** Things/description */
  description?: Maybe<RichField>;
  /** Things/name */
  name?: Maybe<Scalars['String']>;
};

export type ThingsDocumentInput = {
  /** fibery/rank */
  rank?: InputMaybe<Scalars['Float']>;
  /** Things/Author */
  author?: InputMaybe<Scalars['String']>;
  /** Things/name */
  name?: InputMaybe<Scalars['String']>;
};

export type ThingsDocumentOrder = {
  /** fibery/id */
  id?: InputMaybe<Order>;
  /** fibery/public-id */
  publicId?: InputMaybe<Order>;
  /** fibery/creation-date */
  creationDate?: InputMaybe<Order>;
  /** fibery/modification-date */
  modificationDate?: InputMaybe<Order>;
  /** fibery/rank */
  rank?: InputMaybe<Order>;
  /** fibery/created-by */
  createdBy?: InputMaybe<FiberyUserOrder>;
  /** Things/Author */
  author?: InputMaybe<Order>;
  /** Things/name */
  name?: InputMaybe<Order>;
};

/** Available operations which can be done with found documents via provided query or created */
export type ThingsDocumentOperations = {
  /** Create. Create a new Document and specify field values */
  create?: Maybe<MutationResult>;
  /** Batch Create. Create a new Document and specify field values */
  createBatch?: Maybe<MutationResult>;
  /** Update. Set new values for fields */
  update?: Maybe<MutationResult>;
  /** Batch Update. Set new values for fields */
  updateBatch?: Maybe<MutationResult>;
  /** Delete. Delete Document */
  delete?: Maybe<MutationResult>;
  /** Script. Execute Javascript code */
  script?: Maybe<MutationResult>;
  /** Batch Script. Execute Javascript code */
  scriptBatch?: Maybe<MutationResult>;
  /** Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  appendContentToDescription?: Maybe<MutationResult>;
  /** Batch Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  appendContentToDescriptionBatch?: Maybe<MutationResult>;
  /** Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  prependContentToDescription?: Maybe<MutationResult>;
  /** Batch Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  prependContentToDescriptionBatch?: Maybe<MutationResult>;
  /** Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  overwriteDescription?: Maybe<MutationResult>;
  /** Batch Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  overwriteDescriptionBatch?: Maybe<MutationResult>;
  /** Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyCreatedBy?: Maybe<MutationResult>;
  /** Batch Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyCreatedByBatch?: Maybe<MutationResult>;
  /** Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyUsers?: Maybe<MutationResult>;
  /** Batch Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyUsersBatch?: Maybe<MutationResult>;
  /** countOfEntities. Count of found or created documents to be modified */
  countOfEntities?: Maybe<Scalars['Int']>;
  /** listEntities. List of found or created documents to be modified */
  listEntities?: Maybe<Array<Maybe<Entity>>>;
};


/** Available operations which can be done with found documents via provided query or created */
export type ThingsDocumentOperationscreateArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  author?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found documents via provided query or created */
export type ThingsDocumentOperationscreateBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsDocumentInput>>>;
};


/** Available operations which can be done with found documents via provided query or created */
export type ThingsDocumentOperationsupdateArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  author?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found documents via provided query or created */
export type ThingsDocumentOperationsupdateBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsDocumentInput>>>;
};


/** Available operations which can be done with found documents via provided query or created */
export type ThingsDocumentOperationsscriptArgs = {
  script?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found documents via provided query or created */
export type ThingsDocumentOperationsscriptBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ScriptInput>>>;
};


/** Available operations which can be done with found documents via provided query or created */
export type ThingsDocumentOperationsappendContentToDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found documents via provided query or created */
export type ThingsDocumentOperationsappendContentToDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<AppendContentToDescriptionInput>>>;
};


/** Available operations which can be done with found documents via provided query or created */
export type ThingsDocumentOperationsprependContentToDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found documents via provided query or created */
export type ThingsDocumentOperationsprependContentToDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<PrependContentToDescriptionInput>>>;
};


/** Available operations which can be done with found documents via provided query or created */
export type ThingsDocumentOperationsoverwriteDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found documents via provided query or created */
export type ThingsDocumentOperationsoverwriteDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<OverwriteDescriptionInput>>>;
};


/** Available operations which can be done with found documents via provided query or created */
export type ThingsDocumentOperationsnotifyCreatedByArgs = {
  subject?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  notifyAuthor?: InputMaybe<Scalars['Boolean']>;
};


/** Available operations which can be done with found documents via provided query or created */
export type ThingsDocumentOperationsnotifyCreatedByBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<NotifyCreatedByInput>>>;
};


/** Available operations which can be done with found documents via provided query or created */
export type ThingsDocumentOperationsnotifyUsersArgs = {
  to?: InputMaybe<Array<InputMaybe<FiberyUserFilter>>>;
  subject?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  notifyAuthor?: InputMaybe<Scalars['Boolean']>;
  noEmptySend?: InputMaybe<Scalars['Boolean']>;
};


/** Available operations which can be done with found documents via provided query or created */
export type ThingsDocumentOperationsnotifyUsersBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<NotifyUsersInput>>>;
};

/** Filter for Things/Document */
export type ThingsDocumentFilter = {
  orderBy?: InputMaybe<ThingsDocumentOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** fibery/id */
  id?: InputMaybe<IDFilter>;
  /** fibery/public-id */
  publicId?: InputMaybe<StringFilter>;
  /** fibery/creation-date */
  creationDate?: InputMaybe<StringFilter>;
  /** fibery/modification-date */
  modificationDate?: InputMaybe<StringFilter>;
  /** fibery/rank */
  rank?: InputMaybe<FloatFilter>;
  /** fibery/created-by */
  createdBy?: InputMaybe<FiberyUserFilter>;
  /** Things/Author */
  author?: InputMaybe<StringFilter>;
  /** Things/name */
  name?: InputMaybe<StringFilter>;
};

export type ThingsDocumentCollectionFilter = {
  isEmpty?: InputMaybe<Scalars['Boolean']>;
  contains?: InputMaybe<Array<InputMaybe<ThingsDocumentFilter>>>;
  containsAny?: InputMaybe<Array<InputMaybe<ThingsDocumentFilter>>>;
  notContains?: InputMaybe<Array<InputMaybe<ThingsDocumentFilter>>>;
  notContainsAny?: InputMaybe<Array<InputMaybe<ThingsDocumentFilter>>>;
};

/** Available fields and relations for Things/Event */
export type ThingsEvent = {
  /** fibery/id */
  id?: Maybe<Scalars['ID']>;
  /** fibery/public-id */
  publicId?: Maybe<Scalars['String']>;
  /** fibery/creation-date */
  creationDate?: Maybe<Scalars['String']>;
  /** fibery/modification-date */
  modificationDate?: Maybe<Scalars['String']>;
  /** fibery/rank */
  rank?: Maybe<Scalars['Float']>;
  /** fibery/created-by */
  createdBy?: Maybe<FiberyUser>;
  /** Things/allDay */
  allDay?: Maybe<Scalars['Boolean']>;
  /** Things/description */
  description?: Maybe<RichField>;
  /** Things/endStr */
  endStr?: Maybe<Scalars['String']>;
  /** Things/name */
  name?: Maybe<Scalars['String']>;
  /** Things/source */
  source?: Maybe<Scalars['String']>;
  /** Things/startStr */
  startStr?: Maybe<Scalars['String']>;
  /** Things/title */
  title?: Maybe<Scalars['String']>;
  /** Things/url */
  url?: Maybe<Scalars['String']>;
};

export type ThingsEventInput = {
  /** fibery/rank */
  rank?: InputMaybe<Scalars['Float']>;
  /** Things/allDay */
  allDay?: InputMaybe<Scalars['Boolean']>;
  /** Things/endStr */
  endStr?: InputMaybe<Scalars['String']>;
  /** Things/name */
  name?: InputMaybe<Scalars['String']>;
  /** Things/source */
  source?: InputMaybe<Scalars['String']>;
  /** Things/startStr */
  startStr?: InputMaybe<Scalars['String']>;
  /** Things/title */
  title?: InputMaybe<Scalars['String']>;
  /** Things/url */
  url?: InputMaybe<Scalars['String']>;
};

export type ThingsEventOrder = {
  /** fibery/id */
  id?: InputMaybe<Order>;
  /** fibery/public-id */
  publicId?: InputMaybe<Order>;
  /** fibery/creation-date */
  creationDate?: InputMaybe<Order>;
  /** fibery/modification-date */
  modificationDate?: InputMaybe<Order>;
  /** fibery/rank */
  rank?: InputMaybe<Order>;
  /** fibery/created-by */
  createdBy?: InputMaybe<FiberyUserOrder>;
  /** Things/allDay */
  allDay?: InputMaybe<Order>;
  /** Things/endStr */
  endStr?: InputMaybe<Order>;
  /** Things/name */
  name?: InputMaybe<Order>;
  /** Things/source */
  source?: InputMaybe<Order>;
  /** Things/startStr */
  startStr?: InputMaybe<Order>;
  /** Things/title */
  title?: InputMaybe<Order>;
  /** Things/url */
  url?: InputMaybe<Order>;
};

/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperations = {
  /** Create. Create a new Event and specify field values */
  create?: Maybe<MutationResult>;
  /** Batch Create. Create a new Event and specify field values */
  createBatch?: Maybe<MutationResult>;
  /** Update. Set new values for fields */
  update?: Maybe<MutationResult>;
  /** Batch Update. Set new values for fields */
  updateBatch?: Maybe<MutationResult>;
  /** Delete. Delete Event */
  delete?: Maybe<MutationResult>;
  /** Script. Execute Javascript code */
  script?: Maybe<MutationResult>;
  /** Batch Script. Execute Javascript code */
  scriptBatch?: Maybe<MutationResult>;
  /** Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  appendContentToDescription?: Maybe<MutationResult>;
  /** Batch Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  appendContentToDescriptionBatch?: Maybe<MutationResult>;
  /** Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  prependContentToDescription?: Maybe<MutationResult>;
  /** Batch Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  prependContentToDescriptionBatch?: Maybe<MutationResult>;
  /** Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  overwriteDescription?: Maybe<MutationResult>;
  /** Batch Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  overwriteDescriptionBatch?: Maybe<MutationResult>;
  /** Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyCreatedBy?: Maybe<MutationResult>;
  /** Batch Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyCreatedByBatch?: Maybe<MutationResult>;
  /** Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyUsers?: Maybe<MutationResult>;
  /** Batch Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyUsersBatch?: Maybe<MutationResult>;
  /** countOfEntities. Count of found or created events to be modified */
  countOfEntities?: Maybe<Scalars['Int']>;
  /** listEntities. List of found or created events to be modified */
  listEntities?: Maybe<Array<Maybe<Entity>>>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationscreateArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  allDay?: InputMaybe<Scalars['Boolean']>;
  endStr?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  startStr?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationscreateBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsEventInput>>>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationsupdateArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  allDay?: InputMaybe<Scalars['Boolean']>;
  endStr?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  startStr?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationsupdateBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsEventInput>>>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationsscriptArgs = {
  script?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationsscriptBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ScriptInput>>>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationsappendContentToDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationsappendContentToDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<AppendContentToDescriptionInput>>>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationsprependContentToDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationsprependContentToDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<PrependContentToDescriptionInput>>>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationsoverwriteDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationsoverwriteDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<OverwriteDescriptionInput>>>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationsnotifyCreatedByArgs = {
  subject?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  notifyAuthor?: InputMaybe<Scalars['Boolean']>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationsnotifyCreatedByBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<NotifyCreatedByInput>>>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationsnotifyUsersArgs = {
  to?: InputMaybe<Array<InputMaybe<FiberyUserFilter>>>;
  subject?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  notifyAuthor?: InputMaybe<Scalars['Boolean']>;
  noEmptySend?: InputMaybe<Scalars['Boolean']>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationsnotifyUsersBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<NotifyUsersInput>>>;
};

/** Filter for Things/Event */
export type ThingsEventFilter = {
  orderBy?: InputMaybe<ThingsEventOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** fibery/id */
  id?: InputMaybe<IDFilter>;
  /** fibery/public-id */
  publicId?: InputMaybe<StringFilter>;
  /** fibery/creation-date */
  creationDate?: InputMaybe<StringFilter>;
  /** fibery/modification-date */
  modificationDate?: InputMaybe<StringFilter>;
  /** fibery/rank */
  rank?: InputMaybe<FloatFilter>;
  /** fibery/created-by */
  createdBy?: InputMaybe<FiberyUserFilter>;
  /** Things/allDay */
  allDay?: InputMaybe<BooleanFilter>;
  /** Things/endStr */
  endStr?: InputMaybe<StringFilter>;
  /** Things/name */
  name?: InputMaybe<StringFilter>;
  /** Things/source */
  source?: InputMaybe<StringFilter>;
  /** Things/startStr */
  startStr?: InputMaybe<StringFilter>;
  /** Things/title */
  title?: InputMaybe<StringFilter>;
  /** Things/url */
  url?: InputMaybe<StringFilter>;
};

export type ThingsEventCollectionFilter = {
  isEmpty?: InputMaybe<Scalars['Boolean']>;
  contains?: InputMaybe<Array<InputMaybe<ThingsEventFilter>>>;
  containsAny?: InputMaybe<Array<InputMaybe<ThingsEventFilter>>>;
  notContains?: InputMaybe<Array<InputMaybe<ThingsEventFilter>>>;
  notContainsAny?: InputMaybe<Array<InputMaybe<ThingsEventFilter>>>;
};

/** Available fields and relations for Things/Idea */
export type ThingsIdea = {
  /** fibery/id */
  id?: Maybe<Scalars['ID']>;
  /** fibery/public-id */
  publicId?: Maybe<Scalars['String']>;
  /** fibery/creation-date */
  creationDate?: Maybe<Scalars['String']>;
  /** fibery/modification-date */
  modificationDate?: Maybe<Scalars['String']>;
  /** fibery/rank */
  rank?: Maybe<Scalars['Float']>;
  /** fibery/created-by */
  createdBy?: Maybe<FiberyUser>;
  /** Things/description */
  description?: Maybe<RichField>;
  /** Things/name */
  name?: Maybe<Scalars['String']>;
};

export type ThingsIdeaInput = {
  /** fibery/rank */
  rank?: InputMaybe<Scalars['Float']>;
  /** Things/name */
  name?: InputMaybe<Scalars['String']>;
};

export type ThingsIdeaOrder = {
  /** fibery/id */
  id?: InputMaybe<Order>;
  /** fibery/public-id */
  publicId?: InputMaybe<Order>;
  /** fibery/creation-date */
  creationDate?: InputMaybe<Order>;
  /** fibery/modification-date */
  modificationDate?: InputMaybe<Order>;
  /** fibery/rank */
  rank?: InputMaybe<Order>;
  /** fibery/created-by */
  createdBy?: InputMaybe<FiberyUserOrder>;
  /** Things/name */
  name?: InputMaybe<Order>;
};

/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperations = {
  /** Create. Create a new Idea and specify field values */
  create?: Maybe<MutationResult>;
  /** Batch Create. Create a new Idea and specify field values */
  createBatch?: Maybe<MutationResult>;
  /** Update. Set new values for fields */
  update?: Maybe<MutationResult>;
  /** Batch Update. Set new values for fields */
  updateBatch?: Maybe<MutationResult>;
  /** Delete. Delete Idea */
  delete?: Maybe<MutationResult>;
  /** Script. Execute Javascript code */
  script?: Maybe<MutationResult>;
  /** Batch Script. Execute Javascript code */
  scriptBatch?: Maybe<MutationResult>;
  /** Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  appendContentToDescription?: Maybe<MutationResult>;
  /** Batch Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  appendContentToDescriptionBatch?: Maybe<MutationResult>;
  /** Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  prependContentToDescription?: Maybe<MutationResult>;
  /** Batch Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  prependContentToDescriptionBatch?: Maybe<MutationResult>;
  /** Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  overwriteDescription?: Maybe<MutationResult>;
  /** Batch Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  overwriteDescriptionBatch?: Maybe<MutationResult>;
  /** Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyCreatedBy?: Maybe<MutationResult>;
  /** Batch Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyCreatedByBatch?: Maybe<MutationResult>;
  /** Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyUsers?: Maybe<MutationResult>;
  /** Batch Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyUsersBatch?: Maybe<MutationResult>;
  /** countOfEntities. Count of found or created ideas to be modified */
  countOfEntities?: Maybe<Scalars['Int']>;
  /** listEntities. List of found or created ideas to be modified */
  listEntities?: Maybe<Array<Maybe<Entity>>>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationscreateArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationscreateBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsIdeaInput>>>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationsupdateArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationsupdateBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsIdeaInput>>>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationsscriptArgs = {
  script?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationsscriptBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ScriptInput>>>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationsappendContentToDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationsappendContentToDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<AppendContentToDescriptionInput>>>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationsprependContentToDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationsprependContentToDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<PrependContentToDescriptionInput>>>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationsoverwriteDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationsoverwriteDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<OverwriteDescriptionInput>>>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationsnotifyCreatedByArgs = {
  subject?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  notifyAuthor?: InputMaybe<Scalars['Boolean']>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationsnotifyCreatedByBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<NotifyCreatedByInput>>>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationsnotifyUsersArgs = {
  to?: InputMaybe<Array<InputMaybe<FiberyUserFilter>>>;
  subject?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  notifyAuthor?: InputMaybe<Scalars['Boolean']>;
  noEmptySend?: InputMaybe<Scalars['Boolean']>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationsnotifyUsersBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<NotifyUsersInput>>>;
};

/** Filter for Things/Idea */
export type ThingsIdeaFilter = {
  orderBy?: InputMaybe<ThingsIdeaOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** fibery/id */
  id?: InputMaybe<IDFilter>;
  /** fibery/public-id */
  publicId?: InputMaybe<StringFilter>;
  /** fibery/creation-date */
  creationDate?: InputMaybe<StringFilter>;
  /** fibery/modification-date */
  modificationDate?: InputMaybe<StringFilter>;
  /** fibery/rank */
  rank?: InputMaybe<FloatFilter>;
  /** fibery/created-by */
  createdBy?: InputMaybe<FiberyUserFilter>;
  /** Things/name */
  name?: InputMaybe<StringFilter>;
};

export type ThingsIdeaCollectionFilter = {
  isEmpty?: InputMaybe<Scalars['Boolean']>;
  contains?: InputMaybe<Array<InputMaybe<ThingsIdeaFilter>>>;
  containsAny?: InputMaybe<Array<InputMaybe<ThingsIdeaFilter>>>;
  notContains?: InputMaybe<Array<InputMaybe<ThingsIdeaFilter>>>;
  notContainsAny?: InputMaybe<Array<InputMaybe<ThingsIdeaFilter>>>;
};

/** Available fields and relations for Things/Person */
export type ThingsPerson = {
  /** fibery/id */
  id?: Maybe<Scalars['ID']>;
  /** fibery/public-id */
  publicId?: Maybe<Scalars['String']>;
  /** fibery/creation-date */
  creationDate?: Maybe<Scalars['String']>;
  /** fibery/modification-date */
  modificationDate?: Maybe<Scalars['String']>;
  /** fibery/rank */
  rank?: Maybe<Scalars['Float']>;
  /** fibery/created-by */
  createdBy?: Maybe<FiberyUser>;
  /** Things/accountId */
  accountId?: Maybe<Scalars['String']>;
  /** Things/description */
  description?: Maybe<RichField>;
  /** Things/email */
  email?: Maybe<Scalars['String']>;
  /** Things/name */
  name?: Maybe<Scalars['String']>;
  /** Things/widgetSrc */
  widgetSrc?: Maybe<Scalars['String']>;
};

export type ThingsPersonInput = {
  /** fibery/rank */
  rank?: InputMaybe<Scalars['Float']>;
  /** Things/accountId */
  accountId?: InputMaybe<Scalars['String']>;
  /** Things/email */
  email?: InputMaybe<Scalars['String']>;
  /** Things/name */
  name?: InputMaybe<Scalars['String']>;
  /** Things/widgetSrc */
  widgetSrc?: InputMaybe<Scalars['String']>;
};

export type ThingsPersonOrder = {
  /** fibery/id */
  id?: InputMaybe<Order>;
  /** fibery/public-id */
  publicId?: InputMaybe<Order>;
  /** fibery/creation-date */
  creationDate?: InputMaybe<Order>;
  /** fibery/modification-date */
  modificationDate?: InputMaybe<Order>;
  /** fibery/rank */
  rank?: InputMaybe<Order>;
  /** fibery/created-by */
  createdBy?: InputMaybe<FiberyUserOrder>;
  /** Things/accountId */
  accountId?: InputMaybe<Order>;
  /** Things/email */
  email?: InputMaybe<Order>;
  /** Things/name */
  name?: InputMaybe<Order>;
  /** Things/widgetSrc */
  widgetSrc?: InputMaybe<Order>;
};

/** Available operations which can be done with found people via provided query or created */
export type ThingsPersonOperations = {
  /** Create. Create a new Person and specify field values */
  create?: Maybe<MutationResult>;
  /** Batch Create. Create a new Person and specify field values */
  createBatch?: Maybe<MutationResult>;
  /** Update. Set new values for fields */
  update?: Maybe<MutationResult>;
  /** Batch Update. Set new values for fields */
  updateBatch?: Maybe<MutationResult>;
  /** Delete. Delete Person */
  delete?: Maybe<MutationResult>;
  /** Script. Execute Javascript code */
  script?: Maybe<MutationResult>;
  /** Batch Script. Execute Javascript code */
  scriptBatch?: Maybe<MutationResult>;
  /** Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  appendContentToDescription?: Maybe<MutationResult>;
  /** Batch Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  appendContentToDescriptionBatch?: Maybe<MutationResult>;
  /** Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  prependContentToDescription?: Maybe<MutationResult>;
  /** Batch Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  prependContentToDescriptionBatch?: Maybe<MutationResult>;
  /** Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  overwriteDescription?: Maybe<MutationResult>;
  /** Batch Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  overwriteDescriptionBatch?: Maybe<MutationResult>;
  /** Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyCreatedBy?: Maybe<MutationResult>;
  /** Batch Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyCreatedByBatch?: Maybe<MutationResult>;
  /** Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyUsers?: Maybe<MutationResult>;
  /** Batch Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyUsersBatch?: Maybe<MutationResult>;
  /** countOfEntities. Count of found or created people to be modified */
  countOfEntities?: Maybe<Scalars['Int']>;
  /** listEntities. List of found or created people to be modified */
  listEntities?: Maybe<Array<Maybe<Entity>>>;
};


/** Available operations which can be done with found people via provided query or created */
export type ThingsPersonOperationscreateArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  accountId?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  widgetSrc?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found people via provided query or created */
export type ThingsPersonOperationscreateBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsPersonInput>>>;
};


/** Available operations which can be done with found people via provided query or created */
export type ThingsPersonOperationsupdateArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  accountId?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  widgetSrc?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found people via provided query or created */
export type ThingsPersonOperationsupdateBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsPersonInput>>>;
};


/** Available operations which can be done with found people via provided query or created */
export type ThingsPersonOperationsscriptArgs = {
  script?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found people via provided query or created */
export type ThingsPersonOperationsscriptBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ScriptInput>>>;
};


/** Available operations which can be done with found people via provided query or created */
export type ThingsPersonOperationsappendContentToDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found people via provided query or created */
export type ThingsPersonOperationsappendContentToDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<AppendContentToDescriptionInput>>>;
};


/** Available operations which can be done with found people via provided query or created */
export type ThingsPersonOperationsprependContentToDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found people via provided query or created */
export type ThingsPersonOperationsprependContentToDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<PrependContentToDescriptionInput>>>;
};


/** Available operations which can be done with found people via provided query or created */
export type ThingsPersonOperationsoverwriteDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found people via provided query or created */
export type ThingsPersonOperationsoverwriteDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<OverwriteDescriptionInput>>>;
};


/** Available operations which can be done with found people via provided query or created */
export type ThingsPersonOperationsnotifyCreatedByArgs = {
  subject?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  notifyAuthor?: InputMaybe<Scalars['Boolean']>;
};


/** Available operations which can be done with found people via provided query or created */
export type ThingsPersonOperationsnotifyCreatedByBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<NotifyCreatedByInput>>>;
};


/** Available operations which can be done with found people via provided query or created */
export type ThingsPersonOperationsnotifyUsersArgs = {
  to?: InputMaybe<Array<InputMaybe<FiberyUserFilter>>>;
  subject?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  notifyAuthor?: InputMaybe<Scalars['Boolean']>;
  noEmptySend?: InputMaybe<Scalars['Boolean']>;
};


/** Available operations which can be done with found people via provided query or created */
export type ThingsPersonOperationsnotifyUsersBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<NotifyUsersInput>>>;
};

/** Filter for Things/Person */
export type ThingsPersonFilter = {
  orderBy?: InputMaybe<ThingsPersonOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** fibery/id */
  id?: InputMaybe<IDFilter>;
  /** fibery/public-id */
  publicId?: InputMaybe<StringFilter>;
  /** fibery/creation-date */
  creationDate?: InputMaybe<StringFilter>;
  /** fibery/modification-date */
  modificationDate?: InputMaybe<StringFilter>;
  /** fibery/rank */
  rank?: InputMaybe<FloatFilter>;
  /** fibery/created-by */
  createdBy?: InputMaybe<FiberyUserFilter>;
  /** Things/accountId */
  accountId?: InputMaybe<StringFilter>;
  /** Things/email */
  email?: InputMaybe<StringFilter>;
  /** Things/name */
  name?: InputMaybe<StringFilter>;
  /** Things/widgetSrc */
  widgetSrc?: InputMaybe<StringFilter>;
};

export type ThingsPersonCollectionFilter = {
  isEmpty?: InputMaybe<Scalars['Boolean']>;
  contains?: InputMaybe<Array<InputMaybe<ThingsPersonFilter>>>;
  containsAny?: InputMaybe<Array<InputMaybe<ThingsPersonFilter>>>;
  notContains?: InputMaybe<Array<InputMaybe<ThingsPersonFilter>>>;
  notContainsAny?: InputMaybe<Array<InputMaybe<ThingsPersonFilter>>>;
};

/** Available fields and relations for Things/Post */
export type ThingsPost = {
  /** fibery/id */
  id?: Maybe<Scalars['ID']>;
  /** fibery/public-id */
  publicId?: Maybe<Scalars['String']>;
  /** fibery/creation-date */
  creationDate?: Maybe<Scalars['String']>;
  /** fibery/modification-date */
  modificationDate?: Maybe<Scalars['String']>;
  /** fibery/rank */
  rank?: Maybe<Scalars['Float']>;
  /** fibery/created-by */
  createdBy?: Maybe<FiberyUser>;
  /** Things/description */
  description?: Maybe<RichField>;
  /** Things/name */
  name?: Maybe<Scalars['String']>;
};

export type ThingsPostInput = {
  /** fibery/rank */
  rank?: InputMaybe<Scalars['Float']>;
  /** Things/name */
  name?: InputMaybe<Scalars['String']>;
};

export type ThingsPostOrder = {
  /** fibery/id */
  id?: InputMaybe<Order>;
  /** fibery/public-id */
  publicId?: InputMaybe<Order>;
  /** fibery/creation-date */
  creationDate?: InputMaybe<Order>;
  /** fibery/modification-date */
  modificationDate?: InputMaybe<Order>;
  /** fibery/rank */
  rank?: InputMaybe<Order>;
  /** fibery/created-by */
  createdBy?: InputMaybe<FiberyUserOrder>;
  /** Things/name */
  name?: InputMaybe<Order>;
};

/** Available operations which can be done with found posts via provided query or created */
export type ThingsPostOperations = {
  /** Create. Create a new Post and specify field values */
  create?: Maybe<MutationResult>;
  /** Batch Create. Create a new Post and specify field values */
  createBatch?: Maybe<MutationResult>;
  /** Update. Set new values for fields */
  update?: Maybe<MutationResult>;
  /** Batch Update. Set new values for fields */
  updateBatch?: Maybe<MutationResult>;
  /** Delete. Delete Post */
  delete?: Maybe<MutationResult>;
  /** Script. Execute Javascript code */
  script?: Maybe<MutationResult>;
  /** Batch Script. Execute Javascript code */
  scriptBatch?: Maybe<MutationResult>;
  /** Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  appendContentToDescription?: Maybe<MutationResult>;
  /** Batch Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  appendContentToDescriptionBatch?: Maybe<MutationResult>;
  /** Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  prependContentToDescription?: Maybe<MutationResult>;
  /** Batch Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  prependContentToDescriptionBatch?: Maybe<MutationResult>;
  /** Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  overwriteDescription?: Maybe<MutationResult>;
  /** Batch Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  overwriteDescriptionBatch?: Maybe<MutationResult>;
  /** Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyCreatedBy?: Maybe<MutationResult>;
  /** Batch Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyCreatedByBatch?: Maybe<MutationResult>;
  /** Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyUsers?: Maybe<MutationResult>;
  /** Batch Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyUsersBatch?: Maybe<MutationResult>;
  /** countOfEntities. Count of found or created posts to be modified */
  countOfEntities?: Maybe<Scalars['Int']>;
  /** listEntities. List of found or created posts to be modified */
  listEntities?: Maybe<Array<Maybe<Entity>>>;
};


/** Available operations which can be done with found posts via provided query or created */
export type ThingsPostOperationscreateArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found posts via provided query or created */
export type ThingsPostOperationscreateBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsPostInput>>>;
};


/** Available operations which can be done with found posts via provided query or created */
export type ThingsPostOperationsupdateArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found posts via provided query or created */
export type ThingsPostOperationsupdateBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsPostInput>>>;
};


/** Available operations which can be done with found posts via provided query or created */
export type ThingsPostOperationsscriptArgs = {
  script?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found posts via provided query or created */
export type ThingsPostOperationsscriptBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ScriptInput>>>;
};


/** Available operations which can be done with found posts via provided query or created */
export type ThingsPostOperationsappendContentToDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found posts via provided query or created */
export type ThingsPostOperationsappendContentToDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<AppendContentToDescriptionInput>>>;
};


/** Available operations which can be done with found posts via provided query or created */
export type ThingsPostOperationsprependContentToDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found posts via provided query or created */
export type ThingsPostOperationsprependContentToDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<PrependContentToDescriptionInput>>>;
};


/** Available operations which can be done with found posts via provided query or created */
export type ThingsPostOperationsoverwriteDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found posts via provided query or created */
export type ThingsPostOperationsoverwriteDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<OverwriteDescriptionInput>>>;
};


/** Available operations which can be done with found posts via provided query or created */
export type ThingsPostOperationsnotifyCreatedByArgs = {
  subject?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  notifyAuthor?: InputMaybe<Scalars['Boolean']>;
};


/** Available operations which can be done with found posts via provided query or created */
export type ThingsPostOperationsnotifyCreatedByBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<NotifyCreatedByInput>>>;
};


/** Available operations which can be done with found posts via provided query or created */
export type ThingsPostOperationsnotifyUsersArgs = {
  to?: InputMaybe<Array<InputMaybe<FiberyUserFilter>>>;
  subject?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  notifyAuthor?: InputMaybe<Scalars['Boolean']>;
  noEmptySend?: InputMaybe<Scalars['Boolean']>;
};


/** Available operations which can be done with found posts via provided query or created */
export type ThingsPostOperationsnotifyUsersBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<NotifyUsersInput>>>;
};

/** Filter for Things/Post */
export type ThingsPostFilter = {
  orderBy?: InputMaybe<ThingsPostOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** fibery/id */
  id?: InputMaybe<IDFilter>;
  /** fibery/public-id */
  publicId?: InputMaybe<StringFilter>;
  /** fibery/creation-date */
  creationDate?: InputMaybe<StringFilter>;
  /** fibery/modification-date */
  modificationDate?: InputMaybe<StringFilter>;
  /** fibery/rank */
  rank?: InputMaybe<FloatFilter>;
  /** fibery/created-by */
  createdBy?: InputMaybe<FiberyUserFilter>;
  /** Things/name */
  name?: InputMaybe<StringFilter>;
};

export type ThingsPostCollectionFilter = {
  isEmpty?: InputMaybe<Scalars['Boolean']>;
  contains?: InputMaybe<Array<InputMaybe<ThingsPostFilter>>>;
  containsAny?: InputMaybe<Array<InputMaybe<ThingsPostFilter>>>;
  notContains?: InputMaybe<Array<InputMaybe<ThingsPostFilter>>>;
  notContainsAny?: InputMaybe<Array<InputMaybe<ThingsPostFilter>>>;
};

/** Available fields and relations for Things/Thing */
export type ThingsThing = {
  /** fibery/id */
  id?: Maybe<Scalars['ID']>;
  /** fibery/public-id */
  publicId?: Maybe<Scalars['String']>;
  /** fibery/creation-date */
  creationDate?: Maybe<Scalars['String']>;
  /** fibery/modification-date */
  modificationDate?: Maybe<Scalars['String']>;
  /** fibery/rank */
  rank?: Maybe<Scalars['Float']>;
  /** fibery/created-by */
  createdBy?: Maybe<FiberyUser>;
  /** Things/Description */
  description?: Maybe<RichField>;
  /** Things/Name */
  name?: Maybe<Scalars['String']>;
};

export type ThingsThingInput = {
  /** fibery/rank */
  rank?: InputMaybe<Scalars['Float']>;
  /** Things/Name */
  name?: InputMaybe<Scalars['String']>;
};

export type ThingsThingOrder = {
  /** fibery/id */
  id?: InputMaybe<Order>;
  /** fibery/public-id */
  publicId?: InputMaybe<Order>;
  /** fibery/creation-date */
  creationDate?: InputMaybe<Order>;
  /** fibery/modification-date */
  modificationDate?: InputMaybe<Order>;
  /** fibery/rank */
  rank?: InputMaybe<Order>;
  /** fibery/created-by */
  createdBy?: InputMaybe<FiberyUserOrder>;
  /** Things/Name */
  name?: InputMaybe<Order>;
};

/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperations = {
  /** Create. Create a new Thing and specify field values */
  create?: Maybe<MutationResult>;
  /** Batch Create. Create a new Thing and specify field values */
  createBatch?: Maybe<MutationResult>;
  /** Update. Set new values for fields */
  update?: Maybe<MutationResult>;
  /** Batch Update. Set new values for fields */
  updateBatch?: Maybe<MutationResult>;
  /** Delete. Delete Thing */
  delete?: Maybe<MutationResult>;
  /** Script. Execute Javascript code */
  script?: Maybe<MutationResult>;
  /** Batch Script. Execute Javascript code */
  scriptBatch?: Maybe<MutationResult>;
  /** Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  appendContentToDescription?: Maybe<MutationResult>;
  /** Batch Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  appendContentToDescriptionBatch?: Maybe<MutationResult>;
  /** Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  prependContentToDescription?: Maybe<MutationResult>;
  /** Batch Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  prependContentToDescriptionBatch?: Maybe<MutationResult>;
  /** Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  overwriteDescription?: Maybe<MutationResult>;
  /** Batch Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt; */
  overwriteDescriptionBatch?: Maybe<MutationResult>;
  /** Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyCreatedBy?: Maybe<MutationResult>;
  /** Batch Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyCreatedByBatch?: Maybe<MutationResult>;
  /** Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyUsers?: Maybe<MutationResult>;
  /** Batch Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt; */
  notifyUsersBatch?: Maybe<MutationResult>;
  /** countOfEntities. Count of found or created things to be modified */
  countOfEntities?: Maybe<Scalars['Int']>;
  /** listEntities. List of found or created things to be modified */
  listEntities?: Maybe<Array<Maybe<Entity>>>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationscreateArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationscreateBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsThingInput>>>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsupdateArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsupdateBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsThingInput>>>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsscriptArgs = {
  script?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsscriptBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ScriptInput>>>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsappendContentToDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsappendContentToDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<AppendContentToDescriptionInput>>>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsprependContentToDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsprependContentToDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<PrependContentToDescriptionInput>>>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsoverwriteDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsoverwriteDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<OverwriteDescriptionInput>>>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsnotifyCreatedByArgs = {
  subject?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  notifyAuthor?: InputMaybe<Scalars['Boolean']>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsnotifyCreatedByBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<NotifyCreatedByInput>>>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsnotifyUsersArgs = {
  to?: InputMaybe<Array<InputMaybe<FiberyUserFilter>>>;
  subject?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  notifyAuthor?: InputMaybe<Scalars['Boolean']>;
  noEmptySend?: InputMaybe<Scalars['Boolean']>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsnotifyUsersBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<NotifyUsersInput>>>;
};

/** Filter for Things/Thing */
export type ThingsThingFilter = {
  orderBy?: InputMaybe<ThingsThingOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** fibery/id */
  id?: InputMaybe<IDFilter>;
  /** fibery/public-id */
  publicId?: InputMaybe<StringFilter>;
  /** fibery/creation-date */
  creationDate?: InputMaybe<StringFilter>;
  /** fibery/modification-date */
  modificationDate?: InputMaybe<StringFilter>;
  /** fibery/rank */
  rank?: InputMaybe<FloatFilter>;
  /** fibery/created-by */
  createdBy?: InputMaybe<FiberyUserFilter>;
  /** Things/Name */
  name?: InputMaybe<StringFilter>;
};

export type ThingsThingCollectionFilter = {
  isEmpty?: InputMaybe<Scalars['Boolean']>;
  contains?: InputMaybe<Array<InputMaybe<ThingsThingFilter>>>;
  containsAny?: InputMaybe<Array<InputMaybe<ThingsThingFilter>>>;
  notContains?: InputMaybe<Array<InputMaybe<ThingsThingFilter>>>;
  notContainsAny?: InputMaybe<Array<InputMaybe<ThingsThingFilter>>>;
};

/** Available fields and relations for fibery/user */
export type FiberyUser = {
  /** fibery/active? */
  active?: Maybe<Scalars['Boolean']>;
  /** fibery/id */
  id?: Maybe<Scalars['ID']>;
  /** fibery/public-id */
  publicId?: Maybe<Scalars['String']>;
  /** fibery/creation-date */
  creationDate?: Maybe<Scalars['String']>;
  /** fibery/modification-date */
  modificationDate?: Maybe<Scalars['String']>;
  /** fibery/rank */
  rank?: Maybe<Scalars['Float']>;
  /** user/email */
  email?: Maybe<Scalars['String']>;
  /** user/name */
  name?: Maybe<Scalars['String']>;
};

export type FiberyUserInput = {
  /** fibery/rank */
  rank?: InputMaybe<Scalars['Float']>;
  /** user/name */
  name?: InputMaybe<Scalars['String']>;
};

export type FiberyUserOrder = {
  /** fibery/active? */
  active?: InputMaybe<Order>;
  /** fibery/id */
  id?: InputMaybe<Order>;
  /** fibery/public-id */
  publicId?: InputMaybe<Order>;
  /** fibery/creation-date */
  creationDate?: InputMaybe<Order>;
  /** fibery/modification-date */
  modificationDate?: InputMaybe<Order>;
  /** fibery/rank */
  rank?: InputMaybe<Order>;
  /** user/email */
  email?: InputMaybe<Order>;
  /** user/name */
  name?: InputMaybe<Order>;
};

/** Filter for fibery/user */
export type FiberyUserFilter = {
  orderBy?: InputMaybe<FiberyUserOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** fibery/active? */
  active?: InputMaybe<BooleanFilter>;
  /** fibery/id */
  id?: InputMaybe<IDFilter>;
  /** fibery/public-id */
  publicId?: InputMaybe<StringFilter>;
  /** fibery/creation-date */
  creationDate?: InputMaybe<StringFilter>;
  /** fibery/modification-date */
  modificationDate?: InputMaybe<StringFilter>;
  /** fibery/rank */
  rank?: InputMaybe<FloatFilter>;
  /** user/email */
  email?: InputMaybe<StringFilter>;
  /** user/name */
  name?: InputMaybe<StringFilter>;
};

export type FiberyUserCollectionFilter = {
  isEmpty?: InputMaybe<Scalars['Boolean']>;
  contains?: InputMaybe<Array<InputMaybe<FiberyUserFilter>>>;
  containsAny?: InputMaybe<Array<InputMaybe<FiberyUserFilter>>>;
  notContains?: InputMaybe<Array<InputMaybe<FiberyUserFilter>>>;
  notContainsAny?: InputMaybe<Array<InputMaybe<FiberyUserFilter>>>;
};

export type StringFilter = {
  is?: InputMaybe<Scalars['String']>;
  isNot?: InputMaybe<Scalars['String']>;
  contains?: InputMaybe<Scalars['String']>;
  notContains?: InputMaybe<Scalars['String']>;
  greater?: InputMaybe<Scalars['String']>;
  greaterOrEquals?: InputMaybe<Scalars['String']>;
  less?: InputMaybe<Scalars['String']>;
  lessOrEquals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export type FloatFilter = {
  is?: InputMaybe<Scalars['Float']>;
  isNot?: InputMaybe<Scalars['Float']>;
  greater?: InputMaybe<Scalars['Float']>;
  greaterOrEquals?: InputMaybe<Scalars['Float']>;
  less?: InputMaybe<Scalars['Float']>;
  lessOrEquals?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export type IDFilter = {
  is?: InputMaybe<Scalars['ID']>;
  isNot?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export type IntFilter = {
  is?: InputMaybe<Scalars['Int']>;
  isNot?: InputMaybe<Scalars['Int']>;
  greater?: InputMaybe<Scalars['Int']>;
  greaterOrEquals?: InputMaybe<Scalars['Int']>;
  less?: InputMaybe<Scalars['Int']>;
  lessOrEquals?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export type BooleanFilter = {
  is?: InputMaybe<Scalars['Boolean']>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export type DateRangeFilter = {
  start?: InputMaybe<StringFilter>;
  end?: InputMaybe<StringFilter>;
  isNull?: InputMaybe<Scalars['Boolean']>;
};

export type DateRange = {
  start?: Maybe<Scalars['String']>;
  end?: Maybe<Scalars['String']>;
};

export type DateRangeInput = {
  start?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['String']>;
};

export type RichField = {
  secret?: Maybe<Scalars['String']>;
  md?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  jsonString?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type Document = {
  id?: Maybe<Scalars['ID']>;
  secret?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  md?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  jsonString?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type Entity = {
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
};

export type Doc = {
  secret?: Maybe<Scalars['String']>;
};

export type MutationResult = {
  message?: Maybe<Scalars['String']>;
  entities?: Maybe<Array<Maybe<Entity>>>;
  documents?: Maybe<Array<Maybe<Doc>>>;
};

export type Order =
  | 'ASC'
  | 'DESC';

export type DateRangeOrder = {
  start?: InputMaybe<Order>;
  end?: InputMaybe<Order>;
};

/** Input for Script */
export type ScriptInput = {
  /** Script code */
  script?: InputMaybe<Scalars['String']>;
};

/** Input for Append content to Description */
export type AppendContentToDescriptionInput = {
  /** Document */
  value?: InputMaybe<Scalars['String']>;
};

/** Input for Prepend content to Description */
export type PrependContentToDescriptionInput = {
  /** Document */
  value?: InputMaybe<Scalars['String']>;
};

/** Input for Overwrite Description */
export type OverwriteDescriptionInput = {
  /** Document */
  value?: InputMaybe<Scalars['String']>;
};

/** Input for Notify Created By */
export type NotifyCreatedByInput = {
  /** Subject */
  subject?: InputMaybe<Scalars['String']>;
  /** Message */
  message?: InputMaybe<Scalars['String']>;
  /** Notify the author of modifications */
  notifyAuthor?: InputMaybe<Scalars['Boolean']>;
};

/** Input for Notify Users */
export type NotifyUsersInput = {
  /** To */
  to?: InputMaybe<Array<InputMaybe<FiberyUserFilter>>>;
  /** Subject */
  subject?: InputMaybe<Scalars['String']>;
  /** Message */
  message?: InputMaybe<Scalars['String']>;
  /** Notify the author of modifications */
  notifyAuthor?: InputMaybe<Scalars['Boolean']>;
  /** Don&#39;t notify if there are no entities to be processed */
  noEmptySend?: InputMaybe<Scalars['Boolean']>;
};

/** Use mutations to modify database */
export type Mutation = {
  /**
   * Modify selected entities using multiple actions (update, link and etc.)
   * ```
   * mutation {
   *     documents(id:{is: "AAAA-BBBB-CCCC"}){
   *         update(name:"Updated"){message}
   *     }
   * }
   * ```
   */
  documents?: Maybe<ThingsDocumentOperations>;
  /**
   * Modify selected entities using multiple actions (update, link and etc.)
   * ```
   * mutation {
   *     events(id:{is: "AAAA-BBBB-CCCC"}){
   *         update(name:"Updated"){message}
   *     }
   * }
   * ```
   */
  events?: Maybe<ThingsEventOperations>;
  /**
   * Modify selected entities using multiple actions (update, link and etc.)
   * ```
   * mutation {
   *     ideas(id:{is: "AAAA-BBBB-CCCC"}){
   *         update(name:"Updated"){message}
   *     }
   * }
   * ```
   */
  ideas?: Maybe<ThingsIdeaOperations>;
  /**
   * Modify selected entities using multiple actions (update, link and etc.)
   * ```
   * mutation {
   *     people(id:{is: "AAAA-BBBB-CCCC"}){
   *         update(name:"Updated"){message}
   *     }
   * }
   * ```
   */
  people?: Maybe<ThingsPersonOperations>;
  /**
   * Modify selected entities using multiple actions (update, link and etc.)
   * ```
   * mutation {
   *     posts(id:{is: "AAAA-BBBB-CCCC"}){
   *         update(name:"Updated"){message}
   *     }
   * }
   * ```
   */
  posts?: Maybe<ThingsPostOperations>;
  /**
   * Modify selected entities using multiple actions (update, link and etc.)
   * ```
   * mutation {
   *     things(id:{is: "AAAA-BBBB-CCCC"}){
   *         update(name:"Updated"){message}
   *     }
   * }
   * ```
   */
  things?: Maybe<ThingsThingOperations>;
};


/** Use mutations to modify database */
export type MutationdocumentsArgs = {
  orderBy?: InputMaybe<ThingsDocumentOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<IDFilter>;
  publicId?: InputMaybe<StringFilter>;
  creationDate?: InputMaybe<StringFilter>;
  modificationDate?: InputMaybe<StringFilter>;
  rank?: InputMaybe<FloatFilter>;
  createdBy?: InputMaybe<FiberyUserFilter>;
  author?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};


/** Use mutations to modify database */
export type MutationeventsArgs = {
  orderBy?: InputMaybe<ThingsEventOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<IDFilter>;
  publicId?: InputMaybe<StringFilter>;
  creationDate?: InputMaybe<StringFilter>;
  modificationDate?: InputMaybe<StringFilter>;
  rank?: InputMaybe<FloatFilter>;
  createdBy?: InputMaybe<FiberyUserFilter>;
  allDay?: InputMaybe<BooleanFilter>;
  endStr?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  source?: InputMaybe<StringFilter>;
  startStr?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};


/** Use mutations to modify database */
export type MutationideasArgs = {
  orderBy?: InputMaybe<ThingsIdeaOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<IDFilter>;
  publicId?: InputMaybe<StringFilter>;
  creationDate?: InputMaybe<StringFilter>;
  modificationDate?: InputMaybe<StringFilter>;
  rank?: InputMaybe<FloatFilter>;
  createdBy?: InputMaybe<FiberyUserFilter>;
  name?: InputMaybe<StringFilter>;
};


/** Use mutations to modify database */
export type MutationpeopleArgs = {
  orderBy?: InputMaybe<ThingsPersonOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<IDFilter>;
  publicId?: InputMaybe<StringFilter>;
  creationDate?: InputMaybe<StringFilter>;
  modificationDate?: InputMaybe<StringFilter>;
  rank?: InputMaybe<FloatFilter>;
  createdBy?: InputMaybe<FiberyUserFilter>;
  accountId?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  widgetSrc?: InputMaybe<StringFilter>;
};


/** Use mutations to modify database */
export type MutationpostsArgs = {
  orderBy?: InputMaybe<ThingsPostOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<IDFilter>;
  publicId?: InputMaybe<StringFilter>;
  creationDate?: InputMaybe<StringFilter>;
  modificationDate?: InputMaybe<StringFilter>;
  rank?: InputMaybe<FloatFilter>;
  createdBy?: InputMaybe<FiberyUserFilter>;
  name?: InputMaybe<StringFilter>;
};


/** Use mutations to modify database */
export type MutationthingsArgs = {
  orderBy?: InputMaybe<ThingsThingOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<IDFilter>;
  publicId?: InputMaybe<StringFilter>;
  creationDate?: InputMaybe<StringFilter>;
  modificationDate?: InputMaybe<StringFilter>;
  rank?: InputMaybe<FloatFilter>;
  createdBy?: InputMaybe<FiberyUserFilter>;
  name?: InputMaybe<StringFilter>;
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
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ThingsDocument: ResolverTypeWrapper<ThingsDocument>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ThingsDocumentInput: ThingsDocumentInput;
  ThingsDocumentOrder: ThingsDocumentOrder;
  ThingsDocumentOperations: ResolverTypeWrapper<ThingsDocumentOperations>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ThingsDocumentFilter: ThingsDocumentFilter;
  ThingsDocumentCollectionFilter: ThingsDocumentCollectionFilter;
  ThingsEvent: ResolverTypeWrapper<ThingsEvent>;
  ThingsEventInput: ThingsEventInput;
  ThingsEventOrder: ThingsEventOrder;
  ThingsEventOperations: ResolverTypeWrapper<ThingsEventOperations>;
  ThingsEventFilter: ThingsEventFilter;
  ThingsEventCollectionFilter: ThingsEventCollectionFilter;
  ThingsIdea: ResolverTypeWrapper<ThingsIdea>;
  ThingsIdeaInput: ThingsIdeaInput;
  ThingsIdeaOrder: ThingsIdeaOrder;
  ThingsIdeaOperations: ResolverTypeWrapper<ThingsIdeaOperations>;
  ThingsIdeaFilter: ThingsIdeaFilter;
  ThingsIdeaCollectionFilter: ThingsIdeaCollectionFilter;
  ThingsPerson: ResolverTypeWrapper<ThingsPerson>;
  ThingsPersonInput: ThingsPersonInput;
  ThingsPersonOrder: ThingsPersonOrder;
  ThingsPersonOperations: ResolverTypeWrapper<ThingsPersonOperations>;
  ThingsPersonFilter: ThingsPersonFilter;
  ThingsPersonCollectionFilter: ThingsPersonCollectionFilter;
  ThingsPost: ResolverTypeWrapper<ThingsPost>;
  ThingsPostInput: ThingsPostInput;
  ThingsPostOrder: ThingsPostOrder;
  ThingsPostOperations: ResolverTypeWrapper<ThingsPostOperations>;
  ThingsPostFilter: ThingsPostFilter;
  ThingsPostCollectionFilter: ThingsPostCollectionFilter;
  ThingsThing: ResolverTypeWrapper<ThingsThing>;
  ThingsThingInput: ThingsThingInput;
  ThingsThingOrder: ThingsThingOrder;
  ThingsThingOperations: ResolverTypeWrapper<ThingsThingOperations>;
  ThingsThingFilter: ThingsThingFilter;
  ThingsThingCollectionFilter: ThingsThingCollectionFilter;
  FiberyUser: ResolverTypeWrapper<FiberyUser>;
  FiberyUserInput: FiberyUserInput;
  FiberyUserOrder: FiberyUserOrder;
  FiberyUserFilter: FiberyUserFilter;
  FiberyUserCollectionFilter: FiberyUserCollectionFilter;
  StringFilter: StringFilter;
  FloatFilter: FloatFilter;
  IDFilter: IDFilter;
  IntFilter: IntFilter;
  BooleanFilter: BooleanFilter;
  DateRangeFilter: DateRangeFilter;
  DateRange: ResolverTypeWrapper<DateRange>;
  DateRangeInput: DateRangeInput;
  RichField: ResolverTypeWrapper<RichField>;
  Document: ResolverTypeWrapper<Document>;
  Entity: ResolverTypeWrapper<Entity>;
  Doc: ResolverTypeWrapper<Doc>;
  MutationResult: ResolverTypeWrapper<MutationResult>;
  Order: Order;
  DateRangeOrder: DateRangeOrder;
  ScriptInput: ScriptInput;
  AppendContentToDescriptionInput: AppendContentToDescriptionInput;
  PrependContentToDescriptionInput: PrependContentToDescriptionInput;
  OverwriteDescriptionInput: OverwriteDescriptionInput;
  NotifyCreatedByInput: NotifyCreatedByInput;
  NotifyUsersInput: NotifyUsersInput;
  Mutation: ResolverTypeWrapper<{}>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Int: Scalars['Int'];
  ThingsDocument: ThingsDocument;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Float: Scalars['Float'];
  ThingsDocumentInput: ThingsDocumentInput;
  ThingsDocumentOrder: ThingsDocumentOrder;
  ThingsDocumentOperations: ThingsDocumentOperations;
  Boolean: Scalars['Boolean'];
  ThingsDocumentFilter: ThingsDocumentFilter;
  ThingsDocumentCollectionFilter: ThingsDocumentCollectionFilter;
  ThingsEvent: ThingsEvent;
  ThingsEventInput: ThingsEventInput;
  ThingsEventOrder: ThingsEventOrder;
  ThingsEventOperations: ThingsEventOperations;
  ThingsEventFilter: ThingsEventFilter;
  ThingsEventCollectionFilter: ThingsEventCollectionFilter;
  ThingsIdea: ThingsIdea;
  ThingsIdeaInput: ThingsIdeaInput;
  ThingsIdeaOrder: ThingsIdeaOrder;
  ThingsIdeaOperations: ThingsIdeaOperations;
  ThingsIdeaFilter: ThingsIdeaFilter;
  ThingsIdeaCollectionFilter: ThingsIdeaCollectionFilter;
  ThingsPerson: ThingsPerson;
  ThingsPersonInput: ThingsPersonInput;
  ThingsPersonOrder: ThingsPersonOrder;
  ThingsPersonOperations: ThingsPersonOperations;
  ThingsPersonFilter: ThingsPersonFilter;
  ThingsPersonCollectionFilter: ThingsPersonCollectionFilter;
  ThingsPost: ThingsPost;
  ThingsPostInput: ThingsPostInput;
  ThingsPostOrder: ThingsPostOrder;
  ThingsPostOperations: ThingsPostOperations;
  ThingsPostFilter: ThingsPostFilter;
  ThingsPostCollectionFilter: ThingsPostCollectionFilter;
  ThingsThing: ThingsThing;
  ThingsThingInput: ThingsThingInput;
  ThingsThingOrder: ThingsThingOrder;
  ThingsThingOperations: ThingsThingOperations;
  ThingsThingFilter: ThingsThingFilter;
  ThingsThingCollectionFilter: ThingsThingCollectionFilter;
  FiberyUser: FiberyUser;
  FiberyUserInput: FiberyUserInput;
  FiberyUserOrder: FiberyUserOrder;
  FiberyUserFilter: FiberyUserFilter;
  FiberyUserCollectionFilter: FiberyUserCollectionFilter;
  StringFilter: StringFilter;
  FloatFilter: FloatFilter;
  IDFilter: IDFilter;
  IntFilter: IntFilter;
  BooleanFilter: BooleanFilter;
  DateRangeFilter: DateRangeFilter;
  DateRange: DateRange;
  DateRangeInput: DateRangeInput;
  RichField: RichField;
  Document: Document;
  Entity: Entity;
  Doc: Doc;
  MutationResult: MutationResult;
  DateRangeOrder: DateRangeOrder;
  ScriptInput: ScriptInput;
  AppendContentToDescriptionInput: AppendContentToDescriptionInput;
  PrependContentToDescriptionInput: PrependContentToDescriptionInput;
  OverwriteDescriptionInput: OverwriteDescriptionInput;
  NotifyCreatedByInput: NotifyCreatedByInput;
  NotifyUsersInput: NotifyUsersInput;
  Mutation: {};
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  me?: Resolver<Maybe<ResolversTypes['FiberyUser']>, ParentType, ContextType>;
  findDocuments?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThingsDocument']>>>, ParentType, ContextType, Partial<QueryfindDocumentsArgs>>;
  findEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThingsEvent']>>>, ParentType, ContextType, Partial<QueryfindEventsArgs>>;
  findIdeas?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThingsIdea']>>>, ParentType, ContextType, Partial<QueryfindIdeasArgs>>;
  findPeople?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThingsPerson']>>>, ParentType, ContextType, Partial<QueryfindPeopleArgs>>;
  findPosts?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThingsPost']>>>, ParentType, ContextType, Partial<QueryfindPostsArgs>>;
  findThings?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThingsThing']>>>, ParentType, ContextType, Partial<QueryfindThingsArgs>>;
}>;

export type ThingsDocumentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThingsDocument'] = ResolversParentTypes['ThingsDocument']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  publicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modificationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['FiberyUser']>, ParentType, ContextType>;
  author?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['RichField']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThingsDocumentOperationsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThingsDocumentOperations'] = ResolversParentTypes['ThingsDocumentOperations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsDocumentOperationscreateArgs>>;
  createBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsDocumentOperationscreateBatchArgs>>;
  update?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsDocumentOperationsupdateArgs>>;
  updateBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsDocumentOperationsupdateBatchArgs>>;
  delete?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType>;
  script?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsDocumentOperationsscriptArgs>>;
  scriptBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsDocumentOperationsscriptBatchArgs>>;
  appendContentToDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsDocumentOperationsappendContentToDescriptionArgs>>;
  appendContentToDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsDocumentOperationsappendContentToDescriptionBatchArgs>>;
  prependContentToDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsDocumentOperationsprependContentToDescriptionArgs>>;
  prependContentToDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsDocumentOperationsprependContentToDescriptionBatchArgs>>;
  overwriteDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsDocumentOperationsoverwriteDescriptionArgs>>;
  overwriteDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsDocumentOperationsoverwriteDescriptionBatchArgs>>;
  notifyCreatedBy?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsDocumentOperationsnotifyCreatedByArgs>>;
  notifyCreatedByBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsDocumentOperationsnotifyCreatedByBatchArgs>>;
  notifyUsers?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsDocumentOperationsnotifyUsersArgs>>;
  notifyUsersBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsDocumentOperationsnotifyUsersBatchArgs>>;
  countOfEntities?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  listEntities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Entity']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThingsEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThingsEvent'] = ResolversParentTypes['ThingsEvent']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  publicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modificationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['FiberyUser']>, ParentType, ContextType>;
  allDay?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['RichField']>, ParentType, ContextType>;
  endStr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  source?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  startStr?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThingsEventOperationsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThingsEventOperations'] = ResolversParentTypes['ThingsEventOperations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationscreateArgs>>;
  createBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationscreateBatchArgs>>;
  update?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationsupdateArgs>>;
  updateBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationsupdateBatchArgs>>;
  delete?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType>;
  script?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationsscriptArgs>>;
  scriptBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationsscriptBatchArgs>>;
  appendContentToDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationsappendContentToDescriptionArgs>>;
  appendContentToDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationsappendContentToDescriptionBatchArgs>>;
  prependContentToDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationsprependContentToDescriptionArgs>>;
  prependContentToDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationsprependContentToDescriptionBatchArgs>>;
  overwriteDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationsoverwriteDescriptionArgs>>;
  overwriteDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationsoverwriteDescriptionBatchArgs>>;
  notifyCreatedBy?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationsnotifyCreatedByArgs>>;
  notifyCreatedByBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationsnotifyCreatedByBatchArgs>>;
  notifyUsers?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationsnotifyUsersArgs>>;
  notifyUsersBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationsnotifyUsersBatchArgs>>;
  countOfEntities?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  listEntities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Entity']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThingsIdeaResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThingsIdea'] = ResolversParentTypes['ThingsIdea']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  publicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modificationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['FiberyUser']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['RichField']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThingsIdeaOperationsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThingsIdeaOperations'] = ResolversParentTypes['ThingsIdeaOperations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationscreateArgs>>;
  createBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationscreateBatchArgs>>;
  update?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationsupdateArgs>>;
  updateBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationsupdateBatchArgs>>;
  delete?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType>;
  script?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationsscriptArgs>>;
  scriptBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationsscriptBatchArgs>>;
  appendContentToDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationsappendContentToDescriptionArgs>>;
  appendContentToDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationsappendContentToDescriptionBatchArgs>>;
  prependContentToDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationsprependContentToDescriptionArgs>>;
  prependContentToDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationsprependContentToDescriptionBatchArgs>>;
  overwriteDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationsoverwriteDescriptionArgs>>;
  overwriteDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationsoverwriteDescriptionBatchArgs>>;
  notifyCreatedBy?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationsnotifyCreatedByArgs>>;
  notifyCreatedByBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationsnotifyCreatedByBatchArgs>>;
  notifyUsers?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationsnotifyUsersArgs>>;
  notifyUsersBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationsnotifyUsersBatchArgs>>;
  countOfEntities?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  listEntities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Entity']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThingsPersonResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThingsPerson'] = ResolversParentTypes['ThingsPerson']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  publicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modificationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['FiberyUser']>, ParentType, ContextType>;
  accountId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['RichField']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  widgetSrc?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThingsPersonOperationsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThingsPersonOperations'] = ResolversParentTypes['ThingsPersonOperations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPersonOperationscreateArgs>>;
  createBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPersonOperationscreateBatchArgs>>;
  update?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPersonOperationsupdateArgs>>;
  updateBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPersonOperationsupdateBatchArgs>>;
  delete?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType>;
  script?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPersonOperationsscriptArgs>>;
  scriptBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPersonOperationsscriptBatchArgs>>;
  appendContentToDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPersonOperationsappendContentToDescriptionArgs>>;
  appendContentToDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPersonOperationsappendContentToDescriptionBatchArgs>>;
  prependContentToDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPersonOperationsprependContentToDescriptionArgs>>;
  prependContentToDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPersonOperationsprependContentToDescriptionBatchArgs>>;
  overwriteDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPersonOperationsoverwriteDescriptionArgs>>;
  overwriteDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPersonOperationsoverwriteDescriptionBatchArgs>>;
  notifyCreatedBy?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPersonOperationsnotifyCreatedByArgs>>;
  notifyCreatedByBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPersonOperationsnotifyCreatedByBatchArgs>>;
  notifyUsers?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPersonOperationsnotifyUsersArgs>>;
  notifyUsersBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPersonOperationsnotifyUsersBatchArgs>>;
  countOfEntities?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  listEntities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Entity']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThingsPostResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThingsPost'] = ResolversParentTypes['ThingsPost']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  publicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modificationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['FiberyUser']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['RichField']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThingsPostOperationsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThingsPostOperations'] = ResolversParentTypes['ThingsPostOperations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPostOperationscreateArgs>>;
  createBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPostOperationscreateBatchArgs>>;
  update?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPostOperationsupdateArgs>>;
  updateBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPostOperationsupdateBatchArgs>>;
  delete?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType>;
  script?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPostOperationsscriptArgs>>;
  scriptBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPostOperationsscriptBatchArgs>>;
  appendContentToDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPostOperationsappendContentToDescriptionArgs>>;
  appendContentToDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPostOperationsappendContentToDescriptionBatchArgs>>;
  prependContentToDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPostOperationsprependContentToDescriptionArgs>>;
  prependContentToDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPostOperationsprependContentToDescriptionBatchArgs>>;
  overwriteDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPostOperationsoverwriteDescriptionArgs>>;
  overwriteDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPostOperationsoverwriteDescriptionBatchArgs>>;
  notifyCreatedBy?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPostOperationsnotifyCreatedByArgs>>;
  notifyCreatedByBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPostOperationsnotifyCreatedByBatchArgs>>;
  notifyUsers?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPostOperationsnotifyUsersArgs>>;
  notifyUsersBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsPostOperationsnotifyUsersBatchArgs>>;
  countOfEntities?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  listEntities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Entity']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThingsThingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThingsThing'] = ResolversParentTypes['ThingsThing']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  publicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modificationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['FiberyUser']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['RichField']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThingsThingOperationsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThingsThingOperations'] = ResolversParentTypes['ThingsThingOperations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationscreateArgs>>;
  createBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationscreateBatchArgs>>;
  update?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsupdateArgs>>;
  updateBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsupdateBatchArgs>>;
  delete?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType>;
  script?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsscriptArgs>>;
  scriptBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsscriptBatchArgs>>;
  appendContentToDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsappendContentToDescriptionArgs>>;
  appendContentToDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsappendContentToDescriptionBatchArgs>>;
  prependContentToDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsprependContentToDescriptionArgs>>;
  prependContentToDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsprependContentToDescriptionBatchArgs>>;
  overwriteDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsoverwriteDescriptionArgs>>;
  overwriteDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsoverwriteDescriptionBatchArgs>>;
  notifyCreatedBy?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsnotifyCreatedByArgs>>;
  notifyCreatedByBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsnotifyCreatedByBatchArgs>>;
  notifyUsers?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsnotifyUsersArgs>>;
  notifyUsersBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsnotifyUsersBatchArgs>>;
  countOfEntities?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  listEntities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Entity']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FiberyUserResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['FiberyUser'] = ResolversParentTypes['FiberyUser']> = ResolversObject<{
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  publicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modificationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DateRangeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['DateRange'] = ResolversParentTypes['DateRange']> = ResolversObject<{
  start?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type RichFieldResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['RichField'] = ResolversParentTypes['RichField']> = ResolversObject<{
  secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  md?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jsonString?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DocumentResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Document'] = ResolversParentTypes['Document']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  md?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  jsonString?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  text?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EntityResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Entity'] = ResolversParentTypes['Entity']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DocResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Doc'] = ResolversParentTypes['Doc']> = ResolversObject<{
  secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResultResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['MutationResult'] = ResolversParentTypes['MutationResult']> = ResolversObject<{
  message?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  entities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Entity']>>>, ParentType, ContextType>;
  documents?: Resolver<Maybe<Array<Maybe<ResolversTypes['Doc']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  documents?: Resolver<Maybe<ResolversTypes['ThingsDocumentOperations']>, ParentType, ContextType, Partial<MutationdocumentsArgs>>;
  events?: Resolver<Maybe<ResolversTypes['ThingsEventOperations']>, ParentType, ContextType, Partial<MutationeventsArgs>>;
  ideas?: Resolver<Maybe<ResolversTypes['ThingsIdeaOperations']>, ParentType, ContextType, Partial<MutationideasArgs>>;
  people?: Resolver<Maybe<ResolversTypes['ThingsPersonOperations']>, ParentType, ContextType, Partial<MutationpeopleArgs>>;
  posts?: Resolver<Maybe<ResolversTypes['ThingsPostOperations']>, ParentType, ContextType, Partial<MutationpostsArgs>>;
  things?: Resolver<Maybe<ResolversTypes['ThingsThingOperations']>, ParentType, ContextType, Partial<MutationthingsArgs>>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  ThingsDocument?: ThingsDocumentResolvers<ContextType>;
  ThingsDocumentOperations?: ThingsDocumentOperationsResolvers<ContextType>;
  ThingsEvent?: ThingsEventResolvers<ContextType>;
  ThingsEventOperations?: ThingsEventOperationsResolvers<ContextType>;
  ThingsIdea?: ThingsIdeaResolvers<ContextType>;
  ThingsIdeaOperations?: ThingsIdeaOperationsResolvers<ContextType>;
  ThingsPerson?: ThingsPersonResolvers<ContextType>;
  ThingsPersonOperations?: ThingsPersonOperationsResolvers<ContextType>;
  ThingsPost?: ThingsPostResolvers<ContextType>;
  ThingsPostOperations?: ThingsPostOperationsResolvers<ContextType>;
  ThingsThing?: ThingsThingResolvers<ContextType>;
  ThingsThingOperations?: ThingsThingOperationsResolvers<ContextType>;
  FiberyUser?: FiberyUserResolvers<ContextType>;
  DateRange?: DateRangeResolvers<ContextType>;
  RichField?: RichFieldResolvers<ContextType>;
  Document?: DocumentResolvers<ContextType>;
  Entity?: EntityResolvers<ContextType>;
  Doc?: DocResolvers<ContextType>;
  MutationResult?: MutationResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
}>;


export type MeshContext = ThingsTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".mesh/sources/Things/introspectionSchema":
      return Promise.resolve(importedModule$0) as T;
    
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

export const rawServeConfig: YamlConfig.Config['serve'] = {"browser":false,"cors":{"origin":["https://alpha.near.org","https://temp.everything.dev","https://nearpad.dev","https://near.social"],"allowedHeaders":["Content-Type","X-Everything"],"credentials":true,"maxAge":86400,"preflightContinue":false,"optionsSuccessStatus":204}} as any
export async function getMeshOptions(): Promise<GetMeshOptions> {
const pubsub = new PubSub();
const sourcesStore = rootStore.child('sources');
const logger = new DefaultLogger("🕸️  Mesh");
const cache = new (MeshCache as any)({
      ...({} as any),
      importFn,
      store: rootStore.child('cache'),
      pubsub,
      logger,
    } as any)

const sources: MeshResolvedSource[] = [];
const transforms: MeshTransform[] = [];
const additionalEnvelopPlugins: MeshPlugin<any>[] = [];
const thingsTransforms = [];
const additionalTypeDefs = [] as any[];
const thingsHandler = new GraphqlHandler({
              name: "Things",
              config: {"endpoint":"https://everything.fibery.io/api/graphql/space/Things","operationHeaders":{"Authorization":"Bearer {env.FIBERY_TOKEN}"},"schemaHeaders":{"Authorization":"Bearer {env.FIBERY_TOKEN}"}},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Things"),
              logger: logger.child("Things"),
              importFn,
            });
sources[0] = {
          name: 'Things',
          handler: thingsHandler,
          transforms: thingsTransforms
        }
additionalEnvelopPlugins[0] = await useCSRFPrevention({
  "requestHeaders": [
    "X-Everything"
  ]
});
const additionalResolvers = [] as any[]
const merger = new(BareMerger as any)({
        cache,
        pubsub,
        logger: logger.child('bareMerger'),
        store: rootStore.child('bareMerger')
      })

  return {
    sources,
    transforms,
    additionalTypeDefs,
    additionalResolvers,
    cache,
    pubsub,
    merger,
    logger,
    additionalEnvelopPlugins,
    get documents() {
      return [
      
    ];
    },
    fetchFn,
  };
}

export function createBuiltMeshHTTPHandler<TServerContext = {}>(): MeshHTTPHandler<TServerContext> {
  return createMeshHTTPHandler<TServerContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: {"browser":false,"cors":{"origin":["https://alpha.near.org","https://temp.everything.dev","https://nearpad.dev","https://near.social"],"allowedHeaders":["Content-Type","X-Everything"],"credentials":true,"maxAge":86400,"preflightContinue":false,"optionsSuccessStatus":204}},
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