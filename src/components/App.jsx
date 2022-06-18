import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";
function createCard(emojis) {
  return (
    <Card
      key={emojis.id}
      fiq={emojis.emoji}
      name={emojis.name}
      def={emojis.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
