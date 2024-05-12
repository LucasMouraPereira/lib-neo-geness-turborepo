interface Props {
  primary?: boolean;
  size?: "small" | "large";
  label?: string;
  backgroundColor?: {
    control: string
  }
  onClick?: () => void
}

export const Button = ({
  primary = false,
  label = "Boop",
  size = "small",
  backgroundColor,
  onClick,
}: Props) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: primary ? "red" : "blue",
        fontSize: size === "large" ? "24px" : "14px",
      }}
    >
      {label}
    </button>
  );
};
