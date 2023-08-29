import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contactsSlice";
import { getContacts } from "redux/selectors";

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const addNewContact = (name, number) => dispatch(addContact(name, number));

    const handleSubmit = (event) => {
        event.preventDefault();

        const name = event.target.name.value.trim();
        const number = event.target.number.value;

        if (name === "") {
            alert("Name field cannot be empty");
            return;
        }

        const existingContacts = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (existingContacts) {
            alert("Contact with the same name already exists")
            return
        }

        addNewContact(name, number);

        event.target.name.value = "";
        event.target.number.value = "";
    };

    return (
        <form onSubmit={handleSubmit}>
            <span>Name</span>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
            <span>Number</span>
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
            <button type="submit" name="Add contact">Add contact</button>
        </form>
    )
};

export default ContactForm;
