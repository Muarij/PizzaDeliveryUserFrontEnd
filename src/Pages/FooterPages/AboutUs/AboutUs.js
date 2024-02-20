import React from 'react'
import './AboutUs.css'
import Header from '../../Header/Header'

export default function AboutUs() {
    return (
        <div onLoad={()=>window.scrollTo(0,0)}>
            <Header />
            <div className='fixedcontent'>
                <br />
                <div className='container'>
                    <h1>About Us</h1> <hr />
                    <div className='FooterPagecontainer shadow-lg'>
                        <div>
                            <h5>Project Group 6: CDAC</h5>
                            <p>
                               This is Pizza Delivery Management System built from SpringBoot, MySql and ReactJs
                            </p>
                            <p>
                            Project Description: Automate the pizza delivery process, simplifying order placement and administration. The objective is to provide a convenient and efficient way for customers to order and receive pizza delivery. The project should provide an easy-to-use interface that allows customers to quickly order pizzas.  The project should aim to provide a positive customer experience by ensuring fast and efficient delivery, accurate order fulfillment.

                            </p>
                        </div>
                        <hr />
                        <div>
                            <h5>Project Memebrs</h5>
                            <p>
                            230340120123- Muarij Masoodi <br/>
230340120206- Sulabh Gangwar<br/>
230340120231- Suraj Waykar<br/>
230340120081- Muhammad Huzefa<br/>
230340120236- Zahid Masoom<br/>
                            </p>
                        </div>
                        <hr />
                        <div>
                            <h5>Insititute</h5>
                            <p>
                               CDAC Acts, Pashan, Pune
                            </p>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    )
}