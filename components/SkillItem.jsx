import React from "react";

const SkillItem = ({ icon, language, update }) => {
  return (
    <div className="p-4 shadow-md rounded-xl hover:scale-105 ease-in duration-150">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="m-auto">{icon}</div>
        <div>
          <h3>{language}</h3>
          {update && <p className="text-gray-600">({update})</p>}
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
