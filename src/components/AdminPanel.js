import React, { Component } from "react";

import Firebase from "firebase";
import firebaseConfig from "./config";

class AdminPanel extends Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(firebaseConfig);

    this.state = {
      clients: []
    };
  }

  // CRUD start
  writeUserData = () => {
    Firebase.database()
      .ref("/")
      .set(this.state);
  };

  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
    console.log("DATA RETRIEVED");
  };

  updateData = client => {
    this.refs.uid.value = client.uid;
    this.refs.name.value = client.name;
    this.refs.trackNum.value = client.trackNum;
  };

  removeData = client => {
    const { clients } = this.state;
    const newState = clients.filter(data => {
      return data.uid !== client.uid;
    });
    this.setState({ clients: newState });
  };
  // CRUD end

  handleSubmit = event => {
    event.preventDefault();
    let name = this.refs.name.value;
    let trackNum = this.refs.trackNum.value;
    let uid = this.refs.uid.value;

    if (uid && name && trackNum) {
      const { clients } = this.state;
      const clientIndex = clients.findIndex(data => {
        return data.uid === uid;
      });
      clients[clientIndex].name = name;
      clients[clientIndex].trackNum = trackNum;
      this.setState({ clients });
    } else if (name && trackNum) {
      const uid = new Date().getTime().toString();
      const { clients } = this.state;
      clients.push({ uid, name, trackNum });
      this.setState({ clients });
    }

    this.refs.name.value = "";
    this.refs.trackNum.value = "";
    this.refs.uid.value = "";
  };

  componentDidMount() {
    // app launched
    this.getUserData();
  }

  componentDidUpdate(_prevProps, prevState) {
    // check previous state and only write if its different from new state
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  render() {
    const { clients } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <h1>Consignee Details</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            {clients.map(client => (
              <div
                key={client.uid}
                className="card float-left"
                style={{ width: "18rem", marginRight: "1rem" }}
              >
                <div className="card-body">
                  <h5 className="card-title">{client.name}</h5>
                  <p className="card-text">{client.trackNum}</p>
                  <button
                    onClick={() => this.removeData(client)}
                    className="btn btn-link"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => this.updateData(client)}
                    className="btn btn-link"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-xl-12">
            <h1>Add Consignee Here</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-row">
                <input type="hidden" ref="uid" />
                <div className="form-group col-md-6">
                  <label>Name</label>
                  <input
                    type="text"
                    ref="name"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Tracking Number</label>
                  <input
                    type="text"
                    ref="trackNum"
                    className="form-control"
                    placeholder="UM0983726245"
                  />
                </div>
                <label>Auto-tracking Number</label>
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminPanel;
