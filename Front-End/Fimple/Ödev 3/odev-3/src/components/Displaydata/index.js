import PropTypes from "prop-types";
import { useEffect } from "react";
import styles from "./style.module.css";
import Displaymodal from "../Displaymodal";
const Displaydata = ({ data, setData }) => {
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div className={styles.productList}>
      {data.map((item, index) => (
        <div className={styles.products} key={item.id}>
          <div className={styles.name}>{item.title}</div>
          <img className={styles.img} src={item.image} alt={"item"} />
          <div>{item.price}$</div>
          <Displaymodal
            data={data}
            setData={setData}
            item={item}
            index={index}
          />
        </div>
      ))}
    </div>
  );
};

Displaydata.propTypes = {
  data: PropTypes.array,
};
export default Displaydata;
