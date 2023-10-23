import { Image } from "@nextui-org/react";

const VisieLogo = () => {
    return (
      <div className="visieLogo">
        <Image
          width={136}
          height={39}
          src="/logos/visie.svg"
          fetchPriority="high"
          loading="eager"
          alt="Visie logo" />
      </div>
    )
}
export default VisieLogo;