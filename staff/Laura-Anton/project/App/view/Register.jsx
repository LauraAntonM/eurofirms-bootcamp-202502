import { logic } from '../logic'
import { useContext } from '../context'
import { AiOutlineHome } from 'react-icons/ai'
import { useNavigate } from 'react-router'

export const Register = ({ onLoginClicked, onUserRegistered }) => {
    const { alert } = useContext()
    const navigate = useNavigate()


    const handleLoginClick = () => onLoginClicked()
    const handleRegisterClick = () => onRegisterClicked()

    const handleRegisterSubmit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const username = form.username.value
        const password = form.password.value
        const address = form.address.value
        const phone = form.phone.value

        try {
            logic.registerUser(name, email, username, password, address, phone)

                .then(() => {
                    form.reset()

                    onUserRegistered()
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

    console.log('Register -> render')

    return (

        <div className="relative min-h-screen bg-white px-6 py-6 font-serif">

            <button onClick={() => navigate('/')} className="absolute top-4 right-4">
                <AiOutlineHome size={24} />

            </button>

            <div className="px-5 py-6">
                <i className="text-2xl">Tienda</i>
                <div className="mt-2">
                    <h1 className="text-xl">Registro</h1>

                    <form className="mt-2 flex flex-col gap-4" onSubmit={handleRegisterSubmit}>
                        <div className="flex flex-col gap">
                            <label htmlFor="name">Nombre</label>
                            <input className="border-2 px-1" type="text" id="name" name="name" placeholder=" " />
                        </div>

                        <div className="flex flex-col gap">
                            <label htmlFor="email">E-mail</label>
                            <input className="border-2 px-1" type="email" id="email" name="email" placeholder=" " />
                        </div>

                        <div className="flex flex-col gap">
                            <label htmlFor="username">Nombre de usuario</label>
                            <input className="border-2 px-1" type="text" id="username" name="username" placeholder=" " />
                        </div>

                        <div className="flex flex-col gap">
                            <label htmlFor="password">Contraseña</label>
                            <input className="border-2 px-1" type="password" id="password" name="password" placeholder=" " />
                        </div>

                        <div className="flex flex-col gap">
                            <label htmlFor="address">Dirección</label>
                            <input className="border-2 px-1" type="address" id="address" name="address"
                                placeholder=" " />
                        </div>

                        <div className="flex flex-col gap">
                            <label htmlFor="phone">Teléfono</label>
                            <input className="border-2 px-1" type="phone" id="phone" name="phone"
                                placeholder=" " />
                        </div>

                        <div className="flex justify-between">
                            <a className="underline" href="#" onClick={handleLoginClick}>Iniciar sesion</a>

                        
                            <div className="flex justify-between">
                                <button className="underline" type="submit">Registrar</button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>

        </div>
    )
}
