import { Link } from "react-router-dom"
const Goods =()=> {
    const goods = [
        {
            id: 1,
            name: 'iphone 14 pro'
        },
        {
            id: 2,
            name: 'iphone 13 pro max'
        },
        {
             id: 1,
             name: 'iphone 12 pro'
        }
        
    ]
    return (
        <div>
            Телефоны
            <div>
            {
                goods.map(item=> (
                    <>
                    <Link to={`/goods/${item.id}/${item.name}`} key={item.id}>
                    {item.name}
                    </Link>
                    <br/>
                    </>
                ))
            }
             </div>
        </div>
    )
}
export default Goods