import React from "react";
import Input from "../../UI/input/input";

const EditInfo = ({personalInfo}) => {
    console.log(personalInfo)
  return(
      <tr >
          <td>
              <label>{personalInfo.title}</label>
              <Input placeholder={personalInfo.value} />
          </td>
      </tr>
  )
};

export default EditInfo;