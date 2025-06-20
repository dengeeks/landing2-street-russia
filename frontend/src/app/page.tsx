import Banner from "@/widgets/banner";
import ProgramInfo from "@/widgets/program-info";
import Partners from "@/widgets/partners";
import ParticipantsInfo from "@/widgets/participants-info/ui/ParticipantsInfo";
import ModeratorsAndExperts from "@/widgets/moderators-and-experts";
import MediaAccreditation from "@/widgets/media-accreditation";
import Streets from "@/widgets/streets";
import StreetTour from "@/widgets/street-tour";

export default function Home() {
    return (
        <>
            <Banner/>
            <Streets/>
            <StreetTour/>
            <ProgramInfo/>
            <ParticipantsInfo/>
            <ModeratorsAndExperts/>
            <Partners/>
            <MediaAccreditation/>
        </>
    );
}
