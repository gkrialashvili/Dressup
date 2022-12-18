import React, {useState} from "react";
import classes from '../Home.module.scss'

const EditInfo = ({personalInfo, handleInputChange}) => {
    const [inputValue, setInputValue] = useState(personalInfo.value)

    const inputValueHandler = (event, index) => {
        setInputValue(event.target.value)
        handleInputChange(event ,index)
        console.log(inputValue)
    }
  return(
      <tr>
          <td className={`flex-column ${classes.editPersonalInfoTd}`}>
              <label>{personalInfo.title}</label>
              <input id={personalInfo.id} onChange={inputValueHandler} value={inputValue} />
          </td>
      </tr>
  )
};

export default EditInfo;