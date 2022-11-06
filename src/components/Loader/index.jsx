import React from 'react';
import cls from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={cls.ldsEllipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
