import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from ".BotSpecs"

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots]= useState([]);
  const [selectedBot, setSelectBot] = useState(null);
  const [botsArmy, setBotsArmy]= useState([]);



useEffect(() =>{
  fetchBots();
}, [botsArmy]);
const fetchBots = async() =>{
  try{
    const res = await fetch("http://localhost:8002/bots");
    const data = await res.json();
    setBots(data);
  }catch (err) {
    console.log(err);
  }  
};

const selectBot = (bot) =>{
  const addToArmy = bots.filter((bot)=> bot.id === bot.id);
  // const botIsAvailable = botsArmy. filter.find((bot) =>  bot.id === bot.id);

  setSelectBot(addToArmy[0]);

}

const enlistBot = (bot) =>{
  const addToArmy = bots.filter((bot)=> bot.id === bot.id);
  const botIsAvailable = botsArmy. filter.find((bot) =>  bot.id === bot.id);
  if(!botIsAvailable){
    setBotsArmy([...botsArmy, addToArmy([0])]);
  };
}

const removeBotPermanently = async(bot) =>{
  try {
			const res = await fetch(`http://localhost:8002/bots/${bot}`, {
				method: "DELETE",
			});
			const removeBotPermanently = botsArmy.filter((bot) => bot.id !== bot);
			setBotsArmy(removeBotPermanently);
		} catch (error) {
			console.log(error);
		}
};

const resetSelectedBot = () => {
		setSelectBot(null);
	}; 


  return (
    <div>
      <YourBotArmy army={botsArmy} removeBotPermanently={removeBotPermanently} selectBot={selectBot} />
      {!selectedBot && <BotCollection bots={bots} selectBot={selectBot} />}
      {selectedBot && (
				<BotSpecs enlistBot={enlistBot} resetSelectedBot={resetSelectedBot} bot={selectedBot} />)}
    </div>
  );
}

export default BotsPage;
