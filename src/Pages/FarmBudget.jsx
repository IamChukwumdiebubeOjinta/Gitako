import Button from "../Components/Button";
import HomeLayout from "../Layouts/HomeLayout";
import { farmBudgetData } from "../Constants/Index";
import LabelInput from "../Components/LabelInput";

const FarmBudgetForm = () => {
  return (
    <HomeLayout>
      <div className="FarmBudgetForm">
        <h1 className="font-bold text-[20px] leading-[28px]">
          FARM BUDGET FORM
        </h1>
        <div className="formInputItems flex w-[100%] flex-wrap">
          {farmBudgetData.map((stats) => (
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

export default FarmBudgetForm;
