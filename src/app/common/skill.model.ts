import { Developer } from './developer.model'

export class Skill {
    public name: string
    public logo: string
    public site: string

    constructor(name: string, logo: string, site: string){
        this.name = name
        this.logo = logo
        this.site = site 
    }
}