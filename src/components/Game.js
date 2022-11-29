import React from "react";
import './person';
import Person from './person';
import golla from './images/golla.png'
import cros from './images/cross.png'

let name0 = prompt("Enter player 1 name: ");
let name1 = prompt("Enter player 2 name: ");

var values = [-1,-1,-1,-1,-1,-1,-1,-1,-1];


const gollas = <img src={golla} alt="O"/>
const cross = <img src={cros} alt="X"/>

class Game extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            activePerson: 1,
            gameMoveOn: 1,
            playerWin: 0,
            playerOpWin: 0,
            totalGame: 0
        };
    }




  handleClick = (a,b)=>{
    if(values[a] === -1 && this.state.gameMoveOn===1){
        values[a] = b;

        if(((values[0]===b && values[1] === b && values[2]===b) || (values[3]===b && values[4] === b && values[5]===b) || (values[6]===b && values[7] === b && values[8]===b))
        || ((values[0]===b && values[3] === b && values[6]===b) || (values[1]===b && values[4] === b && values[7]===b) || (values[2]===b && values[5] === b && values[8]===b)) 
        || ((values[0]===b && values[4] === b && values[8]===b) || (values[2]===b && values[4] === b && values[6]===b))){
            
            // alert(this.state.activePerson + " Won the game");

            if(this.state.activePerson===1){
                this.setState((s)=>({
                    playerWin : s.playerWin + 1,
                    totalGame: s.totalGame + 1
                }));
            }else{
                this.setState((s)=>({
                    playerOpWin : s.playerOpWin + 1,
                    totalGame: s.totalGame + 1
                }));
            }

            this.setState({
                gameMoveOn: 0
            });
        }

        if(b===1){
            this.setState({
                activePerson: 0
            });
        }else{
            this.setState({
                activePerson: 1
            });
        }

    }

    // console.log(a,b);
    // console.log(values);
    // alert("Ha kaj hoise " + a);
  }





  refreshButton = () => {
    // alert("Ha kaj hoise")

    for(let i=0;i<values.length; i++){
        values[i] = -1;
    }

    this.setState({
        gameMoveOn: 1
    });

  }





  render(){
    return (
    <div className="App">

        <div className="row">
            <Person playerSign="X" playerid={name0} activePlayer={this.state.activePerson} win={this.state.playerWin} lose={this.state.playerOpWin} />
        </div>

        <div className="row">
            <table>
            <tr>
                <td onClick={()=>{this.handleClick(0,this.state.activePerson)}} >
                    {values[0]>-1 ? values[0]===0 ? gollas : cross : ""}
                </td>
                <td onClick={()=>{this.handleClick(1,this.state.activePerson)}} >
                    {values[1]>-1 ? values[1]===0 ? gollas : cross : ""} 
                </td>
                <td onClick={()=>{this.handleClick(2,this.state.activePerson)}} >
                    {values[2]>-1 ? values[2]===0 ? gollas : cross : ""} 
                </td>
            </tr>
            <tr>
                <td onClick={()=>{this.handleClick(3,this.state.activePerson)}} >
                    {values[3]>-1 ? values[3]===0 ? gollas : cross : ""}
                </td>
                <td onClick={()=>{this.handleClick(4,this.state.activePerson)}} >
                    {values[4]>-1 ? values[4]===0 ? gollas : cross : ""} 
                </td>
                <td onClick={()=>{this.handleClick(5,this.state.activePerson)}} >
                    {values[5]>-1 ? values[5]===0 ? gollas : cross : ""} 
                </td>
            </tr>
            <tr>
                <td onClick={()=>{this.handleClick(6,this.state.activePerson)}} >
                    {values[6]>-1 ? values[6]===0 ? gollas : cross : ""}
                </td>
                <td onClick={()=>{this.handleClick(7,this.state.activePerson)}} >
                    {values[7]>-1 ? values[7]===0 ? gollas : cross : ""} 
                </td>
                <td onClick={()=>{this.handleClick(8,this.state.activePerson)}} >
                    {values[8]>-1 ? values[8]===0 ? gollas : cross : ""} 
                </td>
            </tr>
            </table>

            {this.state.gameMoveOn===0 ? <h1>{this.state.activePerson===1 ? name1 : name0} won the game</h1> : <h2>The winner is not defined yet</h2>}


            <button onClick={this.refreshButton}>RETRY</button>

            
        </div>



        <div className="row">
            <Person playerSign="O" playerid={name1} activePlayer={this.state.activePerson===1? 0 : 1}  win={this.state.playerOpWin} lose={this.state.playerWin} />
        </div>

      {/* <Person playerid={name1} /> */}

      



    </div>

    );
    }

}

export default Game;
