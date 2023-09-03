import { motion } from "framer-motion";

function CardProject({ data }) {
  const { nombre, picture, desc, techs, url, github } = data;

  console.log(techs);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex  md:flex-row flex-col md:justify-start md:items-start  justify-center items-center  md:mt-10  py-2 rounded-md "
    >
      <picture className=" md:w-2/5 ">
        <img  src={picture} alt={nombre} />
      </picture>

      <div className="flex  md:items-start md:mb-2 items-center mt-7 mb-12 flex-col">
        <h3 className="font-black uppercase text-skyblue ">{nombre} </h3>

        <p className="text-gray-500 md:text-lg text-center">{desc} </p>

        <label className="font-black mt-5">Technologies </label>
        <ul className="flex md:items-start flex-col items-center">
          {techs.map((t) => (
            <li className="text-gra">{t} </li>
          ))}
        </ul>

        <div className="flex justify-center  gap-9 mt-8">
          <a
            href={github}
            target="_blank"
            className=" w-24 py-1 px-2  text-white font-black text-center rounded-md shadow-lg bg-skyblue hover:bg-black  duration-300"
          >
            <i className="fa-brands fa-github"></i> Code
          </a>
          <a
            href={url}
            target="_blank"
            className=" w-24 py-1 px-2  text-white font-black text-center rounded-md shadow-lg bg-skyblue hover:bg-black  duration-300"
          >
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default CardProject;
