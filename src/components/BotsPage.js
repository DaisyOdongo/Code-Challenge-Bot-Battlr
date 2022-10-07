import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots]= useState([]);
  const [selectedBot, setSelectBot] = useState(null);
  const [botsArmy, setBotsArmy]= useState([]);

useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then((res) => res.json())
    .then((bots) => {
      setBots(bots)
    })
  }, [selectedBot])


const selectBot = (bot) =>{
  const addToArmy = bots.filter((bort)=> bort.id === bot.id);
  const botIsAvailable = botsArmy.find((bort) => bort.id === bot.id);
     
  setSelectBot(addToArmy[0]);

};

const enlistBot = (bot) =>{
  const addToArmy = bots.find((bort) =>bort.id ===bot.id);
  const botIsAvailable = botsArmy.filter((bort) => bort.id === bot.id);
  if(!botIsAvailable){
          setBotsArmy([...botsArmy, addToArmy[0]]);
  }
};

const removeBotFromArmy = async(bot) =>{
  try {
			  const res = await fetch(`http://localhost:8002/bots/${bot}`, {
				      method: "DELETE",
			});
			const removeBotFromArmy = botsArmy.filter((bort) => bort.id !== bot);
			setBotsArmy(removeBotFromArmy);
		} catch (error) {
			console.log(error);
		}
};

const resetSelectedBot = () => {
		setSelectBot(null);
	}; 


  return (
    <div>
      <YourBotArmy army={botsArmy} removeBotFromArmy={removeBotFromArmy} selectBot={selectBot} />
      {!selectedBot && <BotCollection bots={bots} selectBot={selectBot} />}
      {selectedBot && (
				<BotSpecs enlistBot={enlistBot} resetSelectedBot={resetSelectedBot} bot={selectedBot} />
        )}
    </div>
  );
}

export default BotsPage;
