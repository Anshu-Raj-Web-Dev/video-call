import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { APP_ID, SERVER_SECRET } from "./constant";
import "./VideoPage.css";

const VideoPage = () => {
  const { id } = useParams();
  const roomID = id;
  const videoContainerRef = useRef(null);

  useEffect(() => {
    const initMeeting = async () => {
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        APP_ID,
        SERVER_SECRET,
        roomID,
        Date.now().toString(),
        "Your Name"
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container: videoContainerRef.current,
        sharedLinks: [
          {
            name: "Personal Link",
            url: `${window.location.origin}/room/${roomID}`,
          },
        ],
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall,
        },
      });
    };

    initMeeting();
  }, [roomID]);

  return <div ref={videoContainerRef} className="video-container"></div>;
};

export default VideoPage;
