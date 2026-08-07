type Props = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
};

export default function Input({
  value,
  onChange,
  placeholder,
  type="text"
}: Props){

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
      w-full
      border
      p-4
      rounded-xl
      outline-none
      focus:ring-2
      "
    />
  );

}