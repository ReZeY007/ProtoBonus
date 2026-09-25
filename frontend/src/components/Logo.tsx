import "./Logo.css";

function Logo({ size = 1 }: LogoProps) {
  return (
    <div className="logo">
      <img style={{ height: size, width: size }} />
      <h1 style={{ color: "var(--text-light)" }}>
        Прото<span style={{ color: "orange" }}>Бонус</span>
      </h1>
    </div>
  );
}

interface LogoProps {
  size?: number;
}

export default Logo;
