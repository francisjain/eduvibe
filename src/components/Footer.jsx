import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Footer = () => {
  return (
    <div className='bg-[#231F40] flex flex-col justify-center items-center px-[15px]'>
      <div className='w-full max-w-[1200px] flex justify-between flex-wrap lg:flex-nowrap gap-9 lg:gap-0 py-[115px]'>

        <div className='w-full lg:max-w-[300px]'>
          <img decoding='async' loading='lazy' src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/02/logo-white-2.png" alt="" />
          <p className='text-base text-white my-11 w-full md:max-w-[600px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.</p>
          <div className='flex gap-4'>
            <div className='w-[50px] h-[50px] grid place-content-center rounded-[5px] text-white bg-[#FFFFFF1A] hover:bg-[#525Fe1] duration-1000 ease-out'>
              <FacebookIcon />
            </div>
            <div className='w-[50px] h-[50px] grid place-content-center rounded-[5px] text-white bg-[#FFFFFF1A] hover:bg-[#525Fe1] duration-1000 ease-out'>
              <WhatsAppIcon />
            </div>
            <div className='w-[50px] h-[50px] grid place-content-center rounded-[5px] text-white bg-[#FFFFFF1A] hover:bg-[#525Fe1] duration-1000 ease-out'>
              <EmailRoundedIcon />
            </div>
            <div className='w-[50px] h-[50px] grid place-content-center rounded-[5px] text-white bg-[#FFFFFF1A] hover:bg-[#525Fe1] duration-1000 ease-out'>
              <TwitterIcon />
            </div>
          </div>
        </div>

        <div className='w-full sm:w-auto'>
          <h5 className='text-2xl text-white font-bold mb-11'>Explore</h5>
          <ul className='flex flex-col gap-9'>
            <li><a href='# ' className='text-white hover:text-[#525Fe1] font-medium text-base'><KeyboardDoubleArrowRightRoundedIcon sx={{ marginRight: "7px" }} />About Us</a></li>
            <li><a href='# ' className='text-white hover:text-[#525Fe1] font-medium text-base'><KeyboardDoubleArrowRightRoundedIcon sx={{ marginRight: "7px" }} />Upcoming Events</a></li>
            <li><a href='# ' className='text-white hover:text-[#525Fe1] font-medium text-base'><KeyboardDoubleArrowRightRoundedIcon sx={{ marginRight: "7px" }} />Blog & News</a></li>
            <li><a href='# ' className='text-white hover:text-[#525Fe1] font-medium text-base'><KeyboardDoubleArrowRightRoundedIcon sx={{ marginRight: "7px" }} />FAQ Question</a></li>
            <li><a href='# ' className='text-white hover:text-[#525Fe1] font-medium text-base'><KeyboardDoubleArrowRightRoundedIcon sx={{ marginRight: "7px" }} />Testimonial</a></li>
            <li><a href='# ' className='text-white hover:text-[#525Fe1] font-medium text-base'><KeyboardDoubleArrowRightRoundedIcon sx={{ marginRight: "7px" }} />Privacy Policy</a></li>
          </ul>
        </div>
        <div className='w-full sm:w-auto'>
          <h5 className='text-2xl text-white font-bold mb-11'>Useful Links</h5>
          <ul className='flex flex-col gap-9'>
            <li><a href='# ' className='text-white hover:text-[#525Fe1] font-medium text-base'><KeyboardDoubleArrowRightRoundedIcon sx={{ marginRight: "7px" }} />Contact Us</a></li>
            <li><a href='# ' className='text-white hover:text-[#525Fe1] font-medium text-base'><KeyboardDoubleArrowRightRoundedIcon sx={{ marginRight: "7px" }} />Pricing Plan</a></li>
            <li><a href='# ' className='text-white hover:text-[#525Fe1] font-medium text-base'><KeyboardDoubleArrowRightRoundedIcon sx={{ marginRight: "7px" }} />Gallery</a></li>
            <li><a href='# ' className='text-white hover:text-[#525Fe1] font-medium text-base'><KeyboardDoubleArrowRightRoundedIcon sx={{ marginRight: "7px" }} />Instructor</a></li>
            <li><a href='# ' className='text-white hover:text-[#525Fe1] font-medium text-base'><KeyboardDoubleArrowRightRoundedIcon sx={{ marginRight: "7px" }} />Purchase Guide</a></li>
          </ul>
        </div>

        <div className='md:max-w-[300px]'>
          <h5 className='text-2xl text-white font-bold mb-11'>Contact Info</h5>
          <ul className='flex flex-col gap-9'>
            <li><a href='# ' className='text-white hover:text-[#525Fe1] font-medium text-base flex gap-[7px]'><LocationOnOutlinedIcon />275 Quadra Street Victoria Road, New York</a></li>
            <li><a href='# ' className='text-white hover:text-[#525Fe1] font-medium text-base'><LocalPhoneRoundedIcon sx={{ marginRight: "7px" }} />+ 1 (237) 382-2839</a></li>
            <li><a href='# ' className='text-white hover:text-[#525Fe1] font-medium text-base'><LocalPhoneRoundedIcon sx={{ marginRight: "7px" }} />+ 1 (237) 382-2840</a></li>
            <li><a href='# ' className='text-white hover:text-[#525Fe1] font-medium text-base'><EmailOutlinedIcon sx={{ marginRight: "7px" }} />yourmailaddress@example.com</a></li>
          </ul>
        </div>


      </div>
      <div className="text-center pb-10 text-white text-base ">
        Copyright 2023 EduVibe | Developed By DevsVibe. All Rights Reserved
      </div>
    </div>
  )
}

export default Footer