import "../styles/globals.css";
import Footer from "./src/components/Footer";
import Top from "./src/components/Top";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Top />
      <Component {...pageProps} />
      <Footer />
      <style jsx global>{``}</style>
    </div>
  );
}

export default MyApp;
