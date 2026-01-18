import './Typography.scss';

const Typography = ({
  variant = 'body',
  weight = 'regular',
  children,
  className = '',
  as,
  ...props
}) => {
  const variantMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body: 'p',
    small: 'span',
  };

  const Component = as || variantMap[variant] || 'p';

  return (
    <Component
      className={`typography typography--${variant} typography--${weight} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
