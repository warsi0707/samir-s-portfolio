'use client'
import { useState } from "react";
import { IoIosSend } from "react-icons/io";

export default function ContactPage(){
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    

    const handleSendMsg =async(e)=>{
        e.preventDefault()
        try{
            if(!fullName || !message){
                setError("Email and message required")
                return
            }
            const formData = new FormData()
            formData.append("access_key", "a77a35cf-dcf8-4910-8c91-535cf4dd5603"),
            formData.append("fullName", fullName)
            formData.append('email', email),
            formData.append("message", message)

            const response = await fetch("https://api.web3forms.com/submit",{
                method: 'POST',
                body: formData
            })
            const result = await response.json()
            setSuccess(result.message)
        }catch(error){
            setError(error)
        }
    }

    return (

        <div id="Contact" className="w-full py-32 md:w-[900px] mx-auto p-2">
            <div className="flex flex-col gap-10">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold">Contact Me</h1>
                    <p>Please contact me directly at <span className="underline">samir.warsi2001@gmail.com</span> or through this form.</p>
                </div>
                <form onSubmit={handleSendMsg} action="">
                <div className="w-full md:px-32 flex flex-col gap-5">
                     <input value={fullName} onChange={(e)=> setFullName(e.target.value)} type="text" className=" w-full p-3 rounded-md bg-white text-black text-xl font-semibold outline-none" placeholder="Full Name"  />
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} type="text" className=" w-full p-3 rounded-md bg-white text-black text-xl font-semibold outline-none" placeholder="Your email"  />
                    <textarea rows={7} value={message} onChange={(e)=> setMessage(e.target.value)} className=" w-full p-3 rounded-md bg-white text-black text-xl font-semibold outline-none" placeholder="Your Message" id=""></textarea>
                    <div className="flex gap-3 items-center">
                        <button type="submit" className="flex items-center bg-slate-300 w-32 justify-center p-3 rounded-md text-black cursor-pointer font-semibold text-md gap-2">
                            <p>Submit</p>
                            <p><IoIosSend/></p>
                        </button>
                        {success && <p className="text-green-600">{success}</p>}
                        {error && <p className="text-red-600">{error  }</p>}
                         
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}