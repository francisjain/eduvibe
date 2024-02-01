import React from 'react'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CastleIcon from '@mui/icons-material/Castle';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import BiotechOutlinedIcon from '@mui/icons-material/BiotechOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import ConstructionOutlinedIcon from '@mui/icons-material/ConstructionOutlined';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import { Avatar, Card,  CardActions, CardContent, CardMedia, IconButton, Rating } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ScrollIndicator from '../../components/ScrollIndicator ';
import { CalendarMonthOutlined, Call, LocalOfferOutlined,   RoomOutlined } from '@mui/icons-material';
import Odometer from '../../components/Odometer';


const HomeTwo = () => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const courseItem = [
    { icon: LocalLibraryOutlinedIcon, span: "5 Courses", title: "Business Analysis", para: "The course covers the tools used in business analysis." },
    { icon: ScaleOutlinedIcon, span: "3 Courses", title: "Sales Marketing", para: "You'll learn how to promote or sell services to customers." },
    { icon: ExploreOutlinedIcon, span: "4 Courses", title: "Data Science", para: "Students will learn about how data analysis methods works." },
    { icon: CalculateOutlinedIcon, span: "6 Courses", title: "Creativity", para: "Students in this course will learn about creative process." },
    { icon: BiotechOutlinedIcon, span: "5 Courses", title: "Business Analysis", para: "The course covers the tools used in business analysis." },
    { icon: HeadsetMicOutlinedIcon, span: "3 Courses", title: "Sales Marketing", para: "You'll learn how to promote or sell services to customers." },
    { icon: ConstructionOutlinedIcon, span: "4 Courses", title: "Data Science", para: "Students will learn about how data analysis methods works." },
    { icon: YardOutlinedIcon, span: "6 Courses", title: "Creativity", para: "Students in this course will learn about creative process." },
  ]

  const FeaturedItem = [
    { time: "Business Analysis", img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-27-590x430.webp", avatar: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp", name: "Janet Fleming", ratingValue: 5, rating: "(5.0)", title: "The Complete HTML & CSS Bootcamp 2023 Edition", student: "229 Students", lesson: "16 Lessons", fee: "$45.00" },
    { time: "Data Science", img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-39-590x430.webp", avatar: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp", name: "Janet Fleming", ratingValue: 4.5, rating: "(4.5)", title: "Machine Learning A-Z: Hands-On Python and java", student: "674 Students", lesson: "13 Lessons", fee: "$79.00", offer: "$99.00" },
    { time: "Motivation", img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-27-590x430.webp", avatar: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp", name: "Janet Fleming", ratingValue: 5, rating: "(5.0)", title: "The Complete HTML & CSS Bootcamp 2023 Edition", student: "229 Students", lesson: "16 Lessons", fee: "$45.00" },
    { time: "Creativity", img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-32-590x430.webp", avatar: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-01-2-100x100.webp", name: "James Carlson", ratingValue: 5, rating: "(5.0)", title: "Grow Personal Financial Security Thinking & Principles", student: "189 Students", lesson: "18 Lessons", fee: "$49.00", offer: "$59.00" },
    { time: "UI Design", img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-30-590x430.webp", avatar: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-06-2-100x100.webp", name: "Isabelle Bruner", ratingValue: 5, rating: "(5.0)", title: "Competitive Strategy Law for Management Consultants", student: "364 Students", lesson: "Business Analysis", fee: "$75.00" },
    { time: "Business Analysis", img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-33-590x430.webp", avatar: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-06-2-100x100.webp", name: "Isabelle Bruner", ratingValue: 5, rating: "(5.0)", title: "Learning How To Write As A Professional Author", student: "425 Students", lesson: "19 Lessons", fee: "$29.00", offer: "$39.00" }
  ]

  const BlogItem = [
    { time: "Business Analysis", img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-27-590x430.webp", avatar: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp", name: "Janet Fleming", ratingValue: 5, rating: "(5.0)", title: "The Complete HTML & CSS Bootcamp 2023 Edition", student: "17 Feb, 2023", lesson: "16 Lessons", fee: "$45.00" },
    { time: "Data Science", img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-39-590x430.webp", avatar: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp", name: "Janet Fleming", ratingValue: 4.5, rating: "(4.5)", title: "Machine Learning A-Z: Hands-On Python and java", student: "09 Feb, 2023", lesson: "13 Lessons", fee: "$79.00", offer: "$99.00" },
    { time: "Motivation", img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-27-590x430.webp", avatar: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/instructor-03-02-2-100x100.webp", name: "Janet Fleming", ratingValue: 5, rating: "(5.0)", title: "The Complete HTML & CSS Bootcamp 2023 Edition", student: "08 Feb, 2023", lesson: "16 Lessons", fee: "$45.00" },

  ]

 

  const community = [
    { img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/winner-04-2.png", price: "449", title: "Learners & counting" },
    { img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/winner-05-2.png", price: "330", title: "Courses & Video" },
    { img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/winner-06-2.png", price: "275", title: "Certified Students" },
    { img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/winner-07-2.png", price: "378", title: "Winning Award" },
  ]

  const educational = [
    { img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/11/masonry-06-2-590x430.webp", title: "Explorations of Regional Chief Executive Network", date: "13th Dec 2023", time: "09:00 PM", place: "Washington DC, EK 3642", btn: "Book A Seat" },
    { img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-28-590x430.webp", title: "Write A Novel Outline From Scratch", date: "16th Dec 2023", time: "02:00 PM", place: "New York City, PA 17401", btn: "Book A Seat" },
    { img: "https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/03/course-31-590x430.webp", title: "Virtual Spring Part-time Jobs Fair for Student", date: "13th Dec 2023", time: "09:00 PM", place: "Washington DC, EK 3642", btn: "Book A Seat" },
  ]

  return (
    <div>
      <ScrollIndicator />
      <div
        className="bg-center bg-no-repeat bg-cover pt-28 relative "
        style={{ backgroundImage: `url(${"https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/home-two-banner-2.jpg"})` }}
      >
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-19-2.png" alt="" className='absolute top-60 left-3 hidden lg:block' />


        <div className=' md:pt-[15px]  w-full  flex justify-center items-center  overflow-hidden'>
          <div className='w-full max-w-[1400px] xl:ml-[186px]  flex flex-wrap  gap-7 md:gap-0 '>

            <div className='m-auto md:m-0 pt-[155px] flex flex-col flex-wrap p-[15px] w-[500px] md:w-1/2 xl:w-[45%]  relative'>
              <span className='text-[#525FE1] text-base tracking-[1.6px] font-extrabold	px-[10px] mb-4 relative '><span className='line ms-14'></span>
                BETTER LEARNING FUTURE WITH US</span>
              <h1 className='text-[42px] md:text-5xl lg:text-7xl font-extrabold text-[#231F40] ml-1 mb-8 lg:leading-[85px]'>Committed To Learn Excellence In Education</h1>
              <p className='text-[#6F6B80] text-xl mb-11'>Discover the possibilities of online education and unlock your true potential! Expand your mind with online education.</p>
              <a href="# " className='text-white font-bold transition-all bg-[#525FE1] rounded-[5px] max-w-[229px] py-[14px]  px-8 z-10'>Get Started Today <ArrowForwardRoundedIcon /></a>

              <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/arrow-2.png" alt="" className='absolute  -bottom-10   -right-2 hidden md:block z-[1] ' />
            </div>

            <div className='m-auto md:m-0  md:w-1/2 xl:w-[55%]  flex  relative '>

              <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-05-01-2.png" alt="" className='absolute top-28 left-24 hidden md:block' />
              <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/girl-bg-2.png" alt="" className='absolute bottom-0 -right-14 hidden md:block' />
              <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/banner-01-2.png" alt="" className='m-auto  lg:ms-14 z-[1]' />

            </div>

          </div>

        </div>
      

      </div>

      <div className=" py-40 px-[15px] relative flex justify-center items-center flex-col overflow-hidden " >

        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-20-2.png" alt="" className='absolute bottom-16 right-0' />
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-11-02-2.png" alt="" className='absolute bottom-32 left-2' />
        <span className='text-[#525FE1] text-base tracking-[1.6px] font-extrabold	'>COURSE CATEGORIES</span>
        <h2 className='text-[40px] font-extrabold text-[#231F40] mb-9'>Popular Topics To Learn</h2>
        <div className='flex justify-center items-center flex-wrap gap-[30px]  relative max-w-[1200px]'>
          {courseItem.map(item => <>
            <Card sx={{ zIndex: 1, boxShadow: "none" }} className='home-two-courseItem xs:w-full  sm:w-[250px] animate-fade-in'>

              <CardContent className='text-center flex flex-col'>
                <div className='py-8 svg'>
                  <item.icon sx={{ fontSize: '34px', color: '#525FE1' }} />
                </div>
                <span className=' text-base font-medium py-8 hidden hover:block '>{item.span}</span>
                <h3 className='font-bold  text-[#231F40] text-[20px] pb-5 '>{item.title}</h3>
                <p className='text-[#6F6B80] text-base font-medium pb-4 '>{item.para}</p>
              </CardContent>

            </Card></>)}

          <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-02-03-2.png" alt="" className='hidden md:block absolute -top-[3.25rem] right-0 ' />

        </div>

     

      </div>



      <div className="w-full grid place-content-center py-44 px-[15px] bg-center bg-no-repeat bg-cover pt-28 relative overflow-hidden "
        style={{ backgroundImage: `url(${"https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/home-two-about-us-2.jpg"})` }}>
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-21-2.png" alt="" className='absolute top-16 -left-12' />
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-13-04-2.png" alt="" className='absolute top-16 right-0' />
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-03-05-2.png" alt="" className='absolute bottom-12 right-3 ' />




        <div className='w-full max-w-[1200px] flex flex-wrap justify-between lg:flex-nowrap gap-11 lg:gap-0  '>


          <div className=' w-full relative '>

            <div className="flex gap-7 justify-evenly lg:justify-start">
              <div className="relative flex flex-col items-center justify-end">
                <div className='h-[60px] w-[60px] grid place-content-center rounded-full bg-[#525FE1] -mb-[30px] z-[1]'>
                  <MilitaryTechOutlinedIcon sx={{ color: "white", fontSize: "30px" }} />
                </div>
                <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/gallery-1-2.jpg" alt="" className='m-auto md:m-0 rounded-md' />
              </div>
              <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/gallery-2-2.jpg" alt="" className=' rounded-md  m-auto mt-3 md:m-0' />
            </div>
            <div className="relative">

              <div className='hidden xl:flex  p-3  gap-2 bg-white rounded-lg shadow-[0px 10px 25px 0px rgba(0, 0, 0, 0.08)] absolute bottom-6 left-0 animate-bounce'>
                <div className='flex justify-center items-center'>
                  <div className='grid place-content-center h-10 w-10 rounded-full bg-[#FB7C5680]'>
                    <SentimentSatisfiedAltRoundedIcon sx={{ color: 'white' }} />
                  </div>
                </div>
                <div className='flex flex-col gap-0'>
                  <h3 className='font-bold  text-[#231F40] text-[20px]'>900K</h3>
                  <p className='text-[#6F6B80] text-sm font-medium'>Total Students</p>
                </div>
              </div>

              <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/gallery-3-2.jpg" alt="" className='rounded-md mt-7 m-auto' />
            </div>
          </div>

          <div className='w-full '>
            <span className='text-[#525FE1] text-base tracking-[1.6px] font-extrabold '>FAQ's</span>
            <h2 className='text-[40px] font-extrabold text-[#231F40]'>The highest result of education is tolerance</h2>
            <p className='text-[#6F6B80] text-base font-medium mt-8 mb-8'>Online education refers to a learning experience that takes place over the internet, using various digital tools and technologies. It offers students the flexibility to learn from anywhere at any time, often at their own pace</p>
            <div className="flex flex-wrap">
              <div className='flex gap-5 mb-7 w-full sm:w-1/2'>
                <div>
                  <div className='h-[60px] w-[60px] grid place-content-center rounded-full bg-[#F86F03]'>
                    <MenuBookIcon sx={{ color: "white", fontSize: "30px" }} />
                  </div>

                </div>
                <div>
                  <h3 className='font-bold  text-[#231F40] text-[20px] mb-3'>
                    Flexible Classes</h3>
                  <p className='text-[#6F6B80] text-base font-medium'>students can access course materials, participate in debate & discussions.</p>
                </div>
              </div>

              <div className='flex gap-5 mb-7 w-full sm:w-1/2'>
                <div>
                  <div className='h-[60px] w-[60px] grid place-content-center rounded-full bg-[#F86F03]'>
                    <CastleIcon sx={{ color: "white", fontSize: "30px" }} />
                  </div></div>
                <div>
                  <h3 className='font-bold  text-[#231F40] text-[20px] mb-3'>Educator Support</h3>
                  <p className='text-[#6F6B80] text-base font-medium'>Complete assignments from a remote location, such as their workplace.</p>
                </div>
              </div>

            </div>

            <div className='mt-14'></div>
            <a href="# " className='text-white font-bold transition-all bg-[#525FE1] rounded-[5px] max-w-[229px] py-[14px]  px-8 '>Learn More <ArrowForwardRoundedIcon /></a>
          </div>



        </div>

      </div>



      <div className="py-40 px-[15px] relative flex justify-center items-center flex-col overflow-hidden">
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-04-02-2.png" alt="" className='absolute top-64 -left-3  animate-updown-slow hidden sm:block' />
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-03-06-2.png" alt="" className='absolute bottom-36 right-1 hidden sm:block' />

        <div className="flex flex-wrap justify-between items-center w-full max-w-[1200px] px-[15px] mb-9 gap-6">
          <div className='text-center md:text-left mx-auto md:mx-0'>
            <span className='text-[#525FE1] text-basetracking-[1.6px] font-extrabold	 text-center '>WHO WE ARE</span>
            <h2 className='text-[40px] font-extrabold text-[#231F40] text-center'>We Offer The Best Carrier</h2>
          </div>
          <div className='flex flex-wrap gap-5 '>
            <button className='mx-auto md:mx-0 text-white font-bold transition-all bg-[#525FE1] rounded-[5px]  py-2  px-8 '>New Courses</button>
            <button className='mx-auto md:mx-0 hover:text-white text-[#231F40] font-bold transition-all hover:bg-[#525FE1] bg-[#F5F5F5] rounded-[5px]  py-2  px-8 '>Featured Courses</button>
            <button className='mx-auto md:mx-0 hover:text-white text-[#231F40] font-bold transition-all hover:bg-[#525FE1] bg-[#F5F5F5] rounded-[5px]  py-2  px-8 '>Popular Courses</button>
          </div>
        </div>
        <div className='flex justify-center items-center flex-wrap gap-[30px] max-w-[1200px]'>
          {FeaturedItem.map(item => <>
            <Card sx={{ zIndex: 1, boxShadow: "0 12px 30px rgb(82 95 225 / 10%)" }} className='home-two-feature bg-white hover:bg-[#525FE1]  p-4 w-full md:w-[370px]'>

              <div className="before-hover">
                <div className='rounded relative'>

                  <div className='text-sm h-[30px] px-3 bg-[#525FE1] rounded-e-sm absolute left-3 -bottom-[15px] font-semibold flex gap-2 items-center text-white z-[1] border-2 border-white '>
                    {item.time}
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
                  <div className='flex justify-between items-center  text-base font-medium mt-6'>
                    <div className='flex gap-1 items-center'><Avatar alt="Remy Sharp" src={item.avatar} sx={{ width: 34, height: 34 }} /> <span className='text-[#231F40]'> {item.name}</span></div>
                    <div className='flex gap-1 text-[#6F6B80] items-center'><ArticleOutlinedIcon sx={{ marginRight: "8px", fontSize: '14px', color: "#525FE1" }} /> {item.lesson}</div>
                  </div>
                  <h3 className='font-bold  text-[#231F40] text-[20px] my-5'>{item.title}</h3>
                </CardContent>
                <CardActions className='border-t-[1px] border-[rgba(35,31,64,.06)]'>
                  <div className='flex items-center mt-4 w-full'>
                    <p className='font-bold  text-[#231F40] text-[20px] '>
                      {item.fee}
                    </p>

                    <p className='text-[#6F6B80] text-base font-bold ms-4 line-through '>{item.offer}</p>
                    <div className="flex items-center justify-end w-full gap-3">
                      <Rating name="size-medium" defaultValue={item.ratingValue} precision={0.5} size="small" />{item.rating}</div>
                  </div>
                </CardActions>
              </div>
              <div className="after-hover ">
                <div className='flex justify-between '>

                  <div className='text-sm h-[30px] px-3 bg-[rgba(255,255,255,.15);] rounded-e-sm  font-semibold flex w-fit items-center border-[rgba(255,255,255,.15);] '>
                    {item.time}
                  </div>

                  <IconButton aria-label="delete" size="small" sx={{ backgroundColor: "rgba(255,255,255,.15)" }}>
                    <FavoriteIcon fontSize="small" sx={{ color: 'white' }} />
                  </IconButton>
                </div>
                <CardContent >
                  <h3 className='font-bold  text-[20px] my-5'>{item.title}</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis...</p>
                </CardContent>
                <CardActions className='flex flex-col'>
                  <div className='flex items-center w-full mt-3'>
                    <p className='font-bold   text-[20px] '>
                      {item.fee}
                    </p>

                    <p className=' text-base font-bold ms-4 line-through '>{item.offer}</p>
                  </div>
                  <div className='flex justify-between items-center  text-base font-medium mt-7 w-full'>
                    <div className='flex gap-1 items-center'><Avatar alt="Remy Sharp" src={item.avatar} sx={{ width: 34, height: 34 }} /> <span> {item.name}</span></div>
                    <div className='flex gap-1 items-center'><ArticleOutlinedIcon sx={{ marginRight: "8px", fontSize: '14px' }} /> {item.lesson}</div>
                  </div>

                  <div className='mt-6  w-full pt-5'>
                    <a href="# " className='bg-white font-bold transition-all text-[#525FE1] rounded-[5px] max-w-[229px] py-[14px]  px-8 '>Enroll Now <ArrowForwardRoundedIcon /></a></div>
                </CardActions>
              </div>
            </Card >
          </>)}
        </div>
      </div>

      <div className="lg:pt-40 md:pb-24 pt-2 px-[15px] relative flex justify-center items-center flex-col lg:h-[250px] ">
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-07-01-2.png" alt="" className='absolute top-20 -left-3  animate-xside-slow hidden sm:block ' />
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-04-03-2.png" alt="" className='absolute top-20 right-20 animate-updown-slow  hidden sm:block' />

        <div className='flex justify-center items-center flex-wrap gap-[30px] max-w-[1200px] z-10'>
          <div className="w-full p-[15px] shadow-md bg-white rounded-[5px] flex justify-center items-center relative " >

            <IconButton className='  custom-btn' sx={{ backgroundColor: "white", padding: "18px", boxShadow: "0 10px 20px rgb(0 0 0 / 7%)", position: "absolute", top: '50%', left: "50%", transform: "translate(-50%, -50%)", zIndex: 2 }}>
              <PlayArrowRoundedIcon className='text-[#525Fe1]' />
            </IconButton>

            <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/video-popup-bg-01-2.jpg" alt="" className='z-[1] rounded-[5px]' />

          </div>
        </div>

      </div>



      <div className="w-full flex items-center flex-col py-44 px-[15px] bg-center bg-no-repeat bg-cover pt-28 relative overflow-hidden "
        style={{ backgroundImage: `url(${"https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/home-two-events-2.jpg"})` }}>
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-03-07-2.png" alt="" className='absolute top-16 left-3' />
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-13-01-2.png" alt="" className='absolute top-16 right-0' />

        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-05-02-2.png" alt="" className='absolute bottom-16 right-0' />
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-13-05-2.png" alt="" className='absolute bottom-12 left-0 ' />



        <span className='text-[#525FE1] text-base tracking-[1.6px] font-extrabold	text-center lg:pt-60'>LET’S LEARN TOGETHER</span>
        <h2 className='text-[40px] font-extrabold text-[#231F40] mb-14 text-center'>Upcoming Educational Events</h2>

        <div className='w-full max-w-[1200px] flex flex-col  gap-[30px] relative'>
          <img decoding='async' loading='lazy' src={"https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-02-04-2.png"} alt="" className='absolute -top-9 -right-9 ' />
          {educational.map(item =>
            <div className="bg-white md:h-[182px] w-full flex flex-wrap justify-between items-center rounded p-5 md:flex-nowrap">
              <div className='flex gap-8 items-center flex-wrap md:flex-nowrap '>
                <img src={item.img} alt="" loading='lazy' decoding='async' className='m-auto w-auto h-auto md:h-[142px] md:w-[144.5px] object-cover rounded ' />
                <div className="flex flex-col m-auto ">
                  <h3 className='font-bold  text-2xl mb-5 text-[#231F40] text-center md:text-left'>{item.title}</h3>
                  <div className='flex flex-wrap justify-center gap-2 md:justify-start lg:justify-between items-center text-[#6F6B80] text-base font-medium  w-full '><span className='flex items-center'><CalendarMonthOutlined sx={{ marginRight: "8px", fontSize: '16.5px' }} />{item.date}</span> <span className='flex items-center'><AccessTimeRoundedIcon sx={{ marginRight: "8px", fontSize: '16.5px' }} />{item.time}</span><span className='flex items-center'><RoomOutlined sx={{ marginRight: "8px", fontSize: '16.5px' }} />{item.place}</span></div>
                </div>
              </div>
              <a href="# " className='text-white mx-auto mt-5 md:m-0  font-bold transition-all duration-1000 hover:bg-[#525FE1] bg-[#231F40]  rounded-[5px] max-w-[229px] py-[14px]  px-8 text-center'>{item.btn}<ArrowForwardRoundedIcon /></a>
            </div>)}

        </div>

      </div>


      <div className="w-full grid place-content-center pt-44 pb-20 px-[15px] bg-center bg-no-repeat bg-cover  relative overflow-hidden "
        style={{ backgroundImage: `url(${"https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/home-two-testimonial-2.jpg"})` }}>
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-23-2.png" alt="" className='absolute bottom-1 left-3' />
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-14-02-2.png" alt="" className='absolute top-16 right-0' />



        <span className='text-[#525FE1] text-base tracking-[1.6px] font-extrabold	text-center'>TESTIMONIALS</span>
        <h2 className='text-[40px] font-extrabold text-[#231F40] mb-14 text-center'>Our Lovely Students Feedback</h2>

        <div className='w-full max-w-[1200px] flex flex-wrap lg:flex-nowrap gap-11 lg:gap-0 overflow-hidden lg:overflow-visible'>

          <div className=' w-full m-auto slick-slider-homeTwo '>
            <Slider {...settings}>
              <div className="relative  px-3 pb-8 mb-11">
                <div className='absolute bottom-1 left-8  w-0 h-0 border-r-[30px] border-r-transparent border-t-[30px] border-t-white'></div>
                <div className='p-[30px] rounded-[5px] bg-white'>
                  <div className='flex gap-3 mb-[22px]'>
                    <div className='flex justify-center items-center'>
                      <Avatar variant="rounded" sx={{ width: "auto", height: 55 }} src='https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/client-03-2.png' />

                    </div>
                    <div className='flex flex-col '>
                      <h3 className='mb-[5px] font-bold text-2xl text-[#231F40]'>Stive Marlone</h3>
                      <p className='font-semibold text-base text-[#525FE1]'>Web Developer</p>
                    </div>
                  </div>
                  <p className='font-medium text-base text-[#6F6B80]  mb-[22px]'>“ I had an amazing experience at EduVibe. The instructors were knowledgeable and passionate, and the coursework was challenging and relevant to my future career. "</p>
                  <Rating name="size-medium" defaultValue={5} />
                </div>
              </div>
              <div className="relative  px-3 pb-8 mb-11">
                <div className='absolute bottom-1 left-8  w-0 h-0 border-r-[30px] border-r-transparent border-t-[30px] border-t-white'></div>
                <div className='p-[30px] rounded-[5px] bg-white'>
                  <div className='flex gap-3 mb-[22px]'>
                    <div className='flex justify-center items-center'>
                      <Avatar variant="rounded" sx={{ width: "auto", height: 55 }} src='https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/client-04-2.png' />

                    </div>
                    <div className='flex flex-col '>
                      <h3 className='mb-[5px] font-bold text-2xl text-[#231F40]'>James Carlson</h3>
                      <p className='font-semibold text-base text-[#525FE1]'>UI/UX Designer</p>
                    </div>
                  </div>
                  <p className='font-medium text-base text-[#6F6B80]  mb-[22px]'>“ The online courses at EduVibe were the perfect fit for my busy schedule. I was able to work full-time while pursuing my degree, thanks to the flexibility and convenience of online learning. "</p>
                  <Rating name="size-medium" defaultValue={5} />
                </div>
              </div>
              <div className="relative  px-3 pb-8 mb-11">
                <div className='absolute bottom-1 left-8  w-0 h-0 border-r-[30px] border-r-transparent border-t-[30px] border-t-white'></div>
                <div className='p-[30px] rounded-[5px] bg-white'>
                  <div className='flex gap-3 mb-[22px]'>
                    <div className='flex justify-center items-center'>
                      <Avatar variant="rounded" sx={{ width: "auto", height: 55 }} src='https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/client-01-2.png' />

                    </div>
                    <div className='flex flex-col '>
                      <h3 className='mb-[5px] font-bold text-2xl text-[#231F40]'>Nancy Phipps</h3>
                      <p className='font-semibold text-base text-[#525FE1]'>Digital Marketer</p>
                    </div>
                  </div>
                  <p className='font-medium text-base text-[#6F6B80]  mb-[22px]'>“ Attending EduVibe School of Business was one of the best decisions I've ever made. The curriculum was practical and industry-focused, and I was able to apply what I learned in the classroom."</p>
                  <Rating name="size-medium" defaultValue={5} />
                </div>
              </div>
              <div className="relative  px-3 pb-8 mb-11">
                <div className='absolute bottom-1 left-8  w-0 h-0 border-r-[30px] border-r-transparent border-t-[30px] border-t-white'></div>
                <div className='p-[30px] rounded-[5px] bg-white'>
                  <div className='flex gap-3 mb-[22px]'>
                    <div className='flex justify-center items-center'>
                      <Avatar variant="rounded" sx={{ width: "auto", height: 55 }} src='https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/client-02-2.png' />

                    </div>
                    <div className='flex flex-col '>
                      <h3 className='mb-[5px] font-bold text-2xl text-[#231F40]'>Stive Marlone</h3>
                      <p className='font-semibold text-base text-[#525FE1]'>Web Developer</p>
                    </div>
                  </div>
                  <p className='font-medium text-base text-[#6F6B80]  mb-[22px]'>“ I had an amazing experience at EduVibe. The instructors were knowledgeable and passionate, and the coursework was challenging and relevant to my future career. "</p>
                  <Rating name="size-medium" defaultValue={5} />
                </div>
              </div>
              <div className="relative  px-3 pb-8 mb-11">
                <div className='absolute bottom-1 left-8  w-0 h-0 border-r-[30px] border-r-transparent border-t-[30px] border-t-white'></div>
                <div className='p-[30px] rounded-[5px] bg-white'>
                  <div className='flex gap-3 mb-[22px]'>
                    <div className='flex justify-center items-center'>
                      <Avatar variant="rounded" sx={{ width: "auto", height: 55 }} src='https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/client-04-2.png' />

                    </div>
                    <div className='flex flex-col '>
                      <h3 className='mb-[5px] font-bold text-2xl text-[#231F40]'>James Carlson</h3>
                      <p className='font-semibold text-base text-[#525FE1]'>UI/UX Designer</p>
                    </div>
                  </div>
                  <p className='font-medium text-base text-[#6F6B80]  mb-[22px]'>“ The online courses at EduVibe were the perfect fit for my busy schedule. I was able to work full-time while pursuing my degree, thanks to the flexibility and convenience of online learning. "</p>
                  <Rating name="size-medium" defaultValue={5} />
                </div>
              </div>
              <div className="relative  px-3 pb-8 mb-11">
                <div className='absolute bottom-1 left-8  w-0 h-0 border-r-[30px] border-r-transparent border-t-[30px] border-t-white'></div>
                <div className='p-[30px] rounded-[5px] bg-white'>
                  <div className='flex gap-3 mb-[22px]'>
                    <div className='flex justify-center items-center'>
                      <Avatar variant="rounded" sx={{ width: "auto", height: 55 }} src='https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/client-01-2.png' />

                    </div>
                    <div className='flex flex-col '>
                      <h3 className='mb-[5px] font-bold text-2xl text-[#231F40]'>Nancy Phipps</h3>
                      <p className='font-semibold text-base text-[#525FE1]'>Digital Marketer</p>
                    </div>
                  </div>
                  <p className='font-medium text-base text-[#6F6B80]  mb-[22px]'>“ Attending EduVibe School of Business was one of the best decisions I've ever made. The curriculum was practical and industry-focused, and I was able to apply what I learned in the classroom."</p>
                  <Rating name="size-medium" defaultValue={5} />
                </div>
              </div>
              <div className="relative  px-3 pb-8 mb-11">
                <div className='absolute bottom-1 left-8  w-0 h-0 border-r-[30px] border-r-transparent border-t-[30px] border-t-white'></div>
                <div className='p-[30px] rounded-[5px] bg-white'>
                  <div className='flex gap-3 mb-[22px]'>
                    <div className='flex justify-center items-center'>
                      <Avatar variant="rounded" sx={{ width: "auto", height: 55 }} src='https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/client-03-2.png' />

                    </div>
                    <div className='flex flex-col '>
                      <h3 className='mb-[5px] font-bold text-2xl text-[#231F40]'>Stive Marlone</h3>
                      <p className='font-semibold text-base text-[#525FE1]'>Web Developer</p>
                    </div>
                  </div>
                  <p className='font-medium text-base text-[#6F6B80]  mb-[22px]'>“ I had an amazing experience at EduVibe. The instructors were knowledgeable and passionate, and the coursework was challenging and relevant to my future career. "</p>
                  <Rating name="size-medium" defaultValue={5} />
                </div>
              </div>
              <div className="relative  px-3 pb-8 mb-11">
                <div className='absolute bottom-1 left-8  w-0 h-0 border-r-[30px] border-r-transparent border-t-[30px] border-t-white'></div>
                <div className='p-[30px] rounded-[5px] bg-white'>
                  <div className='flex gap-3 mb-[22px]'>
                    <div className='flex justify-center items-center'>
                      <Avatar variant="rounded" sx={{ width: "auto", height: 55 }} src='https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/client-04-2.png' />

                    </div>
                    <div className='flex flex-col '>
                      <h3 className='mb-[5px] font-bold text-2xl text-[#231F40]'>James Carlson</h3>
                      <p className='font-semibold text-base text-[#525FE1]'>UI/UX Designer</p>
                    </div>
                  </div>
                  <p className='font-medium text-base text-[#6F6B80]  mb-[22px]'>“ The online courses at EduVibe were the perfect fit for my busy schedule. I was able to work full-time while pursuing my degree, thanks to the flexibility and convenience of online learning. "</p>
                  <Rating name="size-medium" defaultValue={5} />
                </div>
              </div>
              <div className="relative  px-3 pb-8 mb-11">
                <div className='absolute bottom-1 left-8  w-0 h-0 border-r-[30px] border-r-transparent border-t-[30px] border-t-white'></div>
                <div className='p-[30px] rounded-[5px] bg-white'>
                  <div className='flex gap-3 mb-[22px]'>
                    <div className='flex justify-center items-center'>
                      <Avatar variant="rounded" sx={{ width: "auto", height: 55 }} src='https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/client-01-2.png' />

                    </div>
                    <div className='flex flex-col '>
                      <h3 className='mb-[5px] font-bold text-2xl text-[#231F40]'>Nancy Phipps</h3>
                      <p className='font-semibold text-base text-[#525FE1]'>Digital Marketer</p>
                    </div>
                  </div>
                  <p className='font-medium text-base text-[#6F6B80]  mb-[22px]'>“ Attending EduVibe School of Business was one of the best decisions I've ever made. The curriculum was practical and industry-focused, and I was able to apply what I learned in the classroom."</p>
                  <Rating name="size-medium" defaultValue={5} />
                </div>
              </div>

            </Slider>
          </div>

        </div>
      </div>

      <div className='w-full grid place-content-center pb-44  px-[15px]' >
        <div className='w-full max-w-[1200px] flex flex-wrap lg:flex-nowrap gap-11 lg:gap-0'>

          <div className=' w-full relative '>
            <div className='w-full flex flex-wrap mx-auto md:justify-center'>
              {community.map(item => <>
                <div className='mx-auto md:mx-0 mt-[30px] bg-white md:me-[30px] shadow px-[30px] py-[50px] flex justify-center items-center rounded-[5px] h-72 w-[230px] flex-col '>
                  <img src={item.img} loading='lazy' decoding='async' alt="" className='mb-7' />
                  <span className='text-[40px] font-extrabold text-[#231F40]'><Odometer value={item.price} /></span>
                  <p className='text-[#6F6B80] text-base font-medium'>{item.title}</p>
                </div>
              </>)}
            </div>

            <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-04-01-2.png" alt="" className='absolute -left-6 -bottom-6 -z-[1] hidden lg:block' />
          </div>

          <div className='w-full grid place-content-center'>
            <span className='text-[#525FE1] text-base tracking-[1.6px] font-extrabold '>WHY CHOOSE US</span>
            <h2 className='text-[40px] font-extrabold text-[#231F40]'>Creating A Community Of Life Long Learners</h2>
            <p className='text-[#6F6B80] text-base font-medium mt-8 mb-8'>Our courses are designed by industry experts and delivered through interactive online modules, allowing you to learn at your own pace.</p>
            <div className='flex gap-5 mb-7'>
              <div>
                <div className='h-[50px] w-[50px] grid place-content-center rounded-full bg-[#FB7C561A]'>
                  <MenuBookIcon sx={{ color: "#F86F03" }} />
                </div>

              </div>
              <div>
                <h3 className='font-bold  text-[#231F40] text-[20px] mb-3'>Trusted By Thousands</h3>
                <p className='text-[#6F6B80] text-base font-medium'>Online learning has become increasingly popular in recent years, offering a flexible and convenient way for learning.</p>
              </div>
            </div>

            <div className='flex gap-5 mb-7'>
              <div>
                <div className='h-[50px] w-[50px] grid place-content-center rounded-full bg-[#525FE11A]'>
                  <CastleIcon sx={{ color: "#525FE1" }} />
                </div></div>
              <div>
                <h3 className='font-bold  text-[#231F40] text-[20px] mb-3'>Unlimited Resources With Strong Support</h3>
                <p className='text-[#6F6B80] text-base font-medium'>Our platform also features a collaborative learning environment, where you can connect with fellow learners.</p>
              </div>
            </div>

          </div>

        </div>
      </div>


      <div className=" py-36 px-[15px]  relative flex justify-center items-center overflow-hidden bg-[#525FE1]" >
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-03-04-2.png" alt="" className='absolute top-7 left-20' />
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-16-2.png" alt="" className='absolute top-9 right-0' />
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-13-02-2.png" alt="" className='absolute bottom-14 left-3' />
        <div className='flex w-full max-w-[1200px] justify-between flex-wrap md:flex-nowrap'>
          <div className="flex flex-col">
            <span className='text-white text-base tracking-[1.6px] font-extrabold	 text-center md:text-left'>LET US HELP</span>
            <h2 className='text-[40px] font-extrabold text-white  mt-[5px] text-center md:text-left'>Finding Your Right Courses</h2>
          </div>
          <div className='flex flex-wrap gap-12 items-center'>
            <a href="# " className='bg-white text-[#525FE1] font-bold text-lg transition-colors rounded-[5px] px-[31px] py-[14.5px]'>Get Started Now <ArrowForwardRoundedIcon /></a>
            <a href="# " className='contact-number-hTwo text-white after:bg-white'><Call sx={{ mb: .5 }} /> +728-238-399-200</a>
          </div>
        </div>
      </div>


      <div className="w-full flex flex-col justify-center items-center  py-40 px-[15px] bg-center bg-no-repeat bg-cover  relative overflow-hidden "
        style={{ backgroundImage: `url(${"https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/02/home-two-blog-2.jpg"})` }}>


        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-09-2.png" alt="" className='absolute top-36 -left-7 hidden sm:block' />
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-24-2.png" alt="" className='absolute top-36 -right-11 hidden sm:block' />
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-12-2.png" alt="" className='absolute bottom-44 left-1 hidden sm:block' />
        <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2022/10/shape-11-2.png" alt="" className='absolute bottom-36 right-12  hidden sm:block' />

        <span className='text-[#525FE1] text-base tracking-[1.6px] font-extrabold	'>LATEST FROM NEWS</span>
        <h2 className='text-[40px] font-extrabold text-[#231F40] mb-9 text-center'>Get Our Every News & Blog</h2>
        <div className='flex justify-center items-center flex-wrap gap-[30px] max-w-[1200px]'>
          {BlogItem.map(item => <>
            <Card sx={{ zIndex: 1, backgroundColor: "white" ,boxShadow:"none" }} className='img-expand  hover:shadow-lg p-4 w-full md:w-[370px]'>

              <div className='rounded overflow-hidden relative'>
                
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
                  <div className='flex gap-1 items-center text-base font-semibold text-[#6F6B80]'><LocalOfferOutlined sx={{color:"#525FE1",fontSize:"14px"}}/> {item.name}</div>
                </div>
                <h3 className='font-bold  text-[#231F40] text-[24px] my-5'>{item.title}</h3>
                <div className='text-[#6F6B80] text-base font-medium flex justify-between'>
               <span className='flex gap-2 items-center'><CalendarMonthOutlined sx={{mb:.5}}/>{item.student}</span>   <a href="# " className='contact-number-hTwo text-[#525FE1] after:bg-[#525FE1]'> Read More <ArrowForwardRoundedIcon/></a> 
                </div>
              </CardContent>
            </Card ></>)}



        </div>

      </div>


    </div >
  )
}

export default HomeTwo;