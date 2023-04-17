import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav>
      <Button>
        <NavLink to="/register">Register</NavLink>
      </Button>
      <Button>
        <NavLink to="/login">Log In</NavLink>
      </Button>
    </nav>
  );
};

export default AuthNav;
