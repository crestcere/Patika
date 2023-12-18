import { useEffect, useState } from "react";
import Displaydata from "../Displaydata";

const Getdata = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const getData = () => {
    return new Promise(async (resolve, reject) => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      resolve(data);
      setData(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {
        <>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Displaydata data={data} setData={setData} />
          )}
        </>
      }
    </>
  );
};

export default Getdata;
