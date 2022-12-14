import React, {useState} from "react";
import Input from "../../UI/input/input";

const EditInfo = ({personalInfo, handleInputChange}) => {
    const [inputValue, setInputValue] = useState(personalInfo.value)

    const inputValueHandler = (event, index) => {
        setInputValue(event.target.value)
        handleInputChange(event ,index)
        console.log(inputValue)
    }
  return(
      <tr>
          <td className={`flex-column`}>
              <label>{personalInfo.title}</label>
              <input id={personalInfo.id} onChange={inputValueHandler} value={inputValue} />
          </td>
      </tr>
  )
};

export default EditInfo;