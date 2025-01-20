import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import tailwind from './tailwind.png';
import craftcms from './craftcms.png';
import postgreSQL from './postgreSQL.png';
import gcolab from './gcolab.png';
import android_studio from './android-studio.png';
import { StaticImageData } from 'next/image';

export const assets: Assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    tailwind,
    craftcms,
    postgreSQL,
    gcolab,
    android_studio
};

export const workData: WorkData[] = [
    {
        title: 'Wine E-Commerce',
        description: 'Web Design',
        bgImage: 'work-1.png',
        urlGH: 'https://github.com/vinoteca-ecommerce/wineEcommerce',
        urlD: 'https://wine-ecommercew.vercel.app/'
    },
    {
        title: 'Poke App',
        description: 'SPA',
        bgImage: 'work-2.png',
        urlGH: 'https://github.com/GonzaloHz/PI-POKEMON-HENRY/tree/main/client/src',
        urlD: 'https://vimeo.com/722710172?turnstile=0.23mNw4lpFmc9HpkXf6s9mQ-fLMOFHQQ5CptaNS4XyMf8LTSDaV2jzyIAfbTmwwW0rbEGX_nB4dy9YZYtzcC_AsqoALFik3ZMZMrL8yCsxj-OjXfNZUDBr0tT0lZLpv6qbPgmZu8T5VNJtAIJiTBgTFGJ2c7vota-02tP4_MBo3i7LhIb4PK5S01s-IBR4-Q_hPpcmp0yrq3g9Re8vO2AENGL5mPD0CmEPKfvt9ggIbERaK88kic5EUF4zn_NYncrtMdSoVJWfoeE5ehq3V2rOLDh_0i1bJYi1--7u3swjDjokAU6fm0owSU-y_6IvswrFmYynFliePTJJ9MUJ_2f_6QISrY98yfoNDi4Cca_Gu4uRODOhr6rIJTubTssV6BX89U8CpJm1JFMRdT0Oz9iwPrm2f65Mx0P7utvam1gX7l6BPZNMFMTZklj_YYiPWsddvuvftug1fVuiv76ZQC6DxSRktm0ftXy4hkDMTdRMvh77Xn06ZN722sa5Q5EwT-3q9p5K-Et_XUhFdEk2t_RM3mHZiJXPfWwUOVJVfvVmU9oNKyLMdItmQM5CpmOxgTyz4vpkoWRl-diJT6UzHIC4dfQQppDh-aqwRAe94f63zBdwgGZg63wC5cOT3GyYbHWSGeqbiyxrS6iAgapn60j4dulaCZbrWPCK5ZIEttFP3GErWdvwxkoCFk0iA_ZwKellEHUVlIqpOa2D1S5Z3a0Emj73hvGLv8emN79b7ebWOaZq_Mpmi81Ui970cSC4xz3unxZEhws8RHSffT5Tq4j9W2UCBl77qpZS9QHxpK1tM-k-BMnkQ8HeS2v8e30WFtzkQVqSRHJH8a8EwDrPiWyOw.-vXxPuwAGQaNV9l6xznvYw.b66950cb96a0101dfb4673fb3cbfa02174624eff8ff5182124dba40d139c85ed'
    },
    {
        title: 'My Portfolio',
        description: 'Web Design',
        bgImage: 'work-3.png',
        urlGH: 'https://github.com/GonzaloHz/portfolio',
        urlD: 'https://gonzalohz-portfolio.vercel.app/'
    }
]

export const infoList:InfoList[] = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'JavaScript, ReactJs, NextJs, NodeJs, SQL, NoSQL, HTML, CSS' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Future Computer and Biomedical Engineer' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData: StaticImageData[] = [
    assets.vscode, assets.mongodb, assets.figma, assets.git, assets.tailwind, assets.craftcms, assets.postgreSQL, assets.gcolab, assets.android_studio
];

interface Assets {
    user_image: StaticImageData,
    code_icon: StaticImageData,
    code_icon_dark: StaticImageData,
    edu_icon: StaticImageData,
    edu_icon_dark: StaticImageData,
    project_icon: StaticImageData,
    project_icon_dark: StaticImageData,
    vscode: StaticImageData,
    firebase: StaticImageData,
    figma: StaticImageData,
    git: StaticImageData,
    mongodb: StaticImageData,
    right_arrow_white: StaticImageData,
    logo: StaticImageData,
    logo_dark: StaticImageData,
    mail_icon: StaticImageData,
    mail_icon_dark: StaticImageData,
    profile_img: StaticImageData,
    download_icon: StaticImageData,
    hand_icon: StaticImageData,
    header_bg_color: StaticImageData,
    moon_icon: StaticImageData,
    sun_icon: StaticImageData,
    arrow_icon: StaticImageData,
    arrow_icon_dark: StaticImageData,
    menu_black: StaticImageData,
    menu_white: StaticImageData,
    close_black: StaticImageData,
    close_white: StaticImageData,
    right_arrow: StaticImageData,
    send_icon: StaticImageData,
    right_arrow_bold: StaticImageData,
    right_arrow_bold_dark: StaticImageData,
    tailwind:StaticImageData,
    craftcms:StaticImageData,
    postgreSQL: StaticImageData,
    gcolab:StaticImageData,
    android_studio:StaticImageData
}

export interface WorkData {
    title: String,
    description: String,
    bgImage: string,
    urlGH: string,
    urlD: string,
}

interface InfoList {
    icon: StaticImageData,
    iconDark: StaticImageData,
    description: String,
    title: String
}
