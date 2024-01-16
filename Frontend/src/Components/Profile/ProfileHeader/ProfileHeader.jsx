import React from 'react'
import boy from '../../../Assets/Images/boy.png';

function ProfileHeader({data}) {
  return (
    <div className='flex items-start mx-3 pl-10 '>
        {/* Image */}
        <div>
          <img src={boy} alt='userImage' className='relative z-10 bg-[#6BB4C5] rounded-full
                        w-[150px] h-[150px] mt-3'
            />
        </div>

         {/* User Detail Section */}
        <div className='px-6 pt-5'>
          <h1 className='font-bold  text-2xl tracking-wide font-Itim '>{data.fullName}</h1>
          <h2 className='font-Itim italic text-lg'>@{data.username}</h2>
          <div className='flex items-center text-center mt-5 text-Poppins'>
              <div className='py-0 pr-4 border-r-slate-300 border-r-[1px]'>
                  <h3 className='mb-1 text-slate-500 font-medium'>Friends</h3>
                  <p className='text-sm text-slate-500'>{data.noFriends}</p>
              </div>
              <div className='py-0 px-4 border-r-slate-300 border-r-[1px]'>
                  <h3 className='mb-1 font-medium text-slate-500'>Friend Requests</h3>
                  <p className='text-sm text-slate-500' >{data.noReq} </p>
              </div>
              <div className='py-0 px-4'>
                  <h3 className='mb-1 font-medium text-slate-500'>Date Joined</h3>
                  <p className='text-sm text-slate-500'>{data.dateJoined}</p>
              </div>
          </div>
        
        </div>
      
      </div>
  )
}

export default ProfileHeader