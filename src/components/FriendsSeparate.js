import React from "react";

const FriendsSeparate = ({ styles }) => {
  return (
    <dev className={styles.friendContainer}>
      <div className={styles.frinedSearchType}>
        <div className={styles.friendHeading}>
          <h1 style={{ fontSize: "24px" }}>Friends</h1>

          <form action="">
            <input type="text" placeholder="search..." />
            <button type="submit">
              <i className="fa-solid fa-search"></i>
            </button>
          </form>
        </div>

        <div
          className={styles.friendUserBox}
          style={{ marginTop: "10px", paddingTop: "2px", paddingBottom: 0 }}>
          {/* <!-- request friend box start--> */}
          <a href="#friend-list-home" className="active-friend-list">
            <div
              className={styles.settingsType}
              style={{ backgroundColor: "rgb(184, 184, 184)" }}>
              <div style={{ color: "black", marginLeft: "10px" }}>
                <h3>
                  <i className="fa-solid fa-user-group"></i> &nbsp; Home
                </h3>
              </div>
            </div>
          </a>
        </div>

        <div
          className={styles.friendUserBox}
          style={{ paddingTop: "6px", paddingBottom: 0 }}>
          {/* <!-- request friend box start--> */}
          <a href="#friend-list-home">
            <div className={styles.settingsType}>
              <div style={{ color: "black", marginLeft: "10px" }}>
                <h3>
                  <i className="fa-solid fa-user-plus"></i> &nbsp; Friend
                  requests
                </h3>
              </div>
            </div>
          </a>
        </div>

        <div
          className={styles.friendUserBox}
          style={{ paddingTop: "6px", paddingBottom: 0 }}>
          {/* <!-- request friend box start--> */}
          <a href="#all-friends">
            <div className={styles.settingsType}>
              <div style={{ color: "black", marginLeft: "10px" }}>
                <h3>
                  <i className="fa-solid fa-users"></i> &nbsp; All Friends
                </h3>
              </div>
            </div>
          </a>
        </div>

        <div
          className={styles.friendUserBox}
          style={{ paddingTop: "6px", paddingBottom: 0 }}>
          {/* <!-- request friend box start--> */}
          <a href="#all-users">
            <div className={styles.settingsType}>
              <div style={{ color: "black", marginLeft: "10px" }}>
                <h3>
                  <i className="fa-solid fa-list"></i>
                  &nbsp; Custom lists
                </h3>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className={styles.friendMessageContainer}>
        <div className={styles.friendsHeadingMinLength}>
          <h1 className={styles.noneAbove1200}>Friends</h1>
          <small>
            <a href="#all-friends">friends</a>
          </small>
          <small>
            <a href="#friend-list-home">friend request</a>
          </small>
          <small>
            <a href="#all-users">may to know</a>
          </small>
        </div>

        {/* <!-- user box start --> */}
        <div className={styles.friendUserBox} id="friend-list-home">
          {/* <!-- request heading  --> */}
          <div className={styles.requestHeading}>
            <h3>Friend requests</h3>
            <a href="">See All</a>
          </div>

          {/* <!-- request friend box start--> */}
          <div className={styles.userCardBox}>
            <div className={styles.usersBox}>
              <div className={styles.usersImg}>
                <a href="">
                  <img
                    src="https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_960_720.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className={styles.usersName}>
                <h3>
                  <a href=""> Akash Lamba </a>
                </h3>
                <div className={styles.confirmAddBtnsBox}>
                  <a href="">
                    <div
                      className={styles.confirmAddBtns}
                      style={{
                        backgroundColor: "rgb(117 18 58)",
                        color: "white",
                      }}>
                      Confirm
                    </div>
                  </a>

                  <a href="">
                    <div
                      className={styles.confirmAddBtns}
                      id="friend-delete-btn"
                      style={{
                        marginLeft: "10px",
                        backgroundColor: "rgb(156, 156, 156)",
                        color: "white",
                      }}>
                      Remove
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// --> */}
          </div>

          {/* <!-- request friend box end--> */}
        </div>

        <div className={styles.friendUserBox} id="all-users">
          {/* <!-- request heading  --> */}
          <div className={styles.requestHeading}>
            <h3>People in Socialia</h3>
            <a href="">See All</a>
          </div>

          {/* <!-- request user box start--> */}
          <div className={styles.userCardBox}>
            <div className={styles.usersBox}>
              <div className={styles.usersImg}>
                <a href="">
                  <img
                    src="https://cdn.pixabay.com/photo/2023/01/28/20/23/ai-generated-7751688_960_720.jpg"
                    alt=""
                  />
                </a>
              </div>

              <div className={styles.usersName}>
                <h3>
                  <a href=""> Akash Lamba </a>
                </h3>
                <div className={styles.confirmAddBtnsBox}>
                  <a href="">
                    <div
                      className={styles.confirmAddBtns}
                      style={{
                        backgroundColor: "rgb(117 18 58)",
                        color: "white",
                      }}>
                      Add
                    </div>
                  </a>

                  <a href="">
                    <div
                      className={styles.confirmAddBtns}
                      id="friend-delete-btn"
                      style={{
                        marginLeft: "10px",
                        backgroundColor: "rgb(156, 156, 156)",
                        color: "white",
                      }}>
                      Remove
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- request user box start--> */}
        </div>

        <div className={styles.friendUserBox} id="all-friends">
          {/* <!-- request heading  --> */}
          <div className={styles.requestHeading}>
            <h3>All Friends</h3>
            <a href="">See All</a>
          </div>

          {/* <!-- request user box start--> */}
          <div className={styles.userCardBox}>
            <div className={styles.usersBox}>
              <div className={styles.usersImg}>
                <dvi>
                  <a href="">
                    <img
                      src="https://1fid.com/wp-content/uploads/2022/06/girl-profile-picture-1024x1024.jpg"
                      alt=""
                    />
                  </a>
                </dvi>
              </div>

              <div className={styles.usersName}>
                <h3>
                  <a href=""> Akash Lamba </a>
                </h3>
                <div className={styles.confirmAddBtnsBox}>
                  <a href="">
                    {/* <div className="confirm-add-btns friend-confirm-btn friend-open-profile-btn"> */}
                    <div
                      className={styles.confirmAddBtns}
                      style={{
                        backgroundColor: "rgb(117 18 58)",
                        color: "white",
                        width: "175px",
                      }}>
                      open profile
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- request user box start--> */}
        </div>
      </div>
    </dev>
  );
};

export default FriendsSeparate;
