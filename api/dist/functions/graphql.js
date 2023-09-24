var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var graphql_exports = {};
__export(graphql_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(graphql_exports);
var import_auth_dbauth_api = require("@redwoodjs/auth-dbauth-api");
var import_graphql_server = require("@redwoodjs/graphql-server");
var directives_requireAuth_requireAuth = __toESM(require("../directives/requireAuth/requireAuth"));
var directives_skipAuth_skipAuth = __toESM(require("../directives/skipAuth/skipAuth"));
var sdls_adminPosts_sdl = __toESM(require("../graphql/adminPosts.sdl"));
var sdls_comments_sdl = __toESM(require("../graphql/comments.sdl"));
var sdls_contacts_sdl = __toESM(require("../graphql/contacts.sdl"));
var sdls_posts_sdl = __toESM(require("../graphql/posts.sdl"));
var sdls_users_sdl = __toESM(require("../graphql/users.sdl"));
var services_adminPosts_adminPosts = __toESM(require("../services/adminPosts/adminPosts"));
var services_comments_comments = __toESM(require("../services/comments/comments"));
var services_contacts_contacts = __toESM(require("../services/contacts/contacts"));
var services_posts_posts = __toESM(require("../services/posts/posts"));
var services_users_users = __toESM(require("../services/users/users"));
var import_auth = require("../lib/auth");
var import_db = require("../lib/db");
var import_logger = require("../lib/logger");
let directives = {};
directives.requireAuth_requireAuth = directives_requireAuth_requireAuth;
directives.skipAuth_skipAuth = directives_skipAuth_skipAuth;
let sdls = {};
sdls.adminPosts_sdl = sdls_adminPosts_sdl;
sdls.comments_sdl = sdls_comments_sdl;
sdls.contacts_sdl = sdls_contacts_sdl;
sdls.posts_sdl = sdls_posts_sdl;
sdls.users_sdl = sdls_users_sdl;
let services = {};
services.adminPosts_adminPosts = services_adminPosts_adminPosts;
services.comments_comments = services_comments_comments;
services.contacts_contacts = services_contacts_contacts;
services.posts_posts = services_posts_posts;
services.users_users = services_users_users;
const handler = (0, import_graphql_server.createGraphQLHandler)({
  authDecoder: import_auth_dbauth_api.authDecoder,
  loggerConfig: {
    logger: import_logger.logger,
    options: {}
  },
  getCurrentUser: import_auth.getCurrentUser,
  directives,
  sdls,
  services,
  onException: () => {
    import_db.db.$disconnect();
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=graphql.js.map
