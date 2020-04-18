import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ThemeContext from './ThemeContext/ThemeContext';

export default function App({ toggleTheme }) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div
          className="body"
          style={{ background: theme.bodybg, color: theme.fontColor }}
        >
          <div className="theme-selector">
            <label htmlFor="theme" className="switch">
              <input
                type="checkbox"
                id="theme"
                checked={theme.type === 'light'}
                onChange={event => toggleTheme(event.currentTarget.value)}
              />
              <span className="slider round">
                Change to {theme.changeTo} theme
              </span>
            </label>
          </div>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

App.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};
