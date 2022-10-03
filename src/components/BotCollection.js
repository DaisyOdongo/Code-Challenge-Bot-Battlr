import React from "react";
import BotCard from "./BotCard";

function BotCollection([bots, selectBot]) {
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot)=> (
        <BotCard key= {bot.id} bot={bot} onSelectBot ={selectBot} />
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
