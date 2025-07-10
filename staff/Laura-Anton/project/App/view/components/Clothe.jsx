import { logic } from '../../logic'

import { useContext } from '../../context'

export const Clothe = ({ clothe, onClotheDeleted }) => {
    const { alert, confirm } = useContext()

    const handleDeleteClick = () => {
        confirm('Delete clothe?')
            .then(result => {
                if (result)
                    try {
                        logic.removeClothe(clothe.id)
                            .then(() => onClotheDeleted())
                            .catch(error => {
                                console.error(error)

                                alert(error.message)
                            })
                    } catch (error) {
                        console.error(error)

                        alert(error.message)
                    }
            })
    }

    console.log('Clothe -> render')

    return <article>
        <h3 className="font-bold">{clothe.title}</h3>

        <img src={clothe.image} alt="" />

        <p>{clothe.description}</p>

       </article>
}