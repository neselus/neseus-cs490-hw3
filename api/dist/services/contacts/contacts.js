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
var contacts_exports = {};
__export(contacts_exports, {
  contact: () => contact,
  contacts: () => contacts,
  createContact: () => createContact,
  deleteContact: () => deleteContact,
  updateContact: () => updateContact
});
module.exports = __toCommonJS(contacts_exports);
var import_db = require("../../lib/db");
var import_api = require("@redwoodjs/api");
const contacts = () => {
  return import_db.db.contact.findMany();
};
const contact = ({
  id
}) => {
  return import_db.db.contact.findUnique({
    where: {
      id
    }
  });
};
const createContact = ({
  input
}) => {
  (0, import_api.validate)(input.email, "email", {
    email: true
  });
  return import_db.db.contact.create({
    data: input
  });
};
const updateContact = ({
  id,
  input
}) => {
  return import_db.db.contact.update({
    data: input,
    where: {
      id
    }
  });
};
const deleteContact = ({
  id
}) => {
  return import_db.db.contact.delete({
    where: {
      id
    }
  });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  contact,
  contacts,
  createContact,
  deleteContact,
  updateContact
});
//# sourceMappingURL=contacts.js.map
