import Button from "../Components/Button";
import HomeLayout from "../Layouts/HomeLayout";
import { farmDesignData } from "../Constants/Index";
import LabelInput from "../Components/LabelInput";

const FarmDesign = () => {
  return (
    <HomeLayout>
      <div className="FarmDesign">
        <h1 className="font-bold text-[20px] leading-[28px]">
          FARM DESIGN (BLOCKS)
        </h1>
        <div className="formInputItems flex w-[100%] flex-wrap">
          {farmDesignData.map((stats) => (
            <LabelInput id={stats.id} label={stats.label} />
          ))}
        </div>
        <div className="mt-6">
          <Button text={"Submit"} />
        </div>
      </div>
    </HomeLayout>
  );
};

export default FarmDesign;
