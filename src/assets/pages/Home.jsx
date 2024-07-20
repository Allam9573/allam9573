import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Home = () => {
    return (
        <>
            <h2>Allam Argueta</h2>
            <Link to={'/allam9573/about'}>Acerca de mi</Link>
            <Link to={'/allam9573'}>Home</Link>
            <Link to={'/allam9573/cv'}>Mi Curriculum</Link>
            <Outlet />
        </>
    )
}
