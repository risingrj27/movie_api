import React, { useEffect, useState } from 'react';
import './style.css';


const Data = () => {

    const [page, setPage] = useState(1);
    const [totalpage, setTotalPage] = useState(1);

    const [users, setusers] = useState([]);
    const getUsers = async () => {
        const response = await fetch(`https://reqres.in/api/users?page=${page}`);

        const data = await response.json();
        setusers(data.data);
        setTotalPage(data.total_pages)
    }
    useEffect(() => {
        getUsers();
    }, [])

    const paging = (status) => {
        if (status === 1) {
            if (page !== 1) {
                setPage(page - 1)
                getUsers()
            }
        }
        else {
            if (page !== totalpage) {
                setPage(page + 1)
                getUsers()
            }
        }
    }

    return (
        <>

            <div className="container1">

                {
                    users.map((currEle) => {
                        return (

                            <div className="col-10 col-md-4 mt-5 cardml" key="">
                                <div className="card p-2 ">
                                    <div className="d-flex align-items-center">
                                        <div className="image"> <img src={currEle.avatar} className="rounded" width="155" /> </div>
                                        <div className=" w-100">
                                            <h4 className="mb-0 mt-0 textLeft">{currEle.first_name} &nbsp; {currEle.last_name}</h4>
                                            
                                            <span className="text-left"> {currEle.email}</span>
                                            <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                <div className="d-flex flex-column">
                                                    <span className="articles">Articles</span> <span className="number1">38</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="followers">Followers</span> <span className="number2">980</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="rating">Rating</span> <span className="number3">8.9</span> </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

               
            </div>
            <div className="Btn-group">
            <button className="btn1" onClick={() => paging(1)}>Previous</button>
            <button className="btn1" onClick={() => paging(2)}>Next</button>
            </div>
        </>
    )
}

export default Data;