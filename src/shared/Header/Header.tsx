import React, { useEffect, useState } from "react";
import Select from 'react-select'
import SingleValue from "react-select/dist/declarations/src/components/SingleValue";

import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { useTheme } from "../../hooks/useTheme";
import s from './Header.module.scss'

interface Props { }

export const Header = (prop: Props) => {
  const themeObj = useTheme();
  const options = [
    { value: 'city-1', label: 'Moscow' },
    { value: 'city-2', label: 'Saint-P' },
    { value: 'city-3', label: 'Novgorod' }
  ]

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme === 'dark' ? '#4f4f4f' : 'rgba(71,147,255,0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: '100'
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme === 'dark' ? '#fff' : '#000'
    })
  };

  const [theme, setTheme] = useState('light');

  function changeTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const root = document.querySelector(':root') as HTMLElement;

    const components = [
      'body-background',
      'components-background',
      'card-background',
      'card-shadow',
      'text-color'
    ];

    components.forEach(element => {
      root.style.setProperty(
        `--${element}-default`, `var(--${element}-${theme})`
      )
    })


  }, [theme])


  return <header className={s.header}>
    <div className={s.wrapper}>
      <div className={s.logo}>
        <GlobalSvgSelector id="header-logo" />
      </div>
      <div className={s.title}>React Weather</div>
    </div>
    <div className={s.wrapper}>
      <div className={s.change_theme} onClick={changeTheme}>
        <GlobalSvgSelector id="change-theme" />
      </div>
      <Select defaultValue={options[1]} options={options} styles={colorStyles} />
    </div>
  </header>
}