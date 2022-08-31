import { Button } from '@mui/material'
import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

export const Leads = () => {
  const {signOut} = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Leads</h2>
      <Button onClick={() => signOut(()=>navigate('/sign-in', {replace: true}))}>Sign out</Button>
    </div>
  )
}
