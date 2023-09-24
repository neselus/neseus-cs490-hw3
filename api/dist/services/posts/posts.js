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
var posts_exports = {};
__export(posts_exports, {
  Post: () => Post,
  post: () => post,
  posts: () => posts
});
module.exports = __toCommonJS(posts_exports);
var import_db = require("../../lib/db");
const posts = () => {
  return import_db.db.post.findMany();
};
const post = ({
  id
}) => {
  return import_db.db.post.findUnique({
    where: {
      id
    }
  });
};
const Post = {
  user: (_obj, {
    root
  }) => import_db.db.post.findFirst({
    where: {
      id: root.id
    }
  }).user()
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Post,
  post,
  posts
});
//# sourceMappingURL=posts.js.map
