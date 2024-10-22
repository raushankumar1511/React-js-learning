function Random(){
  let number = Math.random() * 1000;
return <h2 style={{'backgroundColor' : '#834732'}}>
  Random no is : {Math.round(number)};
</h2>
}
export default Random;