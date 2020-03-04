class CalcController {

    constructor(){

        this._displayCalc ="0";
        this._currentDate;
        this.initialize();

    }

    initialize(){
        //Tudo que eu quero que comece quando a calculadora for iniciada, eu coloco dentro deste método
        let displayCalcEL = document.querySelector("#display");
        let dateEL = document.querySelector("#data");
        let timeEL = document.querySelector("#hora");
        //EL: convenção que diz que é um ELEMENTO

        displayCalcEL.innerHTML = "4567";
        dateEL.innerHTML = "01/05/2020";
        timeEL.innerHTML = "00:00";
        //Significa que pega o objeto que ele está apontando e coloque uma info dentro dela, em formato HTLM
        
    }

    //Toda vez que tem atributo privado, precisa definir o getter e o setter. Ou seja, como as pessoas recuperam e atribuem valor.

    get displayCalc (){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(currentDate){
        this._currentDate = currentDate;
    }

}
