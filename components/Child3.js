import { motion } from "framer-motion"


const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,

        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        },
    },
};

const Item = {
    hidden: {
        scale: 0,
    },
    show: {
        scale: 1,
        transition: {
            type: "spring",
            duration: 2,
        },
    },
};

const Child3 = () => {
    return (
        <>
            <div


                className='relative  h-screen bg-green-400 items-center flex justify-center  mx-8 flex-col space-y-4 '>
                <span className=" text-3xl font-bold">
                    TEST DYNAMIC LOADING
                </span>
                <motion.div
                    variants={container} initial="hidden" animate="show"
                    className="flex flex-col space-y-4  ">

                    <motion.div variants={Item} className="w-48 h-48 bg-white rounded-md" />
                    <motion.div variants={Item} className="w-48 h-48 bg-slate-100 rounded-md" />
                </motion.div>


            </div>
        </>
    );
}

export default Child3;