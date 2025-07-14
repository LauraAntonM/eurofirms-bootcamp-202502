import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router'
import { logic } from '../../logic'
import { Context } from '../../context'
import { ClotheCard } from './ClotheCard'
import { BottomNav } from './BottomNav'

export const Clothes = () => {
    const { category } = useParams()
    const { alert } = useContext(Context)

    const [clothes, setClothes] = useState([])

    const loadClothes = () => {
        try {
            logic.getClothes(category.toUpperCase())
                .then(setClothes)
                .catch(error => {
                    console.error(error)
                    alert(error.message)
                })
        } catch (error) {
            console.error(error)
            alert(error.message)
        }
    }

    useEffect(() => {
        loadClothes()
    }, [category])

    return (
        <div className="p-4 pb-32">
            <h1 className="text-xl font-semibold mb-4 text-center capitalize">{category}</h1>

            <div className="grid grid-cols-3 gap-6">
                {clothes.map(clothe => (
                    <ClotheCard
                        key={clothe.id}
                        clothe={clothe}
                        onClotheDeleted={loadClothes}
                        onSizeClick={(clothe, size) => {}}
                    />
                ))}

                <BottomNav />
            </div>
        </div>
    )
}
