var cave1 = [ 
  [false, false, true, false, false, false], //0
  [false, false, false, true, false, true],
  [false, false, false, true, false, false],
  [false, true, true, false, false, false],
  [false, false, false, false, true, false], //4
  [false, false, false, true, true, false],
  [false, false, false, true, false, false],
  [true, false, true, false, false, false],
  [true, false, true, false, false, false],
  [false, false, true, false, false, true], //9
  [false, true, false, true, false, true],
  [true, false, false, true, false, false],
  [true, false, true, true, false, false],
  [false, false, false, false, false, true],
  [false, false, false, true, false, true], //14
  [false, false, true, false, true, false],
  [true, false, false, false, false, true],
  [true, false, false, true, false, false],
  [true, false, true, true, false, false],
  [false, true, false, true, false, true], //19
  [true, true, false, false, true, false],
  [false, false, true, false, true, true],
  [false, false, true, false, false, true],
  [true, false, false, false, false, true],
  [true, false, false, false, false, false], //24
  [true, true, false, false, false, false],
  [false, true, false, false, true, false],
  [false, true, false, false, false, false],
  [false, false, true, false, true, true],
  [false, false, false, false, false, true] //29
];

var startingRoomNumber;


function Door(props){
  return(
    <button className="door"> {props.value} </button>
  );
}

class Room extends React.Component{
  
  renderDoor(isDoor){
    return(
      <Door value={isDoor} />
    );
  }
  
  render() {
    return(
      <div>
        <div className="room-row">
              {this.renderDoor(cave1[value][0])} 
        </div>
        <div className="room-row">
            {this.renderDoor(cave1[value][5])}
            {this.renderDoor(cave1[value][1])}
        </div>
        <div className="room-row">
              {this.renderDoor(false)}
        </div>
        <div className="room-row">
            {this.renderDoor(cave1[value][4])}
            {this.renderDoor(cave1[value][2])}
        </div>
        <div className="room-row">
              {this.renderDoor(cave1[value][3])}
        </div>
      </div>
    );
  }
}


class Cave extends React.Component{
  constructor(){
    startingRoomNumber = Math.floor(Math.random() * 30);
  }

  renderRoom(roomNumber){
    return(
      <Room value={roomNumber} />
    );
  }

  render() {
    let currrentRoom = startingRoomNumber.ToString();
    return(
      <div>
        <div className="roomNumber">{currrentRoom}</div>
        <div className="room">
          {this.renderRoom(startingRoomNumber)}
        </div>
      </div>
    );
  }
}

export default Cave 


