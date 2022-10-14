import React from "react";
import { PopOver } from "../Components";
import MyMenu from "../Components/DropDown";
import { statsTop } from "../Constants/Index";
import HomeLayout from "../Layouts/HomeLayout";

const TopCard = ({ id, title, content }) => (
  <div id={id} className="card flex-[33.33%] w-96 bg-[#87D087] shadow-xl">
    <div className="card-body justify-center text-black">
      <p className="text-center text-base">{title}</p>
      <h2 className="text-center text-4xl font-bold">{content}</h2>
    </div>
  </div>
);

const SideCard = ({ id, title, content }) => (
  <div id={id} className="card flex-[33.33%] w-96 bg-[#87D087] shadow-sm">
    <div className="card-body justify-center text-black">
      <p className="text-center text-base">{title}</p>
      <h2 className="text-center text-4xl font-bold">{content}</h2>
    </div>
    <div className="card-body justify-center text-black">
      <p className="text-center text-base">{title}</p>
      <h2 className="text-center text-4xl font-bold">{content}</h2>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <HomeLayout>
      <div className="flex flex-col md:flex-row justify-center items-center flex-[100%] gap-[13px] mb-[33px]">
        {statsTop.map((stats) => (
          <TopCard
            id={stats.id}
            key={stats.id}
            title={stats.title}
            content={stats.product}
          />
        ))}
      </div>

      {/* Current Tasks and Stats */}
      <div className="flex flex-col md:flex-row flex-[100%] gap-[13px] mb-[20px] min-h-[370px]">
        <div className="flex gap-[13px] flex-col">
          <div className="flex gap-[39px]">
            <h2 className="text-center text-[26px] leading-[31px] font-bold">
              Current Tasks
            </h2>
            <MyMenu
              header={'See more'} />
          </div>
          {/* Side Boxes */}
          <div className="flex flex-col gap-[12px]">

          </div>
        </div>
        <div className="flex flex-grow"></div>
      </div>
    </HomeLayout>
  );
};

export default Dashboard;
