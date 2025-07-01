export const Landing = ({ onRegisterClicked, onLoginClicked }) => {
    const handleRegisterClick = () => onRegisterClicked()

    const handleLoginClick = () => onLoginClicked()

    console.log('Landing -> render')

    return <div className="p-5">
        <i className="text-2xl">Tienda</i>

        <div className="mt-2">
            <a className="underline" href="#" onClick={handleRegisterClick}>Registro</a>
            &nbsp;or&nbsp;
            <a className="underline" href="#" onClick={handleLoginClick}>Acceso</a>
        </div>
    </div>
}