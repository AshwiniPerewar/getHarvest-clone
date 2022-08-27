import React from 'react'
import { ProtectedNavbar } from '../../components/protectedNavbar/ProtectedNavbar';
import { TimeComponent } from '../../components/timeComponents/TimeComponent';

export const Time = () => {
  return (
    <div>
        <ProtectedNavbar/>  
        <TimeComponent/>    
    </div>
  )
};
