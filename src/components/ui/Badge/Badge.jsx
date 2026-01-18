import './Badge.scss';

const Badge = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  return (
    <span
      className={`badge badge--${variant} badge--${size} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
