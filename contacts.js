const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve(__dirname, "./db/contacts.json");

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.log(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const result = contacts.find(({ id }) => id === contactId);
    if (!result) {
      return null;
    }
    return result;
  } catch (error) {
    console.log(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const allContacts = await listContacts();
    const idx = allContacts.findIndex((item) => item.id === contactId);
    if (idx === -1) {
      return null;
    }
    const updatedContacts = allContacts.filter(({ id }) => id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
    return allContacts[idx];
  } catch (error) {
    console.error(error);
  }
}

async function addContact(name, email, phone) {
  try {
    // ...твой код
  } catch (error) {}
}
