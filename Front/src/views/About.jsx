import {ContainerGlobal, InfoRyM, InfoAboutMe,LinksImgs} from "./About"

const About = () =>{
    return(
        <ContainerGlobal>
            <InfoRyM>
                <h2>Rick and Morty API</h2>
                
                <p>Página creada y diseñada desde el Back-End hasta el Front-end de la mano de Henry.</p>
                <p></p>
                
            </InfoRyM>

            <InfoAboutMe>
                <h3>My Profile</h3>
                <ul>
                    <li>Name: Gonzalo Nicolás Púa</li>
                    <li>Country: Buenos Aires, Argentina</li>
                    <li>Graduate: Technical School n°1 "Otto Krause"</li>
                    <li>Title: Electronic Technician</li>
                </ul>
                <br/>
                <h3>Contacts</h3>
                <ul>
                    <li>E-mail: nicopua7@gmail.com</li>
                    <li>LinkedIn: Gonzalo Nicolas Pua</li>
                    <li>GitHub: NicoPua</li>
                </ul>
                <br/>
                <h3>Links</h3>
                <div>
                    <LinksImgs src="https://startupeable.com/directorio/wp-content/uploads/2021/03/d4face92a7abc37a414e0bc3acf4ff23ec588438.png"/>
                    <LinksImgs src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
                    <LinksImgs src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"/>
                    <LinksImgs src="https://w7.pngwing.com/pngs/403/269/png-transparent-react-react-native-logos-brands-in-colors-icon-thumbnail.png"/>
                </div>
            </InfoAboutMe>
        </ContainerGlobal>
    )
}

export default About;