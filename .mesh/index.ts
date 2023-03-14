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
import BareMerger from "@graphql-mesh/merger-bare";
import { createMeshHTTPHandler, MeshHTTPHandler } from '@graphql-mesh/http';
import { getMesh, ExecuteMeshFn, SubscribeMeshFn, MeshContext as BaseMeshContext, MeshInstance } from '@graphql-mesh/runtime';
import { MeshStore, FsStoreStorageAdapter } from '@graphql-mesh/store';
import { path as pathModule } from '@graphql-mesh/cross-helpers';
import { ImportFn } from '@graphql-mesh/types';
import type { FiberyTypes } from './sources/Fibery/types';
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
   * Find ThingsThing records.
   *
   * By default, offset equals to 0 and limit equals to 100
   *
   * ```{findThings{id,name}}```
   */
  findThings?: Maybe<Array<Maybe<ThingsThing>>>;
  /**
   * Find ThingsType records.
   *
   * By default, offset equals to 0 and limit equals to 100
   *
   * ```{findTypes{id,name}}```
   */
  findTypes?: Maybe<Array<Maybe<ThingsType>>>;
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
  thing?: InputMaybe<ThingsThingFilter>;
  name?: InputMaybe<StringFilter>;
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
  thing?: InputMaybe<ThingsThingFilter>;
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
  event?: InputMaybe<ThingsEventFilter>;
  idea?: InputMaybe<ThingsIdeaFilter>;
  name?: InputMaybe<StringFilter>;
  query?: InputMaybe<StringFilter>;
  type?: InputMaybe<ThingsTypeFilter>;
};


/** Below the list of queries available for database. */
export type QueryfindTypesArgs = {
  orderBy?: InputMaybe<ThingsTypeOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<IDFilter>;
  publicId?: InputMaybe<StringFilter>;
  creationDate?: InputMaybe<StringFilter>;
  modificationDate?: InputMaybe<StringFilter>;
  rank?: InputMaybe<FloatFilter>;
  createdBy?: InputMaybe<FiberyUserFilter>;
  things?: InputMaybe<ThingsThingCollectionFilter>;
  name?: InputMaybe<StringFilter>;
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
  /** Things/Thing */
  thing?: Maybe<ThingsThing>;
  /** Things/description */
  description?: Maybe<RichField>;
  /** Things/name */
  name?: Maybe<Scalars['String']>;
};

export type ThingsEventInput = {
  /** fibery/rank */
  rank?: InputMaybe<Scalars['Float']>;
  /** Things/Thing */
  thing?: InputMaybe<ThingsThingFilter>;
  /** Things/name */
  name?: InputMaybe<Scalars['String']>;
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
  /** Things/Thing */
  thing?: InputMaybe<ThingsThingOrder>;
  /** Things/name */
  name?: InputMaybe<Order>;
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
  /** Add Thing. Create new Thing and link to Event */
  addThing?: Maybe<MutationResult>;
  /** Batch Add Thing. Create new Thing and link to Event */
  addThingBatch?: Maybe<MutationResult>;
  /** Update Thing. Update Thing linked to Event */
  updateThing?: Maybe<MutationResult>;
  /** Batch Update Thing. Update Thing linked to Event */
  updateThingBatch?: Maybe<MutationResult>;
  /** Unlink Thing. Unlink Thing from Event while not deleting it */
  unlinkThing?: Maybe<MutationResult>;
  /** Delete Thing. Delete Thing linked to Event */
  deleteThing?: Maybe<MutationResult>;
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
  thing?: InputMaybe<ThingsThingFilter>;
  name?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationscreateBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsEventInput>>>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationsupdateArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  thing?: InputMaybe<ThingsThingFilter>;
  name?: InputMaybe<Scalars['String']>;
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
export type ThingsEventOperationsaddThingArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  event?: InputMaybe<ThingsEventFilter>;
  idea?: InputMaybe<ThingsIdeaFilter>;
  name?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ThingsTypeFilter>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationsaddThingBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsThingInput>>>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationsupdateThingArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  event?: InputMaybe<ThingsEventFilter>;
  idea?: InputMaybe<ThingsIdeaFilter>;
  name?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ThingsTypeFilter>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationsupdateThingBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsThingInput>>>;
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
  /** Things/Thing */
  thing?: InputMaybe<ThingsThingFilter>;
  /** Things/name */
  name?: InputMaybe<StringFilter>;
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
  /** Things/Thing */
  thing?: Maybe<ThingsThing>;
  /** Things/description */
  description?: Maybe<RichField>;
  /** Things/name */
  name?: Maybe<Scalars['String']>;
};

export type ThingsIdeaInput = {
  /** fibery/rank */
  rank?: InputMaybe<Scalars['Float']>;
  /** Things/Thing */
  thing?: InputMaybe<ThingsThingFilter>;
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
  /** Things/Thing */
  thing?: InputMaybe<ThingsThingOrder>;
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
  /** Add Thing. Create new Thing and link to Idea */
  addThing?: Maybe<MutationResult>;
  /** Batch Add Thing. Create new Thing and link to Idea */
  addThingBatch?: Maybe<MutationResult>;
  /** Update Thing. Update Thing linked to Idea */
  updateThing?: Maybe<MutationResult>;
  /** Batch Update Thing. Update Thing linked to Idea */
  updateThingBatch?: Maybe<MutationResult>;
  /** Unlink Thing. Unlink Thing from Idea while not deleting it */
  unlinkThing?: Maybe<MutationResult>;
  /** Delete Thing. Delete Thing linked to Idea */
  deleteThing?: Maybe<MutationResult>;
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
  thing?: InputMaybe<ThingsThingFilter>;
  name?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationscreateBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsIdeaInput>>>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationsupdateArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  thing?: InputMaybe<ThingsThingFilter>;
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
export type ThingsIdeaOperationsaddThingArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  event?: InputMaybe<ThingsEventFilter>;
  idea?: InputMaybe<ThingsIdeaFilter>;
  name?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ThingsTypeFilter>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationsaddThingBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsThingInput>>>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationsupdateThingArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  event?: InputMaybe<ThingsEventFilter>;
  idea?: InputMaybe<ThingsIdeaFilter>;
  name?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ThingsTypeFilter>;
};


/** Available operations which can be done with found ideas via provided query or created */
export type ThingsIdeaOperationsupdateThingBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsThingInput>>>;
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
  /** Things/Thing */
  thing?: InputMaybe<ThingsThingFilter>;
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
  /** Things/Event */
  event?: Maybe<ThingsEvent>;
  /** Things/Idea */
  idea?: Maybe<ThingsIdea>;
  /** Things/Name */
  name?: Maybe<Scalars['String']>;
  /** Things/Query */
  query?: Maybe<Scalars['String']>;
  /** Things/Type */
  type?: Maybe<ThingsType>;
};

export type ThingsThingInput = {
  /** fibery/rank */
  rank?: InputMaybe<Scalars['Float']>;
  /** Things/Event */
  event?: InputMaybe<ThingsEventFilter>;
  /** Things/Idea */
  idea?: InputMaybe<ThingsIdeaFilter>;
  /** Things/Name */
  name?: InputMaybe<Scalars['String']>;
  /** Things/Query */
  query?: InputMaybe<Scalars['String']>;
  /** Things/Type */
  type?: InputMaybe<ThingsTypeFilter>;
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
  /** Things/Event */
  event?: InputMaybe<ThingsEventOrder>;
  /** Things/Idea */
  idea?: InputMaybe<ThingsIdeaOrder>;
  /** Things/Name */
  name?: InputMaybe<Order>;
  /** Things/Query */
  query?: InputMaybe<Order>;
  /** Things/Type */
  type?: InputMaybe<ThingsTypeOrder>;
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
  /** Add Event. Create new Event and link to Thing */
  addEvent?: Maybe<MutationResult>;
  /** Batch Add Event. Create new Event and link to Thing */
  addEventBatch?: Maybe<MutationResult>;
  /** Update Event. Update Event linked to Thing */
  updateEvent?: Maybe<MutationResult>;
  /** Batch Update Event. Update Event linked to Thing */
  updateEventBatch?: Maybe<MutationResult>;
  /** Unlink Event. Unlink Event from Thing while not deleting it */
  unlinkEvent?: Maybe<MutationResult>;
  /** Delete Event. Delete Event linked to Thing */
  deleteEvent?: Maybe<MutationResult>;
  /** Add Idea. Create new Idea and link to Thing */
  addIdea?: Maybe<MutationResult>;
  /** Batch Add Idea. Create new Idea and link to Thing */
  addIdeaBatch?: Maybe<MutationResult>;
  /** Update Idea. Update Idea linked to Thing */
  updateIdea?: Maybe<MutationResult>;
  /** Batch Update Idea. Update Idea linked to Thing */
  updateIdeaBatch?: Maybe<MutationResult>;
  /** Unlink Idea. Unlink Idea from Thing while not deleting it */
  unlinkIdea?: Maybe<MutationResult>;
  /** Delete Idea. Delete Idea linked to Thing */
  deleteIdea?: Maybe<MutationResult>;
  /** Add Type. Create new Type and link to Thing */
  addType?: Maybe<MutationResult>;
  /** Batch Add Type. Create new Type and link to Thing */
  addTypeBatch?: Maybe<MutationResult>;
  /** Update Type. Update Type linked to Thing */
  updateType?: Maybe<MutationResult>;
  /** Batch Update Type. Update Type linked to Thing */
  updateTypeBatch?: Maybe<MutationResult>;
  /** Unlink Type. Unlink Type from Thing while not deleting it */
  unlinkType?: Maybe<MutationResult>;
  /** Delete Type. Delete Type linked to Thing */
  deleteType?: Maybe<MutationResult>;
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
  event?: InputMaybe<ThingsEventFilter>;
  idea?: InputMaybe<ThingsIdeaFilter>;
  name?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ThingsTypeFilter>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationscreateBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsThingInput>>>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsupdateArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  event?: InputMaybe<ThingsEventFilter>;
  idea?: InputMaybe<ThingsIdeaFilter>;
  name?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ThingsTypeFilter>;
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
export type ThingsThingOperationsaddEventArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  thing?: InputMaybe<ThingsThingFilter>;
  name?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsaddEventBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsEventInput>>>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsupdateEventArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  thing?: InputMaybe<ThingsThingFilter>;
  name?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsupdateEventBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsEventInput>>>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsaddIdeaArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  thing?: InputMaybe<ThingsThingFilter>;
  name?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsaddIdeaBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsIdeaInput>>>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsupdateIdeaArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  thing?: InputMaybe<ThingsThingFilter>;
  name?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsupdateIdeaBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsIdeaInput>>>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsaddTypeArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  things?: InputMaybe<Array<InputMaybe<ThingsThingFilter>>>;
  name?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsaddTypeBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsTypeInput>>>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsupdateTypeArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  things?: InputMaybe<Array<InputMaybe<ThingsThingFilter>>>;
  name?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsupdateTypeBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsTypeInput>>>;
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
  /** Things/Event */
  event?: InputMaybe<ThingsEventFilter>;
  /** Things/Idea */
  idea?: InputMaybe<ThingsIdeaFilter>;
  /** Things/Name */
  name?: InputMaybe<StringFilter>;
  /** Things/Query */
  query?: InputMaybe<StringFilter>;
  /** Things/Type */
  type?: InputMaybe<ThingsTypeFilter>;
};

export type ThingsThingCollectionFilter = {
  isEmpty?: InputMaybe<Scalars['Boolean']>;
  contains?: InputMaybe<Array<InputMaybe<ThingsThingFilter>>>;
  containsAny?: InputMaybe<Array<InputMaybe<ThingsThingFilter>>>;
  notContains?: InputMaybe<Array<InputMaybe<ThingsThingFilter>>>;
  notContainsAny?: InputMaybe<Array<InputMaybe<ThingsThingFilter>>>;
};

/** Available fields and relations for Things/Type */
export type ThingsType = {
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
  /** Things/Things. By default, the inner list is limited by 100 records */
  things?: Maybe<Array<Maybe<ThingsThing>>>;
  /** Things/description */
  description?: Maybe<RichField>;
  /** Things/name */
  name?: Maybe<Scalars['String']>;
};


/** Available fields and relations for Things/Type */
export type ThingsTypethingsArgs = {
  orderBy?: InputMaybe<ThingsThingOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<IDFilter>;
  publicId?: InputMaybe<StringFilter>;
  creationDate?: InputMaybe<StringFilter>;
  modificationDate?: InputMaybe<StringFilter>;
  rank?: InputMaybe<FloatFilter>;
  createdBy?: InputMaybe<FiberyUserFilter>;
  event?: InputMaybe<ThingsEventFilter>;
  idea?: InputMaybe<ThingsIdeaFilter>;
  name?: InputMaybe<StringFilter>;
  query?: InputMaybe<StringFilter>;
  type?: InputMaybe<ThingsTypeFilter>;
};

export type ThingsTypeInput = {
  /** fibery/rank */
  rank?: InputMaybe<Scalars['Float']>;
  /** Things/Things */
  things?: InputMaybe<Array<InputMaybe<ThingsThingFilter>>>;
  /** Things/name */
  name?: InputMaybe<Scalars['String']>;
};

export type ThingsTypeOrder = {
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

/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperations = {
  /** Create. Create a new Type and specify field values */
  create?: Maybe<MutationResult>;
  /** Batch Create. Create a new Type and specify field values */
  createBatch?: Maybe<MutationResult>;
  /** Update. Set new values for fields */
  update?: Maybe<MutationResult>;
  /** Batch Update. Set new values for fields */
  updateBatch?: Maybe<MutationResult>;
  /** Delete. Delete Type */
  delete?: Maybe<MutationResult>;
  /** Script. Execute Javascript code */
  script?: Maybe<MutationResult>;
  /** Batch Script. Execute Javascript code */
  scriptBatch?: Maybe<MutationResult>;
  /** Add Things Item. Add new Thing to Things list */
  addThingsItem?: Maybe<MutationResult>;
  /** Batch Add Things Item. Add new Thing to Things list */
  addThingsItemBatch?: Maybe<MutationResult>;
  /** Update Things. Update Things linked to Type */
  updateThings?: Maybe<MutationResult>;
  /** Batch Update Things. Update Things linked to Type */
  updateThingsBatch?: Maybe<MutationResult>;
  /** Link Things. Link Things to Type */
  linkThings?: Maybe<MutationResult>;
  /** Batch Link Things. Link Things to Type */
  linkThingsBatch?: Maybe<MutationResult>;
  /** Unlink Things. Unlink Things from Type while not deleting it */
  unlinkThings?: Maybe<MutationResult>;
  /** Batch Unlink Things. Unlink Things from Type while not deleting it */
  unlinkThingsBatch?: Maybe<MutationResult>;
  /** Delete Things. Delete Things linked to Type */
  deleteThings?: Maybe<MutationResult>;
  /** Batch Delete Things. Delete Things linked to Type */
  deleteThingsBatch?: Maybe<MutationResult>;
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
  /** countOfEntities. Count of found or created types to be modified */
  countOfEntities?: Maybe<Scalars['Int']>;
  /** listEntities. List of found or created types to be modified */
  listEntities?: Maybe<Array<Maybe<Entity>>>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationscreateArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  things?: InputMaybe<Array<InputMaybe<ThingsThingFilter>>>;
  name?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationscreateBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsTypeInput>>>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsupdateArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  things?: InputMaybe<Array<InputMaybe<ThingsThingFilter>>>;
  name?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsupdateBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsTypeInput>>>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsscriptArgs = {
  script?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsscriptBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ScriptInput>>>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsaddThingsItemArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  event?: InputMaybe<ThingsEventFilter>;
  idea?: InputMaybe<ThingsIdeaFilter>;
  name?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ThingsTypeFilter>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsaddThingsItemBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsThingInput>>>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsupdateThingsArgs = {
  filter?: InputMaybe<ThingsThingFilter>;
  fields?: InputMaybe<ThingsThingInput>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsupdateThingsBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<UpdateThingsInput>>>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationslinkThingsArgs = {
  id?: InputMaybe<IDFilter>;
  publicId?: InputMaybe<StringFilter>;
  creationDate?: InputMaybe<StringFilter>;
  modificationDate?: InputMaybe<StringFilter>;
  rank?: InputMaybe<FloatFilter>;
  createdBy?: InputMaybe<FiberyUserFilter>;
  event?: InputMaybe<ThingsEventFilter>;
  idea?: InputMaybe<ThingsIdeaFilter>;
  name?: InputMaybe<StringFilter>;
  query?: InputMaybe<StringFilter>;
  type?: InputMaybe<ThingsTypeFilter>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationslinkThingsBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsThingInput>>>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsunlinkThingsArgs = {
  id?: InputMaybe<IDFilter>;
  publicId?: InputMaybe<StringFilter>;
  creationDate?: InputMaybe<StringFilter>;
  modificationDate?: InputMaybe<StringFilter>;
  rank?: InputMaybe<FloatFilter>;
  createdBy?: InputMaybe<FiberyUserFilter>;
  event?: InputMaybe<ThingsEventFilter>;
  idea?: InputMaybe<ThingsIdeaFilter>;
  name?: InputMaybe<StringFilter>;
  query?: InputMaybe<StringFilter>;
  type?: InputMaybe<ThingsTypeFilter>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsunlinkThingsBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsThingInput>>>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsdeleteThingsArgs = {
  id?: InputMaybe<IDFilter>;
  publicId?: InputMaybe<StringFilter>;
  creationDate?: InputMaybe<StringFilter>;
  modificationDate?: InputMaybe<StringFilter>;
  rank?: InputMaybe<FloatFilter>;
  createdBy?: InputMaybe<FiberyUserFilter>;
  event?: InputMaybe<ThingsEventFilter>;
  idea?: InputMaybe<ThingsIdeaFilter>;
  name?: InputMaybe<StringFilter>;
  query?: InputMaybe<StringFilter>;
  type?: InputMaybe<ThingsTypeFilter>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsdeleteThingsBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsThingInput>>>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsappendContentToDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsappendContentToDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<AppendContentToDescriptionInput>>>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsprependContentToDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsprependContentToDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<PrependContentToDescriptionInput>>>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsoverwriteDescriptionArgs = {
  value?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsoverwriteDescriptionBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<OverwriteDescriptionInput>>>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsnotifyCreatedByArgs = {
  subject?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  notifyAuthor?: InputMaybe<Scalars['Boolean']>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsnotifyCreatedByBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<NotifyCreatedByInput>>>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsnotifyUsersArgs = {
  to?: InputMaybe<Array<InputMaybe<FiberyUserFilter>>>;
  subject?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  notifyAuthor?: InputMaybe<Scalars['Boolean']>;
  noEmptySend?: InputMaybe<Scalars['Boolean']>;
};


/** Available operations which can be done with found types via provided query or created */
export type ThingsTypeOperationsnotifyUsersBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<NotifyUsersInput>>>;
};

/** Filter for Things/Type */
export type ThingsTypeFilter = {
  orderBy?: InputMaybe<ThingsTypeOrder>;
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
  /** Things/Things */
  things?: InputMaybe<ThingsThingCollectionFilter>;
  /** Things/name */
  name?: InputMaybe<StringFilter>;
};

export type ThingsTypeCollectionFilter = {
  isEmpty?: InputMaybe<Scalars['Boolean']>;
  contains?: InputMaybe<Array<InputMaybe<ThingsTypeFilter>>>;
  containsAny?: InputMaybe<Array<InputMaybe<ThingsTypeFilter>>>;
  notContains?: InputMaybe<Array<InputMaybe<ThingsTypeFilter>>>;
  notContainsAny?: InputMaybe<Array<InputMaybe<ThingsTypeFilter>>>;
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

/** Input for Update Things */
export type UpdateThingsInput = {
  /** Add a filter for Things */
  filter?: InputMaybe<ThingsThingFilter>;
  /** Select fields you want to change */
  fields?: InputMaybe<ThingsThingInput>;
};

/** Use mutations to modify database */
export type Mutation = {
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
   *     things(id:{is: "AAAA-BBBB-CCCC"}){
   *         update(name:"Updated"){message}
   *     }
   * }
   * ```
   */
  things?: Maybe<ThingsThingOperations>;
  /**
   * Modify selected entities using multiple actions (update, link and etc.)
   * ```
   * mutation {
   *     types(id:{is: "AAAA-BBBB-CCCC"}){
   *         update(name:"Updated"){message}
   *     }
   * }
   * ```
   */
  types?: Maybe<ThingsTypeOperations>;
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
  thing?: InputMaybe<ThingsThingFilter>;
  name?: InputMaybe<StringFilter>;
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
  thing?: InputMaybe<ThingsThingFilter>;
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
  event?: InputMaybe<ThingsEventFilter>;
  idea?: InputMaybe<ThingsIdeaFilter>;
  name?: InputMaybe<StringFilter>;
  query?: InputMaybe<StringFilter>;
  type?: InputMaybe<ThingsTypeFilter>;
};


/** Use mutations to modify database */
export type MutationtypesArgs = {
  orderBy?: InputMaybe<ThingsTypeOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<IDFilter>;
  publicId?: InputMaybe<StringFilter>;
  creationDate?: InputMaybe<StringFilter>;
  modificationDate?: InputMaybe<StringFilter>;
  rank?: InputMaybe<FloatFilter>;
  createdBy?: InputMaybe<FiberyUserFilter>;
  things?: InputMaybe<ThingsThingCollectionFilter>;
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
  ThingsEvent: ResolverTypeWrapper<ThingsEvent>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ThingsEventInput: ThingsEventInput;
  ThingsEventOrder: ThingsEventOrder;
  ThingsEventOperations: ResolverTypeWrapper<ThingsEventOperations>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ThingsEventFilter: ThingsEventFilter;
  ThingsEventCollectionFilter: ThingsEventCollectionFilter;
  ThingsIdea: ResolverTypeWrapper<ThingsIdea>;
  ThingsIdeaInput: ThingsIdeaInput;
  ThingsIdeaOrder: ThingsIdeaOrder;
  ThingsIdeaOperations: ResolverTypeWrapper<ThingsIdeaOperations>;
  ThingsIdeaFilter: ThingsIdeaFilter;
  ThingsIdeaCollectionFilter: ThingsIdeaCollectionFilter;
  ThingsThing: ResolverTypeWrapper<ThingsThing>;
  ThingsThingInput: ThingsThingInput;
  ThingsThingOrder: ThingsThingOrder;
  ThingsThingOperations: ResolverTypeWrapper<ThingsThingOperations>;
  ThingsThingFilter: ThingsThingFilter;
  ThingsThingCollectionFilter: ThingsThingCollectionFilter;
  ThingsType: ResolverTypeWrapper<ThingsType>;
  ThingsTypeInput: ThingsTypeInput;
  ThingsTypeOrder: ThingsTypeOrder;
  ThingsTypeOperations: ResolverTypeWrapper<ThingsTypeOperations>;
  ThingsTypeFilter: ThingsTypeFilter;
  ThingsTypeCollectionFilter: ThingsTypeCollectionFilter;
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
  UpdateThingsInput: UpdateThingsInput;
  Mutation: ResolverTypeWrapper<{}>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  Int: Scalars['Int'];
  ThingsEvent: ThingsEvent;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Float: Scalars['Float'];
  ThingsEventInput: ThingsEventInput;
  ThingsEventOrder: ThingsEventOrder;
  ThingsEventOperations: ThingsEventOperations;
  Boolean: Scalars['Boolean'];
  ThingsEventFilter: ThingsEventFilter;
  ThingsEventCollectionFilter: ThingsEventCollectionFilter;
  ThingsIdea: ThingsIdea;
  ThingsIdeaInput: ThingsIdeaInput;
  ThingsIdeaOrder: ThingsIdeaOrder;
  ThingsIdeaOperations: ThingsIdeaOperations;
  ThingsIdeaFilter: ThingsIdeaFilter;
  ThingsIdeaCollectionFilter: ThingsIdeaCollectionFilter;
  ThingsThing: ThingsThing;
  ThingsThingInput: ThingsThingInput;
  ThingsThingOrder: ThingsThingOrder;
  ThingsThingOperations: ThingsThingOperations;
  ThingsThingFilter: ThingsThingFilter;
  ThingsThingCollectionFilter: ThingsThingCollectionFilter;
  ThingsType: ThingsType;
  ThingsTypeInput: ThingsTypeInput;
  ThingsTypeOrder: ThingsTypeOrder;
  ThingsTypeOperations: ThingsTypeOperations;
  ThingsTypeFilter: ThingsTypeFilter;
  ThingsTypeCollectionFilter: ThingsTypeCollectionFilter;
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
  UpdateThingsInput: UpdateThingsInput;
  Mutation: {};
}>;

export type QueryResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  me?: Resolver<Maybe<ResolversTypes['FiberyUser']>, ParentType, ContextType>;
  findEvents?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThingsEvent']>>>, ParentType, ContextType, Partial<QueryfindEventsArgs>>;
  findIdeas?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThingsIdea']>>>, ParentType, ContextType, Partial<QueryfindIdeasArgs>>;
  findThings?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThingsThing']>>>, ParentType, ContextType, Partial<QueryfindThingsArgs>>;
  findTypes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThingsType']>>>, ParentType, ContextType, Partial<QueryfindTypesArgs>>;
}>;

export type ThingsEventResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThingsEvent'] = ResolversParentTypes['ThingsEvent']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  publicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modificationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['FiberyUser']>, ParentType, ContextType>;
  thing?: Resolver<Maybe<ResolversTypes['ThingsThing']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['RichField']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  addThing?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationsaddThingArgs>>;
  addThingBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationsaddThingBatchArgs>>;
  updateThing?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationsupdateThingArgs>>;
  updateThingBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsEventOperationsupdateThingBatchArgs>>;
  unlinkThing?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType>;
  deleteThing?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType>;
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
  thing?: Resolver<Maybe<ResolversTypes['ThingsThing']>, ParentType, ContextType>;
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
  addThing?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationsaddThingArgs>>;
  addThingBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationsaddThingBatchArgs>>;
  updateThing?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationsupdateThingArgs>>;
  updateThingBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsIdeaOperationsupdateThingBatchArgs>>;
  unlinkThing?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType>;
  deleteThing?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType>;
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

export type ThingsThingResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThingsThing'] = ResolversParentTypes['ThingsThing']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  publicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modificationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['FiberyUser']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['RichField']>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['ThingsEvent']>, ParentType, ContextType>;
  idea?: Resolver<Maybe<ResolversTypes['ThingsIdea']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  query?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['ThingsType']>, ParentType, ContextType>;
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
  addEvent?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsaddEventArgs>>;
  addEventBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsaddEventBatchArgs>>;
  updateEvent?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsupdateEventArgs>>;
  updateEventBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsupdateEventBatchArgs>>;
  unlinkEvent?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType>;
  deleteEvent?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType>;
  addIdea?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsaddIdeaArgs>>;
  addIdeaBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsaddIdeaBatchArgs>>;
  updateIdea?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsupdateIdeaArgs>>;
  updateIdeaBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsupdateIdeaBatchArgs>>;
  unlinkIdea?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType>;
  deleteIdea?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType>;
  addType?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsaddTypeArgs>>;
  addTypeBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsaddTypeBatchArgs>>;
  updateType?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsupdateTypeArgs>>;
  updateTypeBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsupdateTypeBatchArgs>>;
  unlinkType?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType>;
  deleteType?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType>;
  notifyCreatedBy?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsnotifyCreatedByArgs>>;
  notifyCreatedByBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsnotifyCreatedByBatchArgs>>;
  notifyUsers?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsnotifyUsersArgs>>;
  notifyUsersBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsThingOperationsnotifyUsersBatchArgs>>;
  countOfEntities?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  listEntities?: Resolver<Maybe<Array<Maybe<ResolversTypes['Entity']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThingsTypeResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThingsType'] = ResolversParentTypes['ThingsType']> = ResolversObject<{
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  publicId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  creationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  modificationDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rank?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['FiberyUser']>, ParentType, ContextType>;
  things?: Resolver<Maybe<Array<Maybe<ResolversTypes['ThingsThing']>>>, ParentType, ContextType, Partial<ThingsTypethingsArgs>>;
  description?: Resolver<Maybe<ResolversTypes['RichField']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ThingsTypeOperationsResolvers<ContextType = MeshContext, ParentType extends ResolversParentTypes['ThingsTypeOperations'] = ResolversParentTypes['ThingsTypeOperations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationscreateArgs>>;
  createBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationscreateBatchArgs>>;
  update?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsupdateArgs>>;
  updateBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsupdateBatchArgs>>;
  delete?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType>;
  script?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsscriptArgs>>;
  scriptBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsscriptBatchArgs>>;
  addThingsItem?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsaddThingsItemArgs>>;
  addThingsItemBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsaddThingsItemBatchArgs>>;
  updateThings?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsupdateThingsArgs>>;
  updateThingsBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsupdateThingsBatchArgs>>;
  linkThings?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationslinkThingsArgs>>;
  linkThingsBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationslinkThingsBatchArgs>>;
  unlinkThings?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsunlinkThingsArgs>>;
  unlinkThingsBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsunlinkThingsBatchArgs>>;
  deleteThings?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsdeleteThingsArgs>>;
  deleteThingsBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsdeleteThingsBatchArgs>>;
  appendContentToDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsappendContentToDescriptionArgs>>;
  appendContentToDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsappendContentToDescriptionBatchArgs>>;
  prependContentToDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsprependContentToDescriptionArgs>>;
  prependContentToDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsprependContentToDescriptionBatchArgs>>;
  overwriteDescription?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsoverwriteDescriptionArgs>>;
  overwriteDescriptionBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsoverwriteDescriptionBatchArgs>>;
  notifyCreatedBy?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsnotifyCreatedByArgs>>;
  notifyCreatedByBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsnotifyCreatedByBatchArgs>>;
  notifyUsers?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsnotifyUsersArgs>>;
  notifyUsersBatch?: Resolver<Maybe<ResolversTypes['MutationResult']>, ParentType, ContextType, Partial<ThingsTypeOperationsnotifyUsersBatchArgs>>;
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
  events?: Resolver<Maybe<ResolversTypes['ThingsEventOperations']>, ParentType, ContextType, Partial<MutationeventsArgs>>;
  ideas?: Resolver<Maybe<ResolversTypes['ThingsIdeaOperations']>, ParentType, ContextType, Partial<MutationideasArgs>>;
  things?: Resolver<Maybe<ResolversTypes['ThingsThingOperations']>, ParentType, ContextType, Partial<MutationthingsArgs>>;
  types?: Resolver<Maybe<ResolversTypes['ThingsTypeOperations']>, ParentType, ContextType, Partial<MutationtypesArgs>>;
}>;

export type Resolvers<ContextType = MeshContext> = ResolversObject<{
  Query?: QueryResolvers<ContextType>;
  ThingsEvent?: ThingsEventResolvers<ContextType>;
  ThingsEventOperations?: ThingsEventOperationsResolvers<ContextType>;
  ThingsIdea?: ThingsIdeaResolvers<ContextType>;
  ThingsIdeaOperations?: ThingsIdeaOperationsResolvers<ContextType>;
  ThingsThing?: ThingsThingResolvers<ContextType>;
  ThingsThingOperations?: ThingsThingOperationsResolvers<ContextType>;
  ThingsType?: ThingsTypeResolvers<ContextType>;
  ThingsTypeOperations?: ThingsTypeOperationsResolvers<ContextType>;
  FiberyUser?: FiberyUserResolvers<ContextType>;
  DateRange?: DateRangeResolvers<ContextType>;
  RichField?: RichFieldResolvers<ContextType>;
  Document?: DocumentResolvers<ContextType>;
  Entity?: EntityResolvers<ContextType>;
  Doc?: DocResolvers<ContextType>;
  MutationResult?: MutationResultResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
}>;


export type MeshContext = FiberyTypes.Context & BaseMeshContext;


const baseDir = pathModule.join(typeof __dirname === 'string' ? __dirname : '/', '..');

const importFn: ImportFn = <T>(moduleId: string) => {
  const relativeModuleId = (pathModule.isAbsolute(moduleId) ? pathModule.relative(baseDir, moduleId) : moduleId).split('\\').join('/').replace(baseDir + '/', '');
  switch(relativeModuleId) {
    case ".mesh/sources/Fibery/introspectionSchema":
      return import("./sources/Fibery/introspectionSchema") as T;
    
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

export const rawServeConfig: YamlConfig.Config['serve'] = {"browser":false} as any
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
const fiberyTransforms = [];
const additionalTypeDefs = [] as any[];
const fiberyHandler = new GraphqlHandler({
              name: "Fibery",
              config: {"endpoint":"https://everything.fibery.io/api/graphql/space/Things","operationHeaders":{"Authorization":"Bearer {env.FIBERY_TOKEN}"},"schemaHeaders":{"Authorization":"Bearer {env.FIBERY_TOKEN}"}},
              baseDir,
              cache,
              pubsub,
              store: sourcesStore.child("Fibery"),
              logger: logger.child("Fibery"),
              importFn,
            });
sources[0] = {
          name: 'Fibery',
          handler: fiberyHandler,
          transforms: fiberyTransforms
        }
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

export function createBuiltMeshHTTPHandler(): MeshHTTPHandler<MeshContext> {
  return createMeshHTTPHandler<MeshContext>({
    baseDir,
    getBuiltMesh: getBuiltMesh,
    rawServeConfig: {"browser":false},
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