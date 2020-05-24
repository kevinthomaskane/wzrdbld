import React, { Component } from "react";
import axios from "axios";

class MobilePopup extends Component {
  state = {
    disc: [],
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.disc) {
      axios.get("/disc").then((disc) => {
        this.setState({ disc: disc.data });
      });
    } else {
      this.setState({ disc: [] });
    }
  }

  render() {
    const fade = this.props.show ? "fade-in" : "fade-out";
    return (
      <div className={"mobile-popup " + fade}>
        <div className="container">
          <div className="header">
            <div className="title">
              {this.props.disc
                ? "Discography"
                : this.props.contact
                ? "About"
                : "Merch"}
            </div>
            <div
              className="close"
              onClick={() => {
                this.props.close();
              }}
            >
              &times;
            </div>
          </div>
          {this.props.disc ? (
            this.state.disc.map((el) => {
              return (
                <div key={Math.random()} className="disc__container--item">
                  <div className="disc__container--item-artist">
                    {el.artist}
                  </div>
                  <div className="disc__container--item-album">{el.album}</div>
                  <div className="disc__container--item-role">{el.role}</div>
                </div>
              );
            })
          ) : this.props.contact ? (
            <div className="disc__container--about">
              <div className="disc__container--item">
                <a
                  href="mailto:drewrevolution@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact
                </a>
              </div>
            </div>
          ) : (
            <div className="disc__container--merch">
              <div className="disc__container--item">Merch coming soon.</div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default MobilePopup;
