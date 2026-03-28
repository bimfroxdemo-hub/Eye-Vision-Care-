import { Eye, Droplet, Microscope, Zap, ScanFace, Glasses } from 'lucide-react';
import { ClipboardPlus, User, Calendar, CheckCircle } from "lucide-react";



export const doctorsDetails = [
    {
        name: "Dr. Anthony Perez",
        role: "Macular Degeneration Expert",
        img: "/src/Image/doc1.jpg",
    },
    {
        name: "Dr. Olivia Martinez",
        role: "Retina Surgeon",
        img: "/src/Image/doc2.jpg",
    },
    {
        name: "Dr. Karen Perez",
        role: "Glaucoma Specialist",
        img: "/src/Image/doc3.jpg",
    },
    {
        name: "Dr. Tyler Morgan",
        role: "Vision Therapy Specialist",
        img: "/src/Image/doc4.jpg",
    },
];


export const images = [
    {
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1400&auto=format&fit=crop",
        title: "Modern Reception & Waiting Area",
        className: "md:col-span-8 h-96"
    },
    {
        url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1400&auto=format&fit=crop",
        title: "Advanced Diagnostics Lab",
        className: "md:col-span-4 h-96"
    },
    {
        url: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1400&auto=format&fit=crop",
        title: "Private Consultation Rooms",
        className: "md:col-span-4 h-80"
    },
    {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1400&auto=format&fit=crop",
        title: "Sterile Surgical Suites",
        className: "md:col-span-8 h-80"
    }
];

export const services = [
    {
        img: "/src/Image/service1.jpg",
        icon: <Eye size={32} strokeWidth={1.5} />,
        title: "Comprehensive Eye Exams",
        description: "Advanced diagnostic testing to evaluate your overall eye health and visual acuity with pinpoint accuracy.",
        color: "from-teal/20 to-transparent"
    },
    {
        img: "/src/Image/service2.jpg",
        icon: <Zap size={32} strokeWidth={1.5} />,
        title: "Laser Vision Correction",
        description: "State-of-the-art LASIK and PRK procedures to reduce or eliminate your dependence on glasses and contacts.",
        color: "from-navy/10 to-transparent"
    },
    {
        img: "/src/Image/service3.jpg",
        icon: <Microscope size={32} strokeWidth={1.5} />,
        title: "Cataract Surgery",
        description: "Premium lens implants and laser-assisted cataract removal for crystal clear vision restoration.",
        color: "from-teal/20 to-transparent"
    },
    {
        icon: <Droplet size={32} strokeWidth={1.5} />,
        title: "Dry Eye Treatment",
        description: "Targeted therapies and advanced tear film analysis to provide lasting relief from dry eye syndrome.",
        color: "from-navy/10 to-transparent"
    },
    {
        icon: <ScanFace size={32} strokeWidth={1.5} />,
        title: "Glaucoma Management",
        description: "Early detection and personalized treatment plans using the latest in intraocular pressure monitoring.",
        color: "from-teal/20 to-transparent"
    },
    {
        icon: <Glasses size={32} strokeWidth={1.5} />,
        title: "Optical Boutique",
        description: "Curated selection of designer frames and precision-crafted lenses tailored to your lifestyle.",
        color: "from-navy/10 to-transparent"
    }
];

export const products = [
    {
        category: "Designer Frames",
        name: "Aura Titanium Series",
        description: "Ultra-lightweight, aerospace-grade titanium frames combining durability with minimalist elegance.",
        price: "From $249",
        image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=1400&auto=format&fit=crop",
        rating: 4.9
    },
    {
        category: "Premium Sunglasses",
        name: "Lumina Polarized",
        description: "Advanced UV400 protection with glare-reducing polarization for ultimate visual comfort outdoors.",
        price: "From $189",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1400&auto=format&fit=crop",
        rating: 4.8
    },
    {
        category: "Contact Lenses",
        name: "AquaBreath Dailies",
        description: "High oxygen permeability silicone hydrogel lenses for all-day moisture and irritation-free wear.",
        price: "$45 / box",
        image: "https://images.unsplash.com/photo-1559075480-1a108a8a4740?q=80&w=1400&auto=format&fit=crop",
        rating: 4.9
    },
    {
        category: "Specialty Lenses",
        name: "BlueShield Digital",
        description: "Precision-crafted lenses designed to filter harmful blue light and reduce digital eye strain.",
        price: "Add $89",
        image: "https://images.unsplash.com/photo-1625591342275-e87f174092b6?q=80&w=1400&auto=format&fit=crop",
        rating: 5.0
    }
];

export const locations = [
    {
        name: "Praniti Eye Vision Care",
        address: "Shop no.26 Omkar plazza near Priyanka bhestan surat 395023",
        phone: "+91 9876543210",
        hours: "Mon - Sun: 9 am - 10 pm | Open 24/7",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop",
        getDirection: "https://maps.app.goo.gl/x14T7zF7g7xTpLMy5",
        isMain: true
    },
    {
        name: "Noor Eye Care and Opticals",
        address: "shop no 3&4 Asma complex first floor opposite sagar bakery sabji mandi road unn 394210",
        phone: "+91 9876543210",
        hours: "Mon-Fri: 9am - 5pm | Sat: Closed",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1400&auto=format&fit=crop",
        getDirection: "https://maps.app.goo.gl/jqTyNa3Psxm4v2D29",
        isMain: false
    },
    {
        name: "Eye Vision Care",
        address: "shop no 3 Sai Krupa society opposite Shree ji nursing home Paligam sachin Surat 394230",
        phone: "+1 (800) 555-0103",
        hours: "Mon-Thu: 7am - 4pm | Fri-Sat: Closed",
        image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=1400&auto=format&fit=crop",
        getDirection: "https://maps.app.goo.gl/cboP4vfaVv8QazPUA",
        isMain: false
    }
    ,
    {
        name: "Eye Vision Care and Opticals",
        address: "plot no 2 Hari om nagar opposite Rishabh jeweller near paras cinema police colony pandesara 394221",
        phone: "+91 9506531385",
        hours: "Mon-Thu: 7am - 4pm | Fri-Sat: Closed",
        image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=1400&auto=format&fit=crop",
        getDirection: "https://maps.app.goo.gl/1CBcmEjcCsLzA44Y7",
        isMain: false
    }
    ,
    {
        name: "Eye Vision Care",
        address: "shop no 4 Sai enclave complex near Swapna shrusti circle bhestan 395023",
        phone: "+1 (800) 555-0103",
        hours: "Mon-Thu: 7am - 4pm | Fri-Sat: Closed",
        image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=1400&auto=format&fit=crop",
        getDirection: "https://maps.app.goo.gl/uabvysbyQ7xnz5tB8",
        isMain: false
    }
    ,
    {
        name: "North Hills Surgical Center",
        address: "shop no 19 royal residency opposite unn hospital 394210",
        phone: "+1 (800) 555-0103",
        hours: "Mon-Thu: 7am - 4pm | Fri-Sat: Closed",
        image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?q=80&w=1400&auto=format&fit=crop",
        getDirection: "https://maps.app.goo.gl/x14T7zF7g7xTpLMy5",
        isMain: false
    }
];



export const steps = [
    {
        icon: <ClipboardPlus size={22} />,
        title: "Select Your Service",
        desc: "Choose from vision tests, LASIK screening, cataract evaluation, retina care & more.",
        number: "01",
    },
    {
        icon: <User size={22} />,
        title: "Pick Your Specialist",
        desc: "View expert ophthalmologists & optometrists based on specialty and availability.",
        number: "02",
    },
    {
        icon: <Calendar size={22} />,
        title: "Choose Date & Time",
        desc: "Browse available slots and book a time that fits your schedule.",
        number: "03",
    },
    {
        icon: <CheckCircle size={22} />,
        title: "Confirm & Attend",
        desc: "Complete booking and receive instant confirmation—visit clinic or join online.",
        number: "04",
    },
];
