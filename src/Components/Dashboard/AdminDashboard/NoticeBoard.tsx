import { notices } from "../../../dummyData/DummyData";
import DashboardCard from "../DashboardCard";

const NoticeBoard = () => {
    return (
        <DashboardCard title="Notice Board">
            <div>
            {
                notices.map((item)=>{
                    return(
                        <div className="md:flex items-center gap-5 mt-8 text-textPrimary">
                            <img className="w-full md:w-40 md:h-24" src={item.img} alt="" />
                            <p>{item.des}</p>
                        </div>
                    )
                })
            }
        </div>
        </DashboardCard>
    );
};

export default NoticeBoard;