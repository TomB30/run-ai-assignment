import {companyService} from '../services/company-service'

export const companyStore = {
    state:{
        companies:[],
        selectedCompany:null
    },
    getters:{
        companiesList({companies}){
            return companies.map(c => ({_id:c._id , name:c.name}))
        },
        company({selectedCompany}){
            return selectedCompany
        }
    },
    mutations:{
        setCompanies(state,{companies}){
            state.companies = companies
        },
        setCompany(state,{company}){
            state.selectedCompany = company
        }
    },
    actions:{
        async loadCompanies({commit}){
            try{
                const companies = await companyService.query()
                commit({type:'setCompanies', companies})
            }catch(err){
                console.log('could not load companies', err);
            }
        },
        async loadCompany({commit},{id}){
            try{
                const company = await companyService.getById(id)
                commit({type:'setCompany', company})
                return company
            }catch(err){
                console.log('could not load companies', err);
            }
        },
        async updateCompany({commit},{company}){
            try {
                const updatedCompany = await companyService.save(company)
                commit({type:'setCompany',company:updatedCompany})
            } catch(err){
                console.log('could not update company',err);
            }
        }
    }
}