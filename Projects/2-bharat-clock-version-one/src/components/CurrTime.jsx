function CurrTime() {
  let date = new Date().toLocaleDateString();
  let currentTime = new Date().toLocaleTimeString();
  return (
    <p className="lead">
      This is the current Time : {date} {currentTime}
    </p>
  );
}
export default CurrTime;
