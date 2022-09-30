import React from 'react'

function Table(props) {
  return (
    <div>
        {props.nameList.map((val, key) => {
          return (
            <table key={key}>
                <tr>
                    <th>First Name</th>
                    <td>{val.firstName}</td>
                </tr>
                <tr>
                    <th>Last Name</th>
                    <td>{val.lastName}</td>
                </tr>
                <tr>
                    <th>Occupation</th>
                    <td>{val.occupation}</td>
                </tr>
            </table>
          )
        })}
    </div>
  );
}

export default Table