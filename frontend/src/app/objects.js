import {
    BuildingLibraryIcon,
    ArrowPathIcon,
    MusicalNoteIcon,
    WrenchScrewdriverIcon,
    ChatBubbleLeftEllipsisIcon,
    ShieldCheckIcon,
    QuestionMarkCircleIcon,
    DevicePhoneMobileIcon,
} from '@heroicons/react/24/solid';

import logo from "../assets/logo.png"

export const navigation = [
    {
        name: 'Features',
        items: [
            {
                name: 'Artist Booking',
                path: '#artist',
                icon: MusicalNoteIcon,
                desc: 'Book your best artist'
            },
            {
                name: 'Venue Booking',
                path: '#venue',
                icon: BuildingLibraryIcon,
                desc: 'Find a perfect event center for your event'
            },
            {
                name: 'Organizer Booking',
                path: '#organizer',
                icon: ArrowPathIcon,
                desc: 'Get the best event planners'
            },
        ],
        href: "#features"
    },
    {
        name: 'About',
        items: [
            {
                name: 'Mission',
                path: '#about',
                icon: ShieldCheckIcon,
                desc: 'What is Feteflex?'
            }
        ],
        href: "#about"
    },
    {
        name: 'Contact',
        items: [
            {
                name: 'Join Waitlist',
                path: '#contact',
                icon: QuestionMarkCircleIcon,
                desc: 'Join our waitlist'
            },
            {
                name: 'Social Media',
                path: '#social-media',
                icon: DevicePhoneMobileIcon,
                desc: 'Follow us on our social handles'
            }
        ],
        href: "#contact"
    },
]

export const features = [
    {
        name: 'Artist Booking',
        description:
            "Elevate your venue's visibility! List with Feteflex to reach a broader audience and maximize your bookings effortlessly.",
        icon: MusicalNoteIcon,
        image: 'https://media.istockphoto.com/id/1337024740/photo/abstract-pastel-gray-color-and-gradient-white-light-background-in-studio-table-backdrops.jpg?s=612x612&w=0&k=20&c=_llvmKRKLzOPBdObLLWF_XxUX3JYduCkRgVFhWeqtkQ='
    },

    {
        name: 'Venue Booking',
        description:
            "Stand out in the crowded event planning market! showcase your services to a wider audience and simplify your bookings.",
        icon: BuildingLibraryIcon,
        image: 'https://media.istockphoto.com/id/1337024740/photo/abstract-pastel-gray-color-and-gradient-white-light-background-in-studio-table-backdrops.jpg?s=612x612&w=0&k=20&c=_llvmKRKLzOPBdObLLWF_XxUX3JYduCkRgVFhWeqtkQ='
    },
    {
        name: 'Organizer Booking',
        description:
            "Boost your artistry's exposure! Join Feteflex to connect with a wider audience and effortlessly increase your bookings",
        icon: ArrowPathIcon,
        image: 'https://media.istockphoto.com/id/1337024740/photo/abstract-pastel-gray-color-and-gradient-white-light-background-in-studio-table-backdrops.jpg?s=612x612&w=0&k=20&c=_llvmKRKLzOPBdObLLWF_XxUX3JYduCkRgVFhWeqtkQ='
    },
]

export const people = [
    {
        id: 1,
        name: 'Select Service Category',
        avatar: logo
    },
    {
        id: 2,
        name: 'Organized or Hosted Event',
        avatar:
            'https://media.istockphoto.com/id/1068618692/photo/business-network-concept.jpg?s=612x612&w=0&k=20&c=nhG46_71dEWiHbkbOh4R7u7WCQHUMQvj2KOHcDgVe44=',
    },
    {
        id: 3,
        name: 'Entertainment',
        avatar:
            'https://media.istockphoto.com/id/1204162313/photo/party-people-enjoy-concert-at-festival-summer-music-festival.jpg?s=612x612&w=0&k=20&c=G4w3LFJMXRFRDiZPVBNKlJZ3U3RKXt30YEEiPO6VZZI=',
    },
    {
        id: 4,
        name: 'Event Planning and Management',
        avatar:
            'https://media.istockphoto.com/id/1475798875/photo/business-woman-laptop-and-smile-for-phone-communication-or-reading-at-the-office-happy-female.jpg?s=612x612&w=0&k=20&c=jiqbqgCQGLuIc2NcqxX3mmWAGOV_GzHAGMIb6q3b-u0=',
    },
    {
        id: 5,
        name: 'Venue Owner',
        avatar:
            'https://media.istockphoto.com/id/1333513314/photo/portrait-of-restaurant-owner-using-laptop.jpg?s=612x612&w=0&k=20&c=e90aFc4Tn6R6aIVlPBu10q1hyGOZS10I2zGB_vezYt0=',
    },
]