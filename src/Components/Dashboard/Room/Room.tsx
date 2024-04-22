import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useUserStore } from "../../../Store/UserStore";

const Room = () => {
  const { id } = useParams();
  const { user } = useUserStore((state) => state);
  const myMetting = (element: any) => {
    const appID = 1899778546;
    const serverSecret = "4807dbd0651776970617bde0f351e4c6";
    const kitToken = ZegoUIKitPrebuilt?.generateKitTokenForTest(
      appID,
      serverSecret,
      id || "",
      user?._id || "",
      user?.name
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      showPreJoinView: true,
      showRoomTimer: true,
      showPinButton: true,
      showInviteToCohostButton: true,
      showRemoveCohostButton: true,

      sharedLinks: [
        {
          name: "Copy Link",
          url: `https://starlit-zuccutto-9d1e7d.netlify.app/dashboard/room/${id}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
      showScreenSharingButton: true,
    });
  };
  return (
    <div>
      <div ref={myMetting} />
    </div>
  );
};

export default Room;
