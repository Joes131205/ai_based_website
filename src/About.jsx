import coffee1 from "./assets/mathematical-formula-for-perfect-cup-of-coffee 1.png";
import coffee2 from "./assets/nathan-dumlao-ikU3J1nr52w-unsplash.jpg";
import coffee3 from "./assets/jonathan-sanchez-dbZQMh48y5A-unsplash 1.png";

function About() {
    return (
        <div className="flex flex-col align-middle text-center justify-around w-screen h-screen gap-1 bg-[#EEEEEE]">
            <h1 className="font-roboto text-5xl font-bold">About Us</h1>
            <div className="flex align-middle text-center justify-center gap-56">
                <p className="flex flex-col text-center align-middle justify-center text-3xl font-semibold font-poppins">
                    We are a sanctuary for coffee enthusiasts and community
                    <br />
                    seekers alike.
                </p>
                <img src={coffee1} className="w-64" />
            </div>
            <div className="flex flex-row-reverse align-middle text-center justify-center gap-56">
                <p className="flex flex-col text-center align-middle justify-center text-3xl font-semibold font-poppins">
                    At Urban Brews, we believe in more than just serving coffee;
                    <br />
                    we're crafting experiences.
                </p>
                <img src={coffee2} className="w-64" />
            </div>
            <div className="flex align-middle text-center justify-center gap-56">
                <p className="flex flex-col text-center align-middle justify-center text-3xl font-semibold font-poppins">
                    Meet our passionate team of baristas, dedicated to
                    <br />
                    perfecting each brew and creating connections.
                </p>
                <img src={coffee3} className="w-64" />
            </div>
        </div>
    );
}

export default About;
