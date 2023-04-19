// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace ThingsTypes {
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
  contacts?: InputMaybe<StringFilter>;
  end?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  start?: InputMaybe<StringFilter>;
  allDay?: InputMaybe<BooleanFilter>;
  source?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  state?: InputMaybe<WorkflowStateThingsEventFilter>;
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
  /** Things/Contacts */
  contacts?: Maybe<Scalars['String']>;
  /** Things/End */
  end?: Maybe<Scalars['String']>;
  /** Things/Name */
  name?: Maybe<Scalars['String']>;
  /** Things/Start */
  start?: Maybe<Scalars['String']>;
  /** Things/allDay */
  allDay?: Maybe<Scalars['Boolean']>;
  /** Things/description */
  description?: Maybe<RichField>;
  /** Things/source */
  source?: Maybe<Scalars['String']>;
  /** Things/url */
  url?: Maybe<Scalars['String']>;
  /** workflow/state */
  state?: Maybe<WorkflowStateThingsEvent>;
};

export type ThingsEventInput = {
  /** fibery/rank */
  rank?: InputMaybe<Scalars['Float']>;
  /** Things/Contacts */
  contacts?: InputMaybe<Scalars['String']>;
  /** Things/End */
  end?: InputMaybe<Scalars['String']>;
  /** Things/Name */
  name?: InputMaybe<Scalars['String']>;
  /** Things/Start */
  start?: InputMaybe<Scalars['String']>;
  /** Things/allDay */
  allDay?: InputMaybe<Scalars['Boolean']>;
  /** Things/source */
  source?: InputMaybe<Scalars['String']>;
  /** Things/url */
  url?: InputMaybe<Scalars['String']>;
  /** workflow/state */
  state?: InputMaybe<WorkflowStateThingsEventFilter>;
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
  /** Things/Contacts */
  contacts?: InputMaybe<Order>;
  /** Things/End */
  end?: InputMaybe<Order>;
  /** Things/Name */
  name?: InputMaybe<Order>;
  /** Things/Start */
  start?: InputMaybe<Order>;
  /** Things/allDay */
  allDay?: InputMaybe<Order>;
  /** Things/source */
  source?: InputMaybe<Order>;
  /** Things/url */
  url?: InputMaybe<Order>;
  /** workflow/state */
  state?: InputMaybe<WorkflowStateThingsEventOrder>;
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
  /** Move to final state. Move Event to final state */
  moveToFinalState?: Maybe<MutationResult>;
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
  contacts?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['String']>;
  allDay?: InputMaybe<Scalars['Boolean']>;
  source?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<WorkflowStateThingsEventFilter>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationscreateBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsEventInput>>>;
};


/** Available operations which can be done with found events via provided query or created */
export type ThingsEventOperationsupdateArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  contacts?: InputMaybe<Scalars['String']>;
  end?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  start?: InputMaybe<Scalars['String']>;
  allDay?: InputMaybe<Scalars['Boolean']>;
  source?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<WorkflowStateThingsEventFilter>;
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
  /** Things/Contacts */
  contacts?: InputMaybe<StringFilter>;
  /** Things/End */
  end?: InputMaybe<StringFilter>;
  /** Things/Name */
  name?: InputMaybe<StringFilter>;
  /** Things/Start */
  start?: InputMaybe<StringFilter>;
  /** Things/allDay */
  allDay?: InputMaybe<BooleanFilter>;
  /** Things/source */
  source?: InputMaybe<StringFilter>;
  /** Things/url */
  url?: InputMaybe<StringFilter>;
  /** workflow/state */
  state?: InputMaybe<WorkflowStateThingsEventFilter>;
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

/** Available fields and relations for workflow/state_Things/Event */
export type WorkflowStateThingsEvent = {
  /** fibery/id */
  id?: Maybe<Scalars['ID']>;
  /** fibery/public-id */
  publicId?: Maybe<Scalars['String']>;
  /** fibery/rank */
  rank?: Maybe<Scalars['Float']>;
  /** enum/icon */
  icon?: Maybe<Scalars['String']>;
  /** enum/name */
  name?: Maybe<Scalars['String']>;
  /** workflow/Final */
  final?: Maybe<Scalars['Boolean']>;
};

export type WorkflowStateThingsEventInput = {
  /** fibery/rank */
  rank?: InputMaybe<Scalars['Float']>;
  /** enum/icon */
  icon?: InputMaybe<Scalars['String']>;
  /** enum/name */
  name?: InputMaybe<Scalars['String']>;
  /** workflow/Final */
  final?: InputMaybe<Scalars['Boolean']>;
};

export type WorkflowStateThingsEventOrder = {
  /** fibery/id */
  id?: InputMaybe<Order>;
  /** fibery/public-id */
  publicId?: InputMaybe<Order>;
  /** fibery/rank */
  rank?: InputMaybe<Order>;
  /** enum/icon */
  icon?: InputMaybe<Order>;
  /** enum/name */
  name?: InputMaybe<Order>;
  /** workflow/Final */
  final?: InputMaybe<Order>;
};

/** Filter for workflow/state_Things/Event */
export type WorkflowStateThingsEventFilter = {
  orderBy?: InputMaybe<WorkflowStateThingsEventOrder>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** fibery/id */
  id?: InputMaybe<IDFilter>;
  /** fibery/public-id */
  publicId?: InputMaybe<StringFilter>;
  /** fibery/rank */
  rank?: InputMaybe<FloatFilter>;
  /** enum/icon */
  icon?: InputMaybe<StringFilter>;
  /** enum/name */
  name?: InputMaybe<StringFilter>;
  /** workflow/Final */
  final?: InputMaybe<BooleanFilter>;
};

export type WorkflowStateThingsEventCollectionFilter = {
  isEmpty?: InputMaybe<Scalars['Boolean']>;
  contains?: InputMaybe<Array<InputMaybe<WorkflowStateThingsEventFilter>>>;
  containsAny?: InputMaybe<Array<InputMaybe<WorkflowStateThingsEventFilter>>>;
  notContains?: InputMaybe<Array<InputMaybe<WorkflowStateThingsEventFilter>>>;
  notContainsAny?: InputMaybe<Array<InputMaybe<WorkflowStateThingsEventFilter>>>;
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
  contacts?: InputMaybe<StringFilter>;
  end?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  start?: InputMaybe<StringFilter>;
  allDay?: InputMaybe<BooleanFilter>;
  source?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
  state?: InputMaybe<WorkflowStateThingsEventFilter>;
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

  export type QuerySdk = {
      /** Retrieves current user **/
  me: InContextSdkMethod<Query['me'], {}, MeshContext>,
  /** Find ThingsDocument records.

By default, offset equals to 0 and limit equals to 100

```{findDocuments{id,name}}``` **/
  findDocuments: InContextSdkMethod<Query['findDocuments'], QueryfindDocumentsArgs, MeshContext>,
  /** Find ThingsEvent records.

By default, offset equals to 0 and limit equals to 100

```{findEvents{id,name}}``` **/
  findEvents: InContextSdkMethod<Query['findEvents'], QueryfindEventsArgs, MeshContext>,
  /** Find ThingsIdea records.

By default, offset equals to 0 and limit equals to 100

```{findIdeas{id,name}}``` **/
  findIdeas: InContextSdkMethod<Query['findIdeas'], QueryfindIdeasArgs, MeshContext>,
  /** Find ThingsPerson records.

By default, offset equals to 0 and limit equals to 100

```{findPeople{id,name}}``` **/
  findPeople: InContextSdkMethod<Query['findPeople'], QueryfindPeopleArgs, MeshContext>,
  /** Find ThingsPost records.

By default, offset equals to 0 and limit equals to 100

```{findPosts{id,name}}``` **/
  findPosts: InContextSdkMethod<Query['findPosts'], QueryfindPostsArgs, MeshContext>,
  /** Find ThingsThing records.

By default, offset equals to 0 and limit equals to 100

```{findThings{id,name}}``` **/
  findThings: InContextSdkMethod<Query['findThings'], QueryfindThingsArgs, MeshContext>
  };

  export type MutationSdk = {
      /** Modify selected entities using multiple actions (update, link and etc.)
```
mutation {
    documents(id:{is: "AAAA-BBBB-CCCC"}){
        update(name:"Updated"){message}
    }
}
``` **/
  documents: InContextSdkMethod<Mutation['documents'], MutationdocumentsArgs, MeshContext>,
  /** Modify selected entities using multiple actions (update, link and etc.)
```
mutation {
    events(id:{is: "AAAA-BBBB-CCCC"}){
        update(name:"Updated"){message}
    }
}
``` **/
  events: InContextSdkMethod<Mutation['events'], MutationeventsArgs, MeshContext>,
  /** Modify selected entities using multiple actions (update, link and etc.)
```
mutation {
    ideas(id:{is: "AAAA-BBBB-CCCC"}){
        update(name:"Updated"){message}
    }
}
``` **/
  ideas: InContextSdkMethod<Mutation['ideas'], MutationideasArgs, MeshContext>,
  /** Modify selected entities using multiple actions (update, link and etc.)
```
mutation {
    people(id:{is: "AAAA-BBBB-CCCC"}){
        update(name:"Updated"){message}
    }
}
``` **/
  people: InContextSdkMethod<Mutation['people'], MutationpeopleArgs, MeshContext>,
  /** Modify selected entities using multiple actions (update, link and etc.)
```
mutation {
    posts(id:{is: "AAAA-BBBB-CCCC"}){
        update(name:"Updated"){message}
    }
}
``` **/
  posts: InContextSdkMethod<Mutation['posts'], MutationpostsArgs, MeshContext>,
  /** Modify selected entities using multiple actions (update, link and etc.)
```
mutation {
    things(id:{is: "AAAA-BBBB-CCCC"}){
        update(name:"Updated"){message}
    }
}
``` **/
  things: InContextSdkMethod<Mutation['things'], MutationthingsArgs, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Things"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
