import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./blockContent";
import announcement from "./announcement";
import author from "./author";

export default createSchema({
    name: "default",
    types: schemaTypes.concat([announcement, author, blockContent]),
});
