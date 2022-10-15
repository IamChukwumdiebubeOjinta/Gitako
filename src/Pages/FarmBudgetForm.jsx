import Input from "../Components/FarmBudComp/Input";
import Button from "../Components/Button";
import HomeLayout from "../Layouts/HomeLayout";
import "./farmBudgetForm.css";

const FarmBudgetForm = () => {
  return (
    <HomeLayout>
      <div className="FarmBudgetForm">
        <div className="formInputItems">
          <div className="form-group">
            <Input text={"Farm Name"} />
          </div>
          <div className="form-group">
            <Input text={"Blocks"} />
          </div>
          <div className="form-group">
            <Input text={"Crop"} />
          </div>
          <div className="form-group">
            <Input text={"Location"} />
          </div>
          <div className="form-group">
            <Input text={"Hectares"} />
          </div>
          <div className="form-group">
            <Input text={"Cropping Season"} />
          </div>
          <div className="form-group">
            <Input text={"Budget Particulars"} />
          </div>
          <div className="form-group">
            <Input text={"Product Brand Name"} />
          </div>
          <div className="form-group">
            <Input text={"Quantity"} />
          </div>
          <div className="form-group">
            <Input text={"Budget Description"} />
          </div>
          <div className="form-group">
            <Input text={"Units"} />
          </div>
          <div className="form-group">
            <Input text={"Rates per bag/Kg/Ltr"} />
          </div>
          <div className="form-group">
            <Input text={"Total Cost/ha"} />
          </div>
        </div>
        <Button text={"Submit"} />
      </div>
    </HomeLayout>
  );
};

export default FarmBudgetForm;
