import GroupList from '@/app/components/commun/GroupList'
import GroupLayout from '@/app/components/commun/layout'
import React from 'react'


const Cinema = () => {
  return (
       <GroupLayout>
    <GroupList img="https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" headerTitle="Most popular Movie" subTitle={'Most popular movies'}/>
    </GroupLayout> )
}

export default Cinema