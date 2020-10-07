import { verify } from 'jsonwebtoken';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import {injectable, inject} from 'inversify'
import 'reflect-metadata'
import * as i from './interfaces'
import * as app from '../application'
import { IAuthenticationService } from '../application/interfaces';


  
export default class Middlewares implements i.IMiddleware {
  
  private readonly _authenticationService: app.application_interfaces.IAuthenticationService;

  constructor(
    @inject(app.A_TYPES.IAuthenticationService) authenticationService: IAuthenticationService
  ) {
    this._authenticationService = authenticationService
  }

  authenticated = (fn: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {

    const result = await this._authenticationService.validate(req.cookies.auth)

    return await fn(req, res)

  };

}