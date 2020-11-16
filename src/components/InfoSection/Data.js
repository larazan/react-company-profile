import gmb1 from '../../images/1.png'
import gmb2 from '../../images/2.png'
import gmb3 from '../../images/3.png'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get Started',
    imgStart: false,
    img: require('../../images/1.png'),
    gambar: gmb1,
    alt: 'Car',
    dark: true,
    dark2: true,
    primary: true,
    darkText: false 
}

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'We have you covered no matter where you are located. All you need is an internet connection an a phone or computer.',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: require('../../images/2.png'),
    gambar: gmb2,
    alt: 'Piggybank',
    dark: false,
    dark2: true,
    primary: false,
    darkText: true, 
}

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our Team',
    headline: 'Creating an account is extremely easy',
    description: "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
    buttonLabel: 'Start Now',
    imgStart: false,
    img: require('../../images/3.png'),
    gambar: gmb3,
    alt: 'Paper',
    dark: false,
    dark2: true,
    primary: false,
    darkText: true, 
}
