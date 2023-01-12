import { motion } from "framer-motion";
import { fadeInUp } from "../animations";
import Bar from "../components/Bar";
import { languages, tools } from "../data";


const Resume = () => {

    
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer  Engineering
            </h5>
            <p className="font-semibold">Thakur College of Engineering and Technology (2019-2023)</p>
            <p className="my-3">
              I am currently pursuing BE in Computer Engineering
              from Thakur College of Engineering and Technology
            </p>
          </div>
        </motion.div>
         <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">FullStack Developer</h5>
            <p className="font-semibold">Caarya Solutions Pvt Ltd</p>
          </div>
           <div className="">
            <h5 className="my-2 text-xl font-bold">FrontEnd Developer</h5>
            <p className="font-semibold">Project 42 Labs</p>
          </div>
        </div> 
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
