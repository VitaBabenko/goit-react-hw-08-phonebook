import { useSelector, useDispatch } from 'react-redux';
import { setValueFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    return dispatch(setValueFilter(evt.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={filter} onChange={handleFilterChange} />
    </Label>
  );
};
