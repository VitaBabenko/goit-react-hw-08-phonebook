import { FormLabel, Input } from '@chakra-ui/react';

export const Filter = ({ value, onChange }) => {
  return (
    <FormLabel
      margin="0"
      display="flex"
      justifyContent="center"
      gap="15px"
      color="tomato"
    >
      Search contacts
      <Input
        color="tomato"
        borderRadius="10px"
        border="1px"
        width="200px"
        variant="outline"
        size="sm"
        type="text"
        value={value}
        onChange={onChange}
      />
    </FormLabel>
  );
};
