import { useState, useEffect } from "react"

const Formulario = () =>{

    let [materiaA, setMateriaA] = useState(0)
    let [materiaB, setMateriaB] = useState(0)
    let [materiaC, setMateriaC] = useState(0)
    let [nome, setNome] = useState('')
    
    useEffect(()=>{
        console.log('O componente iniciou')

        return () =>{
            console.log ('O componente finalizou')
        }
    }, [])

    useEffect(()=>{
        console.log('O estado nome mudou')
    }, [nome])
    
    useEffect(()=>{
        console.log('materiaA mudou para' + materiaA)
    }, [materiaA]) 

    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value
        })
    }

    const renderizaResultado = () =>{
        const soma = parseFloat(materiaA) + parseFloat(materiaB) + parseFloat(materiaC);
        const media = soma / 3;

        if (media >= 7){
            return (
                <p>Olá {nome} foi aprovado</p>
            )
        } else{
            return (
                <p>Olá {nome} não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
            {[1,2,3,4,5].map(item => (
            <li key={item} >{item}</li>
            ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target})=> setMateriaA(target.value)} />
            <input type="number" placeholder="Nota matéria B" onChange={evento=> setMateriaB(evento.target.value)} />
            <input type="number" placeholder="Nota matéria C" onChange={evento=> setMateriaC(evento.target.value)}/>
            {renderizaResultado()}
        </form>
    )
}


export default Formulario