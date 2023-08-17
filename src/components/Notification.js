import React from "react";
import notificationStyle from "../styles/notification.module.css";

const Notification = ({ styles }) => {
  return (
    <div className={styles.postTimeline}>
      <div className={notificationStyle.createPost}>
        {/* <div>
            <img src="./image/profile/proImg.jpg" alt="" />
            <div className="input-title">
              <h4>
                Akash Lamba
                <small style="font-weight: 100">
                  Whats on your mind? kldaj jdklaj k dkjfoj kdaf adkj djfkljeioj
                  fkjdkajfi ejf jkl kjfdklaj kjakdjfiejlk fe</small
                >
              </h4>
            </div>
            <div style="text-align: center">
              <a href="">
                <i className="fa-solid fa-ellipsis"></i>
              </a>
            </div>
          </div>

          <div>
            <img src="./image/profile/proImg.jpg" alt="" />
            <div className="input-title">
              <h4>
                Akash Lamba
                <small style="font-weight: 100">
                  Whats on your mind? kldaj jdklaj k dkjfoj kdaf adkj djfkljeioj
                  fkjdkajfi ejf jkl kjfdklaj kjakdjfiejlk fe</small
                >
              </h4>
            </div>
            <div style="text-align: center">
              <a href="">
                <i className="fa-solid fa-ellipsis"></i>
              </a>
            </div>
          </div> */}

        <div>
          <div style={{ width: "60px", height: "60px", marginRight: "16px" }}>
            <img
              src="https://www.networkisa.org/uploads/63d994d26ed12.png"
              alt=""
            />
          </div>
          <div className={notificationStyle.inputTitle}>
            <h4>
              Akash Lamba
              <small style={{ fontWeight: 100 }}>
                Whats on your mind? kldaj jdklaj k dkjfoj kdaf adkj djfkljeioj
                fkjdkajfi ejf jkl kjfdklaj kjakdjfiejlk fe
              </small>
            </h4>
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="">
              <i className="fa-solid fa-ellipsis"></i>
            </a>
          </div>
        </div>

        <div>
          <div style={{ width: "60px", height: "60px", marginRight: "16px" }}>
            <img
              src="https://www.networkisa.org/uploads/63d994d26ed12.png"
              alt=""
            />
          </div>
          <div className={notificationStyle.inputTitle}>
            <h4>
              Akash Lamba
              <small style={{ fontWeight: 100 }}>
                Whats on your mind? kldaj jdklaj k dkjfoj kdaf adkj djfkljeioj
                fkjdkajfi ejf jkl kjfdklaj kjakdjfiejlk fe
              </small>
            </h4>
          </div>
          <div style={{ textAlign: "center" }}>
            <a href="">
              <i className="fa-solid fa-ellipsis"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
