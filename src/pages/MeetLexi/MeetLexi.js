import styled from 'styled-components';
import lexi from '../../images/Lexi.jpg';
import { useNavigate } from 'react-router-dom';
import './meetLexi.css'

function MeetLexi({homePage = false}) {
    const navigate = useNavigate()
    return(
        <Container style={homePage ? {} : {marginTop: -45} }>
            <ResponsiveContainer>
                <Column>
                    <h1 className='font-header' style={{fontSize: 40}}>Kansas City</h1>
                    <h1 className='font-header'>Lifestyle - Maternity - Coupl</h1>
                    <h1 className='font-header' style={{fontSize: 40}}>Photographer</h1>
                </Column>
                <Column>
                    <p style={{ fontSize: 20, textAlign: 'center'}}> this is where a bio goes this is where a bio goes this is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goesthis is where a bio goes this is where a bio goes</p>
                </Column>
            </ResponsiveContainer>
            <h1 className='font-link' style={{margin: ' 0 auto', fontSize: 40, textAlign: 'center'}}>"Some beautiful Photography Quote"</h1>
            <img src={lexi} alt='lexi' style={{marginLeft: '10px', marginRight: 'auto',height: 'auto', width: 300, boxShadow: '12px 12px 2px 1px rgba(0, 0, 0, .2)'}}/>
            <img src={lexi} alt='lexi' style={{marginLeft: 'auto', marginRight: '10px',height: 'auto', width: 300, boxShadow: '12px 12px 2px 1px rgba(0, 0, 0, .2)'}}/>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FDFEFF;
    padding: 10px 100px;
    height: 200vh;
    @media only screen and (max-width: 600px){
        padding: 0px;
    }
`;

const ResponsiveContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      margin: 0 auto;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vw;
    @media only screen and (max-width: 600px) {
        width: 90vw;
    }
`;

const imgContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40vw;
    @media only screen and (max-width: 600px) {
        width: 90vw;
    }
`

  export default MeetLexi;