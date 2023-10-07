import React, { useState } from 'react'

export default function Nav(props) {
    const [visible, setVisible] = useState(false);

    const [text, setText] = useState('');


    const submit = async(ev)=>{
        ev.preventDefault();
        const response = await fetch(`api.php?formKey=-Nf-o4wwpMSc8Sip4MNP&op=store&textarea-1695451976484=${text}`)
        if(response.ok){
            alert('Data Submitted Success');
            setVisible(false);
            {props.refresh()}
        }
    }
    return (
        <nav className='bg-gray-800 text-white px-10 py-2 flex'>
            <p className='text-4xl font-extrabold'>{props.title}</p>
            <div className='ml-auto'>
                <button className='mt-2 font-bold' onClick={() => {
                    setVisible(true);
                }}>Add New</button>
            </div>

            {visible && (<section className='bg-yellow-500 w-1/2 start-60 p-5 top-20 absolute'>
                <p className='text-right -mt-5'><span className='bg-black px-5 -mr-5 cursor-pointer' onClick={() => { setVisible(false) }}>X</span></p>
                <form onSubmit={submit}>
                    <h1 className='text-4xl font-bold  text-center mb-5'>
                        Add New
                    </h1>
                    <textarea className='w-full p-2 text-black' rows="10" onChange={(e) => { setText(e.target.value) }} required></textarea>
                    <input type="submit" className='bg-green-700 cursor-pointer text-white w-full text-2xl font-bold' />
                </form>
            </section>)}
        </nav>
    )
}
