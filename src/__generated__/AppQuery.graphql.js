/**
 * @flow
 * @relayHash 1e37fc481383d085881b591a18a616b4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {| |};
export type AppQueryResponse = {|
  +everything: ?$ReadOnlyArray<?{|
    +id?: string,
    +vintage?: ?number,
  |}>,
|};
*/


/*
query AppQuery {
  everything {
    __typename
    ... on Wine {
      id
      vintage
    }
    ... on Record {
      id
      vintage
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "vintage",
  "args": null,
  "storageKey": null
},
v2 = [
  v0,
  v1
],
v3 = [
  v1
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery {\n  everything {\n    __typename\n    ... on Wine {\n      id\n      vintage\n    }\n    ... on Record {\n      id\n      vintage\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "everything",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": true,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Record",
            "selections": v2
          },
          {
            "kind": "InlineFragment",
            "type": "Wine",
            "selections": v2
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "everything",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          v0,
          {
            "kind": "InlineFragment",
            "type": "Record",
            "selections": v3
          },
          {
            "kind": "InlineFragment",
            "type": "Wine",
            "selections": v3
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'c398bea62f070d25f46606bd0f106044';
module.exports = node;
