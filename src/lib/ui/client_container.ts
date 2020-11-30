import 'reflect-metadata'
import { Container } from 'inversify';
import { IRequestService } from './interfaces';
import RequestService from './services/request_service';

export const container = new Container();

export const UI_TYPES = {
    IRequestService: Symbol("IRequestService")
}

container.bind<IRequestService>(UI_TYPES.IRequestService).to(RequestService)