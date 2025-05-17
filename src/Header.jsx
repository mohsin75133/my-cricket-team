// @flow strict

import * as React from 'react';

function Header({taka}) {
    return (
       <div className="bg-[#CCD5AE] flex justify-around items-center sticky top-0 z-50">
            <div >
                <img className="w-16 h-16 rounded-full" src="https://i.ibb.co.com/RB1GwhC/download-1.jpg" alt="" />
            </div>
            <div className="flex gap-4">
             <a href="">Home</a>
             <a href="">Fisture</a>
             <a href="">Teams</a>
             <a href="">Schedules</a>
             <div className="flex pl-3 border-2 h-7 w-auto items-center rounded-xl">
            <p className="font-bold">{taka}</p>
            <p className="pl-2 font-bold">Coin</p>
            <i className="fa-solid fa-coins pl-3 m-1"></i>
             </div>
            </div>
        </div>
    );
};

export default Header;