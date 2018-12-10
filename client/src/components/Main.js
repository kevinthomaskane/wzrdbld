import React, { Component } from "react";
import Disc from "./Disc";
import Mobile from "./Mobile";

class Main extends Component {
  state = {
    show_disc: false,
    show_merch: false,
    popup_showing: false,
    leftVid: '',
    rightVid: ''
  };

  componentWillMount(){
    const leftVideos = ['/videos/vid-leftv2.mp4', '/videos/Content3-left.mp4'];
    const rightVideos = ['/videos/vid-rightv2.mp4', '/videos/Content3-right.mp4'];
    const i = Math.floor(Math.random() * 2)
    this.setState({
      leftVid: leftVideos[i],
      rightVid: rightVideos[i]
    })
  }

  reset = () => {
    this.setState({
      show_disc: false,
      show_merch: false,
      popup_showing: false
    });
  };

  render() {
    const fade = this.state.popup_showing ? "fade-out" : "fade-in-vid";
    return window.innerWidth > 768 ? (
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
              src={this.state.leftVid}
              poster="/images/vid-left.png"
              autoPlay
              playsInline
              loop
              muted
            />
            <video
              className={"main__bg--video-right " + fade}
              src={this.state.rightVid}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2024 1950.09"
              style={{
                fill: "transparent",
                stroke: "#000",
                pointerEvents: "bounding-box",
                strokeWidth: "1px"
              }}
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path stoke-width="1px" d="M1012,1059.89c-136.55,0-269-12.62-393.72-37.5-120.47-24-228.67-58.46-321.59-102.3s-166-95-217-151.86C26.82,709.24,0,646.54,0,581.89S26.82,454.55,79.7,395.56c51-56.9,124-108,217-151.86s201.12-78.26,321.59-102.3C743,116.51,875.45,103.89,1012,103.89s269,12.62,393.72,37.5c120.47,24,228.67,58.46,321.59,102.3s166,95,217,151.86c52.89,59,79.7,121.69,79.7,186.34s-26.82,127.34-79.7,186.34c-51,56.9-124,108-217,151.86s-201.12,78.26-321.59,102.3C1281,1047.28,1148.55,1059.89,1012,1059.89Zm0-954c-136.42,0-268.75,12.61-393.33,37.47-120.31,24-228.35,58.38-321.13,102.15S132,340.19,81.19,396.89C28.64,455.51,2,517.75,2,581.89s26.64,126.38,79.19,185C132,823.6,204.81,874.53,297.54,918.28s200.82,78.14,321.13,102.15c124.58,24.86,256.91,37.47,393.33,37.47s268.75-12.61,393.33-37.47c120.31-24,228.35-58.38,321.13-102.15S1892,823.6,1942.81,766.9c52.55-58.62,79.19-120.86,79.19-185s-26.64-126.38-79.19-185c-50.83-56.7-123.62-107.63-216.35-151.38s-200.82-78.14-321.13-102.15C1280.75,118.5,1148.42,105.89,1012,105.89Z" />
                  <g
                    id="home"
                    onClick={() => {
                      this.reset();
                    }}
                  >
                    <path
                      d="M200.73,258.07l-14.25-24.62-25,14.46,14.25,24.63-24.34,14.08-39-67.37,24.34-14.08,13.1,22.64,25-14.46-13.1-22.64,24.34-14.08,39,67.37Z"
                    />
                    <path
                      d="M305.05,164.58q5.16,11.43,3.83,22.13a36.39,36.39,0,0,1-9.12,19.66q-7.8,9-21.6,15.19-13.21,6-24.85,6a36.22,36.22,0,0,1-20.69-6q-9.06-6-14.39-17.84-5.16-11.42-3.83-22.13A36.4,36.4,0,0,1,223.51,162q7.8-9,21.6-15.19,13.21-6,24.85-6a36.24,36.24,0,0,1,20.69,6Q299.71,152.76,305.05,164.58Zm-26.62,12q-3.63-8-10-10.42t-14.34,1.21q-7.95,3.59-10.4,10t1.18,14.41q3.63,8,10,10.42T269.21,201q7.95-3.59,10.4-10T278.43,176.59Z"
                    />
                    <path
                      d="M403.36,170.73l-12.54-35.8-2.27,41-19,6.67L342.16,152l12.54,35.8-23.76,8.32-25.73-73.45,29.52-10.34,34.63,37.88L372.79,99l29.11-10.2,25.73,73.45Z"
                    />
                    <path
                      d="M442.48,158.26l-20.73-75,67.87-18.76,5.31,19.23L453.53,95.16l2.32,8.4L495.15,92.7l5.29,19.12-39.29,10.86,2.5,9,44-12.17,3.11,19.84Z"
                    />
                  </g>
                  <g
                    id="work"
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
                  >
                    <path
                      d="M879.92,84.43,865.44,44l-9.23,42-29.26,1.87-29.54-76.1,29.81-1.9,14,45.52,9.92-46.51,25-1.6L891.95,52.1l8.15-46.94L929.25,3.3,909.62,82.53Z"
                    />
                    <path
                      d="M1031.25,41.3q.15,12.53-5.35,21.81a36.39,36.39,0,0,1-16.23,14.37q-10.73,5.09-25.88,5.27-14.5.18-25.18-4.44A36.22,36.22,0,0,1,942,64.57q-5.89-9.14-6-22.11-.15-12.53,5.35-21.81A36.4,36.4,0,0,1,957.57,6.28Q968.3,1.19,983.45,1q14.49-.18,25.18,4.44a36.23,36.23,0,0,1,16.57,13.75Q1031.1,28.33,1031.25,41.3Zm-29.21.36q-.11-8.83-5-13.56T983.4,23.46q-8.72.11-13.51,5T965.2,42.11q.11,8.83,5,13.56t13.63,4.63q8.72-.11,13.51-5T1002,41.66Z"
                    />
                    <path
                      d="M1097.2,82.15,1083.43,58l-13.4-.41-.72,23.75-26.15-.79,2.36-77.79L1086.81,4q36.71,1.11,35.91,27.81-.24,8-3.51,13.2A22.62,22.62,0,0,1,1109,53.4L1127,83.06Zm-13.07-43.69q6.54.2,9.2-1.47t2.79-5.8q.12-4-2.44-5.8t-8.88-2L1071.07,23l-.46,15Z"
                    />
                    <path
                      d="M1192.59,87.77l-18.14-31.38-9.73,7.49-1.59,21.74-28-2.05,5.68-77.62,28,2.05-1.94,26.53L1196,10l31.2,2.28-32.84,27.65,30,50.17Z"
                    />
                  </g>
                  <g
                    id="merch"
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
                  >
                    <path
                      d="M1535.71,145.45l9.25-36.79-24.47,33-19.56-4.92-6-40.61-9.25,36.79-24.42-6.14,19-75.48,30.34,7.63,8,50.69,31.07-40.85,29.92,7.52-19,75.48Z"
                    />
                    <path
                      d="M1575.36,156.41l23.75-74.11,67.05,21.49-6.09,19-40.9-13.11-2.66,8.3,38.82,12.44-6.05,18.89-38.82-12.44-2.86,8.93,43.49,13.94-8.27,18.3Z"
                    />
                    <path
                      d="M1705.94,202.2l-4.81-27.42-12.48-4.9L1680,192l-24.35-9.56L1684,110l38.46,15.09q34.19,13.42,24.44,38.28-2.91,7.41-7.75,11.24a22.62,22.62,0,0,1-12.47,4.47l7,34Zm2.42-45.54q6.09,2.39,9.16,1.72t4.59-4.52q1.47-3.75-.34-6.28t-7.7-4.84l-12.78-5-5.5,14Z"
                    />
                    <path
                      d="M1829.62,226.08q-7.61,13.15-21.72,15.73T1776.44,236q-12.84-6.25-20-15a35.1,35.1,0,0,1-8.13-19.54q-.94-10.76,4.69-22.33a41.78,41.78,0,0,1,14.35-17,36,36,0,0,1,20.46-5.92q11.5,0,24.74,6.46,15.78,7.68,22,18.58t3,25.22l-26.33-9.67a12.62,12.62,0,0,0-1.4-8.2q-2-3.27-7.18-5.8-7.55-3.67-13.47-1.34t-9.88,10.46q-8.06,16.56,7.62,24.2,11.47,5.58,17.58-2.23Z"
                    />
                    <path
                      d="M1872.48,287.65l15.07-24.13-24.5-15.3L1848,272.35l-23.85-14.9,41.22-66,23.85,14.9-13.86,22.19,24.5,15.3,13.86-22.19,23.85,14.9-41.22,66Z"
                    />
                  </g>
                  <a href="mailto:Andy.Snape@rawpowermanagement.com">
                    <g
                      id="contact"
                      onClick={() => {
                        if (this.state.popup_showing) {
                          this.setState({
                            popup_showing: false,
                            show_disc: false,
                            show_merch: false
                          });
                        }
                      }}
                    >
                      <path
                        d="M781.07,1906q-3.21,14.85-15.84,21.64t-31.74,4.08q-14.14-2-23.67-8.15a35.09,35.09,0,0,1-13.73-16.1q-4.2-10-2.39-22.69a41.78,41.78,0,0,1,8.43-20.6,36,36,0,0,1,17.66-11.91q11-3.51,25.53-1.44,17.37,2.47,26.63,10.94t10.59,23.08l-28-1.12a12.61,12.61,0,0,0-3.85-7.37q-2.89-2.5-8.61-3.32-8.31-1.18-13.23,2.85t-6.19,13q-2.59,18.24,14.68,20.69,12.63,1.79,16-7.52Z"
                      />
                      <path
                        d="M883.73,1906.49q-1.1,12.49-7.5,21.17a36.39,36.39,0,0,1-17.59,12.67q-11.19,4-26.28,2.66-14.44-1.27-24.61-6.93a36.22,36.22,0,0,1-15.11-15.34q-4.95-9.68-3.8-22.6,1.1-12.48,7.5-21.17a36.4,36.4,0,0,1,17.59-12.67q11.19-4,26.28-2.66,14.44,1.27,24.61,6.93a36.23,36.23,0,0,1,15.11,15.34Q884.87,1893.57,883.73,1906.49Zm-29.1-2.57q.78-8.79-3.63-14t-13.1-6q-8.69-.77-13.94,3.58t-6,13.15q-.78,8.79,3.63,14t13.1,6q8.69.77,13.94-3.58T854.63,1903.92Z"
                      />
                      <path
                        d="M954.43,1948.16,921.72,1906l-1.5,41-26.47-1,2.84-77.77,24.62.9,32.71,42.21,1.5-41,26.47,1L979,1949.06Z"
                      />
                      <path
                        d="M1018.52,1948.91l-.55-55.26-27.58.27-.22-22.56,83.27-.82.22,22.56-27.58.27.55,55.26Z"
                      />
                      <path
                        d="M1132.65,1945.45l-4.69-11.23-32.55,1.59-3.47,11.63-28.31,1.38,28.43-79.31,33.53-1.64,36,76.16Zm-23.13-55.84-7.82,25.26,18-.88Z"
                      />
                      <path
                        d="M1250,1905.12q.37,15.19-10.32,24.76t-29.89,11.42q-14.21,1.37-24.92-2.36a35.09,35.09,0,0,1-17.13-12.42q-6.42-8.69-7.66-21.49a41.77,41.77,0,0,1,3.35-22,36,36,0,0,1,14.36-15.73q9.83-6,24.47-7.4,17.47-1.68,28.46,4.37t15.72,19.95l-27.5,5.5a12.62,12.62,0,0,0-5.48-6.26q-3.4-1.75-9.15-1.2-8.36.81-12.19,5.88t-3,14.08q1.77,18.34,19.13,16.66,12.69-1.22,13.82-11.08Z"
                      />
                      <path
                        d="M1285,1930.53l-8-54.69-27.29,4-3.25-22.33,82.41-12,3.25,22.33-27.29,4,8,54.69Z"
                      />
                    </g>
                  </a>
                  <path stoke-width="1px" d="M1012,1847.89c-136.55,0-269-12.62-393.72-37.5-120.47-24-228.67-58.46-321.59-102.3s-166-95-217-151.86C26.82,1497.24,0,1434.54,0,1369.89s26.82-127.34,79.7-186.34c51-56.9,124-108,217-151.86s201.12-78.26,321.59-102.3C743,904.51,875.45,891.89,1012,891.89s269,12.62,393.72,37.5c120.47,24,228.67,58.46,321.59,102.3s166,95,217,151.86c52.89,59,79.7,121.69,79.7,186.34s-26.82,127.34-79.7,186.34c-51,56.9-124,108-217,151.86s-201.12,78.26-321.59,102.3C1281,1835.28,1148.55,1847.89,1012,1847.89Zm0-954c-136.42,0-268.75,12.61-393.33,37.47-120.31,24-228.35,58.38-321.13,102.15S132,1128.19,81.19,1184.89C28.64,1243.51,2,1305.75,2,1369.89s26.64,126.38,79.19,185c50.83,56.7,123.62,107.63,216.35,151.38s200.82,78.14,321.13,102.15c124.58,24.86,256.91,37.47,393.33,37.47s268.75-12.61,393.33-37.47c120.31-24,228.35-58.38,321.13-102.15S1892,1611.6,1942.81,1554.9c52.55-58.62,79.19-120.86,79.19-185s-26.64-126.38-79.19-185c-50.83-56.7-123.62-107.63-216.35-151.38s-200.82-78.14-321.13-102.15C1280.75,906.5,1148.42,893.89,1012,893.89Z" />
                  <rect x="73" y="974.89" width="1878" height="2" />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    ) : (
      <Mobile />
    );
  }
}

export default Main;
