import { Input, Label } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Label htmlFor="">
      <p>Find contacts by name</p>
      <Input
        type="text"
        id="filter"
        placeholder="Enter name"
        value={value}
        onChange={onChange}
      ></Input>
    </Label>
  );
};
