import React from "react";
import { AiOutlineProfile } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import JS from "../assets/images/JS.svg";
import css from "../assets/images/css.svg";
import firebase from "../assets/images/firebase.svg";
import gitIcon from "../assets/images/github.svg";
import html from "../assets/images/html.svg";
import java from "../assets/images/java.svg";
import portfolio from "../assets/images/portfolio.png";
import reactIcon from "../assets/images/react.svg";
import sh from "../assets/images/sh.png";
import tailwindIcon from "../assets/images/tailwind.svg";


const linkenIn = React.createElement(FaLinkedin);
const GitHub = React.createElement(IoLogoGithub);
const Mail = React.createElement(CiMail);
const profile = React.createElement(AiOutlineProfile);


export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
];

export const sideLinks = [
    { href: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile", label: "Linkedin", img: linkenIn, color: "linkedInColor" },
    { href: "https://github.com/xyzu2000?tab=repositories", label: "GitHub", img: GitHub, color: "gitColor" },
    { href: "mailto:bartekwojnarowicz2000@gmail.com", label: "Mail", img: Mail, color: "mailColor" },
    { href: "", label: "Telefon", img: profile, color: "profileColor" },
];

export const technologies = [
    { label: "HTML", img: html },
    { label: "CSS", img: css },
    { label: "Java", img: java },
    { label: "JavaScript", img: JS },
    { label: "React.JS", img: reactIcon },
    { label: "TailwindCSS", img: tailwindIcon },
    { label: "GitHub", img: gitIcon },
    { label: "Firebase", img: firebase },
]

export const work = [
    { img: portfolio, github: "https://github.com/xyzu2000/portfolio", live: "https://bwp00.netlify.app", name: "Portfolio" },
    { img: sh, github: "https://github.com/xyzu2000/shoeli", live: "https://shoeli.netlify.app", name: "Nike" },
]