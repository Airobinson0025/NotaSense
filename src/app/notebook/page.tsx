'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import NotebookHeader from '@/components/global/notebook-header'



const NotebookDashboard = () => {

    const router = useRouter()

    const { data: session, status } = useSession()  

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    if (!session) {
        router.push('/signin')
    }

    // console.log(session)
  return (
    <div>
      <NotebookHeader />
    </div>
  )
}

export default NotebookDashboard