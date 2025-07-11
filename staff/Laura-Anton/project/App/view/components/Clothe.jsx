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

    let isAdmin

    try {
        isAdmin = logic.isUserAdministrator()
    } catch (error) {
        console.error(error)

        alert(error.message)
    }

    console.log('Clothe -> render')

    return <article>
        <h3 className="font-bold">{clothe.author.username}</h3>

        <img src={clothe.image} alt="" />

        <p>{clothe.text}</p>

        <time>{clothe.date}</time>

        {(clothe.own || isAdmin) && <button className="border-4 border-black px-2 mx-1 cursor-pointer" onClick={handleDeleteClick}>🗑️</button>}
    </article>

}