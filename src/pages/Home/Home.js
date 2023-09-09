import styled from 'styled-components';
import './home.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import MeetLexi from '../MeetLexi/MeetLexi' 


function Home({onBodyClick}) {
const navigate = useNavigate()


    return (
      <>
      <Column className="bg" onClick={()=>onBodyClick()}>
        <div style={{ margin: 'auto auto auto auto', textAlign: 'center'}}>
          <p style={{color: 'white', fontSize: 25}}>WELCOME TO</p>
          <p style={{color: 'white', fontSize: 55, marginTop: '-3%'}}>Lexi Lakota Photography</p>
          <Button onClick={()=>navigate('/contact')}>contact</Button>
        </div>
      </Column>
        <ResponsiveContainer >
          <Row>
            <FontAwesomeIcon icon={faInstagram} color='white' size='2x' style={{marginRight: 5}}/>
            <p style={{color: '#FFF', margin: 'auto' }}>@LexiLakotaPhotography</p> 
          </Row>
          <Row>
            <FontAwesomeIcon icon={faFacebook} color='white' size='2x' style={{marginRight: 5}}/>
            <p style={{color: '#FFF', margin: 'auto' }}>@LexiLakotaPhotography</p> 
          </Row>
          <Row>
            <FontAwesomeIcon icon={faEnvelope} color='white' size='2x' style={{marginRight: 5}}/>
            <p style={{color: '#FFF', margin: 'auto' }}>@LexiLakotaPhotography</p> 
          </Row>
        </ResponsiveContainer>
      <div style={{height: '100vh', marginTop: 8.65}}>
              <MeetLexi homePage={true}/>
        </div>
      </>
    );
  }

const Button = styled.button`
    background-color: white;
    border-radius: 20px;
    border: 1px solid white;
    width: 150px;
    height: 40px;
    margin-top: -20%;
    cursor: pointer;
  `;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;

`;
const ResponsiveContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    margin-top: -40px;
    width: 90vw;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      margin-top: -130px;
      margin-left: auto;
    }
`;
const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    @media only screen and (max-width: 600px) {
      margin-top: 10px;
    }
    `;

  export default Home;