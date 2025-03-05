import React from 'react'

function Footer() {
  return (
    <footer className="bg-primary10" id="footer">
        <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-start space-x-4">
                    <div className="text-xl text-gray-700">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Address</h3>
                        <p>National Institute of Technology Delhi</p>
                        <p>Plot No. FA7, Zone P1, GT Karnal Rd</p>
                        <p>Delhi - 110036</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="text-xl text-gray-700">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 10c-1 1-1 2-2 2s-2-1-3-2-2-2-2-3 1-1 2-2-2-4-3-4-3 3-3 3c0 2 2.055 6.055 4 8s6 4 8 4c0 0 3-2 3-3s-3-4-4-3z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Contact Us</h3>
                        <ul className="space-y-1">
                            <li><a href="mailto:karanverma@nitdelhi.ac.in" className="text-primary hover:underline">karanverma@nitdelhi.ac.in</a></li>
                            <li><a href="mailto:gautam@nitdelhi.ac.in" className="text-primary hover:underline">gautam@nitdelhi.ac.in</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Social Media Handles</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://www.instagram.com/nitdelhiofficial" target="_blank" className="text-gray-700 hover:text-primary">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 2A5.5 5.5 0 002 7.5v9A5.5 5.5 0 007.5 22h9a5.5 5.5 0 005.5-5.5v-9A5.5 5.5 0 0016.5 2h-9zM12 7.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm6.5.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"></path>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/nitdelhiofficialpage" target="_blank" className="text-gray-700 hover:text-primary">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 12.07C22 6.477 17.523 2 12 2S2 6.477 2 12.07c0 4.987 3.657 9.12 8.433 9.87v-6.978H8.33V12.07h2.103V9.713c0-2.08 1.26-3.216 3.157-3.216.913 0 1.871.162 1.871.162v2.064h-1.055c-1.04 0-1.361.646-1.361 1.307v1.592h2.316l-.37 2.892h-1.946v6.978C18.343 21.19 22 17.056 22 12.07z"></path>
                            </svg>
                        </a>
                        <a href="https://twitter.com/nitdofficial" target="_blank" className="text-gray-700 hover:text-primary">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.38 4.38 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <p className="text-sm text-center mt-12">Powered by Department of Computer Science &amp; Engineering, NIT Delhi</p>
        </div>
        <div className="bg-black text-white text-sm py-2">
            <div className="container mx-auto text-center">
                <p>Designed and Developed by - <a href="https://linkedin.com/in/govinda-mandal" className="underline hover:text-primary" target='_blank'>Govinda Mandal</a></p>
            </div>
        </div>
    </footer>

  )
}

export default Footer