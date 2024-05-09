import React from "react";
import CountryDropdown from "./CountryDropdown";
import "./styles.css";

const pattern = "(xxx) xxx-xxxx";

const data = [
  {
    value: 1,
    label: "US",
  },
  {
    value: 44,
    label: "UK",
  },
];

const mask = (intlCode: number, value: string) => {
  let valueRef = 0;
  let number = Array.from(pattern)
    .map((char) => {
      if (valueRef >= value.length) return "";

      if (char === "x") {
        const val = value.charAt(valueRef);
        valueRef++;
        return val;
      }

      return char;
    })
    .join("");

  return `+${intlCode} ${number}`;
};

const demask = (intlCode: number, value: string) => {
  const chars = ["(", ")", " ", "-", "+"];
  const ret = Array.from(value)
    .slice(`+${intlCode} `.length)
    .map((char) => {
      if (chars.includes(char)) return "";
      return char;
    })
    .join("");

  return ret;
};

type Props = {
  value: string
  onChange: (val: string) => void
}
const PhoneInput: React.FC<Props> = ({ value, onChange }) => {
  const [phone, setPhone] = React.useState(value);
  const [intlCode, setIntlCode] = React.useState(1);
  const [maskedPhone, setMaskedPhone] = React.useState(() =>
    mask(intlCode, value)
  );
  const maskMemo = React.useCallback(mask, [intlCode, phone]);
  const demaskMemo = React.useCallback(demask, [intlCode, phone]);

  const handleInputChange = (value: string) => {
    const demasked = demaskMemo(intlCode, value);

    if (demasked.length === 11) return;

    if (!/^[\d ]{0,11}$/g.test(demasked)) {
      return;
    }

    setPhone(demasked);
  };

  const handleDropdownChange = (value: number) => {
    setIntlCode(value);
  };

  React.useEffect(() => {
    onChange(intlCode.toString() + phone);
    setMaskedPhone(() => maskMemo(intlCode, phone));
  }, [phone, intlCode]);

  return (
    <div className="PhoneInput">
      <div className="content">
        <CountryDropdown data={data} onChange={handleDropdownChange} />
        <input
          type="tel"
          value={maskedPhone}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PhoneInput;
