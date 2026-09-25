import "./LabeledInput.css";

type widthUnit = "%" | "px" | "em" | "vh";
interface LabeledInputProps {
  label: string;
  placeholder: string;
  name?: string;
  value?: string;
  width: `${number}${widthUnit}`;
  type?: "password" | "text";
  onChange?: React.ChangeEventHandler | null;
  danger?: boolean;
}

function LabeledInput({
  label,
  placeholder,
  name = "",
  width,
  value = "",
  type = "text",
  onChange = null,
  danger = false,
}: LabeledInputProps) {
  return (
    <div className="labeled-input" style={{ width: width }}>
      <label htmlFor={name + "Input"}>{label}</label>
      <input
        className={danger ? "danger" : ""}
        id={name + "Input"}
        placeholder={placeholder}
        value={value}
        type={type}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}

export default LabeledInput;
