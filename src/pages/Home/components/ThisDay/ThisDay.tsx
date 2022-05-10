import React from "react";
import Select from 'react-select'
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";

import s from './ThisDay.module.scss'

interface Props { }

export const ThisDay = (prop: Props) => {
  return <header className={s.this__day}>
    <div className={s.top__block}>
      <div className={s.top__block_wrapper}>
        <div className={s.this__temp}>
          20
        </div>
        <div className={s.this__day_day}>
          Сегодня
        </div>
      </div>
      <GlobalSvgSelector id="sun" />
    </div>
    <div className={s.bottom__block}>
      <div className={s.this__time}>
        Время: <span>21:54</span>
      </div>
      <div className={s.this__city}>
        Saint-p
      </div>
    </div>

  </header>




}