export const Vestidos = () => {
    return 

        <div className="grid grid-cols-2 gap-6 p-4">
            <div
                className="cursor-pointer hover:opacity-90 transition"
                onClick={() => console.log("Vestido joya")}
            >
                <img
                    src="https://static.zara.net/assets/public/aa57/c970/e37e40c4802b/b00dd36037a8/04813349942-a2/04813349942-a2.jpg?ts=1746781027081&w=215"
                    alt="Camiseta sin mangas"
                    className="w-full h-auto"
                />
                <p className="text-center mt-2 text-sm">VESTIDO JOYA</p>
            </div>

            <div
                className="cursor-pointer hover:opacity-90 transition"
                onClick={() => console.log("Vestido sin mangas")}
            >
                <img
                    src="https://static.zara.net/assets/public/4ca8/e4f2/15e54bc9af1d/5049594c3939/03128324620-a1/03128324620-a1.jpg?ts=1744794753345&w=215"
                    alt="Conjunto beige"
                    className="w-full h-auto"
                />
                <p className="text-center mt-2 text-sm">VESTIDO SIN MANGAS</p>
            </div>
            <div className="grid grid-cols-2 gap-6 p-4">
                <div
                    className="cursor-pointer hover:opacity-90 transition"
                    onClick={() => console.log("Vestido asimetrico")}
                >
                    <img
                        src="https://static.zara.net/assets/public/cb29/177d/2d4142ed85c6/fb8d3b418ddd/03641313800-p/03641313800-p.jpg?ts=1741192344010&w=215"
                        alt="Camiseta sin mangas"
                        className="w-full h-auto"
                    />
                    <p className="text-center mt-2 text-sm">VESTIDO ASIMETRICO</p>
                </div>

                <div
                    className="cursor-pointer hover:opacity-90 transition"
                    onClick={() => console.log("Vestido ajustado")}
                >
                    <img
                        src="https://static.zara.net/assets/public/bd9c/93c6/60a84e0eb783/7b74e4e79d79/05584363622-a1/05584363622-a1.jpg?ts=1744359564834&w=215"
                        alt="Conjunto beige"
                        className="w-full h-auto"
                    />
                    <p className="text-center mt-2 text-sm">VESTIDO AJUSTADO</p>
                </div>

                <div
                    className="cursor-pointer hover:opacity-90 transition"
                    onClick={() => console.log("Vestido asimetrico")}
                >
                    <img
                        src="https://static.zara.net/assets/public/c798/5e56/be9d47029124/fe6a645e79bf/02121023811-a1/02121023811-a1.jpg?ts=1737565218241&w=215"
                        alt="Vestido manga corta"
                        className="w-full h-auto"
                    />
                    <p className="text-center mt-2 text-sm">VESTIDO MANGA CORTA</p>
                </div>

             </div>
        </div>
           
}
