import axios from "axios";

const ShowIdeaList = ({ IdeaName, _id, IdeaDetail, handleOnClick }) => {
  return (
    <>
      <div className="container card shadow-sm my-2 w-75">
        <center className="my-3 fw-bold">{IdeaName}</center>

        <div className="card-body">
          <p className="card-text">{IdeaDetail}</p>
          <div className="d-flex justify-content-end align-items-center">
            <button
              type="button"
              onClick={() => {
                handleOnClick(_id);
              }}
              className="btn btn-sm btn-outline-danger "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowIdeaList;
