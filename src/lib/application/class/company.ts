import * as i from '../interfaces'
import * as e from '../entities'
import * as com from '../../domain/company'
import {injectable, inject} from 'inversify'

class Company{

    private readonly _companyRepository: com.ICompanyRepository

    constructor(
        @inject(com.C_TYPES.ICompanyRepository) companyRepository: com.ICompanyRepository,

    ){
        this._companyRepository = companyRepository
    }

    
}
