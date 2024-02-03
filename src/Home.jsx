function Home() {
    return (
        <div className="bg-hero-image w-screen h-screen flex flex-col justify-center align-center bg-cover transform -scale-x-100 contrast-125 mb-10 rounded-b-[10%]">
            <div className="transform -scale-x-100 text-5xl text-white font-bold mx-16 font-poppins">
                <h1>
                    Welcome to{" "}
                    <span className="text-accent_color">Urban Brews</span>,{" "}
                    <br />
                    where every sip tells a story.
                </h1>
                <br />
                <p className="text-2xl font-medium">
                    Discover our handcrafted coffee blends and cozy ambiance.
                </p>
            </div>
        </div>
    );
}

export default Home;
