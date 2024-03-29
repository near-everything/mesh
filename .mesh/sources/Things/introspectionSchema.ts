// @ts-nocheck
import { buildASTSchema } from 'graphql';

const schemaAST = {
  "kind": "Document",
  "definitions": [
    {
      "kind": "SchemaDefinition",
      "operationTypes": [
        {
          "kind": "OperationTypeDefinition",
          "operation": "query",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Query"
            }
          }
        },
        {
          "kind": "OperationTypeDefinition",
          "operation": "mutation",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Mutation"
            }
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Below the list of queries available for database.",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Query"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Retrieves current user",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "me"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUser"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find ThingsDocument records.\n\nBy default, offset equals to 0 and limit equals to 100\n\n```{findDocuments{id,name}}```",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "findDocuments"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "orderBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ThingsDocumentOrder"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "IDFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/public-id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "publicId"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/creation-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "creationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/modification-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "modificationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FloatFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/created-by",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "createdBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FiberyUserFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Author",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "author"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsDocument"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find ThingsEmail records.\n\nBy default, offset equals to 0 and limit equals to 100\n\n```{findEmails{id,name}}```",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "findEmails"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "orderBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ThingsEmailOrder"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "IDFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/public-id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "publicId"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/creation-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "creationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/modification-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "modificationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FloatFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/created-by",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "createdBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FiberyUserFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsEmail"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find ThingsEvent records.\n\nBy default, offset equals to 0 and limit equals to 100\n\n```{findEvents{id,name}}```",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "findEvents"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "orderBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ThingsEventOrder"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "IDFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/public-id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "publicId"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/creation-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "creationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/modification-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "modificationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FloatFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/created-by",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "createdBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FiberyUserFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Contacts",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "contacts"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/End",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "end"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Start",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "start"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Title",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "title"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/allDay",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "allDay"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "BooleanFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/source",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "source"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/url",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "url"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "workflow/state",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "state"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "WorkflowStateThingsEventFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsEvent"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find ThingsIdea records.\n\nBy default, offset equals to 0 and limit equals to 100\n\n```{findIdeas{id,name}}```",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "findIdeas"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "orderBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ThingsIdeaOrder"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "IDFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/public-id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "publicId"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/creation-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "creationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/modification-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "modificationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FloatFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/created-by",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "createdBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FiberyUserFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsIdea"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find ThingsPerson records.\n\nBy default, offset equals to 0 and limit equals to 100\n\n```{findPeople{id,name}}```",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "findPeople"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "orderBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ThingsPersonOrder"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "IDFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/public-id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "publicId"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/creation-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "creationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/modification-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "modificationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FloatFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/created-by",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "createdBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FiberyUserFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/accountId",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "accountId"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/email",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "email"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/widgetSrc",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "widgetSrc"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsPerson"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find ThingsPost records.\n\nBy default, offset equals to 0 and limit equals to 100\n\n```{findPosts{id,name}}```",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "findPosts"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "orderBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ThingsPostOrder"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "IDFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/public-id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "publicId"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/creation-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "creationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/modification-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "modificationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FloatFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/created-by",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "createdBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FiberyUserFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsPost"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Find ThingsThing records.\n\nBy default, offset equals to 0 and limit equals to 100\n\n```{findThings{id,name}}```",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "findThings"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "orderBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ThingsThingOrder"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "IDFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/public-id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "publicId"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/creation-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "creationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/modification-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "modificationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FloatFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/created-by",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "createdBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FiberyUserFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsThing"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Available fields and relations for Things/Document",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsDocument"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ID"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUser"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Author",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "author"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/description",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "RichField"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsDocumentInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Author",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "author"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsDocumentOrder"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUserOrder"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Author",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "author"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Available operations which can be done with found documents via provided query or created",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsDocumentOperations"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Create. Create a new Document and specify field values",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "create"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Author",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "author"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Create. Create a new Document and specify field values",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ThingsDocumentInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Update. Set new values for fields",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "update"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Author",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "author"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Update. Set new values for fields",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "updateBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ThingsDocumentInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Delete. Delete Document",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "delete"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Script. Execute Javascript code",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "script"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Script code",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "script"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Script. Execute Javascript code",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "scriptBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ScriptInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "appendContentToDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "appendContentToDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "AppendContentToDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "prependContentToDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "prependContentToDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "PrependContentToDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "overwriteDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "overwriteDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "OverwriteDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyCreatedBy"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Subject",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "subject"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Message",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "message"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Notify the author of modifications",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "notifyAuthor"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyCreatedByBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "NotifyCreatedByInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyUsers"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "To",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "to"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "FiberyUserFilter"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Subject",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "subject"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Message",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "message"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Notify the author of modifications",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "notifyAuthor"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Don&#39;t notify if there are no entities to be processed",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "noEmptySend"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyUsersBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "NotifyUsersInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "countOfEntities. Count of found or created documents to be modified",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "countOfEntities"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "listEntities. List of found or created documents to be modified",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "listEntities"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Entity"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Filter for Things/Document",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsDocumentFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "orderBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ThingsDocumentOrder"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "limit"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "offset"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "IDFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FloatFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUserFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Author",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "author"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsDocumentCollectionFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isEmpty"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "contains"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsDocumentFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "containsAny"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsDocumentFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContains"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsDocumentFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContainsAny"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsDocumentFilter"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Available fields and relations for Things/Email",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsEmail"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ID"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUser"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Description",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "RichField"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsEmailInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsEmailOrder"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUserOrder"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Available operations which can be done with found emails via provided query or created",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsEmailOperations"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Create. Create a new Email and specify field values",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "create"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Create. Create a new Email and specify field values",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ThingsEmailInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Update. Set new values for fields",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "update"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Update. Set new values for fields",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "updateBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ThingsEmailInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Delete. Delete Email",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "delete"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Script. Execute Javascript code",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "script"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Script code",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "script"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Script. Execute Javascript code",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "scriptBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ScriptInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "appendContentToDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "appendContentToDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "AppendContentToDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "prependContentToDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "prependContentToDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "PrependContentToDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "overwriteDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "overwriteDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "OverwriteDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyCreatedBy"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Subject",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "subject"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Message",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "message"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Notify the author of modifications",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "notifyAuthor"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyCreatedByBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "NotifyCreatedByInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyUsers"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "To",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "to"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "FiberyUserFilter"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Subject",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "subject"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Message",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "message"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Notify the author of modifications",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "notifyAuthor"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Don&#39;t notify if there are no entities to be processed",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "noEmptySend"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyUsersBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "NotifyUsersInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "countOfEntities. Count of found or created emails to be modified",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "countOfEntities"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "listEntities. List of found or created emails to be modified",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "listEntities"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Entity"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Filter for Things/Email",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsEmailFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "orderBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ThingsEmailOrder"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "limit"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "offset"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "IDFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FloatFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUserFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsEmailCollectionFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isEmpty"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "contains"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsEmailFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "containsAny"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsEmailFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContains"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsEmailFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContainsAny"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsEmailFilter"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Available fields and relations for Things/Event",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsEvent"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ID"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUser"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Contacts",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "contacts"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/End",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "end"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Start",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "start"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Title",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "title"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/allDay",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "allDay"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/description",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "RichField"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/source",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "source"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/url",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "url"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "workflow/state",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "state"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "WorkflowStateThingsEvent"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsEventInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Contacts",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "contacts"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/End",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "end"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Start",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "start"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Title",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "title"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/allDay",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "allDay"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/source",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "source"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/url",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "url"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "workflow/state",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "state"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "WorkflowStateThingsEventFilter"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsEventOrder"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUserOrder"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Contacts",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "contacts"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/End",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "end"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Start",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "start"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Title",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "title"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/allDay",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "allDay"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/source",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "source"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/url",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "url"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "workflow/state",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "state"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "WorkflowStateThingsEventOrder"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Available operations which can be done with found events via provided query or created",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsEventOperations"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Create. Create a new Event and specify field values",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "create"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Contacts",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "contacts"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/End",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "end"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Start",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "start"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Title",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "title"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/allDay",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "allDay"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/source",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "source"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/url",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "url"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "workflow/state",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "state"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "WorkflowStateThingsEventFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Create. Create a new Event and specify field values",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ThingsEventInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Update. Set new values for fields",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "update"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Contacts",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "contacts"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/End",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "end"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Start",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "start"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Title",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "title"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/allDay",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "allDay"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/source",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "source"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/url",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "url"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "workflow/state",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "state"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "WorkflowStateThingsEventFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Update. Set new values for fields",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "updateBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ThingsEventInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Delete. Delete Event",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "delete"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Script. Execute Javascript code",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "script"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Script code",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "script"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Script. Execute Javascript code",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "scriptBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ScriptInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "appendContentToDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "appendContentToDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "AppendContentToDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "prependContentToDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "prependContentToDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "PrependContentToDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "overwriteDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "overwriteDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "OverwriteDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Move to final state. Move Event to final state",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "moveToFinalState"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyCreatedBy"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Subject",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "subject"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Message",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "message"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Notify the author of modifications",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "notifyAuthor"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyCreatedByBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "NotifyCreatedByInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyUsers"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "To",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "to"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "FiberyUserFilter"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Subject",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "subject"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Message",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "message"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Notify the author of modifications",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "notifyAuthor"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Don&#39;t notify if there are no entities to be processed",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "noEmptySend"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyUsersBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "NotifyUsersInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "countOfEntities. Count of found or created events to be modified",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "countOfEntities"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "listEntities. List of found or created events to be modified",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "listEntities"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Entity"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Filter for Things/Event",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsEventFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "orderBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ThingsEventOrder"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "limit"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "offset"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "IDFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FloatFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUserFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Contacts",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "contacts"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/End",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "end"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Start",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "start"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Title",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "title"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/allDay",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "allDay"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "BooleanFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/source",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "source"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/url",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "url"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "workflow/state",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "state"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "WorkflowStateThingsEventFilter"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsEventCollectionFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isEmpty"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "contains"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsEventFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "containsAny"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsEventFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContains"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsEventFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContainsAny"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsEventFilter"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Available fields and relations for Things/Idea",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsIdea"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ID"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUser"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/description",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "RichField"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsIdeaInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsIdeaOrder"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUserOrder"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Available operations which can be done with found ideas via provided query or created",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsIdeaOperations"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Create. Create a new Idea and specify field values",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "create"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Create. Create a new Idea and specify field values",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ThingsIdeaInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Update. Set new values for fields",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "update"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Update. Set new values for fields",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "updateBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ThingsIdeaInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Delete. Delete Idea",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "delete"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Script. Execute Javascript code",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "script"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Script code",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "script"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Script. Execute Javascript code",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "scriptBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ScriptInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "appendContentToDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "appendContentToDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "AppendContentToDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "prependContentToDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "prependContentToDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "PrependContentToDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "overwriteDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "overwriteDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "OverwriteDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyCreatedBy"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Subject",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "subject"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Message",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "message"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Notify the author of modifications",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "notifyAuthor"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyCreatedByBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "NotifyCreatedByInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyUsers"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "To",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "to"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "FiberyUserFilter"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Subject",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "subject"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Message",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "message"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Notify the author of modifications",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "notifyAuthor"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Don&#39;t notify if there are no entities to be processed",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "noEmptySend"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyUsersBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "NotifyUsersInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "countOfEntities. Count of found or created ideas to be modified",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "countOfEntities"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "listEntities. List of found or created ideas to be modified",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "listEntities"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Entity"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Filter for Things/Idea",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsIdeaFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "orderBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ThingsIdeaOrder"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "limit"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "offset"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "IDFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FloatFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUserFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsIdeaCollectionFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isEmpty"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "contains"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsIdeaFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "containsAny"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsIdeaFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContains"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsIdeaFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContainsAny"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsIdeaFilter"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Available fields and relations for Things/Person",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsPerson"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ID"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUser"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/accountId",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "accountId"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/description",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "RichField"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/email",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "email"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/widgetSrc",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "widgetSrc"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsPersonInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/accountId",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "accountId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/email",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "email"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/widgetSrc",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "widgetSrc"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsPersonOrder"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUserOrder"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/accountId",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "accountId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/email",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "email"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/widgetSrc",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "widgetSrc"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Available operations which can be done with found people via provided query or created",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsPersonOperations"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Create. Create a new Person and specify field values",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "create"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/accountId",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "accountId"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/email",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "email"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/widgetSrc",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "widgetSrc"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Create. Create a new Person and specify field values",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ThingsPersonInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Update. Set new values for fields",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "update"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/accountId",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "accountId"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/email",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "email"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/widgetSrc",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "widgetSrc"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Update. Set new values for fields",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "updateBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ThingsPersonInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Delete. Delete Person",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "delete"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Script. Execute Javascript code",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "script"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Script code",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "script"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Script. Execute Javascript code",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "scriptBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ScriptInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "appendContentToDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "appendContentToDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "AppendContentToDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "prependContentToDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "prependContentToDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "PrependContentToDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "overwriteDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "overwriteDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "OverwriteDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyCreatedBy"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Subject",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "subject"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Message",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "message"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Notify the author of modifications",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "notifyAuthor"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyCreatedByBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "NotifyCreatedByInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyUsers"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "To",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "to"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "FiberyUserFilter"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Subject",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "subject"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Message",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "message"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Notify the author of modifications",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "notifyAuthor"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Don&#39;t notify if there are no entities to be processed",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "noEmptySend"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyUsersBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "NotifyUsersInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "countOfEntities. Count of found or created people to be modified",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "countOfEntities"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "listEntities. List of found or created people to be modified",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "listEntities"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Entity"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Filter for Things/Person",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsPersonFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "orderBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ThingsPersonOrder"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "limit"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "offset"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "IDFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FloatFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUserFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/accountId",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "accountId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/email",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "email"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/widgetSrc",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "widgetSrc"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsPersonCollectionFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isEmpty"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "contains"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsPersonFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "containsAny"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsPersonFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContains"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsPersonFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContainsAny"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsPersonFilter"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Available fields and relations for Things/Post",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsPost"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ID"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUser"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/description",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "RichField"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsPostInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsPostOrder"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUserOrder"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Available operations which can be done with found posts via provided query or created",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsPostOperations"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Create. Create a new Post and specify field values",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "create"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Create. Create a new Post and specify field values",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ThingsPostInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Update. Set new values for fields",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "update"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Update. Set new values for fields",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "updateBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ThingsPostInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Delete. Delete Post",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "delete"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Script. Execute Javascript code",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "script"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Script code",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "script"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Script. Execute Javascript code",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "scriptBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ScriptInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "appendContentToDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "appendContentToDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "AppendContentToDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "prependContentToDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "prependContentToDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "PrependContentToDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "overwriteDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "overwriteDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "OverwriteDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyCreatedBy"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Subject",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "subject"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Message",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "message"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Notify the author of modifications",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "notifyAuthor"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyCreatedByBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "NotifyCreatedByInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyUsers"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "To",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "to"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "FiberyUserFilter"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Subject",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "subject"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Message",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "message"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Notify the author of modifications",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "notifyAuthor"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Don&#39;t notify if there are no entities to be processed",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "noEmptySend"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyUsersBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "NotifyUsersInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "countOfEntities. Count of found or created posts to be modified",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "countOfEntities"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "listEntities. List of found or created posts to be modified",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "listEntities"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Entity"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Filter for Things/Post",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsPostFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "orderBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ThingsPostOrder"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "limit"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "offset"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "IDFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FloatFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUserFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsPostCollectionFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isEmpty"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "contains"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsPostFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "containsAny"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsPostFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContains"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsPostFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContainsAny"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsPostFilter"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Available fields and relations for Things/Thing",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsThing"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ID"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUser"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Description",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "description"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "RichField"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsThingInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsThingOrder"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUserOrder"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Available operations which can be done with found things via provided query or created",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsThingOperations"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Create. Create a new Thing and specify field values",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "create"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Create. Create a new Thing and specify field values",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ThingsThingInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Update. Set new values for fields",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "update"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Float"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Update. Set new values for fields",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "updateBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ThingsThingInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Delete. Delete Thing",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "delete"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Script. Execute Javascript code",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "script"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Script code",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "script"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Script. Execute Javascript code",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "scriptBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "ScriptInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "appendContentToDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Append content to Description. Append content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "appendContentToDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "AppendContentToDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "prependContentToDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Prepend content to Description. Prepend content to document. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "prependContentToDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "PrependContentToDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "overwriteDescription"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Document",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "value"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Overwrite Description. Replace document content. Markdown template is supported. For example **{{Name}}**, {{Bugs:Name,Status.Name}}, &lt;%= new Date()%&gt;, &lt;%= Entity.Id%&gt;, &lt;%= Entity.Type%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "overwriteDescriptionBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "OverwriteDescriptionInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyCreatedBy"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Subject",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "subject"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Message",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "message"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Notify the author of modifications",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "notifyAuthor"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Notify Created By. Send in-app notification (slack or email if configured) to Created By. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyCreatedByBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "NotifyCreatedByInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyUsers"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "To",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "to"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "FiberyUserFilter"
                  }
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Subject",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "subject"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Message",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "message"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "String"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Notify the author of modifications",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "notifyAuthor"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Don&#39;t notify if there are no entities to be processed",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "noEmptySend"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Boolean"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Batch Notify Users. Send in-app notification (slack or email if configured) to specified users. Text templating is supported. For example: Something happened with {{Name}} on &lt;%= new Date()%&gt;",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyUsersBatch"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "data"
              },
              "type": {
                "kind": "ListType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "NotifyUsersInput"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "MutationResult"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "countOfEntities. Count of found or created things to be modified",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "countOfEntities"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "listEntities. List of found or created things to be modified",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "listEntities"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Entity"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Filter for Things/Thing",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ThingsThingFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "orderBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ThingsThingOrder"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "limit"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "offset"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "IDFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FloatFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/created-by",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "createdBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUserFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Things/Name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ThingsThingCollectionFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isEmpty"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "contains"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsThingFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "containsAny"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsThingFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContains"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsThingFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContainsAny"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ThingsThingFilter"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Available fields and relations for fibery/user",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "FiberyUser"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/active?",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "active"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ID"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "user/email",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "email"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "user/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "FiberyUserInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "user/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "FiberyUserOrder"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/active?",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "active"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "user/email",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "email"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "user/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Filter for fibery/user",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "FiberyUserFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "orderBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FiberyUserOrder"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "limit"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "offset"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/active?",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "active"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "BooleanFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "IDFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/creation-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "creationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/modification-date",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "modificationDate"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FloatFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "user/email",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "email"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "user/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "FiberyUserCollectionFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isEmpty"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "contains"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "FiberyUserFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "containsAny"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "FiberyUserFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContains"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "FiberyUserFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContainsAny"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "FiberyUserFilter"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Available fields and relations for workflow/state_Things/Event",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "WorkflowStateThingsEvent"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ID"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "enum/icon",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "icon"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "enum/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "workflow/Final",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "final"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "WorkflowStateThingsEventInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "enum/icon",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "icon"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "enum/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "workflow/Final",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "final"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "WorkflowStateThingsEventOrder"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "enum/icon",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "icon"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "enum/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "workflow/Final",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "final"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Filter for workflow/state_Things/Event",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "WorkflowStateThingsEventFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "orderBy"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "WorkflowStateThingsEventOrder"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "limit"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "offset"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "IDFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/public-id",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "publicId"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "fibery/rank",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "rank"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "FloatFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "enum/icon",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "icon"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "enum/name",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "workflow/Final",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "final"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "BooleanFilter"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "WorkflowStateThingsEventCollectionFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isEmpty"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "contains"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "WorkflowStateThingsEventFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "containsAny"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "WorkflowStateThingsEventFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContains"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "WorkflowStateThingsEventFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContainsAny"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "WorkflowStateThingsEventFilter"
              }
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "StringFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "is"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isNot"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "contains"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notContains"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "greater"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "greaterOrEquals"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "less"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "lessOrEquals"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "in"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notIn"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isNull"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "FloatFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "is"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isNot"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "greater"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "greaterOrEquals"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "less"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "lessOrEquals"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Float"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "in"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Float"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notIn"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Float"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isNull"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "IDFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "is"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ID"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isNot"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ID"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "in"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notIn"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isNull"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "IntFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "is"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isNot"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "greater"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "greaterOrEquals"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "less"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "lessOrEquals"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "in"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "notIn"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isNull"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "BooleanFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "is"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isNull"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "DateRangeFilter"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "start"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "end"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "StringFilter"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "isNull"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "DateRange"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "start"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "end"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "DateRangeInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "start"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "end"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "RichField"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "secret"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "md"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "html"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "jsonString"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "text"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Document"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ID"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "secret"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "md"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "html"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "jsonString"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "text"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Entity"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ID"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "type"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Doc"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "secret"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "MutationResult"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "message"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "entities"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Entity"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "documents"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Doc"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Order"
      },
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "ASC"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "DESC"
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "DateRangeOrder"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "start"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "end"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Order"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Input for Script",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "ScriptInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Script code",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "script"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Input for Append content to Description",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "AppendContentToDescriptionInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Document",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "value"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Input for Prepend content to Description",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "PrependContentToDescriptionInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Document",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "value"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Input for Overwrite Description",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "OverwriteDescriptionInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Document",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "value"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Input for Notify Created By",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "NotifyCreatedByInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Subject",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "subject"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Message",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "message"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Notify the author of modifications",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyAuthor"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "InputObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Input for Notify Users",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "NotifyUsersInput"
      },
      "fields": [
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "To",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "to"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "FiberyUserFilter"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Subject",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "subject"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Message",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "message"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Notify the author of modifications",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "notifyAuthor"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Don&#39;t notify if there are no entities to be processed",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "noEmptySend"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        }
      ],
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "description": {
        "kind": "StringValue",
        "value": "Use mutations to modify database",
        "block": true
      },
      "name": {
        "kind": "Name",
        "value": "Mutation"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Modify selected entities using multiple actions (update, link and etc.)\n```\nmutation {\n    documents(id:{is: \"AAAA-BBBB-CCCC\"}){\n        update(name:\"Updated\"){message}\n    }\n}\n```",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "documents"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "orderBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ThingsDocumentOrder"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "IDFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/public-id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "publicId"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/creation-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "creationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/modification-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "modificationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FloatFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/created-by",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "createdBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FiberyUserFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Author",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "author"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ThingsDocumentOperations"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Modify selected entities using multiple actions (update, link and etc.)\n```\nmutation {\n    emails(id:{is: \"AAAA-BBBB-CCCC\"}){\n        update(name:\"Updated\"){message}\n    }\n}\n```",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "emails"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "orderBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ThingsEmailOrder"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "IDFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/public-id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "publicId"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/creation-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "creationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/modification-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "modificationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FloatFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/created-by",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "createdBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FiberyUserFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ThingsEmailOperations"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Modify selected entities using multiple actions (update, link and etc.)\n```\nmutation {\n    events(id:{is: \"AAAA-BBBB-CCCC\"}){\n        update(name:\"Updated\"){message}\n    }\n}\n```",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "events"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "orderBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ThingsEventOrder"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "IDFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/public-id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "publicId"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/creation-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "creationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/modification-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "modificationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FloatFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/created-by",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "createdBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FiberyUserFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Contacts",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "contacts"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/End",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "end"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Start",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "start"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Title",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "title"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/allDay",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "allDay"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "BooleanFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/source",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "source"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/url",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "url"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "workflow/state",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "state"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "WorkflowStateThingsEventFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ThingsEventOperations"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Modify selected entities using multiple actions (update, link and etc.)\n```\nmutation {\n    ideas(id:{is: \"AAAA-BBBB-CCCC\"}){\n        update(name:\"Updated\"){message}\n    }\n}\n```",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "ideas"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "orderBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ThingsIdeaOrder"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "IDFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/public-id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "publicId"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/creation-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "creationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/modification-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "modificationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FloatFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/created-by",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "createdBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FiberyUserFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ThingsIdeaOperations"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Modify selected entities using multiple actions (update, link and etc.)\n```\nmutation {\n    people(id:{is: \"AAAA-BBBB-CCCC\"}){\n        update(name:\"Updated\"){message}\n    }\n}\n```",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "people"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "orderBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ThingsPersonOrder"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "IDFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/public-id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "publicId"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/creation-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "creationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/modification-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "modificationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FloatFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/created-by",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "createdBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FiberyUserFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/accountId",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "accountId"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/email",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "email"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/widgetSrc",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "widgetSrc"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ThingsPersonOperations"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Modify selected entities using multiple actions (update, link and etc.)\n```\nmutation {\n    posts(id:{is: \"AAAA-BBBB-CCCC\"}){\n        update(name:\"Updated\"){message}\n    }\n}\n```",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "posts"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "orderBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ThingsPostOrder"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "IDFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/public-id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "publicId"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/creation-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "creationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/modification-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "modificationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FloatFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/created-by",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "createdBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FiberyUserFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ThingsPostOperations"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "description": {
            "kind": "StringValue",
            "value": "Modify selected entities using multiple actions (update, link and etc.)\n```\nmutation {\n    things(id:{is: \"AAAA-BBBB-CCCC\"}){\n        update(name:\"Updated\"){message}\n    }\n}\n```",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "things"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "orderBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "ThingsThingOrder"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "limit"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "offset"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "IDFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/public-id",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "publicId"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/creation-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "creationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/modification-date",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "modificationDate"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/rank",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "rank"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FloatFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "fibery/created-by",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "createdBy"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "FiberyUserFilter"
                }
              },
              "directives": []
            },
            {
              "kind": "InputValueDefinition",
              "description": {
                "kind": "StringValue",
                "value": "Things/Name",
                "block": true
              },
              "name": {
                "kind": "Name",
                "value": "name"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "StringFilter"
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ThingsThingOperations"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    }
  ]
};

export default buildASTSchema(schemaAST, {
  assumeValid: true,
  assumeValidSDL: true
});