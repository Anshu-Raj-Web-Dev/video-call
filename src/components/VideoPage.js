import React from 'react'
import { useParams } from 'react-router-dom'
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"
import { APP_ID, SERVER_SECRET } from './constant'

const VideoPage = () => {
    const {id} = useParams()
    const roomID = id;
        let myMeeting = async (element) => {
            const appID = APP_ID;
            const serverSecret = SERVER_SECRET;
            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID ,serverSecret , roomID , Date.now().toString() , "😉😉")

            const zp = ZegoUIKitPrebuilt.create(kitToken)

            zp.joinRoom({
                container: element,
                sharedLinks: [
                    {
                        name: 'Personal Link',
                        url:
                         window.location.protocol + '//' +
                         window.location.host + window.location.pathname +
                        '?roomID=' +
                        roomID,
                    },
                ],
                scenario: {
                    mode: ZegoUIKitPrebuilt.GroupCall,
                },
            });
        }
  return (
    <div ref={myMeeting}>
      
    </div>
  )
}

export default VideoPage
