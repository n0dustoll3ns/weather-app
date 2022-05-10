import React from 'react';

import s from './components/MonthStatistics.module.scss'; 

interface Props {
}

export const MonthStatistics = (props: Props) => {
  return (
    <div className={s.home}>
      Month Statistics
    </div>
  );
}
