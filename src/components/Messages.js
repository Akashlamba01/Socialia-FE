import React from "react";
import img from "./img.jpg";
import { Link } from "react-router-dom";

const Messages = ({ styles }) => {
  return (
    <div
      className={styles.friendUserBoxContainer}
      style={{ borderLeft: "2px solid rgb(184, 184, 184)" }}>
      <div className={styles.friendHeading}>
        <h2>Messages</h2>
      </div>

      {/* <div className={styles.chatBox}>
        <div className={styles.chatOne}>
          <div className={styles.chatTwo}></div>
        </div>
      </div> */}

      {/* <!-- user box start --> */}
      <div className={styles.friendUserBox}>
        {/* <!-- request heading  --> */}
        <div className={styles.requestHeading}>
          <h3>Recent Chats</h3>
          <Link to="">See All</Link>
        </div>

        {/* <!-- request friend box start--> */}
        <div className={styles.usersBox} style={{ cursor: "pointer" }}>
          <div className={styles.usersImg}>
            <img src={img} alt="profile" />
          </div>

          <div className={styles.usersName}>
            <h3>
              <Link to=""> Akash Lamba kumar singh</Link>
            </h3>
            <div className={styles.confirmAddBtnsBox}>
              <div className={styles.chatMessage}>
                <p>jakljlk djfaioj ldasjkldj fi ejf dmfoiei</p>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- request friend box end--> */}
      </div>

      <div className={styles.friendUserBox}>
        {/* <!-- request heading  --> */}
        <div className={styles.requestHeading}>
          <h3>Groups</h3>
          <Link to="">See All</Link>
        </div>

        {/* <!-- request user box start--> */}
        <div className={styles.usersBox} style={{ cursor: "pointer" }}>
          <div className={styles.usersImg}>
            <img src={img} alt="profile" />
          </div>

          <div className={styles.usersName}>
            <h3>
              <Link to=""> Akash Lamba kumar singh</Link>
            </h3>
            <div className={styles.confirmAddBtnsBox}>
              <div className={styles.chatMessage}>
                <p>jakljlk djfaioj ldasjkldj fi ejf dmfoiei</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- request user box start--> */}
      </div>
    </div>
  );
};

export default Messages;
