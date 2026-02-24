// app/components/WeddingInvitation.tsx
'use client'

import type { SVGProps } from "react";
import SvgDefs from "./sections/SvgDefs";
import BackgroundSection from "./sections/BackgroundSection";
import HeroSection from "./sections/HeroSection";
import NamesSection from "./sections/NamesSection";
import CeremonySection from "./sections/CeremonySection";
import ReceptionSection from "./sections/ReceptionSection";
import DressCodeSection from "./sections/DressCodeSection";
import DateDetailsSection from "./sections/DateDetailsSection";
import GiftsSection from "./sections/GiftsSection";
import SinpeSection from "./sections/SinpeSection";
import RsvpSection from "./sections/RsvpSection";
import ThankYouSection from "./sections/ThankYouSection";
import CountdownSection from "./sections/CountdownSection";

const WeddingInvitation = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        width={1190.001}
        height={12806.838}
        viewBox="0 0 314.854 3388.476"
        {...props}
    >
        <SvgDefs />
        <g transform="translate(2062.672 -1551.587)">
            <BackgroundSection />
            <HeroSection />
            <CountdownSection />
            <NamesSection />
            <CeremonySection />
            <ReceptionSection />
            <DressCodeSection />
            <DateDetailsSection />
            <GiftsSection />
            <SinpeSection />
            <RsvpSection />
            <ThankYouSection />
        </g>
    </svg>
);

export default WeddingInvitation;