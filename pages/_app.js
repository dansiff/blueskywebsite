import { ThemeProvider } from "next-themes";
import { ParallaxProvider } from 'react-scroll-parallax';
import "../css/tailwind.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <ParallaxProvider scrollAxis='horizontal'>
                <Component {...pageProps} />
            </ParallaxProvider>
        </ThemeProvider>
    );
}

export default MyApp;
