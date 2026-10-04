export default function CompanyLogo({ type, size = 32 }) {
  if (type === 'zoho') {
    return (
      <div className="company-logo-badge zoho-logo" title="Zoho Corporation">
        <svg
          width={size * 1.3}
          height={size * 0.9}
          viewBox="0 0 130 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="brand-svg"
        >
          {/* Zoho 4 interconnected square links */}
          {/* Red block */}
          <rect x="6" y="24" width="38" height="38" rx="8" stroke="#E53935" strokeWidth="6" fill="#FEE2E2" />
          {/* Green block */}
          <rect x="34" y="24" width="38" height="38" rx="8" stroke="#43A047" strokeWidth="6" fill="#DCFCE7" />
          {/* Blue block */}
          <rect x="62" y="24" width="38" height="38" rx="8" stroke="#1E88E5" strokeWidth="6" fill="#DBEAFE" />
          {/* Orange/Yellow block */}
          <rect x="90" y="24" width="38" height="38" rx="8" stroke="#FB8C00" strokeWidth="6" fill="#FEF3C7" />
        </svg>
      </div>
    )
  }

  if (type === 'infosys') {
    return (
      <div className="company-logo-badge infosys-logo" title="Infosys Springboard">
        <svg
          width={size * 1.5}
          height={size * 0.9}
          viewBox="0 0 160 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="brand-svg"
        >
          <text
            x="0"
            y="35"
            fill="#007CC3"
            fontFamily="'Space Grotesk', -apple-system, sans-serif"
            fontWeight="800"
            fontSize="34"
            letterSpacing="-0.5px"
          >
            Infosys
          </text>
          <text
            x="118"
            y="18"
            fill="#007CC3"
            fontFamily="'Space Mono', monospace"
            fontWeight="700"
            fontSize="10"
          >
            ®
          </text>
        </svg>
      </div>
    )
  }

  return null
}
