import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faGrip, faHandHoldingDollar, faCamera, faHandshakeSimple, faPhone, faCopyright } from '@fortawesome/free-solid-svg-icons'

function Nav({navOpen, onNavClick}) {
    const navigate = useNavigate()

    const navigateTo = (link) => {
        onNavClick()
        navigate(link)
    }
    return(
        navOpen ? 
        <Container>
            <Column>
            <div style={{display:'flex', flexDirection: 'row'}}>
                <FontAwesomeIcon style={{margin: 'auto 10 auto 15'}} icon={faCamera} />
                <NavLink>Lexi Lakota Photography</NavLink>
            </div>
            <NavLinkButton onClick={()=>navigateTo('/')} >
                <FontAwesomeIcon style={{margin: 'auto', marginRight: '10px'}} icon={faHouse} />
                <NavLink >HOME</NavLink>
            </NavLinkButton>
            <NavLinkButton  onClick={()=>navigateTo('/portfolio')}>
                <FontAwesomeIcon style={{margin: 'auto', marginRight: '10px'}} icon={faGrip} />
                <NavLink>PORTFOLIO</NavLink>
            </NavLinkButton>
            <NavLinkButton  onClick={()=>navigateTo('/contact')}>
                <FontAwesomeIcon style={{margin: 'auto', marginRight: '10px'}} icon={faHandHoldingDollar} />
                <NavLink>PRICING</NavLink>
            </NavLinkButton>
            <NavLinkButton onClick={()=>navigateTo('/meetlexi')}>
                <FontAwesomeIcon style={{margin: 'auto', marginRight: '10px'}} icon={faHandshakeSimple} />
                <NavLink >MEET LEXI</NavLink>
            </NavLinkButton>
            <NavLinkButton  onClick={()=>navigateTo('/contact')}>
                <FontAwesomeIcon style={{margin: 'auto', marginRight: '10px'}} icon={faPhone} />
                <NavLink>CONTACT</NavLink>
            </NavLinkButton>
            
            <div style={{display:'flex', flexDirection: 'row', position: 'absolute', bottom: 5}}>
                <FontAwesomeIcon style={{margin: 'auto 10 auto 15'}} icon={faCopyright} />
                <p>Lexi Lakota Photography</p>
            </div>
            </Column>
        </Container>
        : <></>
    )
}

const Container = styled.div`
    position: absolute;
    left: 60%;
    top: 0px;
    z-index: 5;
    background-color: #fff;
    width: 40vw;
    height: 100vh;
    @media only screen and (max-width: 600px) {
        left: 0px;
          width: 100vw;
      }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;

`;
const NavLinkButton = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    cursor: pointer;
`

const NavLink = styled.p`
    font-family: Raleway-bold;
    font-size: 25px;
`

export default Nav;