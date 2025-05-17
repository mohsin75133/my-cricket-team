// @flow strict

import * as React from 'react';

function Available({addPlayerHeandel}) {
    const [allplayer, setAllPlayer] = React.useState([])

  React.useEffect(() => {
      fetch('FakeData.json')
          .then(res => res.json())
          .then(data => setAllPlayer(data))
  }, [])
    return (
       <div className="md:w-full pt-3 flex justify-center items-center bg-[#FAEDCE] pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-10">
                {
                    allplayer.map(recipe => (
                        <div key={recipe.playerId} className="card bg-base-100 border-2">
                            <figure className="px-8 pt-6">
                                <img className="rounded-xl w-96 h-60"
                                    src={recipe.image}
                                    alt="recipe img" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl text-gray-500">
                                <i className="fa-regular fa-circle-user text-4xl"></i>
                                    {recipe.name}</h2>
                                <p className="text-base font-bold "><i className="fa-solid fa-flag"></i>  {recipe.country}</p>
                                <div className="font-bold text-2xl text-center  ">
                                    <p className="border-2">{recipe.role}</p>
                                </div>
                                <hr />
                                <div className="flex gap-5">
                                    <div className="">
                                        <h1 className="font-bold text-lg">Rating: {recipe.rating}</h1>
                                        <p className="font-bold text-lg"> Batting: {recipe.battingType} </p>
                                        <p className="font-bold text-lg"> Bowling: {recipe.bowlingType} </p>
                                        <p className="font-bold text-lg"> Price: <i className="fa-solid fa-tags mt-1"></i> {recipe.biddingPrice} M</p>
                                    </div>
                                </div>
                                <div className="card-actions justify-start pt-4 ">
                                    <button onClick={()=>addPlayerHeandel(recipe)}className="btn bg-green-600 rounded-full w-full px-9 font-bold text-gray-800">Choose Player</button>
                                </div>
                            </div>
                        </div>
                    ))}

            </div>
        </div>
    );
};

export default Available;