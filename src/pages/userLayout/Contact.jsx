import React, { useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";

// Initialize AOS
AOS.init();

const ContactPage = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("https://your-api-endpoint/contact", {
                email,
                message,
            });
            console.log(response.data);
            toast("Message sent successfully!");
        } catch (error) {
            console.error(error);
            toast.error("Failed to send message. Please try again later.");
        } finally {
            setLoading(false);
            setEmail("");
            setMessage("");
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gray-100 px-4"
            data-aos="fade-up"
        >
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-lg rounded-lg p-8 md:w-1/2 w-full"
            >
                <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 h-32"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-teal text-white py-2 rounded-md hover:bg-white hover:text-teal transition"
                >
                    {loading ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    );
};

export default ContactPage;
