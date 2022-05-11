import React from "react";
import Select from 'react-select'
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { Day } from "./Days";

import s from './Days.module.scss'

interface Props {
  day:Day;
  
 }

export const Card = (prop: Props) => {
  return <div className={s.card}>

  </div>
}