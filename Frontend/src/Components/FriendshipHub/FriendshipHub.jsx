import React from 'react'
import { useLoaderData } from 'react-router-dom'
import LeftSideBar from '../Home/LeftSideBar/LeftSideBar'
import FriendshipMain from './FriendshipMain/FriendshipMain'

function FriendshipHub() {

  const data = useLoaderData();
  console.log('friendship hub data: ', data);



  return (
    <div className='flex bg-primary-100 h-screen w-screen'>
      <LeftSideBar />
      <FriendshipMain data={data} />
    </div>
    
  )
}

export default FriendshipHub


export async function loader () {

  const userId = '65a297b2b32acbfdbde8a217' 
  const response = fetch(
    'http://localhost:8000/api/friendshiphub/page',
    
      {
        method: 'POST',
        body: JSON.stringify({userId}),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    
    );

    console.log('response Friendship Hub: ' , response);
    return response;


}