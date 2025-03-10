"use client"
import { useState, useEffect } from "react";
import Loading from "@/app/loading";
import { motion } from "framer-motion"
import { fadeUpVariant, fadeUpVariant2 } from "@/utils/custom"
import Link from "next/link"
import Image from "next/image";

export default function PartnerWithUs() {
    const [loading,setLoading] = useState(false)
    const [formValues, setFormValues] = useState({
        access_key: "e745f91f-06f5-4e24-a184-6e6046385fec",
        name: "",
        email: "",
        phone: "",
        businessName:"",
        businessAddress:"",
        businessDetails: "",
    })

    const handleChange = (e) =>{
      const name = e.target.name;
      const value = e.target.value;
      setFormValues({ ...formValues, [name]: value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formValues),
        });
        const result = await response.json();
        if (result.success) {
            window.alert("Thakyou for your submission. We'll reach out to you soon.");
            setFormValues({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
            setLoading(false)
        } else (
            setLoading(false)
        )
    }

    useEffect(() => {
        setTimeout(() => {
        setLoading(false);
        }, 1500);
    }, []);
    
    if (loading) return <Loading />
    return (
        <section className="relative flex items-center justify-center">
            <div className="px-6 md:px-20 my-36 container mx-auto place-items-center">
                <div className="flex flex-row md:flex-col items-center justify-center mb-10">
                    <motion.div 
                        variants={fadeUpVariant}
                        initial="initial"
                        animate="animate"
                        className=" text-center text-black flex flex-col max-w-4xl justify-center mb-8 px-6 md:px-24">
                            <h1 className="text-4xl lg:text-6xl font-medium mb-6">
                                Partner with <br/> <span className="text-[#345DA3]">Sabika Group </span> 
                            </h1>
                            <p>
                                Whether you’re an entrepreneur with a vision or an established business seeking 
                                growth, <br /> let’s build something remarkable together.
                            </p>
                    </motion.div>
                </div>
                <motion.div 
                    variants={fadeUpVariant2}
                    initial="initial"
                    animate="animate"
                    className="bg-[#EFF1F7] w-full md:w-[60%] px-6 py-8 md:px-12 md:py-16">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="mb-2 text-left ">Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Type your name" 
                                className="w-full text-black rounded-lg bg-gray border-2 border-grey p-2" 
                                value={formValues.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="mb-2 text-left">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Type your email address" 
                                className="w-full text-black rounded-lg bg-gray border-2 border-grey p-2" 
                                value={formValues.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="mb-2 text-left">Phone Number</label>
                            <input
                                type="number"
                                name="phone"
                                placeholder="Type your phone number" 
                                className="w-full text-black rounded-lg bg-gray border-2 border-grey p-2" 
                               value={formValues.phone}
                                onChange={handleChange}  
                            />
                        </div>

                        <div className="mb-6">
                            <label className="mb-2 text-left ">Business Name</label>
                            <input
                                type="text"
                                name="businessName"
                                placeholder="Type your business name" 
                                className="w-full text-black rounded-lg bg-gray border-2 border-grey p-2" 
                                value={formValues.businessName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-6">
                            <label className="mb-2 text-left ">Business Address</label>
                            <input
                                type="text"
                                name="businessAdress"
                                placeholder="Type your business addres" 
                                className="w-full text-black rounded-lg bg-gray border-2 border-grey p-2" 
                                value={formValues.businessAddress}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-6">
                            <label className="mb-2 text-left">Business Details</label>
                            <textarea
                                placeholder="Type your message" 
                                name="businessDetails"
                                className="w-full text-black rounded-lg bg-gray border-2 border-grey p-2" 
                                value={formValues.businessDetails}
                                onChange={handleChange} 
                            />
                        </div>

                        {loading ? (
                            <button
                            disabled
                            type="button"
                            className="w-full text-white bg-[#3F3BF2] justify-center font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 inline-flex items-center"
                            >
                            <svg
                                aria-hidden="true"
                                role="status"
                                className="inline w-4 h-4 mr-3 text-white justify-center animate-spin"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="#E5E7EB"
                                />
                                <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentColor"
                                />
                            </svg>
                            Please Wait...
                            </button>
                        ) : (
                            <button
                            type="submit"
                            className="w-full text-white bg-[#245CA1] text-white rounded-md px-5 py-2.5 text-center"
                            >
                            Submit
                            </button>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    )
}


// "use client"
// import { useState, useEffect } from "react";
// import Loading from "@/app/loading";
// import { motion } from "framer-motion"
// import { fadeUpVariant,fadeUpVariant2 } from "@/utils/custom"

// export default function PartnerWithUs() {
//     const [loading,setLoading] = useState(true)
//         useEffect(() => {
//             setTimeout(() => {
//             setLoading(false);
//             }, 1500);
//         }, []);
        
//     if (loading) return <Loading />
//     return (
//         <section className="flex items-center justify-center justify-center py-32">
//             <div className=" px-6 md:px-12 container mx-auto">
//                 <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
//                     <motion.div 
//                         variants={fadeUpVariant}
//                         initial="initial"
//                         animate="animate"
//                         className="text-black flex flex-col max-w-4xl justify-center mb-8 px-6 md:px-24">
//                             <h1 className="text-3xl md:text-4xl lg:text-6xl font-medium mb-6">
//                                 Partner with <br/> <span className="text-[#345DA3]">Sabika Group </span> 
//                             </h1>
//                             <p>We believe in the power of collaboration to create extraordinary outcomes. 
//                                 Whether you’re an entrepreneur with a vision or an established business seeking 
//                                 growth, let’s build something remarkable together.</p>
//                     </motion.div>
//                     <motion.div 
//                         variants={fadeUpVariant2}
//                         initial="initial"
//                         animate="animate"
//                         className="bg-[#EFF1F7] w-[400px] h-[500px]">
                       
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     )
// }