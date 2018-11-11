import React, { Component } from "react";
import axios from "axios";

class Cms extends Component {
  state = {
    disc: []
  };

  componentDidMount() {
    axios.get("/disc").then(response => {
      this.setState({ disc: response.data });
    });
  }

  handleEdits = id => {
    const inputs = [...document.querySelectorAll(`input[data-id='${id}']`)];
    const obj = {
      id: id,
      edits: {
        artist: inputs[0].value,
        album: inputs[1].value,
        role: inputs[2].value
      }
    };
    axios.post("/update", obj).then(response => {
      console.log(response);
    });
  };

  render() {
    return (
      <div className="cms">
        <div className="cms__container">
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
