import { CredentialsError, NotFoundError, ValidationError } from 'com'
import { logic } from '../logic'
import { useContext } from '../context'
import { useNavigate } from 'react-router'
import { BottomNav } from './components/BottomNav'

export const Login = ({ onRegisterClicked, onUserLoggedIn }) => {
    const { alert } = useContext()
    const navigate = useNavigate()

    const handleRegisterClick = () => onRegisterClicked()

    const handleLoginSubmit = event => {
        event.preventDefault()

        const form = event.target
        const username = form.username.value
        const password = form.password.value

        try {
            logic.loginUser(username, password)
                .then(() => {
                    form.reset()
                    onUserLoggedIn()
                })
                .catch(error => {
                    console.error(error)

                    if (error instanceof NotFoundError || error instanceof CredentialsError)
                        alert('WARN: ' + error.message)
                    else
                        alert('ERROR: ' + error.message)
                })
        } catch (error) {
            console.error(error)

            if (error instanceof ValidationError)
                alert('WARN: ' + error.message)
            else
                alert('ERROR: ' + error.message)
        }
    }

    console.log('Login -> render')

    return (
        <div className="min-h-screen bg-white px-12 py-8 font-serif">
            <i className="text-2xl">Tienda</i>

            <div className="mt-6">
                <h1 className="text-xl mb-4">Inicio de sesión</h1>

                <form className="flex flex-col gap-4" onSubmit={handleLoginSubmit}>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="username">Usuario</label>
                        <input
                            className="border border-black px-4 py-2 rounded"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Nombre de usuario"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            className="border border-black px-4 py-2 rounded"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                        />
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={handleRegisterClick}
                            className="underline cursor-pointer"
                        >
                            Registro
                        </button>
                        <button
                            type="submit"
                            className="bg-black text-white px-4 py-2 rounded"
                        >
                            Entrar
                        </button>
                    </div>
                </form>
            </div>

            <BottomNav />
        </div>
    )
}
