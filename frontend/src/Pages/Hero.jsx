import React from 'react'
import { LoginButton } from '../Components'

const Hero = () => {
  return (
    <div>
      

      <section>
            <div className="w-full relative pb-10 px-6 xl:px-0">
                <img className="absolute w-full inset-0 dark:hidden h-full object-cover object-center" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-bg.png" alt="we care family"/>
                {/* <nav className="lg:hidden relative z-40">
                    <div className="flex py-6 justify-between items-center px-4">
                        <div>
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg3.svg" alt="logo" />
                        </div> 
                        <div className="flex items-center">
                            {/* <ul id="list" className="hidden p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16">
                                <li className="flex cursor-pointer text-gray-600 dark:text-gray-200 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">Products</span>
                                    </a>
                                </li>
                                <li className="flex flex-col cursor-pointer text-gray-600 dark:text-gray-200 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">Claims</span>
                                    </a>
                                </li>
                                <li className="flex cursor-pointer text-gray-600 dark:text-gray-200 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">Renewals</span>
                                    </a>
                                </li>
                                <li className="flex flex-col cursor-pointer text-gray-600 dark:text-gray-200 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                                    <a href="javascript:void(0)">
                                        <span className="ml-2 font-bold">Reports</span>
                                    </a>
                                </li>
                            </ul> */}
                            {/* <div className="xl:hidden dark:bg-white">
                               <img id="open" onclick="MenuHandler(true)"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg1.svg" alt="menu" />
                                <div id="close" className="hidden close-m-menu" onclick="MenuHandler(false)">
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg2.svg" alt="cross" />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav> */} */
                <nav  className="relative z-10 w-full lg:flex justify-between  items-center p-20">
                    <div className="w-1/6">
                        <a>
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg3.svg" alt="logo" />
                        </a>
                    </div>
                    <div className="w-5/6">
                        <div className="flex items-center justify-end">
                            {/* <ul className="text-gray-800 dark:text-white lg:space-x-8 flex items-center leading-none">
                                <li>
                                    <a className="hover:text-indigo-500 text-lg focus:text-indigo-500" href="#">Products</a>
                                </li>
                                <li className="ml-4 hover:text-indigo-500 ">
                                    <a className="focus:text-indigo-500 text-lg" href="javascript:void(0)">Claims</a>
                                </li>
                                <li className="ml-4 hover:text-indigo-500 focus:text-indigo-500">
                                    <a className="focus:text-indigo-500 text-lg" href="javascript:void(0)">Renewal</a>
                                </li>
                                <li className="ml-4 hover:text-indigo-500 focus:text-indigo-500">
                                    <a className="focus:text-indigo-500 text-lg"  href="javascript:void(0)">Support</a>
                                </li>
                            </ul> */}
                            <div className="pl-40 mb-3">
                                <LoginButton style="focus:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 hover:bg-indigo-600 text-white px-6 py-2 font-semibold rounded focus:outline-none"/>
                                {/* <button role="button" aria-label="live chat" className="focus:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 hover:bg-indigo-600 text-white px-6 py-2 font-semibold rounded focus:outline-none">Join in</button> */}
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="pt-6 lg:flex items-center relative z-10 container mx-auto">
                    <div className="w-full lg:w-1/2 h-full lg:pr-10 xl:pr-0">
                        <img  className="mx-auto" src="https://cdn.tuk.dev/assets/templates/weCare/hero2-left.png"  alt="people smiling"/>
                    </div>
                    <div  role="contentinfo"  className="w-full lg:w-1/2 h-full">
                        <p  className="text-indigo-700  text-2xl mb-4">Smart Recommendations for the Inquisitive Mind</p>
                        <h1  className="text-indigo-700 text-4xl lg:text-6xl font-black mb-8">Curated Research, Unmatched</h1>
                        <p  className="text-gray-800 dark:text-white font-regular mb-8">Explore a vast library of articles tailored to your interests. Empower your learning journey and stay up-to-date with the latest breakthroughs</p>
                        <div className="mt-3 w-full">
                            <LoginButton style="focus:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 hover:bg-indigo-600 text-white px-10 py-2 font-semibold rounded focus:outline-none w-[40%]"/>
                                {/* <button role="button" aria-label="live chat" className="focus:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 bg-indigo-700 hover:bg-indigo-600 text-white px-10 py-2 font-semibold rounded focus:outline-none w-[40%]">Join in</button> */}
                            </div>
                    </div>
                    
                </div>
            </div>
        </section>
       
      
    



    </div>
  )
}

export default Hero
