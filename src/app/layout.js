// import NextTopLoader from "nextjs-toploader";
// import "react-quill/dist/quill.snow.css";
import "@/assets/css/dashboard.css";
import "@/assets/css/style.css";
import "@/assets/css/category.css";
import "@/assets/css/dropdownmenu.css";
import "@/assets/css/sidebar.css";
import "@/assets/css/animate.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

{
  /* <NextTopLoader color="#E60000" height={2} speed={200} /> */
}
