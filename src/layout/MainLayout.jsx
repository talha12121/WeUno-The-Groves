import { Container } from "@mui/material";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";


const MainLayout = ({ children }) => {
  return (
  
    <div style={styles.container}>
      <Header />
      <Hero />
        <Container maxWidth={'xl'} sx={{px:"0 !important"}}>
      <main style={styles.main}>{children}</main>
      </Container>
      <Footer />
     
    </div>
  
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    bgcolor:'#F4F4F4'
  },
  main: {
    // padding: "24px",
    flex: 1,
  },
};

export default MainLayout;
