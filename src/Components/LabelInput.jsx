const LabelInput = ({ id, label }) => {
  return (
    <div id={id} className="form-control gap-1 m-4 w-[28%]">
      <label>{label}</label>
      <input
        type="text"
        placeholder={label}
        className="input border-b-0 input-bordered bg-[#f0ebeb] focus:outline-none focus:bg-white "
      />
    </div>
  );
};

export default LabelInput;
