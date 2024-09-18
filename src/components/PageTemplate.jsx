import PropTypes from "prop-types"

export const PageTemplate = ({ title, description, section }) => {
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {section}
    </div>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  section: PropTypes.element,
}
