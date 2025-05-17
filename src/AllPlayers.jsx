// @flow strict

import * as React from 'react';
import Available from './Available';
import Selection from './Selection';

function AllPlayers({playerRemove,heandelPlayerRemove,handlIsActiveState,isActive,addPlayerHeandel,playerAdd,taka}) {
    return (
       <div>
            <div className='flex justify-between items-center pt-5 pb-4 px-3 bg-[#E0E5B6]'>
            <h1 className='font-bold text-3xl'>Available Players</h1>
            <div>
                <div className='flex gap-4'>
                <button  onClick={()=>handlIsActiveState('available')} className={`${isActive.available?"btn active":"btn"}`}>Available</button>
                <button onClick={()=>handlIsActiveState('selection')} className={`${isActive.available?"btn":" active btn"}`}>Sclected:({playerAdd.length})</button>
                </div>
            </div>
        </div>
        {isActive.available?<Available addPlayerHeandel={addPlayerHeandel} taka={taka}></Available>:
            <Selection handlIsActiveState={handlIsActiveState} addPlayerHeandel={addPlayerHeandel} playerRemove={playerRemove} heandelPlayerRemove={heandelPlayerRemove} playerAdd={playerAdd}></Selection>}
        </div>
    );
};

export default AllPlayers;