// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import styled from 'styled-components/macro';
// import Header from "./Header";
// import Footer from "./Footer";
// import SideBar from "./SideBar";

// import StyledToastContainer from '../components/ToastContainer';

import Container from '../components/container';

// const ContentWrapper = styled.div`
//   padding: 0 15px;
//   margin-top: 30px;
//   display: flex;

//   @media (min-width: 768px) {
//     margin-top: 80px;
//   }
// `

const MainLayout = ({ children }) => {
    return (
      <Container fullVertical >
        {/* <Header /> */}
          <main>
            {/* <ContentWrapper> */}
              {/* <SideBar /> */}
              {children}
            {/* </ContentWrapper> */}
          </main>
        {/* <Footer />
        <StyledToastContainer 
          autoClose={3000}
          pauseOnFocusLoss={true}
          hideProgressBar
          theme="light"
        /> */}
      </Container>
    );
  };

export default MainLayout;