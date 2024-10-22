function Hello(){
  var myName = "Raushan";
  let fulName = () =>{
    return 'Raushan kumar';
  }
  return <h3>
    hello this is the captain speaking. I am your captain {fulName()}
  </h3>
}
export default Hello;