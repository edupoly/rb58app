import { useFormik } from "formik";
import * as Yup from "yup";

function StudentForm() {
  var sform = useFormik({
    initialValues: {
      firstname: "",
      gender: "",
      age: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Babu Chusuko..."),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="border border-success border-2 m-2 p-2 rounded">
      <h1>StudentForm</h1>
      <p>{JSON.stringify(sform.touched)}</p>
      <form onSubmit={sform.handleSubmit}>
        <input
          type="text"
          name="firstname"
          onChange={sform.handleChange}
          onBlur={sform.handleBlur}
        />
        <div>
          <b>{sform.touched.firstname && sform.errors.firstname}</b>
        </div>
        <br />
        <input
          type="text"
          name="gender"
          onChange={sform.handleChange}
          onBlur={sform.handleBlur}
        />
        <br />
        <input
          type="text"
          name="age"
          onChange={sform.handleChange}
          onBlur={sform.handleBlur}
        />
        <br />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default StudentForm;
