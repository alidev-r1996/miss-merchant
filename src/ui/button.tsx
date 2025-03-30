type ButtonProps = {
  color: "primary" | "secondary" | "transparent";
  size: "full" | "max";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  clickAction?: () => void
};

const colors = {
  primary: "bg-red-600 text-white hover:shadow-[0_0_10px_rgba(220,38,38,0.5)]",
  secondary: "bg-white text-black hover:shadow-[0_0_5px_rgba(0,0,0,0.1)] border border-slate-300",
  transparent: "bg-transparent text-black hover:shadow-[0_0_105px_rgba(0,0,0,0.1)] border border-slate-300",
};

const sizes = {
  full: "w-full",
  max: "w-max",
};

const ButtonUi: React.FC<ButtonProps> = ({
  children,
  color,
  size,
  disabled = false,
  className,
  clickAction
}) => {
  return (
    <button {...clickAction && {onClick: clickAction}} disabled={disabled} className={`${className} ${colors[color]} ${sizes[size]} ${disabled && "!text-slate-500 bg-transparent"} disabled:pointer-events-none px-3 py-2 rounded-full transition-all duration-300 flex flex-nowrap items-center gap-2 hover:scale-105 active:scale-90`}>{children}</button>
  );
};

export default ButtonUi;
