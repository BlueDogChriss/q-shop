import { Statistics } from "@/components/Homepage/Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
    return (
        <section
            id="about"
            className="container py-24 sm:py-32"
        >
            <div className="bg-muted/50 border rounded-lg py-12">
                <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
                    {/* <img
                        src={pilot}
                        alt=""
                        className="w-[300px] object-contain rounded-lg"
                    /> */}
                    <div className="bg-green-0 flex flex-col justify-between">
                        <div className="pb-6">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                                    About{" "}
                                </span>
                                Q-Shop
                            </h2>
                            <p className="text-xl text-muted-foreground mt-4">
                                We&apos;re passionate about empowering entrepreneurs and businesses to build thriving online marketplaces. 
                                Founded by a team of experienced marketplace enthusiasts, we understand the challenges and opportunities that come with creating a successful online platform.
                                Our mission is to provide a user-friendly, all-in-one SaaS solution that removes the technical barriers 
                                and allows you to focus on what matters most - building your dream marketplace and fostering a vibrant community of buyers and sellers.
                            </p>
                        </div>

                        <Statistics />
                    </div>
                </div>
            </div>
        </section>
    );
};