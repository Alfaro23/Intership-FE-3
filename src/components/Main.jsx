import React from 'react'
import Chat from './Chat';
import Quiz from "./Quiz";

const Main = () => {
  return (
    <div style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%"
    }}>
        <Quiz />
        <Chat />
    </div>
  )
}

export default Main