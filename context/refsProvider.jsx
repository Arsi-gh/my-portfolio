const { createContext, useContext, useRef } = require("react");

const RefContext = createContext()

export default function RefProvider ({children}) {

    const servicesRef = useRef()
    const aboutRef = useRef()
    const projectsRef = useRef()

    return (
        <RefContext.Provider value={{servicesRef , aboutRef , projectsRef}}>
            {children}
        </RefContext.Provider>
    )
}

export const useRefs = () => {
    return (
        useContext(RefContext)
    )
}