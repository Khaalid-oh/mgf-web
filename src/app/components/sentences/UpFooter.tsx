import React from 'react'
import DownFooter from './DownFooter';

function UpFooter() {
  return (
    <div className="flex justify-between flex-col w-[80%] h-[80%]">
      <div className="text-white items-start justify-between flex w-[100%] h-[80%]">
        <div className="flex flex-col font-thin gap-4">
          <span className="font-semibold">SAUDI ARABIA OFFICE</span>
          <span>XYZ</span>
        </div>
        <div className="flex flex-col font-thin gap-4">
          <span className="font-semibold">WHAT WE DO</span>
          <span>Issues</span>
          <span>Initiatives</span>
          <span>Communities</span>
        </div>
        <div className="flex flex-col font-thin gap-4">
          <span className="font-semibold">WHY WE DO IT</span>
          <span>Overview</span>
        </div>
        <div className="flex flex-col font-thin gap-4">
          <span className="font-semibold">WHO WE ARE</span>
          <span>Our Approach</span>
          <span>Our Financials</span>
          <span>Our Missions and History</span>
          <span>Our Partners</span>
        </div>
        <div className="flex flex-col font-thin gap-4">
          <span className="font-semibold">GET INVOLVED</span>
          <span>Give</span>
          <span>Learn</span>
          <span>Act</span>
        </div>
      </div>
      <DownFooter/>
    </div>
  );
}

export default UpFooter
