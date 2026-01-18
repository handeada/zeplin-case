import { useState } from 'react';
import './ToggleButtonGroup.scss';

const ToggleButtonGroup = ({
  options = [],
  value,
  onChange,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}) => {
  const [internalValue, setInternalValue] = useState(value || options[0]?.value);
  const currentValue = value !== undefined ? value : internalValue;

  const handleClick = (optionValue) => {
    setInternalValue(optionValue);
    onChange?.(optionValue);
  };

  return (
    <div
      className={`toggle-group toggle-group--${variant} toggle-group--${size} ${className}`}
      role="group"
      {...props}
    >
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`toggle-group__button ${currentValue === option.value ? 'toggle-group__button--active' : ''}`}
          onClick={() => handleClick(option.value)}
          disabled={option.disabled}
        >
          {option.icon && <span className="toggle-group__icon">{option.icon}</span>}
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ToggleButtonGroup;
