import { data } from '../data'
import { errors } from 'com'

const { SystemError } = errors

export const removeClothe = (clotheId) => {
    if (typeof clotheId !== 'string' || !clotheId.trim())
        throw new SystemError('invalid clothe id')

    return fetch(import.meta.env.VITE_API_URL + '/clothes/' + clotheId, {
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer ' + data.getToken()
        }
    })
        .catch(error => { throw new SystemError('connection error') })
        .then(response => {
            const { status } = response

            if (status === 204) return

            return response.json()
                .catch(() => { throw new SystemError('json error') })
                .then(body => {
                    const { error, message = 'Unknown error' } = body
                    const constructor = errors[error] || SystemError
                    throw new constructor(message)
                })
        })
}
