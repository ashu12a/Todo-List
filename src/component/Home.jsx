import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import axios from 'axios';


export default function Home() {
    const [data, setData] = useState([]);
    const [ref, setRef] = useState(0);

    const FetchData = async () => {
        try {
            const response = await axios.get(`/api.php?formKey=-Nf-o4wwpMSc8Sip4MNP&op=list`);
            setData(response.data.reverse());
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        FetchData();
    }, [ref])


    const refresh = () => {
        setRef(ref + 1);
    }

    const del = async (id) => {
        const res = window.confirm("Are You Sure");
        if (res) {
            try {
                await axios.get(`/api.php?formKey=-Nf-o4wwpMSc8Sip4MNP&op=destroy&id=${id}`);
                alert("Delete Successfully");
                setRef(ref+1);
            } catch (err) {
                console.log(err);
            }
        }
    }

    return (
        <section className='bg-blue-400 min-h-screen'>
            {/* -----------------------------Navbar --------------------------  */}
            <Nav title="My ToDo List" refresh={refresh} />
            {/* ----------------------Main Content Section  ------------------ */}
            <section className='p-10 grid grid-cols-3 gap-3'>
                {data.length>0 && data.map(val => (
                    <div className="bg-red-700 w-80 p-5 m-2 text-white flex">
                        {val['textarea-1695451976484']}
                        <i className="fa-solid fa-trash ml-auto cursor-pointer" onClick={()=>{del(val['record_id'])}}></i>
                    </div>
                ))}

            </section>


        </section>
    )
}
