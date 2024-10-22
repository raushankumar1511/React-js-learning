const PlayerData = ({ oneData }) => {
  console.log("oneData");
  return (
    <div className="playerBox">
      <img src={oneData.photo} alt="" className="photo" />
      <h3>Name : {oneData.name}</h3>
      <h3>Country : {oneData.country} </h3>
    </div>
  );
};
export default PlayerData;
