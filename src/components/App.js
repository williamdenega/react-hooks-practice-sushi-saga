import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";


function App() {

  const [tempArray, setTempArray] = useState([])
  const [count, setCount] = useState(0)
  const [sushiList, setSushiList] = useState([])
  const [money, setMoney] = useState(100)
  const [plates, setPlates] = useState([])

  const handleList = ()=>{
    setTempArray(sushiList.slice(count, count+4))
    setCount((count)=> count+4) 

  }

  useEffect(()=>{
    fetch(`http://localhost:3001/sushis`)
    .then((resp)=> resp.json())
    .then((list)=>{
      setSushiList(list)
    })
  },[])

  const handleEaten = (cost)=>{
    if(money >= cost){
      setMoney((money)=> money-cost)
      let newPlate = {plate: cost}
      setPlates((plates)=> [...plates,newPlate])
      return true
    }else{
      alert('you too broke!')
      return false
    }
   
  } 

  return (
    <div className="app">
      <SushiContainer sushiList={tempArray} moreSushi={handleList} handleEaten={handleEaten} />

      <Table money={money} plates={plates} />
    </div>
  );
}

export default App;
