import {container} from '../client_container'
import {IRequestService} from '../interfaces'
import {UI_TYPES} from '../client_container'


export function useRequestService() {
    const ser = container.get<IRequestService>(UI_TYPES.IRequestService)
    return ser;
}

