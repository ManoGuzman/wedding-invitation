// app/components/WeddingInvitation.tsx
"use client";

import type { SVGProps } from "react";
import dynamic from "next/dynamic";
import BackgroundSection from "./sections/BackgroundSection";
import HeroSection from "./sections/HeroSection";

const SvgDefs = dynamic(() => import("./sections/SvgDefs"));
const CeremonySection = dynamic(() => import("./sections/CeremonySection"));
const ReceptionSection = dynamic(() => import("./sections/ReceptionSection"));
const DressCodeSection = dynamic(() => import("./sections/DressCodeSection"));
const PresentSection = dynamic(() => import("./sections/PresentSection"));
const RsvpSection = dynamic(() => import("./sections/RsvpSection"));
const CountdownSection = dynamic(() => import("./sections/CountdownSection"));
const DateSection = dynamic(() => import("./sections/DateSection"));

/**
 * WeddingInvitation component renders the entire wedding invitation as an SVG.
 * It composes multiple sections such as Background, Hero, Date, Countdown, Ceremony, Reception, Dress Code, Present, and RSVP.
 * The component takes in the guest's name and the number of attendees as props, which are passed down to the RSVP section for personalized display.
 * The SVG is designed to be responsive and visually appealing, with various sections styled to match the overall theme of the invitation.
 */
interface WeddingInvitationProps extends SVGProps<SVGSVGElement> {
    name: string;
    amount: string;
}

/**
 * WeddingInvitation is a React functional component that renders an SVG-based wedding invitation.
 * It accepts the guest's name and the number of attendees as props, which are used in the RSVP section to personalize the invitation.
 * The component is structured with multiple sections, each responsible for a different part of the invitation, such as the background, hero image, date, countdown, ceremony details, reception details, dress code, present information, and RSVP details.
 * @param param0
 * @returns
 */
const WeddingInvitation = ({
    name,
    amount,
    ...props
}: WeddingInvitationProps) => (
    <svg
        id="wedding-invitation"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        viewBox="0 0 314.854 3543.78"
        width="100%"
        height="auto"
        overflow="hidden"
        style={{ display: "block", maxWidth: "100%" }}
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
            <RsvpSection name={name} amount={amount} />
        </g>
    </svg>
);

export default WeddingInvitation;
