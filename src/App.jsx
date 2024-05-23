import React from "react";

const App = () => {
  const friend = [
    { id: 1, name: "revathi", age: 17 },
    { id: 2, name: "syed", age: 20 },
  ];
  return (
    <div>
      <h1>Friends</h1>
      <ul>
        {friend.map((friend)=>
        <li key={friend.id}>{friend.name} {friend.age}</li>)}
      </ul>
    </div>
  );
};

export default App;
