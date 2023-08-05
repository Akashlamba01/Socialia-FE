import React from "react";
import img from "./img.jpg";

const Posts = ({ styles }) => {
  return (
    <div className={styles.postTimeline}>
      <div className={styles.createPost}>
        <div>
          <a href="">
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
          </a>
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
                <a href=""> Akash Lamba </a>
              </h3>
              <span>23, june 2023</span>
            </div>
          </div>

          <div className={styles.postTogleBtn}>
            {/* <!-- <button ="togelBtn">
                  <i className="fa-solid fa-ellipsis"></i>
                </button> --> */}

            <button>
              <a href=""> view </a>
            </button>
            {/* <!-- <a href=""> </a> -->
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
          <a href="./post.html">
            <center>
              <img src={img} alt="" />
            </center>
          </a>
        </div>
        <div className={styles.likeComment}>
          <a href="">
            <button className={styles.likeCommentBox}>
              <i className="fa-solid fa-heart"></i> 10
            </button>
          </a>

          <a href="">
            <button className={styles.likeCommentBox}>
              <i className="fa-regular fa-comment"></i> 45
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Posts;
