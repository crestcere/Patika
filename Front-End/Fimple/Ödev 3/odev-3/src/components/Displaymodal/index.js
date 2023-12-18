import { useState } from "react";
import styles from "./style.module.css";
const Displaymodal = ({ item, setData, data, index }) => {
  const [unhide, setUnhide] = useState(false);
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const modalFunc = () => {
    setUnhide(true);
  };

  const closeModal = () => {
    setUnhide(false);
    setEdit(false);
  };

  const saveModal = () => {
    if (title !== "") {
      data[index].title = title;
    }
    if (description !== "") {
      data[index].description = description;
    }
    setData([...data]);

    if (price !== "") {
      data[index].price = price;
    }
    closeModal();
  };

  const editModal = () => {
    setEdit(true);
  };

  if (edit) {
    return (
      <>
        <button onClick={() => modalFunc()}>Edit</button>
        {unhide && (
          <div id={item.id} className={styles.modal}>
            {/*<div className={styles.name}>{item.title}</div>*/}
            <input
              defaultValue={item.title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <div>{item.category}</div>
            <br />
            <img className={styles.image} src={item.image} alt={"product"} />
            <br />
            {/*<div>{item.description}</div>*/}
            <textarea
              defaultValue={item.description}
              className={styles.input}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <input
              defaultValue={item.price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <button className={styles.button} onClick={() => saveModal()}>
              Save
            </button>
            <button className={styles.button} onClick={() => closeModal()}>
              Close
            </button>
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        <button onClick={() => modalFunc()}>Edit</button>
        {unhide && (
          <div id={item.id} className={styles.modal}>
            <div className={styles.name}>{item.title}</div>
            <div>{item.category}</div>
            <br />
            <img className={styles.image} src={item.image} alt={"product"} />
            <br />
            <div>{item.description}</div>
            <br />
            <div>{item.price}$</div>
            <br />
            <button className={styles.button} onClick={() => editModal()}>
              Edit
            </button>
            <button className={styles.button} onClick={() => closeModal()}>
              Close
            </button>
          </div>
        )}
      </>
    );
  }
};

export default Displaymodal;
