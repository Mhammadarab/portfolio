import particleOptions from "./particles.json"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"
import profilePicture from "../../images/me2jpg.jpg"
import "./style.css"
import {SiGmail} from "react-icons/si"
import {AiFillLinkedin} from "react-icons/ai"
import {FiGithub} from "react-icons/fi"
export const MainBanner = () =>{
    const particlesInit = async (main) => {
        await loadFull(main);
      };
    return (
        <>
            <div className="BannerWrapper">
                <Particles
                id={"mainBannerParticles"}
                init={particlesInit}
                options={{...particleOptions}}>
                </Particles>
                <div className="ContentWrapper">
                    <img className="MyImage" src={profilePicture}/>
                    <div className="DescriptionWrapper">
                        <p>Hello, My name is Mohammad</p>
                        <p>A Software development student at Grafisch Lyceum Rotterdam</p>
                        <p>I enjoy creating useful websites and applications!</p>
                        <p>I always like to learn new technologies</p>
                    </div>
                    <div className="SocialsWrapper">
                        <a href="mailto:mhammadarab55@gmail.com">
                            <div className="IconWrapper">
                                <SiGmail size="50%"></SiGmail>
                            </div>
                        </a>
                        <a target={"_blank"} href="https://www.linkedin.com/in/mohammad-arab-86a326223/">
                            <div className="IconWrapper">
                                <AiFillLinkedin size="50%"></AiFillLinkedin>
                            </div>
                        </a>
                        <a target={"_blank"} href="https://github.com/M0Arab">
                            <div className="IconWrapper">
                                <FiGithub size="50%"></FiGithub>
                            </div>
                        </a>
                    </div>
                </div>
                
            </div>

        </>

    )
}
