import AdminJS from "adminjs";
import { Database, Resource } from "@adminjs/mongoose";

import categoryResource from "../resources/category.resource";
import commentResource from "../resources/comment.resource";
import folderResource from "../resources/folder.resource";
import snippetResource from "../resources/snippet.resource";
import syntaxResource from "../resources/syntax.resource";
import userResource from "../resources/user.resource";

AdminJS.registerAdapter({ Database, Resource });

const admin = new AdminJS({
  resources: [
    categoryResource,
    commentResource,
    folderResource,
    snippetResource,
    syntaxResource,
    userResource,
  ],
  rootPath: "/admin",
});

export default admin;
