
import React from "react";
import "./style.css";

class App extends React.Component {
  state = {
    Person: {
      fullName: "Austin Ugwu",
      bio: "From Nigeria",
      imgSrc:  "https://scontent-los2-1.xx.fbcdn.net/v/t39.30808-6/264281304_4598715463551161_5555273693192823589_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE-IIeubW5V2nbVt7vp9qxkn_RemB7J7_Of9F6YHsnv81aI-pa_yHWoWg-EJDPUUeIrQv3wQAxM2_zhp3Z7_csv&_nc_ohc=mZmbl5PpfH8AX-AFvjV&_nc_ht=scontent-los2-1.xx&oh=00_AfCtfqBOebHIrwD5OS7T1ZRdX9UmPH6fpv4OzGhdKtOuhQ&oe=637A0473",
      profession: "Engineer"
    },
    show: true
  };

  showState = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
    
  };

  render() {
    return (
      <>
        {this.state.show && (
          <div>
            <h1>{this.state.Person.fullName}</h1>
            <h6>{this.state.Person.bio}</h6>
            <img src={this.state.Person.imgSrc} alt={this.state.Person.fullName}></img>
            <p><strong>{this.state.Person.profession}</strong></p>
            <br></br>
          </div>
        )}
        <button className="btn btn-info" onClick={this.showState}>{this.state.show ? "Hide profile" : "Show profile"}</button>
      </>
    );
  }
}
export default App;