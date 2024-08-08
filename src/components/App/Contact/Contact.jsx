import s from "./Contact.module.css"

const Contact = ({ contact: { name, number, id }, onDelete }) => {

const handleClick=(e)=>{
e.preventDefault();
onDelete(id)
}

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <p className={s.text}>{name}</p>
        <p className={s.text}>{number}</p>
      </div>
      <button className={s.button} onClick={handleClick} type="button">Delete</button>
    </div>
  );
};

export default Contact;
