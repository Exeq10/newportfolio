import { Myskills } from "../../projects/data"
import CardSkills from "../CardSkills"

function Skills() {
  return (
    <div className='flex flex-col    gap-4'>

    

        {
            Myskills.map((skill)=> <CardSkills data={skill} />)
        }
   
  


    </div>
  )
}

export default Skills