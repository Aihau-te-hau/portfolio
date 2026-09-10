import './SectionDivider.scss'

function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <div className="section-divider-line"></div>

      <span className="section-divider-star">✦</span>
      
      <div className="section-divider-line"></div>
    </div>
  )
}

export default SectionDivider