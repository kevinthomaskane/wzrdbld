import React, { Component } from "react";
import MobilePopup from "./MobilePopup";

class Mobile extends Component {
  state = {
    show_disc: false,
    show_contact: false,
    show_merch: false,
    popup_showing: false
  };

  reset = () => {
    this.setState({
      show_disc: false,
      show_contact: false,
      show_merch: false,
      popup_showing: false
    });
  };

  render() {
    const { show_disc, show_contact, show_merch, popup_showing } = this.state;
    return (
      <div className="mobile">
        <img src="/images/wzrdbld-toplogo.png" className="top" alt="top-logo" />
        <img
          src="/images/wzrdbld-bottomlogo.png"
          className="bottom"
          alt="bottom-logo"
        />
        <video className="bg-video" autoPlay muted loop>
          <source src="/videos/vid-mobile.mp4" type="video/mp4" />
        </video>
        <MobilePopup
          disc={show_disc}
          contact={show_contact}
          merch={show_merch}
          show={popup_showing}
          close={this.reset}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 503.24 566"
          fill="none"
          stroke="#fff"
          strokeWidth="2px"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <g
                id="mobile-home"
                onClick={() => {
                  this.reset();
                }}
                style={{ pointerEvents: "bounding-box" }}
              >
                <path d="M105.49,83V53.75H75.81V83H46.91V3h28.9V29.9h29.68V3h28.9V83Z" />
                <path d="M246.94,43q0,12.88-5.77,22.34A37.39,37.39,0,0,1,224.32,79.9Q213.23,85,197.66,85q-14.9,0-25.82-4.87A37.21,37.21,0,0,1,155,65.79q-5.94-9.46-5.94-22.79,0-12.88,5.77-22.34A37.4,37.4,0,0,1,171.68,6.1Q182.77,1,198.34,1q14.89,0,25.82,4.87A37.23,37.23,0,0,1,241,20.21Q246.94,29.67,246.94,43Zm-30,0q0-9.07-5-14T198,24.07q-9,0-13.94,4.93t-5,14q0,9.07,5,14T198,61.93q9,0,13.94-4.93T216.93,43Z" />
                <path d="M340.58,83V44L324.45,83H303.73L287.6,44V83H261.73V3h32.14l20.72,48.5L335.31,3H367V83Z" />
                <path d="M386.27,83V3h72.35v20.5H414.5v9h41.89V52.86H414.5v9.63h46.93L459.07,83Z" />
              </g>
              <g
                id="mobile-work"
                onClick={() => {
                  console.log("here")
                  if (this.state.show_disc) {
                    this.setState({
                      show_disc: false,
                      popup_showing: false
                    });
                  } else {
                    this.setState({
                      show_disc: true,
                      popup_showing: true,
                      show_contact: false,
                      show_merch: false
                    });
                  }
                }}
                style={{ pointerEvents: "bounding-box" }}
              >
                <path d="M110.3,243,98.1,200.54,85.89,243H55.76L30.45,163H61.14l11.42,47.6,13.22-47h25.76l13.22,47L136.17,163h30l-25.31,80Z" />
                <path d="M269.57,203q0,12.88-5.77,22.34a37.39,37.39,0,0,1-16.86,14.56Q235.86,245,220.29,245q-14.9,0-25.82-4.87a37.21,37.21,0,0,1-16.86-14.34q-5.94-9.46-5.94-22.79,0-12.88,5.77-22.34A37.4,37.4,0,0,1,194.3,166.1Q205.39,161,221,161q14.89,0,25.82,4.87a37.23,37.23,0,0,1,16.86,14.34Q269.57,189.67,269.57,203Zm-30,0q0-9.07-5-14t-13.94-4.93q-9,0-13.94,4.93t-5,14q0,9.07,5,14t13.94,4.93q9,0,13.94-4.93T239.55,203Z" />
                <path d="M339.9,243,325,218.57H311.23V243H284.35V163H326.8q37.74,0,37.74,27.44,0,8.18-3.19,13.66t-10.25,9L370.59,243Zm-14.78-44.46q6.72,0,9.41-1.79t2.69-6q0-4.14-2.69-5.88t-9.18-1.74H311.23v15.46Z" />
                <path d="M441.15,243l-20.94-30.8-9.41,8.4V243H381.9V163h28.9v27.33l28-27.33h32.14l-31.58,30.8L473.85,243Z" />
              </g>
              <g
                id="mobile-merch"
                onClick={() => {
                  if (this.state.show_merch) {
                    this.setState({
                      show_merch: false,
                      popup_showing: false
                    });
                  } else {
                    this.setState({
                      show_merch: true,
                      popup_showing: true,
                      show_contact: false,
                      show_disc: false
                    });
                  }
                }}
                style={{ pointerEvents: "bounding-box" }}
              >
                <path d="M81,403V364L64.89,403H44.17L28,364v39H2.17V323H34.31L55,371.51,75.75,323h31.7v80Z" />
                <path d="M126.71,403V323h72.35v20.5H154.94v9h41.89v20.38H154.94v9.63h46.93L199.51,403Z" />
                <path d="M272.42,403l-14.9-24.42H243.75V403H216.87V323h42.45q37.74,0,37.74,27.44,0,8.18-3.19,13.66t-10.25,9L303.11,403Zm-14.78-44.46q6.72,0,9.41-1.79t2.69-6q0-4.14-2.69-5.88t-9.18-1.74H243.75v15.46Z" />
                <path d="M401.22,372q-1.12,15.57-13,24.3T356.53,405q-14.67,0-25.26-4.87A36.05,36.05,0,0,1,315,385.74q-5.71-9.52-5.71-22.74a42.92,42.92,0,0,1,5.6-22.18,37,37,0,0,1,16.24-14.67Q341.75,321,356.87,321q18,0,28.67,7.28t14.11,22L371,353.14a13,13,0,0,0-5-6.94q-3.3-2.13-9.24-2.13-8.63,0-13,4.82T339.29,363q0,18.93,17.92,18.93,13.1,0,15.23-10Z" />
                <path d="M473,403V373.75H443.33V403h-28.9V323h28.9V349.9H473V323h28.9v80Z" />
              </g>
              <g
                id="mobile-contact"
                style={{ pointerEvents: "bounding-box" }}
                onClick={() => {
                  if (this.state.show_contact) {
                    this.setState({
                      show_contact: false,
                      popup_showing: false
                    });
                  } else {
                    this.setState({
                      show_contact: true,
                      popup_showing: true,
                      show_disc: false,
                      show_merch: false
                    });
                  }
                }}
              >
                <path d="M72.5,563l-4.26-11.76H34.76L30.62,563H1.5l33.15-80h34.5l33.15,80ZM51.56,504.52l-9.3,25.54H60.75Z" />
                <path d="M113.94,563V483h44.13q34.83,0,34.83,20.72,0,11.31-12.54,16.8,7.84,2.58,11.7,7.22a17.69,17.69,0,0,1,3.86,11.7q0,11.54-9.13,17.53t-26.6,6Zm43-49.62q8.85,0,8.85-5.94a4.75,4.75,0,0,0-2.13-4.42q-2.13-1.29-7.06-1.29H140.15v11.65Zm.67,30.91q5.94,0,8.46-1.68a6,6,0,0,0,2.52-5.38A5.77,5.77,0,0,0,166,531.9q-2.63-1.62-8.57-1.62H140.15v14Z" />
                <path d="M305,523q0,12.88-5.77,22.34a37.39,37.39,0,0,1-16.86,14.56Q271.3,565,255.73,565q-14.9,0-25.82-4.87a37.21,37.21,0,0,1-16.86-14.34q-5.94-9.46-5.94-22.79,0-12.88,5.77-22.34a37.4,37.4,0,0,1,16.86-14.56q11.09-5.1,26.66-5.1,14.89,0,25.82,4.87a37.23,37.23,0,0,1,16.86,14.34Q305,509.67,305,523Zm-30,0q0-9.07-5-14t-13.94-4.93q-9,0-13.94,4.93t-5,14q0,9.07,5,14t13.94,4.93q9,0,13.94-4.93T275,523Z" />
                <path d="M376.69,483h28.9v43.9q0,19.49-10.47,28.78T362.81,565q-21.84,0-32.31-9.3T320,526.92V483h28.9v46.26q0,6.61,3.25,9.63t10.64,3q7.39,0,10.64-3t3.25-9.63Z" />
                <path d="M445,563V506.2H416.68V483h85.57V506.2H473.91V563Z" />
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default Mobile;