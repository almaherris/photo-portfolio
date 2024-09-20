import PropTypes from "prop-types"

export const PageTemplate = ({ title, description, section }) => {
  return (
    <div className="pb-10">
      <div className="flex flex-col gap-9 text-center pb-10 md:text-left md:flex-row md:items-center lg:px-10">
        <h2 className="font-cormorant text-7xl">{title}</h2>
        <p className="text-3xl">{description}</p>
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
