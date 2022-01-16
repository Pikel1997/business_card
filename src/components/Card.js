import React from 'react'
import {CardWrap, CardStyled, MainContentWrapperStyled, IntroductionWrapperStyled} from '../styled/StyledCard'
import { ImageWrapperStyled } from '../styled/ImageStyled'
import Image from './Image'
import Introduction from './Introduction'
import ContactCta from './ContactCta'
import About from './About'
import Socials from './Socials'
import location from '../assets/profile_final_2.png'

const Card = (props) => {
    return (
        <>
            <CardWrap>
                <CardStyled>
                    <ImageWrapperStyled>
                        <Image src={location} />
                    </ImageWrapperStyled>
                    <MainContentWrapperStyled>
                        <IntroductionWrapperStyled>
                            <Introduction name={props.name} occupation={props.occupation} website={props.website} />
                            <ContactCta email={props.email} linkedin={props.linkedin} />
                            <About about={props.about} interests={props.interests} />
                            <Socials twitter={props.twitter} instagram={props.instagram} github={props.github} />
                        </IntroductionWrapperStyled>
                    </MainContentWrapperStyled>
                </CardStyled>
            </CardWrap>
        </>
    )
}

Card.defaultProps = {
    name: "Murtuzaali Surti",
    email: "hey.murtuza@gmail.com",
    occupation: "Front-end Web Developer",
    website: "murtuzaalisurti.github.io",
    linkedin: "https://www.linkedin.com/in/murtuzaali-surti/",
    about: "Hey, myself Murtuza and I am a front-end web developer & a blogger. I am specialized in JavaScript and React.js",
    interests: "Some of my interests include blogging, web development, reading and googling stuff a lot!",
    github: "http://github.com/murtuzaalisurti",
    twitter: "http://twitter.com/murtuza_surti",
    instagram: "http://instagram.com/murtuzaali_surti"
}

export default Card
