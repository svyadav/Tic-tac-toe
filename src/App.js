import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, CardBody,Button } from "reactstrap";
import Icon from "./Icon";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const itemArray = new Array(9).fill("empty");

function App() {
  const [isCircle, setIsCircle] = useState(true);
  const [winMessage,setWinMessage]=useState("")
  const checkWinner = () => {
    if (
      itemArray[0] !== "empty" &&
      itemArray[1] !== "empty" &&
      itemArray[2] !== "empty" &&
      itemArray[3] !== "empty" &&
      itemArray[4] !== "empty" &&
      itemArray[5] !== "empty" &&
      itemArray[6] !== "empty" &&
      itemArray[7] !== "empty" &&
      itemArray[8] !== "empty"
    ) {
      setWinMessage("Draw")
    } else if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} is winner`)
    } else if (
      itemArray[3] === itemArray[4] &&
      itemArray[3] === itemArray[5] &&
      itemArray[3] !== "empty"
    ) {
      setWinMessage(`${itemArray[3]} is winner`)
    } else if (
      itemArray[6] === itemArray[7] &&
      itemArray[6] === itemArray[8] &&
      itemArray[6] !== "empty"
    ) {
      setWinMessage(`${itemArray[6]} is winner`)
    } else if (
      itemArray[0] === itemArray[3] &&
      itemArray[0] === itemArray[6] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} is winner`)
    } else if (
      itemArray[1] === itemArray[4] &&
      itemArray[1] === itemArray[7] &&
      itemArray[1] !== "empty"
    ) {
      setWinMessage(`${itemArray[1]} is winner`)
    } else if (
      itemArray[2] === itemArray[5] &&
      itemArray[2] === itemArray[8] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} is winner`)
    } else if (
      itemArray[0] === itemArray[4] &&
      itemArray[0] === itemArray[8] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} is winner`)
    } else if (
      itemArray[2] === itemArray[4] &&
      itemArray[2] === itemArray[6] &&
      itemArray[2] !== "empty"
    ) {
      setWinMessage(`${itemArray[2]} is winner`)
    }
  };

  const handleChange = (index) => {
    if(winMessage){
      return toast(winMessage,{type:"success"})

    }
    if (itemArray[index] === "empty") {
      itemArray[index] = isCircle ? "circle" : "cross";
      setIsCircle(!isCircle);
    } else {
      return toast("Already filled", { type: "error" });
    }

    checkWinner();
  };

  const reloadGame=()=>{
    setIsCircle(true)
    setWinMessage("")
    itemArray.fill("empty",0,9)
  }
  return (
    <Container>
      <ToastContainer />
      {winMessage ? (
        <div>
          <h1>{winMessage}</h1>
          <Button color="info" onClick={reloadGame}>Reload Game</Button>
        </div>
      ):(
    <h1 className="text-center">{isCircle ? "Circle turn" : "Cross turn"}</h1>
      )}
  
      <Row>
        <Col>
          <div className="grid">
            {itemArray.map((item, index) => {
              return (
                <Card onClick={() => handleChange(index)}>
                  <CardBody className="box">
                    <Icon icon={item} />
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
