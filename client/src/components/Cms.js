import React, { Component } from "react";
import axios from "axios";

class Cms extends Component {
  state = {
    disc: [],
    artist: "",
    album: "",
    role: ""
  };

  componentDidMount() {
    this.getDisc();
  }

  getDisc = () => {
    axios.get("/disc").then(response => {
      this.setState({ disc: response.data });
    });
  };

  handleEdits = id => {
    const inputs = [...document.querySelectorAll(`[data-id='${id}']`)];
    const obj = {
      id: id,
      edits: {
        artist: inputs[0].value.replace('"', "'"),
        album: inputs[1].value.replace('"', "'"),
        role: inputs[2].value.replace('"', "'")
      }
    };
    axios.put("/update", obj).then(response => {
      this.getDisc();
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addItem = () => {
    const obj = {
      artist: this.state.artist,
      album: this.state.album,
      role: this.state.role
    };
    axios.post("/add", obj).then(response => {
      this.getDisc();
      this.setState({
        artist: "",
        album: "",
        role: ""
      });
    });
  };

  deleteItem = id => {
    axios.delete("/delete/" + id).then(response => {
      this.getDisc();
    });
  };

  render() {
    return (
      <div className="cms">
        <div className="cms__container">
          <h1 className="cms__container--header">Add an Item</h1>
          <div className="cms__container--item">
            <input
              type="text"
              className="cms__container--item-input"
              data-id="add-item"
              placeholder="artist"
              onChange={this.handleChange}
              value={this.state.artist}
              name="artist"
            />
            <input
              type="text"
              className="cms__container--item-input"
              data-id="add-item"
              placeholder="album"
              onChange={this.handleChange}
              value={this.state.album}
              name="album"
            />
            <textarea
              type="text"
              className="cms__container--item-input"
              data-id="add-item"
              placeholder="role"
              onChange={this.handleChange}
              value={this.state.role}
              name="role"
            />
            <button
              className="cms__container--item-btn"
              data-id="add-item"
              onClick={() => {
                this.addItem();
              }}
            >
              Submit Item
            </button>
          </div>
          <h1 className="cms__container--header">Edit an Item</h1>
          <div className="cms__container--row">
            <div className="cms__container--row-header">Artist</div>
            <div className="cms__container--row-header">Album</div>
            <div className="cms__container--row-header">Role</div>
          </div>
          {this.state.disc.length > 0
            ? this.state.disc.map(obj => {
                return (
                  <div key={Math.random()} className="cms__container--item">
                    <input
                      type="text"
                      className="cms__container--item-input"
                      data-id={obj._id}
                      defaultValue={obj.artist}
                    />
                    <input
                      type="text"
                      className="cms__container--item-input"
                      data-id={obj._id}
                      defaultValue={obj.album}
                    />
                    <textarea
                      type="text"
                      className="cms__container--item-input"
                      data-id={obj._id}
                      defaultValue={obj.role}
                    />
                    <button
                      className="cms__container--item-btn"
                      data-id={obj._id}
                      onClick={() => {
                        this.handleEdits(obj._id);
                      }}
                    >
                      Submit Edits
                    </button>
                    <button
                      className="cms__container--item-btn"
                      data-id={obj._id}
                      onClick={() => {
                        this.deleteItem(obj._id);
                      }}
                    >
                      Delete Item
                    </button>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    );
  }
}

export default Cms;
