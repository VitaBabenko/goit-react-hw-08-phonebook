// import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <button>
        <NavLink to="/">Home</NavLink>
      </button>
      {isLoggedIn && (
        <button>
          <NavLink to="/contacts">Contacts</NavLink>
        </button>
      )}
    </nav>
  );
};

export default Navigation;
