import s from "./Contact.module.css"

const Contact = ({ contact: { name, number } }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <p className={s.text}>{name}</p>
        <p className={s.text}>{number}</p>
      </div>
      <button className={s.button} type="button">Delete</button>
    </div>
  );
};

export default Contact;
