import PropTypes from "prop-types";
import {useState, useEffect} from "react";
import axios from "axios";

const Getdata = () => {
    const [datas, setDatas] =useState({});

    const postData = async () => {
        return new Promise (async (resolve, reject) => {
            const response = await axios("https://jsonplaceholder.typicode.com/users/1");
            console.log(response.data);
            setDatas(response.data);
            resolve(response.data);
        })
    }

    // const post = async () => {
    //     await postData();
    // }
    // post();

    // postData();

    return(
        <>
            <div>{}</div>
        </>
    );
}

Getdata.defaultProps = {
    id: PropTypes.number,
}

export default Getdata;
