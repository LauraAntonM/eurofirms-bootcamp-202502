export function Confirm({ message, onAccepted, onCancelled }) {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg text-center max-w-sm w-full mx-4">
                <p className="mb-6 text-lg">{message}</p>
                <div className="flex justify-center gap-4">
                    <button
                        className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
                        onClick={onCancelled}
                    >
                        Cancelar
                    </button>
                    <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                        onClick={onAccepted}
                    >
                        Aceptar
                    </button>
                </div>
            </div>
        </div>
    )
}
