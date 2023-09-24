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
var comments_exports = {};
__export(comments_exports, {
  Comment: () => Comment,
  comment: () => comment,
  comments: () => comments,
  createComment: () => createComment,
  deleteComment: () => deleteComment
});
module.exports = __toCommonJS(comments_exports);
var import_auth = require("../../lib/auth");
var import_db = require("../../lib/db");
const comments = ({
  postId
}) => {
  return import_db.db.comment.findMany({
    where: {
      postId
    }
  });
};
const comment = ({
  id
}) => {
  return import_db.db.comment.findUnique({
    where: {
      id
    }
  });
};
const Comment = {
  post: (_obj, {
    root
  }) => import_db.db.comment.findUnique({
    where: {
      id: root.id
    }
  }).post()
};
const createComment = ({
  input
}) => {
  return import_db.db.comment.create({
    data: input
  });
};
const deleteComment = ({
  id
}) => {
  (0, import_auth.requireAuth)({
    roles: "moderator"
  });
  return import_db.db.comment.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Comment,
  comment,
  comments,
  createComment,
  deleteComment
});
//# sourceMappingURL=comments.js.map
