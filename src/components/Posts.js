import React from "react";
import img from "./img.jpg";
import { Link } from "react-router-dom";

const Posts = ({ styles }) => {
  return (
    <div className={styles.postTimeline}>
      <div className={styles.createPost}>
        <div>
          <Link to="">
            <div>
              <img src={img} alt="" />
            </div>
            {/* <!-- <input type="text" placeholder="" /> --> */}
            <div className={styles.inputTitle}>Whats on your mind?</div>
            <div style={{ textAlign: "center" }}>
              <i className="fa-regular fa-image"></i>
              <div>
                <small>Photo</small>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className={styles.timelinePost}>
        <div className={styles.postProfileDetails}>
          <div className={styles.postUserProfile}>
            <div className={styles.postProfileImg}>
              <img src={img} alt="" />
            </div>

            <div className={styles.postProfileName}>
              <h3>
                <Link to=""> Akash Lamba </Link>
              </h3>
              <span>23, june 2023</span>
            </div>
          </div>

          <div className={styles.postTogleBtn}>
            {/* <!-- <button ="togelBtn">
                  <i className="fa-solid fa-ellipsis"></i>
                </button> --> */}

            <button>
              <Link to=""> view </Link>
            </button>
            {/* <!-- <Link to=""> </Link> -->
              <!-- <input type="text" className="fa-solid fa-ellipsis" /> --> */}
          </div>
        </div>

        <div className={styles.postContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          laborum eaque vitae minima ut necessitatibus. Eum quo perspiciatis
          expedita excepturi reiciendis incidunt omnis possimus aperiam,
          veritatis inventore molestiae rerum, aliquid ipsam ducimus.
        </div>
        <div className={styles.postImg}>
          <Link to="./post.html">
            <center>
              <img src={img} alt="" />
            </center>
          </Link>
        </div>
        <div className={styles.likeComment}>
          <Link to="">
            <button className={styles.likeCommentBox}>
              <i className="fa-solid fa-heart"></i> 10
            </button>
          </Link>

          <Link to="">
            <button className={styles.likeCommentBox}>
              <i className="fa-regular fa-comment"></i> 45
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Posts;
