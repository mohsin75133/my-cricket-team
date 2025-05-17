// @flow strict

import * as React from 'react';

function Selection({ playerAdd,heandelPlayerRemove,handlIsActiveState}) {
    return (
        <div className="bg-[#FAEDCE] pb-11">

            <h1 className="pb-4 font-bold text-xl pt-2">selection player:(8/{playerAdd.length})</h1>
            {
                playerAdd.map(palayer => (
                    <div className=" flex justify-between p-4 border-2 rounded-3xl mb-3 mx-4 bg-[#E0E5B6]">
                        <div className="flex items-center">
                            <div>
                                <div><img className="w-20 h-20 rounded-full" src={palayer.image} alt="" /></div>
                            </div>
                            <div className="pl-20">
                                <p className="font-bold">{palayer.name}</p>
                                <p className="font-bold">{palayer.role}</p>
                            </div>
                            <div className="pl-20">
                                <p className="font-bold">{palayer.battingType}</p>
                                <p className="font-bold">{palayer.bowlingType}</p>
                            </div>

                        </div>
                        <div className="flex justify-center">
                            <button onClick={()=>heandelPlayerRemove(palayer.playerId)}><i className="fa-solid fa-trash"></i></button>
                        </div>
                     
                    </div>
                ))}
                 <div>
              <button onClick={()=>handlIsActiveState('available')} className="btn bg-[#BC7C7C] ml-4 mt-4">Add More Player</button>
              </div>
        </div>
    );
};

export default Selection;