import React from "react";
import img from "./img.jpg";

const Friends = ({ styles }) => {
  return (
    <div className={styles.friendUserBoxContainer}>
      <div className={styles.friendsHeading}>
        <h1>Friends</h1>

        {/* <img src="img.jpg" /> */}

        <form action="">
          <input type="text" placeholder="search..." />
          <button type="submit">
            <i className="fa-solid fa-search"></i>
          </button>
        </form>
      </div>

      {/* <!-- user box start --> */}
      <div className={styles.friendUserBox}>
        {/* <!-- request heading  --> */}
        <div className={styles.requestHeading}>
          <h3>Friend requests</h3>
          <a href="">See All</a>
        </div>

        {/* <!-- request friend box start--> */}
        <div className={styles.usersBox}>
          <div className={styles.usersImg}>
            <img src={img} alt="profile" />
          </div>

          <div className={styles.usersName}>
            <h3>
              <a href=""> Akash Lamba kumar singh</a>
            </h3>
            <div className={styles.confirmAddBtnsBox}>
              <a href="">
                <div
                  className={styles.confirmAddBtns}
                  style={{
                    backgroundColor: "rgb(117 18 58)",
                    color: "white",
                  }}
                  id="friend-confirm-btn">
                  {/* styles.colorEdRed */}
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

        {/* <!-- request friend box end--> */}
      </div>

      <div className={styles.friendUserBox}>
        {/* <!-- request heading  --> */}
        <div className={styles.requestHeading}>
          <h3>People in Socialia</h3>
          <a href="">See All</a>
        </div>

        {/* <!-- request user box start--> */}
        <div className={styles.usersBox}>
          <div className={styles.usersImg}>
            <img src={img} alt="profile" />
          </div>

          <div className={styles.usersName}>
            <h3>
              <a href=""> Akash Lamba kumar singh</a>
            </h3>
            <div className={styles.confirmAddBtnsBox}>
              <a href="">
                <div
                  className={styles.confirmAddBtns}
                  style={{
                    backgroundColor: "rgb(117 18 58)",
                    color: "white",
                  }}
                  id="friend-confirm-btn">
                  {/* styles.colorEdRed */}
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
        {/* <!-- request user box start--> */}
      </div>
    </div>
  );
};

export default Friends;
