import React from "react";
import { FaFacebook } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialGithub,
  TiSocialInstagram,
  TiSocialGooglePlus,
} from "react-icons/ti";
import FooterLogos from "./FooterLogos";
export default function Footer() {
  return (
    <div className="flex flex-col gap-4 items-center w-full bg-gradient-to-r from-purple-800 to-pink-800 px-20">
      <div className="flex flex-col items-center gap-4 p-6">
        <div className="flex flex-row gap-4 ">
          <FooterLogos icon={TiSocialFacebook} />
          <FooterLogos icon={TiSocialInstagram} />
          <FooterLogos icon={TiSocialTwitter} />
          <FooterLogos icon={TiSocialGooglePlus} />
        </div>

        <div className="text-white font-bold text-xs">
          @Copyright. All rights Reserved
        </div>
      </div>
    </div>
  );
}
