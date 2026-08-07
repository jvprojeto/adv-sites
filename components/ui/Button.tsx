type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

export default function Button({
  children,
  onClick,
  disabled,
  type = "button",
}: Props) {

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="
      bg-black
      text-white
      px-8
      py-3
      rounded-xl
      font-bold
      hover:opacity-90
      transition
      disabled:opacity-50
      "
    >
      {children}
    </button>
  );
}