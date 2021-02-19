export const enviarDados = (url,form,setDados) => event => {    
    event.preventDefault();
    
    fetch(url,{
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json","Access-Control-Allow-Origin": "https://comercio-amigavel-frontend.herokuapp.com"},
        body: JSON.stringify(form)
    }).then(response => response.json()).then(dados => {
        setDados(dados);
    })
}
