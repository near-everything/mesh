// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace FiberyTypes {
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
   * Find ThingsThing records.
   *
   * By default, offset equals to 0 and limit equals to 100
   *
   * ```{findThings{id,name}}```
   */
  findThings?: Maybe<Array<Maybe<ThingsThing>>>;
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
  brand?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
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
  /** Things/Brand */
  brand?: Maybe<Scalars['String']>;
  /** Things/Description */
  description?: Maybe<RichField>;
  /** Things/Name */
  name?: Maybe<Scalars['String']>;
};

export type ThingsThingInput = {
  /** fibery/rank */
  rank?: InputMaybe<Scalars['Float']>;
  /** Things/Brand */
  brand?: InputMaybe<Scalars['String']>;
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
  /** Things/Brand */
  brand?: InputMaybe<Order>;
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
  brand?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationscreateBatchArgs = {
  data?: InputMaybe<Array<InputMaybe<ThingsThingInput>>>;
};


/** Available operations which can be done with found things via provided query or created */
export type ThingsThingOperationsupdateArgs = {
  rank?: InputMaybe<Scalars['Float']>;
  brand?: InputMaybe<Scalars['String']>;
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
  /** Things/Brand */
  brand?: InputMaybe<StringFilter>;
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
   *     things(id:{is: "AAAA-BBBB-CCCC"}){
   *         update(name:"Updated"){message}
   *     }
   * }
   * ```
   */
  things?: Maybe<ThingsThingOperations>;
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
  brand?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

  export type QuerySdk = {
      /** Retrieves current user **/
  me: InContextSdkMethod<Query['me'], {}, MeshContext>,
  /** Find ThingsThing records.

By default, offset equals to 0 and limit equals to 100

```{findThings{id,name}}``` **/
  findThings: InContextSdkMethod<Query['findThings'], QueryfindThingsArgs, MeshContext>
  };

  export type MutationSdk = {
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
      ["Fibery"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
