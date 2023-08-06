import '@/styles/globals.css'
import PageHead from "@/components/common/page-head/PageHead";
import NavBar from "@/components/common/navbar/NavBar";

export default function App({ Component, pageProps }) {
  return (
      <>
      <PageHead />
      <NavBar />
      <Component {...pageProps} />
      <style jsx global>{`
            .container {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              text-align: center;
              position: relative;
            }
        `}
      </style>
      </>
  );
