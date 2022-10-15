import Input from "../Components/FarmBudComp/Input";
import Button from "../Components/Button";
import HomeLayout from "../Layouts/HomeLayout";
import "./farmBudgetForm.css";

const FarmDesignBlocks = () => {
  return (
    <HomeLayout>
      <div className="FarmBudgetForm">
        <div className="formInputItems">
          <div className="form-group">
            <Input text={"Block Name"} />
          </div>
          <div className="form-group">
            <Input text={"Block Size"} />
          </div>
          <div className="form-group">
            <Input text={"Crop"} />
          </div>
          <div className="form-group">
            <Input text={"Location"} />
          </div>
          <div className="form-group">
            <Input text={"Number of Ridges"} />
          </div>
          <div className="form-group">
            <Input text={"Block Manager"} />
          </div>
          <div className="form-group">
            <Input text={"Obstacles"} />
          </div>
          <div className="form-group">
            <Input text={"Size of Obstacle"} />
          </div>
          <div className="form-group">
            <Input text={"Remark"} />
          </div>
        </div>
        <Button text={"Submit"} />
      </div>
    </HomeLayout>
  );
};

export default FarmDesignBlocks;
