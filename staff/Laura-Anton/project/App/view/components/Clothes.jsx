import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { logic } from '../../logic'
import { Clothe } from './Clothe'
import { useContext } from '../../context'

export const Clothes = () => {
    const { alert } = useContext()
    const { category } = useParams()
    const [clothes, setClothes] = useState([])

    useEffect(() => {
        try {
            logic.getClothes()
                .then(allClothes => {
                    if (category) {
                        const filterred = allClothes.filter(clothe => clothe.category.toLowerCase() === category.toLowerCase()
                )
                    } else {
                        setClothes(allClothes)
                    }
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

    const handleClotheDeleted = () => {
        try {
            logic.getClothes()
                .then(allClothes => {
                    const filtered = category
                        ? allClothes.filter(clothe => clothe.category === category)
                        : allClothes

                    setClothes(filtered)
                })
                .catch(error => {
                    console.error(error)
                    alert(error.message)
                })
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }

    console.log('Clothes -> render')

    return (
        <div className="p-6">
            <h1 className="text-2xl capitalize mb-4">
                {category ? `Sección: ${category}` : 'Todas las prendas'}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {clothes.map(clothe => (
                    <Clothe key={clothe.id} clothe={clothe} onClotheDeleted={handleClotheDeleted} />
                ))}
            </div>
        </div>
    )
}
