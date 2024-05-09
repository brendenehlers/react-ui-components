import React from 'react'

type CountryCode = {
  value: number
  label: string
}

type Props = {
  data: Array<CountryCode>
  onChange: (val: number) => void
}

const CountryDropdown: React.FC<Props> = ({ data, onChange }) => {
  return (
    <select className="Dropdown" onChange={(e) => onChange(parseInt(e.target.value))}>
      {data.map((d) => (
        <option key={d.label} value={d.value}>
          {d.label}
        </option>
      ))}
    </select>
  );
};

export default CountryDropdown;
