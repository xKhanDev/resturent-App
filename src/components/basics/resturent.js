import React from 'react'
import "./style.css"
import Menu from "./menuApi.js"
import MenuCard from "./MenuCard"
import Navbar from './Navbar'

const unique = [
    ...new Set(Menu.map((curElemnt) => {
        return curElemnt.catagory;
    })
    ),
    "All"
];

const Resturent = () => {
    const [menuData, setMenuData] = React.useState(Menu);
    const [menuList, UpdatedMenuLi] = React.useState(unique);

    const filterItem = (catagory) => {
        if (catagory === "All") {
            return setMenuData(Menu)
        }
        else {
            const updateLi = Menu.filter((curElemnt) => {
                return curElemnt.catagory === catagory;
            })
            setMenuData(updateLi);
        }
    }
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </>
    )
}

export default Resturent

// useState return Array of two elements. 1) state variable . 2) Updated function
// we use "useState" to manage data

// to pass data from one component to other then we do like this:
// <MenuCard menuData={menuData}/>
// in the above curly bracket is called props