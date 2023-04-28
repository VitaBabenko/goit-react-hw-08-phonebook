// import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav>
      <button>
        <NavLink to="/register">Register</NavLink>
      </button>
      <button>
        <NavLink to="/login">Log In</NavLink>
      </button>
    </nav>
  );
};

export default AuthNav;
