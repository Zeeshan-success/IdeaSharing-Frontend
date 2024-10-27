import * as Yup from "yup";

const formSchema = Yup.object({
  IdeaName: Yup.string().required("Please Enter Your Idea Name").min(2),
  IdeaDetail: Yup.string()
    .required("Please Enter Proper Details of Your Idea")
    .min(25),
});

export default formSchema;
