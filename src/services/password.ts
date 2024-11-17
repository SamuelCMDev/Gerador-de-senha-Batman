export default function generationPass(){
    let password: string=''
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:\'",.<>?/|~\\';

    let tamanhoSenha=8
    for ( let cont=0; cont<tamanhoSenha; cont++ ){
        password+=characters.charAt(
            Math.floor(Math.random()*characters.length)
        )
    }
    
    return(
        password
    )

}