import React from 'react'
import { ProtectedFooter } from '../../components/protectedComponents/protectedFooter/ProtectedFooter';
import { ProtectedNavbar } from '../../components/protectedComponents/protectedNavbar/ProtectedNavbar';
import { TimeComponent } from '../../components/protectedComponents/timeComponents/TimeComponent';

export const Time = () => {
  return (
    <div>
        <ProtectedNavbar/>  
        <TimeComponent/>  
        <ProtectedFooter/>  
    </div>
  )
};
