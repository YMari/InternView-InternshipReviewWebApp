import * as i from './entities'

export interface ICompanyRepository {
    
    getCompanyById: (c_id: number) => Promise<i.ICompany>;
    getAllCompany: () => Promise<i.ICompany[]>;
    searchCompany: (c_name: string) => Promise<i.ICompany[]>;
    popularCompanies: () => Promise<i.ICompany[]>

}