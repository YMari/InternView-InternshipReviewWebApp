import * as i from './entities'

export interface ICompanyRepository {
    
    getCompanyById: (c_id: number) => Promise<i.ICompany>;
    getAllCompany: () => Promise<i.ICompany[]>;

}