import React from 'react'

const MenuCard = ({ menuData }) => {
    return <>
        <section className='main-conatiner'>
            {
                menuData.map((curElemnt) => {
                    const {id,image,name,catagory,price,description}= curElemnt;
                    return <>
                        <div className='card-container' key={id}>
                            <div className='card'>
                                <div className='card-body'>
                                    <span className='card-number'>{id}</span>
                                    <span className='card-author'>{catagory}</span>
                                    <h2 className='card-title'>{name}</h2>
                                    <p> {description} </p>
                                    <div className="card-read">Read</div>
                                </div>
                                <img src={image} alt="" className='card-media' />
                                <span className='card-tag btn'>Order Now</span>
                            </div>
                        </div>
                    </>
                })
            }
        </section>
    </>
}

export default MenuCard;
