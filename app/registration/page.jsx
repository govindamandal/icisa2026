import Image from 'next/image'
import React from 'react'

function RegistrationPage() {
  return (
    <section>
        <div className="container mx-auto px-12 sm:px-6 py-4">
            <h4 className="text-2xl font-bold mt-8 text-center sm:text-left text-red-600">Registration Procedure:</h4>
            <br />
            <ol className="list-decimal list-inside">
            <li>Pay the registration fee using the respective link as follows: <br />
                <ul className="list-disc list-inside ml-10">
                <li>For Indian Delegates: 
                    {/* <a className="font-medium text-blue-600 hover:underline" href="https://eazypay.icicibank.com/eazypayLink?P1=yyWoH6a5jVOW9AfoZEXS9w==" target="_blank">link</a> */}
                </li>
                <li>For International Delegates: 
                    {/* <a className="font-medium text-blue-600 hover:underline" href="https://rzp.io/l/vOTQuQqKgr" target="_blank">link</a> */}
                </li>
                </ul>and take a snapshot of the payment details, which will be required to upload in registration form.
            </li>
            <li>Fill the 
                {/* <a className="font-medium text-blue-600 hover:underline" href="https://forms.gle/kp8UDxa5HCMfjY7j7" target="_blank">registration form</a>. */}
            <li>For accommodation pay fee 
                {/* <a className="font-medium text-blue-600 hover:underline" href="https://eazypay.icicibank.com/eazypayLink?P1=yyWoH6a5jVOW9AfoZEXS9w==" target="_blank"> here</a>, take snapshot of payment details and fill the <a className="font-medium text-blue-600 hover:underline" href="https://forms.gle/tWKJ1thddXFcJqxt7" target="_blank">Accommodation Registration Form.</a> */}
            </li>
            <li>**Accommodation will be provided inside the institute campus to the registered participants on FCFS basis, at the nominal rate of Rs 500 per day per person on a sharing basis. Each participant needs to register for accommodation by {/* 26th July 2024. */}</li>
            </li>
            </ol>
        </div>
        <div>
            <div className="container mx-auto px-12 sm:px-6 py-4 bg-indigo-200">
            <div className="flex items-center space-x-4">
                <h2 className="text-2xl font-bold my-8"> Registration Fee for Indian Delegates </h2>
                <Image
                    loading="lazy"
                    width="32"
                    height="16"
                    decoding="async"
                    data-nimg="1" 
                    src="https://govindamandal.github.io/icisa2026/assets/indian.webp"
                    style={{ color: "transparent", height: "auto", width: "auto" }}
                />
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 "></th>
                    <th colspan="2" scope="col" className="text-xl font-black text-gray-900 text-center px-6 py-5">Regular Registration <br />
                    {/* <span className="text-red-500">(02-26 July 2024)</span> */}
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-gray-200 ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900  dark:text-white "></th>
                    <td className="text-xl font-black text-blue-700 px-6 py-4">{/*IEEE */} Members</td>
                    <td className="text-xl font-black text-blue-700 px-6 py-4 bg-gray-200 ">Non-{/*IEEE */} Members</td>
                </tr>
                <tr className="border-b border-gray-200 ">
                    <th scope="row" className="text-base font-black text-gray-900 px-6 py-4 font-medium text-gray-900  dark:text-white ">Student (UG/ PG/ PhD)</th>
                    <td className="text-base font-black text-gray-900 px-6 py-4">₹{/* 5000 */}</td>
                    <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">₹ {/*7200 */}</td>
                </tr>
                <tr className="border-b border-gray-200 ">
                    <th scope="row" className="text-base font-black text-gray-900 px-6 py-4 font-medium text-gray-900  dark:text-white ">Academician/ Industrial Professionals</th>
                    <td className="text-base font-black text-gray-900 px-6 py-4">₹ {/*7000*/}</td>
                    <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">₹ {/*8400 */}</td>
                </tr>
                <tr className="border-b border-gray-200 ">
                    <th scope="row" className="text-base font-black text-gray-900 px-6 py-4 font-medium text-gray-900  dark:text-white ">Student Attendees</th>
                    <td className="text-base font-black text-gray-900 px-6 py-4">₹ {/* 2500 */}</td>
                    <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">₹ {/* 3500 */}</td>
                </tr>
                <tr>
                    <th scope="row" className="text-base font-black text-gray-900 px-6 py-4 font-medium text-gray-900  dark:text-white ">Professional Attendees</th>
                    <td className="text-base font-black text-gray-900 px-6 py-4">₹ {/* 3000 */}</td>
                    <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">₹ {/*4000 */}</td>
                </tr>
                </tbody>
            </table>
            </div>
            <br />
            <br />
            <div className="container mx-auto px-12 sm:px-6 py-4 bg-indigo-300">
            <h2 className="text-2xl font-bold my-8">Registration Fee for International Delegates</h2>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3 "></th>
                    <th colspan="2" scope="col" className="text-xl font-black text-gray-900 text-center px-6 py-5">Regular Registration <br />
                    {/* <span className="text-red-500">(02-26 July 2024)</span> */}
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b border-gray-200 ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900  dark:text-white "></th>
                    <td className="text-xl font-black text-blue-700 px-6 py-4">{/*IEEE*/} Members</td>
                    <td className="text-xl font-black text-blue-700 px-6 py-4 bg-gray-200 ">Non-{/*IEEE*/} Members</td>
                </tr>
                <tr className="border-b border-gray-200 ">
                    <th scope="row" className="text-base font-black text-gray-900 px-6 py-4 font-medium text-gray-900  dark:text-white ">Student (UG/ PG/ PhD)</th>
                    <td className="text-base font-black text-gray-900 px-6 py-4">$ {/*200 */}</td>
                    <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">$ {/*250 */}</td>
                </tr>
                <tr className="border-b border-gray-200 ">
                    <th scope="row" className="text-base font-black text-gray-900 px-6 py-4 font-medium text-gray-900  dark:text-white ">Academician/ Industrial Professionals</th>
                    <td className="text-base font-black text-gray-900 px-6 py-4">$ {/*300 */}</td>
                    <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">$ {/*350 */}</td>
                </tr>
                <tr className="border-b border-gray-200 ">
                    <th scope="row" className="text-base font-black text-gray-900 px-6 py-4 font-medium text-gray-900  dark:text-white ">Student Attendees</th>
                    <td className="text-base font-black text-gray-900 px-6 py-4">$ {/*100 */}</td>
                    <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">$ {/*150 */}</td>
                </tr>
                <tr>
                    <th scope="row" className="text-base font-black text-gray-900 px-6 py-4 font-medium text-gray-900  dark:text-white ">Professional Attendees</th>
                    <td className="text-base font-black text-gray-900 px-6 py-4">$ {/*150 */}</td>
                    <td className="text-base font-black text-gray-900 px-6 py-4 bg-gray-200 ">$ {/*200 */}</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    </section>
  )
}

export default RegistrationPage