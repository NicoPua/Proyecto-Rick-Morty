import {ContainerGlobal, InfoRyM,       InfoAboutMe,ImgProfile,ContImgs,LinksImgs} from "./About"

const About = () =>{
    return(
        <ContainerGlobal>
            <InfoRyM>
                <h2>Rick and Morty API</h2>
                
                <p>-Página creada y diseñada desde el Back-End hasta el Front-end de la mano de Henry.-</p>
                <h3>Descripción</h3>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quis, et quae dicta illo iure minus ad provident aliquam quaerat aut, magnam aspernatur quo accusantium itaque vel repellat molestiae eius.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quis, et quae dicta illo iure minus ad provident aliquam quaerat aut, magnam aspernatur quo accusantium itaque vel repellat molestiae eius.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quis, et quae dicta illo iure minus ad provident aliquam quaerat aut, magnam aspernatur quo accusantium itaque vel repellat molestiae eius.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quis, et quae dicta illo iure minus ad provident aliquam quaerat aut, magnam aspernatur quo accusantium itaque vel repellat molestiae eius.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quis, et quae dicta illo iure minus ad provident aliquam quaerat aut, magnam aspernatur quo accusantium itaque vel repellat molestiae eius.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quis, et quae dicta illo iure minus ad provident aliquam quaerat aut, magnam aspernatur quo accusantium itaque vel repellat molestiae eius.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quis, et quae dicta illo iure minus ad provident aliquam quaerat aut, magnam aspernatur quo accusantium itaque vel repellat molestiae eius.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quis, et quae dicta illo iure minus ad provident aliquam quaerat aut, magnam aspernatur quo accusantium itaque vel repellat molestiae eius.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt quis, et quae dicta illo iure minus ad provident aliquam quaerat aut, magnam aspernatur quo accusantium itaque vel repellat molestiae eius.
                </p> 
            </InfoRyM>

            <InfoAboutMe>
                <h3>My Profile</h3>
                <ImgProfile src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRghxLUSuc5cd4DYd_vqSF4HF4bGT2GMCRgzX408QhB_dFRInZ5Cvy3rikPAwXOtEVesnQ&usqp=CAU"/>
                <ul>
                    <li>Name: Gonzalo Nicolás Púa</li>
                    <li>Country: Buenos Aires, Argentina</li>
                    <li>Graduate: Technical School n°1 "Otto Krause"</li>
                    <li>Title: Electronic Technician</li>
                </ul>
                
                <h3>Contacts</h3>
                <ul>
                    <li>E-mail: nicopua7@gmail.com</li>
                    <li>LinkedIn: Gonzalo Nicolas Pua</li>
                    <li>GitHub: NicoPua</li>
                </ul>
                
                <h3>Links</h3>
                <ContImgs>
                    <a target="_blank" rel="noopener noreferrer" href='https://www.soyhenry.com/'>
                        <LinksImgs src="https://startupeable.com/directorio/wp-content/uploads/2021/03/d4face92a7abc37a414e0bc3acf4ff23ec588438.png"/>
                    </a>

                    <a target="_blank" rel="noopener noreferrer" href='https://github.com/NicoPua'>
                        <LinksImgs src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
                    </a>

                    <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/gonzalo-nicolas-pua-a962901b6/'>
                        <LinksImgs src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/800px-LinkedIn_icon_circle.svg.png"/>
                    </a>

                    <a target="_blank" rel="noopener noreferrer" href='https://es.reactjs.org/'>
                        <LinksImgs src="http://ibthemespro.com/docs/beny/img/side-nav/cmm4.png"/>
                    </a>
                </ContImgs>
            </InfoAboutMe>
        </ContainerGlobal>
    )
}

export default About;