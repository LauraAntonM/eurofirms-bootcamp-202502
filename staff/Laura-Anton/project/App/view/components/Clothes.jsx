import { useEffect, useState } from 'react'

import { logic } from '../../logic'

import { Clothe } from './Clothe'
import { useContext } from '../../context'


export const Clothes = () => {
    const { alert } = useContext()

    const [Clothes, setClothes] = useState([])

    useEffect(() => {
        try {
            logic.getClothes()
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
    }, [])

    const handleclotheDeleted = () => {
        try {
            logic.getclothes()
                .then(clothes => {
                    setclothes(clothes)
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

    console.log('clothes -> render')

    return <>
        {clothes.map(clothe => <clothe key={clothe.id} clothe={clothe} onclotheDeleted={handleclotheDeleted} />)}
    </>
}