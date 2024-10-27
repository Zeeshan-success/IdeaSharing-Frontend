import { useFormik } from "formik";
import formSchema from "./Schema/index";
import axios from "axios";
import { useEffect } from "react";

const initialValues = {
  IdeaName: "",
  IdeaDetail: "",
};

const CreateIdeas = () => {
  const Create = async (idea) => {
    await axios.post("/ideas", idea);
  };

  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: formSchema,
      onSubmit: (values, action) => {
        Create(values);
        action.resetForm();
      },
    });

  return (
    <>
      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal text-center">Enter Your Idea</h1>

          <div className="form-floating">
            <input
              name="IdeaName"
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Enter idea"
              value={values.IdeaName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.IdeaName && touched.IdeaName ? (
              <p className="text-danger">{errors.IdeaName}</p>
            ) : null}
            <label htmlFor="floatingInput">Idea Name</label>
          </div>
          <div className="form-floating">
            <input
              name="IdeaDetail"
              type="text"
              className="form-control"
              id="floatingPassword"
              placeholder="Idea Details"
              value={values.IdeaDetail}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.IdeaDetail && touched.IdeaDetail ? (
              <p className="text-danger">{errors.IdeaDetail}</p>
            ) : null}
            <label htmlFor="floatingPassword">Idea Details</label>
          </div>

          <div className="form-check text-start my-3"></div>
          <button className="btn btn-primary w-100 py-2" type="submit">
            Add Your Idea
          </button>
        </form>
      </main>
    </>
  );
};

export default CreateIdeas;
