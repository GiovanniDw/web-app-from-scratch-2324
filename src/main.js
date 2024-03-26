import {Header} from './components/Header.js';
import { getStudents } from './scripts/getStudents.js';
import {renderStudents} from './components/StudentsSection.js';



const main = async () => {
    try {
        await Header()
        const students = await getStudents();
        renderStudents(students.sort(() => 0.5 - Math.random()))
    }
    catch {
        console.log('error')
    } 
    finally {
        console.log('done')
    }
    
}


main()