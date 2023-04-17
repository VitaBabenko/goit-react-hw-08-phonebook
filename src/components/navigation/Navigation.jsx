import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Button>
        <NavLink to="/">Home</NavLink>
      </Button>
      {isLoggedIn && (
        <Button>
          <NavLink to="/contacts">Contacts</NavLink>
        </Button>
      )}
    </nav>
  );
};

export default Navigation;
