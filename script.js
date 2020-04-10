console.log('infinite scroll')

let limit = 3;
let page = 1;

fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
.then(a=>{
    return a.json()
})
.then(a=>{
    console.log(a)
    a.forEach(a=>{
        create_post(a.title, a.body)
    })
})

const create_post=(title, body)=>{
    const box = document.createElement('div')
    box.classList.add('the_box')

    const heading = document.createElement('h4');
    heading.textContent = title
    box.appendChild(heading)

    const content = document.createElement('p');
    content.textContent = body
    box.appendChild(content)

    document.getElementById('output').appendChild(box)
}