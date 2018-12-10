import React, { Component } from "react";
import MobilePopup from "./MobilePopup";

class Mobile extends Component {
  state = {
    show_disc: false,
    show_merch: false,
    popup_showing: false
  };

  reset = () => {
    this.setState({
      show_disc: false,
      show_merch: false,
      popup_showing: false
    });
  };

  render() {
    const { show_disc, show_merch, popup_showing } = this.state;
    return (
      <div className="mobile">
        <img src="/images/wzrdbld-toplogo.png" className="top" alt="top-logo" />
        <img
          src="/images/wzrdbld-bottomlogo.png"
          className="bottom"
          alt="bottom-logo"
        />
        <video className="bg-video" autoPlay muted loop playsInline>
          <source src="/videos/vid-mobile.mp4" type="video/mp4" />
        </video>
        <MobilePopup
          disc={show_disc}
          merch={show_merch}
          show={popup_showing}
          close={this.reset}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 678.93 566"
          style={{
            pointerEvents: "bounding-box",
            fill: "transparent",
            strokeWidth: "2px",
            stroke: "#fff"
          }}
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <g
                id="mobile-home"
                onClick={() => {
                  this.reset();
                }}
              >
                <path
                  d="M191,83V53.75H161.27V83h-28.9V3h28.9V29.9H191V3h28.9V83Z"
                />
                <path
                  d="M332.41,43q0,12.88-5.77,22.34A37.39,37.39,0,0,1,309.78,79.9Q298.7,85,283.13,85q-14.9,0-25.82-4.87a37.21,37.21,0,0,1-16.86-14.34q-5.94-9.46-5.94-22.79,0-12.88,5.77-22.34A37.4,37.4,0,0,1,257.14,6.1Q268.23,1,283.8,1q14.89,0,25.82,4.87a37.23,37.23,0,0,1,16.86,14.34Q332.41,29.67,332.41,43Zm-30,0q0-9.07-5-14t-13.94-4.93q-9,0-13.94,4.93t-5,14q0,9.07,5,14t13.94,4.93q9,0,13.94-4.93T302.39,43Z"
                />
                <path
                  d="M426,83V44L409.91,83H389.19L373.06,44V83H347.19V3h32.14l20.72,48.5L420.78,3h31.7V83Z"
                />
                <path
                  d="M471.74,83V3h72.35v20.5H500v9h41.89V52.86H500v9.63h46.93L544.54,83Z"
                />
              </g>
              <g
                id="mobile-work"
                onClick={() => {
                  if (this.state.show_disc) {
                    this.setState({
                      show_disc: false,
                      popup_showing: false
                    });
                  } else {
                    this.setState({
                      show_disc: true,
                      popup_showing: true,
                      show_merch: false
                    });
                  }
                }}
              >
                <path
                  d="M195.77,243l-12.21-42.45L171.35,243H141.22l-25.31-80H146.6L158,210.62l13.22-47H197l13.22,47L221.64,163h30l-25.31,80Z"
                />
                <path
                  d="M355,203q0,12.88-5.77,22.34a37.39,37.39,0,0,1-16.86,14.56Q321.32,245,305.75,245q-14.9,0-25.82-4.87a37.21,37.21,0,0,1-16.86-14.34q-5.94-9.46-5.94-22.79,0-12.88,5.77-22.34a37.4,37.4,0,0,1,16.86-14.56q11.09-5.1,26.66-5.1,14.89,0,25.82,4.87a37.23,37.23,0,0,1,16.86,14.34Q355,189.67,355,203Zm-30,0q0-9.07-5-14t-13.94-4.93q-9,0-13.94,4.93t-5,14q0,9.07,5,14t13.94,4.93q9,0,13.94-4.93T325,203Z"
                />
                <path
                  d="M425.37,243l-14.9-24.42H396.69V243H369.81V163h42.45Q450,163,450,190.46q0,8.18-3.19,13.66t-10.25,9L456.05,243Zm-14.78-44.46q6.72,0,9.41-1.79t2.69-6q0-4.14-2.69-5.88t-9.18-1.74H396.69v15.46Z"
                />
                <path
                  d="M526.61,243l-20.94-30.8-9.41,8.4V243h-28.9V163h28.9v27.33l28-27.33h32.14l-31.58,30.8L559.32,243Z"
                />
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
                      show_disc: false
                    });
                  }
                }}
              >
                <path
                  d="M166.48,403V364l-16.13,39H129.63L113.5,364v39H87.63V323h32.14l20.72,48.5L161.22,323h31.7v80Z"
                />
                <path
                  d="M212.18,403V323h72.35v20.5H240.4v9h41.89v20.38H240.4v9.63h46.93L285,403Z"
                />
                <path
                  d="M357.89,403,343,378.57H329.21V403H302.33V323h42.45q37.74,0,37.74,27.44,0,8.18-3.19,13.66t-10.25,9L388.57,403ZM343.1,358.52q6.72,0,9.41-1.79t2.69-6q0-4.14-2.69-5.88t-9.18-1.74H329.21v15.46Z"
                />
                <path
                  d="M486.69,372q-1.12,15.57-13,24.3T442,405q-14.67,0-25.26-4.87a36.05,36.05,0,0,1-16.3-14.39q-5.71-9.52-5.71-22.74a42.92,42.92,0,0,1,5.6-22.18,37,37,0,0,1,16.24-14.67Q427.21,321,442.33,321q18,0,28.67,7.28t14.11,22l-28.67,2.91a13,13,0,0,0-5-6.94q-3.3-2.13-9.24-2.13-8.63,0-13,4.82T424.75,363q0,18.93,17.92,18.93,13.1,0,15.23-10Z"
                />
                <path
                  d="M558.48,403V373.75H528.8V403H499.9V323h28.9V349.9h29.68V323h28.9v80Z"
                />
              </g>
              <a
                href="mailto:Andy.Snape@rawpowermanagement.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <g
                  id="mobile-contact"
                  onClick={() => {
                    if (this.popup_showing) {
                      this.setState({
                        popup_showing: false,
                        show_disc: false,
                        show_merch: false
                      });
                    }
                  }}
                >
                  <path
                    d="M93,532q-1.12,15.57-13,24.3T48.26,565Q33.59,565,23,560.13a36.05,36.05,0,0,1-16.3-14.39Q1,536.22,1,523a42.92,42.92,0,0,1,5.6-22.18,37,37,0,0,1,16.24-14.67Q33.48,481,48.6,481q18,0,28.67,7.28t14.11,22l-28.67,2.91a13,13,0,0,0-5-6.94q-3.3-2.13-9.24-2.13-8.63,0-13,4.82T31,523q0,18.93,17.92,18.93,13.1,0,15.23-10Z"
                  />
                  <path
                    d="M200.7,523q0,12.88-5.77,22.34a37.39,37.39,0,0,1-16.86,14.56Q167,565,151.42,565q-14.9,0-25.82-4.87a37.21,37.21,0,0,1-16.86-14.34q-5.94-9.46-5.94-22.79,0-12.88,5.77-22.34a37.4,37.4,0,0,1,16.86-14.56q11.09-5.1,26.66-5.1,14.89,0,25.82,4.87a37.23,37.23,0,0,1,16.86,14.34Q200.69,509.67,200.7,523Zm-30,0q0-9.07-5-14t-13.94-4.93q-9,0-13.94,4.93t-5,14q0,9.07,5,14t13.94,4.93q9,0,13.94-4.93T170.68,523Z"
                  />
                  <path
                    d="M277.86,563l-35.17-42.11V563H215.48V483h25.31L276,525.13V483h27.22v80Z"
                  />
                  <path
                    d="M343.49,563V506.2H315.16V483h85.57V506.2H372.39V563Z"
                  />
                  <path
                    d="M461.54,563l-4.26-11.76H423.8L419.66,563H390.54l33.15-80h34.5l33.15,80ZM440.6,504.52l-9.3,25.54h18.48Z"
                  />
                  <path
                    d="M586.42,532q-1.12,15.57-13,24.3T541.73,565q-14.67,0-25.26-4.87a36.05,36.05,0,0,1-16.3-14.39q-5.71-9.52-5.71-22.74a42.92,42.92,0,0,1,5.6-22.18,37,37,0,0,1,16.24-14.67Q526.95,481,542.07,481q18,0,28.67,7.28t14.11,22l-28.67,2.91a13,13,0,0,0-5-6.94q-3.3-2.13-9.24-2.13-8.63,0-13,4.82T524.49,523q0,18.93,17.92,18.93,13.1,0,15.23-10Z"
                  />
                </g>
              </a>
              <path
                d="M620.69,563V506.2H592.36V483h85.57V506.2H649.59V563Z"
              />
            </g>
          </g>
        </svg>
      </div>
    );
  }
}

export default Mobile;
