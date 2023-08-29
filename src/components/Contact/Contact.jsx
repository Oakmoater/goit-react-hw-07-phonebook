import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice";

const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));

    return (
    <>
        <span>{contact.name}: {contact.number}</span>
        <button type="button" onClick={handleDelete}>Delete</button> 
    </>
    )
};

export default Contact;
