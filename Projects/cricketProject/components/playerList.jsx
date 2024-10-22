import { useRef, useState } from "react";
import PlayerData from "./PlayerData";
import EmptyMessege from "./EmptyMessege";
const PlayerList = ({ data }) => {
  const name = useRef();
  let [newData, updateData] = useState(data);

  const handleSearch = (event) => {
    event.preventDefault();
    const matched = data.filter((player) => {
      const namesPart = player.name.split(" ");

      let haKa = false;
      namesPart.map((part) => {
        if (part.startsWith(name.current.value)) {
          haKa = true;
        }
      });
      if (haKa) return true;
    });
    updateData(matched);
    name.current.value = "";
  };
  return (
    <div className="container">
      <form className="searchContainer" onSubmit={handleSearch}>
        <input type="text" ref={name} className="search" />
        <button type="submit">Search</button>
      </form>
      <div className="playerContainer">
        {newData.length == 0 ? (
          <EmptyMessege />
        ) : (
          newData.map((oneData) => {
            return <PlayerData oneData={oneData} />;
          })
        )}
      </div>
    </div>
  );
};
export default PlayerList;
