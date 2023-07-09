import { motion } from "framer-motion"

function CardSkills({data}) {

const {img,nombre,desc,url} = data

  return (
    
<motion.div

initial={
    {opacity:0, scale:0.5 }
 }whileInView={{  opacity: 1, scale: 1 }}
 transition={{ duration: 0.5 }}
 

className="flex flex-col items-start mt-5">
<div className="flex flex-col justify-start gap-3">
<i className={`fa-brands ${img} text-5xl `}></i>
<label className="text-xl text-skyblue mb-2" >{nombre} </label>
</div>
<p className="text-gray-600">{desc} </p>

<a href={url} target='_blank' className=' text-skyblue mt-3 underline' >Documentation </a>
</motion.div>

  )
}

export default CardSkills