import axios from "axios";
import ShowIdeaList from "./ShowIdeaList";
import { useEffect, useState } from "react";

const ShowIdeas = () => {
  const [ideas, setideas] = useState([]);
  const show = async () => {
    const res = await axios.get("/ideas");

    setideas(res.data.reverse());
  };
  const handleOnClick = async (id) => {
    const res = await axios.delete(`/ideas/${id}`);

    setideas(ideas.filter((p) => p._id !== id));
  };

  useEffect(() => {
    show();
  }, []);

  return (
    <>
      {ideas.map((idea, _id) => (
        <ShowIdeaList key={_id} {...idea} handleOnClick={handleOnClick} />
      ))}
    </>
  );
};

export default ShowIdeas;
