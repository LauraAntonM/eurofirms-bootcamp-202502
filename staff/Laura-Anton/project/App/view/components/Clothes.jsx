import { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router'
import { logic } from '../../logic'
import { Clothe } from './Clothe'
import { useContext } from '../../context'
import { isUserLoggedIn } from '../../logic/isUserLoggedIn'


export const Clothes = () => {
    const { alert } = useContext()
    const { category } = useParams()
    const [clothes, setClothes] = useState([])

    useEffect(() => {
        try {
            logic.getClothes(category.toUpperCase())
                .then(clothes => {
                    setClothes(clothes)
                })
                .catch(error => {
                    console.error(error)
                    alert(error.message)
                })
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }, [category])

    return <div className="p-6" >
        <h1 className="text-2xl capitalize mb-4">
            {category}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {clothes.map(clothe => (
                <Clothe key={clothe.id} clothe={clothe} onClotheDeleted={() => { }} />
            ))}
        </div>
    </div >



}
