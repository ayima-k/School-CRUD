import React from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase"

export const AuthContext = React.createContext({})

const AuthProvider = ({children}) => {
  const [users, setUsers] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const Listen = onAuthStateChanged(auth, user => {
      setLoading(false)
      setUsers(user)
    })
    return () => Listen()
  }, [])

  const value = React.useMemo(() => ({
    users,
    loading
  }), [users, loading])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider