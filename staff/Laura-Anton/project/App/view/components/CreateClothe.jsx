import { logic } from '../../logic'
import { useNavigate } from 'react-router'
import { useContext } from '../../context'
import { BottomNav } from './BottomNav'


export const CreateClothe = ({ onClotheCreated }) => {


    const navigate = useNavigate()

    const { alert } = useContext()

    const handleCancelClick = () => navigate('/menu')

    const handleCreateClotheSubmit = event => {
        event.preventDefault()

        const form = event.target

        const category = form.category.value.toUpperCase()
        const size = form.size.value
        const image = form.image.value
        const title = form.title.value
        const description = form.description.value



        try {
            logic.createClothe(category, size, image, title, description)
                .then(() => {
                    form.reset()

                    onClotheCreated()
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

    let isAdmin

    try {
        isAdmin = logic.isUserAdministrator()
    } catch (error) {
        console.error(error)

        alert(error.message)
    }

    console.log('CreateClothe -> render')

    return (

        <div className="mt-2 px-12">
            <h1 className="text-xl mb-4">Crear prenda</h1>

            <form className="flex flex-col gap-4" onSubmit={handleCreateClotheSubmit}>
                <div className="flex flex-col gap-1">
                    <label htmlFor="category">Categoría</label>
                    <select name="category" id="category" className="border border-black px-12 py-2 rounded">
                        <option value="camisas">Camisas</option>
                        <option value="top">Top</option>
                        <option value="vestidos">Vestidos</option>
                    </select>
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="size">Talla</label>
                    <select name="size" id="size" className="border border-black px-12 py-2 rounded">
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="image">Imagen</label>
                    <input className="border border-black px-12 py-2 rounded" type="text" id="image" name="image" placeholder="URL de la imagen" />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="title">Título</label>
                    <input className="border border-black px-12 py-2 rounded" type="text" id="title" name="title" placeholder="Título de la prenda" />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="description">Descripción</label>
                    <textarea className="border border-black px-12 py-2 rounded" id="description" name="description" placeholder="Descripción detallada"></textarea>
                </div>

                <div className="flex justify-between">
                    <a className="underline" href="#" onClick={handleCancelClick}>Cancelar</a>
                    <button className="bg-black text-white px-12 py-2 rounded" type="submit">Crear</button>

                </div>
            </form>
            <BottomNav />
        </div>
    )
}