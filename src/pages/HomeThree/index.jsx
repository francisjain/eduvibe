import React from 'react'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CastleIcon from '@mui/icons-material/Castle';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import SettingsAccessibilityOutlinedIcon from '@mui/icons-material/SettingsAccessibilityOutlined';
import InterestsIcon from '@mui/icons-material/Interests';
import SnoozeIcon from '@mui/icons-material/Snooze';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Avatar, Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ScrollIndicator from '../../components/ScrollIndicator ';

const HomeThree = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const courseItem = [
        { img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/02/course-26-590x430.webp", span: "5 Courses", title: "Business Analysis", para: "The course covers the tools used in business analysis." },
        { img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/02/course-29-590x430.webp", span: "3 Courses", title: "Sales Marketing", para: "You'll learn how to promote or sell services to customers." },
        { img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/data-analysis-590x430.webp", span: "4 Courses", title: "Data Science", para: "Students will learn about how data analysis methods works." },
        { img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/02/course-27-590x430.webp", span: "6 Courses", title: "Creativity", para: "Students in this course will learn about creative process." }
    ]

    const FeaturedItem = [
        { time: "15 Week", img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-27-590x430.webp", avatar: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp", name: "Janet Fleming", rating: "(5.0)", title: "The Complete HTML & CSS Bootcamp 2023 Edition", student: "229 Students", lesson: "16 Lessons", fee: "$45.00" },
        { time: "17 Week", img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-32-590x430.webp", avatar: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-01-2-100x100.webp", name: "James Carlson", rating: "(5.0)", title: "Grow Personal Financial Security Thinking & Principles", student: "189 Students", lesson: "18 Lessons", fee: "$49.00", offer: "$59.00" },
        { time: "20 Hour", img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-30-590x430.webp", avatar: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-06-2-100x100.webp", name: "Isabelle Bruner", rating: "(5.0)", title: "Competitive Strategy Law for Management Consultants", student: "364 Students", lesson: "13 Lessons", fee: "$75.00" },
        { time: "25 Hour", img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-27-590x430.webp", avatar: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp", name: "Janet Fleming", rating: "(5.0)", title: "The Complete HTML & CSS Bootcamp 2023 Edition", student: "229 Students", lesson: "16 Lessons", fee: "$45.00" },
        { time: "30 Hour", img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-39-590x430.webp", avatar: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp", name: "Janet Fleming", rating: "(4.5)", title: "Machine Learning A-Z: Hands-On Python and java", student: "674 Students", lesson: "13 Lessons", fee: "$79.00", offer: "$99.00" },
        { time: "15 Hour", img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-33-590x430.webp", avatar: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-06-2-100x100.webp", name: "Isabelle Bruner", rating: "(5.0)", title: "Learning How To Write As A Professional Author", student: "425 Students", lesson: "19 Lessons", fee: "$29.00", offer: "$39.00" }
    ]

    const featureData = [
        {
            icon: SettingsAccessibilityOutlinedIcon,
            title: 'Virtual Classroom',
            description: 'Students can access course materials, participate in debate & discussions.',
        },
        {
            icon: InterestsIcon,
            title: 'Remote Education',
            description: 'Complete assignments from a remote location, such as their home or workplace.',
        },
        {
            icon: SnoozeIcon,
            title: 'Digital Learning',
            description: 'Digital learning allows for more personalized and flexible learning experiences.',
        },
        {
            icon: LocalLibraryOutlinedIcon,
            title: 'Educator Support',
            description: 'The goal of educator support is to promote learning and growth among teachers.',
        },
    ];

    const instructor = [
        { img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-01-2.webp", name: "James Carlson", job: "WordPress Expert" },
        { img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2.webp", name: "Nancy Phipps", job: "Digital Marketer" },
        { img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-03-2.webp", name: "Troy Hall", job: "PHP Expert" },
        { img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-06-2.webp", name: "Isabelle Bruner", job: "UI Designer" },
    ]

    return (
        <div>
            <ScrollIndicator />
            <div
                className="bg-center bg-no-repeat bg-cover pt-28 relative overflow-hidden"
                style={{ backgroundImage: `url(${"https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/home-three-banner-2.jpg"})` }}
            >


                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-13-06-07-2.png" alt="" className='absolute top-48 -right-8 hidden md:block' />

                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-05-01-2.png" alt="" className='absolute bottom-40 left-2 hidden sm:block' />

                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-11-03-2.png" alt="" className='absolute top-44 left-32 hidden lg:block' />


                <div className='pt-[55px] md:pt-[142px]  w-full  flex justify-center items-center pb-32 overflow-hidden'>
                    <div className='w-full max-w-[1338px] xl:ml-[124px]  flex flex-wrap  gap-7 md:gap-0 '>

                        <div className='m-auto md:m-0  flex flex-col flex-wrap p-[15px] w-[500px] md:w-1/2 xl:w-[45%]  '>
                            <span className='text-[#525FE1] text-base tracking-[1.6px] font-extrabold	px-[10px] mb-4'>BETTER LEARNING FUTURE WITH US</span>
                            <h1 className='text-[42px] md:text-5xl lg:text-7xl font-extrabold text-[#231F40] ml-1 mb-8 lg:leading-[85px]'>Education Is About Academic Excellence</h1>
                            <p className='text-[#6F6B80] text-xl  mb-11'>Empower yourself with the knowledge and skills gained through online education and best instructors.</p>
                            <a href="# " className='text-white font-bold transition-all bg-[#525FE1] rounded-[5px] max-w-[229px] py-[14px]  px-8 z-10'>Get Started Today <ArrowForwardRoundedIcon /></a>
                        </div>

                        <div className='m-auto md:m-0 md:w-1/2 xl:w-[55%]  flex flex-wrap sm:flex-nowrap relative   '>
                            <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-01-02-2.png" alt="" className='absolute top-12 left-8 hidden sm:block' />
                            <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/image-03-2.png" alt="" className='absolute -top-24 right-40  hidden sm:block' />

                            

                            <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/image-01-2.png" alt="" className='m-auto md:absolute top-28 left-32  ' />
                            
                            <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/image-02-2.png" alt="" className='m-auto md:absolute top-2 left-[32rem] hidden sm:block' />

                        </div>

                    </div>

                </div>

            </div>

            <div className='w-full grid place-content-center py-44 px-[15px]' id='section3'>
                <div className='w-full max-w-[1200px] flex flex-wrap lg:flex-nowrap gap-11 lg:gap-0'>

                    <div className=' w-full relative '>

                        <div className='relative hidden md:block'>
                            <div className='p-[10px] rounded-full bg-[#FFFFFF80]  w-fit absolute -left-[75px] top-8'>
                                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/badge-2.png" alt="" className='animate-spin-slow' />
                            </div>
                        </div>

                        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/about-image-01-2.jpg" alt="" className='m-auto md:m-0' />

                        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/about-image-02-2.jpg" alt="" className='md:absolute -bottom-6 right-24 rounded-md  m-auto mt-3 md:m-0' />

                        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-04-01-2.png" alt="" className='absolute -left-6 -bottom-6 -z-[1] hidden lg:block' />

                    </div>

                    <div className='w-full'>
                        <span className='text-[#525FE1] text-base tracking-[1.6px] font-extrabold '>ABOUT US</span>
                        <h2 className='text-[40px] font-extrabold text-[#231F40]'>Creating A Community Of Life Long Learners</h2>
                        <p className='text-[#6F6B80] text-base font-medium mt-8 mb-8'>Online learning has become increasingly popular in recent years, offering a flexible and convenient way for individuals to pursue education and training.</p>
                        <div className='flex gap-5 mb-7'>
                            <div>
                                <div className='h-[50px] w-[50px] grid place-content-center rounded-full bg-[#F86F03]'>
                                    <MenuBookIcon sx={{ color: "white" }} />
                                </div>

                            </div>
                            <div>
                                <h3 className='font-bold  text-[#231F40] text-[20px] mb-3'>Flexible Classes</h3>
                                <p className='text-[#6F6B80] text-base font-medium'>Flexible Classes refers to the process of acquiring knowledge or skills through the use of digital technologies and the internet.</p>
                            </div>
                        </div>

                        <div className='flex gap-5 mb-7'>
                            <div>
                                <div className='h-[50px] w-[50px] grid place-content-center rounded-full bg-[#F86F03]'>
                                    <CastleIcon sx={{ color: "white" }} />
                                </div></div>
                            <div>
                                <h3 className='font-bold  text-[#231F40] text-[20px] mb-3'>Learn From Anywhere</h3>
                                <p className='text-[#6F6B80] text-base font-medium'>Whether you are a busy professional, a stay-at-home parent, or a student who prefers to study from home effectively.</p>
                            </div>
                        </div>

                        <div className='mt-14'></div>
                        <a href="# " className='text-white font-bold transition-all bg-[#525FE1] rounded-[5px] max-w-[229px] py-[14px]  px-8 '>Know About Us <ArrowForwardRoundedIcon /></a>
                    </div>

                </div>
            </div>


            <div
                className="bg-center bg-no-repeat bg-cover py-40 px-[15px] relative flex justify-center items-center flex-col overflow-hidden"
                style={{ backgroundImage: `url(${"https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/02/home-one-service-2.jpg"})` }}
            >
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-03-01-2.png" alt="" className='absolute top-16 left-3' />
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-08-2.png" alt="" className='absolute top-16 -right-16' />
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-03-02-2.png" alt="" className='absolute bottom-16 -left-3' />
                <span className='text-[#525FE1] text-base tracking-[1.6px] font-extrabold	'>COURSE CATEGORIES</span>
                <h2 className='text-[40px] font-extrabold text-[#231F40] mb-9'>Popular Topics To Learn</h2>
                <div className='flex justify-center items-center flex-wrap gap-[30px]  relative '>
                    {courseItem.map(item => <>
                        <Card sx={{ zIndex: 1, boxShadow: "none" }} className='course-card xs:w-full  sm:w-[250px] '>
                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.img}
                                    alt="green iguana"
                                    decoding='async'
                                    loading='lazy'
                                />
                                <CardContent className='text-center flex flex-col'>
                                    <span className='text-[#525FE1] text-base pt-4 pb-1'>{item.span}</span>
                                    <h3 className='font-bold  text-[#231F40] text-[20px] pb-5'>{item.title}</h3>
                                    <p className='text-[#6F6B80] text-base font-medium pb-4'>{item.para}</p>
                                </CardContent>
                            </CardActionArea>
                            <div className='course-card-hover'></div>
                        </Card></>)}

                    <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-04-01-2.png" alt="" className='hidden md:block absolute -bottom-12 -right-12 ' />

                </div>


                <div className='mt-6'></div>
                <a href="# " className='text-white font-bold transition-all bg-[#525FE1] rounded-[5px] max-w-[229px] py-[14px]  px-8 mt-9'>Creative Courses <ArrowForwardRoundedIcon /></a>

            </div>

            <div className="py-40 px-[15px] relative flex justify-center items-center flex-col overflow-hidden">
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-09-2.png" alt="" className='absolute top-36 -left-7 hidden sm:block' />
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-10-2.png" alt="" className='absolute top-36 right-1 hidden sm:block' />
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-12-2.png" alt="" className='absolute bottom-44 left-1 hidden sm:block' />
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-11-2.png" alt="" className='absolute bottom-36 right-12  hidden sm:block' />

                <span className='text-[#525FE1] text-base tracking-[1.6px] font-extrabold	'>POPULAR COURSES</span>
                <h2 className='text-[40px] font-extrabold text-[#231F40] mb-9 text-center'>Featured On This Month</h2>
                <div className='flex justify-center items-center flex-wrap gap-[30px] max-w-[1200px]'>
                    {FeaturedItem.map(item => <>
                        <Card sx={{ zIndex: 1, backgroundColor: "#F5F5F5" }} className='img-expand hover:bg-white p-4 w-full md:w-[370px]'>

                            <div className='rounded overflow-hidden relative'>

                                <div className='text-sm h-[30px] px-3 bg-[#F86F03] rounded-e-sm absolute top-3 left-0 font-semibold flex gap-2 items-center text-white z-[1]'>
                                    <AccessTimeRoundedIcon /> {item.time}
                                </div>

                                <IconButton aria-label="delete" size="small" sx={{ position: "absolute", top: ".75rem", right: ".75rem", zIndex: 1, backgroundColor: "rgba(45,40,78,.2)" }}>
                                    <FavoriteIcon fontSize="small" sx={{ color: 'white' }} />
                                </IconButton>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={item.img}
                                    alt="green iguana"
                                    decoding='async'
                                    loading='lazy'
                                    className='img1'
                                />
                            </div>
                            <CardContent >
                                <div className='flex justify-between items-center  text-base font-medium'>
                                    <div className='flex gap-1 items-center'><Avatar alt="Remy Sharp" src={item.avatar} /> <span className='text-[#231F40]'> {item.name}</span></div>
                                    <div className='flex gap-1 text-[#6F6B80]'><StarRoundedIcon sx={{ color: "#ffa41b" }} />{item.rating}</div>
                                </div>
                                <h3 className='font-bold  text-[#231F40] text-[20px] my-5'>{item.title}</h3>
                                <div className='text-[#6F6B80] text-base font-medium flex gap-2'>
                                    <PeopleAltOutlinedIcon />{item.student} <ArticleOutlinedIcon sx={{ marginLeft: "18px" }} /> {item.lesson}
                                </div>
                            </CardContent>
                            <CardActions className='border-t-[1px] border-[rgba(35,31,64,.06)]'>

                                <button className='text-white font-bold transition-all bg-[#525FE1] rounded-[3px] w-fit h-9 text-center  px-[15px] mt-4'>
                                    {item.fee}
                                </button>

                                <p className='text-[#6F6B80] text-base font-medium ms-4 line-through mt-4'>{item.offer}</p>
                            </CardActions>

                        </Card ></>)}



                </div>


                <div className='mt-6'></div>
                <a href="# " className='text-white font-bold transition-all bg-[#525FE1] rounded-[5px] max-w-[229px] py-[14px]  px-8 mt-9'>View All Courses <ArrowForwardRoundedIcon /></a>

            </div>



            <div className="w-full grid place-content-center py-44 px-[15px] bg-center bg-no-repeat bg-cover pt-28 relative overflow-hidden "
                style={{ backgroundImage: `url(${"https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/home-one-testimonial-2.jpg"})` }}>
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-13-2.png" alt="" className='absolute top-16 left-3' />
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-13-01-2.png" alt="" className='absolute top-16 right-0' />
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-04-2.png" alt="" className='absolute bottom-12 right-0 ' />



                <span className='text-[#525FE1] text-base tracking-[1.6px] font-extrabold	text-center'>TESTIMONIAL</span>
                <h2 className='text-[40px] font-extrabold text-[#231F40] mb-14 text-center'>What Our Student Says</h2>

                <div className='w-full max-w-[1200px] flex flex-wrap lg:flex-nowrap gap-11 lg:gap-0 overflow-hidden lg:overflow-visible'>

                    <div className=' w-full relative '>

                        <div className='hidden xl:flex  py-[22px] px-[26px]  gap-6 bg-white rounded-lg shadow-[0px 10px 25px 0px rgba(0, 0, 0, 0.08)] absolute top-24 -left-28 animate-bounce'>
                            <div className='flex justify-center items-center'>
                                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/trophy-2.png" alt="" />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h3 className='font-bold  text-[#231F40] text-[20px]'>50K+</h3>
                                <p className='text-[#6F6B80] text-base font-medium'>Satisfied Learners</p>
                            </div>
                        </div>


                        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/testimonial-01-2.jpg" alt="" className='m-auto ' />


                        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-02-01-2.png" alt="" className='absolute -bottom-16 left-4 hidden lg:block' />

                    </div>

                    <div className='lg:max-w-[45%] w-full m-auto slick-slider '>
                        <Slider {...settings}>
                            <div className='py-4 '>
                                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/testimonial-4-quote.png" alt="" />
                                <p className='mb-[50px] font-medium text-2xl text-[#6F6B80] mt-[50px]'>“ I had an amazing experience at EduVibe. The instructors were knowledgeable and passionate, and the coursework was challenging and relevant to my future career. I feel confident that the education I received will prepare me for success."</p>
                                <div className='flex gap-3 mb-[70px] '>
                                    <div className='flex justify-center items-center'>
                                        <Avatar sx={{ width: 76, height: 76 }} src='https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/testimonial-04-01-2.png' />
                                    </div>
                                    <div className='flex flex-col '>
                                        <h3 className='mb-[5px] font-bold text-2xl text-[#231F40]'>Sophie Moore</h3>
                                        <p className='font-semibold text-base text-[#525FE1]'>UI Designer</p>
                                    </div>
                                </div>

                            </div>
                            <div className='py-4 '>
                                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/testimonial-4-quote.png" alt="" />
                                <p className='mb-[50px] font-medium text-2xl text-[#6F6B80]  mt-[50px]'>“ I had an amazing experience at EduVibe. The instructors were knowledgeable and passionate, and the coursework was challenging and relevant to my future career. I feel confident that the education I received will prepare me for success."</p>
                                <div className='flex gap-3 mb-[70px]'>
                                    <div className='flex justify-center items-center'>
                                        <Avatar sx={{ width: 56, height: 56 }} src='https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/testimonial-04-01-2.png' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h3 className='mb-[5px] font-bold text-2xl text-[#231F40]'>Sophie Moore</h3>
                                        <p className='font-semibold text-base text-[#525FE1]'>UI Designer</p>
                                    </div>
                                </div>
                            </div>

                            <div className='py-4 '>
                                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/themes/eduvibe/assets/images/testimonial-4-quote.png" alt="" />
                                <p className='mb-[50px] font-medium text-2xl text-[#6F6B80]  mt-[50px]'>“ I had an amazing experience at EduVibe. The instructors were knowledgeable and passionate, and the coursework was challenging and relevant to my future career. I feel confident that the education I received will prepare me for success."</p>
                                <div className='flex gap-3 mb-[70px]'>
                                    <div className='flex justify-center items-center'>
                                        <Avatar sx={{ width: 56, height: 56 }} src='https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/testimonial-04-01-2.png' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h3 className='mb-[5px] font-bold text-2xl text-[#231F40]'>Sophie Moore</h3>
                                        <p className='font-semibold text-base text-[#525FE1]'>UI Designer</p>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>

                </div>
            </div>


            <div
                className="bg-center bg-no-repeat bg-cover py-28 relative flex justify-center items-center flex-col overflow-hidden"
                style={{ backgroundImage: `url(${"https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/home-one-instructor-2.jpg"})` }}
            >


                <span className='text-white text-base tracking-[1.6px] font-extrabold	'>TEAM MEMBER</span>
                <h2 className='text-[40px] font-extrabold text-white mb-9'>Meet Our Instructor</h2>
                <div className='flex justify-center items-center flex-wrap gap-[30px]  relative '>
                    {instructor.map(item => <>
                        <Card sx={{ maxWidth: 250, zIndex: 1, position: "relative", overflow: "visible" }} className='instructor-card'>
                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={item.img}
                                    alt="green iguana"
                                    decoding='async'
                                    loading='lazy'
                                    className='rounded-md'
                                />
                                <CardContent sx={{ padding: "24px" }} className='absolute z-[2] -bottom-5 text-left bg-white shadow-[0 10px 25px rgba(0,0,0,.06);] rounded-[5px] left-5 w-full instructor-card-hidden '>
                                    <h3 className='font-bold  text-[#231F40] text-[20px] mb-1 hover:text-[#525FE1]'>{item.name}</h3>
                                    <p className='text-[#6F6B80] text-base font-medium mb-3'>{item.job}</p>
                                    <div className='flex gap-4 text-[#525FE1]'>
                                        <FacebookIcon />
                                        <WhatsAppIcon />
                                        <EmailRoundedIcon />
                                        <TwitterIcon />
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card></>)}

                    <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-03-03-2.png" alt="" className='absolute top-24 -left-16' />
                    <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-02-02-2.png" alt="" className='absolute -top-20 -right-16' />

                </div>



            </div>


            <div className=" py-40 px-[15px] relative flex justify-center items-center overflow-hidden " >
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-14-2.png" alt="" className='absolute top-[45%] left-2 animate-spin-slow' />
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-15-02-2.png" alt="" className='absolute top-[50%] right-0' />

                <div className='flex justify-between  gap-[100px]  max-w-[1200px] flex-wrap lg:flex-nowrap'>

                    <div className="w-full lg:w-[40%] ">
                        <span className='text-[#525FE1] text-base tracking-[1.6px] font-extrabold	'>WHY CHOOSE US</span>
                        <h2 className='text-[40px] font-extrabold text-[#231F40] mb-10'>Our Core Features</h2>


                        <div className="w-full flex flex-wrap">
                            {featureData.map((item, index) => (
                                <div key={index} className="w-full  sm:w-1/2 flex flex-col gap-3 ">
                                    <item.icon sx={{ fontSize: '65px', color: '#F86F03', marginBottom: '18px' }} />
                                    <h3 className="font-bold text-[#231F40] text-[20px]">{item.title}</h3>
                                    <p className="text-[#6F6B80] text-base font-medium">{item.description}</p>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className="w-full lg:w-[60%]  flex justify-center items-center relative " >

                        <IconButton className='  custom-btn' sx={{ backgroundColor: "white", padding: "18px", boxShadow: "0 10px 20px rgb(0 0 0 / 7%)", position: "absolute", top: '50%', left: "50%", transform: "translate(-50%, -50%)", zIndex: 2 }}>
                            <PlayArrowRoundedIcon className='text-[#525Fe1]' />
                        </IconButton>

                        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/choose-us-image-01-2.jpg" alt="" className='rounded-e-[45%] rounded-s-[60%] z-[1]' />

                        <div className='absolute top-1 left-[10%] lg:left-1 w-4/5  lg:w-full  h-full'>
                            <div className="absolute top-1 animate-spin-slow w-full h-full rounded-e-[45%] rounded-s-[60%]  border-2 border-[#F86F03]"></div>
                            <div className="absolute top-1 animate-spin-slow w-full h-full rounded-e-[60%] rounded-s-[45%]  border-2 border-[#F86F03]"></div>
                        </div>

                    </div>

                </div>
            </div>

            <div className=" py-36 px-[15px]  relative flex flex-col justify-center items-center overflow-hidden bg-[#525FE1]" >
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-03-04-2.png" alt="" className='absolute top-7 left-20' />
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-16-2.png" alt="" className='absolute top-9 right-0' />
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-13-02-2.png" alt="" className='absolute bottom-14 left-3' />
                <span className='text-white text-base tracking-[1.6px] font-extrabold	 text-center'>SUBSCRIBE NEWSLETTER</span>
                <h2 className='text-[40px] font-extrabold text-white mb-10 mt-[5px] text-center'>Get Every Latest News</h2>

                <div className='flex items-center bg-white w-full max-w-xl h-16 px-6 rounded-md'>
                    <MailOutlineIcon sx={{ color: "#6F6B80" }} />
                    <input
                        type="text"
                        className="bg-transparent focus:outline-none text-[#6F6B80] w-full ms-3 text-lg"
                        placeholder="Enter your email address"
                    />
                    <SendSharpIcon sx={{ fontSize: "18px", color: "#525FE1" }} className='-rotate-45' />
                </div>

            </div>

            <div
                className="bg-center bg-no-repeat bg-cover py-36 px-[15px] relative flex justify-center items-center flex-col overflow-hidden"
                style={{ backgroundImage: `url(${"https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/02/home-one-banner-2.jpg"})` }}
            >
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-04-02-2.png" alt="" className='absolute top-36 left-3 animate-bounce' />
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-15-02-2.png" alt="" className='absolute top-16 -right-4' />
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-13-03-2.png" alt="" className='absolute bottom-12 -right-1 ' />
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-17-2.png" alt="" className='absolute bottom-8 -left-1' />




                <div className=' max-w-[1200px]'>

                    <div className="flex justify-between w-full flex-wrap gap-[30px] items-center mb-9">
                        <div>
                            <span className='text-[#525FE1] text-base tracking-[1.6px] font-extrabold	'>BLOG & NEWS</span>
                            <h2 className='text-[40px] font-extrabold text-[#231F40]'>Trending on Our Blogs</h2>
                        </div>
                        <div>
                            <a href="# " className='text-white font-bold transition-all bg-[#525FE1] rounded-[5px] max-w-[229px] py-[14px]  px-8 '>Read More Blogs <ArrowForwardRoundedIcon /></a>
                        </div>
                    </div>

                    <div className="flex flex-wrap md:flex-nowrap gap-[30px]">
                        <div className="w-full bg-white rounded-md flex flex-col p-[30px] img-expand transition-all duration-1000 ease-linear">
                            <span className='text-[#525FE1] text-base font-extrabold	mb-2'>SOCIAL MEDIA</span>
                            <h2 className='text-[32px] font-bold text-[#231F40] hover:text-[#525FE1] mb-5'>The Complete Web Developer Guideline 2023</h2>
                            <div className='flex flex-wrap gap-4 sm:gap-8 items-center text-[#6F6B80] items-center mb-5'><div><CalendarMonthOutlinedIcon sx={{ color: '#6F6B80', fontSize: "16px", marginRight: "12px" }} /> 17 Feb, 2023</div> <div>
                                <PersonOutlinedIcon sx={{ color: '#6F6B80', fontSize: "16px", marginRight: "12px" }} /> Posted By <span className='text-[#525FE1]'>Janet Fleming</span></div></div>
                            <div className='rounded-md overflow-hidden'>
                                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/01/course-06-2-590x430.webp" alt="" className='img1' />
                            </div>
                        </div>
                        <div className="w-full bg-white rounded-md flex flex-col p-[30px] img-expand">
                            <span className='text-[#525FE1] text-base font-extrabold	 mb-2'>BRANDING</span>
                            <h2 className='text-[32px] font-bold text-[#231F40] hover:text-[#525FE1] mb-5'>Social Media Marketing MASTERY( A-Z ) Journey</h2>
                            <div className='flex gap-4 sm:gap-8  flex-wrap text-[#6F6B80] items-center mb-5'><div><CalendarMonthOutlinedIcon sx={{ color: '#6F6B80', fontSize: "16px", marginRight: "12px" }} /> 09 Feb, 2023 </div><div>
                                <PersonOutlinedIcon sx={{ color: '#6F6B80', fontSize: "16px", marginRight: "12px" }} /> Posted By <span className='text-[#525FE1]'>Janet Fleming</span></div></div>
                            <div className='rounded-md overflow-hidden'>
                                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-26-590x430.webp" alt="" className='img1' />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div >
    )
}

export default HomeThree;