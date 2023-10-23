import Image from "next/image";

const VisieLogo = ({className = ''}) => {
    return (
      <div className={`visieLogo relative ${className}`}>
        <Image
          src="/logos/visie.svg"
          fetchPriority="high"
          loading="eager"
          alt="Visie logo"
          className="object-contain"
          fill />
      </div>
    )
}
export default VisieLogo;