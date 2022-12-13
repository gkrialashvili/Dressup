import React from "react";

const PersonalInfoTable = ({personalInfo}) => {
    return (
        <tr>
            <td>
                {personalInfo.title}
            </td>
            <td>
                {personalInfo.value}
            </td>
        </tr>
    )
}

export default PersonalInfoTable;