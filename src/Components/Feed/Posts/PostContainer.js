import "./PostContainer.css";

export const PostContainer = () => {
  return (
    <div
      class="card border-0 mt-3 p-0 postContentStyle"
      style={{ width: "100%" }}
    >
      <div className="card-body text-start ">
        <div className="d-flex justify-content-between">
          <p className="fw-bold m-0">title</p>
        </div>
      </div>
    </div>
  );
};
