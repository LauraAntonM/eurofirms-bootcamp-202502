import { useEffect, useState } from 'react'

import { logic } from '../logic'

import { Clothe } from './components/Clothe'
import { CreateClothe } from './components/CreateClothe'
import { useContext } from '../context'

export const Home = ({ onUserLoggedOut }) => {
    const { alert } = useContext()

    const [view, setView] = useState('clothes')
    const [username, setUsername] = useState('World')

    useEffect(() => {
        try {
            logic.getUserUsername()
                .then(username => setUsername(username))
                .catch(error => {
                    console.error(error)

                    alert(error.message)
                })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }, [])

    const handleLogoutClick = () => {
        try {
            logic.logoutUser()

            onUserLoggedOut()
        } catch (error) {
            alert(error.message)
        }
    }

    const handleCreateClotheClick = () => setView('create-clothe')

    const handleCreateClotheCancelClicked = () => setView('clothe')

    const handleClothesCreated = () => setView('clothes')

    console.log('Home -> render')

    return <div className="p-5">
        <i className="text-2xl">Tienda</i>

        <div className="mt-2">
            <h1 className="text-xl">Hello, {username}!</h1>

            <button
                className="bg-black text-white px-2 mx-1"
                type="button"
                onClick={handleCreateClotheClick}
            >+</button>

            <button
                className="bg-black text-white px-2 mx-1"
                type="button"
                onClick={handleLogoutClick}
            >Logout</button>
        </div>

        {view === 'clothe' && <Clothe alert={alert} confirm={confirm} />}
        {view === 'create-clothe' && <CreateClothe
            onCancelClicked={handleCreateClotheCancelClicked}
            onClotheCreated={handleClothesCreated}
        />}
    </div>
}