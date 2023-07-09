import { useEffect } from 'react'
import { MyProjects } from '../../projects/data'
import CardProject from '../CardProject'

function Portfolio() {
  return (
    <section className="flex flex-col gap-4" >


        {

             MyProjects.map((project,key)=>   <CardProject key={key} data ={project}/>   )
                
            


        }






    </section>
  )
}

export default Portfolio