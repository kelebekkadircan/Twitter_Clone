import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {

  const { slug } = useParams()

  return (
    <div>
      Profile Page - {slug}
    </div>
  )
}

export default Profile