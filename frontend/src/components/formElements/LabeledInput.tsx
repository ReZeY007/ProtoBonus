type widthUnit = "%" | "px" | "em" | "vh";
interface LabeledInputProps {
  label: string;
  placeholder: string;
  width: `${number}${widthUnit}`;
}

function LabeledInput({ label, placeholder, width }: LabeledInputProps) {
  return (
    <div style={{ width: width }}>
      <label>{label}</label>
      <input placeholder={placeholder} />
    </div>
  );
}

export default LabeledInput;
