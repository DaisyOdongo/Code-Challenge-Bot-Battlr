import React from "react";
import BotCard from "./BotCard";

function YourBotArmy(army, selectBot, removeBotFromArmy) {
  const bots= army;
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.map((bot)=>(
            <BotCard key={bot.id} bot={bot} onSelectBot={selectBot} removeBotFromArmy={removeBotFromArmy}/>
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
