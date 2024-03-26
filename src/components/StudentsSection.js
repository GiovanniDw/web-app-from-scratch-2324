import {$, $$, app} from '../utils/variables.js';


export function renderStudents(students) {
  // const container = $('[data-students]');
  const container = document.createElement('section');
  // const heading = document.createElement('h2');
  // heading.innerText('Students');


  const list = document.createElement('ul');
  list.classList.add('student-list')


  students.map(student => {
      const item = document.createElement('li')
      const anchor = document.createElement('a');
      const description = document.createElement('p')
      const avatar = document.createElement('img')

      anchor.href = `https://${student.login}.github.io/web-app-from-scratch-2324/`
      anchor.alt = `WAFS fork from ${student.login}`
      anchor.target = '_blank'
      anchor.textContent = `@${student.login}`
      anchor.classList.add('link-student')
      anchor.target = '_blank'

      avatar.src = student.avatar_url
      avatar.classList.add('avatar')

      
      item.append(avatar)
      item.append(anchor)
      list.append(item)

    
    
  })

  app.append(container)

  const heading = document.createElement('h2');
  heading.innerText = 'Students';

  container.append(heading)

  container.append(list);



}