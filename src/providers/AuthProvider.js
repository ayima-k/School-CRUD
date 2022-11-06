import React from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"

export const AuthContext = React.createContext({})

const AuthProvider = ({children}) => {
  const [users, setUsers] = React.useState(null)

  React.useEffect(() => {
    const Listen = onAuthStateChanged(auth, user => {
      setUsers(user)
    })
    return () => Listen()
  }, [])

  const value = React.useMemo(() => ({
    users
  }), [users])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider