import { useState } from 'react'

import './App.css'

function App() {
  const {uid, setUid} = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchToken =async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}jwtid`,
      withCredentials: true
    })
    .then((res) => {
      console.log(res);
      setUid(res.data)
    })
    .catch(() => console.log("Pas de tokens"))
    }
    fetchToken()

    if (uid) dispatch(getUser(uid))
  }, [uid])
  
  return (
    <>
      <div>Blabla</div>
    </>
  )
}

export default App
