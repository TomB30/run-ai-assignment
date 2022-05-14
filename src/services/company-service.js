import { storageService } from './async-storage.service'


export const companyService = {
    query,
    getById,
    save
}

const compDB = 'companiesDB'

async function query() {
    try {
        let companies = await storageService.query(compDB)
        if (!companies.length) companies = _createCompanies()
        return companies
    } catch (err) {
        console.log('could not find companies', err);
    }
}

async function getById(id) {
    try {
        const company = await storageService.get(compDB, id)
        return company
    } catch (err) {

    }
}

async function save(company) {
    try {
        const updatedCompany = (company._id) ? await storageService.put(compDB, company) : await storageService.post(compDB, company)
        return updatedCompany
    } catch (err) {
        console.log('could not update company in DB', err);
    }
}


async function _createCompanies() {
    const companies = [
        {
            name: 'MisterBit',
            departments: [
                {
                    id: 'd101',
                    name: 'R&D',
                    description: ''
                },
                {
                    id: 'd102',
                    name: 'HR',
                    description: ''
                },
                {
                    id: 'd103',
                    name: 'Marketing',
                    description: ''
                },
                {
                    id: 'd104',
                    name: 'Administration',
                    description: ''
                },
            ],
            employees: [
                {
                    id: 'e101',
                    name: 'Jimmy Goshen',
                    departmentId: 'd101',
                    createdAt: Date.now(),
                },
                {
                    id: 'e102',
                    name: 'Shuki Menachem',
                    departmentId: 'd103',
                    createdAt: Date.now(),
                },
                {
                    id: 'e103',
                    name: 'Shimon Cohen',
                    departmentId: 'd102',
                    createdAt: Date.now(),
                },
                {
                    id: 'e104',
                    name: 'Kim Zohar',
                    departmentId: 'd102',
                    createdAt: Date.now(),
                },
                {
                    id: 'e105',
                    name: 'Shalom Levy',
                    departmentId: 'd101',
                    createdAt: Date.now(),
                },
                {
                    id: 'e106',
                    name: 'Yossi Azuta',
                    departmentId: 'd104',
                    createdAt: Date.now(),
                },
                {
                    id: 'e107',
                    name: 'Tom Cruze',
                    departmentId: 'd101',
                    createdAt: Date.now(),
                },
                {
                    id: 'e108',
                    name: 'Yair Avni',
                    departmentId: 'd104',
                    createdAt: Date.now(),
                }
            ]
        },
        {
            name: 'Apple',
            departments: [
                {
                    id: 'd101',
                    name: 'R&D',
                    description: ''
                },
                {
                    id: 'd102',
                    name: 'HR',
                    description: ''
                },
                {
                    id: 'd103',
                    name: 'Marketing',
                    description: ''
                },
                {
                    id: 'd104',
                    name: 'Administration',
                    description: ''
                },
            ],
            employees: [
                {
                    id: 'e101',
                    name: 'Jimmy Goshen',
                    departmentId: 'd101',
                    createdAt: Date.now(),
                },
                {
                    id: 'e102',
                    name: 'Shuki Menachem',
                    departmentId: 'd103',
                    createdAt: Date.now(),
                },
                {
                    id: 'e103',
                    name: 'Shimon Cohen',
                    departmentId: 'd102',
                    createdAt: Date.now(),
                },
                {
                    id: 'e104',
                    name: 'Kim Zohar',
                    departmentId: 'd102',
                    createdAt: Date.now(),
                },
                {
                    id: 'e105',
                    name: 'Shalom Levy',
                    departmentId: 'd101',
                    createdAt: Date.now(),
                },
                {
                    id: 'e106',
                    name: 'Yossi Azuta',
                    departmentId: 'd104',
                    createdAt: Date.now(),
                },
                {
                    id: 'e107',
                    name: 'Tom Cruze',
                    departmentId: 'd101',
                    createdAt: Date.now(),
                },
                {
                    id: 'e108',
                    name: 'Yair Avni',
                    departmentId: 'd104',
                    createdAt: Date.now(),
                }
            ]
        },
        {
            name: 'Microsoft',
            departments: [
                {
                    id: 'd101',
                    name: 'R&D',
                    description: ''
                },
                {
                    id: 'd102',
                    name: 'HR',
                    description: ''
                },
                {
                    id: 'd103',
                    name: 'Marketing',
                    description: ''
                },
                {
                    id: 'd104',
                    name: 'Administration',
                    description: ''
                },
            ],
            employees: [
                {
                    id: 'e101',
                    name: 'Jimmy Goshen',
                    departmentId: 'd101',
                    createdAt: Date.now(),
                },
                {
                    id: 'e102',
                    name: 'Shuki Menachem',
                    departmentId: 'd103',
                    createdAt: Date.now(),
                },
                {
                    id: 'e103',
                    name: 'Shimon Cohen',
                    departmentId: 'd102',
                    createdAt: Date.now(),
                },
                {
                    id: 'e104',
                    name: 'Kim Zohar',
                    departmentId: 'd102',
                    createdAt: Date.now(),
                },
                {
                    id: 'e105',
                    name: 'Shalom Levy',
                    departmentId: 'd101',
                    createdAt: Date.now(),
                },
                {
                    id: 'e106',
                    name: 'Yossi Azuta',
                    departmentId: 'd104',
                    createdAt: Date.now(),
                },
                {
                    id: 'e107',
                    name: 'Tom Cruze',
                    departmentId: 'd101',
                    createdAt: Date.now(),
                },
                {
                    id: 'e108',
                    name: 'Yair Avni',
                    departmentId: 'd104',
                    createdAt: Date.now(),
                }
            ]
        }
    ]

    try {
        const savedCompanies = await storageService.postMany(compDB, companies)
        return savedCompanies
    } catch (err) {
        console.log('could not create companies DB', err)
    }
}













