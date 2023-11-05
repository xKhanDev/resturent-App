import React from 'react'
import Menu from './menuApi';

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <nav className='nav' id='main'>
                <ul>
                    {
                        menuList.map((curElemnt) => {
                            return (
                                <li> <a href="#" onClick={() => filterItem(curElemnt)}> {curElemnt} </a></li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}

export default Navbar
