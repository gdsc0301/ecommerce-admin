import Image from "next/image";
import './styles/Footer.scss';

import { _e } from "@/app/helpers/Dict";

import { OpenInNew } from "@mui/icons-material";

const Footer = async () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full py-5 lg:py-10 text-white bg-gunmetal">
      <div className="container">
        <div className="flex items-end gap-1 leading-none">
          <small><_e>Author</_e>:&nbsp;</small>
          <a href="https://www.linkedin.com/in/guilherme-c/" target="_blank" rel="noopener noreferrer">
            <strong>Guilherme Carvalho</strong><OpenInNew className="ml-1 -mt-3 text-xs" />
          </a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;