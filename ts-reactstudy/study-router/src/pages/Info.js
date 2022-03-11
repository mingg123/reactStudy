import { useLocation, useParams } from 'react-router-dom';
import React from 'react';

export const Info = ({ props }) => {
  const router = useLocation();

  return (
    <>
      Info
      <div> num is {router.state.num}</div>
      <div> 개월 is {router.state.month}</div>
    </>
  );
};
