import { useAuth } from "../context/AuthContext"

const Contacts =()=> {
    const {token} = useAuth();
    if(!token) {
        return <div>
            у вас нет права видеть эту страницу
        </div>
    }
    return (
        <div>
            contact page
        </div>
    )
    
}
export default Contacts