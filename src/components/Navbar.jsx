import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Close } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

const Navbar = () => {
    const location = useLocation()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [navScrolled, setNavScrolled] = useState(false);
    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


       useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 112;
            setNavScrolled(isScrolled);
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <>
            <header className={`${navScrolled ? 'sticky bg-white nav_shadow ' : 'absolute py-4'} inset-x-0 top-0 z-50  `}>

                <nav className="flex items-center justify-center mx-[15px] min-h-[80px]" aria-label="Global">
                    <div className='flex items-center justify-between w-full max-w-[1170px] '>
                        <div className="">
                            <span className="sr-only">eduvibe</span>
                            <Link to={"/ "}>
                                <img
                                    className="h-8 w-auto"
                                    src={"https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/01/logo-2.png"}
                                    alt=""
                                />
                            </Link >
                        </div>

                        <div className='flex justify-between items-center'>

                            <ul className="hidden lg:flex items-center text-center justify-center text-base font-semibold">
                                <li className='nav_item'><span className='nav_main_items'>Home <KeyboardArrowDownRoundedIcon /> </span>

                                    <ul className='nav_drop_down'>
                                        <li className={location.pathname==="/"?'text-[#525Fe1] mb-2':'mb-2 hover:text-[#525Fe1]'}><a href="/">Home 1</a></li>
                                        <li className={location.pathname==="/home-two"?'text-[#525Fe1] mb-2':'mb-2 hover:text-[#525Fe1]'}><a href="/home-two">Home 2</a></li>
                                        <li className={location.pathname==="/home-three"?'text-[#525Fe1] mb-2':'mb-2 hover:text-[#525Fe1]'}><a href="/home-three ">Home 3</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Home 4</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Home 5</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Landing Demo</a></li>
                                    </ul>
                                </li>

                                <li className='nav_item'><span className='nav_main_items'>About <KeyboardArrowDownRoundedIcon /> </span>

                                    <ul className='nav_drop_down'>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">About 1</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">About 2</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">About 3</a></li>
                                    </ul>
                                </li>


                                <li className='nav_item'><span className='nav_main_items'>Courses <KeyboardArrowDownRoundedIcon /> </span>

                                    <ul className='nav_drop_down'>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Course Style 1</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Course Style 2</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Course Style 3</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Course Style 4</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Course Style 5</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Course Filter</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Course Carousel</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Course Details 1</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Course Details 2</a></li>
                                    </ul>
                                </li>

                                <li className='nav_item'><span className='nav_main_items'>Pages <KeyboardArrowDownRoundedIcon /> </span>

                                    <ul className='nav_drop_down'>

                                        <li className='nav_side_option relative'><span className='nav_side_main '>Event <ArrowForwardIosRoundedIcon sx={{ fontSize: "21px", paddingRight: "6px" }} /></span>

                                            <ul className='nav_side_container'>
                                                <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Event Grid</a></li>
                                                <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Event List</a></li>
                                                <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Event Carousel</a></li>
                                                <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Event Details</a></li>
                                            </ul>

                                        </li>

                                        <li className='nav_side_option relative'><span className='nav_side_main '>Gallery <ArrowForwardIosRoundedIcon sx={{ fontSize: "21px", paddingRight: "6px" }} /></span>

                                            <ul className='nav_side_container'>
                                                <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Gallery Grid</a></li>
                                                <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Gallery Masonry</a></li>
                                            </ul>

                                        </li>

                                        <li className='nav_side_option relative'><span className='nav_side_main '>Instructor <ArrowForwardIosRoundedIcon sx={{ fontSize: "21px", paddingRight: "6px" }} /></span>

                                            <ul className='nav_side_container'>
                                                <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Instructor 1</a></li>
                                                <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Instructor 2</a></li>
                                                <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Instructor 3</a></li>
                                            </ul>

                                        </li>
                                        <li className='nav_side_option relative'><span className='nav_side_main '>Contact <ArrowForwardIosRoundedIcon sx={{ fontSize: "21px", paddingRight: "6px" }} /></span>

                                            <ul className='nav_side_container'>
                                                <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Contact Us</a></li>
                                                <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Contact Me</a></li>
                                            </ul>

                                        </li>

                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">FAQ Page</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Pricing</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Privacy Policy</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Purchase Guide</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Testimonial</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Coming Soon</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">404 Page</a></li>
                                    </ul>
                                </li>

                                <li className='nav_item'><span className='nav_main_items'>Blog <KeyboardArrowDownRoundedIcon /> </span>

                                    <ul className='nav_drop_down'>

                                        <li className='nav_side_option relative'><span className='nav_side_main '>Blog Style <ArrowForwardIosRoundedIcon sx={{ fontSize: "21px", paddingRight: "6px" }} /></span>

                                            <ul className='nav_side_container'>
                                                <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Blog Grid 1</a></li>
                                                <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Blog Grid 2</a></li>
                                                <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Blog Grid 3</a></li>
                                                <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Blog Standard</a></li>
                                                <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Blog Carousel</a></li>
                                            </ul>

                                        </li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Blog Details</a></li>
                                    </ul>
                                </li>

                                <li className='nav_item'><span className='nav_main_items'>Shop <KeyboardArrowDownRoundedIcon /> </span>

                                    <ul className='nav_drop_down'>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Shop Page</a></li>
                                        <li className='mb-2 hover:text-[#525Fe1]'><a href="# ">Product Details</a></li>
                                    </ul>
                                </li>




                            </ul>

                            <div className='flex gap-[6px] md:gap-4 md:ml-10'>
                                <button className='text-[#525FE1] font-semibold h-[40px] md:h-[50px] w-[40px] md:w-[50px] nav_search_shadow bg-white rounded-[5px] border-none'><SearchRoundedIcon /></button>
                                <button className='text-[#525FE1] md:text-white font-bold flex justify-center items-center h-[40px] md:h-[50px] bg-white md:bg-[#525FE1] rounded-[5px] border-none md:px-6 w-[40px] md:w-auto nav_search_shadow md:shadow-none'><PersonOutlinedIcon /> <span className='hidden md:block ms-1'>Login / Register</span></button>
                                <button className=' lg:hidden text-[#525FE1] font-semibold h-[40px] md:h-[50px] w-[40px] md:w-[50px] nav_search_shadow bg-white rounded-[5px] border-none' onClick={() => setMobileMenuOpen((prevState) => !prevState)}><span className="sr-only text-white">Open main menu</span><MenuRoundedIcon /></button>
                            </div>
                        </div>
                    </div>
                </nav>

                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 left-0 z-50 overflow-y-auto bg-white w-[350px] ">
                        <div className="flex items-center justify-between border-b-[1px] border-[#EEEEEE] py-[15px] px-5">
                            <div >
                                <span className="sr-only">eduvibe</span>
                                <Link to={"/ "}>
                                    <img
                                        className="h-9 w-auto my-[10px]"
                                        src={"https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/01/logo-2.png"}
                                        alt=""
                                    />
                                </Link >
                            </div>
                            <button
                                type="button"
                                className=" rounded-full p-2.5 bg-white nav_close_shadow"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <Close sx={{ color: "#231F40", fontSize: "21px" }} />
                            </button>
                        </div>

                        <div>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className='accordion'>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel1' ?
                                        <KeyboardArrowDownRoundedIcon className={`${expanded === 'panel1' && 'text-[#525Fe1]'}`} /> : <KeyboardArrowDownRoundedIcon />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <h3
                                        className={`${expanded === 'panel1' && 'text-[#525Fe1]'}`}>Home</h3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul className='pr-4 ps-7'>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="/">Home 1</a></li>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="/home-two">Home 2</a></li>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="/home-three">Home 3</a></li>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Home 4</a></li>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Home 5</a></li>
                                        <li className='mb-2 pb-2  hover:text-[#525Fe1]'><a href="# ">Landing Demo</a></li>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className='accordion'>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel2' ?
                                        <KeyboardArrowDownRoundedIcon className={`${expanded === 'panel2' && 'text-[#525Fe1]'}`} /> : <KeyboardArrowDownRoundedIcon />}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <h3
                                        className={`${expanded === 'panel2' && 'text-[#525Fe1]'}`}>About</h3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul className='pr-4 ps-7'>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">About 1</a></li>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">About 2</a></li>
                                        <li className='mb-2 pb-2  hover:text-[#525Fe1]'><a href="# ">About 3</a></li>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className='accordion'>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel3' ?
                                        <KeyboardArrowDownRoundedIcon className={`${expanded === 'panel3' && 'text-[#525Fe1]'}`} /> : <KeyboardArrowDownRoundedIcon />}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <h3
                                        className={`${expanded === 'panel3' && 'text-[#525Fe1]'}`}>Courses</h3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul className='pr-4 ps-7'>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Course Style 1</a></li>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Course Style 2</a></li>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Course Style 3</a></li>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Course Style 4</a></li>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Course Style 5</a></li>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Course Filter</a></li>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Course Carousel</a></li>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Course Details 1</a></li>
                                        <li className='mb-2 pb-2  hover:text-[#525Fe1]'><a href="# ">Course Details 2</a></li>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>



                            <Accordion expanded={(expanded === 'panel4'||expanded === 'panel41' ||expanded === 'panel42'||expanded === 'panel43'||expanded === 'panel44')} onChange={handleChange('panel4')} className='accordion'>
                                <AccordionSummary
                                    expandIcon={(expanded === 'panel4'||expanded === 'panel41' ||expanded === 'panel42'||expanded === 'panel43'||expanded === 'panel44') ?
                                        <KeyboardArrowDownRoundedIcon className={`${(expanded === 'panel4'||expanded === 'panel41' ||expanded === 'panel42'||expanded === 'panel43'||expanded === 'panel44') && 'text-[#525Fe1]'}`} /> : <KeyboardArrowDownRoundedIcon />}
                                    aria-controls="panel4bh-content"
                                    id="panel4bh-header"
                                >
                                    <h3
                                        className={`${(expanded === 'panel4'||expanded === 'panel41' ||expanded === 'panel42'||expanded === 'panel43'||expanded === 'panel44') && 'text-[#525Fe1]'}`}>Pages</h3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul className='pr-4 ps-7'>
                                        <li className='border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'>
                                            <Accordion expanded={expanded === 'panel41'} onChange={handleChange('panel41')} className='accordion' >
                                                <AccordionSummary
                                                    expandIcon={expanded === 'panel41' ?
                                                        <KeyboardArrowDownRoundedIcon className={`${expanded === 'panel41' && 'text-[#525Fe1]'}`} /> : <KeyboardArrowDownRoundedIcon />}
                                                    aria-controls="panel41bh-content"
                                                    id="panel41bh-header"
                                                >
                                                    <h3
                                                        className={`${expanded === 'panel41' && 'text-[#525Fe1]'}`}>Event</h3>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <ul className='ps-7'>                                                        
                                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Event Grid</a></li>
                                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Event List</a></li>
                                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Event Carousel</a></li>
                                                        <li className='mb-2 pb-2  hover:text-[#525Fe1]'><a href="# ">Event Details</a></li>

                                                    </ul>
                                                </AccordionDetails>
                                            </Accordion>
                                        </li>

                                        <li className='border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'>
                                            <Accordion expanded={expanded === 'panel42'} onChange={handleChange('panel42')} className='accordion' >
                                                <AccordionSummary
                                                    expandIcon={expanded === 'panel42' ?
                                                        <KeyboardArrowDownRoundedIcon className={`${expanded === 'panel42' && 'text-[#525Fe1]'}`} /> : <KeyboardArrowDownRoundedIcon />}
                                                    aria-controls="panel42bh-content"
                                                    id="panel42bh-header"
                                                >
                                                    <h3
                                                        className={`${expanded === 'panel42' && 'text-[#525Fe1]'}`}>Gallery</h3>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <ul className='ps-7'>                                                        
                                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Gallery Grid</a></li>
                                                        <li className='mb-2 pb-2  hover:text-[#525Fe1]'><a href="# ">Gallery Masonry</a></li>

                                                    </ul>
                                                </AccordionDetails>
                                            </Accordion>
                                        </li>


                                        <li className='border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'>
                                            <Accordion expanded={expanded === 'panel43'} onChange={handleChange('panel43')} className='accordion' >
                                                <AccordionSummary
                                                    expandIcon={expanded === 'panel43' ?
                                                        <KeyboardArrowDownRoundedIcon className={`${expanded === 'panel43' && 'text-[#525Fe1]'}`} /> : <KeyboardArrowDownRoundedIcon />}
                                                    aria-controls="panel43bh-content"
                                                    id="panel43bh-header"
                                                >
                                                    <h3
                                                        className={`${expanded === 'panel43' && 'text-[#525Fe1]'}`}>Instructor</h3>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <ul className='ps-7'>                                                        
                                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Instructor 1</a></li>
                                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Instructor 2</a></li>
                                                        <li className='mb-2 pb-2  hover:text-[#525Fe1]'><a href="# ">Instructor 3</a></li>

                                                    </ul>
                                                </AccordionDetails>
                                            </Accordion>
                                        </li>

                                        <li className='border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'>
                                            <Accordion expanded={expanded === 'panel44'} onChange={handleChange('panel44')} className='accordion' >
                                                <AccordionSummary
                                                    expandIcon={expanded === 'panel44' ?
                                                        <KeyboardArrowDownRoundedIcon className={`${expanded === 'panel44' && 'text-[#525Fe1]'}`} /> : <KeyboardArrowDownRoundedIcon />}
                                                    aria-controls="panel44bh-content"
                                                    id="panel44bh-header"
                                                >
                                                    <h3
                                                        className={`${expanded === 'panel44' && 'text-[#525Fe1]'}`}>Contact</h3>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <ul className='ps-7'>                                                        
                                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Contact Us</a></li>
                                                        <li className='mb-2 pb-2  hover:text-[#525Fe1]'><a href="# ">Contact Me</a></li>
                                                    </ul>
                                                </AccordionDetails>
                                            </Accordion>
                                        </li>

                                        <li className='mb-2 pb-2 mt-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">FAQ Page</a></li>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Pricing</a></li>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Privacy Policy</a></li>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Purchase Guide</a></li>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Testimonial</a></li>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Coming Soon</a></li>
                                        <li className='mb-2 pb-2  hover:text-[#525Fe1]'><a href="# ">404 Page</a></li>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={(expanded === 'panel5'||expanded === 'panel51' ||expanded === 'panel52'||expanded === 'panel53'||expanded === 'panel54')} onChange={handleChange('panel5')} className='accordion'>
                                <AccordionSummary
                                    expandIcon={(expanded === 'panel5'||expanded === 'panel51' ||expanded === 'panel52'||expanded === 'panel53'||expanded === 'panel54') ?
                                        <KeyboardArrowDownRoundedIcon className={`${(expanded === 'panel5'||expanded === 'panel51' ||expanded === 'panel52'||expanded === 'panel53'||expanded === 'panel54') && 'text-[#525Fe1]'}`} /> : <KeyboardArrowDownRoundedIcon />}
                                    aria-controls="panel5bh-content"
                                    id="panel5bh-header"
                                >
                                    <h3
                                        className={`${(expanded === 'panel5'||expanded === 'panel51' ||expanded === 'panel52'||expanded === 'panel53'||expanded === 'panel54') && 'text-[#525Fe1]'}`}>Blog</h3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul className='pr-5 ps-7'>
                                        <li className='border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'>
                                            <Accordion expanded={expanded === 'panel51'} onChange={handleChange('panel51')} className='accordion' >
                                                <AccordionSummary
                                                    expandIcon={expanded === 'panel51' ?
                                                        <KeyboardArrowDownRoundedIcon className={`${expanded === 'panel51' && 'text-[#525Fe1]'}`} /> : <KeyboardArrowDownRoundedIcon />}
                                                    aria-controls="panel51bh-content"
                                                    id="panel51bh-header"
                                                >
                                                    <h3
                                                        className={`${expanded === 'panel51' && 'text-[#525Fe1]'}`}>Blog Style</h3>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <ul className='ps-7'>                                                        
                                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Blog Grid 1</a></li>
                                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Blog Grid 2</a></li>
                                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Blog Grid 3</a></li>
                                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Blog Standard</a></li>                                                        
                                                        <li className='mb-2 pb-2 hover:text-[#525Fe1]'><a href="# ">Blog Carousel</a></li>

                                                    </ul>
                                                </AccordionDetails>
                                            </Accordion>
                                        </li>

                                        <li className='mb-2 pb-2 mt-2  hover:text-[#525Fe1]'><a href="# ">Blog Details</a></li>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>

                            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className='accordion'>
                                <AccordionSummary
                                    expandIcon={expanded === 'panel6' ?
                                        <KeyboardArrowDownRoundedIcon className={`${expanded === 'panel6' && 'text-[#525Fe1]'}`} /> : <KeyboardArrowDownRoundedIcon />}
                                    aria-controls="panel6bh-content"
                                    id="panel6bh-header"
                                >
                                    <h3
                                        className={`${expanded === 'panel6' && 'text-[#525Fe1]'}`}>Shop</h3>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ul className='pr-4 ps-7'>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Shop Page</a></li>
                                        <li className='mb-2 pb-2 border-b-[1px] border-[#EEEEEE] hover:text-[#525Fe1]'><a href="# ">Product Details</a></li>
                                    </ul>
                                </AccordionDetails>
                            </Accordion>


                        </div>

                    </Dialog.Panel>
                </Dialog>


            </header>
        </>
    )
}

export default Navbar