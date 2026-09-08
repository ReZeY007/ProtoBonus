function Logo({ size = 1 }: LogoProps) {
  return (
    <div>
      <img style={{ height: size, width: size }} />
      <h1>
        Прото<span style={{ color: "orange" }}>Бонус</span>
      </h1>
    </div>
  );
}

interface LogoProps {
  size?: number;
}

export default Logo;
