// app/components/WeddingInvitation.tsx
'use client'

import type { SVGProps } from "react";
import SvgDefs from "./sections/SvgDefs";
import BackgroundSection from "./sections/BackgroundSection";
import HeroSection from "./sections/HeroSection";
import CeremonySection from "./sections/CeremonySection";
import ReceptionSection from "./sections/ReceptionSection";
import DressCodeSection from "./sections/DressCodeSection";
import PresentSection from "./sections/PresentSection";
import RsvpSection from "./sections/RsvpSection";
import CountdownSection from "./sections/CountdownSection";
import DateSection from "./sections/DateSection";

const WeddingInvitation = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        width={1190.001}
        height={13393.816}
        viewBox="0 0 314.854 3543.78"
        {...props}
    >
        <SvgDefs />
        <g>
            <BackgroundSection />
            <HeroSection />
            <DateSection />
            <CountdownSection />
            <CeremonySection />
            <ReceptionSection />
            <DressCodeSection />
            <PresentSection />
            <RsvpSection />
        </g>
    </svg>
);

export default WeddingInvitation;