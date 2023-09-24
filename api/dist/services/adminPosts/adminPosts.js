var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var adminPosts_exports = {};
__export(adminPosts_exports, {
  adminPost: () => adminPost,
  adminPosts: () => adminPosts,
  createPost: () => createPost,
  deletePost: () => deletePost,
  updatePost: () => updatePost
});
module.exports = __toCommonJS(adminPosts_exports);
var import_graphql_server = require("@redwoodjs/graphql-server");
var import_db = require("../../lib/db");
const verifyOwnership = async ({
  id
}) => {
  if (await adminPost({
    id
  })) {
    return true;
  } else {
    throw new import_graphql_server.ForbiddenError("You don't have access to this post");
  }
};
const adminPosts = () => {
  return import_db.db.post.findMany({
    where: {
      userId: import_graphql_server.context.currentUser.id
    }
  });
};
const adminPost = ({
  id
}) => {
  return import_db.db.post.findFirst({
    where: {
      id,
      userId: import_graphql_server.context.currentUser.id
    }
  });
};
const createPost = ({
  input
}) => {
  return import_db.db.post.create({
    data: {
      ...input,
      userId: import_graphql_server.context.currentUser.id
    }
  });
};
const updatePost = async ({
  id,
  input
}) => {
  await verifyOwnership({
    id
  });
  return import_db.db.post.update({
    data: input,
    where: {
      id
    }
  });
};
const deletePost = async ({
  id
}) => {
  await verifyOwnership({
    id
  });
  return import_db.db.post.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  adminPost,
  adminPosts,
  createPost,
  deletePost,
  updatePost
});
//# sourceMappingURL=adminPosts.js.map
