import Contact from "../Contact/Contact";

const ContactList=({contacts}) => {
    return (
        <ul>
{contacts.map(contact=>{
    return <li key={contact.id}>
        <Contact contact={contact}/>
    </li>
})}
        </ul>
    )
};

export default ContactList