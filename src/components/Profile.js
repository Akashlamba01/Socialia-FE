import React from "react";
// import styles from "../styles/profile.module.css";
import img from "./img.jpg";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import postStyles from "../styles/posts.module.css";
import "reactjs-popup/dist/index.css";
import useWindowSize from "../utils/useWindowSize";
import PostSeparate from "./PostSeparate";

const Profile = ({ styles }) => {
  const size = useWindowSize();

  return (
    <div className={styles.mainContainer}>
      {/* <!-- friend side section///////////// --> */}

      <div></div>

      {/* <!-- post and timeline section/////////////// --> */}
      <div className={styles.infoPostContainer}>
        <div className={styles.profileDetails}>
          <div className={styles.profileCover}>
            <img
              src="https://images.unsplash.com/photo-1554177255-61502b352de3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhY2Vib29rJTIwY292ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              alt=""
            />
          </div>

          <div className={styles.profileImg}>
            <div className={styles.imgNameBox}>
              <div>
                <img
                  src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?5315ffb"
                  alt=""
                />
              </div>
              <div className={styles.nameDetailsBox}>
                <h2>Akash Lamba</h2>
                <span>(rajjao)</span>
              </div>
            </div>
            <div className={styles.editBox}>
              <a to="">
                {/* <!-- className={styles.confirmAddBtns} --> */}
                <div>
                  <i className="fa-solid fa-pen-to-square"></i> Edit Profile
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.profileContainer}>
          <div className={styles.introConateiner}>
            <div className={styles.introPhotosBox}>
              <h2>Intro</h2>
              <div
                // style="margin-top: 0px; text-align: center"
                style={{ marginTop: 0, textAlign: "center" }}
                className={styles.introInnerBox}>
                <p style={{ fontWeight: "bold" }}>fjioe kfej fkdjf</p>
                <Popup
                  trigger={
                    <div className={styles.introBtn}>
                      {/* <!-- className={styles.confirmAddBtns} --> */}
                      <div style={{ textAlign: "center" }}>
                        <i className="fa-solid fa-pen-to-square"></i>
                        Edit Bios
                      </div>
                    </div>
                  }
                  modal
                  nested>
                  {/* <div style={{ width: "40px" }}>hi</div>
                   */}
                  <div>hi</div>
                </Popup>
              </div>

              <div className={styles.introInnerBox}>
                <p>
                  <i
                    className="fa-solid fa-house"
                    // style="font-size: 24px; padding-right: 5px"
                    style={{ fontSize: "24px", paddingRight: "5px" }}></i>
                  Lives in
                  <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Haridwar
                  </span>
                </p>

                <Popup
                  trigger={
                    <div className={styles.introBtn}>
                      {/* <!-- className={styles.confirmAddBtns} --> */}
                      <div style={{ textAlign: "center" }}>
                        <i className="fa-solid fa-pen-to-square"></i>
                        Edit Details
                      </div>
                    </div>
                  }
                  modal
                  nested>
                  {/* <div style={{ width: "40px" }}>hi</div>
                   */}
                  <div>hi</div>
                </Popup>
              </div>
            </div>

            {/* <!-- <div className="introPhotosBox"></div> --> */}
          </div>

          <div className={styles.postContiner}>
            <div className={styles.createPost}>
              <div>
                <a href="">
                  <img
                    src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?5315ffb"
                    alt=""
                  />
                  {/* <!-- <input type="text" placeholder="" /> --> */}
                  <div className={styles.inputTitle}>Whats on your mind?</div>
                  <div style={{ textAlign: "center" }}>
                    <i className="fa-regular fa-image"></i>
                    <small>Photo</small>
                  </div>
                </a>
              </div>
            </div>

            <div className={styles.timelinePost}>
              <div className={styles.postProfileDetails}>
                <div className={styles.postUserProfile}>
                  <div className={styles.postProfileImg}>
                    <img
                      src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?5315ffb"
                      alt=""
                    />
                  </div>

                  <div className={styles.postProfileName}>
                    <h3>
                      <a href=""> Akash Lamba </a>
                    </h3>
                    <span>23, june 2023</span>
                  </div>
                </div>

                <div className={styles.postTogleBtn}>
                  {/* <!-- <button onclick="togelBtn">
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate laborum eaque vitae minima ut necessitatibus. Eum quo
                perspiciatis expedita excepturi reiciendis incidunt omnis
                possimus aperiam, veritatis inventore molestiae rerum, aliquid
                ipsam ducimus.
              </div>
              <div className={styles.postImg}>
                <a href="./post.html">
                  <center>
                    <img
                      src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?5315ffb"
                      alt=""
                    />
                  </center>
                </a>
              </div>
              <div className={styles.likeComment}>
                <a href="">
                  <button className={styles.likeCommentBox}>
                    <i className="fa-solid fa-heart"></i> 10
                  </button>
                </a>

                <Popup
                  contentStyle={
                    size.width < 719
                      ? {
                          width: "100vw",
                          height: "100vh",
                          padding: 0,
                          margin: 0,
                        }
                      : { width: "50vw", height: "650px" }
                  }
                  trigger={
                    <Link to="">
                      <button className={styles.likeCommentBox}>
                        <i className="fa-regular fa-comment"></i> 45
                      </button>
                    </Link>
                  }
                  modal
                  nested>
                  {(close) => (
                    <div className={postStyles.postsContainer}>
                      <div className={postStyles.postUserDetails}>
                        <i
                          style={{
                            marginTop: "10px",
                            marginLeft: "10px",
                            fontSize: "20px",
                            color: "rgb(80, 80, 80)",
                            cursor: "pointer",
                          }}
                          class="fa-solid fa-arrow-left-long"
                          onClick={() => close()}></i>
                        <h3>Akash's Post</h3>
                      </div>

                      <PostSeparate styles={styles} img={img} />
                    </div>
                  )}
                </Popup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
