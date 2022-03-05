import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

function Header() {
    return (
        <div className={s.header}>
            <NavLink to='/PreJunior' className= {({ isActive }) => (isActive ? s.active : s.link)}>pre-junior</NavLink>
            <NavLink to='/Junior' className={({ isActive }) => (isActive ? s.active : s.link)}>junior</NavLink>
            <NavLink to='/JuniorPlus' className={({ isActive }) => (isActive ? s.active : s.link)}>junior+</NavLink>
            <div className={s.block}/>
        </div>
    )
}

export default Header
