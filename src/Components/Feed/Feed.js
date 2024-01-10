import "./Feed.css";
import { PostContainer } from "./Posts/PostContainer";

export const Feed = () => {
  return (
    <div>
      <div className="container w-100 feedTopicsStyle p-0">
        <ul class="nav nav-tabs border-0">
          <li className="nav-item">
            <button className={`feedTopicOnStyle border-0`}>
              <span className="nav-link d-flex border-0 topicsStyle">
                Recente
              </span>
            </button>
          </li>
          <li className="nav-item">
            <button className={`feedTopicOffStyle border-0`}>
              <span class="nav-link d-flex border-0 topicsStyle">Em alta</span>
            </button>
          </li>
          <li className="nav-item">
            <button className={`feedTopicOffStyle border-0`}>
              <span class="nav-link d-flex border-0 topicsStyle">Trending</span>
            </button>
          </li>
        </ul>
      </div>
      <div>
        <PostContainer />
      </div>
    </div>
  );
};
