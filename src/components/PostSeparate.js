import React from "react";
import { Link } from "react-router-dom";
import postStyles from "../styles/posts.module.css";

const PostSeparate = ({ styles, img }) => {
  return (
    <>
      <div className={postStyles.timelinePost}>
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
          <Link to="">
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

        <div className={postStyles.commentContainer}>
          <div className={postStyles.commentBox}>
            <div className={postStyles.commentUserImg}>
              <img src="https://www.whatsitis.com/wp-content/uploads/2018/11/B4746C50-4F8B-4C04-9C8F-FFCD6F3DB14F.jpeg" />
            </div>
            <div>
              <div className={postStyles.userCommentBox}>
                <h4 style={{ marginBottom: "2px", cursor: "pointer" }}>
                  Akash Lamba
                </h4>
                <p>
                  lorem34ajkld j;akdj lkajdfl jkaljfkl jkmkkdmfkla dmfmkldmf
                  dmfkl dklmf kldmfkmkem f,dm fkdmklmf
                </p>
              </div>
              <div
                style={{
                  marginLeft: 21,

                  fontWeight: "bold",
                  // cursor: "pointer",
                }}>
                <Link to="" style={{ color: "black" }}>
                  Like 30
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={postStyles.commentInputBox}>
        <div className={postStyles.commentUserImg}>
          <img
            // , height: "40px", height: "40px"
            style={{ marginTop: "-5px" }}
            src="https://www.whatsitis.com/wp-content/uploads/2018/11/B4746C50-4F8B-4C04-9C8F-FFCD6F3DB14F.jpeg"
          />
        </div>

        {/* <input placeholder="write comment" /> */}
        {/* <form>
          <input></input>
        </form> */}

        <form className={postStyles.commentTextInput}>
          <input placeholder="Write a comment..." />
          <span
            style={{
              marginLeft: "-32px",
              paddingTop: "14px",
              color: "grey",
              fontSize: "20px",
              cursor: "pointer",
            }}>
            <i class="fa-solid fa-paper-plane"></i>
          </span>
        </form>
      </div>
    </>
  );
};

export default PostSeparate;
