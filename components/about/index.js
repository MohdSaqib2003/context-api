import React,{useEffect} from 'react'
import { UserContext } from '../../context/user';
import { useContext } from 'react';

const AboutUser = () => {
    const response = useContext(UserContext);
    console.log("response : ", response);
    console.log("state : ", response?.state);
    console.log("Loading : ", response?.state?.loading);
    console.log("API DATA : ", response?.state?.data);

    useEffect(()=>{
        response.fetchUserData(1);
    },[])

    return (<>
        <h3>AboutUser</h3>
        {/* <h3>Loading : {user?.state?.loading}</h3> */}
        <button onClick={() => response.fetchUserData(2)}> Fetch Data User 2 </button>
        <button onClick={() => response.fetchUserData(3)}> Fetch Data User 3 </button>
        <button onClick={() => response.fetchUserData(4)}> Fetch Data User 4 </button>
        <button onClick={() => response.fetchUserData(5)}> Fetch Data User 5 </button>
        <div style={{ backgroundColor: 'gray' }}>
            <h6> USER DATA </h6>
            {response?.state?.loading ? <h2>Loading...</h2> : <>
                ID : {response?.state?.data?.id} <br />
                Name : {response?.state?.data?.name} <br />
                Username : {response?.state?.data?.username} <br />
            </>}

        </div>
    </>
    )
}
export default AboutUser;