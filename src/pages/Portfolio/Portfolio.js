import styled from 'styled-components';
import ImgContainer from './Components/ImgContainer';

function Portfolio() {
   console.log( window.location.origin)
    return(
        <Container> 
            <div style={{padding: '0px 200px'}}>
            <ImgContainer />
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #D2B55B;
    height: 100vh;
    margin-top: -119px;
`;
  export default Portfolio;