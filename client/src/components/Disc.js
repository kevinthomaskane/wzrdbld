import React, { Component } from "react";
import axios from "axios";

class Disc extends Component {
  state = {
    disc: []
  };

  componentWillReceiveProps(nextProps) {
    axios.get("/disc").then(disc => {
      this.setState({ disc: disc.data });
    });
  }

  render() {
    const fade = this.props.show ? "fade-in" : "fade-out";
    return (
      <div>
        <img
          className={"disco " + fade}
          src="/images/discog-bg.png"
          alt="disco"
        />
        <div className={"disc " + fade}>
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
      </div>
    );
  }
}

export default Disc;
