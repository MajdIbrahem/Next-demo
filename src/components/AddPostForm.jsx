import React from 'react'
//Get request
//server side actions 
const AddPostForm = () => {
    const addPost =async (formData) => {
        "use server"
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: formData.get("title") ,
            body: formData.get("body"),
            userId: formData.get("user"),
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
            .then((json) => console.log(json));
        
}
return (
    <form className='flex flex-col items-center justify-center gap-6 w-4/6' action={addPost}>
        <input className='bg-blue-300/20 p-3 rounded placeholder:text-gray-400 w-full text-white outline-none' type='text' placeholder='user' name='user'></input>
        <input className='bg-blue-300/20 p-3 rounded placeholder:text-gray-400 w-full text-white  outline-none' type='text' placeholder='Title' name='title'></input>
        <textarea
            placeholder='body'
            name='body'
        id=''
        cols={30}
        rows={10}
        className='bg-blue-300/20 p-5 rounded placeholder:text-gray-400 w-full text-white'
        ></textarea>
        <button className='bg-blue-600/40  text-gray-200 py-2 text-lg font px-2 rounded w-2/4'>Add</button>
    </form>
)
}

export default AddPostForm