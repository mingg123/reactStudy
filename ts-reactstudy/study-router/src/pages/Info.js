import { useLocation, useParams } from 'react-router-dom';
import React from 'react';
import { useUserStore } from '../store/userStore';

export const Info = ({ props }) => {
  const router = useLocation();
  const { num } = useUserStore();
  return (
    <>
      Info
      <div>num is {num}</div>
      {/* <div> num is {router.state.num}</div> */}
      <div> 개월 is {router.state.month}</div>
    </>
  );
};
