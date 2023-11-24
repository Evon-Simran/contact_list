import ContactList from './mock/contactList.json'

const SortedContactList = ContactList.contacts.sort(function (a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});

export default SortedContactList;


