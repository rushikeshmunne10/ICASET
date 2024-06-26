import Image from "next/image"
import { keynoteSpeakers } from "@/app/data"
import MainContainer from "../components/MainContainer";

export const metadata = {
    title: 'Keynote Speakers',
    description: 'Know about the Keynote Speakers at the Conference'
}

export default function KeynoteSpeakers() {

    const speakers = Array.from(keynoteSpeakers).sort((a, b) => {
        return a.name.localeCompare(b.name, 'en', { sensitivity: 'base' });
    });


    return(
    <MainContainer>
        <div className="w-full flex flex-col items-center backdrop-blur-md py-10">
            <h1 className="text-4xl m-10 mt-0 text-center font-extrabold text-white w-fit bg-[#222831] px-5 py-3 rounded-xl bg-opacity-70">Keynote Speakers</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-2 md:px-10 pt-5">
                {speakers.map((speaker, index) => {
                    return (
                        <div key={index} className="w-full flex flex-col bg-[#222831] bg-opacity-70 rounded-xl text-white p-3">
                            <div className="flex flex-col sm:flex-row w-full items-center">
                                <Image src={`/images/speakers/${speaker.image}`} width={1000} height={1000} className="object-cover object-center rounded-lg w-48 h-48" alt="speaker image" />
                                <div className="p-5 w-full text-center sm:text-left">
                                    <p className="text-lg font-bold">{speaker.name}</p>
                                    <p>{speaker.designation}</p>
                                    <p>{speaker.department}</p>
                                    <p>{speaker.institute}</p>
                                </div>
                            </div>

                            <div className="py-3 text-justify text-sm">
                                {speaker.description}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </MainContainer>
    )
}