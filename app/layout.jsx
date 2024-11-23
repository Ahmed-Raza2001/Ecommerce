import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { Provider as OrderProvider } from "./context/CartContext";
import { Provider as ProductProvider } from "./context/ProductContext";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Xtreme Burgers",
  description: "Xtreme Burgers Order App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <OrderProvider>
          <ProductProvider>
            <ToastContainer
              position="bottom-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              theme="colored"
              transition={Bounce}
            />
            {children}
            <Footer />
          </ProductProvider>
        </OrderProvider>
      </body>
    </html>
  );
}
