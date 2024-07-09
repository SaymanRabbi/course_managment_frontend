import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { id } = useParams();

  const myMetting = (element: any) => {
    const appID = 57233930;
    const serverSecret = "9ab549aaf77e2733e4db5b296694a4c3";
    const kitToken = ZegoUIKitPrebuilt?.generateKitTokenForTest(
      appID,
      serverSecret,
      id || "",
      Date.now().toString() + 3600 * 1000,
      "Course_Management"
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
    <div className=" mt-[120px]  w-[100%]">
      <div
        ref={myMetting}
        className="max-h-[500px] mx-auto px-[20px] max-w-[100%]!"
      />
    </div>
  );
};

export default Room;
