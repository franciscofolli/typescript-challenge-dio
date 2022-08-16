const person = { 
    name: 'Mariana',
    age: 28,
    role: 'developer'
}

person.age = 25;

const andre: { name: string, age: number, role: string } = {
    name: 'Andre',
    age: 25,
    role: 'Painter'
}

const paula: { name: string, age: number, role: string } = {
    name: 'Andre',
    age: 25,
    role: 'Developer'
}

// validates role name
enum Role {
    Developer,
    Professor,
    Soccer
}

interface person { 
    name: string,
    age: number,
    role?: Role
}

interface Student extends person { 
    subjects: string[]
}

const vanessa: person = { 
    name: 'Vanessa',
    age: 33,
    role: Role.Developer
}

const maria: person = { 
    name: 'Maria',
    age: 33,
    role: Role.Developer
}

const jessica: Student = {
    name: 'Jessica',
    age: 28,
    role: Role.Developer,
    subjects: ['discrete math', 'developing']
}

const monica: Student = {
    name: 'Monica',
    age: 23,
    subjects: ['discrete math', 'developing']
}

function listing(list: string[]) {
    for (const item of list) {
        console.log('- ', item)
    }
}

listing(monica.subjects);