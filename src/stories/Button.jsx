import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props} // Passa tutti gli altri props (come onClick, o altri props specifici)
    >
      {label}
    </button>
  );
};

// Specifica come e quali props caricare

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool, // Carica un qualsiasi prop booleano
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string, // Carica la prima stringa che esce
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']), // Carica solo i valori specificati
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired, // Carica una stringa obbligatoria
  /**
   * Optional click handler
   */
  onClick: PropTypes.func, // Carica una funzione
};

// Valori default

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};
