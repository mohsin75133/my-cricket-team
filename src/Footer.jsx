// @flow strict

import * as React from 'react';

function Footer() {
    return (
        <div className="bg-[#FEFAE0]">
           <div className="flex justify-center items-center">
           <div className="pt-5 border-2 rounded-xl w-96 bg-[#E0E5B6]">
                <div><div className="text-center">
                    <h1 className="font-bold text-2xl">Subscribe to our Newsletter</h1>
                    <p>Get the latest updates and news right in your inbox!</p>
                </div>
                    <div className="flex justify-center items-center gap-3 pt-3">
                        <div><input className="w-full h-11 border-2 rounded-xl pl-3" type="text" placeholder="Enter your email" /></div>
                        <div><button className="btn bg-[#aae27d]">Subscribe</button></div>
                    </div></div>
            </div>
           </div>
            {/*  */}
            <div className="">
                <div className="flex justify-center pt-7">
                    <img className="w-40 h-40 rounded-full" src="https://i.ibb.co.com/RB1GwhC/download-1.jpg" alt="" />
                </div>
                <div className="lg:flex lg:justify-between grid text-center gap-10 p-3 m-5">
                    <div>
                        <h1 className=" font-bold text-xl">About Us</h1>
                        <p className="  font-semibold">We are a passionate team<br></br>dedicated
                            to providing the<br></br>best services to
                            our customers.</p>
                    </div>
                    <div className="">
                        <h1 className="font-bold text-xl">Quick Links</h1>
                        <div className="grid font-serif text-base">
                        <a href="">Home</a>
                        <a href="">Services</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-xl">Subscribe</h1>
                        <p className="  font-semibold pb-4">Subscribe to our newsletter for the latest updates.</p>
                        <div className="flex justify-center">
                        <input className="p-3" type="text" placeholder="Enter your email" />
                        <button className="btn bg-[#aae27d]">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
           <h1 className="text-center font-bold">
            @2024 Your Company All Rights Reserved
           </h1>
        </div>
    );
};

export default Footer;