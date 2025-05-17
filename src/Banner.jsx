// @flow strict

import * as React from 'react';

function Banner({handalTaka,notify,addPlayerHeandel}) {
    return (
        
            <div className="hero h-auto"style={{backgroundImage: "url(https://i.ibb.co.com/v4f8n1w/pngtree-icc-cricket-world-match-background-image-13943187.jpg)",}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
        <div className=" flex justify-center ">
            <img className="rounded-full" src="https://i.ibb.co.com/RB1GwhC/download-1.jpg" alt="" />
        </div>
      <h1 className="mb-5 text-2xl font-bold text-amber-500">Assemble Your Ultimate Dream 11 Cricket Team</h1>
      <p className="pb-16 text-amber-500">Beyond Boundaries Beyond Limits</p>
      <button onClick={()=>{handalTaka('Taka')
        notify()
      }} className="btn bg-[#e7fe29] border-none ">Claim Free Credit</button>
    </div>
  </div>
  <img src="https://i.ibb.co.com/v4f8n1w/pngtree-icc-cricket-world-match-background-image-13943187.jpg" alt="" />
</div>
    );
};

export default Banner;