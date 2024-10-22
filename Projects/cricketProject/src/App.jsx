import { useState } from "react";
import "./App.css";
import PlayerList from "../components/playerList";

function App() {
  const data = [
    {
      name: "virat kohli",
      country: "india",
      photo:
        "https://imgs.search.brave.com/xQ1k9MGTGpB7FIuPI-JXzM73DTUPIyYXEPlJJKT6zD8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvdmlyYXQta29o/bGktcGljdHVyZXMt/eWM4ZGZwY2pzc3Az/czRzZS5qcGc",
    },
    {
      name: "rohit sharma",
      country: "india",
      photo:
        "https://imgs.search.brave.com/26LKbUXeuPOYkeATBT8mPIWe5PzdFkLXEQlAuOmYeZc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly83Y3Jp/Y2J1enouaW4vd3At/Y29udGVudC93ZWJw/LWV4cHJlc3Mvd2Vi/cC1pbWFnZXMvdXBs/b2Fkcy8yMDIzLzA3/L1JvaGl0LVNoYXJt/YS0xLmpwZy53ZWJw",
    },
    {
      name: "david warner",
      country: "Australia",
      photo:
        "https://imgs.search.brave.com/CRCj_qskHP1JGxoYX3nUhH4BdGe_2fd7Ue1iKOLTQFs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5zcG9ydHN0aWdl/ci5jb20vbWVkaWEv/ZGF2aWQtd2FybmVy/LTMtMTcxNjExOTI2/NTUwNi1vcmlnaW5h/bC53ZWJw",
    },
  ];

  return (
    <>
      <PlayerList data={data} />
    </>
  );
}

export default App;
