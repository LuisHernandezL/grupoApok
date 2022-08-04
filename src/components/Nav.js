import React from 'react';
import '../styles/Nav.css';
import { useDispatch } from 'react-redux';
import { setLocalization } from '../store/slices/localization.slice';
import { getParents } from '../store/slices/nodes.slice';

const Nav = (props) => {
  const locales = props.locales;
  const dispatch = useDispatch();
  return (
    <div>
      <nav className='navbar'>
        <div className='logo'>Translate Bar</div>

        <ul className='nav-links'>
          <input type='checkbox' id='checkbox_toggle' />
          <label htmlFor='checkbox_toggle' className='hamburger'>
            &#9776;
          </label>

          <div className='menu'>
            {locales.map((locale) => (
              <li key={locale.locale}>
                <button
                  className='nav-items'
                  onClick={() => {
                    dispatch(setLocalization(locale.locale));
                  }}
                >
                  {locale.label}
                </button>
              </li>
            ))}
            <li>
              <button
                className='btn btn-warning goTo'
                onClick={() => dispatch(getParents())}
              >
                GO TO PARENTS
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
