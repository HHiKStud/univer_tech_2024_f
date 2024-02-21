async function MethodGetUsers() {
    var xhr1 = new XMLHttpRequest()    
    xhr1.open("GET", "https://jsonplaceholder.typicode.com/users")
    xhr1.send()
    var xhr2 = new XMLHttpRequest()
    xhr2.open("GET", "https://jsonplaceholder.typicode.com/todos")
    xhr2.send()
    xhr1.onload = function() {
        let response1 = JSON.parse(xhr1.response)
        xhr2.onload = function() {
            let response2 = JSON.parse(xhr2.response)
            response1.forEach((user, index) => {
                let filtered = response_2.filter(ToDo => ToDo.userId === user.id)    
                filtered.forEach((filtered) => {
                    let row = "<tr>"
                    row += "<th>"+index+"</th>"
                    row += "<th>"+user.name+"</th>"
                    row += "<th>"+mixed.title+"</th>"
                    row += "<th><input type='checkbox'"+(filtered.completed ? 'checked':'')+"disabled></th>"
                    row += "</tr>"
                    $("table tbody").append(row)
                  })        
            })
        }
    }
}            