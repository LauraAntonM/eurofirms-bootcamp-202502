import { logic } from '../../logic'
import { useNavigate } from 'react-router'
import { useContext } from '../../context'


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

    return <div className="mt-2">
        <h1 className="text-xl">Crear prenda</h1>


        <form className="mt-2 flex flex-col gap-4" onSubmit={handleCreateClotheSubmit}>
            <div className="flex flex-col gap">
                <label htmlFor="category">Categoria</label>
                <select name="category" id="category">
                    <option value="camisas">Camisas</option>
                    <option value="top">Top</option>
                    <option value="vestidos">Vestidos</option>
                </select>
            </div>

            <div className="flex flex-col gap">
                <label htmlFor="size">Talla</label>
                <select name="size" id="size">
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
            </div>

            <div className="flex flex-col gap">
                <label htmlFor="image">Imagen</label>
                <input className="border-2 px-1" type="text" id="image" name="image" placeholder="the post image" />
            </div>


            <div className="flex flex-col gap">
                <label htmlFor="title">Titulo</label>
                <input className="border-2 px-1" type="text" id="title" name="title" placeholder="the post text" />
            </div>

            <div className="flex flex-col gap">
                <label htmlFor="description">Descripción</label>
                <textarea className="border-2 px-1" type="text" id="description" name="description" placeholder="the post text" ></textarea>
            </div>

            <div className="flex justify-between">
                <a className="underline" href="#" onClick={handleCancelClick}>Cancel</a>

                <button className="bg-black text-white px-2" type="submit">Create</button>


            </div>
        </form>
    </div>
}