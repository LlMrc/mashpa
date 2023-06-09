 'use client'
import React, { FC, Suspense } from 'react'


import { Box, Typography } from '@mui/material'

import PostModal from '@/app/components/PostModal'
import getUser from '../../../../lib/getUser'
import getPost from '../../../../lib/getUserPost'
import NavBar from '@/app/components/NavBar'





interface PageProps{
    params: {
        userId: string
    }
}



const   user =   async({params :{userId}}: PageProps) =>{
 
 const data: Promise<User> = getUser(userId)
 const postData: Promise<Post[]> = getPost(userId)
 
          const currentPost = await data
 
    
    return (
     <>
     
      <Box height={70}/>
      <Typography variant='h4' fontWeight={'bold'} p={2}>{currentPost.name}</Typography> 

      {/* @ts-expect-error Async Server Component */}
      <Suspense fallback={<h2>loading...</h2>}> <PostModal promise={postData}/></Suspense>
  
       
           
       
     </>
    )
}

export default user



