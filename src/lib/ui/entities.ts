export interface IRegister {

    name: string,
    email: string,
    universityId: number,
    studyProgramId: number,
    password: string

}


export interface ILogin {

    email: string
    password: string
    
}