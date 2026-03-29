"use client";

import dynamic from "next/dynamic";

const SvgAssets = dynamic(() => import("@/shared/SvgAssets"));

const CeremonySection = dynamic(() => import("@/ceremony/CeremonySection"));
const CountdownSection = dynamic(() => import("@/ceremony/CountdownSection"));
const DateSection = dynamic(() => import("@/ceremony/DateSection"));
const HeroSection = dynamic(() => import("@/ceremony/HeroSection"));

const BackgroundSection = dynamic(() => import("@/venue/BackgroundSection"));
const ReceptionSection = dynamic(() => import("@/venue/ReceptionSection"));
const DressCodeSection = dynamic(() => import("@/venue/DressCodeSection"));

const PresentSection = dynamic(() => import("@/rsvp/PresentSection"));
const RsvpSection = dynamic(() => import("@/rsvp/RsvpSection"));

/**
 * WeddingInvitation component renders the entire wedding invitation as an SVG.
 * It composes multiple sections such as Background, Hero, Date, Countdown, Ceremony, Reception, Dress Code, Present, and RSVP.
 * The component takes in the guest's name and the number of attendees as props, which are passed down to the RSVP section for personalized display.
 * The SVG is designed to be responsive and visually appealing, with various sections styled to match the overall theme of the invitation.
 */
interface WeddingInvitationProps {
    name: string;
    amount: string;
    id?: string;
    className?: string;
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
    id,
    className,
}: WeddingInvitationProps) => (
    <svg
        id={id || "wedding-invitation"}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlSpace="preserve"
        viewBox="0 0 314.854 3543.78"
        width="100%"
        preserveAspectRatio="xMidYMid meet"
        overflow="hidden"
        className={className}
        style={{ display: "block", maxWidth: "100%" }}
    >
        <SvgAssets />
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