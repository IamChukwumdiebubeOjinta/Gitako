import { data } from "autoprefixer";
import React, { useState } from "react";
import { BarChart, DonutChart } from "../Components";
import MyMenu from "../Components/DropDown";
import { statsTop, pieData, barData } from "../Constants/Index";
import HomeLayout from "../Layouts/HomeLayout";

const TopCard = ({ id, title, content }) => (
  <div id={id} className="card flex-[33.33%] w-96 bg-[#87D087] shadow-xl">
    <div className="card-body justify-center text-black">
      <p className="text-center text-base">{title}</p>
      <h2 className="text-center text-4xl font-bold">{content}</h2>
    </div>
  </div>
);

const SideCard = ({ id, day, duration, content, bgColor }) => (
  <div id={id} className="card flex-row flex-1 p-3 bg-[#D9D9D9] shadow-sm">
    <div
      className="flex flex-col px-[1.25rem] items-center justify-center text-white rounded-[6px]"
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="text-center flex-[0.2] text-4xl font-bold">{day}</h2>
      <p className="text-center text-base">{duration}</p>
    </div>
    <div className="card-body justify-center   text-black">
      <h2 className="text-[12px] font-bold">{content}</h2>
    </div>
  </div>
);

const Dashboard = () => {
  const [pie, setPie] = useState({
    labels: pieData.map((data) => data.finances),
    datasets: [
      {
        label: "Financial Statistics",
        data: pieData.map((data) => data.amount),
        backgroundColor: pieData.map((data) => data.color),
      },
    ],
  });
  const [bar, setBar] = useState({
    labels: barData.map((data) => data.month),
    datasets: [
      {
        label: "Production Chart",
        data: barData.map((data) => data.statusBar),
        backgroundColor: "#2976C3"
      }
    ]
  })
  return (
    <HomeLayout>
      <div className="flex flex-col md:flex-row gap-[13px] justify-center items-center flex-[100%] mb-[33px]">
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
      <div className="flex flex-col md:flex-row flex-[100%] gap-[13px] mb-[20px]">
        <div className="flex w-[33.33%] gap-[13px] flex-col">
          <div className="flex justify-between">
            <h2 className="text-center text-[26px] leading-[31px] font-bold">
              Current Tasks
            </h2>
            <MyMenu header={"See more"} />
          </div>
          {/* Side Boxes */}
          <div className="flex flex-col gap-[12px]">
            <SideCard
              bgColor={`#DE6060`}
              day="2D"
              duration="due"
              content="Fertilizer application not applied at 
              due date. "
            />
            <SideCard
              bgColor={`#256525`}
              day="3D"
              duration="left"
              content="Weeding to be done in a few days. 
            Please get set for it"
            />
            <SideCard
              bgColor={`#256525`}
              day="5D"
              duration="left"
              content="Spray of pesticides due in 5 days."
            />
          </div>
        </div>
        <div className="flex flex-grow">
          <div className="w-full bg-[#E8E8E8] rounded-[6px] flex flex-1">
            <div className="flex-[0.6] h-full">
              <div className="w-full h-full flex flex-col flex-1">
                <div className="flex-[0.2] mt-[20px] ml-[40px]">
                  <h2 className="text-[32px] leading-[39px] mb-[13px]">
                    Financial Statistics
                  </h2>
                  <p className="text-[16px] leading-[19px]">
                    Income & Expenses
                  </p>
                </div>
                {/* Chart JS */}
                <div className="flex-[0.8] mb-[5px]">
                  <DonutChart
                    data={pie}
                    height={"200px"}
                    width={"200px"}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-[0.4] items-center justify-center">
              <div className="max-w-[229px]">
                <div className="container mx-auto pl-[34px] pr-[43px] pt-[55px] pb-[40px] flex flex-col shadow-md bg-white gap-2 border-base-100 border">
                  {pieData.map((data) => (
                    <div
                      key={data.id}
                      className="flex flex-col justify-center items-start"
                    >
                      <small className="text-[16px] leading-[19px]">
                        {data.finances}
                      </small>
                      <h2 className="text-[26px] leading-[31px]">
                        {data.amount} {data.range}
                      </h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="flex flex-col">
        <h1 className="text-[26px] font-bold leading-[31px]">Production Chart</h1>
        <div className="flex justify-center items-center">
        <BarChart
          chartData={bar} />
        </div>
      </div>
    </HomeLayout>
  );
};

export default Dashboard;
