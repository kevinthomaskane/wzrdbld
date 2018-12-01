import React, { Component } from "react";
import Disc from "./Disc";

class Main extends Component {
  state = {
    show_disc: false,
    show_contact: false,
    show_merch: false,
    popup_showing: false
  };

  constructor(props) {
    super(props);
    this.home = React.createRef();
    this.work = React.createRef();
    this.merch = React.createRef();
    this.contact = React.createRef();
  }

  reset = () => {
    this.setState({
      show_disc: false,
      show_contact: false,
      show_merch: false,
      popup_showing: false
    });
  };

  render() {
    const fade = this.state.popup_showing ? "fade-out" : "fade-in-vid";
    return (
      <div className="main">
        <img className="main__image--left" src="/images/left.png" alt="left" />
        <img
          className="main__image--right"
          src="/images/right.png"
          alt="right"
        />
        <div className="main__bg">
          <div className="main__bg--container">
            <img
              src="/images/lion@2x.png"
              alt="lion"
              className="main__bg--icon-left"
            />
            <img
              src="/images/snake@2x.png"
              alt="snake"
              className="main__bg--icon-right"
            />
            <video
              className={"main__bg--video-left " + fade}
              src="/videos/vid-leftv2.mp4"
              poster="/images/vid-left.png"
              autoPlay
              playsInline
              loop
              muted
            />
            <video
              className={"main__bg--video-right " + fade}
              src="/videos/vid-rightv2.mp4"
              poster="/images/vid-right.png"
              autoPlay
              playsInline
              loop
              muted
            />
            <img
              className={"main__bg--painting " + fade}
              src="/images/middle-painting.png"
              alt="middle"
            />
            <Disc
              disc={this.state.show_disc}
              contact={this.state.show_contact}
              show={this.state.popup_showing}
              merch={this.state.show_merch}
            />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2024 1951.84">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path d="M1012,1059.9c-136.55,0-269-12.62-393.72-37.5-120.47-24-228.67-58.46-321.59-102.3s-166-95-217-151.86C26.82,709.24,0,646.54,0,581.9S26.82,454.55,79.7,395.56c51-56.9,124-108,217-151.86s201.12-78.26,321.59-102.3C743,116.51,875.45,103.9,1012,103.9s269,12.62,393.72,37.5c120.47,24,228.67,58.46,321.59,102.3s166,95,217,151.86c52.89,59,79.7,121.69,79.7,186.34s-26.82,127.34-79.7,186.34c-51,56.9-124,108-217,151.86s-201.12,78.26-321.59,102.3C1281,1047.28,1148.55,1059.9,1012,1059.9Zm0-954c-136.42,0-268.75,12.61-393.33,37.47-120.31,24-228.35,58.38-321.13,102.15S132,340.19,81.19,396.89C28.64,455.51,2,517.75,2,581.9s26.64,126.38,79.19,185C132,823.6,204.81,874.53,297.54,918.28s200.82,78.14,321.13,102.15c124.58,24.86,256.91,37.47,393.33,37.47s268.75-12.61,393.33-37.47c120.31-24,228.35-58.38,321.13-102.15S1892,823.6,1942.81,766.9C1995.36,708.28,2022,646,2022,581.9s-26.64-126.38-79.19-185c-50.83-56.7-123.62-107.63-216.35-151.38s-200.82-78.14-321.13-102.15C1280.75,118.5,1148.42,105.9,1012,105.9Z" />
                  <g
                    id="home"
                    ref={this.home}
                    onClick={() => {
                      this.reset();
                    }}
                    style={{ pointerEvents: "bounding-box" }}
                  >
                    <path d="M151,288l-40-69.1,26.07-15.08,13.1,22.64L173.51,213l-13.1-22.64,26.07-15.08,40,69.1-26.07,15.08L186.14,234.8l-23.27,13.46,14.25,24.63ZM113.8,219.61l38,65.64,22.61-13.08-14.25-24.63,26.73-15.47,14.25,24.63,22.61-13.08-38-65.64-22.61,13.08,13.1,22.64-26.73,15.46-13.1-22.64Z" />
                    <path d="M253.11,228.58a37.32,37.32,0,0,1-21.05-6.14c-6.17-4.1-11.13-10.24-14.75-18.26-3.5-7.75-4.81-15.38-3.91-22.66a37.55,37.55,0,0,1,9.36-20.2c5.27-6.06,12.65-11.25,21.95-15.45,8.9-4,17.39-6.07,25.26-6.1h.19a37.34,37.34,0,0,1,21.05,6.13c6.17,4.1,11.13,10.25,14.75,18.26h0c3.5,7.75,4.81,15.38,3.91,22.66a37.53,37.53,0,0,1-9.36,20.2c-5.27,6.06-12.65,11.25-21.95,15.45-8.9,4-17.4,6.07-25.26,6.1Zm17-86.81H270c-7.58,0-15.8,2-24.44,5.93-9,4.08-16.18,9.1-21.26,14.94a35.58,35.58,0,0,0-8.88,19.13c-.86,6.92.4,14.18,3.75,21.59,3.46,7.67,8.18,13.53,14,17.42a35.25,35.25,0,0,0,20.13,5.8c7.58,0,15.8-2,24.44-5.93,9-4.08,16.18-9.1,21.26-14.94a35.58,35.58,0,0,0,8.88-19.13c.86-6.92-.4-14.18-3.75-21.59h0c-3.46-7.67-8.18-13.53-14-17.42A35.38,35.38,0,0,0,270.16,141.77Zm-10,62.35a16.17,16.17,0,0,1-5.68-1c-4.5-1.67-8.06-5.36-10.59-10.95S241,181.46,242.73,177s5.39-8,10.92-10.51,10.6-2.91,15.1-1.24,8.07,5.36,10.59,10.95h0c2.52,5.59,2.93,10.7,1.21,15.18s-5.4,8-10.92,10.51A23,23,0,0,1,260.2,204.12Zm2.87-37.88a21,21,0,0,0-8.6,2.06c-5,2.27-8.35,5.43-9.87,9.4s-1.13,8.56,1.16,13.64,5.48,8.42,9.46,9.9,8.56,1.08,13.58-1.19,8.35-5.43,9.87-9.4,1.13-8.56-1.16-13.64h0c-2.3-5.09-5.48-8.42-9.46-9.9A14.2,14.2,0,0,0,263.07,166.23Z" />
                    <path d="M330.32,197.38,303.93,122,335,111.15l33.5,36.64,3.32-49.53,30.68-10.75,26.39,75.34L402.74,172l-11.21-32-2,36.63-20.29,7.11L344.76,156.4l11.21,32Zm-23.84-74.11,25.07,71.56,21.88-7.66-12.21-34.86,1.69-1,26.91,30.11,17.77-6.22,2.24-40.32,1.94-.28L404,169.46l22.39-7.84L401.29,90.06l-27.55,9.65-3.54,52.89-35.77-39.12Z" />
                    <path d="M441.8,159.49,420.54,82.55l69.8-19.29,5.85,21.15L454.79,95.85l1.79,6.48,39.29-10.86,5.82,21-39.29,10.86,2,7.11,44.14-12.2,3.42,21.82ZM423,83.94,443.2,157l66.47-18.37-2.8-17.85L463,132.94l-3-11,39.29-10.86-4.75-17.19-39.29,10.86-2.86-10.33L493.72,83l-4.78-17.3Z" />
                  </g>
                  <g
                    id="work"
                    ref={this.work}
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
                          show_contact: false,
                          show_merch: false
                        });
                      }
                    }}
                    style={{ pointerEvents: "bounding-box" }}
                  >
                    <path d="M826.28,88.85,796,10.8l32-2,13.15,42.61,9.28-43.49,26.53-1.69,14.73,42,7.62-43.93,31.3-2L910.41,83.49l-31.18,2L865.67,47.57,857,86.89ZM798.83,12.62l28.78,74.14L855.39,85l9.81-44.64,15.41,43,28.21-1.8,19.12-77.2-27,1.72-8.67,49.95L875.51,8.27,852,9.77,841.44,59.3,826.49,10.86Z" />
                    <path d="M982.75,83.77c-9.33,0-17.58-1.52-24.54-4.52a37.36,37.36,0,0,1-17-14.13c-4-6.22-6.1-13.84-6.21-22.64-.1-8.5,1.74-16,5.49-22.33A37.54,37.54,0,0,1,957.15,5.38C964.4,1.94,973.25.13,983.44,0c9.76-.13,18.37,1.4,25.59,4.52a37.37,37.37,0,0,1,17,14.13c4,6.23,6.1,13.84,6.21,22.64h0c.1,8.5-1.74,16-5.49,22.33a37.54,37.54,0,0,1-16.66,14.76c-7.25,3.44-16.1,5.25-26.3,5.37ZM984.5,2h-1C973.56,2.13,965,3.87,958,7.19a35.58,35.58,0,0,0-15.8,14c-3.56,6-5.31,13.16-5.21,21.29.1,8.42,2.08,15.68,5.89,21.58A35.4,35.4,0,0,0,959,77.41c7,3,15.3,4.48,24.77,4.35,9.91-.12,18.47-1.86,25.46-5.18a35.58,35.58,0,0,0,15.8-14c3.55-6,5.31-13.16,5.21-21.29h0c-.1-8.41-2.08-15.67-5.89-21.58a35.41,35.41,0,0,0-16.13-13.37C1001.53,3.47,993.55,2,984.5,2Zm-1,59.3c-5.88,0-10.57-1.65-13.95-4.91s-5.25-8.14-5.32-14.27,1.6-11,5-14.4,8.15-5.18,14.21-5.26,10.88,1.58,14.33,4.91,5.25,8.14,5.32,14.27h0c.07,6.13-1.6,11-5,14.4s-8.15,5.18-14.21,5.26Zm.3-36.84h-.36c-5.51.07-9.82,1.64-12.81,4.66s-4.46,7.39-4.4,13S967.86,52,970.92,55s7.41,4.41,12.92,4.35,9.82-1.64,12.81-4.66,4.46-7.39,4.4-13h0c-.07-5.58-1.65-9.9-4.71-12.86S989.11,24.46,983.77,24.46Z" />
                    <path d="M1128.86,84.12l-32.26-1-13.77-24.19L1071,58.59l-.72,23.75-28.15-.85,2.42-79.79L1086.84,3c12.4.38,21.79,3,27.92,7.72s9.24,11.93,9,21.12a27.18,27.18,0,0,1-3.66,13.7,23.11,23.11,0,0,1-9.65,8.31Zm-31.08-2.94,27.45.83L1107.53,53l1-.47a21.74,21.74,0,0,0,9.8-8,25.24,25.24,0,0,0,3.36-12.7c.26-8.52-2.5-15.07-8.18-19.48s-14.79-6.94-26.75-7.3l-40.29-1.22-2.3,75.79,24.15.73.72-23.75,15,.45Zm-12.3-41.69-1.39,0L1069.59,39l.52-17,14.73.45c4.45.14,7.53.83,9.42,2.14s3,3.62,2.87,6.65-1.19,5.33-3.26,6.62C1092.1,38.95,1089.35,39.49,1085.49,39.49Zm-13.84-2.4,12.51.38c4.14.13,7-.32,8.64-1.31s2.25-2.56,2.32-5-.59-4-2-4.95-4.35-1.66-8.34-1.78L1072,24.05Z" />
                    <path d="M1226.18,91.23,1192,88.73l-17.84-30.85-8.47,6.52-1.63,22.29-30-2.2,5.82-79.61,30,2.2L1168,32.23,1195.65,9l34.06,2.49-34.07,28.69Zm-33-4.42,29.3,2.14L1193,39.71l31.61-26.62L1196.32,11l-30.62,25.8,2-27.9L1141.68,7l-5.53,75.62,26.05,1.91,1.55-21.19,11-8.45Z" />
                  </g>
                  <g
                    id="merch"
                    ref={this.merch}
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
                          show_disc: false,
                        });
                      }
                    }}
                    style={{ pointerEvents: "bounding-box" }}
                  >
                    <path d="M1561.38,152.94l-26.89-6.76,8.27-32.88-21.87,29.46L1500,137.52l-5.34-36.3-8.27,32.88-26.36-6.63,19.47-77.42,31.95,8,7.78,49,30-39.52,31.53,7.93Zm-24.46-8.21,23,5.79L1578.42,77l-28.31-7.12L1518,112.05l-8.31-52.35L1481,52.48,1462.5,126l22.48,5.65,9-35.82,2,.1,5.87,40,18.26,4.59,24.07-32.42,1.77.84Z" />
                    <path d="M1643.38,179.25l-69.27-22.2,24.36-76,69,22.1-6.7,20.9-40.9-13.11-2.05,6.4,38.82,12.44-6.67,20.8-38.82-12.44-2.25,7,43.61,14Zm-66.76-23.49,65.67,21,7.44-16.46-43.38-13.9,3.47-10.83,38.82,12.44,5.44-17-38.82-12.44,3.27-10.21,40.9,13.11,5.48-17.09-65.15-20.88Z" />
                    <path d="M1735.11,214.73l-30-11.79-4.81-27.42-11-4.33-8.68,22.12L1654.34,183l29.17-74.31,39.39,15.46c23.31,9.15,31.72,22.46,25,39.58a27.19,27.19,0,0,1-8.06,11.66,23.12,23.12,0,0,1-11.89,4.57Zm-28.26-13.24,25.56,10-6.87-33.32,1.12-.09a21.74,21.74,0,0,0,11.93-4.26A25.24,25.24,0,0,0,1746,163c6.32-16.1-1.49-28.2-23.87-37l-37.52-14.73-27.71,70.58,22.49,8.83,8.68-22.12,13.93,5.47Zm9.2-41.94a23.13,23.13,0,0,1-8-1.94l-13.51-5.3,6.23-15.86,13.72,5.38c4.14,1.63,6.81,3.32,8.15,5.19s1.57,4.41.46,7.23-2.92,4.62-5.3,5.13A8,8,0,0,1,1716,159.54Zm-19-8.37,11.65,4.57c3.85,1.51,6.74,2.07,8.58,1.68s3-1.65,3.87-3.91.78-3.93-.22-5.33-3.53-3-7.26-4.49L1701.86,139Z" />
                    <path d="M1801.15,243.41c-7.76,0-16.19-2.19-25.15-6.56-8.65-4.21-15.5-9.35-20.36-15.29a36.24,36.24,0,0,1-8.35-20.08c-.64-7.32,1-15,4.78-22.85a43,43,0,0,1,14.69-17.41,37.13,37.13,0,0,1,20.92-6.09h.09c7.79,0,16.26,2.23,25.17,6.57,10.65,5.19,18.2,11.57,22.42,19s5.29,16.18,3.1,25.93l-.25,1.11-28.14-10.33.09-.78a11.71,11.71,0,0,0-1.27-7.56c-1.22-2-3.49-3.83-6.76-5.42-4.74-2.31-9-2.75-12.67-1.31s-6.83,4.81-9.35,10-3.26,9.83-2.07,13.59,4.28,6.86,9.23,9.27c7.23,3.52,12.57,2.88,16.35-2l.5-.64L1831,225.65l-.54.93c-5.2,9-12.74,14.44-22.41,16.22A38.34,38.34,0,0,1,1801.15,243.41Zm-13.46-86.28a35.17,35.17,0,0,0-19.82,5.75,41,41,0,0,0-14,16.62c-3.66,7.51-5.2,14.85-4.59,21.8a34.27,34.27,0,0,0,7.91,19c4.68,5.71,11.3,10.67,19.69,14.76,11.31,5.51,21.69,7.45,30.84,5.77,8.73-1.6,15.61-6.42,20.48-14.33l-23.5-11.44c-4.36,5-10.51,5.67-18.28,1.89-5.46-2.66-8.91-6.18-10.26-10.46s-.61-9.34,2.18-15.07,6.25-9.32,10.42-11,9-1.19,14.27,1.38c3.62,1.76,6.17,3.84,7.6,6.18a13.22,13.22,0,0,1,1.62,8l24.52,9c1.75-8.8.7-16.66-3.13-23.39-4-7.06-11.27-13.17-21.56-18.18-8.64-4.21-16.82-6.35-24.3-6.36Z" />
                    <path d="M1896.65,303.93l-25.55-16,15.07-24.13-22.8-14.24-15.07,24.13-25.55-16L1865,190.07l25.55,16-13.86,22.19,22.8,14.24,13.86-22.19,25.55,16Zm-22.79-16.59L1896,301.17l40.16-64.32L1914,223l-13.86,22.19L1874,228.85l13.86-22.19-22.16-13.84-40.16,64.32L1847.66,271l15.07-24.13,26.2,16.36Z" />
                  </g>
                  <g
                    id="contact"
                    ref={this.contact}
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
                    <path d="M867.11,1945.43l-31-3-3-11.79-31-3-5.11,11-30.4-2.93,40.6-76.28,34.75,3.35Zm-29.46-4.85,26.67,2.57-24-78.49-32.09-3.1L769.65,1934l26,2.51,5.11-11,33.84,3.26Zm-7.79-30.94-20.74-2,13.2-27.65Zm-17.7-3.72,15.06,1.45-5.48-21.54Z" />
                    <path d="M925.34,1948q-2.07,0-4.26-.1l-46-2.18L878.9,1866l43.9,2.08c11.42.54,20,2.7,25.66,6.4,5.77,3.82,8.53,9.33,8.2,16.39s-4.16,12.31-11.39,15.7a23.57,23.57,0,0,1,9.26,7,18.27,18.27,0,0,1,3.42,12.21c-.37,7.8-3.79,13.67-10.17,17.43C942.33,1946.37,934.79,1948,925.34,1948Zm-48.13-4.18,44,2.08c11.07.53,19.68-1,25.58-4.46s8.85-8.62,9.19-15.8a16.33,16.33,0,0,0-3-10.91c-2.23-3-5.8-5.39-10.6-7.23l-2.44-.93,2.44-.93c8-3,12-7.91,12.33-14.87.3-6.39-2.09-11.18-7.3-14.63s-13.6-5.55-24.65-6.08l-41.9-2Zm44-14.18q-.84,0-1.75,0l-18-.85.74-15.61L920,1914c4.07.19,6.94.89,8.77,2.15a6.58,6.58,0,0,1,2.75,6.17,6.8,6.8,0,0,1-3.18,5.92C926.71,1929.17,924.37,1929.64,921.19,1929.64Zm-17.65-2.8,16,.76c3.63.17,6.23-.2,7.74-1.1a4.86,4.86,0,0,0,2.21-4.3,4.65,4.65,0,0,0-1.88-4.42c-1.49-1-4.1-1.63-7.74-1.8l-15.77-.75Zm17.78-27.3-1.11,0-17.33-.82.63-13.32,17,.8c3.41.16,5.8.73,7.31,1.75a5.58,5.58,0,0,1,2.31,5.28C930,1896.14,928.32,1899.54,921.32,1899.54Zm-1-2c6.82.32,7.73-2.36,7.83-4.41a3.67,3.67,0,0,0-1.42-3.52c-1.18-.79-3.3-1.27-6.29-1.41l-15-.71-.44,9.33Z" />
                    <path d="M1013.44,1951.84c-9.46,0-17.81-1.55-24.84-4.62a37.36,37.36,0,0,1-17-14.19c-4-6.24-6-13.86-6.12-22.66-.07-8.5,1.8-16,5.57-22.31a37.55,37.55,0,0,1,16.72-14.7c7.27-3.41,16.12-5.19,26.32-5.27,9.75-.08,18.36,1.47,25.57,4.61a37.38,37.38,0,0,1,17,14.19c4,6.24,6,13.87,6.12,22.66.07,8.5-1.8,16-5.57,22.31a37.54,37.54,0,0,1-16.72,14.7c-7.26,3.41-16.12,5.19-26.32,5.27Zm1.41-81.76h-.72c-9.91.08-18.48,1.79-25.48,5.08a35.58,35.58,0,0,0-15.85,13.92c-3.58,6-5.36,13.14-5.29,21.27.07,8.42,2,15.69,5.81,21.6a35.39,35.39,0,0,0,16.08,13.44c6.95,3,15.28,4.52,24.76,4.45,9.91-.08,18.48-1.79,25.48-5.08a35.56,35.56,0,0,0,15.85-13.92c3.58-6,5.36-13.14,5.29-21.27-.07-8.41-2-15.68-5.81-21.6a35.41,35.41,0,0,0-16.08-13.43C1032.12,1871.58,1024,1870.08,1014.85,1870.08Zm-.81,59.3c-5.93,0-10.66-1.67-14-5s-5.22-8.16-5.27-14.29,1.64-11,5-14.38,8.17-5.15,14.23-5.21,10.87,1.62,14.32,5,5.22,8.16,5.27,14.29h0c.05,6.13-1.64,11-5,14.38s-8.17,5.15-14.23,5.21Zm.21-36.84H1014c-5.51,0-9.83,1.6-12.83,4.62s-4.49,7.37-4.44,13,1.62,9.91,4.66,12.88,7.4,4.49,12.91,4.4,9.83-1.6,12.83-4.62,4.49-7.37,4.45-13h0c0-5.58-1.62-9.91-4.66-12.87S1019.64,1892.54,1014.25,1892.54Z" />
                    <path d="M1113,1949.27c-12.07,0-21.43-2.61-27.88-7.77-7.29-5.83-11.33-15.32-12-28.19l-2.24-43.67,30.08-1.54,2.35,46c.2,4,1.31,6.83,3.28,8.48s5.29,2.41,9.8,2.18,7.71-1.3,9.52-3.17,2.6-4.8,2.4-8.78l-2.35-46,30.08-1.54,2.24,43.67c.66,12.87-2.38,22.71-9,29.26s-17.26,10.2-31.59,10.93Q1115.27,1949.27,1113,1949.27Zm-40-77.73,2.14,41.67c.63,12.27,4.41,21.26,11.24,26.72s17.36,7.92,31.19,7.21,24-4.19,30.29-10.36,9.08-15.46,8.45-27.73l-2.14-41.67-26.09,1.34,2.25,44c.23,4.55-.76,8-3,10.27s-5.83,3.51-10.86,3.77-8.79-.63-11.19-2.64-3.76-5.36-4-9.91l-2.25-44Z" />
                    <path d="M1199.89,1941.33l-5.52-55-27.44,2.76-2.45-24.44,84.85-8.52,2.45,24.44-27.44,2.76,5.52,55Zm-3.73-57.18,5.52,55,26-2.61-5.52-55,27.44-2.76-2.05-20.46-80.87,8.12,2.05,20.46Z" />
                  </g>
                  <path d="M1012,1847.9c-136.55,0-269-12.62-393.72-37.5-120.47-24-228.67-58.46-321.59-102.3s-166-95-217-151.86C26.82,1497.24,0,1434.54,0,1369.9s26.82-127.34,79.7-186.34c51-56.9,124-108,217-151.86s201.12-78.26,321.59-102.3C743,904.51,875.45,891.9,1012,891.9s269,12.62,393.72,37.5c120.47,24,228.67,58.46,321.59,102.3s166,95,217,151.86c52.89,59,79.7,121.69,79.7,186.34s-26.82,127.34-79.7,186.34c-51,56.9-124,108-217,151.86s-201.12,78.26-321.59,102.3C1281,1835.28,1148.55,1847.9,1012,1847.9Zm0-954c-136.42,0-268.75,12.61-393.33,37.47-120.31,24-228.35,58.38-321.13,102.15S132,1128.19,81.19,1184.89C28.64,1243.51,2,1305.75,2,1369.9s26.64,126.38,79.19,185c50.83,56.7,123.62,107.63,216.35,151.38s200.82,78.14,321.13,102.15c124.58,24.86,256.91,37.47,393.33,37.47s268.75-12.61,393.33-37.47c120.31-24,228.35-58.38,321.13-102.15S1892,1611.6,1942.81,1554.9c52.55-58.62,79.19-120.86,79.19-185s-26.64-126.38-79.19-185c-50.83-56.7-123.62-107.63-216.35-151.38s-200.82-78.14-321.13-102.15C1280.75,906.5,1148.42,893.9,1012,893.9Z" />
                  <rect x="73" y="974.9" width="1878" height="2" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
