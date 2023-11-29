import { FormEvent, useState } from 'react';
// import { Button } from '@mui/material';
import logo from './assets/logo.png';
import './App.css'


function App() {
    const [gasolina, setGasolina] = useState<number>();
    const [alcool, setAlcool] = useState<number>();
    const [modify1, setModify1] = useState<string | null>(null);

    function calcBetterChoice(event: FormEvent) {
        event.preventDefault();

        if (!gasolina || !alcool || isNaN(Number(gasolina)) || isNaN(Number(alcool))) {
            setModify1("Por favor, preencha os campos de Gasolina e Álcool com valores numéricos válidos.");
            return;
        }

        const calc: number = (alcool) / (gasolina);

        if (calc <= 0.7) {
            setModify1(`Compensa usar Álcool, ${calc}`);
        } else {
            setModify1(`Compensa usar Gasolina ${calc}`);
        }
    }

    return (
        <>
            <div className="h-[100%] w-screen bg-cinza100 flex flex-col justify-center items-center">
                <img className="w-[277px]" src={logo} alt="Bomba de combustível"/>
                <p className="text-white text-3xl my-[20px]">Qual é a melhor escolha?</p>

                <form className="flex flex-col w-[18.75rem] flex items-center" onSubmit={calcBetterChoice}>

                    <label  htmlFor="gasolina">Preço da Gasolina/Litro</label>
                    <input
                        className="mb-[20px]"
                        type="text"
                        id="gasolina"
                        name="gasolina"
                        placeholder="Digite o preço"
                        onChange={(e) => setGasolina(Number(e.target.value))}
                    />
                    <label htmlFor="alcool">Preço do Álcool/Litro</label>
                    <input
                        type="text"
                        id="alcool"
                        name="alcool"
                        placeholder="Digite o preço"
                        onChange={(e) => setAlcool(Number(e.target.value))}
                    />
                    <button type="submit"
                    className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-4 rounded w-[50%] mb-[20px]">
                        Calcular
                    </button>
                </form>
                {modify1 && <p>{modify1}</p>}

                <section className="bg-green-700 w-[25%] h-[7rem] flex flex-col items-center justify-center hover:scale-110 mb-[30px]  duration-1000 ">
                    <h2 className="text-white text-2xl" >Compensa tal coisa</h2>
                    <span className="">Alcool</span>
                    <span className="">Gasolina</span>
                </section>
                {/*{Object.keys()}*/}
            </div>
        </>
    );
}

export default App;
