import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router'

import { Landing } from './view/Landing'
import { Register } from './view/Register'
import { Login } from './view/Login'
import { Home } from './view/Home'
import { Alert } from './view/components/Alert'
import { Confirm } from './view/components/Confirm'
import { Context } from './context'

import { logic } from './logic'
import { Menu } from './view/Menu'

export const App = () => {
    const navigate = useNavigate()

    const [alertMessage, setAlertMessage] = useState('')
    const [confirmMessage, setConfirmMessage] = useState('')
    const [confirmAction, setConfirmAction] = useState(null)

    const handleRegisterClicked = () => navigate('/register')


    const handleLoginClicked = () => navigate('/login')

    const handleUserRegistered = () => navigate('/login')

    const handleUserLoggedIn = () => navigate('/menu')

    const handleUserLoggedOut = () => navigate('/login')

    const handleMenuClicked = () => navigate('/menu')

    const handleMenuLoggedIn = () => navigate('/menu')




    let loggedIn

    try {
        loggedIn = logic.isUserLoggedIn()
    } catch (error) {
        console.error(error)

        alert(error.message)
    }

    const handleAlertAccepted = () => setAlertMessage('')

    const handleAcceptConfirm = () => {
        setConfirmMessage('')

        confirmAction.resolve(true)
    }

    const handleCancelConfirm = () => {
        setConfirmMessage('')

        confirmAction.resolve(false)
    }

    const handleShowConfirm = message => {
        setConfirmMessage(message)

        return new Promise((resolve, reject) => {
            setConfirmAction({ resolve })
        })
    }

    console.log('App -> render')

    return <Context.Provider value={{
        alert: setAlertMessage,
        confirm: handleShowConfirm
    }}>
        {alertMessage && <Alert message={alertMessage} onAccepted={handleAlertAccepted} />}

        {confirmMessage && <Confirm message={confirmMessage} onCancelled={handleCancelConfirm} onAccepted={handleAcceptConfirm} />}

        <Routes>
            <Route path="/clothes" element={<clothes />} />
            <Route path="/clothes/:category" element={<clothes />} />
            
            <Route path='/' element={<Navigate to="/landing" relace />} />

            <Route path='/landing' element={

                <Landing
                    onRegisterClicked={handleRegisterClicked}
                    onLoginClicked={handleLoginClicked}
                />

            } />

            <Route path='/register' element={

                <Register
                    onLoginClicked={handleLoginClicked}
                    onUserRegistered={handleUserRegistered}


                />

            } />

            <Route path='/login' element={

                <Login
                    onRegisterClicked={handleRegisterClicked}
                    onUserLoggedIn={handleUserLoggedIn}
                />

            } />

            <Route path='/menu' element={

                <Menu
                    onMenuClicked={handleMenuClicked}
                    onMenuLoggedIn={handleMenuLoggedIn}
                />

            } />

        </Routes>
    </Context.Provider>
}