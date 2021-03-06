import { useEffect, useState } from "react"

const useAdmin=user=>{
    const [admin, setAdmin]=useState(false)
    const [adminLoading, setAdminLoading]=useState(true)
    useEffect(()=>{
        const email=user?.email
        if(email){
            fetch(`https://sheltered-wildwood-63825.herokuapp.com/admin/${email}`,{
            method: 'GET',
            
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
              authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            
          })
          .then(res=>res.json())
          .then(data=>{
              if(data){
                  
                  setAdmin(data.admin)
                  setAdminLoading(false)
              }
          })
        }
    },[user])
    return [admin , adminLoading]
}

export default useAdmin