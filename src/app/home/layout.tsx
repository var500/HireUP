import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={"flex flex-col h-screen justify-between "}>
      <div>
        <Navbar />

        {children}
      </div>
      <Footer />
    </section>
  );
}
