import { Eye, Droplet, Microscope, Zap, ScanFace, Glasses } from 'lucide-react';
import { ClipboardPlus, User, Calendar, CheckCircle } from "lucide-react";
import shop01 from "/src/Image/stores/Omkar’s plaza.jpg";
import shop02 from "/src/Image/stores/Unn hospital.jpg";
import shop03 from "/src/Image/stores/Sachin paligav.jpg";
import shop04 from "/src/Image/stores/Pandesara.jpg";
import shop05 from "/src/Image/stores/store5.jpeg";
import shop07 from "/src/Image/stores/stores7.jpeg";

import doct01 from "/src/Image/doctor/doct01.jpeg";
import doct02 from "/src/Image/doctor/doct02.jpeg";
import doct03 from "/src/Image/doctor/doct03.jpg";
import doct04 from "/src/Image/doctor/doct04.jpeg";    
import doct05 from "/src/Image/doctor/doct05.jpeg";
import doct06 from "/src/Image/doctor/doct06.jpeg";
import doct07 from "/src/Image/doctor/doct07.jpeg";
import doct08 from "/src/Image/doctor/doct08.jpeg";

import dryeye from "/src/Image/deyeye.jpg";
import Glaucoma from "/src/Image/glaucoma.jpeg";
import Optical  from "/src/Image/optical.jpeg";
import Laser from "/src/Image/laser.jpeg";
import Comprehensive from "/src/Image/Comprehensive.jpeg";
import Cataract from "/src/Image/cataract.jpeg";
import lence from "/src/Image/lence.jpg";
import Specialty from "/src/Image/specialty.jpg";
import wating from "/src/Image/waitng.jpeg";
import faq1 from "/src/Image/faq1.jpeg";
import Sterile from "/src/Image/sterile.jpeg";

export const doctorsDetails = [
    {
        name: "MR. NITINKUMAR HIWARALE",
        role: "Optometrist & co-Founder",
        img: doct03,
    },
    {
        name: "MR. AFTAB ALAM",
        role: "Optometrist & Co-Founder",
        img: doct01,
    },
    {
        name: "MR. SACHIN KUSHWAHA",
        role: "Optometrist",
        img: doct02,
    },
    
    {
        name: "MR. SHAILESH KUSHWAHA",   
        role: "Optometrist",
        img: doct04,
    },
    {
        name: "Miss. PRATIBHA HIWARALE",
        role: "Optometrist",
        img: doct05,
    },
    {
        name: "MR. ANIKET HIVRALE",
        role: "Optometrist",
        img: doct06,
    },
    {
        name: "MR. ALI HASAN",
        role: "Optometrist",
        img: doct07,
    },
    {
        name: "MR. ABHILASH WAVHAL",
        role: "Optometrist",
        img: doct08,
    },
];


export const images = [
    {
        url: wating,
        title: "Modern Reception & Waiting Area",
        className: "md:col-span-8 h-96"
    },
    {
        url: faq1,
        title: "Advanced Diagnostics Lab",
        className: "md:col-span-4 h-96"
    },
    {
        url: Optical,
        title: "Private Consultation Rooms",
        className: "md:col-span-4 h-80"
    },
    {
        url: Sterile,
        title: "Sterile Surgical Suites",
        className: "md:col-span-8 h-80"
    }
];

export const services = [
    {
        img: Laser,
        icon: <Eye size={32} strokeWidth={1.5} />,
        title: "Comprehensive Eye Exams",
        description: "Advanced Eye Vision Care testing to evaluate your overall eye health and visual acuity with pinpoint accuracy.",
        color: "from-teal/20 to-transparent"
    },
    {
        img: Comprehensive,
        icon: <Zap size={32} strokeWidth={1.5} />,
        title: "low Vision",
        description: "Specialized low vision evaluations and customized aids to enhance remaining vision and improve quality of life.",
        color: "from-navy/10 to-transparent"
    },
    {
        img: Cataract,
        icon: <Microscope size={32} strokeWidth={1.5} />,
        title: "Cataract evaluation",
        description: "Comprehensive assessment to determine the need for cataract surgery and evaluate the best treatment options.",
        color: "from-teal/20 to-transparent"
    },
    {
        img: dryeye,
        icon: <Droplet size={32} strokeWidth={1.5} />,
        title: "Dry Eye Treatment",
        description: "Targeted therapies and advanced tear film analysis to provide lasting relief from dry eye syndrome.",
        color: "from-navy/10 to-transparent"
    },
    // {
    //     img: Glaucoma,
    //     icon: <ScanFace size={32} strokeWidth={1.5} />,
    //     title: "Glaucoma Management",
    //     description: "Early detection and personalized treatment plans using the latest in intraocular pressure monitoring.",
    //     color: "from-teal/20 to-transparent"
    // },
    {
        img: Optical,
        icon: <Glasses size={32} strokeWidth={1.5} />,
        title: "Optical Showroom",
        description: "Curated selection of designer frames and precision-crafted lenses tailored to your lifestyle.",
        color: "from-navy/10 to-transparent"
    }
];

export const products = [
    {
        category: "Designer Frames",
        name: "Aura Titanium Series",
        description: "Ultra-lightweight, aerospace-grade titanium frames combining durability with minimalist elegance.",
        image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=1400&auto=format&fit=crop",
        rating: 4.9
    },
    {
        category: "Premium Sunglasses",
        name: "Lumina Polarized",
        description: "Advanced UV400 protection with glare-reducing polarization for ultimate visual comfort outdoors.",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1400&auto=format&fit=crop",
        rating: 4.8
    },
    {
        category: "Contact Lenses",
        name: "AquaBreath Dailies",
        description: "High oxygen permeability silicone hydrogel lenses for all-day moisture and irritation-free wear.",
        image: lence,
        rating: 4.9
    },
    {
        category: "Specialty Lenses",
        name: "BlueShield Digital",
        description: "Precision-crafted lenses designed to filter harmful blue light and reduce digital eye strain.",
        image: Specialty,
        rating: 5.0
    }
];

export const locations = [
    {
        name: "Eye Vision Care",
        address: "Shop no.26 Omkar plazza near Priyanka bhestan surat Gujarat  395023",
        phone: "+91 9763534348",
        hours: "Mon-Sun: 9am - 10pm ", 
        image: shop01,
        getDirection: "https://maps.app.goo.gl/x14T7zF7g7xTpLMy5",
        isMain: true
    },
    {
        name: "Eye Vision Care",
        address: "shop no 3&4 Asma complex first floor opposite sagar bakery sabji mandi road unn surat Gujarat394210",
        phone: "+91 91671 33049",
        hours:"Mon-Sun: 9am - 10pm ",
        image: shop02,
        getDirection: "https://maps.app.goo.gl/jqTyNa3Psxm4v2D29",
        isMain: false
    },
    {
        name: "Eye Vision Care",
        address: "shop no 3 Sai Krupa society opposite Shree ji nursing home Paligam sachin surat Gujarat 394230",
        phone: "+91 70548 54343",
        hours: "Mon-Sun: 9am - 10pm ",
        image: shop03,
        getDirection: "https://maps.app.goo.gl/cboP4vfaVv8QazPUA",
        isMain: false
    }
    ,
    {
        name: "Eye Vision Care",
        address: "plot no 2 Hari om nagar opposite Rishabh jeweller near paras cinema police colony pandesara surat Gujarat 394221",
        phone: "+91 9506531385",
        hours: "Mon-Sun: 9am - 10pm ",
        image: shop04,
        getDirection: "https://maps.app.goo.gl/1CBcmEjcCsLzA44Y7",
        isMain: false
    }
    ,
    {
        name: "Eye Vision Care",
        address: "shop no 4 Sai enclave complex near Swapna shrusti circle bhestan surat Gujarat 395023",
        phone: "+91 7861918659",
        hours:"Mon-Sun: 9am - 10pm ",
        image: shop05,
        getDirection: "https://maps.app.goo.gl/uabvysbyQ7xnz5tB8",
        isMain: false
    }
    ,
    {
        name: "Eye Vision Care",
        address: "shop no 19 royal residency opposite unn hospital surat Gujarat394210",
        phone: "+91 91671 33049",
        hours: "Mon-Sun: 9am - 10pm ",
        image: shop02,
        getDirection: "https://maps.app.goo.gl/x14T7zF7g7xTpLMy5",
        isMain: false
    },
    {
        name: "Eye Vision Care",
        address: "Shop no 54 Hamid Nagar shopping center near hidayat masjid udhna Navsari main road unn patiya surat Gujarat 394210",
        phone: "+91 91671 33049",
        hours: "Mon-Sun: 9am - 10pm ",
        image: shop07,
        getDirection: "https://maps.app.goo.gl/79cTuMmefvezSi299",
        isMain: false
    }
];



export const steps = [
    {
        icon: <ClipboardPlus size={22} />,
        title: "Select Your Service",
        desc: "Choose from vision tests, Low Vision, cataract evaluation,& ETC..",
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
