import "./App.css";
import { useState, useEffect } from "react";
import database from "./firebase";
import firebase from "firebase";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [username,setUsername] = useState('Guest');

    useEffect(() => {
      const name = window.prompt("Enter Your Name");
      setUsername(name);
    },[])


  useEffect(() => {
    database
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setList(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    const chatMessage = {
      name : username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };

    database.collection("messages").add(chatMessage);
    setInput("");
  };

  return (
    <div className="container">
      <h1 className="container__heading">Chat with your love💞</h1>

      {list.map(({ id, data : { message, timestamp, name } }) => (      
        <h3 key={id} className="container_msg">
        {name} : {message}😍
        </h3>
      ))}

      <form>
        <input
          type="text"
          name=""
          id=""
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="container__btn" onClick={sendMessage} type="submit">
          Send💌
        </button>
      </form>
    </div>
  );
}

export default App;


// 