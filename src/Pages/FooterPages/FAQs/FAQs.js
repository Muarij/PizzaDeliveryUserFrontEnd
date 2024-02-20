import React from 'react'
import '../AboutUs/AboutUs.css'
import Header from '../../Header/Header'

export default function FAQs() {
    return (
        <div onLoad={() => window.scrollTo(0, 0)}>
            <Header />
            <div className='fixedcontent'>
                <br />
                <div className='container'>
                    <h1>FAQs</h1> <hr />
                    <div className='FooterPagecontainer shadow-lg'>
                        <div>
                            <h5>Q. Is your chicken or Non-Veg Pizza Safe to eat ?</h5>
                            <p>
                                Dear Mam / Sir, Our pizza is absolutely safe & baked at 250 degree Celsius (465 degree Fahrenheit) that ensures your food is safe for immediate consumption.
                            </p>
                        </div>
                        <hr />
                      
                       
                        <hr />
                        <div>
                            <h5>Q. Can I modify/cancel my online order ?</h5>
                            <p>
                                Sir/Mam, online order once placed cannot be modified or cancelled, either through the website or offline by calling the restaurant or our call center.
                            </p>
                        </div>
                        <hr />
                    
                        <div>
                            <h5>Q. At what time shoulld I come for take-away delivery ?</h5>
                            <p>
                                Sir/Mam, you can come at our branch from where you have ordered after 30min of online ordering .
                            </p>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    )
}