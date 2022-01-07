import React, { createContext, useState } from 'react'

export const CreateContext = createContext();

export const Studentprovide = (props) => {
    const [data, setData] = useState([
        { "Id": "1",    "Name": "Naruto",   "Age": "19",    "Course": "MERN",   "Batch": "September" },
        { "Id": "2",    "Name": "Kakashi",   "Age": "26",    "Course": "MEAN",   "Batch": "November" },
        { "Id": "3",    "Name": "Minato",   "Age": "29",    "Course": "MERN",   "Batch": "October" },
        { "Id": "4",    "Name": "Itachi",   "Age": "23",    "Course": "MERN",   "Batch": "September" },
        { "Id": "5",    "Name": "Obito",   "Age": "23",    "Course": "MEAN",   "Batch": "December" }

        ])

    return (
        <CreateContext.Provider value={[data, setData]}>
            {props.children}
        </CreateContext.Provider>
    )
}



