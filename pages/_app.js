import "@/styles/globals.css";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

export default function App({ Component, pageProps }) {
    return (
        <div className={roboto.className}>
            <ThemeProvider attribute="class">
                <Navbar />
                <Component {...pageProps} />
            </ThemeProvider>
        </div>
    );
}
