import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoRoom = () => {
    let {roomId} = useParams();
    const myMeeting = async (element) =>{
        const appID =1316310917 ;
        const serverSecret = "c4cb2b2763a93b69340bf21d6a677b95";
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  Date.now().toString(), `${roomId}`);
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: 'copy link',
                url:`http://localhost:5173/room/${roomId}`,
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.oneONOneCall
            },
          });
    }
  return (
    <div>
        <div ref = {myMeeting}></div>
    </div>
  )
}

export default VideoRoom