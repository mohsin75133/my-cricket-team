import { useState } from 'react'

import './App.css'
import Header from './Header'
import Banner from './Banner'
import AllPlayers from './AllPlayers'
import Footer from './Footer'
// import { ToastContainer } from 'react-toastify'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [isActive, setIsActive] = useState({
    available: true,
    status: "available"
  })
  const handlIsActiveState = (status) => {
    if (status == "available") {
      setIsActive({
        available: true,
        status: "available"
      })
    }
    else {
      setIsActive({
        available: false,
        status: "selection"
      })
    }
  }
  const [taka, setTaka] = useState(0)
  const handalTaka = () => {
    setTaka(taka + 2)
  }
  const [selectedPlayers, setSelectedPlayers] =useState([]);
  // eslint-disable-next-line no-unused-vars
  
  const notify = () => toast.success("Add Coin");
   

  const [playerAdd, setPlaerAdd] = useState([])
  const addPlayerHeandel = (recipe) => {
    const isExist = playerAdd.find(previousPlayer => previousPlayer.playerId === recipe.playerId)
    if (!isExist) {
       if(taka>recipe.biddingPrice){
        toast.success(`Congrates !! ${recipe.name} is now in your squad`);
        setPlaerAdd([...playerAdd, recipe])
      }
    }
    if (taka < recipe.biddingPrice) {
      toast.error(`Not enough coins to select ${recipe.name}.`);
      return;
    }
    if(isExist) {
      toast.warn("Player already selected");
      return;
    }
    
    setSelectedPlayers([...selectedPlayers,recipe]);
    setTaka(taka-recipe.biddingPrice);
  }

const heandelPlayerRemove=id=>{
  //const deletePlayer=playerAdd.find(require=>require.playerId===id)
  const updatePlayer=playerAdd.filter(require=>require.playerId!==id)
    setPlaerAdd(updatePlayer)
    toast.warn("Player already Delete");
 
}

  return (
    <>
       <ToastContainer />
      <Header taka={taka}></Header>
      <Banner notify={notify} handalTaka={handalTaka}></Banner>
      <AllPlayers heandelPlayerRemove={heandelPlayerRemove}  taka={taka} addPlayerHeandel={addPlayerHeandel} playerAdd={playerAdd} isActive={isActive} handlIsActiveState={handlIsActiveState}></AllPlayers>
      <Footer></Footer>

    </>
  )
}

export default App
