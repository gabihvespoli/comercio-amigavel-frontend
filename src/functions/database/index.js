export const enviarDados = (url,form,setDados) => event => {    
    event.preventDefault();
    
    fetch(url,{
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json","Access-Control-Allow-Origin": "*", "Access-Control-Allow-Credentials": true, "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS", "Access-Control-Allow-Headers": "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json" },
        body: JSON.stringify(form)
    }).then(response => response.json()).then(dados => {
        setDados(dados);
    })
}
