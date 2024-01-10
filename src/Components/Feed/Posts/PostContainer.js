import "./PostContainer.css";

export const PostContainer = () => {
  const dataAtual = new Date();

  return (
    <div
      class="card border-0 mt-3 p-0 postContentStyle"
      style={{ width: "100%" }}
    >
      <div className="createNewPostStyle">
        <div class="input-group mb-3">
          <input
            type="text"
            className="form-control border-0 textPlaceHolderStyle"
            placeholder="Type to share..."
            label="Recipient's username"
          />
          <button className="btn btn-outline-secondary">Publish</button>
        </div>
      </div>
      <div className="card-body text-start postBoxStyle mb-2">
        <div className="d-flex">
          <p className="userPhotoStyle">
            <i className="bi bi-person-circle"></i>
          </p>
          <p className="fw-bold userNameStyle">User Name</p>
          <div className="dataStyle">
            {dataAtual.toString().split('T')[0]}
          </div>
        </div>
        <div className="commentStyle">
          <div>
            Contrary to popular belief, Lorem Ipsum is not note simply random
            text. It has roots in a piece of classical Latin literature from 45
            BC
          </div>
          <div className="d-flex justify-content-end gap-2">
            <button className="border-0 p-0 postButtonsStyle">
              <i class="bi bi-arrow-up-circle-fill text-success"></i>
            </button>
            <button className="border-0 p-0 postButtonsStyle">
              <i class="bi bi-arrow-down-circle text-danger"></i>
            </button>
            <button className="border-0 p-0 postButtonsStyle">
              <i class="bi bi-chat-dots text-white"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="card-body text-start postBoxStyle mb-2">
        <div className="d-flex">
          <p className="userPhotoStyle">
            <i className="bi bi-person-circle"></i>
          </p>
          <p className="fw-bold userNameStyle">User Name</p>
          <div className="dataStyle">
            {dataAtual.toString().split('T')[0]}
          </div>
        </div>
        <div className="commentStyle">
          <div>
            Contrary to popular belief, Lorem Ipsum is not note simply random
            text. It has roots in a piece of classical Latin literature from 45
            BC
          </div>
          <div className="d-flex justify-content-end gap-2">
            <button className="border-0 p-0 postButtonsStyle">
              <i class="bi bi-arrow-up-circle-fill text-success"></i>
            </button>
            <button className="border-0 p-0 postButtonsStyle">
              <i class="bi bi-arrow-down-circle text-danger"></i>
            </button>
            <button className="border-0 p-0 postButtonsStyle">
              <i class="bi bi-chat-dots text-white"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="card-body text-start postBoxStyle mb-2">
        <div className="d-flex">
          <p className="userPhotoStyle">
            <i className="bi bi-person-circle"></i>
          </p>
          <p className="fw-bold userNameStyle">User Name</p>
          <div className="dataStyle">
            {dataAtual.toString().split('T')[0]}
          </div>
        </div>
        <div className="commentStyle">
          <div>
            Contrary to popular belief, Lorem Ipsum is not note simply random
            text. It has roots in a piece of classical Latin literature from 45
            BC
          </div>
          <div className="d-flex justify-content-end gap-2">
            <button className="border-0 p-0 postButtonsStyle">
              <i class="bi bi-arrow-up-circle-fill text-success"></i>
            </button>
            <button className="border-0 p-0 postButtonsStyle">
              <i class="bi bi-arrow-down-circle text-danger"></i>
            </button>
            <button className="border-0 p-0 postButtonsStyle">
              <i class="bi bi-chat-dots text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
