function Contact() {
    return (
        <div className="w-screen h-[55rem] flex flex-col items-center justify-center text-center gap-10">
            <h1 className="text-4xl font-bold">Contact Us!</h1>
            <p>
                Reach out to us for inquiries, feedback, or to book a private
                event.
            </p>
            <form className="flex flex-col items-center justify-center text-center gap-10">
                <div>
                    <label
                        className="block text-gray-700 text-md font-bold mb-2 "
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label
                        className="block text-gray-700 text-md font-bold mb-2 "
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-72 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label
                        className="block text-gray-700 text-md font-bold mb-2 "
                        htmlFor="message"
                    >
                        Message
                    </label>
                    <textarea
                        placeholder="Message"
                        className="w-72 h-72 p-2 resize-none rounded-xl shadow appearance-none border leading-tight focus:outline-none focus:shadow-outline"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-72 h-14 bg-accent_color text-black text-2xl font-bold transition rounded-2xl hover:bg-[#f8b539] shadow-md shadow-accent_color"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;
