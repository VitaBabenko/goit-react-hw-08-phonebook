import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label>
      Search contacts
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
};
