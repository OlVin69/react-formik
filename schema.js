import * as Yup from "yup" ;

const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short").max(50, "Too long").required("Required"),
    phone: Yup.string().min(3, "Too short").max(50, "Too long").required("Required"),
})

export default ContactSchema;