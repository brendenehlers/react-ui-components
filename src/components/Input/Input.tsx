import "./styles.css";

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
const Input: React.FC<Props> = (props) => {
  return (
    <div className="Input">
      <input
        {...props}
      />
    </div>
  );
};

export default Input;
