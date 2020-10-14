
import { NextApiHandler, NextApiResponse } from 'next';
import {injectable, inject} from 'inversify'
import 'reflect-metadata'
import * as i from './interfaces'
import * as app from '../application'
import { IAuthenticationService } from '../application/interfaces';
import * as constants from '../application/constants'


@injectable()
export default class Middlewares implements i.IMiddleware {
  
  private readonly _authenticationService: app.application_interfaces.IAuthenticationService;

  constructor(
    @inject(app.A_TYPES.IAuthenticationService) authenticationService: IAuthenticationService
  ) {
    this._authenticationService = authenticationService
  }
  

  withUser = (fn: NextApiHandler) => async (req: i.IRequestWithIssuer, res: NextApiResponse) => {

    const result = await this._authenticationService.validate(req.cookies.auth)

    if (result.status === constants.ERROR_MESSAGE){ 

      req.user = null

    } else {

      req.user = result.data

    }

    return await fn(req, res)

  };

}