// import logo from './logo.svg';
import './App.css';
import Logo from "./components/Logo";
import {useState,useEffect} from "react";
import Img from "./components/Img"
import List from "./components/List";
import {v4 as uuidv4} from "uuid";

const getLocalStorage=()=>{
  let items=localStorage.getItem("items");
  if(items){
    return JSON.parse(localStorage.getItem("items"))
  }else{
    return []
  }
}
function App() {
  const [text, setText]=useState("")
  const [items,setItems]=useState(getLocalStorage)
  const handleSubmit=(e)=>{
    e.preventDefault()

    const newItems={
      id: uuidv4(),
      title: text
    }
    setItems([newItems, ...items])
    setText("")
  }

  const deleteItem=(id)=>{
    setItems(items.filter((item)=>item.id!==id))
  }
  useEffect(()=>{
    localStorage.setItem("items",JSON.stringify(items))
  }, [items])
  return (
    <>
      <main>
        <Logo />
        <Img />

        <form className="flex items-center justify-center mt-10" onSubmit={handleSubmit}>
          <input autocomplete="off" className="py-3 px-5 text-white tracking-wider rounded-lg bg-gray-700" type="text" name="text" placeholder="Enter  the item" value={text} onChange={(e)=>setText(e.target.value)}></input>
        </form>

        <List items={items} setItems={setItems} deleteItem={deleteItem} />
      </main>
    </>
  );
}

export default App;
