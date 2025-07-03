import PropTypes from "prop-types";

/**
 * SVG Icon Component
 * Usage: <SvgIcon name="profile" title="Profile icon" className="w-4 h-4 text-gray-700" />
 */
const SvgIcon = ({
  name,
  title,
  className = "",
  width = "1rem",
  height = "1rem",
}) => {
  if (!name) return null;

  return (
    <svg
      className={className}
      width={width}
      height={height}
      aria-hidden={!title}
      role="img"
    >
      {title && <title>{title}</title>}
      <use xlinkHref={`/assets/svg/svgDefinitions.svg#${name}`} />
    </svg>
  );
};

SvgIcon.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default SvgIcon;
