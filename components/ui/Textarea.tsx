type Props = {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
};


export default function Textarea({
  value,
  onChange,
  placeholder
}:Props){

return (

<textarea

value={value}

onChange={onChange}

placeholder={placeholder}

className="
w-full
border
p-4
rounded-xl
h-32
outline-none
focus:ring-2
"

/>

);

}