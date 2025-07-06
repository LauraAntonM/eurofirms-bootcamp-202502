import { BottomNav } from './components/BottomNav'

export const Landing = ({ }) => {

    console.log('Landing -> render')

    return (
        <div className="p-5">
            <i className="text-2xl flex flex-col justify-center mb-6 ">Tienda</i>

            <div className="img">

                <div className="w-full flex justify-center pt-4 ">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNthurZxgh3dENvzAsz3KN6kg6aBSBnNCCQ&s" />
                </div>

                <BottomNav />
            </div>
        </div>
    )
}






