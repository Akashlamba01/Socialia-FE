import styles from "../styles/loading.module.css";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className={styles.ReactLoading}>
      {/* <div>Socialia</div> */}
      <ReactLoading
        type={"bars"}
        color={"rgb(117 18 58)"}
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loading;
