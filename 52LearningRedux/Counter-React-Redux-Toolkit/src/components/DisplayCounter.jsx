import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  return (
    <p className="lead mb-4 counter">Counter Current value : {counterVal}</p>
  );
};
export default DisplayCounter;
