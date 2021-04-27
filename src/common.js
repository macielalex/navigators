import { Alert } from "react-native"



    const Server = "http://10.0.2.2:3000"

    function ShowSucess(msg){
        return Alert.alert('Sucesso!', `Msg: ${msg}`)
    }

     const ShowError = (e)=>{

        return Alert.alert('Erro!', `error: ${e}`)

    }

   const pedidos = [

        {
            "nome": "Alex Maciel",
            "Endereco": "Rua Caravela, 469, Fortaleza/Ce, 60332-450",
            "latitude" : -3.6966486149794218, 
            "longitude": -38.57978114747446
        },
        {
            "nome": "Maria Mota de Almeida",
            "Endereco": "Rua Barra Vento, 71,  Fortaleza/Ce, 60332-600",
            "latitude" : -3.701041574577374, 
            "longitude": -38.57901908795633
        },
        {
            "nome": "Transfor Beleza",
            "Endereco": "Rua Sen Robert Kennedy , 392, Fortaleza/Ce, 60332-170",
            "latitude" : -3.703352281536488,
            "longitude": -38.57874927446229 
        }
        
        ]




export {Server, ShowError, ShowSucess , pedidos}
