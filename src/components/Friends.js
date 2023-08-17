import React from "react";
import img from "./img.jpg";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Friends = ({ styles }) => {
  return (
    <div className={styles.friendUserBoxContainer}>
      <div className={styles.friendHeading}>
        <h1 style={{ fontSize: "24px" }}>Friends</h1>

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
          <Link to="">See All</Link>
        </div>

        {/* <!-- request friend box start--> */}
        <div className={styles.usersBox}>
          <div className={styles.usersImg}>
            <img src={img} alt="profile" />
          </div>

          <div className={styles.usersName}>
            <h3>
              <Link to=""> Akash Lamba kumar singh</Link>
            </h3>
            <div className={styles.confirmAddBtnsBox}>
              <Link to="">
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
              </Link>

              <Link to="">
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
              </Link>
            </div>
          </div>
        </div>

        {/* <!-- request friend box end--> */}
      </div>

      <div className={styles.friendUserBox}>
        {/* <!-- request heading  --> */}
        <div className={styles.requestHeading}>
          <h3>People in Socialia</h3>
          <Link to="">See All</Link>
        </div>

        {/* <!-- request user box start--> */}
        <div className={styles.usersBox}>
          <div className={styles.usersImg}>
            <img src={img} alt="profile" />
          </div>

          <div className={styles.usersName}>
            <h3>
              <Link to=""> Akash Lamba kumar singh</Link>
            </h3>
            <div className={styles.confirmAddBtnsBox}>
              <Link to="">
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
              </Link>

              <Link to="">
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
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- request user box start--> */}
      </div>
    </div>
  );
};

export default Friends;
