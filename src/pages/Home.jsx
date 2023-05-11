import React from 'react'
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <div className="bg-[#dbd5cd] text-gray-700 px-4 lg:px-40 grid grid-cols-2 py-16 min-h-[400px] relative">
                <div className="flex flex-col gap-8 w-screen">
                    <h2 className="text-[35px] font-medium">Calyco</h2>
                    <p className="text-[18px] w-[90%] max-w-[400px]">
                        We are a leading manufacturer of high-quality calcined petroleum
                        coke (CPC) and allied products based in Nagpur, India.
                    </p>
                    <p
                        className={`text-[20px] px-[27px] py-[10px] border-2 border-gray-600 w-fit cursor-pointer button`}
                    >
                        <Link href="/about-us" style={buttonLink} className='link text-gray-600 text-decoration-none hover:text-gray-600'>
                            About us
                        </Link>
                    </p>
                </div>
                <div className="w-100 h-100 hidden md:block">
                    <img
                        src="/assets/logo.png"
                        alt="logo img"
                        width="240"
                        height="240"
                        className="m-auto"
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;

// Styles
const buttonStyle = {
    position: 'relative',
    display: 'inline-block',
}
const buttonLink = {


}