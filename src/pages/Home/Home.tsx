import React from 'react';

import s from './components/Home.module.scss'; 
import { ThisDay } from './components/ThisDay/ThisDay';

interface Props {
}

export const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <ThisDay/>
    </div>
  );
}
