import './Button.scss';

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  leftIcon,
  rightIcon,
  disabled = false,
  loading = false,
  ...props
}) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className="btn__spinner" />
      )}
      {leftIcon && !loading && <span className="btn__icon btn__icon--left">{leftIcon}</span>}
      <span className="btn__text">{children}</span>
      {rightIcon && <span className="btn__icon btn__icon--right">{rightIcon}</span>}
    </button>
  );
};

export default Button;
