import {ICompanyRepository} from './interfaces';
import {ICompany} from './entities'
import CompanyRepository from '../../infrastructure/repositories/company_repository';
import {C_TYPES} from './types';

export {
    C_TYPES,
    CompanyRepository
}

export type {
    ICompany,
    ICompanyRepository
}