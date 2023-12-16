import PropTypes from "prop-types";
import {useState, useEffect} from "react";
import axios from "axios";



const Getdata = ({id ="1"}) => {
    // if (typeof(id) != "number") {
    //     id = 1;
    // }
    const [datas, setDatas] =useState({});
    const [data2, setData2] = useState("");

    const postData = async () => {
        return new Promise (async (resolve, reject) => {
            const response = await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
            const response2 = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
            resolve(response2.data);
            resolve(response.data);
            setDatas(Object.assign({}, response.data, response2.data));
        })
    }

    useEffect(() => {
        postData();
    }, []);

    useEffect(() => {
            setData2(JSON.stringify(datas));
    }, [datas]);

    return(
        <>
            <div>{data2}</div>
        </>
    );
}

Getdata.defaultProps = {
    id: PropTypes.oneOfType([
        PropTypes.number,
    ]),
}

export default Getdata;
