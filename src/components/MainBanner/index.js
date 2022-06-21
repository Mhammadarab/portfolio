import particleOptions from "./particles.json"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"
import profilePicture from "../../images/me.jpg"
import "./style.css"
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
                        <p>I enjoy creating useful website and applications!</p>
                        <p>I always like to learn new technologies</p>
                    </div>
                </div>
                
            </div>

        </>

    )
}