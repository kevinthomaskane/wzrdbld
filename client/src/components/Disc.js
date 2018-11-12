import React, { Component } from "react";
import axios from "axios";

class Disc extends Component {
  state = {
    disc: []
  };

  componentDidMount() {
    axios.get("/disc").then(disc => {
      this.setState({ disc: disc.data });
    });
  }

  render() {
    if (this.props.show) {
      return (
        <div className="disc">
          <div className="disc__container">
            <div className="disc__container--header">Discography</div>
            {this.state.disc.length > 0
              ? this.state.disc.map(el => {
                  return (
                    <div key={Math.random()} className="disc__container--item">
                      <div className="disc__container--item-artist">
                        {el.artist}
                      </div>
                      <div className="disc__container--item-album">
                        {el.album}
                      </div>
                      <div className="disc__container--item-role">
                        {el.role}
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Disc;
