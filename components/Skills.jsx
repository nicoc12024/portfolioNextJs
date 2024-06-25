import { skills } from "./../data/skills";
import SkillItem from "./SkillItem";

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen px-6 py-20">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">Skills</p>
        <h2 className="py-4">Tecnologías que uso</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <SkillItem
              key={skill.id}
              language={skill.language}
              icon={skill.icon}
              update={skill.update}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
