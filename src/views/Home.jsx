import React, { useState } from "react";
import SauHeader from "../components/SauHeader";
import SauFooter from "../components/SauFooter";

function Home() {
  const [yourName, setYourName] = useState("");
  const [moneyShare, setMoneyShare] = useState(0);
  const [money, setMoney] = useState(0);
  const [person, setPerson] = useState(0);

  let showYourName = (e) => {
    setYourName(e.target.value);
  };

  let showMoneyShare = (e) => {
    setMoneyShare(e.target.value);
  };

  let moneyHandle = (e) => {
    setMoney(e.target.value);
  };

  let personHandle = (e) => {
    setPerson(e.target.value);
  };

  let calculateShare = () => {
    setMoneyShare(money / person);
  };

  return (
    <>
      <SauHeader />
      <h2 className="show-header">Home UI</h2>
      <br />
      <br />
      ป้อนชื่อ : {" "}
      <input type="text" name="yourName" id="yourName" onChange={showYourName}/>
      <br />
      <br />
      ป้อนเงิน : {" "}
      <input type="number" name="money" id="money" onChange={moneyHandle} />
      <br />
      <br />
      ป้อนคน : {" "}
      <input type="number" name="person" id="person" onChange={personHandle} />
      <br />
      <br />
      <button onClick={calculateShare}>ตกลง</button>
      <br />
      <br />
      <hr />
      <br />
      สวัสดี : {yourName}
      <br />
      <br />
      หารกันคนละ : {moneyShare} บาท
      <br />
      <br />
      <SauFooter />
    </>
  );
}

export default Home;
