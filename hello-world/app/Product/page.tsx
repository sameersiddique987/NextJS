import Link from 'next/link'
import React from 'react'

interface user {
    name : string,
    username : string,
    id : number
}

async function product() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const response = await data.json()
    console.log(response);
    
  return (
    <div>
    <div>Product</div>
    {
        response.map((item : user )=>{
        return <div key={item.id} className='p-5 border border-red-500 rounded m-5'>
        <h1>{item.name} {item.username}</h1>
        <button  type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"><Link href={`Product/${item.id}`} >SingleUser</Link></button>


        </div>
        }) 
    } 
  </div>
  )
}

export default product

