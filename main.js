'use strict';
//let x= [];
document.body.onload = function(){
    setTimeout(function(){
        const preloader = document.getElementById('page-preloader');
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 1000);
};
document.addEventListener('DOMContentLoaded', function(){
    const socket = io.connect();
    let genIzvHandlers = function () {
        var arr, len, i;
        if(arguments.length > 0) {
            len = [].slice.call(arguments, 0, 1)[0];
            arr = new Array(len);
            for(i = 0; i < len; i++) {
                arr[i] = genIzvHandlers.apply(null, [].slice.call(arguments, 1));
            }
        } else {
            return null; //or whatever you want to initialize values to.
        }
        return arr;
    };
    
    // const SaveConfBtn = document.getElementById('saveConf');
    // SaveConfBtn.style.display = 'none';
    // SaveConfBtn.addEventListener('click', (e)=>{
    //     if(BU.innerHTML && mod1.innerHTML && mod2.innerHTML && mod3.innerHTML && mod4.innerHTML && mod5.innerHTML){
    //         e.preventDefault();
    //         let data =[];
    //         data.push(BU.innerHTML);
    //         data.push(mod1.innerHTML);
    //         data.push(mod2.innerHTML);
    //         data.push( mod3.innerHTML);
    //         data.push(mod4.innerHTML);
    //         data.push( mod5.innerHTML);
    //         socket.send(data);
    //     }
    // });
        
        socket.on('message', (data)=>{
            for (let i = 0; i < data.length; i++) {
                if(i == 0) {
                    BU.innerHTML = data[i];
                    BU.style.display = 'block';
                }
            }
            DisplayAll();
            mod1.innerHTML = data[1];
            mod2.innerHTML = data[2];
            mod3.innerHTML = data[3];
            mod4.innerHTML = data[4];
            mod5.innerHTML = data[5];
            
            for (let j = 0; j < data.length; j++) {
                for (let i = 0; i < sel.length; i++) {
                    if(sel.options[i].text == data[j]){
                        sel.removeChild(sel[i]); 
                    }
                }
            }

        });



// const button = document.getElementById('btn');
// button.addEventListener('click', function(e) {
//   console.log('button was clicked');
//   fetch('/clicked', {method: 'POST'}).then(function(response){
//     if(response.ok){
//         console.log('Click was recorded');
//         return;
//     }
//     throw new Error('Request failed.');
// })
// .catch(function(error){
//     console.log(error);
// });
// });





// Модули В/В
const IOmoduls = [{
    module: "IO",
    name: "MOPI",
    slot: "VV",
    ShS: 8,
    IShSMax: 0,
    ShOT: 0,
    ShO: 0,
    IShOMax: 0,
    ShPT: 0,
    IShPTMax: 0,
    DI: 0,
    DO: 0,
    IDOMax: 0,
    AI: 0,
    RS485: 0
},
{
    module: "IO",
    name: "MRV",
    slot: "VV",
    ShS: 0,
    IShSMax: 0,
    ShOT: 0,
    ShO: 0,
    IShOMax: 0,
    ShPT: 0,
    IShPTMax: 0,
    DI: 8,
    DO: 8,
    IDOMax: 0,
    AI: 0,
    RS485: 0
},
{
    module: "IO",
    name: "MSZU",
    slot: "VV",
    ShS: 0,
    IShSMax: 0,
    ShOT: 6,
    ShO: 0,
    IShOMax: 0,
    ShPT: 0,
    IShPTMax: 0,
    DI: 8,
    DO: 0,
    IDOMax: 0,
    AI: 0,
    RS485: 0
},
{
    module: "IO",
    name: "MIUP",
    slot: "VV",
    ShS: 0,
    IShSMax: 0,
    ShOT: 0,
    ShO: 0,
    IShOMax: 0,
    ShPT: 4,
    IShPTMax: 0,
    DI: 8,
    DO: 0,
    IDOMax: 0,
    AI: 0,
    RS485: 0
},
{
    module: "IO",
    name: "MI",
    slot: "VV",
    ShS: 4,
    IShSMax: 0,
    ShOT: 0,
    ShO: 0,
    IShOMax: 0,
    ShPT: 2,
    IShPTMax: 0,
    DI: 4,
    DO: 2,
    IDOMax: 0,
    AI: 0,
    RS485: 0
},
{
    module: "IO",
    name: "MIPT",
    slot: "VV",
    ShS: 0,
    IShSMax: 0,
    ShOT: 0,
    ShO: 0,
    IShOMax: 0,
    ShPT: 0,
    IShPTMax: 0,
    DI: 0,
    DO: 0,
    IDOMax: 0,
    AI: 4,
    RS485: 0
},
{
    module: "IO",
    name: "MPI",
    slot: "VV",
    ShS: 0,
    IShSMax: 0,
    ShOT: 0,
    ShO: 0,
    IShOMax: 0,
    ShPT: 0,
    IShPTMax: 0,
    DI: 0,
    DO: 0,
    IDOMax: 0,
    AI: 0,
    RS485: 2
}];

//Промежуточные модули
const IntermediateModules =
[
    {
        module: "Intermediate",
        name: "Ограничитель тока",
        slot: "P",
        kanali: 3,
        type: "PWR",
        naznachenie: "OT"
    },
    {
        module: "Intermediate",
        name: "Плата фильтров PF-001",
        slot: "K",
        kanali: 14,
        type: "JNC",
        naznachenie: "F"
    },
    {
        module: "Intermediate",
        name: "БИЗ 7-500",
        slot: "",
        kanali: 1,
        type: "BIZ",
        naznachenie: "SV485" 
    },
    {
        module: "Intermediate",
        name: "БИЗ 30-130",
        slot: "",
        kanali: 1,
        type: "BIZ",
        naznachenie: "O" 
    }
    ,
    {
        module: "Intermediate",
        name: "БИЗ 30-63",
        slot: "",
        kanali: 1,
        type: "BIZ",
        naznachenie: "I" 
    }
];

//Терминальные модули
const TerminalModuls =
[
    {
        module: "TerminalModule",
        name: "USO",
        slot: 0,
        channels: 1,
        naznachenie: "O"
    }
];

// Блоки управления
const BlokiUpravleniya =
[
    {
        module: "BlokiUpravleniya",
        name: "PPKP",
        Type: "PK",
        slotVV: 5,
        slotP: 1,
        slotK: 5,
        ImaxBU: 1,
        Sbu: 12,
    },
    {
        module: "BlokiUpravleniya",
        name: "BR1",
        Type: "BR",
        slotVV: 5,
        slotP: 1,
        slotK: 5,
        ImaxBU: 1,
        Sbu: 12,
    },
    {
        module: "BlokiUpravleniya",
        name: "PUIZ",
        Type: "PUIZ",
        slotVV: 5,
        slotP: 1,
        slotK: 5,
        ImaxBU: 1,
        Sbu: 12,
    }
];

const KBR_MAX = 15;

//БДУ
const BlokiDistanzionnogoUpravleniya =
[
    {
        module: "BlokiDistanzionnogoUpravleniya",
        name: "Blok BDU",
        Ex: "No",
        slotVV: 5,
        DI: 4,
        ShOT: 3
    },
    {
        module: "BlokiDistanzionnogoUpravleniya",
        name: "Blok BDU-01",
        Ex: "Yes",
        slotVV: 5,
        DI: 4,
        ShOT: 3
    }
];

//Конфигурация СПЗ
//Параметры подсистемы
let NameOfProject,
    PresenceOfARM,
    TypeOfPPKP,
    dlg1Configured = false;

//3.2.4.2	Подсистемы обнаружения признаков пожара (сигнализация)
//3.2.4.2.1	Подсистема автоматического обнаружения признаков пожара
let AutoSignalizatsiya = {
    KShS: 0,
    KMIShS: 0,
    REZShS: 0,
//Конфигурация шлейфа
    KonfShleifa:{
        TShS: 0,
        SHShS: 0,
        ExShS: false,
        TShSBIZ: "",
        KIZVShS: 0,
        ZONAShS: 0, //для безадресный
        ADRShS: "", //для безадресный
        RRIShS: false,
        izveshateli:{
                    //Конфигурация извещателя при ТШС = "адресный" при ЕхШС = "Нет"
                    AdrExNet:{
                        TAIZV: 0,
                        ZONAIZV: 1,
                        ADRIZV: ""
                    },
        
                //Конфигурация извещателя при ТШС = "адресный" при ЕхШС = "да"
                    AdrExDa:{
                        TAIZV: 0,
                        ZONAIZV: 0,
                        ADRIZV: ""
                        },
                //Конфигурация извещателя при ТШС = "безадресный"
                KonfIzvBezAdr: {
                    TIZV: "",
                    IOIZV: 0.0,
                    IPIZV: 0.0
                },
                //Конфигурация извещателя при ТШС = "modbus"
                KonfModbus: {
                    KMBUSLNK: 0
                    }
        },

        configured: false
    }
};
// 3.2.4.2.2	Подсистема ручного обнаружения признаков пожара
let RutshnayaSignalizatsiya =
{
    KShSR: 0,
    MIShSR: false,
    KMIShSR: 0,
    REZShSR: 0,
    //Конфигурация шлейфа
    KonfShleifa:{
    TShS: 0,
    ExShS: false,
    TShSBIZ: "",
    KIZVShS: 0,
    ZONAShS: 0, //для безадресный
    ADRShS: "",  //для безадресный
    izveshateli:{
        //Конфигурация извещателя при ТШС = "адресный" при ЕхШС = "Нет"
                AdrExNet:{
                TAIZV: 0,
                ZONAIZV: 0,
                ADRIZV: ""
                },
                
                //Конфигурация извещателя при ТШС = "адресный" при ЕхШС = "да"
                AdrExDa:{
                TAIZV: 0,
                ZONAIZV: 0,
                ADRIZV: ""
                },

                //Конфигурация извещателя при ТШС = "безадресный"
                KonfIzvBezAdr: {
                TIZV: 0,
                IOIZV: 0.0,
                IPIZV: 0.0
                }
        },
        configured: false
    }
};

//3.2.4.3	Подсистема управления пожаротушением

let UpravleniePojaroTusheniem = 
{
    KShPT: 1,
    KMIShPT: 1,
    REZShPT: 0,

    //Зона пожаротушения
    ZonaPojaroTushenia: {
        ZONAShPT: 1,
        ADRZONYPT: "",
        KShPTZONY: 1,
        KDDZONY: 0,
        KBDUZONY: 0,
        KExBDUZONY: 0,
        KExLSBDU: 0
    },

    //Шлейф управления пожаротушением
    ShleifUpravleniaPojaroTushenia: {
        ADRShPT: "",
        IPShPT: 0.0,
        ImpShPT: 0.0,
        ExShPT: false,
        TBIZShPT: "",
        configured: false
    }
};

//Подсистема управления оповещением
let UpravlenieOpovesheniem =
{
    KZONOP: 1,
    REZShO: 0,
    //Зона оповещения
    ZonaOpoveshenia: {
        ZONAShOP: 1,
        ADRShOP: "",
        KShOPZONY: 1,
        configure: false
    },
    
    //Шлейф управления оповещением
    ShleifUpravleniaOpovesheniem: {
        KOPSh: 1,
        IPOPSh: 0.0,
        ExOPSh: false,
        TBIZOPSh: "",
        configure: false
    },
    
    //Оповещатель
    Opoveshatel: {
        ADROP: "",
        IPOP: 0.0,
        configure: false
    }
};

//Подсистема формирования выходных сигналов исполнительных устройств 
//и взаимодействия со смежными подсистемами (FVSIUiVsSP)
let FVSIUiVsSP =
{
    KRVYH: 1,
    KRREZ: 0,
    //Выход сигнала управления(дискретный релейный выход)(drv)
    DRV:{
        ADRRVYKh: "",
        ExRVYKh: false,
        TBIZR: ""
    }
};

//Подсистема диагностики
let PodsysDiagnostiki = 
{
    KDVKh: 1,
    KDVKhREZ: 0,
    KAVkh: 1,
    KAVKhREZ: 0,

    //Вход дискретный
    DI:{
        ADRDVKh: "",
        ExDVKh: false,
        TBIZDVKh: ""
    },
    //Вход аналоговый
    AI:{
        ADRAVKh: "",
        ExAVKh: false,
        TBIZAVKh: ""
    }
};

//3.2.4.7	Подсистема связи с устройствами с подключением 
//по последовательному интрефейсу RS-485 ()
let ConnSysRS485 =
{
    KRS485: 0
};





//РАботает для хранения информации на ПК пользователя 
//localStorage.setItem("IOmoduls", JSON.stringify(IOmoduls));
const getModuls = JSON.parse(localStorage.getItem("IOmoduls"));

// for (let i = 0; i < getModuls.length; i++) {
//     alert("Module: "+ getModuls[i].module + " Name: " + getModuls[i].name + " Slot: " + getModuls[i].slot);   
// }
// function showBu(){
//     // BU.innerText = BlokiUpravleniya[0].name;
//     sel.style.display = 'block';  
// }
//------------!!------------
//Структура СПЗ
//------------!!------------
let ds = [];


// const   BU = document.getElementById('ManagementBlock'),
//         mod1 = document.getElementById('module#1'),
//         mod2 = document.getElementById('module#2'),
//         mod3 = document.getElementById('module#3'),
//         mod4 = document.getElementById('module#4'),
//         mod5 = document.getElementById('module#5'),
//         mod1_1 = document.getElementById('module1_1'),
//         mod2_2 = document.getElementById('module2_2'),
//         mod3_3 = document.getElementById('module3_3'),
//         mod4_4 = document.getElementById('module4_4'),
//         mod5_5 = document.getElementById('module5_5'),
//         PPKP = document.getElementById('PPKP'),
//         Br1 = document.getElementById('BR1'),
//         Puiz = document.getElementById('PUIZ'),
//         sel = document.getElementById('selectBu'),
//         btnSel = document.getElementById('closeSelect'),
//         OT = document.getElementById('ot'),
//         bdu = document.getElementById('bdu'),
//         addBdu = document.getElementById('addBDU'),
//         selBDU = document.getElementById('selectBDU');




//         BU.addEventListener("click", ()=> { SaveConfBtn.style.display = 'block'; BU.innerHTML = BlokiUpravleniya[0].name; DisplayAll();});
//         mod1.addEventListener("click", ()=>{
//             sel.style.display = 'block'; 
//             btnSel.style.display = 'block';
//             btnSel.addEventListener("click", ()=>{ 
//             sel.style.display = 'none'; 
//             btnSel.style.display = 'none';
//         });
//             sel.onchange = ()=> {
//             sel.style.display = 'none';
//             btnSel.style.display = 'none';
//             if(!(mod1.innerHTML === "")){
//                     let oOption = document.createElement("option");
//                     oOption.appendChild(document.createTextNode(mod1.innerHTML));
//                     oOption.setAttribute("value", "");
//                     sel.appendChild(oOption);         
//                     if(mod1.innerHTML == "MIUP") OT.innerHTML = "0";           
//             }
//             if(sel.options[sel.selectedIndex].text == "MIUP") OT.innerHTML = "1";
//             mod1.innerHTML = sel.options[sel.selectedIndex].text;
//             sel.removeChild(sel[sel.selectedIndex]);
//             };
//         });
//         mod2.addEventListener("click", ()=>{
//             sel.style.display = 'block';
//             btnSel.style.display = 'block';
//             btnSel.addEventListener("click", ()=>{ 
//             sel.style.display = 'none'; 
//             btnSel.style.display = 'none';
//         });  
//             sel.onchange = ()=> {
//             sel.style.display = 'none';
//             btnSel.style.display = 'none';
//             if(!(mod2.innerHTML === "")){
//                 let oOption = document.createElement("option");
//                 oOption.appendChild(document.createTextNode(mod2.innerHTML));
//                 oOption.setAttribute("value", "");
//                 sel.appendChild(oOption);    
//                 if(mod2.innerHTML == "MIUP") OT.innerHTML = "0";                  
//             }
//             if(sel.options[sel.selectedIndex].text == "MIUP") OT.innerHTML = "1";
//                 mod2.innerHTML = sel.options[sel.selectedIndex].text;
//                 sel.removeChild(sel[sel.selectedIndex]);
//             };
//         });
//         mod3.addEventListener("click", ()=>{
//             sel.style.display = 'block';  
//             btnSel.style.display = 'block';
//             btnSel.addEventListener("click", ()=>{ 
//             sel.style.display = 'none'; 
//             btnSel.style.display = 'none';
//         });
//             sel.onchange = ()=> {
//             sel.style.display = 'none';
//             btnSel.style.display = 'none';
//             if(!(mod3.innerHTML === "")){
//                 let oOption = document.createElement("option");
//                 oOption.appendChild(document.createTextNode(mod3.innerHTML));
//                 oOption.setAttribute("value", "");
//                 sel.appendChild(oOption);
//                 if(mod3.innerHTML == "MIUP") OT.innerHTML = "0";                    
//             }
//             if(sel.options[sel.selectedIndex].text == "MIUP") OT.innerHTML = "1";
//                 mod3.innerHTML = sel.options[sel.selectedIndex].text;
//                 sel.removeChild(sel[sel.selectedIndex]);
//             };
//         });
//         mod4.addEventListener("click", ()=>{
//             sel.style.display = 'block'; 
//             btnSel.style.display = 'block';
//             btnSel.addEventListener("click", ()=>{ 
//             sel.style.display = 'none'; 
//             btnSel.style.display = 'none';
//         }); 
//             sel.onchange = ()=> {
//             sel.style.display = 'none';
//             btnSel.style.display = 'none';
//             if(!(mod4.innerHTML === "")){
//                 let oOption = document.createElement("option");
//                 oOption.appendChild(document.createTextNode(mod4.innerHTML));
//                 oOption.setAttribute("value", "");
//                 sel.appendChild(oOption);
//                 if(mod4.innerHTML == "MIUP") OT.innerHTML = "0";                     
//             }
//             if(sel.options[sel.selectedIndex].text == "MIUP") OT.innerHTML = "1";
//             mod4.innerHTML = sel.options[sel.selectedIndex].text;
//             sel.removeChild(sel[sel.selectedIndex]);
//             };
//         });
//         mod5.addEventListener("click", ()=>{
//             sel.style.display = 'block';  
//             btnSel.style.display = 'block';
//             btnSel.addEventListener("click", ()=>{ 
//             sel.style.display = 'none'; 
//             btnSel.style.display = 'none';
//         });
//             sel.onchange = ()=> {
//             sel.style.display = 'none';
//             btnSel.style.display = 'none';
//             if(!(mod5.innerHTML === "")){
//                 let oOption = document.createElement("option");
//                 oOption.appendChild(document.createTextNode(mod5.innerHTML));
//                 oOption.setAttribute("value", "");
//                 sel.appendChild(oOption); 
//                 if(mod5.innerHTML == "MIUP") OT.innerHTML = "0";                    
//             }
//             if(sel.options[sel.selectedIndex].text == "MIUP") OT.innerHTML = "1";
//             mod5.innerHTML = sel.options[sel.selectedIndex].text;
//             sel.removeChild(sel[sel.selectedIndex]);
//             };
//         });

//         addBdu.addEventListener("click", ()=>{
//             selBDU.style.display = 'block';
//             btnSel.style.display = 'block';
//             btnSel.addEventListener("click", ()=>{ 
//             selBDU.style.display = 'none'; 
//             btnSel.style.display = 'none';
//         });
//             selBDU.onchange = ()=>{
//                 selBDU.style.display = 'none';
//                 btnSel.style.display = 'none';
//                 if(!(bdu.innerHTML ==="")){
//                     let oOption = document.createElement("option");
//                     oOption.appendChild(document.createTextNode(bdu.innerHTML));
//                     oOption.setAttribute("value", "");
//                     selBDU.appendChild(oOption);                        
//                 }
//                 bdu.innerHTML = selBDU.options[selBDU.selectedIndex].text;
//                 selBDU.removeChild(selBDU[selBDU.selectedIndex]);
//             };
//         });

//         mod1.style.display = 'none';
//         mod2.style.display = 'none';
//         mod3.style.display = 'none';
//         mod4.style.display = 'none';
//         mod5.style.display = 'none';

//         mod1_1.style.display = 'none';
//         mod2_2.style.display = 'none';
//         mod3_3.style.display = 'none';
//         mod4_4.style.display = 'none';
//         mod5_5.style.display = 'none';

//         btnSel.style.display = 'none';
//         selBDU.style.display = 'none';

//         document.getElementById('MOPI').innerText  = IOmoduls[0].name;
//         document.getElementById('MRV').innerText  = IOmoduls[1].name;
//         document.getElementById('MSZU').innerText  = IOmoduls[2].name;
//         document.getElementById('MIUP').innerText  = IOmoduls[3].name;
//         document.getElementById('MI').innerText  = IOmoduls[4].name;
//         document.getElementById('MIPT').innerText  = IOmoduls[5].name;
//         document.getElementById('MPI').innerText  = IOmoduls[6].name;
//         document.getElementById('BDU').innerText = BlokiDistanzionnogoUpravleniya[0].name;
//         document.getElementById('BDU-01').innerText = BlokiDistanzionnogoUpravleniya[1].name;


//         function DisplayAll(){
//             mod1.style.display = 'block';
//             mod2.style.display = 'block';
//             mod3.style.display = 'block';
//             mod4.style.display = 'block';
//             mod5.style.display = 'block';
    
//             mod1_1.style.display = 'block';
//             mod2_2.style.display = 'block';
//             mod3_3.style.display = 'block';
//             mod4_4.style.display = 'block';
//             mod5_5.style.display = 'block';
//             SaveConfBtn.style.display = 'block';
//         }
        

    //     let NameOfProject,
    // PresenceOfARM,
    // TypeOfPPKP;


//Конфигурация СПЗ - Диалоговые окна
        const dialog1 = document.getElementById('dialog1'),
              dialog2 = document.getElementById('dialog2'),
              dialog3 = document.getElementById('dialog3'),
              dialog4 = document.getElementById('dialog4'),
              dialog5 = document.getElementById('dialog5'),
              dialog6 = document.getElementById('dialog6'),
              dialog7 = document.getElementById('dialog7'),
              dialog8 = document.getElementById('dialog8'),
              KonfiguratsiaSPZ = document.getElementById('KonfiguratsiaSPZ'),
              topMenu = document.getElementById('topMenu'),
              podsystemi = document.getElementById('podsystemi'),
              btnSubmitDlg1 = document.getElementById('btnSubmitDlg1'),
              clkKonf = document.getElementById('clkKonf'),
              sbtForm2 = document.getElementById('sbtForm2'),
              sbtForm4 = document.getElementById('sbtForm4'),
              exitConf = document.getElementById('exitConf'),
              lineLoopBtns = document.getElementById('lineLoopBtns'),
              lineLoopPrev = document.getElementById('lineLoopPrev'),
              lineLoopNext = document.getElementById('lineLoopNext');
              //izvBtns = document.getElementById('izvBtns')

        //Подсистемы
        
        const autoSys = document.getElementById('autoSys'),
            ruchSys = document.getElementById('ruchSys'),
            uprPojSys = document.getElementById('uprPojSys'),
            uprOpSys = document.getElementById('uprOpSys'),
            formSys = document.getElementById('formSys'),
            diagnSys = document.getElementById('diagnSys'),
            connSys = document.getElementById('connSys');

        dialog1.style.display = 'none';
        dialog2.style.display = 'none';
        dialog4.style.display = 'none';
        document.querySelector('#lineLoopBtnsUpr').style.display = 'none';
        podsystemi.style.display = 'none';
        lineLoopBtns.style.display = 'none';
        //izvBtns.style.display = 'none';


        //Кнопки 
        let prevIndex, nextIndex, curPos;

        clkKonf.addEventListener('click', function(){
            if(dlg1Configured == false){
                dialog1.style.display = 'block';
                podsystemi.style.display = 'none';
            }
            else    
                podsystemi.style.display = 'block';

                RaschetNom.style.display = 'none';
                clkKonf.style.backgroundColor = '#5f97ef';
                clkKonf.style.color = 'white';
                if(
                    isThereFalse(autoInputCount) &&
                    isThereFalse(shleifCount) &&
                    isThereFalse(izvAdrNetCount) &&
                    isThereFalse(izvAdrDaCount) &&
                    isThereFalse(izvBezAdrCount) &&
                    isThereFalse(modbusCount) ){
                        calcList.style.backgroundColor = 'white';
                        calcList.style.color = '#000';
                    }
            //podsystemi.style.display = 'block';
            //topMenu.style.display = 'none';
            //exitConf.style.display = 'block';
            KonfiguratsiaSPZ.style.display = 'block';
            
            
            KonfiguratsiaSPZ.style.flex = 'auto';
        });
        
        // exitConf.addEventListener('click', function(){
        //     let undone = [];
        //     if(lineLoops.length){
        //         for (let i = 0; i < lineLoops.length; i++) {
        //             if(lineLoops[i].configured == false)
        //             {
        //                 undone.push(i + 1);
        //             }
        //         }
        //         if(undone.length)
        //             {
        //                 let txt = '';
        //                 for (let i = 0; i < undone.length; i++) {
        //                     txt += undone[i] + ' ';                            
        //                 }
        //                 alert(`Шлейфы ${txt} не сконфигурированы.`);
                        
        //             }
        //         else{
        //             KonfiguratsiaSPZ.style.display = 'none';
        //             exitConf.style.display = 'none';
        //             return;
        //         }
        //     }
        //     else{
        //         exitConf.style.display = 'none';
        //         dialog1.style.display = 'none';
        //         dialog2.style.display = 'none';
        //         KonfiguratsiaSPZ.style.display = 'none';
        //         topMenu.style.display = 'block';
        //     }

        // });

        autoSys.addEventListener('click', ()=>{
            dialog2.style.display = 'inline';
            dialog2.style.flexDirection = 'column';
            document.querySelector('div#ruchSysConfiguration').style.display = 'none';
            document.querySelector('div#uprPojSysConfiguration').style.display = 'none';
            document.querySelector('div#autoSysConfiguration').style.display = 'block';
            document.querySelector('div#uprOpSysConfiguration').style.display = 'none';
            document.querySelector('div#formSysConfiguration').style.display = 'none';
            document.querySelector('div#diagnSysConfiguration').style.display = 'none';
            document.querySelector('div#connSysConfiguration').style.display = 'none';
            document.querySelector('div#BDUConfiguration').style.display = 'none';
            
            autoSys.style.backgroundColor = '#5f97ef';
            autoSys.style.color = 'white';
            ruchSys.style.backgroundColor = '#fff';
            ruchSys.style.color = '#000';
            uprPojSys.style.backgroundColor = '#fff';
            uprPojSys.style.color = '#000';
            uprOpSys.style.backgroundColor = '#fff';
            uprOpSys.style.color = '#000';
            BDU.style.backgroundColor = '#fff';
            BDU.style.color = '#000';
            formSys.style.backgroundColor = '#fff';
            formSys.style.color = '#000';
            diagnSys.style.backgroundColor = '#fff';
            diagnSys.style.color = '#000';
            connSys.style.backgroundColor = '#fff';
            connSys.style.color = '#000';

            if(AutoSignalizatsiya.KShS)
                iKShS1.value = AutoSignalizatsiya.KShS;
            if(AutoSignalizatsiya.KMIShS > 0)
                iKMIShS1.value = AutoSignalizatsiya.KMIShS;
            if(AutoSignalizatsiya.REZShS > 0)
                iREZShS1.value = AutoSignalizatsiya.REZShS;
        });

        ruchSys.addEventListener('click', ()=>{
            dialog3.style.display = 'inline';
            dialog3.style.flexDirection = 'column';
            document.querySelector('div#autoSysConfiguration').style.display = 'none';
            document.querySelector('div#uprPojSysConfiguration').style.display = 'none';
            document.querySelector('div#ruchSysConfiguration').style.display = 'block';
            document.querySelector('div#uprOpSysConfiguration').style.display = 'none';
            document.querySelector('div#formSysConfiguration').style.display = 'none';
            document.querySelector('div#diagnSysConfiguration').style.display = 'none';
            document.querySelector('div#connSysConfiguration').style.display = 'none';
            document.querySelector('div#BDUConfiguration').style.display = 'none';

            ruchSys.style.backgroundColor = '#5f97ef';
            ruchSys.style.color = 'white';
            autoSys.style.backgroundColor = '#fff';
            autoSys.style.color = '#000';
            uprPojSys.style.backgroundColor = '#fff';
            uprPojSys.style.color = '#000';
            uprOpSys.style.backgroundColor = '#fff';
            uprOpSys.style.color = '#000';
            BDU.style.backgroundColor = '#fff';
            BDU.style.color = '#000';
            formSys.style.backgroundColor = '#fff';
            formSys.style.color = '#000';
            diagnSys.style.backgroundColor = '#fff';
            diagnSys.style.color = '#000';
            connSys.style.backgroundColor = '#fff';
            connSys.style.color = '#000';

            if(RutshnayaSignalizatsiya.KShSR)
                iKShSR2.value = RutshnayaSignalizatsiya.KShSR;
            if(RutshnayaSignalizatsiya.KMIShSR > 0)
                iKMIShSR2.value = RutshnayaSignalizatsiya.KMIShSR;
            if(RutshnayaSignalizatsiya.REZShS > 0)
                iREZShSR2.value = RutshnayaSignalizatsiya.REZShSR;
        });

        document.querySelector('div#uprOpSysConfiguration').style.display = 'none';

        uprPojSys.addEventListener('click', () => {
            dialog4.style.display = 'inline';
            dialog4.style.flexDirection = 'column';
            document.querySelector('div#autoSysConfiguration').style.display = 'none';
            document.querySelector('div#uprPojSysConfiguration').style.display = 'block';
            document.querySelector('div#ruchSysConfiguration').style.display = 'none';
            document.querySelector('div#uprOpSysConfiguration').style.display = 'none';
            document.querySelector('div#formSysConfiguration').style.display = 'none';
            document.querySelector('div#diagnSysConfiguration').style.display = 'none';
            document.querySelector('div#connSysConfiguration').style.display = 'none';
            document.querySelector('div#BDUConfiguration').style.display = 'none';

            uprPojSys.style.backgroundColor = '#5f97ef';
            uprPojSys.style.color = 'white';
            uprOpSys.style.backgroundColor = '#fff';
            uprOpSys.style.color = '#000';
            ruchSys.style.backgroundColor = '#fff';
            ruchSys.style.color = '#000';
            autoSys.style.backgroundColor = '#fff';
            autoSys.style.color = '#000';
            BDU.style.backgroundColor = '#fff';
            BDU.style.color = '#000';
            formSys.style.backgroundColor = '#fff';
            formSys.style.color = '#000';
            diagnSys.style.backgroundColor = '#fff';
            diagnSys.style.color = '#000';
            connSys.style.backgroundColor = '#fff';
            connSys.style.color = '#000';

            if(RutshnayaSignalizatsiya.KShSR)
                iKShSR2.value = RutshnayaSignalizatsiya.KShSR;
            if(RutshnayaSignalizatsiya.KMIShSR > 0)
                iKMIShSR2.value = RutshnayaSignalizatsiya.KMIShSR;
            if(RutshnayaSignalizatsiya.REZShS > 0)
                iREZShSR2.value = RutshnayaSignalizatsiya.REZShSR;
        });
        
        document.querySelector('div#uprOpSysConfiguration').style.display = 'none';

        uprOpSys.addEventListener('click', () =>{
            dialog5.style.display = 'inline';
            dialog5.style.flexDirection = 'column';
            document.querySelector('div#autoSysConfiguration').style.display = 'none';
            document.querySelector('div#uprPojSysConfiguration').style.display = 'none';
            document.querySelector('div#ruchSysConfiguration').style.display = 'none';
            document.querySelector('div#formSysConfiguration').style.display = 'none';
            document.querySelector('div#diagnSysConfiguration').style.display = 'none';
            document.querySelector('div#connSysConfiguration').style.display = 'none';
            document.querySelector('div#BDUConfiguration').style.display = 'none';
            document.querySelector('div#uprOpSysConfiguration').style.display = 'block';

            uprOpSys.style.backgroundColor = '#5f97ef';
            uprOpSys.style.color = 'white';
            uprPojSys.style.backgroundColor = '#fff';
            uprPojSys.style.color = '#000';
            ruchSys.style.backgroundColor = '#fff';
            ruchSys.style.color = '#000';
            autoSys.style.backgroundColor = '#fff';
            autoSys.style.color = '#000';
            BDU.style.backgroundColor = '#fff';
            BDU.style.color = '#000';
            formSys.style.backgroundColor = '#fff';
            formSys.style.color = '#000';
            diagnSys.style.backgroundColor = '#fff';
            diagnSys.style.color = '#000';
            connSys.style.backgroundColor = '#fff';
            connSys.style.color = '#000';

            // if(RutshnayaSignalizatsiya.KShSR)
            //     iKShSR2.value = RutshnayaSignalizatsiya.KShSR;
            // if(RutshnayaSignalizatsiya.KMIShSR > 0)
            //     iKMIShSR2.value = RutshnayaSignalizatsiya.KMIShSR;
            // if(RutshnayaSignalizatsiya.REZShS > 0)
            //     iREZShSR2.value = RutshnayaSignalizatsiya.REZShSR;
        });

        formSys.addEventListener('click', () =>{
            dialog6.style.display = 'inline';
            dialog6.style.flexDirection = 'column';
            document.querySelector('div#autoSysConfiguration').style.display = 'none';
            document.querySelector('div#uprPojSysConfiguration').style.display = 'none';
            document.querySelector('div#ruchSysConfiguration').style.display = 'none';
            document.querySelector('div#uprOpSysConfiguration').style.display = 'none';
            document.querySelector('div#diagnSysConfiguration').style.display = 'none';
            document.querySelector('div#connSysConfiguration').style.display = 'none';
            document.querySelector('div#formSysConfiguration').style.display = 'block';
                document.querySelector('div#BDUConfiguration').style.display = 'none';

            formSys.style.backgroundColor = '#5f97ef';
            formSys.style.color = 'white';
            uprOpSys.style.backgroundColor = '#fff';
            uprOpSys.style.color = '#000';
            uprPojSys.style.backgroundColor = '#fff';
            uprPojSys.style.color = '#000';
            ruchSys.style.backgroundColor = '#fff';
            ruchSys.style.color = '#000';
            autoSys.style.backgroundColor = '#fff';
            autoSys.style.color = '#000';
            diagnSys.style.backgroundColor = '#fff';
            diagnSys.style.color = '#000';
            connSys.style.backgroundColor = '#fff';
            connSys.style.color = '#000';
        BDU.style.backgroundColor = '#fff';
        BDU.style.color = '#000';
        });
        
        diagnSys.addEventListener('click', () =>{
            dialog7.style.display = 'inline';
            dialog7.style.flexDirection = 'column';
            document.querySelector('div#autoSysConfiguration').style.display = 'none';
            document.querySelector('div#uprPojSysConfiguration').style.display = 'none';
            document.querySelector('div#ruchSysConfiguration').style.display = 'none';
            document.querySelector('div#uprOpSysConfiguration').style.display = 'none';
            document.querySelector('div#formSysConfiguration').style.display = 'none';
            document.querySelector('div#connSysConfiguration').style.display = 'none';
            document.querySelector('div#diagnSysConfiguration').style.display = 'block';
        document.querySelector('div#BDUConfiguration').style.display = 'none';

            diagnSys.style.backgroundColor = '#5f97ef';
            diagnSys.style.color = 'white';
            formSys.style.backgroundColor = '#fff';
            formSys.style.color = '#000';
            uprOpSys.style.backgroundColor = '#fff';
            uprOpSys.style.color = '#000';
            uprPojSys.style.backgroundColor = '#fff';
            uprPojSys.style.color = '#000';
            ruchSys.style.backgroundColor = '#fff';
            ruchSys.style.color = '#000';
            autoSys.style.backgroundColor = '#fff';
            autoSys.style.color = '#000';
            connSys.style.backgroundColor = '#fff';
            connSys.style.color = '#000';
        BDU.style.backgroundColor = '#fff';
        BDU.style.color = '#000';
        });

        connSys.addEventListener('click', () =>{
            dialog8.style.display = 'inline';
            dialog8.style.flexDirection = 'column';
            document.querySelector('div#autoSysConfiguration').style.display = 'none';
            document.querySelector('div#uprPojSysConfiguration').style.display = 'none';
            document.querySelector('div#ruchSysConfiguration').style.display = 'none';
            document.querySelector('div#uprOpSysConfiguration').style.display = 'none';
            document.querySelector('div#formSysConfiguration').style.display = 'none';
            document.querySelector('div#diagnSysConfiguration').style.display = 'none';
            document.querySelector('div#connSysConfiguration').style.display = 'block';

            connSys.style.backgroundColor = '#5f97ef';
            connSys.style.color = 'white';
            diagnSys.style.backgroundColor = '#fff';
            diagnSys.style.color = '#000';
            formSys.style.backgroundColor = '#fff';
            formSys.style.color = '#000';
            uprOpSys.style.backgroundColor = '#fff';
            uprOpSys.style.color = '#000';
            uprPojSys.style.backgroundColor = '#fff';
            uprPojSys.style.color = '#000';
            ruchSys.style.backgroundColor = '#fff';
            ruchSys.style.color = '#000';
            autoSys.style.backgroundColor = '#fff';
            autoSys.style.color = '#000';
        BDU.style.backgroundColor = '#fff';
        BDU.style.color = '#000';
        });


        //конф шлейфа кнопки пред и след
        lineLoopPrev.addEventListener('click', ()=>{
                if(prevIndex < 1) prevIndex = lineLoops.length;
                nextIndex = curPos;
                curPos = prevIndex;
                prevIndex--;
                if(prevIndex < 1) prevIndex = lineLoops.length;
                lineLoopPos.value = curPos;
                hideLineLoops(lineLoops.length);
                showLineLoops(lineLoops.length, curPos);
            
    
        });

        lineLoopNext.addEventListener('click', ()=>{
                    if(nextIndex > lineLoops.length + 1) nextIndex = 1;
                    prevIndex = curPos;
                    curPos = nextIndex;
                    nextIndex++;
                    if(nextIndex > lineLoops.length) nextIndex = 1;
                    lineLoopPos.value = curPos;
                    hideLineLoops(lineLoops.length);
                    showLineLoops(lineLoops.length, curPos);

        });

        
        lineLoopPos.addEventListener('blur', ()=>{
            curPos = parseInt(lineLoopPos.value, 10);
            if(curPos + 1 > lineLoops.length + 1){
                nextIndex = 1;
                prevIndex = curPos - 1;
            }
            else if(curPos - 1 < 1){
                prevIndex = lineLoops.length;
                nextIndex = curPos + 1;
            }
            else{
                prevIndex = curPos - 1;
                nextIndex = curPos + 1;
            }
            hideLineLoops(lineLoops.length);
            showLineLoops(lineLoops.length, curPos);
        });

       


        const dlg1BtnSbt = document.getElementById('btnSubmitDlg1'),
              dlg2Sbt = document.getElementById('dlg2Sbt'),
              dlg3Sbt = document.getElementById('dlg3Sbt'),
              dlg4Sbt = document.getElementById('dlg4Sbt'),
              dlg5Sbt = document.getElementById('dlg5Sbt');

        dlg1BtnSbt.addEventListener('click', (e)=>{
            e.preventDefault();
            const projname = document.getElementById('projectName'),
                ARM_PARUS = document.getElementById('ARM_PARUS'),
                selType = document.getElementById('selTypePPKP');
                
                    if(selType.selectedIndex != 0)
                        TypeOfPPKP = selType.options[selType.selectedIndex].text;
                    // selType.onchange = ()=>{
                    //     TypeOfPPKP = selType.options[selType.selectedIndex].text;
                    // };
                if(projname.value ){

                    if(ARM_PARUS.checked) PresenceOfARM = true;
                    else  PresenceOfARM = false;

                    NameOfProject = projname.value;

                    if(NameOfProject)
                        dlg1Configured = true;

                    dialog1.style.display = 'none';
                    podsystemi.style.display = 'block';
                }
                else{
                
                    projname.style.color = 'red';
                    projname.value = 'Неверній ввод!';
                    projname.style.color = 'black';
                }
                       
        });

//Автоматическая сигнализация
    // const bezAdr1 = document.getElementById('bezAdr1'),
    // adrBIZ1 = document.getElementById('adrBIZ1'),
    // bezAdr1_1 = document.getElementById('bezAdr1_1'),
    // bezAdr1_2 = document.getElementById('bezAdr1_2'),
    // confModbus = document.getElementById('confModbus'),
    // //AdrExNet1 = document.getElementById('AdrExNet1'),
    // //AdrExDa1 = document.getElementById('AdrExDa1'),
    // iKIZVShS1 = document.getElementById('iKIZVShS1'),
    // iZONAShS1 = document.getElementById('iZONAShS1'),
    // iADRShS1 = document.getElementById('iADRShS1'),
    // iRRIShS1 = document.getElementById('iRRIShS1'),
    // iTAIZV1 = document.getElementById('iTAIZV1'),
    // iTAIZV1_1 = document.getElementById('iTAIZV1_1'),
    // iZONAIZV1 = document.getElementById('iZONAIZV1'),
    // iZONAIZV1_1 = document.getElementById('iZONAIZV1_1'),
    // iADRIZV1 = document.getElementById('iADRIZV1'),
    // iADRIZV1_1 = document.getElementById('iADRIZV1_1'),
    // iTIZV1 = document.getElementById('iTIZV1'),
    // iIOIZV1 = document.getElementById('iIOIZV1'),
    // iIPIZV1 = document.getElementById('iIPIZV1'),
    // iKMBUSLNK1 = document.getElementById('iKMBUSLNK1');  

    // bezAdr1.style.display = 'none';
    // bezAdr1_1.style.display = 'none';
    // bezAdr1_2.style.display = 'none';
    // confModbus.style.display = 'none';
    // adrBIZ1.style.display = 'block';
    //AdrExNet1.style.display = 'none';   
    //AdrExDa1.style.display = 'none';  
   

    
    const iKShS = document.getElementById('iKShS1'),
    iKMIShS1 = document.getElementById('iKMIShS1'),
    iREZShS1 = document.getElementById('iREZShS1'),
    // iTShS1 = document.getElementById('iTShS1'),
    // SKhShS1 = document.getElementById('SKhShS1'),
    // iExShS1 = document.getElementById('iExShS1'),
    iTShSBIZ = document.getElementById('iTShSBIZ');
    // TypeBIZ = document.getElementById('TypeBIZ');   
    // TypeBIZ.style.display = 'none';
    // iTShSBIZ.style.display = 'none';

    // AutoSignalizatsiya.KonfShleifa.TShS = 0;
    // AutoSignalizatsiya.KonfShleifa.SHShS = 0;
    // AutoSignalizatsiya.KonfShleifa.AdrExNet.TAIZV = 0;
    // AutoSignalizatsiya.KonfShleifa.AdrExDa.TAIZV = 0;
    
               
    // if(AutoSignalizatsiya.KonfShleifa.ExShS == true)
    //     AdrExDa1.style.display = 'block';
    // else
    //     AdrExNet1.style.display = 'block';


    //Добавление элементов БИЗ назначения "И"
//     for (let i = 0; i < IntermediateModules.length; i++) {
//         for(let prop in IntermediateModules[i]){
//             if(IntermediateModules[i][prop] == "I"){
//                 let oOption = document.createElement("option");
//                 oOption.appendChild(document.createTextNode(IntermediateModules[i].name));
//                 oOption.setAttribute("value", "");
//                 adrBIZ1.appendChild(oOption);   
//             }
//         }        
//     }
//     let flag = false, list = false;
//     adrBIZ1.onchange = ()=>{
//         if(adrBIZ1.selectedIndex == 0)
//             return;
        
//         AutoSignalizatsiya.KonfShleifa.TShSBIZ = adrBIZ1.options[adrBIZ1.selectedIndex].text;
//         list = true;
//         flag = false;
//         console.log(AutoSignalizatsiya.KonfShleifa.TShSBIZ );
//     }
//     //Обработка взрывозащиты
//     iExShS1.addEventListener('click', ()=>{
//         if(iExShS1.checked)
//         { 
//             AutoSignalizatsiya.KonfShleifa.ExShS = true;
//             TypeBIZ.style.display = 'block';
//             if( AutoSignalizatsiya.KonfShleifa.TShS == 0){ 
//                 AdrExNet1.style.display = 'none'; 
//                 AdrExDa1.style.display = 'block';
//             }
            
//         }
//         else  {
//             AutoSignalizatsiya.KonfShleifa.ExShS = false;
//             TypeBIZ.style.display = 'none';
//             if( AutoSignalizatsiya.KonfShleifa.TShS == 0) {
//                 AdrExDa1.style.display = 'none'; 
//                 AdrExNet1.style.display = 'block';
//             }
//         }
//         //e.preventDefault();
//     });
    
//     //Ввод пустой строки для ТШСБИЗ
    
//     iTShSBIZ.addEventListener('blur', (e)=>{

//         if(AutoSignalizatsiya.KonfShleifa.ExShS == true){
//             if(AutoSignalizatsiya.KonfShleifa.TShS == 1){
//                 if(iTShSBIZ.value == ""){
//                     flag = confirm("Взрывозащита типа \"d\"");
//                     if(flag)
//                     {
//                         AutoSignalizatsiya.KonfShleifa.TShSBIZ = "Взрывозащита типа \"d\"";
//                         iTShSBIZ.value = "Взрывозащита типа \"d\"";
//                         console.log("ТШСБИЗ: " + AutoSignalizatsiya.KonfShleifa.TShSBIZ);
//                         adrBIZ1.style.display = 'none';
//                         e.preventDefault();
//                         list = false
//                         return;
//                     }
//                     // else if(iTShSBIZ.value != "")
//                     //     list = false; 
//                     adrBIZ1.style.display = 'block';
//                 }
//                 else{
//                     AutoSignalizatsiya.KonfShleifa.TShSBIZ = iTShSBIZ.value;
//                     console.log("ТШСБИЗ: " + AutoSignalizatsiya.KonfShleifa.TShSBIZ);
//                     list = false;
//                     flag = false;
//                 }
//             }
//             list = false;
//         }
//     });

// //СХШС

// SKhShS1.onchange = function(){
//     AutoSignalizatsiya.KonfShleifa.SHShS = SKhShS1.selectedIndex;
// };

// //TShS

// iTShS1.onchange = ()=>{
//         if(iTShS1.selectedIndex == 1){
//             AutoSignalizatsiya.KonfShleifa.TShS = iTShS1.selectedIndex;
            
//             AdrExNet1.style.display = 'none';
//             AdrExDa1.style.display = 'none';
//             bezAdr1.style.display = 'block';
//             bezAdr1_1.style.display = 'block';
//             bezAdr1_2.style.display = 'block';
//             iTShSBIZ.style.display = 'block';
//             confModbus.style.display = 'none';



//             while(adrBIZ1.firstChild)
//                 adrBIZ1.removeChild(adrBIZ1.firstChild);
                
//                 let oOption = document.createElement("option");
//                 oOption.appendChild(document.createTextNode("Выберите тип:"));
//                 oOption.setAttribute("value", "");
//                 adrBIZ1.appendChild(oOption);   
               
//                 for (let i = 0; i < IntermediateModules.length; i++) {
//                     for(let prop in IntermediateModules[i]){
//                         if(IntermediateModules[i][prop] == "BIZ"){
//                             oOption = document.createElement("option")
//                             oOption.appendChild(document.createTextNode(IntermediateModules[i].name));
//                             oOption.setAttribute("value", "");
//                             adrBIZ1.appendChild(oOption);   
//                         }
//                     }        
//                 }
//         }
//         else if(iTShS1.selectedIndex == 0){
//             AutoSignalizatsiya.KonfShleifa.TShS = iTShS1.selectedIndex;

//             if(AutoSignalizatsiya.KonfShleifa.ExShS == true)
//                 AdrExDa1.style.display = 'block';
//             else
//                 AdrExNet1.style.display = 'block';

//             bezAdr1.style.display = 'none';
//             bezAdr1_1.style.display = 'none';
//             bezAdr1_2.style.display = 'none';
//             iTShSBIZ.style.display = 'none';
//             adrBIZ1.style.display = 'block';
//             confModbus.style.display = 'none';             
            
//             while(adrBIZ1.firstChild)
//                 adrBIZ1.removeChild(adrBIZ1.firstChild);

//             let oOption = document.createElement("option");
//             oOption.appendChild(document.createTextNode("Выберите тип:"));
//             oOption.setAttribute("value", "");
//             adrBIZ1.appendChild(oOption);  
//             for (let i = 0; i < IntermediateModules.length; i++) {
//                 for(let prop in IntermediateModules[i]){
//                     if(IntermediateModules[i][prop] == "I"){
//                          oOption = document.createElement("option");
//                         oOption.appendChild(document.createTextNode(IntermediateModules[i].name));
//                         oOption.setAttribute("value", "");
//                         adrBIZ1.appendChild(oOption);   
//                     }
//                 }        
//             }
//         }
//         else{
//             AutoSignalizatsiya.KonfShleifa.TShS = iTShS1.selectedIndex;
//             confModbus.style.display = 'block';
//             adrBIZ1.style.display = 'block';
//             iTShSBIZ.style.display = 'block';
//             AdrExNet1.style.display = 'none';
//             AdrExDa1.style.display = 'none';
//             bezAdr1.style.display = 'none';
//             bezAdr1_1.style.display = 'none';
//             bezAdr1_2.style.display = 'none';

//             while(adrBIZ1.firstChild)
//             adrBIZ1.removeChild(adrBIZ1.firstChild);
            
//             let oOption = document.createElement("option");
//             oOption.appendChild(document.createTextNode("Выберите тип:"));
//             oOption.setAttribute("value", "");
//             adrBIZ1.appendChild(oOption);   
           
//             for (let i = 0; i < IntermediateModules.length; i++) {
//                 for(let prop in IntermediateModules[i]){
//                     if(IntermediateModules[i][prop] == "BIZ"){
//                         oOption = document.createElement("option")
//                         oOption.appendChild(document.createTextNode(IntermediateModules[i].name));
//                         oOption.setAttribute("value", "");
//                         adrBIZ1.appendChild(oOption);   
//                     }
//                 }        
//             }
//         }
//     };
    
//Обработка полей ввода
const regEx = /\D+/g;
let lineLoops = [];
let autoInputCount  = [];
autoInputCount['KShS'] = false;
autoInputCount['KMIShS'] = false;
autoInputCount['REZShS'] = false;


//KShS

iKShS.onkeypress = (e)=>{
     e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
    console.log("Char pressed: " + chr);
    if(chr == ',' || chr == '.')
    {   
        // iKShS.value.replace(/[\,|\.]+/g,'');
        e.preventDefault();
        return;
    }
    if(chr == null) return;

    if (chr < '0' || chr > '9') {
        return false;
    }
};

iKShS.addEventListener('focus', ()=>{
    iKShS.style.boxShadow = 'none';
   
});

iKShS.addEventListener('blur', ()=>{
    if(iKShS.value.search(regEx) == -1){
    if(parseInt(iKShS.value, 10) >= 1 && parseInt(iKShS.value, 10) <= 640){
        AutoSignalizatsiya.KShS = parseInt(iKShS.value, 10);
        autoInputCount['KShS'] = true;
        iKShS.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
        //destroyKonf();
        lineLoopBtns.style.display = 'block';
        lineLoops.length = AutoSignalizatsiya.KShS;
        for (let i = 0; i < lineLoops.length; i++) {
            lineLoops[i] = AutoSignalizatsiya.KonfShleifa;
            shleifCount[`KIZVShS${i}`] = false;
        }


        createlineLoop(AutoSignalizatsiya.KShS);
        let lastSpan = document.getElementById('lastPos'),
            lineLoopPos = document.getElementById('lineLoopPos');

        lastSpan.innerHTML = 'из ' + lineLoops.length;
        lineLoopPos.min = 1;
        lineLoopPos.max = lineLoops.length;
        lineLoopPos.value = 1;
        curPos = 1;
        prevIndex = lineLoops.length;
        nextIndex = curPos + 1;
        
        if(lineLoops.length){
            for (let i = 0; i < lineLoops.length; i++) {
                for (let j = 0; j < 28; j++) {
                    dynamicEventHandlers[i] = [];
                }
            }
         }

        setDynHandlers(dynamicEventHandlers, lineLoops.length);
        
        showLineLoops(lineLoops.length, 1);
        hideAutoObnar();
        if(lineLoops.length){
            for (let i = 0; i < lineLoops.length; i++) {                
             //   lineLoopsData[i] = AutoSignalizatsiya.KonfShleifa;
             lineLoopsData[i] = Object.assign({}, AutoSignalizatsiya.KonfShleifa);
                dynamicEventHandlers[i][5].style.display = 'none';
            }
         } 
         //shleifCount['TShS'] = true; shleifCount['TShSBIZ'] = false;
         //SKhShS
        //  izvBezAdrCount['TIZVauto'] = false;
        //  izvBezAdrCount['IOIZV'] = false;
        //  shleifCount['KMBUSLNK'] = false; shleifCount['TShSBIZ'] = true;
            lineLoopConf = document.getElementById('lineLoopKonf');
            setTShS(dynamicEventHandlers, lineLoops.length, lineLoopsData);
            setSKhShS(dynamicEventHandlers, lineLoops.length, lineLoopsData);
            setExShS(dynamicEventHandlers, lineLoops.length, lineLoopsData);
            setTShSBIZ(dynamicEventHandlers, lineLoops.length, lineLoopsData);
            setAdrBiz(dynamicEventHandlers, lineLoops.length, lineLoopsData);
            setKIZVShS(dynamicEventHandlers, lineLoops.length, lineLoopsData);
            setZonaShS(dynamicEventHandlers, lineLoops.length, lineLoopsData);
            setAdrShS(dynamicEventHandlers, lineLoops.length, lineLoopsData);
            setRRIShS(dynamicEventHandlers, lineLoops.length, lineLoopsData);
            //setTAIZVadrNet(dynamicEventHandlers, lineLoops.length, lineLoopsData);
            //setZonaIzvadrNet(dynamicEventHandlers, lineLoops.length, lineLoopsData);
            //setAdrIZVadrNet(dynamicEventHandlers, lineLoops.length, lineLoopsData);
            //setTAIZVadrDa(dynamicEventHandlers, lineLoops.length, lineLoopsData);
            setZonaIzvadrDa(dynamicEventHandlers, lineLoops.length, lineLoopsData);
            setAdrIZVadrDa(dynamicEventHandlers, lineLoops.length, lineLoopsData);
            setTIZVauto(dynamicEventHandlers, lineLoops.length, lineLoopsData);
            setIOIZV(dynamicEventHandlers, lineLoops.length, lineLoopsData);
            setiIPIZV(dynamicEventHandlers, lineLoops.length, lineLoopsData);
            setKMBUSLNK(dynamicEventHandlers, lineLoops.length, lineLoopsData);          
            //setDlsSbt(dynamicEventHandlers, lineLoops.length, lineLoopsData);
        console.log(AutoSignalizatsiya.KShS);
    }
    else if(iKShS.value == ""){
        autoInputCount['KShS'] = false;
        return;
    }
    else
        {
            autoInputCount['KShS'] = false;
            iKShS.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
        }
    }
    else
        iKShS.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
});

// for (let i = 0; i < lineLoops.length; i++) {
//     let TShS = document.getElementById('TShS'+i),


    
// }


function destroyKonf(){
    let div = document.body.getElementById('lineLoopKonf');
    document.body.removeChild(div);
}

function createlineLoop(val){
    if(val > 0){
        let elem, subelem, option, mainDiv, div_1, div_2;
        mainDiv = document.createElement('div');
        mainDiv.setAttribute('id','lineLoopKonf');
        mainDiv.setAttribute('class','flex-item');
        for (let i = 0; i < val; i++) {
            elem = document.createElement('form');
            elem.setAttribute("id", i);
            
            div_1 = document.createElement('div');
            div_1.setAttribute('class', 'flex-items');

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');
            // subelem = document.createElement('h3')
            // subelem.appendChild(document.createTextNode(`Конфигурация шлейфа #${i + 1}`));
            // elem.appendChild(subelem);

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode("Тип шлейфа:"));
            div_1.appendChild(subelem);
            elem.appendChild(div_1);

            subelem = document.createElement('select');
            subelem.setAttribute("id", `TShS${i}`);
            option = document.createElement('option');
            option.appendChild(document.createTextNode("АДРЕСНЫЙ"));
            subelem.appendChild(option);
            option = document.createElement('option');
            option.appendChild(document.createTextNode("БЕЗАДРЕСНЫЙ"));
            subelem.appendChild(option);
            option = document.createElement('option');
            option.appendChild(document.createTextNode("MODBUS"));
            subelem.appendChild(option);

            div_1.appendChild(subelem);
            elem.appendChild(div_1);

            div_1 = document.createElement('div');
            div_1.setAttribute('class', 'flex-items');

            let div = document.createElement('div');
            div.setAttribute('id', `bezAdr_${i}`);
            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode("Схема включения:"));
            div_1.appendChild(subelem);
            div.appendChild(div_1);


            subelem = document.createElement('select');
            subelem.setAttribute('id', `SKhShS${i}`);

            option = document.createElement('option');
            option.appendChild(document.createTextNode("Пассивный НР"));
            subelem.appendChild(option);

            option = document.createElement('option');
            option.appendChild(document.createTextNode("Пассивный НЗ"));
            subelem.appendChild(option);

            option = document.createElement('option');
            option.appendChild(document.createTextNode("Активный НР"));
            subelem.appendChild(option);

            option = document.createElement('option');
            option.appendChild(document.createTextNode("Линейный Т"));
            subelem.appendChild(option);
            div_1.appendChild(subelem);
            div.appendChild(div_1);
            elem.appendChild(div);

            div_1 = document.createElement('div');
            div_1.setAttribute('class', 'flex-items');

            subelem = document.createElement('p');
            
            subelem.appendChild(document.createTextNode("Взрывозащита:"));
            div_1.appendChild(subelem);
            elem.appendChild(div_1);

            subelem = document.createElement('input');
            
            subelem.setAttribute('type', 'checkbox');
            subelem.setAttribute('id', `ExShS${i}`);
            div_1.appendChild(subelem);
            elem.appendChild(div_1);

            div = document.createElement('div');
            div.setAttribute('id', `TypeBIZ${i}`);

            div_1 = document.createElement('div');
            div_1.setAttribute('class', 'ARM');

            subelem = document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Тип искробарьера:'));
            div_1.appendChild(subelem);
            div.appendChild(div_1);


            option = document.createElement('label');
            option.setAttribute('class', 'flex-item');
            subelem = document.createElement('input');
            subelem.setAttribute('list', `_adrBIZ${i}`);
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `TShSBIZ${i}`);
            option.appendChild(subelem);
            div_1.appendChild(option);
            div.appendChild(div_1);
            
            
            subelem = document.createElement('datalist');
            subelem.setAttribute('id', `_adrBIZ${i}`);
            div.appendChild(subelem);

            subelem = document.createElement('br');
            div.appendChild(subelem);

            subelem = document.createElement('select');
            subelem.setAttribute('id',`adrBIZ${i}`);
            option = document.createElement('option');
            option.appendChild(document.createTextNode('Выберите тип:'));
            subelem.appendChild(option);
            div.appendChild(subelem);

            elem.appendChild(div);
            
            subelem = document.createElement('br');
            elem.appendChild(subelem);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem = document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Количество извещателей:'));
            div_2.appendChild(subelem);
            elem.appendChild(div_2);

            subelem = document.createElement('input');
            subelem.setAttribute('class', 'flex-item');
            subelem.setAttribute('type', 'number');
            subelem.setAttribute('id', `KIZVShS${i}`);
            subelem.setAttribute('placeholder', '1...32');
            div_2.appendChild(subelem);
            elem.appendChild(div_2);

            div = document.createElement('div');
            div.setAttribute('id', `bezAdr__${i}`);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem = document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Зона:'));
            div_2.appendChild(subelem);
            div.appendChild(div_2);

            subelem = document.createElement('input');
            subelem.setAttribute('class', 'flex-item');
            subelem.setAttribute('type', 'number');
            subelem.setAttribute('id', `ZONAShS${i}`);
            subelem.setAttribute('placeholder', '1...255');
            div_2.appendChild(subelem);
            div.appendChild(div_2);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem = document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Наименование / адрес:'));
            div_2.appendChild(subelem);
            div.appendChild(div_2);

            subelem = document.createElement('input');
            subelem.setAttribute('class', 'flex-item');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `ADRShS${i}`);
            subelem.setAttribute('placeholder', `до 20 символов...`);
            div_2.appendChild(subelem);
            div.appendChild(div_2);

            elem.appendChild(div);

            div_1 = document.createElement('div');
            div_1.setAttribute('class', 'flex-items');

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode('Разрешить подключение ручных извещателей:'));
            subelem.setAttribute('class', `RRIShS_p_${i}`);
            div_1.appendChild(subelem);
            elem.appendChild(div_1);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'checkbox');
            subelem.setAttribute('id',`RRIShS${i}`);
            div_1.appendChild(subelem);
            elem.appendChild(div_1);

            div = document.createElement('div');
            div.setAttribute('id', `bezAdr___${i}`);   

            subelem = document.createElement('h3');
            subelem.appendChild(document.createTextNode('Конфигурация извещателя безадресного шлейфа'));
            div.appendChild(subelem);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem = document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Тип извещателя:'));
            div_2.appendChild(subelem);
            div.appendChild(div_2);

            subelem = document.createElement('label');
            subelem.setAttribute('class', 'flex-item');
            let subSub = document.createElement('input');
            subSub.setAttribute('list', `enteredItems${i}`);
            subSub.setAttribute('id', `TIZV${i}`);
            subelem.appendChild(subSub);
            div_2.appendChild(subelem);
            div.appendChild(div_2);

            subelem = document.createElement('datalist');
            subelem.setAttribute('id', `enteredItems${i}`);
            div.appendChild(subelem);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem= document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Ток в режиме "ДЕЖУРНЫЙ", мА:'));
            div_2.appendChild(subelem);
            div.appendChild(div_2);

            subelem = document.createElement('input');
            subelem.setAttribute('class', 'flex-item');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `IOIZV${i}`);
            div_2.appendChild(subelem);
            div.appendChild(div_2);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem= document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Ток в режиме "ПОЖАР", мА:'));
            div_2.appendChild(subelem);
            div.appendChild(div_2);


            subelem = document.createElement('input');
            subelem.setAttribute('class', 'flex-item');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `IPIZV${i}`);
            div_2.appendChild(subelem);
            div.appendChild(div_2);


            elem.appendChild(div);

            // subelem = document.createElement('br');
            // elem.appendChild(subelem);

            // subelem = document.createElement('button');
            // subelem.setAttribute('type', 'submit');
            // subelem.setAttribute('id', `dlgSbt${i}`);
            // subelem.setAttribute('class', `btn-after`);
            // subelem.style.marginTop = '19px';
            // subelem.style.marginBottom = '20px';
            // subelem.appendChild(document.createTextNode('Сконфигурировать извещатели'));
            // elem.appendChild(subelem);


            elem.style.display = 'none';
            mainDiv.appendChild(elem);
            document.querySelector('div#autoSysConfiguration').appendChild(mainDiv);
            //document.body.appendChild(mainDiv); 
                    
        }
    }
}

// let oOption = document.createElement("option");
// oOption.appendChild(document.createTextNode("Выберите тип:"));
// oOption.setAttribute("value", "");
// adrBIZ2.appendChild(oOption);   

// for (let i = 0; i < IntermediateModules.length; i++) {
//     for(let prop in IntermediateModules[i]){
//         if(IntermediateModules[i][prop] == "BIZ"){
//             oOption = document.createElement("option")
//             oOption.appendChild(document.createTextNode(IntermediateModules[i].name));
//             oOption.setAttribute("value", "");
//             adrBIZ2.appendChild(oOption);   
//         }
//     }        
// }

//KMIShS
iKMIShS1.onkeypress = (e)=>{
     e = e || event;
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    var chr = getChar(e);
    console.log("Char pressed: " + chr);
    if(chr == ',' || chr == '.')
    {   
        e.preventDefault();
        return;
    }
    if(chr == null) return;

    if (chr < '0' || chr > '9') {
        return false;
    }
};

iKMIShS1.addEventListener('focus', ()=>{
    iKMIShS1.style.boxShadow = 'none';
});

//iKMIShS1
iKMIShS1.addEventListener('blur', ()=>{
    if(iKMIShS1.value.search(regEx) == -1){
    if(parseInt(iKMIShS1.value, 10) >= 0 && parseInt(iKMIShS1.value, 10) <= 32){
        AutoSignalizatsiya.KMIShS = parseInt(iKMIShS1.value, 10);
        iKMIShS1.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
        console.log( AutoSignalizatsiya.KMIShS);
        autoInputCount['KMIShS'] = true;
    }
    else if(iKMIShS1.value == ""){
        autoInputCount['KMIShS'] = false;
        return;
    }
    else
        {
            autoInputCount['KMIShS'] = false;
            iKMIShS1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
        }
    }
    else
         iKMIShS1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
});

//REZShS

iREZShS1.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

iREZShS1.addEventListener('focus', ()=>{
    iREZShS1.style.boxShadow = 'none';
});

iREZShS1.addEventListener('blur', ()=>{
    if(iREZShS1.value.search(regEx) == -1){
    if(parseInt(iREZShS1.value, 10) >= 0 && parseInt(iREZShS1.value, 10) <= 100){
        AutoSignalizatsiya.REZShS = parseInt(iREZShS1.value, 10);
        iREZShS1.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
        console.log(AutoSignalizatsiya.REZShS);
        autoInputCount['REZShS'] = true;
    }
    else if(iREZShS1.value == ""){
        autoInputCount['REZShS'] = false;
        return;
    }
    else
        {
            autoInputCount['REZShS'] = false;
            iREZShS1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
        }
    }
    else
        iREZShS1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
});

 // обработка динамических форм конфигурации шлейфов
let dynamicEventHandlers = [],
     lineLoopsData = [],
     lineLoopConf ;
     //lineLoopsData = genIzvHandlers(640, )
    //  for (let i = 0; i < 640; i++) {                
    //     lineLoopsData[i] =   Object.assign({}, AutoSignalizatsiya.KonfShleifa);//AutoSignalizatsiya.KonfShleifa;
    //     //dynamicEventHandlers[i][5].style.display = 'none';
    // }

// let 
//     izvNodes = {
//         adrExNet: '',
//         Taizv: '',
//         zonaIzv: '',
//         adrIzv: '',
//         adrExDa: '',
//         TaizvD: '',
//         zonaIzvD: '',
//         adrIzvD: '',
//         konfModbus: '',
//         KMBUSLNK: '',
//         btnsID: '',
//         prev: '',
//         cur:'',
//         next: '',
//         pos: '',
//         lastPos:''

//     };

// if(document.querySelector('div#lineLoopKonf'))
// {

//     lineLoopConf.addEventListener('mouseover',()=>{
//         setTShS(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//     });
// }

let shleifCount = [];
let izvAdrNetCount = [];
let izvAdrDaCount = [];
let izvBezAdrCount = [];
let modbusCount = [];




// sbtForm2.addEventListener('click', (e)=>{
//     e.preventDefault();
//     if(AutoSignalizatsiya.KShS && isThereFalse(autoInputCount)){
//             // if(isThereFalse(autoInputCount))
//             //     console.log(false)
//             //alert('Сконфигурировано!');
//             lineLoopBtns.style.display = 'block';
//             lineLoops.length = AutoSignalizatsiya.KShS;
//             for (let i = 0; i < lineLoops.length; i++) {
//                 lineLoops[i] = AutoSignalizatsiya.KonfShleifa;
//                 shleifCount[`KIZVShS${i}`] = false;
//             }
//             createlineLoop(AutoSignalizatsiya.KShS);
//             let lastSpan = document.getElementById('lastPos'),
//                 lineLoopPos = document.getElementById('lineLoopPos');

//             lastSpan.innerHTML = 'из ' + lineLoops.length;
//             lineLoopPos.min = 1;
//             lineLoopPos.max = lineLoops.length;
//             lineLoopPos.value = 1;
//             curPos = 1;
//             prevIndex = lineLoops.length;
//             nextIndex = curPos + 1;
            
//             if(lineLoops.length){
//                 for (let i = 0; i < lineLoops.length; i++) {
//                     for (let j = 0; j < 28; j++) {
//                         dynamicEventHandlers[i] = [];
//                     }
//                 }
//              }

//             setDynHandlers(dynamicEventHandlers, lineLoops.length);
            
//             showLineLoops(lineLoops.length, 1);
//             hideAutoObnar();
//             if(lineLoops.length){
//                 for (let i = 0; i < lineLoops.length; i++) {                
//                  //   lineLoopsData[i] = AutoSignalizatsiya.KonfShleifa;
//                  lineLoopsData[i] = Object.assign({}, AutoSignalizatsiya.KonfShleifa);
//                     dynamicEventHandlers[i][5].style.display = 'none';
//                 }
//              } 
//              //shleifCount['TShS'] = true; shleifCount['TShSBIZ'] = false;
//              //SKhShS
//             //  izvBezAdrCount['TIZVauto'] = false;
//             //  izvBezAdrCount['IOIZV'] = false;
//             //  shleifCount['KMBUSLNK'] = false; shleifCount['TShSBIZ'] = true;
//                 lineLoopConf = document.getElementById('lineLoopKonf');
//                 setTShS(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//                 setSKhShS(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//                 setExShS(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//                 setTShSBIZ(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//                 setAdrBiz(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//                 setKIZVShS(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//                 setZonaShS(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//                 setAdrShS(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//                 setRRIShS(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//                 //setTAIZVadrNet(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//                 //setZonaIzvadrNet(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//                 //setAdrIZVadrNet(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//                 //setTAIZVadrDa(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//                 setZonaIzvadrDa(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//                 setAdrIZVadrDa(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//                 setTIZVauto(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//                 setIOIZV(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//                 setiIPIZV(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//                 setKMBUSLNK(dynamicEventHandlers, lineLoops.length, lineLoopsData);          
//                 setDlsSbt(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//         }
//     else
//         alert('Конфигурация не завершена! Пропущены данные.');
// });



//iZONAShS1
// iZONAShS1.onkeypress = (e)=>{
//     e = e || event;
//    if (e.ctrlKey || e.altKey || e.metaKey) return;
//    var chr = getChar(e);
//    console.log("Char pressed: " + chr);
//    if(chr == ',' || chr == '.')
//    {   
//        // iKShS.value.replace(/[\,|\.]+/g,'');
//        e.preventDefault();
//        return;
//    }
//    if(chr == null) return;

//    if (chr < '0' || chr > '9') {
//        return false;
//    }
// };

// iZONAShS1.addEventListener('focus', ()=>{
//     iZONAShS1.style.boxShadow = 'none';
// });

// iZONAShS1.addEventListener('blur', ()=>{
//     if(iZONAShS1.value.search(regEx) == -1){
//     if(parseInt(iZONAShS1.value, 10) >= 1 && parseInt(iZONAShS1.value, 10) <= 255){
//         AutoSignalizatsiya.KonfShleifa.ZONAShS = parseInt(iZONAShS1.value, 10);
//         iZONAShS1.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//         console.log(AutoSignalizatsiya.KonfShleifa.ZONAShS);
//     }
//     else if(iZONAShS1.value == ""){
//         return;
//     }
//     else
//         {
//             iZONAShS1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//         }
//     }
//     else
//         iZONAShS1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

//iADRShS1
// iADRShS1.addEventListener('focus', ()=>{
//     iADRShS1.style.boxShadow = 'none';
// });

// iADRShS1.addEventListener('blur', ()=>{
//     if(iADRShS1.value == ""){ 
//         iADRShS1.style.boxShadow = 'none';
//         return;
//     }
//     else if(iADRShS1.value.length <= 20){
//         AutoSignalizatsiya.KonfShleifa.ADRShS = iADRShS1.value;
//         iADRShS1.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//         console.log(AutoSignalizatsiya.KonfShleifa.ADRShS + " L: " + AutoSignalizatsiya.KonfShleifa.ADRShS.length);
//     }
//     else
//         iADRShS1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

//Обработка полей КИЗВШС
// iKIZVShS1.onkeypress = (e)=>{
//     e = e || event;
//    if (e.ctrlKey || e.altKey || e.metaKey) return;
//    var chr = getChar(e);
//    console.log("Char pressed: " + chr);
//    if(chr == ',' || chr == '.')
//    {   
//        // iKShS.value.replace(/[\,|\.]+/g,'');
//        e.preventDefault();
//        return;
//    }
//    if(chr == null) return;

//    if (chr < '0' || chr > '9') {
//        return false;
//    }
// };

//     iKIZVShS1.addEventListener('focus', ()=>{
//         iKIZVShS1.style.boxShadow = 'none';
//     });

//     iKIZVShS1.addEventListener('blur', ()=>{
//         if(iKIZVShS1.value.search(regEx) == -1){
//         if(parseInt(iKIZVShS1.value, 10) >= 1 && parseInt(iKIZVShS1.value, 10) <= 32){
//             AutoSignalizatsiya.KonfShleifa.KIZVShS = parseInt(iKIZVShS1.value, 10);
//             iKIZVShS1.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//             console.log(AutoSignalizatsiya.KonfShleifa.KIZVShS);
//         }
//         else if(iKIZVShS1.value == ""){
//             return;
//         }
//         else
//             {
//                 iKIZVShS1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//             }
//         }
//         else
//             iKIZVShS1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//     });

//iRRIShS1
    // iRRIShS1.addEventListener('click', ()=>{
    //     if(iRRIShS1.checked)
    //     { 
    //         AutoSignalizatsiya.KonfShleifa.RRIShS = true;
    //             createOption(iTAIZV1, "ИАР");
    //             createOption(iTAIZV1_1, "ИАР-01");
    //     }
    //     else  {
    //         AutoSignalizatsiya.KonfShleifa.RRIShS = false;

    //             iTAIZV1.removeChild(iTAIZV1.lastChild);
    //             iTAIZV1_1.removeChild(iTAIZV1_1.lastChild);
    //     }
    // });
    
//Обработка конф ТШС="Адр" ЕхШС ="нет"
//ТАИЗВ
// iTAIZV1.onchange = ()=>{
//     AutoSignalizatsiya.AdrExNet.TAIZV = iTAIZV1.selectedIndex;
//     console.log( AutoSignalizatsiya.AdrExNet.TAIZV);
// };

//ZonaIzv
// iZONAIZV1.onkeypress = (e)=>{
//     e = e || event;
//    if (e.ctrlKey || e.altKey || e.metaKey) return;
//    var chr = getChar(e);
//    console.log("Char pressed: " + chr);
//    if(chr == ',' || chr == '.')
//    {   
//        // iKShS.value.replace(/[\,|\.]+/g,'');
//        e.preventDefault();
//        return;
//    }
//    if(chr == null) return;

//    if (chr < '0' || chr > '9') {
//        return false;
//    }
// };

// iZONAIZV1.addEventListener('focus', ()=>{
//     iZONAIZV1.style.boxShadow = 'none';
// });

// iZONAIZV1.addEventListener('blur', ()=>{
//     if(iZONAIZV1.value.search(regEx) == -1){
//     if(parseInt(iZONAIZV1.value, 10) >= 1 && parseInt(iZONAIZV1.value, 10) <= 255){
//         AutoSignalizatsiya.AdrExNet.ZONAIZV = parseInt(iZONAIZV1.value, 10);
//         iZONAIZV1.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//         console.log(  AutoSignalizatsiya.AdrExNet.ZONAIZV);
//     }
//     else if(iZONAIZV1.value == ""){
//         return;
//     }
//     else
//         {
//             iZONAIZV1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//         }
//     }
//     else
//         iZONAIZV1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });


// ADRIZV 
// iADRIZV1.addEventListener('focus', ()=>{
//     iADRIZV1.style.boxShadow = 'none';
// });

// iADRIZV1.addEventListener('blur', ()=>{
//     if(iADRIZV1.value == ""){ 
//         iADRIZV1.style.boxShadow = 'none';
//         return;
//     }
//     else if(iADRIZV1.value.length <= 20){
//         AutoSignalizatsiya.AdrExNet.ADRIZV = iADRIZV1.value;
//         iADRIZV1.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//         console.log(AutoSignalizatsiya.AdrExNet.ADRIZV + " L: " + AutoSignalizatsiya.AdrExNet.ADRIZV.length);
//     }
//     else
//         iADRIZV1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

// //Обработка конф ТШС="Адр" ЕхШС ="да"
// //ТАИЗВ
// iTAIZV1_1.onchange = ()=>{
//     AutoSignalizatsiya.AdrExDa.TAIZV = iTAIZV1_1.selectedIndex;
//     console.log( AutoSignalizatsiya.AdrExDa.TAIZV);
// };

// //ZonaIzv
// iZONAIZV1_1.onkeypress = (e)=>{
//     e = e || event;
//    if (e.ctrlKey || e.altKey || e.metaKey) return;
//    var chr = getChar(e);
//    console.log("Char pressed: " + chr);
//    if(chr == ',' || chr == '.')
//    {   
//        // iKShS.value.replace(/[\,|\.]+/g,'');
//        e.preventDefault();
//        return;
//    }
//    if(chr == null) return;

//    if (chr < '0' || chr > '9') {
//        return false;
//    }
// };

// iZONAIZV1_1.addEventListener('focus', ()=>{
//     iZONAIZV1_1.style.boxShadow = 'none';
// });

// iZONAIZV1_1.addEventListener('blur', ()=>{
//     if(iZONAIZV1_1.value.search(regEx) == -1){
//     if(parseInt(iZONAIZV1_1.value, 10) >= 1 && parseInt(iZONAIZV1_1.value, 10) <= 255){
//         AutoSignalizatsiya.AdrExDa.ZONAIZV = parseInt(iZONAIZV1_1.value, 10);
//         iZONAIZV1_1.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//         console.log(  AutoSignalizatsiya.AdrExDa.ZONAIZV);
//     }
//     else if(iZONAIZV1_1.value == ""){
//         return;
//     }
//     else
//         {
//             iZONAIZV1_1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//         }
//     }
//     else
//         iZONAIZV1_1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

// // ADRIZV 
// iADRIZV1_1.addEventListener('focus', ()=>{
//     iADRIZV1_1.style.boxShadow = 'none';
// });

// iADRIZV1_1.addEventListener('blur', ()=>{
//     if(iADRIZV1_1.value == ""){ 
//         iADRIZV1_1.style.boxShadow = 'none';
//         return;
//     }
//     else if(iADRIZV1_1.value.length <= 20){
//         AutoSignalizatsiya.AdrExDa.ADRIZV = iADRIZV1_1.value;
//         iADRIZV1_1.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//         console.log(AutoSignalizatsiya.AdrExDa.ADRIZV + " L: " + AutoSignalizatsiya.AdrExDa.ADRIZV.length);
//     }
//     else
//         iADRIZV1_1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

// const regExBroken = /\d*(\.|\,)?\d+?/g;
// //Обработка конф ТШС="безадресный" 
// //TIZV
// let enteredVals = []; // Введнные пользователем значения
// const enteredItems = document.getElementById('enteredItems');

// iTIZV1.addEventListener('focus', ()=>{
//     iTIZV1.style.boxShadow = 'none';
// });

// iTIZV1.addEventListener('blur', ()=>{
//     if(iTIZV1.value == ""){ 
//         iTIZV1.style.boxShadow = 'none';
//         return;
//     }
//     else if(iTIZV1.value.length <= 20){
//         AutoSignalizatsiya.KonfIzvBezAdr.TIZV = iTIZV1.value;
//         //добавляем введённую инфу в массив
//         if(enteredVals.indexOf(iTIZV1.value) == -1){ 
//             enteredVals.push(iTIZV1.value);
//             let addToList = new addInfoToList(enteredVals);
//             addToList.addItems(enteredItems);
//         }
//         iTIZV1.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//         console.log(AutoSignalizatsiya.KonfIzvBezAdr.TIZV + " L: " + AutoSignalizatsiya.KonfIzvBezAdr.TIZV.length);
//     }
//     else
//         iTIZV1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

// //IOIZV
// iIOIZV1.onkeypress = (e)=>{
//     e = e || event;
//    if (e.ctrlKey || e.altKey || e.metaKey) return;
//    var chr = getChar(e);
//    console.log("Char pressed: " + chr);
//    if(chr == ',' || chr == '.')
//    {   
//        let count = 0, pos = -1;
//        if(chr == ',' || chr == '.'){
//             if(iIOIZV1.value.indexOf('.') == -1)
//             {
//                 while((pos = iIOIZV1.value.indexOf(',', pos + 1 )) != -1){
//                     count++;
//                 }
//                 if(count >= 1) {e.preventDefault(); count = 0; return;}
//                 else { count = 0;  }
//             }
//             else
//             {
//                 while((pos = iIOIZV1.value.indexOf('.', pos + 1 )) != -1){
//                     count++;
//                 }
//                 if(count >= 1) {e.preventDefault(); count = 0; return;}
//                 else  { count = 0;  }   
//             }
//        }

//        return;
//    }
//    if(chr == null) return;

//    if (chr < '0' || chr > '9') {
//        return false;
//    }
// };

// iIOIZV1.addEventListener('focus', ()=>{
//     iIOIZV1.style.boxShadow = 'none';
// });

// iIOIZV1.addEventListener('blur', ()=>{
//     if(iIOIZV1.value.indexOf(',')== -1 && iIOIZV1.value.indexOf('.')== -1)
//         iIOIZV1.value += ',0';
//     if(iIOIZV1.value[iIOIZV1.value.length - 1] == '.' || iIOIZV1.value[iIOIZV1.value.length - 1] == ',')
//         iIOIZV1.value += '0';

//     if(iIOIZV1.value.search(regExBroken) != -1){
    
//         if(iIOIZV1.value.indexOf(',')!= -1) iIOIZV1.value = iIOIZV1.value.replace(/\,/, '.');

//     if(parseFloat(iIOIZV1.value) >= 0 && parseFloat(iIOIZV1.value) <= 32){
//         AutoSignalizatsiya.KonfIzvBezAdr.IOIZV = parseFloat(iIOIZV1.value);
//         iIOIZV1.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//         console.log(  AutoSignalizatsiya.KonfIzvBezAdr.IOIZV);
//     }
//     else if(iIOIZV1.value == ""){
//         return;
//     }
//     else
//         {
//             iIOIZV1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//         }
//     }
//     else
//         iIOIZV1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

// //iIPIZV1
// iIPIZV1.onkeypress = (e)=>{
//     e = e || event;
//    if (e.ctrlKey || e.altKey || e.metaKey) return;
//    var chr = getChar(e);
//    console.log("Char pressed: " + chr);
//    if(chr == ',' || chr == '.')
//    {   
//        let count = 0, pos = -1;
//        if(chr == ',' || chr == '.'){
//             if(iIPIZV1.value.indexOf('.') == -1)
//             {
//                 while((pos = iIPIZV1.value.indexOf(',', pos + 1 )) != -1){
//                     count++;
//                 }
//                 if(count >= 1) {e.preventDefault(); count = 0; return;}
//                 else { count = 0;  }
//             }
//             else
//             {
//                 while((pos = iIPIZV1.value.indexOf('.', pos + 1 )) != -1){
//                     count++;
//                 }
//                 if(count >= 1) {e.preventDefault(); count = 0; return;}
//                 else  { count = 0;  }   
//             }
//        }

//        return;
//    }
//    if(chr == null) return;

//    if (chr < '0' || chr > '9') {
//        return false;
//    }
// };

// iIPIZV1.addEventListener('focus', ()=>{
//     iIPIZV1.style.boxShadow = 'none';
// });

// iIPIZV1.addEventListener('blur', ()=>{
//     if(iIPIZV1.value.indexOf(',')== -1 && iIPIZV1.value.indexOf('.')== -1)
//         iIPIZV1.value += ',0';
//     if(iIPIZV1.value[iIPIZV1.value.length - 1] == '.' || iIPIZV1.value[iIPIZV1.value.length - 1] == ',')
//         iIPIZV1.value += '0';
//     if(iIPIZV1.value.search(regExBroken) != -1){
    
//         if(iIPIZV1.value.indexOf(',')!= -1) iIPIZV1.value = iIPIZV1.value.replace(/\,/, '.');

//     if(parseFloat(iIPIZV1.value) >= 0 && parseFloat(iIPIZV1.value) <= 32){
//         AutoSignalizatsiya.KonfIzvBezAdr.IPIZV = parseFloat(iIPIZV1.value);
//         iIPIZV1.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//         console.log(  AutoSignalizatsiya.KonfIzvBezAdr.IPIZV);
//     }
//     else if(iIPIZV1.value == ""){
//         return;
//     }
//     else
//         {
//             iIPIZV1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//         }
//     }
//     else
//         iIPIZV1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

// //Обработка конф ТШС="Modbus" 
// //iKMBUSLNK1
// iKMBUSLNK1.onkeypress = (e)=>{
//     e = e || event;
//    if (e.ctrlKey || e.altKey || e.metaKey) return;
//    var chr = getChar(e);
//    console.log("Char pressed: " + chr);
//    if(chr == ',' || chr == '.')
//    {   
//        // iKShS.value.replace(/[\,|\.]+/g,'');
//        e.preventDefault();
//        return;
//    }
//    if(chr == null) return;

//    if (chr < '0' || chr > '9') {
//        return false;
//    }
// };

// iKMBUSLNK1.addEventListener('focus', ()=>{
//     iKMBUSLNK1.style.boxShadow = 'none';
// });

// iKMBUSLNK1.addEventListener('blur', ()=>{
//     if(iKMBUSLNK1.value.search(regEx) == -1){
//     if(parseInt(iKMBUSLNK1.value, 10) >= 0 && parseInt(iKMBUSLNK1.value, 10) <= 20){
//         AutoSignalizatsiya.KonfModbus.KMBUSLNK = parseInt(iKMBUSLNK1.value, 10);
//         iKMBUSLNK1.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//         console.log("KMBUSLNK: "+ AutoSignalizatsiya.KonfModbus.KMBUSLNK);
//     }
//     else if(iKMBUSLNK1.value == ""){
//         return;
//     }
//     else
//         {
//             iKMBUSLNK1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//         }
//     }
//     else
//         iKMBUSLNK1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

//Обработка кнпки
        // dlg2Sbt.addEventListener('click', (e)=>{
        //     e.preventDefault();
        //     if(AutoSignalizatsiya.KShS >= 0 &&
        //      AutoSignalizatsiya.KMIShS >= 0 &&  
        //      AutoSignalizatsiya.REZShS >= 0 && 
        //      AutoSignalizatsiya.KonfShleifa.KIZVShS >= 1){

        //         if(AutoSignalizatsiya.KonfShleifa.TShS == 0){
        //             if(AutoSignalizatsiya.KonfShleifa.ExShS == false){
        //                 if( AutoSignalizatsiya.AdrExNet.TAIZV >= 0 &&
        //                     AutoSignalizatsiya.AdrExNet.ZONAIZV &&
        //                     AutoSignalizatsiya.AdrExNet.ADRIZV){
        //                         //-------!!-------
        //                         //Закрыть текущ. диалог и открыть новый
        //                         //-------!!-------
        //                         console.log("Подсистема автом. обнаружения призн. пожара:\n"
        //                                     + "КШС: " + AutoSignalizatsiya.KShS
        //                                     + "\nКМИШС: " + AutoSignalizatsiya.KMIShS
        //                                     + "\nРЕЗШС: " + AutoSignalizatsiya.REZShS
        //                                     + "\nКонфигурация шлейфа: \n"
        //                                     + "\nТип шлейфа: "+
        //                                     + AutoSignalizatsiya.KonfShleifa.TShS
        //                                     + "\nВзрывозащита: "
        //                                     + AutoSignalizatsiya.KonfShleifa.ExShS
        //                                     + "\nКоличество извещателей: "
        //                                     + AutoSignalizatsiya.KonfShleifa.KIZVShS
        //                                     + "\nРРИШС: "
        //                                     + AutoSignalizatsiya.KonfShleifa.RRIShS
        //                                     + "\nТШС = \"Адресный\" при ЕхШС = \"Нет\""
        //                                     + "\nТАИЗВ: "
        //                                     + AutoSignalizatsiya.AdrExNet.TAIZV
        //                                     + "\nЗона: "
        //                                     + AutoSignalizatsiya.AdrExNet.ZONAIZV
        //                                     + "\nНаименование \\ адрес: "
        //                                     + AutoSignalizatsiya.AdrExNet.ADRIZV);
        //                         dialog2.close(); 
        //                         dialog3.showModal();
        //                     }
        //                     else
        //                         alert("Не все данные введены...");
        //             }
        //             else{
        //                 if( AutoSignalizatsiya.AdrExDa.TAIZV >= 0 &&
        //                     AutoSignalizatsiya.AdrExDa.ZONAIZV  &&
        //                     AutoSignalizatsiya.AdrExDa.ADRIZV &&
        //                     AutoSignalizatsiya.KonfShleifa.TShSBIZ != ""){
        //                         //-------!!-------
        //                         //Закрыть текущ. диалог и открыть новый
        //                         //-------!!-------
        //                         console.log("Подсистема автом. обнаружения призн. пожара:\n"
        //                         + "КШС: " + AutoSignalizatsiya.KShS
        //                         + "\nКМИШС: " + AutoSignalizatsiya.KMIShS
        //                         + "\nРЕЗШС: " + AutoSignalizatsiya.REZShS
        //                         + "\nКонфигурация шлейфа: \n"
        //                         + "\nТип шлейфа: "+
        //                         + AutoSignalizatsiya.KonfShleifa.TShS
        //                         + "\nВзрывозащита: "
        //                         + AutoSignalizatsiya.KonfShleifa.ExShS
        //                         + "\nТШСБИЗ: "
        //                         + AutoSignalizatsiya.KonfShleifa.TShSBIZ
        //                         + "\nКоличество извещателей: "
        //                         + AutoSignalizatsiya.KonfShleifa.KIZVShS
        //                         + "\nРРИШС: "
        //                         + AutoSignalizatsiya.KonfShleifa.RRIShS
        //                         + "\nТШС = \"Адресный\" при ЕхШС = \"Да\""
        //                         + "\nТАИЗВ: "
        //                         + AutoSignalizatsiya.AdrExDa.TAIZV
        //                         + "\nЗона: "
        //                         + AutoSignalizatsiya.AdrExDa.ZONAIZV
        //                         + "\nНаименование \\ адрес: "
        //                         + AutoSignalizatsiya.AdrExDa.ADRIZV);
        //                         dialog2.close(); 
        //                         dialog3.showModal();
        //                     }
        //                     else
        //                         alert("Не все данные введены...");
        //             }
        //         }
        //         else if(AutoSignalizatsiya.KonfShleifa.TShS == 1){
        //             if( AutoSignalizatsiya.KonfShleifa.ZONAShS &&
        //                 AutoSignalizatsiya.KonfShleifa.ADRShS && 
        //                 AutoSignalizatsiya.KonfIzvBezAdr.TIZV &&
        //                 AutoSignalizatsiya.KonfIzvBezAdr.IOIZV >= 0 &&
        //                 AutoSignalizatsiya.KonfIzvBezAdr.IPIZV >= 0){
        //                         //-------!!-------
        //                         //Закрыть текущ. диалог и открыть новый
        //                         //-------!!-------
        //                         if(AutoSignalizatsiya.KonfShleifa.ExShS == true &&
        //                             AutoSignalizatsiya.KonfShleifa.TShSBIZ != ""){
        //                                 console.log("Подсистема автом. обнаружения призн. пожара:\n"
        //                                 + "КШС: " + AutoSignalizatsiya.KShS
        //                                 + "\nКМИШС: " + AutoSignalizatsiya.KMIShS
        //                                 + "\nРЕЗШС: " + AutoSignalizatsiya.REZShS
        //                                 + "\nКонфигурация шлейфа: \n"
        //                                 + "\nТип шлейфа: "+
        //                                 + AutoSignalizatsiya.KonfShleifa.TShS
        //                                 + "\nСХШС: "
        //                                 + AutoSignalizatsiya.KonfShleifa.SHShS
        //                                 + "\nВзрывозащита: "
        //                                 + AutoSignalizatsiya.KonfShleifa.ExShS
        //                                 + "\nТШСБИЗ: "
        //                                 + AutoSignalizatsiya.KonfShleifa.TShSBIZ
        //                                 + "\nКоличество извещателей: "
        //                                 + AutoSignalizatsiya.KonfShleifa.KIZVShS
        //                                 + "\nРРИШС: "
        //                                 + AutoSignalizatsiya.KonfShleifa.RRIShS
        //                                 + "\nТИЗВ: "
        //                                 + AutoSignalizatsiya.KonfIzvBezAdr.TIZV
        //                                 + "\nІОИЗВ: "
        //                                 + AutoSignalizatsiya.KonfIzvBezAdr.IOIZV
        //                                 + "\nІПИЗВ: "
        //                                 + AutoSignalizatsiya.KonfIzvBezAdr.IPIZV);
        //                                 dialog2.close(); 
        //                                 dialog3.showModal();
        //                             }
        //                             else{
        //                                 console.log("Подсистема автом. обнаружения призн. пожара:\n"
        //                                 + "КШС: " + AutoSignalizatsiya.KShS
        //                                 + "\nКМИШС: " + AutoSignalizatsiya.KMIShS
        //                                 + "\nРЕЗШС: " + AutoSignalizatsiya.REZShS
        //                                 + "\nКонфигурация шлейфа: \n"
        //                                 + "\nТип шлейфа: "+
        //                                 + AutoSignalizatsiya.KonfShleifa.TShS
        //                                 + "\nСХШС: "
        //                                 + AutoSignalizatsiya.KonfShleifa.SHShS
        //                                 + "\nВзрывозащита: "
        //                                 + AutoSignalizatsiya.KonfShleifa.ExShS
        //                                 + "\nКоличество извещателей: "
        //                                 + AutoSignalizatsiya.KonfShleifa.KIZVShS
        //                                 + "\nРРИШС: "
        //                                 + AutoSignalizatsiya.KonfShleifa.RRIShS
        //                                 + "\nТИЗВ: "
        //                                 + AutoSignalizatsiya.KonfIzvBezAdr.TIZV
        //                                 + "\nІОИЗВ: "
        //                                 + AutoSignalizatsiya.KonfIzvBezAdr.IOIZV
        //                                 + "\nІПИЗВ: "
        //                                 + AutoSignalizatsiya.KonfIzvBezAdr.IPIZV);
        //                                 dialog2.close(); 
        //                                 dialog3.showModal();
        //                             }
                                
        //                 }
        //                 else
        //                     alert("Не все данные введены...");
        //         }
        //         else{
        //             if(AutoSignalizatsiya.KonfModbus.KMBUSLNK >= 0)
        //                 {
        //                         //-------!!-------
        //                         //Закрыть текущ. диалог и открыть новый
        //                         //-------!!-------
        //                         if(AutoSignalizatsiya.KonfShleifa.ExShS == true &&
        //                             AutoSignalizatsiya.KonfShleifa.TShSBIZ != ""){
        //                                 console.log("Подсистема автом. обнаружения призн. пожара:\n"
        //                                 + "КШС: " + AutoSignalizatsiya.KShS
        //                                 + "\nКМИШС: " + AutoSignalizatsiya.KMIShS
        //                                 + "\nРЕЗШС: " + AutoSignalizatsiya.REZShS
        //                                 + "\nКонфигурация шлейфа: \n"
        //                                 + "\nТип шлейфа: "+
        //                                 + AutoSignalizatsiya.KonfShleifa.TShS
        //                                 + "\nВзрывозащита: "
        //                                 + AutoSignalizatsiya.KonfShleifa.ExShS
        //                                 + "\nТШСБИЗ: "
        //                                 + AutoSignalizatsiya.KonfShleifa.TShSBIZ
        //                                 + "\nКоличество извещателей: "
        //                                 + AutoSignalizatsiya.KonfShleifa.KIZVShS
        //                                 + "\nРРИШС: "
        //                                 + AutoSignalizatsiya.KonfShleifa.RRIShS
        //                                 + "\nKMSBUSLNK: "
        //                                 + AutoSignalizatsiya.KonfModbus.KMBUSLNK);
        //                                 dialog2.close(); 
        //                                 dialog3.showModal();
        //                             }
        //                             else{
        //                                 console.log("Подсистема автом. обнаружения призн. пожара:\n"
        //                                 + "КШС: " + AutoSignalizatsiya.KShS
        //                                 + "\nКМИШС: " + AutoSignalizatsiya.KMIShS
        //                                 + "\nРЕЗШС: " + AutoSignalizatsiya.REZShS
        //                                 + "\nКонфигурация шлейфа: \n"
        //                                 + "\nТип шлейфа: "+
        //                                 + AutoSignalizatsiya.KonfShleifa.TShS
        //                                 + "\nВзрывозащита: "
        //                                 + AutoSignalizatsiya.KonfShleifa.ExShS
        //                                 + "\nКоличество извещателей: "
        //                                 + AutoSignalizatsiya.KonfShleifa.KIZVShS
        //                                 + "\nРРИШС: "
        //                                 + AutoSignalizatsiya.KonfShleifa.RRIShS
        //                                 + "\nKMSBUSLNK: "
        //                                 + AutoSignalizatsiya.KonfModbus.KMBUSLNK);
        //                                 dialog2.close(); 
        //                                 dialog3.showModal();
        //                             }
        //                 }
        //             else
        //                 alert("Не все данные введены...");
        //         }
        //     }
        //     else
        //         alert("Не все данные введены...");
        // });


//------------------------------------------------Ручная сигнализация------------------------------------------------
document.querySelector('div#ruchSysConfiguration').style.display = 'none';
document.querySelector('div#KMIShSR_open').style.display = 'none';
document.querySelector('div#lineLoopBtnsRuchn').style.display = 'none';



 const iKShSR2 = document.getElementById('iKShSR'),
 iMIShSR2 = document.getElementById('MIShSR'),
 KMIShSR_open = document.getElementById('KMIShSR_open'),
 iKMIShSR2 = document.getElementById('iKMIShSR'),
 iREZShSR2 = document.getElementById('iREZShSR'),
 sbtForm3 = document.getElementById('sbtForm3');
// iTShS2 = document.getElementById('iTShS2'),
// iExShS2 = document.getElementById('iExShS2'),
// TypeBIZ2 = document.getElementById('TypeBIZ2'),
// rtBiz = document.getElementById('rtBiz');   
// TypeBIZ2.style.display = 'none';
// iTShSBIZ.style.display = 'none';
let lineLoopsRuchn = [];
// //const iTShSBIZ2 = document.getElementById('iTShSBIZ2');

// RutshnayaSignalizatsiya.KonfShleifa.TShS = 0;
// RutshnayaSignalizatsiya.AdrExNet.TAIZV = 0;
// RutshnayaSignalizatsiya.AdrExDa.TAIZV = 0;
           
// if(AutoSignalizatsiya.KonfShleifa.ExShS == true)
//     AdrExDa2.style.display = 'block';
// else
//     AdrExNet2.style.display = 'block';

let pressedBtnsRuchnCount = [];
pressedBtnsRuchnCount['KShSR'] = false;
pressedBtnsRuchnCount['REZShSR'] = false;

// //KShSR

iKShSR2.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

iKShSR2.addEventListener('focus', ()=>{
    iKShSR2.style.boxShadow = 'none';
});

iKShSR2.addEventListener('blur', ()=>{
   if(iKShSR2.value.search(regEx) == -1){
   if(parseInt(iKShSR2.value, 10) >= 1 && parseInt(iKShSR2.value, 10) <= 640){
       RutshnayaSignalizatsiya.KShSR = parseInt(iKShSR2.value, 10);
       pressedBtnsRuchnCount['KShSR'] = true;
       iKShSR2.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       console.log("Ручная сигнализация " + RutshnayaSignalizatsiya.KShSR);
   }
   else if(iKShSR2.value == ""){
       RutshnayaSignalizatsiya.KonfShleifa.KIZVShS = 0;
       pressedBtnsRuchnCount['KShSR'] = false;
       console.log("Ручная сигнализация " + RutshnayaSignalizatsiya.KShSR);
       return;
   }
   else
       {
        iKShSR2.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
    iKShSR2.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
});

// //MIShSR

iMIShSR2.addEventListener('click', ()=>{
    if(iMIShSR2.checked)
    { 
        RutshnayaSignalizatsiya.MIShSR = true;
        pressedBtnsRuchnCount['KMIShSR'] = false;
        KMIShSR_open.style.display = 'block';
    }
    else  
    {
        RutshnayaSignalizatsiya.MIShSR = false;
        pressedBtnsRuchnCount['KMIShSR'] = true;
        KMIShSR_open.style.display = 'none';
        RutshnayaSignalizatsiya.KMIShSR = 0;
    }
});

// //KMIShSR

iKMIShSR2.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

iKMIShSR2.addEventListener('focus', ()=>{
    iKMIShSR2.style.boxShadow = 'none';
});

iKMIShSR2.addEventListener('blur', ()=>{
   if(iKMIShSR2.value.search(regEx) == -1){
   if(parseInt(iKMIShSR2.value, 10) >= 0 && parseInt(iKMIShSR2.value, 10) <= 32){
       RutshnayaSignalizatsiya.KMIShSR = parseInt(iKMIShSR2.value, 10);
       pressedBtnsRuchnCount['KMIShSR'] = true;
       iKMIShSR2.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       console.log("КМИШСР: " + RutshnayaSignalizatsiya.KMIShSR);
   }
   else if(iKMIShSR2.value == ""){
       pressedBtnsRuchnCount['KMIShSR'] = false;
       RutshnayaSignalizatsiya.KMIShSR = 0;
       return;
   }
   else
       {
            iKMIShSR2.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
     iKMIShSR2.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
});

// //REZShSR

iREZShSR2.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

iREZShSR2.addEventListener('focus', ()=>{
    iREZShSR2.style.boxShadow = 'none';
});

iREZShSR2.addEventListener('blur', ()=>{
    if(iREZShSR2.value.search(regEx) == -1){
    if(parseInt(iREZShSR2.value, 10) >= 0 && parseInt(iREZShSR2.value, 10) <= 100){
        RutshnayaSignalizatsiya.REZShSR = parseInt(iREZShSR2.value, 10);
        iREZShSR2.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
        pressedBtnsRuchnCount['REZShSR'] = true;
        console.log("РЕЗШСР: " + RutshnayaSignalizatsiya.REZShSR);
    }
    else if(iREZShSR2.value == ""){
        pressedBtnsRuchnCount['REZShSR'] = false;
        RutshnayaSignalizatsiya.REZShSR = 0;
        return;
    }
    else
        {
            iREZShSR2.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
        }
    }
    else
        iREZShSR2.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
});

// кнопка открывающая конфигурацию шлейфов

let dynamicEventHandlersRuchn = [],
    lineLoopsDataRuchn = [];

let pressedBtnsRuchnCount_sbt3 = [];



let pressedBtnsRuchnCount_bezAdr = [];

// pressedBtnsRuchnCount_bezAdr['TIZV'] = true;
// pressedBtnsRuchnCount_bezAdr['IOIZV'] = true;
// pressedBtnsRuchnCount_bezAdr['IPIZV'] = true;

// pressedBtnsRuchnCount_bezAdr['TIZV'] = false;
// pressedBtnsRuchnCount_bezAdr['IOIZV'] = false;
// pressedBtnsRuchnCount_bezAdr['IPIZV'] = false;

let pressedBtnsRuchnCount_adrExShSn = [];
let pressedBtnsRuchnCount_adrExShSd = [];
// pressedBtnsRuchnCount_adrExShS[`TAIZVd${i}-${j}`] = false;
// pressedBtnsRuchnCount_adrExShS[`ZONAIZVd${i}-${j}`] = false;
// pressedBtnsRuchnCount_adrExShS[`ADRIZVd${i}-${j}`] = false;

// pressedBtnsRuchnCount_adrExShS[`TAIZVn${i}-${j}`] = false;
// pressedBtnsRuchnCount_adrExShS[`ZONAIZVn${i}-${j}`] = false;
// pressedBtnsRuchnCount_adrExShS[`ADRIZVn${i}-${j}`] = false;

sbtForm3.addEventListener('click', (e)=>{
    e.preventDefault();
    if(RutshnayaSignalizatsiya.KShSR && isThereFalse(pressedBtnsRuchnCount)){
            //alert('Сконфигурировано!');
            console.log(izvAdrNetCount);
            console.log(izvAdrDaCount);
            console.log(shleifCount);
            // console.log(lineLoopsData);
            // console.log(_izveshateli);
            

            document.querySelector('div.lineLoopBtnsRuchn').style.display = 'block';
            //lineLoopBtns.style.display = 'block';
            lineLoopsRuchn.length = RutshnayaSignalizatsiya.KShSR;

            for (let i = 0; i < lineLoopsRuchn.length; i++) {
                lineLoopsRuchn[i] = RutshnayaSignalizatsiya.KonfShleifa;
                
                pressedBtnsRuchnCount_sbt3[`KIZVShSR${i}`] = false;
                // pressedBtnsRuchnCount_sbt3[`ZonaShSR${i}`] = false;
                // pressedBtnsRuchnCount_sbt3[`AdrShSR${i}`] = false;
                
            }
            createlineLoopRuchn(RutshnayaSignalizatsiya.KShSR);
            let lastSpanRuchn = document.getElementById('lastPosRuchn'),
                lineLoopPosRuchn = document.getElementById('lineLoopPosRuchn');

            lastSpanRuchn.innerHTML = 'из ' + lineLoopsRuchn.length;
            lineLoopPosRuchn.min = 1;
            lineLoopPosRuchn.max = lineLoopsRuchn.length;
            lineLoopPosRuchn.value = 1;
            curPosRuchn = 1;
            prevIndexRuchn = lineLoopsRuchn.length;
            nextIndexRuchn = curPosRuchn + 1;
            
            if(lineLoopsRuchn.length){
                for (let i = 0; i < lineLoopsRuchn.length; i++) {
                    for (let j = 0; j < 28; j++) {
                        dynamicEventHandlersRuchn[i] = [];
                    }
                }
             }

            setDynHandlersRuchn(dynamicEventHandlersRuchn, lineLoopsRuchn.length);
            
            showLineLoopsRuchn(0 + '_' + 1);
            hideAutoObnarRuchn();
            if(lineLoopsRuchn.length){
                for (let i = 0; i < lineLoopsRuchn.length; i++) {                
                    lineLoopsDataRuchn[i] = Object.assign({}, RutshnayaSignalizatsiya.KonfShleifa);
                    //dynamicEventHandlersRuchn[i][5].style.display = 'none';
                    dynamicEventHandlersRuchn[i][7].style.display = 'none';
                }
             }

                //lineLoopConf = document.getElementById('lineLoopKonf');
                setTShSR(dynamicEventHandlersRuchn, lineLoopsRuchn.length, lineLoopsDataRuchn);
                setExShSR(dynamicEventHandlersRuchn, lineLoopsRuchn.length, lineLoopsDataRuchn);
                setTShSBIZR(dynamicEventHandlersRuchn, lineLoopsRuchn.length, lineLoopsDataRuchn);
                setAdrBizR(dynamicEventHandlersRuchn, lineLoopsRuchn.length, lineLoopsDataRuchn);
                setKIZVShSR(dynamicEventHandlersRuchn, lineLoopsRuchn.length, lineLoopsDataRuchn);
                setZonaShSR(dynamicEventHandlersRuchn, lineLoopsRuchn.length, lineLoopsDataRuchn);
                setAdrShSR(dynamicEventHandlersRuchn, lineLoopsRuchn.length, lineLoopsDataRuchn);
                
                //setTAIZVadrNet(dynamicEventHandlers, lineLoops.length, lineLoopsData);
                //setZonaIzvadrNet(dynamicEventHandlers, lineLoops.length, lineLoopsData);
                //setAdrIZVadrNet(dynamicEventHandlers, lineLoops.length, lineLoopsData);
                //setTAIZVadrDa(dynamicEventHandlers, lineLoops.length, lineLoopsData);
                // setZonaIzvadrDa(dynamicEventHandlers, lineLoops.length, lineLoopsData);
                // setAdrIZVadrDa(dynamicEventHandlers, lineLoops.length, lineLoopsData);
                setTIZVautoR(dynamicEventHandlersRuchn, lineLoopsRuchn.length, lineLoopsDataRuchn);
                setIOIZVR(dynamicEventHandlersRuchn, lineLoopsRuchn.length, lineLoopsDataRuchn);
                setiIPIZVR(dynamicEventHandlersRuchn, lineLoopsRuchn.length, lineLoopsDataRuchn);
                //setKMBUSLNK(dynamicEventHandlers, lineLoops.length, lineLoopsData);          
                setDlsSbt1(dynamicEventHandlersRuchn, lineLoopsRuchn.length, lineLoopsDataRuchn);
        }
    else
        alert('Конфигурация не завершена! Пропущены данные.');
});

// //Конфигурация шлейфа
let curPosIzvR = [], nextPosIzvR = [], prevPosIzvR = [], izvPositionR = [];
let izvBtnsIDR = [], izvLasPosR = [], izvLastSpanR = [], izvBtnsNextR = [], izvBtnsPrevR = [],
_izveshateliR = [], dynamicEvHandlerIZVR = [];
function setDlsSbt1(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][15].addEventListener('click', (e) => {
            e.preventDefault();
            if(dataToSave[i].KIZVShS >= 1){

                createIzvR(i,dataToSave[i].KIZVShS);

                for (let j = 0; j < dataToSave[i].KIZVShS; j++) {
                    curPosIzvR[i] = [];
                    nextPosIzvR[i] = [];
                    prevPosIzvR[i] = [];
                    
                    if(dataToSave[i].ExShS && dataToSave[i].TShS == 0){
                        // pressedBtnsRuchnCount_adrExShSd[`TAIZV${i}-${j}`] = false;
                        pressedBtnsRuchnCount_adrExShSd[`ZonaIzv${i}-${j}`] = false;
                        pressedBtnsRuchnCount_adrExShSd[`AdrIZV${i}-${j}`] = false;
                    }
                    else if(!dataToSave[i].ExShS && dataToSave[i].TShS == 0){
                        // pressedBtnsRuchnCount_adrExShSn[`TAIZV${i}-${j}`] = false;
                        pressedBtnsRuchnCount_adrExShSn[`ZonaIzv${i}-${j}`] = false;
                        pressedBtnsRuchnCount_adrExShSn[`AdrIZV${i}-${j}`] = false;
                    }
                }
                dynamicEvHandlerIZVR = genIzvHandlers(lineLoopsRuchn.length, 32, 10);
                _izveshateliR = genIzvHandlers(lineLoopsRuchn.length, 32, 7);

                izvBtnsIDR[i] = document.getElementById(`izvBtns1_${i}`);
                izvLasPosR[i] = document.getElementById(`izvBtnsPos1_${i}`);
                izvLastSpanR[i] = document.getElementById(`izvBtnslastPos1_${i}`);
                izvBtnsNextR[i] = document.getElementById(`izvBtnsNext1_${i}`);
                izvBtnsPrevR[i] = document.getElementById(`izvBtnsPrev1_${i}`);

                izvPositionR[curPosRuchn - 1] = 0;

                setHandlersIZVR(dynamicEvHandlerIZVR, i, dataToSave);

                for (let k = 0; k < dataToSave[i].KIZVShS; k++) {
                    console.log( dynamicEvHandlerIZVR);
                    
                }
                hideIzvR(dynamicEvHandlerIZVR, i, dataToSave);

                // dynamicEvHandlerIZV[i][0][12].min = 1;
                // dynamicEvHandlerIZV[i][0][12].max = dataToSave[i].KIZVShS;

                curPosIzvR[i][0] = 0;
                nextPosIzvR[i][0] = 1;
                prevPosIzvR[i][0] = dataToSave[i].KIZVShS - 1;
                izvLastSpanR[i].innerHTML = ' из ' + dataToSave[i].KIZVShS;
                izvLasPosR[i].value =  curPosIzvR[i][0] + 1;
                izvLasPosR[i].min = 1;
                izvLasPosR[i].max = dataToSave[i].KIZVShS;


                if(dataToSave[i].TShS == 0 && dataToSave[i].ExShS == false){
                    showIzvAdrExNet(dynamicEvHandlerIZVR, i, 0);
                }
                else if(dataToSave[i].TShS == 0 && dataToSave[i].ExShS == true){
                    showIzvAdrExDa(dynamicEvHandlerIZVR, i, 0);
                }

                handlePrevIzvR(i, dataToSave[curPosRuchn-1].KIZVShS, izvLasPosR, izvBtnsPrevR, dynamicEvHandlerIZVR,
                    dataToSave, curPosIzvR, nextPosIzvR, prevPosIzvR);
                handleNextIzvR(i, dataToSave[curPosRuchn-1].KIZVShS,  izvLasPosR, izvBtnsNextR, dynamicEvHandlerIZVR,
                    dataToSave, curPosIzvR, nextPosIzvR, prevPosIzvR);
                handleIzvPosR(i, dataToSave[curPosRuchn-1].KIZVShS, izvLasPosR,  dynamicEvHandlerIZVR, dataToSave,
                    curPosIzvR, nextPosIzvR, prevPosIzvR);

                setTAIZVadrNet(dynamicEvHandlerIZVR, lineLoopsRuchn.length, dataToSave[i].KIZVShS, _izveshateliR, pressedBtnsRuchnCount_adrExShSn);
                setZonaIzvadrNet(dynamicEvHandlerIZVR, lineLoopsRuchn.length, dataToSave[i].KIZVShS, _izveshateliR, pressedBtnsRuchnCount_adrExShSn);
                setAdrIZVadrNet(dynamicEvHandlerIZVR, lineLoopsRuchn.length, dataToSave[i].KIZVShS, _izveshateliR, pressedBtnsRuchnCount_adrExShSn);
                setTAIZVadrDa(dynamicEvHandlerIZVR, lineLoopsRuchn.length, dataToSave[i].KIZVShS, _izveshateliR), pressedBtnsRuchnCount_adrExShSd;
                setZonaIzvadrDa(dynamicEvHandlerIZVR, lineLoopsRuchn.length, dataToSave[i].KIZVShS, _izveshateliR, pressedBtnsRuchnCount_adrExShSd);
                setAdrIZVadrDa(dynamicEvHandlerIZVR, lineLoopsRuchn.length, dataToSave[i].KIZVShS, _izveshateliR, pressedBtnsRuchnCount_adrExShSd);
                //setKMBUSLNK(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli);
            }
            else{
                handlerArr[i][6].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
            }
        });   
    }
}
//Переключение между шлейфами
const lineLoopBtnsRuchn = document.getElementById('lineLoopBtnsRuchn'),
    lineLoopPrevRuchn = document.getElementById('lineLoopPrevRuchn'),
    lineLoopPosRuchn = document.getElementById('lineLoopPosRuchn'),
    lastPosRuchn = document.getElementById('lastPosRuchn'),
    lineLoopNextRuchn = document.getElementById('lineLoopNextRuchn');
    
let curPosRuchn, prevIndexRuchn, nextIndexRuchn;

    lineLoopPrevRuchn.addEventListener('click', ()=>{
        if(prevIndexRuchn < 1) prevIndexRuchn = lineLoopsRuchn.length;
        nextIndexRuchn = curPosRuchn;
        curPosRuchn = prevIndexRuchn;
        prevIndexRuchn--;
        if(prevIndexRuchn < 1) prevIndexRuchn = lineLoopsRuchn.length;
        lineLoopPosRuchn.value = curPosRuchn;
        hideLineLoopsR(lineLoopsRuchn.length);
        showLineLoopsRuchn((curPosRuchn - 1) + '_' + 1);
    

});

lineLoopNextRuchn.addEventListener('click', ()=>{
            if(nextIndexRuchn > lineLoopsRuchn.length ) nextIndexRuchn = 1;
            prevIndexRuchn = curPosRuchn;
            curPosRuchn = nextIndexRuchn;
            nextIndexRuchn++;
            if(nextIndexRuchn > lineLoopsRuchn.length) nextIndexRuchn = 1;
            lineLoopPosRuchn.value = curPosRuchn;
            hideLineLoopsR(lineLoopsRuchn.length);
            showLineLoopsRuchn((curPosRuchn - 1) + '_' + 1);

});


lineLoopPosRuchn.addEventListener('blur', ()=>{
    curPosRuchn = parseInt(lineLoopPosRuchn.value, 10);
    if(curPosRuchn + 1 > lineLoopsRuchn.length + 1){
        nextIndexRuchn = 1;
        prevIndexRuchn = curPosRuchn - 1;
    }
    else if(curPosRuchn - 1 < 1){
        prevIndexRuchn = lineLoopsRuchn.length;
        nextIndexRuchn = curPosRuchn + 1;
    }
    else{
        prevIndexRuchn = curPosRuchn - 1;
        nextIndexRuchn = curPosRuchn + 1;
    }
    hideLineLoopsR(lineLoopsRuchn.length);
    showLineLoopsRuchn((curPosRuchn - 1) + '_' + 1);
});
    
function hideLineLoopsR(arrLength){
    if(arrLength){
        for (let i = 0; i < arrLength; i++) {
            let el = document.getElementById( i + '_' + 1);
            el.style.display = 'none';
        }
    }
}

// // TShSR
function setTShSR(handlerArr, size, dataToSave){
    if(size){
        for (let i = 0; i < size; i++) {
            handlerArr[i][0].onchange = ()=>{
                        if(handlerArr[i][0].selectedIndex == 1){
                            dataToSave[i].TShS = handlerArr[i][0].selectedIndex;
                            console.log(i + " ТШСR: " + dataToSave[i].TShS);
                            handlerArr[i][10].style.display = 'block';    
                            handlerArr[i][15].style.display = 'none';   
                            handlerArr[i][7].style.display = 'block';  

                            if(dynamicEvHandlerIZVR)
                                hideIzvR(dynamicEvHandlerIZVR, i, dataToSave);
                            document.querySelector('.izvBtns_').style.display = 'none';


                            pressedBtnsRuchnCount_bezAdr[`TIZV${i}`] = false;
                            pressedBtnsRuchnCount_bezAdr[`IOIZV${i}`] = false;
                            pressedBtnsRuchnCount_bezAdr[`IPIZV${i}`] = false;
                            pressedBtnsRuchnCount_sbt3[`ZonaShSR${i}`] = false;
                            pressedBtnsRuchnCount_sbt3[`AdrShSR${i}`] = false;
                        

                                while(handlerArr[i][4].firstChild)
                                    handlerArr[i][4].removeChild(handlerArr[i][4].firstChild);
                            
                                        let oOption = document.createElement("option");
                                        // oOption.appendChild(document.createTextNode("Выберите тип:"));
                                        // oOption.setAttribute("value", "");
                                        // handlerArr[i][6].appendChild(oOption);  
                                        for (let j = 0; j < IntermediateModules.length; j++) {
                                            for(let prop in IntermediateModules[j]){
                                                if(IntermediateModules[j][prop] == "BIZ"){
                                                    oOption = document.createElement("option");
                                                    //oOption.appendChild(document.createTextNode(IntermediateModules[j].name));
                                                    oOption.setAttribute("value", IntermediateModules[j].name);
                                                    handlerArr[i][4].appendChild(oOption);   
                                                }
                                            }        
                                        }

                        }
                        else if(handlerArr[i][0].selectedIndex == 0 ){
                            dataToSave[i].TShS = handlerArr[i][0].selectedIndex;
                            console.log(i + " ТШСR: " + dataToSave[i].TShS);

                            pressedBtnsRuchnCount_bezAdr[`TIZV${i}`] = true;
                            pressedBtnsRuchnCount_bezAdr[`IOIZV${i}`] = true;
                            pressedBtnsRuchnCount_bezAdr[`IPIZV${i}`] = true;
                            pressedBtnsRuchnCount_sbt3[`ZonaShSR${i}`] = true;
                            pressedBtnsRuchnCount_sbt3[`AdrShSR${i}`] = true;
                
                            // if(dataToSave[i].ExShS == true && dataToSave[i].KIZVShS >= 1){
                            //     //handlerArr[i][17].style.display = 'block';
                            // }                                
                            // else{
                            //     //handlerArr[i][13].style.display = 'block';
                            // }
                            
                            handlerArr[i][2].style.display = 'none';
                            handlerArr[i][10].style.display = 'none';
                            handlerArr[i][15].style.display = 'block';
                            handlerArr[i][7].style.display = 'none';   
                            //handlerArr[i][26].style.display = 'none';             
                            //document.querySelector(`.RRIShS_p_${i}`).style.display = 'block';

                            while(handlerArr[i][4].firstChild)
                                handlerArr[i][4].removeChild(handlerArr[i][4].firstChild);
                
                            let oOption = document.createElement("option");
                            oOption.appendChild(document.createTextNode("Выберите тип:"));
                            oOption.setAttribute("value", "");
                            handlerArr[i][4].appendChild(oOption);  
                            for (let j = 0; j < IntermediateModules.length; j++) {
                                for(let prop in IntermediateModules[j]){
                                    if(IntermediateModules[j][prop] == "I"){
                                        oOption = document.createElement("option");
                                        oOption.appendChild(document.createTextNode(IntermediateModules[j].name));
                                        oOption.setAttribute("value", "");
                                        handlerArr[i][4].appendChild(oOption);   
                                    }
                                }        
                            }
                        }            
            }
        }
    }
}


// // ExShSR
function setExShSR(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
            if(handlerArr[i][1]){
                handlerArr[i][1].addEventListener('click', ()=>{
            if(handlerArr[i][1].checked)
            { 
                dataToSave[i].ExShS = true;
                if(handlerArr[i][3].value == "")
                    pressedBtnsRuchnCount_sbt3[`TShSBIZ${i}`] = false;
                if( dataToSave[i].TShS == 0){ 
                    handlerArr[i][2].style.display = 'block';
                    handlerArr[i][3].style.display = 'none';
                    handlerArr[i][4].style.display = 'none';
                    handlerArr[i][5].style.display = 'block';
                    


                    while(handlerArr[i][5].firstChild)
                        handlerArr[i][5].removeChild(handlerArr[i][5].firstChild);
                    
                                let oOption = document.createElement("option");
                                oOption.appendChild(document.createTextNode("Выберите тип:"));
                                oOption.setAttribute("value", "");
                                handlerArr[i][5].appendChild(oOption);  
                                for (let j = 0; j < IntermediateModules.length; j++) {
                                    for(let prop in IntermediateModules[j]){
                                        if(IntermediateModules[j][prop] == "I"){
                                            oOption = document.createElement("option");
                                            oOption.appendChild(document.createTextNode(IntermediateModules[j].name));
                                            oOption.setAttribute("value", "");
                                            handlerArr[i][5].appendChild(oOption);   
                                        }
                                    }        
                                }
                }
                else{
                    handlerArr[i][2].style.display = 'block';
                    handlerArr[i][3].style.display = 'block';
                    handlerArr[i][4].style.display = 'none';
                    handlerArr[i][5].style.display = 'none';  



                    while(handlerArr[i][4].firstChild)
                        handlerArr[i][4].removeChild(handlerArr[i][4].firstChild);
                    
                                let oOption = document.createElement("option");
                                // oOption.appendChild(document.createTextNode("Выберите тип:"));
                                // oOption.setAttribute("value", "");
                                // handlerArr[i][6].appendChild(oOption);  
                                for (let j = 0; j < IntermediateModules.length; j++) {
                                    for(let prop in IntermediateModules[j]){
                                        if(IntermediateModules[j][prop] == "BIZ"){
                                            oOption = document.createElement("option");
                                            //oOption.appendChild(document.createTextNode(IntermediateModules[j].name));
                                            oOption.setAttribute("value", IntermediateModules[j].name);
                                            handlerArr[i][4].appendChild(oOption);   
                                        }
                                    }        
                                }
                }
                
            }
            else  {
                dataToSave[i].ExShS = false;
                handlerArr[i][2].style.display = 'none';
                pressedBtnsRuchnCount_sbt3[`TShSBIZ${i}`] = true;
                if( dataToSave[i].TShS == 0) {
                    // handlerArr[i][17].style.display = 'none'; 
                    // handlerArr[i][13].style.display = 'block';
                }
            }
            //e.preventDefault();
        });
            
        }
    }
}



//     //Ввод пустой строки для ТШСБИЗ

function setTShSBIZR(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][3].addEventListener('blur', (e)=>{
            if(dataToSave[i].ExShS == true){
                if(dataToSave[i].TShS == 1){
                    if(handlerArr[i][3].value == ""){
                        let flag = confirm("Взрывозащита типа \"d\"");
                        if(flag)
                        {
                            dataToSave[i].TShSBIZ = "Взрывозащита типа \"d\"";
                            handlerArr[i][3].value = "Взрывозащита типа \"d\"";
                            console.log("ТШСБИЗR: " + dataToSave[i].TShSBIZ);
                            handlerArr[i][5].style.display = 'none';
                            e.preventDefault();
                            pressedBtnsRuchnCount_sbt3[`TShSBIZ${i}`] = true;
                            return;
                        }
                        pressedBtnsRuchnCount_sbt3[`TShSBIZ${i}`]  = false;
                    }
                    else
                    {
                        dataToSave[i].TShSBIZ = handlerArr[i][3].value;
                        pressedBtnsRuchnCount_sbt3[`TShSBIZ${i}`]  = true;
                        console.log("ТШСБИЗR: " + dataToSave[i].TShSBIZ);
                    }
                }
                else{
                    if(handlerArr[i][3].value == ""){
                        pressedBtnsRuchnCount_sbt3[`TShSBIZ${i}`]  = false;
                        return;
                    }
                    else{
                        dataToSave[i].TShSBIZ = handlerArr[i][3].value;   
                        pressedBtnsRuchnCount_sbt3[`TShSBIZ${i}`] = true;
                        console.log("ТШСБИЗR: " + dataToSave[i].TShSBIZ);
                    }
                }
            }
        });
        
    }
}


function setAdrBizR(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][5].onchange = ()=>{
            if(handlerArr[i][5].selectedIndex == 0){
                pressedBtnsRuchnCount_sbt3[`TShSBIZ${i}`] = false;
                return;
            }

            pressedBtnsRuchnCount_sbt3[`TShSBIZ${i}`] = true;
            dataToSave[i].TShSBIZ = handlerArr[i][5].options[handlerArr[i][5].selectedIndex].text;
            console.log("X: " + dataToSave[i].TShSBIZ );
        };        
    }
}

//     //КИЗВШС
//     //iKIZVShS2
function setKIZVShSR(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        
        handlerArr[i][6].onkeypress = (e)=>{
            e = e || event;
        if (e.ctrlKey || e.altKey || e.metaKey) return;
        var chr = getChar(e);
        console.log("Char pressed: " + chr);
        if(chr == ',' || chr == '.')
        {   
            // iKShS.value.replace(/[\,|\.]+/g,'');
            e.preventDefault();
            return;
        }
        if(chr == null) return;

        if (chr < '0' || chr > '9') {
            return false;
        }
        };

        handlerArr[i][6].addEventListener('focus', ()=>{
                handlerArr[i][6].style.boxShadow = 'none';
            });

            handlerArr[i][6].addEventListener('blur', ()=>{
                if( handlerArr[i][6].value.search(regEx) == -1){
                if(parseInt( handlerArr[i][6].value, 10) >= 1 && parseInt( handlerArr[i][6].value, 10) <= 32){
                    dataToSave[i].KIZVShS = parseInt( handlerArr[i][6].value, 10);
                    pressedBtnsRuchnCount_sbt3[`KIZVShSR${i}`] = true;
                    handlerArr[i][6].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                    console.log(i + "-КІЗВШСR: " + dataToSave[i].KIZVShS);

                    // for (let i = 0; i < AutoSignalizatsiya.KShS; i++) {
                    //     for (let j = 0; j < array.length; j++) {
                    //         _izveshateli[i] = [];                            
                    //     }                       
                        
                    // }

                }
                else if( handlerArr[i][6].value == ""){
                    pressedBtnsRuchnCount_sbt3[`KIZVShSR${i}`] = false;
                    return;
                }
                else
                    {
                        handlerArr[i][6].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                    }
                }
                else
                    handlerArr[i][6].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
            }); 
    }  
}


//     //Зона
//     //iZONAShS2

function setZonaShSR(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][8].onkeypress = (e)=>{
            e = e || event;
           if (e.ctrlKey || e.altKey || e.metaKey) return;
           var chr = getChar(e);
           console.log("Char pressed: " + chr);
           if(chr == ',' || chr == '.')
           {   
               // iKShS.value.replace(/[\,|\.]+/g,'');
               e.preventDefault();
               return;
           }
           if(chr == null) return;
    
           if (chr < '0' || chr > '9') {
               return false;
           }
        };
    
        handlerArr[i][8].addEventListener('focus', ()=>{
            handlerArr[i][8].style.boxShadow = 'none';
        });
    
        handlerArr[i][8].addEventListener('blur', ()=>{
            if(handlerArr[i][8].value.search(regEx) == -1){
            if(parseInt(handlerArr[i][8].value, 10) >= 1 && parseInt(handlerArr[i][8].value, 10) <= 255){
                dataToSave[i].ZONAShS = parseInt(handlerArr[i][8].value, 10);
                pressedBtnsRuchnCount_sbt3[`ZonaShSR${i}`] = true;
                handlerArr[i][8].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                console.log(i + " - ЗОНАШСR: " + dataToSave[i].ZONAShS);
            }
            else if(handlerArr[i][8].value == ""){
                pressedBtnsRuchnCount_sbt3[`ZonaShSR${i}`] = false;
                return;
            }
            else
                {
                    handlerArr[i][8].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                }
            }
            else
                handlerArr[i][8].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
        });
        
    }
}



//     //iADRShS2
function setAdrShSR(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][9].addEventListener('focus', ()=>{
                handlerArr[i][11].style.boxShadow = 'none';
            });

            handlerArr[i][9].addEventListener('blur', ()=>{
                if(handlerArr[i][9].value == ""){ 
                    pressedBtnsRuchnCount_sbt3[`AdrShSR${i}`] = false;
                    handlerArr[i][9].style.boxShadow = 'none';
                    return;
                }
                else if(handlerArr[i][9].value.length <= 20){
                    dataToSave[i].ADRShS = handlerArr[i][9].value;
                    pressedBtnsRuchnCount_sbt3[`AdrShSR${i}`] = true;
                    handlerArr[i][9].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                    console.log(i + " АДРШСR: " + dataToSave[i].ADRShS + " L: " + dataToSave[i].ADRShS.length);
                }
                else
                    handlerArr[i][9].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
            });
    }
}


// //Конфигурация извещателя при ТШС="Безадресный"
// //iTIZV2
function setTIZVautoR(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        // handlerArr[i][11].addEventListener('focus', ()=>{
        //     handlerArr[i][11].style.boxShadow = 'none';
        // });

        // handlerArr[i][11].addEventListener('blur', ()=>{
        //     if(handlerArr[i][11].value == ""){
        //         pressedBtnsRuchnCount_bezAdr[`TIZV${i}`] = false; 
        //         handlerArr[i][11].style.boxShadow = 'none';
        //         return;
        //     }
        //     else if(handlerArr[i][11].value.length <= 20){
        //         dataToSave[i].izveshateli.KonfIzvBezAdr.TIZV = handlerArr[i][11].value;
        //         pressedBtnsRuchnCount_bezAdr[`TIZV${i}`] = true;
        //         //добавляем введённую инфу в массив
        //         addItemsDouble(handlerArr[i][12], i, handlerArr);
        //         // if(enteredVals.indexOf(iTIZV1.value) == -1){ 
        //         //     enteredVals.push(iTIZV1.value);
        //         //     let addToList = new addInfoToList(enteredVals);
        //         //     addToList.addItems(enteredItems);
        //         // }
        //         handlerArr[i][11].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
        //         console.log("TIZVR: " + dataToSave[i].izveshateli.KonfIzvBezAdr.TIZV + " L: " + dataToSave[i].izveshateli.KonfIzvBezAdr.TIZV.length);
        //     }
        //     else
        //         handlerArr[i][11].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
        // });
        
        handlerArr[i][11].onchange = ()=>{
            //shleifCount['SKhShS'] = true;
            dataToSave[i].izveshateli.KonfIzvBezAdr.TIZV = handlerArr[i][11].selectedIndex;
            console.log(i + " TIZV_R: " + dataToSave[i].izveshateli.KonfIzvBezAdr.TIZV);
        };
        
    }
}
// iTIZV2.onchange = function(){
//     RutshnayaSignalizatsiya.KonfIzvBezAdr.TIZV = this.selectedIndex;
//     console.log("ТИЗВ: " + RutshnayaSignalizatsiya.KonfIzvBezAdr.TIZV);
// };

// //IOIZV
function setIOIZVR(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][13].onkeypress = (e)=>{
            e = e || event;
           if (e.ctrlKey || e.altKey || e.metaKey) return;
           var chr = getChar(e);
           console.log("Char pressed: " + chr);
           if(chr == ',' || chr == '.')
           {   
               let count = 0, pos = -1;
               if(chr == ',' || chr == '.'){
                    if(handlerArr[i][13].value.indexOf('.') == -1)
                    {
                        while((pos = handlerArr[i][13].value.indexOf(',', pos + 1 )) != -1){
                            count++;
                        }
                        if(count >= 1) {e.preventDefault(); count = 0; return;}
                        else { count = 0;  }
                    }
                    else
                    {
                        while((pos = handlerArr[i][13].value.indexOf('.', pos + 1 )) != -1){
                            count++;
                        }
                        if(count >= 1) {e.preventDefault(); count = 0; return;}
                        else  { count = 0;  }   
                    }
               }

               return;
           }
           if(chr == null) return;

           if (chr < '0' || chr > '9') {
               return false;
           }
        };

        handlerArr[i][13].addEventListener('focus', ()=>{
            handlerArr[i][13].style.boxShadow = 'none';
        });

        handlerArr[i][13].addEventListener('blur', ()=>{
            if(handlerArr[i][13].value.indexOf(',')== -1 && handlerArr[i][13].value.indexOf('.')== -1)
                handlerArr[i][13].value += ',0';
            if(handlerArr[i][13].value[handlerArr[i][13].value.length - 1] == '.' || handlerArr[i][13].value[handlerArr[i][13].value.length - 1] == ',')
                handlerArr[i][13].value += '0';

            if(handlerArr[i][13].value.search(regExBroken) != -1){
            
                if(handlerArr[i][13].value.indexOf(',')!= -1) handlerArr[i][13].value = handlerArr[i][13].value.replace(/\,/, '.');

            if(parseFloat(handlerArr[i][13].value) >= 0 && parseFloat(handlerArr[i][13].value) <= 32){
                dataToSave[i].izveshateli.KonfIzvBezAdr.IOIZV = parseFloat(handlerArr[i][13].value);
                pressedBtnsRuchnCount_bezAdr[`IOIZV${i}`] = true;
                handlerArr[i][13].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                console.log("IOIZVR: " + dataToSave[i].izveshateli.KonfIzvBezAdr.IOIZV);
            }
            else if(handlerArr[i][13].value == ""){
                pressedBtnsRuchnCount_bezAdr[`IOIZV${i}`] = false;
                return;
            }
            else
                {
                    handlerArr[i][13].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                }
            }
            else
                handlerArr[i][13].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
        }); 
        
    }
}



// //iIPIZV2
function setiIPIZVR(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][14].onkeypress = (e)=>{
            e = e || event;
           if (e.ctrlKey || e.altKey || e.metaKey) return;
           var chr = getChar(e);
           console.log("Char pressed: " + chr);
           if(chr == ',' || chr == '.')
           {   
               let count = 0, pos = -1;
               if(chr == ',' || chr == '.'){
                    if(handlerArr[i][14].value.indexOf('.') == -1)
                    {
                        while((pos = handlerArr[i][14].value.indexOf(',', pos + 1 )) != -1){
                            count++;
                        }
                        if(count >= 1) {e.preventDefault(); count = 0; return;}
                        else { count = 0;  }
                    }
                    else
                    {
                        while((pos = handlerArr[i][14].value.indexOf('.', pos + 1 )) != -1){
                            count++;
                        }
                        if(count >= 1) {e.preventDefault(); count = 0; return;}
                        else  { count = 0;  }   
                    }
               }

               return;
           }
           if(chr == null) return;

           if (chr < '0' || chr > '9') {
               return false;
           }
        };

        handlerArr[i][14].addEventListener('focus', ()=>{
            handlerArr[i][14].style.boxShadow = 'none';
        });

        handlerArr[i][14].addEventListener('blur', ()=>{
            if(handlerArr[i][14].value.indexOf(',')== -1 && handlerArr[i][14].value.indexOf('.')== -1)
                handlerArr[i][14].value += ',0';
            if(handlerArr[i][14].value[handlerArr[i][14].value.length - 1] == '.' || handlerArr[i][14].value[handlerArr[i][14].value.length - 1] == ',')
                handlerArr[i][14].value += '0';
            if(handlerArr[i][14].value.search(regExBroken) != -1){
            
                if(handlerArr[i][14].value.indexOf(',')!= -1) handlerArr[i][14].value = handlerArr[i][14].value.replace(/\,/, '.');

            if(parseFloat(handlerArr[i][14].value) >= 0 && parseFloat(handlerArr[i][14].value) <= 32){
                dataToSave[i].izveshateli.KonfIzvBezAdr.IPIZV = parseFloat(handlerArr[i][14].value);
                pressedBtnsRuchnCount_bezAdr[`IPIZV${i}`] = true;
                handlerArr[i][14].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                console.log("IPIZVR: " +  dataToSave[i].izveshateli.KonfIzvBezAdr.IPIZV);
            }
            else if(handlerArr[i][14].value == ""){
                pressedBtnsRuchnCount_bezAdr[`IPIZV${i}`] = false;
                return;
            }
            else
                {
                    handlerArr[i][14].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                }
            }
            else
                handlerArr[i][14].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
        });   
    }
}


//-----------------------------Подсистема управления пожаротушения-----------------------------



// //Подсистема управления пожаротушением


const   KShPT = document.getElementById('KShPT'),
         KMIShPT = document.getElementById('KMIShPT'),
         REZShPT = document.getElementById('REZShPT'),
        ZONAShPT = document.getElementById('ZONAShPT'),
        ADRZONYPT = document.getElementById('ADRZONYPT'),
        KShPTZONY = document.getElementById('KShPTZONY'),
        KDDZONY = document.getElementById('KDDZONY'),
        KBDUZONY = document.getElementById('KBDUZONY'),
        KExBDUZONY = document.getElementById('KExBDUZONY'),
        KExLSBDU = document.getElementById('KExLSBDU');


const lineLoopBtnsUpr = document.getElementById('lineLoopBtnsUpr'),
    lineLoopPrevUpr = document.getElementById('lineLoopPrevUpr'),
    lineLoopPosUpr = document.getElementById('lineLoopPosUpr'),
    lastPosUpr = document.getElementById('lastPosUpr'),
    lineLoopNextUpr = document.getElementById('lineLoopNextUpr');

let pressedBtnsPojCount = [];
pressedBtnsPojCount['KShPT'] = false;
pressedBtnsPojCount['KMIShPT'] = false;
pressedBtnsPojCount['REZShPT'] = false;
pressedBtnsPojCount['ZONAShPT'] = false;
pressedBtnsPojCount['ADRZONYPT'] = false;
pressedBtnsPojCount['KShPTZONY'] = false;
pressedBtnsPojCount['KDDZONY'] = false;
pressedBtnsPojCount['KBDUZONY'] = false;
pressedBtnsPojCount['KExBDUZONY'] = false;
pressedBtnsPojCount['KExLSBDU'] = false;


lineLoopPrevUpr.addEventListener('click', ()=>{
        if(prevIndexUpr < 1) prevIndexUpr = lineLoopsUpr.length;
        nextIndexUpr = curPosUpr;
        curPosUpr = prevIndexUpr;
        prevIndexUpr--;
        if(prevIndexUpr < 1) prevIndexUpr = lineLoopsUpr.length;
        lineLoopPosUpr.value = curPosUpr;
        hideLineLoopsUpr(lineLoopsUpr.length);
        showLineLoopsRuchn((curPosUpr - 1) + '_' + 2);
    

});

lineLoopNextUpr.addEventListener('click', ()=>{
            if(nextIndexUpr > lineLoopsUpr.length ) nextIndexUpr = 1;
            prevIndexUpr = curPosUpr;
            curPosUpr = nextIndexUpr;
            nextIndexUpr++;
            if(nextIndexUpr > lineLoopsUpr.length) nextIndexUpr = 1;
            lineLoopPosUpr.value = curPosUpr;
            hideLineLoopsUpr(lineLoopsUpr.length);
            showLineLoopsRuchn((curPosUpr - 1) + '_' + 2);

});


lineLoopPosUpr.addEventListener('blur', ()=>{
    curPosUpr = parseInt(lineLoopPosUpr.value, 10);
    if(curPosUpr + 1 > lineLoopsUpr.length + 1){
        nextIndexUpr  = 1;
        prevIndexUpr  = curPosUpr - 1;
    }
    else if(curPosUpr - 1 < 1){
        prevIndexUpr = lineLoopsUpr.length;
        nextIndexUpr = curPosUpr + 1;
    }
    else{
        prevIndexUpr  = curPosUpr - 1;
        nextIndexUpr  = curPosUpr + 1;
    }
    hideLineLoopsUpr(lineLoopsUpr.length);
    showLineLoopsRuchn((curPosUpr - 1) + '_' + 2);
});


// //KShPT

KShPT.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

KShPT.addEventListener('focus', ()=>{
    KShPT.style.boxShadow = 'none';
});

//Диапазоны?
KShPT.addEventListener('blur', ()=>{
   if(KShPT.value.search(regEx) == -1){
   if(parseInt(KShPT.value, 10) >= 1 && parseInt(KShPT.value, 10) <= 640){
       UpravleniePojaroTusheniem.KShPT = parseInt(KShPT.value, 10);
       KShPT.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       pressedBtnsPojCount['KShPT'] = true;
       ZONAShPT.placeholder = `1...${UpravleniePojaroTusheniem.KShPT}`;
       console.log(UpravleniePojaroTusheniem.KShPT);
   }
   else if(KShPT.value == ""){
       UpravleniePojaroTusheniem.KShPT= 0;
       pressedBtnsPojCount['KShPT'] = false;
       ZONAShPT.placeholder = `1...64`;
       console.log("КШПТ: " + UpravleniePojaroTusheniem.KShPT);
       return;
   }
   else
       {
        KShPT.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
    KShPT.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
    
});

// //KMIShPT
KMIShPT.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

KMIShPT.addEventListener('focus', ()=>{
    KMIShPT.style.boxShadow = 'none';
});


KMIShPT.addEventListener('blur', ()=>{
   if(KMIShPT.value.search(regEx) == -1){
   if(parseInt(KMIShPT.value, 10) >= 1 && parseInt(KMIShPT.value, 10) <= 32){
       UpravleniePojaroTusheniem.KMIShPT = parseInt(KMIShPT.value, 10);
       KMIShPT.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       pressedBtnsPojCount['KMIShPT'] = true;
       console.log(UpravleniePojaroTusheniem.KMIShPT);
   }
   else if(KMIShPT.value == ""){
       UpravleniePojaroTusheniem.KMIShPT= 0;
       pressedBtnsPojCount['KMIShPT'] = false;
       console.log("КМИШПТ: " + UpravleniePojaroTusheniem.KMIShPT);
       return;
   }
   else
       {
        KMIShPT.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
    KMIShPT.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
    
});

// //REZShPT
REZShPT.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

REZShPT.addEventListener('focus', ()=>{
    REZShPT.style.boxShadow = 'none';
});


REZShPT.addEventListener('blur', ()=>{
   if(REZShPT.value.search(regEx) == -1){
   if(parseInt(REZShPT.value, 10) >= 0 && parseInt(REZShPT.value, 10) <= 100){
       UpravleniePojaroTusheniem.REZShPT = parseInt(REZShPT.value, 10);
       REZShPT.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       pressedBtnsPojCount['REZShPT'] = true;
       console.log(UpravleniePojaroTusheniem.REZShPT);
   }
   else if(REZShPT.value == ""){
       UpravleniePojaroTusheniem.REZShPT= 0;
       pressedBtnsPojCount['REZShPT'] = false;
       console.log("РЕЗШПТ: " + UpravleniePojaroTusheniem.REZShPT);
       return;
   }
   else
       {
        REZShPT.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
    REZShPT.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
    
});

// //ZONAShPT
ZONAShPT.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

ZONAShPT.addEventListener('focus', ()=>{
    ZONAShPT.style.boxShadow = 'none';
});


ZONAShPT.addEventListener('blur', ()=>{
   if(ZONAShPT.value.search(regEx) == -1){
   if(parseInt(ZONAShPT.value, 10) >= 1 && 
   parseInt(ZONAShPT.value, 10) <= UpravleniePojaroTusheniem.KShPT || 
   parseInt(ZONAShPT.value, 10) <= 64){
       UpravleniePojaroTusheniem.ZonaPojaroTushenia.ZONAShPT = parseInt(ZONAShPT.value, 10);
       ZONAShPT.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       pressedBtnsPojCount['ZONAShPT'] = true;
       console.log(UpravleniePojaroTusheniem.ZonaPojaroTushenia.ZONAShPT);
   }
   else if(ZONAShPT.value == ""){
       UpravleniePojaroTusheniem.ZonaPojaroTushenia.ZONAShPT= 0;
       pressedBtnsPojCount['ZONAShPT'] = false;
       console.log("ЗонаШПТ: " + UpravleniePojaroTusheniem.ZonaPojaroTushenia.ZONAShPT);
       return;
   }
   else
       {
        ZONAShPT.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
    ZONAShPT.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
    
});

// //ADRZONYPT
ADRZONYPT.addEventListener('focus', ()=>{
    ADRZONYPT.style.boxShadow = 'none';
    });
    
    ADRZONYPT.addEventListener('blur', ()=>{
    if(ADRZONYPT.value == ""){
        pressedBtnsPojCount['ADRZONYPT'] = false;
        ADRZONYPT.style.boxShadow = 'none';
        return;
    }
    else if(ADRZONYPT.value.length <= 20){
        UpravleniePojaroTusheniem.ZonaPojaroTushenia.ADRZONYPT = ADRZONYPT.value;
        ADRZONYPT.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
        pressedBtnsPojCount['ADRZONYPT'] = true;
        console.log("АдрЗоныПТ: " + UpravleniePojaroTusheniem.ZonaPojaroTushenia.ADRZONYPT + " L: " + UpravleniePojaroTusheniem.ZonaPojaroTushenia.ADRZONYPT);
    }
    else
        ADRZONYPT.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
});

// //KShPTZONY
KShPTZONY.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

KShPTZONY.addEventListener('focus', ()=>{
    KShPTZONY.style.boxShadow = 'none';
});

KShPTZONY.addEventListener('blur', ()=>{
   if(KShPTZONY.value.search(regEx) == -1){
   if(parseInt(KShPTZONY.value, 10) >= 1 && parseInt(KShPTZONY.value, 10) <= 320){
       UpravleniePojaroTusheniem.ZonaPojaroTushenia.KShPTZONY = parseInt(KShPTZONY.value, 10);
       KShPTZONY.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       pressedBtnsPojCount['KShPTZONY'] = true;
       console.log("KShPTZONY: " + UpravleniePojaroTusheniem.ZonaPojaroTushenia.KShPTZONY);
   }
   else if(KShPTZONY.value == ""){
       UpravleniePojaroTusheniem.ZonaPojaroTushenia.KShPTZONY= 0;
       pressedBtnsPojCount['KShPTZONY'] = false;
       console.log("KShPTZONY: " + UpravleniePojaroTusheniem.ZonaPojaroTushenia.KShPTZONY);
       return;
   }
   else
       {
        KShPTZONY.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
    KShPTZONY.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
    
});

// //KDDZONY
KDDZONY.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

KDDZONY.addEventListener('focus', ()=>{
    KDDZONY.style.boxShadow = 'none';
});

KDDZONY.addEventListener('blur', ()=>{
   if(KDDZONY.value.search(regEx) == -1){
   if(parseInt(KDDZONY.value, 10) >= 0 && parseInt(KDDZONY.value, 10) <= 20){
       UpravleniePojaroTusheniem.ZonaPojaroTushenia.KDDZONY = parseInt(KDDZONY.value, 10);
       KDDZONY.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       pressedBtnsPojCount['KDDZONY'] = true;
       console.log("KDDZONY: " + UpravleniePojaroTusheniem.ZonaPojaroTushenia.KDDZONY);
   }
   else if(KDDZONY.value == ""){
       UpravleniePojaroTusheniem.ZonaPojaroTushenia.KDDZONY= 0;
       pressedBtnsPojCount['KDDZONY'] = false;
       console.log("KDDZONY: " +  UpravleniePojaroTusheniem.ZonaPojaroTushenia.KDDZONY);
       return;
   }
   else
       {
        KDDZONY.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
    KDDZONY.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
    
});

// //KBDUZONY
KBDUZONY.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

KBDUZONY.addEventListener('focus', ()=>{
    KBDUZONY.style.boxShadow = 'none';
});

KBDUZONY.addEventListener('blur', ()=>{
   if(KBDUZONY.value.search(regEx) == -1){
   if(parseInt(KBDUZONY.value, 10) >= 0 && parseInt(KBDUZONY.value, 10) <= 20){
       UpravleniePojaroTusheniem.ZonaPojaroTushenia.KBDUZONY = parseInt(KBDUZONY.value, 10);
       KBDUZONY.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       pressedBtnsPojCount['KBDUZONY'] = true;
       console.log("KBDUZONY: " + UpravleniePojaroTusheniem.ZonaPojaroTushenia.KBDUZONY);
   }
   else if(KBDUZONY.value == ""){
       UpravleniePojaroTusheniem.ZonaPojaroTushenia.KBDUZONY= 0;
       pressedBtnsPojCount['KBDUZONY'] = false;
       console.log("KBDUZONY: " + UpravleniePojaroTusheniem.ZonaPojaroTushenia.KBDUZONY);
       return;
   }
   else
       {
        KBDUZONY.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
    KBDUZONY.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
    
});

// //KExBDUZONY
KExBDUZONY.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

KExBDUZONY.addEventListener('focus', ()=>{
    KExBDUZONY.style.boxShadow = 'none';
});

KExBDUZONY.addEventListener('blur', ()=>{
   if(KExBDUZONY.value.search(regEx) == -1){
   if(parseInt(KExBDUZONY.value, 10) >= 0 && parseInt(KExBDUZONY.value, 10) <= 20){
       UpravleniePojaroTusheniem.ZonaPojaroTushenia.KExBDUZONY = parseInt(KExBDUZONY.value, 10);
       KExBDUZONY.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       pressedBtnsPojCount['KExBDUZONY'] = true;
       console.log("KExBDUZONY: " +UpravleniePojaroTusheniem.ZonaPojaroTushenia.KExBDUZONY);
   }
   else if(KExBDUZONY.value == ""){
       UpravleniePojaroTusheniem.ZonaPojaroTushenia.KExBDUZONY= 0;
       pressedBtnsPojCount['KExBDUZONY'] = false;
       console.log("KExBDUZONY: " + UpravleniePojaroTusheniem.ZonaPojaroTushenia.KExBDUZONY);
       return;
   }
   else
       {
        KExBDUZONY.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
    KExBDUZONY.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
    
});

// //KExLSBDU
KExLSBDU.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

KExLSBDU.addEventListener('focus', ()=>{
    KExLSBDU.style.boxShadow = 'none';
});

KExLSBDU.addEventListener('blur', ()=>{
   if(KExLSBDU.value.search(regEx) == -1){
   if(parseInt(KExLSBDU.value, 10) >= 0 && parseInt(KExLSBDU.value, 10) <= 15){
       UpravleniePojaroTusheniem.ZonaPojaroTushenia.KExLSBDU = parseInt(KExLSBDU.value, 10);
       KExLSBDU.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       pressedBtnsPojCount['KExLSBDU'] = true;
       console.log("KExLSBDU: " + UpravleniePojaroTusheniem.ZonaPojaroTushenia.KExLSBDU);
   }
   else if(KExLSBDU.value == ""){
       UpravleniePojaroTusheniem.ZonaPojaroTushenia.KExLSBDU= 0;
       pressedBtnsPojCount['KExLSBDU'] = false;
       console.log("KExLSBDU: " +  UpravleniePojaroTusheniem.ZonaPojaroTushenia.KExLSBDU);
       return;
   }
   else
       {
        KExLSBDU.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
    KExLSBDU.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';  
});

let lineLoopsUpr = [], dynamicEventHandlersUpr = [], lineLoopsDataUpr = [];
let curPosUpr, prevIndexUpr, nextIndexUpr;

let pressedBtnsPojCount_sbt4 = [];

sbtForm4.addEventListener('click', (e)=>{
    e.preventDefault();
    if(UpravleniePojaroTusheniem.KShPT && isThereFalse(pressedBtnsPojCount) ){
            //alert('Сконфигурировано!');
            console.log(pressedBtnsRuchnCount_sbt3);
            console.log(pressedBtnsRuchnCount_bezAdr);
            console.log(pressedBtnsRuchnCount_adrExShSn);
            console.log(pressedBtnsRuchnCount_adrExShSd);

            lineLoopBtnsUpr.style.display = 'block';
            lineLoopsUpr.length = UpravleniePojaroTusheniem.KShPT;
            for (let i = 0; i < lineLoopsUpr.length; i++) {
                lineLoopsUpr[i] = UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia;

                pressedBtnsPojCount_sbt4[`ADRShPT${i}`] = false;
                pressedBtnsPojCount_sbt4[`IPShPT${i}`] = false;
                pressedBtnsPojCount_sbt4[`TBIZShPT${i}`] = true;
            }
            createlineLoopUpr(UpravleniePojaroTusheniem.KShPT);
            // let lastPosUpr = document.getElementById('lastPosUpr'),
            //     lineLoopPosUpr = document.getElementById('lineLoopPosUpr');

            lastPosUpr.innerHTML = 'из ' + lineLoopsUpr.length;
            lineLoopPosUpr.min = 1;
            lineLoopPosUpr.max = lineLoopsUpr.length;
            lineLoopPosUpr.value = 1;
            curPosUpr = 1;
            prevIndexUpr = lineLoopsUpr.length;
            nextIndexUpr = curPosUpr + 1;
            
            if(lineLoopsUpr.length){
                for (let i = 0; i < lineLoopsUpr.length; i++) {
                    for (let j = 0; j < 28; j++) {
                        dynamicEventHandlersUpr[i] = [];
                    }
                }
             }

            setDynHandlersUpr(dynamicEventHandlersUpr, lineLoopsUpr.length);
            
            showLineLoopsRuchn(0 + "_" + 2);
            hideAutoObnarUpr();
            if(lineLoopsUpr.length){
                for (let i = 0; i < lineLoopsUpr.length; i++) {                
                    lineLoopsDataUpr[i] = Object.assign({}, UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia);
                    dynamicEventHandlersUpr[i][5].style.display = 'none';
                }
             }

                //lineLoopConf = document.getElementById('lineLoopKonf');
                setAdrShPT(dynamicEventHandlersUpr, lineLoopsUpr.length, lineLoopsDataUpr);
                setIPShPT(dynamicEventHandlersUpr, lineLoopsUpr.length, lineLoopsDataUpr);
                setImpShPT(dynamicEventHandlersUpr, lineLoopsUpr.length, lineLoopsDataUpr);
                setExShPT(dynamicEventHandlersUpr, lineLoopsUpr.length, lineLoopsDataUpr);
                setTBIZShPT(dynamicEventHandlersUpr, lineLoopsUpr.length, lineLoopsDataUpr);   
                //setCheckboxUpr(dynamicEventHandlersUpr, lineLoopsUpr.length, lineLoopsDataUpr);

                
        }
    else
        alert('Конфигурация не завершена! Пропущены данные.');
});

function setImpShPT(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][7].onkeypress = (e)=>{
            e = e || event;
           if (e.ctrlKey || e.altKey || e.metaKey) return;
           var chr = getChar(e);
           console.log("Char pressed: " + chr);
           if(chr == ',' || chr == '.')
           {   
               let count = 0, pos = -1;
               if(chr == ',' || chr == '.'){
                    if(handlerArr[i][7].value.indexOf('.') == -1)
                    {
                        while((pos = handlerArr[i][7].value.indexOf(',', pos + 1 )) != -1){
                            count++;
                        }
                        if(count >= 1) {e.preventDefault(); count = 0; return;}
                        else { count = 0;  }
                    }
                    else
                    {
                        while((pos = handlerArr[i][7].value.indexOf('.', pos + 1 )) != -1){
                            count++;
                        }
                        if(count >= 1) {e.preventDefault(); count = 0; return;}
                        else  { count = 0;  }   
                    }
               }

               return;
           }
           if(chr == null) return;

           if (chr < '0' || chr > '9') {
               return false;
           }
        };

        handlerArr[i][7].addEventListener('focus', ()=>{
            handlerArr[i][7].style.boxShadow = 'none';
        });

        handlerArr[i][7].addEventListener('blur', ()=>{
            if(handlerArr[i][7].value.indexOf(',')== -1 && handlerArr[i][7].value.indexOf('.')== -1)
                handlerArr[i][7].value += ',0';
            if(handlerArr[i][7].value[handlerArr[i][7].value.length - 1] == '.' || handlerArr[i][7].value[handlerArr[i][7].value.length - 1] == ',')
                handlerArr[i][7].value += '0';

            if(handlerArr[i][7].value.search(regExBroken) != -1){
            
                if(handlerArr[i][7].value.indexOf(',')!= -1) handlerArr[i][7].value = handlerArr[i][7].value.replace(/\,/, '.');

            if(parseFloat(handlerArr[i][7].value) >= 0 && parseFloat(handlerArr[i][7].value) <= 3){
                dataToSave[i].ImpShPT = parseFloat(handlerArr[i][7].value);
                //pressedBtnsPojCount_sbt4[`IPShPT${i}`] = true;
                handlerArr[i][7].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                if( dataToSave[i].ADRShPT != '' &&
                    dataToSave[i].IPShPT >= 1 ){
                        handlerArr[i][6].checked = true;
                        dataToSave[i].configured = true;
                }
                else{
                    handlerArr[i][6].checked = false;
                    dataToSave[i].configured = false;
                }
                console.log("ImpShPT: " + dataToSave[i].IPShPT);
            }
            else if(handlerArr[i][7].value == ""){
                //pressedBtnsPojCount_sbt4[`IPShPT${i}`] = false;
                return;
            }
            else
                {
                    handlerArr[i][7].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                }
            }
            else
                handlerArr[i][7].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
        }); 
        
    }
}

// //ADRShPT
function setAdrShPT(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][0].addEventListener('focus', ()=>{
                handlerArr[i][0].style.boxShadow = 'none';
            });

            handlerArr[i][0].addEventListener('blur', ()=>{
                if(handlerArr[i][0].value == ""){ 
                    pressedBtnsPojCount_sbt4[`ADRShPT${i}`] = false;
                    handlerArr[i][0].style.boxShadow = 'none';
                    return;
                }
                else if(handlerArr[i][0].value.length <= 20){
                    dataToSave[i].ADRShPT = handlerArr[i][0].value;
                    pressedBtnsPojCount_sbt4[`ADRShPT${i}`] = true;
                    handlerArr[i][0].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                    if( dataToSave[i].ADRShPT != '' &&
                        dataToSave[i].IPShPT >= 1 ){
                            handlerArr[i][6].checked = true;
                            dataToSave[i].configured = true;
                    }
                    else{    
                        handlerArr[i][6].checked = false;
                        dataToSave[i].configured = false;
                    }

                    console.log(i + " ADRShPT: " + dataToSave[i].ADRShPT + " L: " + dataToSave[i].ADRShPT.length);
                }
                else
                    handlerArr[i][0].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
            });
    }
}


// //IPShPT
function setIPShPT(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][1].onkeypress = (e)=>{
            e = e || event;
           if (e.ctrlKey || e.altKey || e.metaKey) return;
           var chr = getChar(e);
           console.log("Char pressed: " + chr);
           if(chr == ',' || chr == '.')
           {   
               let count = 0, pos = -1;
               if(chr == ',' || chr == '.'){
                    if(handlerArr[i][1].value.indexOf('.') == -1)
                    {
                        while((pos = handlerArr[i][1].value.indexOf(',', pos + 1 )) != -1){
                            count++;
                        }
                        if(count >= 1) {e.preventDefault(); count = 0; return;}
                        else { count = 0;  }
                    }
                    else
                    {
                        while((pos = handlerArr[i][1].value.indexOf('.', pos + 1 )) != -1){
                            count++;
                        }
                        if(count >= 1) {e.preventDefault(); count = 0; return;}
                        else  { count = 0;  }   
                    }
               }

               return;
           }
           if(chr == null) return;

           if (chr < '0' || chr > '9') {
               return false;
           }
        };

        handlerArr[i][1].addEventListener('focus', ()=>{
            handlerArr[i][1].style.boxShadow = 'none';
        });

        handlerArr[i][1].addEventListener('blur', ()=>{
            if(handlerArr[i][1].value.indexOf(',')== -1 && handlerArr[i][1].value.indexOf('.')== -1)
                handlerArr[i][1].value += ',0';
            if(handlerArr[i][1].value[handlerArr[i][1].value.length - 1] == '.' || handlerArr[i][1].value[handlerArr[i][1].value.length - 1] == ',')
                handlerArr[i][1].value += '0';

            if(handlerArr[i][1].value.search(regExBroken) != -1){
            
                if(handlerArr[i][1].value.indexOf(',')!= -1) handlerArr[i][1].value = handlerArr[i][1].value.replace(/\,/, '.');

            if(parseFloat(handlerArr[i][1].value) >= 0 && parseFloat(handlerArr[i][1].value) <= 3){
                dataToSave[i].IPShPT = parseFloat(handlerArr[i][1].value);
                pressedBtnsPojCount_sbt4[`IPShPT${i}`] = true;
                handlerArr[i][1].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                if( dataToSave[i].ADRShPT != '' &&
                    dataToSave[i].IPShPT >= 1 ){
                        handlerArr[i][6].checked = true;
                        dataToSave[i].configured = true;
                }
                else{
                    handlerArr[i][6].checked = false;
                    dataToSave[i].configured = false;
                }
                console.log("IPShPT: " + dataToSave[i].IPShPT);
            }
            else if(handlerArr[i][1].value == ""){
                pressedBtnsPojCount_sbt4[`IPShPT${i}`] = false;
                return;
            }
            else
                {
                    handlerArr[i][1].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                }
            }
            else
                handlerArr[i][1].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
        }); 
        
    }
}


// //ExShPT
function setExShPT(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
            handlerArr[i][2].addEventListener('click', ()=>{
                    if(handlerArr[i][2].checked)
                    { 
                        dataToSave[i].ExShPT = true;
                        if(handlerArr[i][4].value == "")
                            pressedBtnsPojCount_sbt4[`TBIZShPT${i}`] = false;
                        handlerArr[i][3].style.display = 'block';    
                        handlerArr[i][4].style.display = 'block';  
                        while(handlerArr[i][5].firstChild)
                            handlerArr[i][5].removeChild(handlerArr[i][5].firstChild);
                        
                        let oOption = document.createElement("option");
                        // oOption.appendChild(document.createTextNode("Выберите тип:"));
                        // oOption.setAttribute("value", "");
                        // handlerArr[i][5].appendChild(oOption);   
                    
                        for (let j = 0; j < IntermediateModules.length; j++) {
                            for(let prop in IntermediateModules[j]){
                                if(IntermediateModules[j][prop] == "BIZ"){
                                    oOption = document.createElement("option")
                                    //oOption.appendChild(document.createTextNode(IntermediateModules[j].name));
                                    oOption.setAttribute("value", IntermediateModules[j].name);
                                    handlerArr[i][5].appendChild(oOption);   
                                }
                            }        
                        }
                        if( handlerArr[i][6].checked ){
                            handlerArr[i][6].checked = false;  
                            dataToSave[i].configured = false;
                        }
                        //handlerArr[i][5].style.display = 'block';    
                    }
                    else  {
                        dataToSave[i].ExShPT = false;
                        pressedBtnsPojCount_sbt4[`TBIZShPT${i}`] = true;
                        handlerArr[i][3].style.display = 'none';
                        while(handlerArr[i][5].firstChild)
                            handlerArr[i][5].removeChild(handlerArr[i][5].firstChild);
                        handlerArr[i][5].style.display = 'none';
                    }
            }); 
    }
}

// //TBIZShPT
function setTBIZShPT(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][4].addEventListener('focus', ()=>{
            handlerArr[i][4].style.boxShadow = 'none';
            });
            
            handlerArr[i][4].addEventListener('blur', (e)=>{
            if(handlerArr[i][4].value == ""){
                let flag = confirm("Взрывозащита типа \"d\"");
                if(flag)
                {
                    dataToSave[i].TBIZShPT  = "Взрывозащита типа \"d\"";
                    handlerArr[i][4].value = "Взрывозащита типа \"d\"";
                    pressedBtnsPojCount_sbt4[`TBIZShPT${i}`] = true;
                    console.log("TBIZShPT: " + dataToSave[i].TBIZShPT);
                    //TBIZShPT.style.display = 'none';

                    //handlerArr[i][5].style.display = 'none';
                    e.preventDefault();

                    if( dataToSave[i].ADRShPT != '' &&
                    dataToSave[i].IPShPT >= 1 ){
                        handlerArr[i][6].checked = true;
                        dataToSave[i].configured = true;
                    }
                    else{    
                        handlerArr[i][6].checked = false;
                        dataToSave[i].configured = false;
                    }
                    list = false
                    return;
                }
                handlerArr[i][4].style.boxShadow = 'none';
                pressedBtnsPojCount_sbt4[`TBIZShPT${i}`] = false;
                //handlerArr[i][5].style.display = 'block';
                return;
            }
            else if(handlerArr[i][4].value.length <= 20){
                dataToSave[i].TBIZShPT = handlerArr[i][4].value;
                pressedBtnsPojCount_sbt4[`TBIZShPT${i}`] = true;
                handlerArr[i][4].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                if( dataToSave[i].ADRShPT != '' &&
                dataToSave[i].IPShPT >= 1 ){
                    handlerArr[i][6].checked = true;
                    dataToSave[i].configured = true;
                }
                else{    
                    handlerArr[i][6].checked = false;
                    dataToSave[i].configured = false;
                }

                console.log("АдрИзв: " + dataToSave[i].TBIZShPT + " L: " + dataToSave[i].TBIZShPT);
            }
            else
            handlerArr[i][4].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
        });
    }   
}




// //-----------------------------Подсистема управления оповещением-----------------------------//
const KZONOP = document.getElementById('KZONOP'),
        REZShO = document.getElementById('REZShO');


//         TBIZOPSh.style.display = 'none';
const   sbtForm5 = document.getElementById('sbtForm5'),
        lineLoopBtnsUprOp = document.getElementById('lineLoopBtnsUprOp'),
        lineLoopPrevUprOp = document.getElementById('lineLoopPrevUprOp'),
        lineLoopPosUprOp = document.getElementById('lineLoopPosUprOp'),
        lastPosUprOp = document.getElementById('lastPosUprOp'),
        lineLoopNextUprOp = document.getElementById('lineLoopNextUprOp');

let pressedBtnsOpCount = [];
pressedBtnsOpCount['KZONOP'] = false;
pressedBtnsOpCount['REZShO'] = false;

        lineLoopBtnsUprOp.style.display = 'none';

lineLoopPrevUprOp.addEventListener('click', ()=>{
            if(prevIndexUprOp < 1) prevIndexUprOp = lineLoopsUprOp.length;
            nextIndexUprOp = curPosUprOp;
            curPosUprOp = prevIndexUprOp;
            prevIndexUprOp--;
            if(prevIndexUprOp < 1) prevIndexUprOp = lineLoopsUprOp.length;
            lineLoopPosUprOp.value = curPosUprOp;
            hideZonaOp(lineLoopsUprOp.length);
            showLineLoopsRuchn('_ZonaOpoveshenia_' + (curPosUprOp - 1));
            hideAll();
    
    });
    
    lineLoopNextUprOp.addEventListener('click', ()=>{
                if(nextIndexUprOp > lineLoopsUprOp.length ) nextIndexUprOp = 1;
                prevIndexUprOp = curPosUprOp;
                curPosUprOp = nextIndexUprOp;
                nextIndexUprOp++;
                if(nextIndexUprOp > lineLoopsUprOp.length) nextIndexUprOp = 1;
                lineLoopPosUprOp.value = curPosUprOp;
                hideZonaOp(lineLoopsUprOp.length);
                showLineLoopsRuchn('_ZonaOpoveshenia_' + (curPosUprOp - 1));
                hideAll();
    });
    
    
    lineLoopPosUprOp.addEventListener('blur', ()=>{
        curPosUprOp = parseInt(lineLoopPosUprOp.value, 10);
        if(curPosUprOp + 1 > lineLoopsUprOp.length + 1){
            nextIndexUprOp  = 1;
            prevIndexUprOp  = curPosUprOp - 1;
        }
        else if(curPosUprOp - 1 < 1){
            prevIndexUprOp = lineLoopsUprOp.length;
            nextIndexUprOp = curPosUprOp + 1;
        }
        else{
            prevIndexUprOp  = curPosUprOp - 1;
            nextIndexUprOp  = curPosUprOp + 1;
        }
        hideZonaOp(lineLoopsUprOp.length);
        showLineLoopsRuchn('_ZonaOpoveshenia_' + (curPosUprOp - 1));
        hideAll();
    });

function hideZonaOp(KZONOP){
    for (let i = 0; i < KZONOP; i++) {
        document.querySelector('#_ZonaOpoveshenia_' + i).style.display = 'none';
    }
}
// //KZONOP

KZONOP.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

KZONOP.addEventListener('focus', ()=>{
    KZONOP.style.boxShadow = 'none';
});

KZONOP.addEventListener('blur', ()=>{
   if(KZONOP.value.search(regEx) == -1){
   if(parseInt(KZONOP.value, 10) >= 1 && parseInt(KZONOP.value, 10) <= 64){
    pressedBtnsOpCount['KZONOP'] = true;
       UpravlenieOpovesheniem.KZONOP = parseInt(KZONOP.value, 10);
       KZONOP.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       console.log("KZONOP: "+ UpravlenieOpovesheniem.KZONOP);
   }
   else if(KZONOP.value == ""){
    pressedBtnsOpCount['KZONOP'] = false;
       UpravlenieOpovesheniem.KZONOP= 0;
       console.log("KZONOP: "+  UpravlenieOpovesheniem.KZONOP);
       return;
   }
   else
       {
        KZONOP.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
    KZONOP.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';  
});


// //REZShO
REZShO.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

REZShO.addEventListener('focus', ()=>{
    REZShO.style.boxShadow = 'none';
});

REZShO.addEventListener('blur', ()=>{
   if(REZShO.value.search(regEx) == -1){
   if(parseInt(REZShO.value, 10) >= 0 && parseInt(REZShO.value, 10) <= 100){
       UpravlenieOpovesheniem.REZShO = parseInt(REZShO.value, 10);
       pressedBtnsOpCount['REZShO'] = true;
       REZShO.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       console.log("REZShO: "+ UpravlenieOpovesheniem.REZShO);
   }
   else if(REZShO.value == ""){
    pressedBtnsOpCount['REZShO'] = false;
       UpravlenieOpovesheniem.REZShO= 0;
       console.log("REZShO: "+  UpravlenieOpovesheniem.REZShO);
       return;
   }
   else
       {
        REZShO.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
    REZShO.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';  
});

let lineLoopsUprOp = [], dynamicEventHandlersUprOp = [], lineLoopsDataUprOp = [];
let curPosUprOp, prevIndexUprOp, nextIndexUprOp;

function initLineLoopsUprOp(){
    for (let i = 0; i < 64; i++) {
        lineLoopsUprOp[i] = UpravlenieOpovesheniem.ZonaOpoveshenia;
    }
}
initLineLoopsUprOp();

let pressedBtnsOpCount_sbt5 = [];

let pressedBtnsOpCount_Shleif = [];

let pressedBtnsOpCount_Opoveshatel = [];

sbtForm5.addEventListener('click', (e) =>{
    e.preventDefault();
    if(UpravlenieOpovesheniem.KZONOP && isThereFalse(pressedBtnsOpCount)){
        // console.log(pressedBtnsPojCount_sbt4)
        // console.log(pressedBtnsPojCount)
        //alert('Сконфигурировано!');
        lineLoopBtnsUprOp.style.display = 'block';
        lineLoopsUprOp.length = UpravlenieOpovesheniem.KZONOP ;
        // for (let i = 0; i < lineLoopsUpr.length; i++) {
        //     lineLoopsUprOp[i] = UpravlenieOpovesheniem.ZonaOpoveshenia;
        // }
        createlineLoopUprOp(UpravlenieOpovesheniem.KZONOP);
        // let lastPosUpr = document.getElementById('lastPosUpr'),
        //     lineLoopPosUpr = document.getElementById('lineLoopPosUpr');

        lastPosUprOp.innerHTML = 'из ' + lineLoopsUprOp.length;
        lineLoopPosUprOp.min = 1;
        lineLoopPosUprOp.max = lineLoopsUprOp.length;
        lineLoopPosUprOp.value = 1;
        curPosUprOp = 1;
        prevIndexUprOp = lineLoopsUprOp.length;
        nextIndexUprOp = curPosUprOp + 1;
        
        if(lineLoopsUprOp.length){
            for (let i = 0; i < lineLoopsUprOp.length; i++) {
                for (let j = 0; j < 28; j++) {
                    dynamicEventHandlersUprOp[i] = [];
                }

            }
         }

        setDynHandlersUprOp(dynamicEventHandlersUprOp, lineLoopsUprOp.length);
        
        showLineLoopsRuchn('_ZonaOpoveshenia_' + (curPosUprOp - 1));
        //hideAutoObnarUpr();
        if(lineLoopsUprOp.length){
            for (let i = 0; i < lineLoopsUprOp.length; i++) {                
                lineLoopsDataUprOp[i] = Object.assign({}, UpravlenieOpovesheniem.ZonaOpoveshenia);
                pressedBtnsOpCount_sbt5[`ZONAShOP${i}`] = false;
                pressedBtnsOpCount_sbt5[`ADRShOP${i}`] = false;
                pressedBtnsOpCount_sbt5[`KShOPZONY${i}`] = false;
                //dynamicEventHandlersUprOp[i][5].style.display = 'none';
            }
         }

            //lineLoopConf = document.getElementById('lineLoopKonf');
            setZONAShOP(dynamicEventHandlersUprOp, lineLoopsUprOp.length, lineLoopsDataUprOp);
            setADRShOP(dynamicEventHandlersUprOp, lineLoopsUprOp.length, lineLoopsDataUprOp);
            setKShOPZONY(dynamicEventHandlersUprOp, lineLoopsUprOp.length, lineLoopsDataUprOp);
            setDlgZonaOp(dynamicEventHandlersUprOp, lineLoopsUprOp.length, lineLoopsDataUprOp);
            //setCheckboxUpr(dynamicEventHandlersUpr, lineLoopsUpr.length, lineLoopsDataUpr);

            
    }
    else
        alert('Конфигурация не завершена! Пропущены данные.');
});

// //ZONAShOP
function setZONAShOP(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        
        handlerArr[i][0].onkeypress = (e)=>{
            e = e || event;
        if (e.ctrlKey || e.altKey || e.metaKey) return;
        var chr = getChar(e);
        console.log("Char pressed: " + chr);
        if(chr == ',' || chr == '.')
        {   
            // iKShS.value.replace(/[\,|\.]+/g,'');
            e.preventDefault();
            return;
        }
        if(chr == null) return;

        if (chr < '0' || chr > '9') {
            return false;
        }
        };

        handlerArr[i][0].addEventListener('focus', ()=>{
                handlerArr[i][0].style.boxShadow = 'none';
            });

            handlerArr[i][0].addEventListener('blur', ()=>{
                if( handlerArr[i][0].value.search(regEx) == -1){
                if(parseInt( handlerArr[i][0].value, 10) >= 1 && parseInt( handlerArr[i][0].value, 10) <= UpravlenieOpovesheniem.KZONOP){
                    dataToSave[i].ZONAShOP = parseInt( handlerArr[i][0].value, 10);
                    pressedBtnsOpCount_sbt5[`ZONAShOP${i}`] = true;
                    handlerArr[i][0].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                    console.log(i + "-ZONAShOP: " + dataToSave[i].ZONAShOP);

                    // for (let i = 0; i < AutoSignalizatsiya.KShS; i++) {
                    //     for (let j = 0; j < array.length; j++) {
                    //         _izveshateli[i] = [];                            
                    //     }                       
                        
                    // }

                }
                else if( handlerArr[i][0].value == ""){
                    pressedBtnsOpCount_sbt5[`ZONAShOP${i}`] = false;
                    return;
                }
                else
                    {
                        handlerArr[i][0].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                    }
                }
                else
                    handlerArr[i][0].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
            }); 
    }  
}


// //ADRShOP

function setADRShOP(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][1].addEventListener('focus', ()=>{
                handlerArr[i][1].style.boxShadow = 'none';
            });

            handlerArr[i][1].addEventListener('blur', ()=>{
                if(handlerArr[i][1].value == ""){ 
                    pressedBtnsOpCount_sbt5[`ADRShOP${i}`] = false;
                    handlerArr[i][1].style.boxShadow = 'none';
                    return;
                }
                else if(handlerArr[i][1].value.length <= 20){
                    dataToSave[i].ADRShOP = handlerArr[i][1].value;
                    pressedBtnsOpCount_sbt5[`ADRShOP${i}`] = true;
                    handlerArr[i][1].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                    console.log(i + " ADRShOP: " + dataToSave[i].ADRShOP + " L: " + dataToSave[i].ADRShOP.length);
                }
                else
                    handlerArr[i][1].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
            });
    }
}


// //KShOPZONY

function setKShOPZONY(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        
        handlerArr[i][2].onkeypress = (e)=>{
            e = e || event;
        if (e.ctrlKey || e.altKey || e.metaKey) return;
        var chr = getChar(e);
        console.log("Char pressed: " + chr);
        if(chr == ',' || chr == '.')
        {   
            // iKShS.value.replace(/[\,|\.]+/g,'');
            e.preventDefault();
            return;
        }
        if(chr == null) return;

        if (chr < '0' || chr > '9') {
            return false;
        }
        };

        handlerArr[i][2].addEventListener('focus', ()=>{
                handlerArr[i][2].style.boxShadow = 'none';
            });

            handlerArr[i][2].addEventListener('blur', ()=>{
                if( handlerArr[i][2].value.search(regEx) == -1){
                if(parseInt( handlerArr[i][2].value, 10) >= 1 && parseInt( handlerArr[i][2].value, 10) <= 480){
                    dataToSave[i].KShOPZONY = parseInt( handlerArr[i][2].value, 10);
                    handlerArr[i][2].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                    pressedBtnsOpCount_sbt5[`KShOPZONY${i}`] = true;
                    console.log(i + "-KShOPZONY: " + dataToSave[i].KShOPZONY);
                    
                    
                    // for (let i = 0; i < AutoSignalizatsiya.KShS; i++) {
                    //     for (let j = 0; j < array.length; j++) {
                    //         _izveshateli[i] = [];                            
                    //     }                       
                        
                    // }

                }
                else if( handlerArr[i][2].value == ""){
                    pressedBtnsOpCount_sbt5[`KShOPZONY${i}`] = false;
                    return;
                }
                else
                    {
                        handlerArr[i][2].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                    }
                }
                else
                    handlerArr[i][2].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
            }); 
    }  
}


// переменные для перемещения по извещателям
let curPosShleifOp = [], nextPosShleifOp = [], prevPosShleifOp = [], PositionShleifOp = [];
let BtnsIDShleifOp = [], LasPosShleifOp = [], LastSpanShleifOp = [], BtnsNextShleifOp = [], BtnsPrevShleifOp = [],
_ShleifOp = [], dynamicEvHandlerShleifOp, currentZonaOp;
//_ShleifOp = genIzvHandlers(64, 480, 4);

function initShleifOp(){
    _ShleifOp = genIzvHandlers(64, 480, 4);
}
initShleifOp();

function setDlgZonaOp(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][3].addEventListener('click', (e) => {
            e.preventDefault();
            if(dataToSave[i].KShOPZONY >= 1 
                && pressedBtnsOpCount_sbt5[`ZONAShOP${i}`]
                && pressedBtnsOpCount_sbt5[`ADRShOP${i}`]
                && pressedBtnsOpCount_sbt5[`KShOPZONY${i}`]){

                createShleifOp(i,dataToSave[i].KShOPZONY);

                for (let j = 0; j < dataToSave[i].KShOPZONY; j++) {
                    curPosShleifOp[i] = [];
                    nextPosShleifOp[i] = [];
                    prevPosShleifOp[i] = [];

                    pressedBtnsOpCount_Shleif[`KOPSh${i}-${j}`] = false;
                    pressedBtnsOpCount_Shleif[`IPOPSh${i}-${j}`] = false;
                    pressedBtnsOpCount_Shleif[`TBIZOPSh${i}-${j}`] = true;
                    
                }
                dynamicEvHandlerShleifOp = genIzvHandlers(lineLoopsUprOp.length, lineLoopsDataUprOp[i].KShOPZONY, 10);
                

                BtnsIDShleifOp[i] = document.getElementById(`BtnsIDShleifOp${i}`);
                LasPosShleifOp[i] = document.getElementById(`LasPosShleifOp${i}`);
                LastSpanShleifOp[i] = document.getElementById(`LastSpanShleifOp${i}`);
                BtnsNextShleifOp[i] = document.getElementById(`BtnsNextShleifOp${i}`);
                BtnsPrevShleifOp[i] = document.getElementById(`BtnsPrevShleifOp${i}`);

                PositionShleifOp[curPosShleifOp - 1] = 0;

                setHandlersShleifOp(dynamicEvHandlerShleifOp, i, dataToSave);
                
                for (let j = 0; j < lineLoopsDataUprOp[i].KShOPZONY; j++) {
                    dynamicEvHandlerShleifOp[i][j][3].style.display = 'none';
                }
                
                for (let k = 0; k < dataToSave[i].KIZVShS; k++) {
                    console.log( dynamicEvHandlerIZV);
                    
                }
                //hideIzv(dynamicEvHandlerIZV, i, dataToSave);

                // dynamicEvHandlerIZV[i][0][12].min = 1;
                // dynamicEvHandlerIZV[i][0][12].max = dataToSave[i].KIZVShS;

                curPosShleifOp[i][0] = 0;
                currentZonaOp = curPosShleifOp[i][0];
                nextPosShleifOp[i][0] = 1;
                prevPosShleifOp[i][0] = dataToSave[i].KShOPZONY - 1;
                LastSpanShleifOp[i].innerHTML = ' из ' + dataToSave[i].KShOPZONY;
                LasPosShleifOp[i].value =  curPosShleifOp[i][0] + 1;
                LasPosShleifOp[i].min = 1;
                LasPosShleifOp[i].max = dataToSave[i].KShOPZONY;


                hideIzvOp(curPosUprOp, lineLoopsDataUprOp[i].KShOPZONY);
                showOp( curPosUprOp - 1, curPosShleifOp[i]);
                // if(dataToSave[i].TShS == 0 && dataToSave[i].ExShS == false){
                //     showIzvAdrExNet(dynamicEvHandlerIZV, i, 0);
                // }
                // else if(dataToSave[i].TShS == 0 && dataToSave[i].ExShS == true){
                //     showIzvAdrExDa(dynamicEvHandlerIZV, i, 0);
                // }




                handlePrevShleifOp(i, dataToSave[curPosUprOp-1].KShOPZONY, LasPosShleifOp, BtnsPrevShleifOp, dynamicEvHandlerShleifOp,
                    dataToSave, curPosShleifOp, nextPosShleifOp, prevPosShleifOp);
                handleNextShleifOp(i, dataToSave[curPosUprOp-1].KShOPZONY,  LasPosShleifOp, BtnsNextShleifOp, dynamicEvHandlerShleifOp,
                    dataToSave, curPosShleifOp, nextPosShleifOp, prevPosShleifOp);
                handleOpPos(i, dataToSave[curPosUprOp-1].KShOPZONY, LasPosShleifOp,  dynamicEvHandlerShleifOp, dataToSave,
                    curPosShleifOp, nextPosShleifOp, prevPosShleifOp);

                setKOPSh(dynamicEvHandlerShleifOp, lineLoopsUprOp.length, dataToSave[i].KShOPZONY, _ShleifOp);
                setIPOPSh(dynamicEvHandlerShleifOp, lineLoopsUprOp.length, dataToSave[i].KShOPZONY, _ShleifOp);
                setExOPSh(dynamicEvHandlerShleifOp, lineLoopsUprOp.length, dataToSave[i].KShOPZONY, _ShleifOp);
                setTBIZOPSh(dynamicEvHandlerShleifOp, lineLoopsUprOp.length, dataToSave[i].KShOPZONY, _ShleifOp);
                setDlgOpoveshatel(dynamicEvHandlerShleifOp, lineLoopsUprOp.length, dataToSave[i].KShOPZONY, _ShleifOp);               
                
            }
            else{
                handlerArr[i][2].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
            }
        });   
    }
}

// //KOPSh
function setKOPSh(handlerArr, size, KShOPZONY, dataToSave){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < KShOPZONY; j++) {
                if(handlerArr[i][j][0]){
                    handlerArr[i][j][0].onkeypress = (e)=>{
                        e = e || event;
                        if (e.ctrlKey || e.altKey || e.metaKey) return;
                        var chr = getChar(e);
                        console.log("Char pressed: " + chr);
                        if(chr == ',' || chr == '.')
                        {   
                            // iKShS.value.replace(/[\,|\.]+/g,'');
                            e.preventDefault();
                            return;
                        }
                        if(chr == null) return;
        
                        if (chr < '0' || chr > '9') {
                            return false;
                        }
                    };
                

                
                    handlerArr[i][j][0].addEventListener('focus', ()=>{
                        handlerArr[i][j][0].style.boxShadow = 'none';
                    });
                

                handlerArr[i][j][0].addEventListener('blur', ()=>{
                    if(handlerArr[i][j][0].value.search(regEx) == -1){
                    if(parseInt(handlerArr[i][j][0].value, 10) >= 1 && parseInt(handlerArr[i][j][0].value, 10) <= 480){
                        dataToSave[i][j][0] = parseInt(handlerArr[i][j][0].value, 10);
                        handlerArr[i][j][0].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                        pressedBtnsOpCount_Shleif[`KOPSh${i}-${j}`] = true;
                        console.log(j + " КОПШ: " + dataToSave[i][j][0]);
                    }
                    else if(handlerArr[i][j][0].value == ""){
                        pressedBtnsOpCount_Shleif[`KOPSh${i}-${j}`] = false;
                        return;
                    }
                    else
                        {
                            handlerArr[i][j][0].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                        }
                    }
                    else
                        handlerArr[i][j][0].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                });
            }
        }
    }
}


// //IPOPSh
function setIPOPSh(handlerArr, size, KShOPZONY, dataToSave){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < KShOPZONY; j++) {
            if(handlerArr[i][j][1]){
                handlerArr[i][j][1].onkeypress = (e)=>{
                    e = e || event;
                   if (e.ctrlKey || e.altKey || e.metaKey) return;
                   var chr = getChar(e);
                   console.log("Char pressed: " + chr);
                   if(chr == ',' || chr == '.')
                   {   
                       let count = 0, pos = -1;
                       if(chr == ',' || chr == '.'){
                            if(handlerArr[i][j][1].value.indexOf('.') == -1)
                            {
                                while((pos = handlerArr[i][j][1].value.indexOf(',', pos + 1 )) != -1){
                                    count++;
                                }
                                if(count >= 1) {e.preventDefault(); count = 0; return;}
                                else { count = 0;  }
                            }
                            else
                            {
                                while((pos = handlerArr[i][j][1].value.indexOf('.', pos + 1 )) != -1){
                                    count++;
                                }
                                if(count >= 1) {e.preventDefault(); count = 0; return;}
                                else  { count = 0;  }   
                            }
                       }
        
                       return;
                   }
                   if(chr == null) return;
        
                   if (chr < '0' || chr > '9') {
                       return false;
                   }
                };
        
                handlerArr[i][j][1].addEventListener('focus', ()=>{
                    handlerArr[i][j][1].style.boxShadow = 'none';
                });
        
                handlerArr[i][j][1].addEventListener('blur', ()=>{
                    if(handlerArr[i][j][1].value.indexOf(',')== -1 && handlerArr[i][j][1].value.indexOf('.')== -1)
                        handlerArr[i][j][1].value += ',0';
                    if(handlerArr[i][j][1].value[handlerArr[i][j][1].value.length - 1] == '.' || handlerArr[i][j][1].value[handlerArr[i][j][1].value.length - 1] == ',')
                        handlerArr[i][j][1].value += '0';
        
                    if(handlerArr[i][j][1].value.search(regExBroken) != -1){
                    
                        if(handlerArr[i][j][1].value.indexOf(',')!= -1) handlerArr[i][j][1].value = handlerArr[i][j][1].value.replace(/\,/, '.');
        
                    if(parseFloat(handlerArr[i][j][1].value) >= 0 && parseFloat(handlerArr[i][j][1].value) <= 20){
                        dataToSave[i][j][1] = parseFloat(handlerArr[i][j][1].value);
                        pressedBtnsOpCount_Shleif[`IPOPSh${i}-${j}`] = true;
                        handlerArr[i][j][1].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                        // if( dataToSave[i].ADRShPT != '' &&
                        //     dataToSave[i].IPShPT >= 1 ){
                        //         handlerArr[i][6].checked = true;
                        //         dataToSave[i].configured = true;
                        // }
                        // else{
                        //     handlerArr[i][6].checked = false;
                        //     dataToSave[i].configured = false;
                        // }
                        console.log("IPOPSh: " +  dataToSave[i][j][1]);
                    }
                    else if(handlerArr[i][j][1].value == ""){
                        pressedBtnsOpCount_Shleif[`IPOPSh${i}-${j}`] = false;
                        return;
                    }
                    else
                        {
                            handlerArr[i][j][1].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                        }
                    }
                    else
                        handlerArr[i][j][1].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                }); 
            }
        }
    }
}


// //ExOPSh
function setExOPSh(handlerArr, size, KShOPZONY, dataToSave){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < KShOPZONY; j++) {
            if(handlerArr[i][j][2]){
                handlerArr[i][j][2].addEventListener('click', ()=>{
                    if(handlerArr[i][j][2].checked)
                    { 
                        dataToSave[i][j][2] = true;
                        if(handlerArr[i][j][4].value == "")
                            pressedBtnsOpCount_Shleif[`TBIZOPSh${i}-${j}`] = false;
                        handlerArr[i][j][3].style.display = 'block';    
                        while(handlerArr[i][j][5].firstChild)
                            handlerArr[i][j][5].removeChild(handlerArr[i][j][5].firstChild);
                        
                        let oOption = document.createElement("option");
                        //oOption.appendChild(document.createTextNode("Выберите тип:"));
                        //oOption.setAttribute("value", "");
                        //handlerArr[i][j][5].appendChild(oOption);   
                    
                        for (let k = 0; k < IntermediateModules.length; k++) {
                            for(let prop in IntermediateModules[k]){
                                if(IntermediateModules[k][prop] == "O"){
                                    oOption = document.createElement("option")
                                    //oOption.appendChild(document.createTextNode(IntermediateModules[k].name));
                                    oOption.setAttribute("value", IntermediateModules[k].name);
                                    handlerArr[i][j][5].appendChild(oOption);   
                                }
                            }        
                        }
                        //handlerArr[i][j][5].style.display = 'block';    
                    }
                    else  {
                        dataToSave[i][j][2] = false;
                        pressedBtnsOpCount_Shleif[`TBIZOPSh${i}-${j}`] = true;
                        handlerArr[i][j][3].style.display = 'none';
                        while(handlerArr[i][j][5].firstChild)
                            handlerArr[i][j][5].removeChild(handlerArr[i][j][5].firstChild);
                        handlerArr[i][j][5].style.display = 'none';
                    }
                });
            }
        }
    }
}


// //TBIZOPSh
function setTBIZOPSh(handlerArr, size, KShOPZONY, dataToSave){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < KShOPZONY; j++) {
            if(handlerArr[i][j][4]){
                handlerArr[i][j][4].addEventListener('focus', ()=>{
                    handlerArr[i][j][4].style.boxShadow = 'none';
                    });
                    
                    handlerArr[i][j][4].addEventListener('blur', (e)=>{
                    if(handlerArr[i][j][4].value == ""){
                        let flag = confirm("Взрывозащита типа \"d\"");
                        if(flag)
                        {
                            dataToSave[i][j][4]  = "Взрывозащита типа \"d\"";
                            handlerArr[i][j][4].value = "Взрывозащита типа \"d\"";
                            pressedBtnsOpCount_Shleif[`TBIZOPSh${i}-${j}`] = true;
                            console.log("TBIZOPSh: " + dataToSave[i][j][4]);
                            //TBIZOPSh.style.display = 'none';

                            //TBIZOPSh_Select.style.display = 'none';
                            e.preventDefault();
                            return;
                        }
                        pressedBtnsPojCount_Shleif[`TBIZOPSh${i}-${j}`] = false;
                        return;
                    }
                    else if(handlerArr[i][j][4].value.length <= 20){
                        dataToSave[i][j][4] = handlerArr[i][j][4].value;
                        pressedBtnsOpCount_Shleif[`TBIZOPSh${i}-${j}`] = true;
                        handlerArr[i][j][4].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                        console.log("TBIZOPSh: " + dataToSave[i][j][4] + " L: " + dataToSave[i][j][4].length);
                    }
                    else
                    handlerArr[i][j][4].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                });
            }
        }
    }
}


let curPosOp = [], nextPosOp = [], prevPosOp = [], PositionOp = [];
let BtnsIDOp = [], LasPosOp = [], LastSpanOp = [], BtnsNextOp = [], BtnsPrevOp = [],
 dynamicEvHandlerOp;
let _Opoveshateli = genIzvHandlers(64, 480, 100, 2);
//dynamicEvHandlerOp = genIzvHandlers(64, 480, 100, 3);
initBtnsOp();
//_Opoveshateli = genIzvHandlers(64, 480, 100, 2);

function setDlgOpoveshatel(handlerArr, size, KShOPZONY, dataToSave){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < KShOPZONY; j++) {
                if(handlerArr[i][j][6]){
                handlerArr[i][j][6].addEventListener('click', (e) => {
                    e.preventDefault();
                    if(dataToSave[i][j][0] >= 1){
                      //  for (let z = 0; z < dataToSave[i][j][0]; z++) {
                            
                            
                        createOpoveshatel(i, j, dataToSave[i][j][0]);
                        
                            for (let k = 0; k < dataToSave[i][j][0]; k++) {
                                curPosOp[j] = [];
                                nextPosOp[j] = [];
                                prevPosOp[j] = [];
                                
                                pressedBtnsOpCount_Opoveshatel[`ADROP${i}-${j}-${k}`] = false;
                                pressedBtnsOpCount_Opoveshatel[`IPOP${i}-${j}-${k}`] = false;

                            }
                        dynamicEvHandlerOp = genIzvHandlers(size, lineLoopsDataUprOp[i].KShOPZONY, dataToSave[i][j][0], 3);
                        
        


                        BtnsIDOp[i][j] = document.getElementById(`BtnsIDOp${i}_${j}`);
                        LasPosOp[i][j] = document.getElementById(`LasPosOp${i}_${j}`);
                        LastSpanOp[i][j] = document.getElementById(`LastSpanOp${i}_${j}`);
                        BtnsNextOp[i][j] = document.getElementById(`BtnsNextOp${i}_${j}`);
                        BtnsPrevOp[i][j] = document.getElementById(`BtnsPrevOp${i}_${j}`);
        
                        //PositionShleifOp[curPosShleifOp - 1] = 0;
        
                        setHandlersOp(dynamicEvHandlerOp, i, j, dataToSave);
                        
    
                        

                        //hideIzv(dynamicEvHandlerIZV, i, dataToSave);
        
                        // dynamicEvHandlerIZV[i][0][12].min = 1;
                        // dynamicEvHandlerIZV[i][0][12].max = dataToSave[i].KIZVShS;
        
                        curPosOp[j][0] = 0;
                        nextPosOp[j][0] = 1;
                        prevPosOp[j][0] = dataToSave[i][j][0] - 1;
                        LastSpanOp[i][j].innerHTML = ' из ' + dataToSave[i][j][0];
                        LasPosOp[i][j].value =  curPosOp[j][0] + 1;
                        LasPosOp[i][j].min = 1;
                        LasPosOp[i][j].max = dataToSave[i][j][0];
                        
                        hideOp( UpravlenieOpovesheniem.KZONOP, lineLoopsDataUprOp[i].KShOPZONY, dataToSave[i][j][0]);
                        showOp1(i, j, curPosOp[j]);
                        let opLength = dataToSave[i][j][0];
                        // hideIzvOp(curPosUprOp, lineLoopsDataUprOp[i].KShOPZONY);
                        // showOp( curPosUprOp - 1, curPosShleifOp[i]);
                        // // if(dataToSave[i].TShS == 0 && dataToSave[i].ExShS == false){
                        // //     showIzvAdrExNet(dynamicEvHandlerIZV, i, 0);
                        // // }
                        // // else if(dataToSave[i].TShS == 0 && dataToSave[i].ExShS == true){
                        // //     showIzvAdrExDa(dynamicEvHandlerIZV, i, 0);
                        // // }
        
                        handlePrevOp(i, j, opLength, LasPosOp, BtnsPrevOp, dynamicEvHandlerOp,
                            opLength, curPosOp, nextPosOp, prevPosOp);
                        handleNextOp(i, j, opLength,  LasPosOp, BtnsNextOp, dynamicEvHandlerOp,
                            opLength, curPosOp, nextPosOp, prevPosOp);
                        handleOpPosOp(i, j, opLength, LasPosOp,  dynamicEvHandlerOp, opLength,
                            curPosOp, nextPosOp, prevPosOp);
        
                         setADROP(dynamicEvHandlerOp, lineLoopsUprOp.length, lineLoopsDataUprOp[i].KShOPZONY, dataToSave[i][j][0], _Opoveshateli);
                         setIPOP(dynamicEvHandlerOp, lineLoopsUprOp.length, lineLoopsDataUprOp[i].KShOPZONY, dataToSave[i][j][0], _Opoveshateli);
                        // setExOPSh(dynamicEvHandlerShleifOp, lineLoopsUprOp.length, dataToSave[i].KShOPZONY, _ShleifOp);
                        // setTBIZOPSh(dynamicEvHandlerShleifOp, lineLoopsUprOp.length, dataToSave[i].KShOPZONY, _ShleifOp);
                        // setDlgOpoveshatel(dynamicEvHandlerShleifOp, lineLoopsUprOp.length, dataToSave[i].KShOPZONY, _ShleifOp);               
                        //}
                    }
                    else{
                        //handlerArr[i][2].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                    }
                });
            }
        }
    }
}

function initBtnsOp(){
            for (let x = 0; x < 64; x++) {
                    for (let y = 0; y < 480; y++) {
                        BtnsIDOp[x] = [];
                        LasPosOp[x] = [];
                        LastSpanOp[x] = [];
                        BtnsNextOp[x] = [];
                        BtnsPrevOp[x] = [];
                        
                    }
                           
            }     
}

function hideOp(indexZona, indexShleif, kopsh){
    for (let i = 0; i < indexZona; i++) {
        for (let j = 0; j < indexShleif; j++) {
            for (let k = 0; k < kopsh; k++) {
                if(document.querySelector(`#Opoveshatel${i}_${j}_${k}`))
                document.querySelector(`#Opoveshatel${i}_${j}_${k}`).style.display = 'none';   
            }
           
        }   
    }
}

function hideAll(){
    if(UpravlenieOpovesheniem.KZONOP){
        for (let i = 0; i < UpravlenieOpovesheniem.KZONOP; i++) {
            if(lineLoopsDataUprOp[i].KShOPZONY){
                for (let j = 0; j < lineLoopsDataUprOp[i].KShOPZONY; j++) {
                   if(_ShleifOp[i][j][0]){
                       for (let k = 0; k < _ShleifOp[i][j][0]; k++) {
                        if(document.querySelector(`#Opoveshatel${i}_${j}_${k}`))
                        document.querySelector(`#Opoveshatel${i}_${j}_${k}`).style.display = 'none';       
                       }
                   }
                }
            }
            
        }
    }
}

function showOp1(indexZona, indexShleif, opoveshatel){
    if(document.querySelector(`#Opoveshatel${indexZona}_${indexShleif}_${opoveshatel}`))
        document.querySelector(`#Opoveshatel${indexZona}_${indexShleif}_${opoveshatel}`).style.display = 'block';
}

function createOpoveshatel(zona ,lineLoopIndex, qIzv){
    if(lineLoopIndex >= 0){
        let elem, subelem, option, mainDiv, subDiv, div, div_1, div_2;
        mainDiv = document.getElementById('ShleifOp' + zona  + "_" + lineLoopIndex);
        
        if(document.getElementById(`BtnsIDOp${zona}_${lineLoopIndex}`)){
            mainDiv.removeChild(document.getElementById(`BtnsIDOp${zona}_${lineLoopIndex}`));
        }
            elem = document.createElement('div');
            elem.setAttribute('id', `BtnsIDOp${zona}_${lineLoopIndex}`);
            elem.setAttribute('class', `izvBtns_`);
                        
            subelem = document.createElement('button');
            subelem.setAttribute('id', `BtnsPrevOp${zona}_${lineLoopIndex}`);
            subelem.setAttribute('class', `izvBtns-item`);
            subelem.appendChild(document.createTextNode('Пред.'));
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('span');
            subelem.setAttribute('class', 'izvBtns-item');
            subelem.setAttribute('id', `SpanOp${zona}_${lineLoopIndex}`);
            subelem.appendChild(document.createTextNode('Оповещатель №'));
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('input');
            subelem.setAttribute('type', 'number');
            subelem.setAttribute('id', `LasPosOp${zona}_${lineLoopIndex}`);
            subelem.setAttribute('class', 'izvBtns-item');
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('span');
            subelem.setAttribute('id', `LastSpanOp${zona}_${lineLoopIndex}`);
            subelem.setAttribute('class', 'izvBtns-item');
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('button');
            subelem.setAttribute('class', 'izvBtns-item');
            subelem.setAttribute('id', `BtnsNextOp${zona}_${lineLoopIndex}`);
            subelem.appendChild(document.createTextNode('След.'));
    
            elem.appendChild(subelem);
    
            mainDiv.appendChild(elem);
        
    

    
                for (let j = 0; j < qIzv; j++) {

                    if(document.getElementById(`Opoveshatel${zona}_${lineLoopIndex}_${j}`)){
                        mainDiv.removeChild(document.getElementById(`Opoveshatel${zona}_${lineLoopIndex}_${j}`));
                    }
                        subDiv = document.createElement('div');
                        subDiv.setAttribute('id',`Opoveshatel${zona}_${lineLoopIndex}_${j}`);
                    //----------------------------------------------
                    
                    // div = document.createElement('div');
                    // div.setAttribute('id', `AdrExNet${lineLoopIndex}_${j}`)
    
                    // subelem = document.createElement('h3');
                    // subelem.appendChild(document.createTextNode('Конфигурация извещателя при адресном типе шлейфа и при отсутствии взрывозащиты'));
                    // div.appendChild(subelem);

                    div_2 = document.createElement('div');
                    div_2.setAttribute('class', 'ARM');
    
                    subelem = document.createElement('p');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.appendChild(document.createTextNode('Адрес:'));
                    div_2.appendChild(subelem);
                    subDiv.appendChild(div_2);
    
                    subelem = document.createElement('input');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.setAttribute('type', 'text');
                    subelem.setAttribute('id', `ADROP${zona}_${lineLoopIndex}_${j}`);
                    subelem.setAttribute('placeholder', `До 20 символов...`);
                    div_2.appendChild(subelem);
                    subDiv.appendChild(div_2);

                    div_2 = document.createElement('div');
                    div_2.setAttribute('class', 'ARM');

                    subelem = document.createElement('p');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.appendChild(document.createTextNode('Ток оповещателя в режиме оповещения, мА:'));
                    div_2.appendChild(subelem);
                    subDiv.appendChild(div_2);

                    subelem = document.createElement('input');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.setAttribute('type', 'text');
                    subelem.setAttribute('id', `IPOP${zona}_${lineLoopIndex}_${j}`);
                    div_2.appendChild(subelem);
                    subDiv.appendChild(div_2);
                 
                    subelem = document.createElement('br');
                    subDiv.appendChild(subelem);

                    div_1 = document.createElement('div');
                    div_1.setAttribute('class', 'flex-items');

                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode('Оповещатель сконфигурирован:'));
                    div_1.appendChild(subelem);
                    subDiv.appendChild(div_1);

                    subelem = document.createElement('input');
                    subelem.setAttribute('type', 'checkbox');
                    subelem.setAttribute('id', `checkboxOpoveshateli${zona}_${lineLoopIndex}_${j}`);
                    subelem.setAttribute('class', `btn-after`);
                    subelem.setAttribute('disabled', `true`);
                    div_1.appendChild(subelem);
                    subDiv.appendChild(div_1);

                    mainDiv.appendChild(subDiv);           
            }  
        }
}

function setHandlersOp(eHandler, zona, index, data){
    for (let i = 0; i < data[zona][index][0]; i++) {
        
            eHandler[zona][index][i][0] = document.getElementById(`ADROP${zona}_${index}_${i}`);
        
            eHandler[zona][index][i][1] = document.getElementById(`IPOP${zona}_${index}_${i}`);
        
            eHandler[zona][index][i][2] = document.getElementById(`checkboxOpoveshateli${zona}_${index}_${i}`);
    }
}

// function hideOp_1(id, index_1, index_2){
//         for (let j = 0; j < index_2; j++) {
//             if(document.querySelector(`#${id}${index_1}_${j}`))
//                 document.querySelector(`#${id}${index_1}_${j}`).style.display = 'none';   
//         }   
    
// }

function handlePrevOp(shleif, curLine, KIZVSHsLength, izvLasPos1, 
    btnPrevHndlr, dynamicEvHandlerIZV1, data,
    curPosIzv1, nextPosIzv1, prevPosIzv1){
        if( btnPrevHndlr[shleif][curLine]){
            btnPrevHndlr[shleif][curLine].addEventListener('click', (e)=>{
                e.preventDefault();
               // if(prevPosIzv1[i] < 1) prevPosIzv1[i]  = KIZVSHsLength - 1;
                nextPosIzv1[curLine] = curPosIzv1[curLine];
                curPosIzv1[curLine] = prevPosIzv1[curLine];
                prevPosIzv1[curLine]--;
                if(curPosIzv1[curLine] <= 0) prevPosIzv1[curLine] = KIZVSHsLength - 1;
                izvLasPos1[shleif][curLine].value = parseInt(curPosIzv1[curLine], 10) + 1;
                //currentZonaOp = parseInt(curPosIzv1[curLine], 10);
             //    hideIzvOp(dynamicEvHandlerIZV1, i, data);
             //    let current = curPosIzv1[i];
                
             //     showOp(dynamicEvHandlerIZV1, i, current);
             //hideIzvOp(curPosUprOp, lineLoopsDataUprOp[curLine].KShOPZONY);
             
             hideOp(UpravlenieOpovesheniem.KZONOP, lineLoopsDataUprOp[curPosUprOp - 1].KShOPZONY, KIZVSHsLength)
             showOp1(shleif, curLine, curPosIzv1[curLine]);   
             return;

            });
         }
}


function handleNextOp(shleif, curLine, KIZVSHsLength, izvLasPos1, 
    btnNextHndlr, dynamicEvHandlerIZV1, data,
    curPosIzv1, nextPosIzv1, prevPosIzv1){
        if(btnNextHndlr[shleif][curLine]){
            btnNextHndlr[shleif][curLine].addEventListener('click', (e)=>{
                e.preventDefault();
                if(nextPosIzv1[curLine] > KIZVSHsLength - 1) nextPosIzv1[curLine] = 0;
                prevPosIzv1[curLine] = curPosIzv1[curLine];
                curPosIzv1[curLine] = nextPosIzv1[curLine];
                nextPosIzv1[curLine]++;
                if(nextPosIzv1[curLine] > KIZVSHsLength + 1) nextPosIzv1[curLine] = 0;
                izvLasPos1[shleif][curLine].value = parseInt(curPosIzv1[curLine], 10) + 1;
                currentZonaOp = parseInt(curPosIzv1[curLine], 10);
                //hideIzvOp(dynamicEvHandlerIZV1, i, data);
                hideOp(UpravlenieOpovesheniem.KZONOP, lineLoopsDataUprOp[curPosUprOp - 1].KShOPZONY, KIZVSHsLength)
                showOp1(shleif, curLine, curPosIzv1[curLine]);    
                //showOp(dynamicEvHandlerIZV1, i, curPosIzv1[i]);

                // else{
                //     showIzvConfModbu(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                // }
        
        });
        }   
}

function handleOpPosOp(shleif, curLine, KIZVSHsLength, izvLasPos1, 
    dynamicEvHandlerIZV1, data,
   curPosIzv1, nextPosIzv1, prevPosIzv1){
    if(izvLasPos1[shleif][curLine]){
        izvLasPos1[shleif][curLine].addEventListener('blur', (e)=>{
            e.preventDefault();
            curPosIzv1[curLine] = parseInt(izvLasPos1[shleif][curLine].value, 10) - 1;
            if(curPosIzv1[curLine] + 1 >= KIZVSHsLength){
                nextPosIzv1[curLine] = 1;
                prevPosIzv1[curLine] = curPosIzv1[curLine] - 1;
            }
            else if(curPosIzv1[curLine] - 1 < 1){
                prevPosIzv1[curLine] = KIZVSHsLength - 1;
                nextPosIzv1[curLine] = curPosIzv1[curLine] + 1;
            }
            else{
                prevPosIzv1[curLine] = curPosIzv1[curLine] - 1;
                nextPosIzv1[curLine] = curPosIzv1[curLine] + 1;
            }
            currentZonaOp = parseInt(curPosIzv1[curLine], 10);
            //hideIzvOp(dynamicEvHandlerIZV1, i, data);
            hideOp(UpravlenieOpovesheniem.KZONOP, lineLoopsDataUprOp[curPosUprOp - 1].KShOPZONY, KIZVSHsLength)
            showOp1(shleif, curLine, curPosIzv1[curLine]);   
            //showOp(dynamicEvHandlerIZV1, i, curPosIzv1[i]);

             //    else{
             //        showIzvConfModbu(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
             //    }
        });
    }  
}

function setADROP(handlerArr, size, KShOPZONY, KOPSh, dataToSave){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < KShOPZONY; j++) {
            for(let x = 0; x < KOPSh; x++){
                if(handlerArr[i][j][x][0]){
                    //handlerArr[i][j][x][0].addEventListener('blur', ()=>{
                        handlerArr[i][j][x][0].addEventListener('focus', ()=>{
                            handlerArr[i][j][x][0].style.boxShadow = 'none';
                        });
            
                        handlerArr[i][j][x][0].addEventListener('blur', ()=>{
                            if(handlerArr[i][j][x][0].value == ""){ 
                                pressedBtnsOpCount_Opoveshatel[`ADROP${i}-${j}-${x}`] = false;
                                handlerArr[i][j][x][0].style.boxShadow = 'none';
                                return;
                            }
                            else if(handlerArr[i][j][x][0].value.length <= 20){
                                dataToSave[i][j][x][0] = handlerArr[i][j][x][0].value;
                                pressedBtnsOpCount_Opoveshatel[`ADROP${i}-${j}-${x}`] = true;
                                handlerArr[i][j][x][0].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                                console.log(i + " ADROP: " + dataToSave[i][j][x][0] + " L: " + dataToSave[i][j][x][0].length);
                            }
                            else
                                handlerArr[i][j][x][0].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                        });
                    //});
                }

            }
        }
    }
}

function setIPOP(handlerArr, size, KShOPZONY, KOPSh, dataToSave){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < KShOPZONY; j++) {
            for(let x = 0; x < KOPSh; x++){
                if(handlerArr[i][j][x][1]){
                    handlerArr[i][j][x][1].onkeypress = (e)=>{
                        e = e || event;
                       if (e.ctrlKey || e.altKey || e.metaKey) return;
                       var chr = getChar(e);
                       console.log("Char pressed: " + chr);
                       if(chr == ',' || chr == '.')
                       {   
                           let count = 0, pos = -1;
                           if(chr == ',' || chr == '.'){
                                if(handlerArr[i][j][x][1].value.indexOf('.') == -1)
                                {
                                    while((pos = handlerArr[i][j][x][1].value.indexOf(',', pos + 1 )) != -1){
                                        count++;
                                    }
                                    if(count >= 1) {e.preventDefault(); count = 0; return;}
                                    else { count = 0;  }
                                }
                                else
                                {
                                    while((pos = handlerArr[i][j][x][1].value.indexOf('.', pos + 1 )) != -1){
                                        count++;
                                    }
                                    if(count >= 1) {e.preventDefault(); count = 0; return;}
                                    else  { count = 0;  }   
                                }
                           }
            
                           return;
                       }
                       if(chr == null) return;
            
                       if (chr < '0' || chr > '9') {
                           return false;
                       }
                    };
            
                    handlerArr[i][j][x][1].addEventListener('focus', ()=>{
                        handlerArr[i][j][x][1].style.boxShadow = 'none';
                    });
            
                    handlerArr[i][j][x][1].addEventListener('blur', ()=>{
                        if(handlerArr[i][j][x][1].value.indexOf(',')== -1 && handlerArr[i][j][x][1].value.indexOf('.')== -1)
                            handlerArr[i][j][x][1].value += ',0';
                        if(handlerArr[i][j][x][1].value[handlerArr[i][j][x][1].value.length - 1] == '.' || handlerArr[i][j][x][1].value[handlerArr[i][j][x][1].value.length - 1] == ',')
                            handlerArr[i][j][x][1].value += '0';
            
                        if(handlerArr[i][j][x][1].value.search(regExBroken) != -1){
                        
                            if(handlerArr[i][j][x][1].value.indexOf(',')!= -1) handlerArr[i][j][x][1].value = handlerArr[i][j][x][1].value.replace(/\,/, '.');
            
                        if(parseFloat(handlerArr[i][j][x][1].value) >= 0 && parseFloat(handlerArr[i][j][x][1].value) <= 20){
                            dataToSave[i][j][x][1] = parseFloat(handlerArr[i][j][x][1].value);
                            pressedBtnsOpCount_Opoveshatel[`IPOP${i}-${j}-${x}`] = true;
                            handlerArr[i][j][x][1].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                            // if( dataToSave[i].ADRShPT != '' &&
                            //     dataToSave[i].IPShPT >= 1 ){
                            //         handlerArr[i][6].checked = true;
                            //         dataToSave[i].configured = true;
                            // }
                            // else{
                            //     handlerArr[i][6].checked = false;
                            //     dataToSave[i].configured = false;
                            // }
                            console.log("IPOP: " +  dataToSave[i][j][x][1]);
                        }
                        else if(handlerArr[i][j][x][1].value == ""){
                            pressedBtnsOpCount_Opoveshatel[`IPOP${i}-${j}-${x}`] = false;
                            return;
                        }
                        else
                            {
                                handlerArr[i][j][x][1].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                            }
                        }
                        else
                            handlerArr[i][j][x][1].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                    }); 
                }
            }
        }
    }
}

//-----------------------------Подсистема формирования выходных сигналов 
//исполнительных устройств и взаимодйствия с смежными подсистемами-----------------------------//
document.querySelector('div#formSysConfiguration').style.display = 'none';
const KRVYKh = document.getElementById('KRVYKh'),
    KRREZ = document.getElementById('KRREZ');

const   sbtForm6 = document.getElementById('sbtForm6'),
        lineLoopBtnsFormSys = document.getElementById('lineLoopBtnsformSys'),
        lineLoopPrevFormSys = document.getElementById('lineLoopPrevformSys'),
        lineLoopPosFormSys = document.getElementById('lineLoopPosformSys'),
        lastPosFormSys= document.getElementById('lastPosformSys'),
        lineLoopNextFormSys = document.getElementById('lineLoopNextformSys');

        lineLoopBtnsFormSys.style.display = 'none';
        
let pressedBtnsFromCount = [];
pressedBtnsFromCount['KRVYKh'] = false;
pressedBtnsFromCount['KRREZ'] = false;

function hideForm(id, length){
    for (let i = 0; i < length; i++) {
        if(document.querySelector(`#${id}` + i))
            document.querySelector(`#${id}` + i).style.display = 'none';
    }
}
    lineLoopPrevFormSys.addEventListener('click', ()=>{
            if(prevIndexFormSys < 1) prevIndexFormSys = lineLoopsFormSys.length;
            nextIndexFormSys = curPosFormSys;
            curPosFormSys = prevIndexFormSys;
            prevIndexFormSys--;
            if(prevIndexFormSys < 1) prevIndexFormSys = lineLoopsFormSys.length;
            lineLoopPosFormSys.value = curPosFormSys;
            hideForm('_DRV_' ,lineLoopsFormSys.length);
            showLineLoopsRuchn('_DRV_' + (curPosFormSys - 1));
            //hideAll();
    
    });
    
    lineLoopNextFormSys.addEventListener('click', ()=>{
                if(nextIndexFormSys > lineLoopsFormSys.length ) nextIndexFormSys = 1;
                prevIndexFormSys = curPosFormSys;
                curPosFormSys = nextIndexFormSys;
                nextIndexFormSys++;
                if(nextIndexFormSys > lineLoopsFormSys.length) nextIndexFormSys = 1;
                lineLoopPosFormSys.value = curPosFormSys;
                hideForm('_DRV_' ,lineLoopsFormSys.length);
                showLineLoopsRuchn('_DRV_' + (curPosFormSys - 1));
                //hideAll();
    });
    
    
    lineLoopPosFormSys.addEventListener('blur', ()=>{
        curPosFormSys = parseInt(lineLoopPosFormSys.value, 10);
        if(curPosFormSys + 1 > lineLoopsFormSys.length + 1){
            nextIndexFormSys  = 1;
            prevIndexFormSys  = curPosFormSys - 1;
        }
        else if(curPosFormSys - 1 < 1){
            prevIndexFormSys = lineLoopsFormSys.length;
            nextIndexFormSys = curPosFormSys + 1;
        }
        else{
            prevIndexFormSys  = curPosFormSys - 1;
            nextIndexFormSys  = curPosFormSys + 1;
        }
        hideForm('_DRV_' ,lineLoopsFormSys.length);
        showLineLoopsRuchn('_DRV_' + (curPosFormSys - 1));
        //hideAll();
    });

//KRVYKh   
KRVYKh.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

KRVYKh.addEventListener('focus', ()=>{
    KRVYKh.style.boxShadow = 'none';
});

KRVYKh.addEventListener('blur', ()=>{
   if(KRVYKh.value.search(regEx) == -1){
   if(parseInt(KRVYKh.value, 10) >= 1 && parseInt(KRVYKh.value, 10) <= 640){
       FVSIUiVsSP.KRVYH = parseInt(KRVYKh.value, 10);
       KRVYKh.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       pressedBtnsFromCount['KRVYKh'] = true;
       console.log("KRVYKh: "+ FVSIUiVsSP.KRVYH);
   }
   else if(KRVYKh.value == ""){
        pressedBtnsFromCount['KRVYKh'] = false;
       FVSIUiVsSP.KRVYH = 0;
       console.log("KRVYKh: "+  FVSIUiVsSP.KRVYH);
       return;
   }
   else
       {
        KRVYKh.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
    KRVYKh.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';  
});

//KRREZ
KRREZ.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

KRREZ.addEventListener('focus', ()=>{
    KRREZ.style.boxShadow = 'none';
});

KRREZ.addEventListener('blur', ()=>{
   if(KRREZ.value.search(regEx) == -1){
   if(parseInt(KRREZ.value, 10) >= 0 && parseInt(KRREZ.value, 10) <= 100){
       FVSIUiVsSP.KRREZ = parseInt(KRREZ.value, 10);
       KRREZ.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       pressedBtnsFromCount['KRREZ'] = true;
       console.log("KRREZ: "+ FVSIUiVsSP.KRREZ);
   }
   else if(KRREZ.value == ""){
       FVSIUiVsSP.KRREZ = 0;
       pressedBtnsFromCount['KRREZ'] = false;
       console.log("KRREZ: "+  FVSIUiVsSP.KRREZ);
       return;
   }
   else
       {
        KRREZ.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
        KRREZ.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';  
});

let lineLoopsFormSys = [], dynamicEventHandlersFormSys = [], lineLoopsDataFormSys = [];
let curPosFormSys, prevIndexFormSys, nextIndexFormSys;

let pressedBtnsFromCount_sbt6 = [];

sbtForm6.addEventListener('click', (e) =>{
    e.preventDefault();
    if(FVSIUiVsSP.KRVYH ){
        // console.log(pressedBtnsOpCount)
        // console.log(pressedBtnsOpCount_sbt5)
        // console.log(pressedBtnsOpCount_Shleif)
        // console.log(pressedBtnsOpCount_Opoveshatel)
        //alert('Сконфигурировано!');
        lineLoopBtnsFormSys.style.display = 'block';
        lineLoopsFormSys.length = FVSIUiVsSP.KRVYH ;
        // for (let i = 0; i < lineLoopsUpr.length; i++) {
        //     lineLoopsUprOp[i] = UpravlenieOpovesheniem.ZonaOpoveshenia;
        // }
        createlineLoopFormSys(FVSIUiVsSP.KRVYH);
        // let lastPosUpr = document.getElementById('lastPosUpr'),
        //     lineLoopPosUpr = document.getElementById('lineLoopPosUpr');

        lastPosFormSys.innerHTML = 'из ' + lineLoopsFormSys.length;
        lineLoopPosFormSys.min = 1;
        lineLoopPosFormSys.max = lineLoopsFormSys.length;
        lineLoopPosFormSys.value = 1;
        curPosFormSys = 1;
        prevIndexFormSys = lineLoopsFormSys.length;
        nextIndexFormSys = curPosFormSys + 1;
        
        if(lineLoopsFormSys.length){
            for (let i = 0; i < lineLoopsFormSys.length; i++) {
                for (let j = 0; j < 3; j++) {
                    dynamicEventHandlersFormSys[i] = [];
                }
            }
         }

        setDynHandlersFormSys(dynamicEventHandlersFormSys, lineLoopsFormSys.length);
        
        showLineLoopsRuchn('_DRV_' + (curPosFormSys - 1));
        //hideAutoObnarUpr();
        if(lineLoopsFormSys.length){
            for (let i = 0; i < lineLoopsFormSys.length; i++) {                
                lineLoopsDataFormSys[i] = Object.assign({}, FVSIUiVsSP.DRV);
                //dynamicEventHandlersUprOp[i][5].style.display = 'none';
                pressedBtnsFromCount_sbt6[`ADRRVYKh${i}`] = false;
                pressedBtnsFromCount_sbt6[`TBIZR${i}`] = true;
            }
         }

            //lineLoopConf = document.getElementById('lineLoopKonf');
            setADRRVYKh(dynamicEventHandlersFormSys, lineLoopsFormSys.length, lineLoopsDataFormSys);
            setExRVYKh(dynamicEventHandlersFormSys, lineLoopsFormSys.length, lineLoopsDataFormSys);
            setTBIZR(dynamicEventHandlersFormSys, lineLoopsFormSys.length, lineLoopsDataFormSys);
            // setKShOPZONY(dynamicEventHandlersUprOp, lineLoopsUprOp.length, lineLoopsDataUprOp);
            // setDlgZonaOp(dynamicEventHandlersUprOp, lineLoopsUprOp.length, lineLoopsDataUprOp);
            //setCheckboxUpr(dynamicEventHandlersUpr, lineLoopsUpr.length, lineLoopsDataUpr);

            
    }
    else
        alert('Конфигурация не завершена! Пропущены данные.');
});

function createlineLoopFormSys(val){
        if(val > 0){
            let elem, subelem, option, mainDiv, div_1, div_2;
            mainDiv = document.createElement('div');
            mainDiv.setAttribute('id','lineLoopKonfFormSys');
            //mainDiv.setAttribute('class','flex-item');
            for (let i = 0; i < val; i++) {
                elem = document.createElement('form');
                elem.setAttribute("id", '_DRV_' + i);
                
                // subelem = document.createElement('h3')
                // subelem.appendChild(document.createTextNode(`Конфигурация шлейфа #${i + 1}`));
                // elem.appendChild(subelem);

                // subelem = document.createElement('p');
                // subelem.appendChild(document.createTextNode("Зона:"));
                // elem.appendChild(subelem);

                // subelem = document.createElement('input');
                // subelem.setAttribute('type', 'number');
                // subelem.setAttribute('id', `ZONAShOP${i}`);
                // //subelem.setAttribute('placeholder', '1...32');
                // elem.appendChild(subelem);
                
                div_2 = document.createElement('div');
                div_2.setAttribute('class', 'ARM');

                subelem = document.createElement('p');
                subelem.setAttribute('class', 'flex-item');
                subelem.appendChild(document.createTextNode('Наименование, адрес:'));
                div_2.appendChild(subelem);
                elem.appendChild(div_2);

                subelem = document.createElement('input');
                subelem.setAttribute('class', 'flex-item');
                subelem.setAttribute('type', 'text');
                subelem.setAttribute('id', `ADRRVYKh${i}`);
                subelem.setAttribute('placeholder', `до 20 символов...`);
                div_2.appendChild(subelem);
                elem.appendChild(div_2);

                div_1 = document.createElement('div');
                div_1.setAttribute('class', 'flex-items');

                subelem = document.createElement('p');
                subelem.appendChild(document.createTextNode("Взрывозащита:"));
                div_1.appendChild(subelem);
                elem.appendChild(div_1);

                subelem = document.createElement('input');
                subelem.setAttribute('type', 'checkbox');
                subelem.setAttribute('id', `ExRVYKh${i}`);
                div_1.appendChild(subelem);
                elem.appendChild(div_1);

                let div = document.createElement('div');
                div.setAttribute('id', `TypeBIZdrv_${i}`);

                div_2 = document.createElement('div');
                div_2.setAttribute('class', 'ARM');

                subelem = document.createElement('p');
                subelem.setAttribute('class', 'flex-item');
                subelem.appendChild(document.createTextNode('Тип искробарьера:'));
                div_2.appendChild(subelem);
                div.appendChild(div_2);


                option = document.createElement('label');
                option.setAttribute('class', 'flex-item');
                subelem = document.createElement('input');
                subelem.setAttribute('list', `_TBIZR_${i}`);
                subelem.setAttribute('type', 'text');
                subelem.setAttribute('id', `TBIZR${i}`);
                option.appendChild(subelem);
                div_2.appendChild(option);
                div.appendChild(div_2);
                
                subelem = document.createElement('datalist');
                subelem.setAttribute('id', `_TBIZR_${i}`);
                div.appendChild(subelem);
                div.style.display = 'none';
                elem.appendChild(div);

                subelem = document.createElement('br');
                elem.appendChild(subelem);

                elem.style.display = 'none';
                mainDiv.appendChild(elem);
                document.querySelector('div#formSysConfiguration').appendChild(mainDiv);
            
        }
    }
}

function setDynHandlersFormSys(handlerArr, size){
    for (let i = 0; i < size; i++) {
        handlerArr[i][0] =document.getElementById(`ADRRVYKh`+i);
        handlerArr[i][1] =document.getElementById(`ExRVYKh${i}`);
        handlerArr[i][2] =document.getElementById(`TypeBIZdrv_${i}`);     
        handlerArr[i][3] =document.getElementById(`TBIZR${i}`); 
        handlerArr[i][4] =document.getElementById(`_TBIZR_${i}`); 
    }
}

function setADRRVYKh(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][0].addEventListener('focus', ()=>{
                handlerArr[i][0].style.boxShadow = 'none';
            });

            handlerArr[i][0].addEventListener('blur', ()=>{
                if(handlerArr[i][0].value == ""){ 
                    pressedBtnsFromCount_sbt6[`ADRRVYKh${i}`] = false;
                    handlerArr[i][0].style.boxShadow = 'none';
                    return;
                }
                else if(handlerArr[i][0].value.length <= 20){
                    dataToSave[i].ADRRVYKh = handlerArr[i][0].value;
                    handlerArr[i][0].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                    pressedBtnsFromCount_sbt6[`ADRRVYKh${i}`] = true;
                    console.log(i + " ADRRVYKh: " + dataToSave[i].ADRRVYKh + " L: " + dataToSave[i].ADRRVYKh.length);
                }
                else
                    handlerArr[i][0].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
            });
    }
}

function setExRVYKh(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {

        if(handlerArr[i][1]){
            handlerArr[i][1].addEventListener('click', ()=>{
                if(handlerArr[i][1].checked)
                { 
                    dataToSave[i].ExRVYKh = true;
                    if(handlerArr[i][3].value == "")
                        pressedBtnsFromCount_sbt6[`TBIZR${i}`] = false;
                    handlerArr[i][2].style.display = 'block';
                
                    while(handlerArr[i][4].firstChild)
                        handlerArr[i][4].removeChild(handlerArr[i][4].firstChild);
                
                    let oOption = document.createElement("option");
                    // oOption.appendChild(document.createTextNode("Выберите тип:"));
                    // oOption.setAttribute("value", "");
                    // handlerArr[i][5].appendChild(oOption);   
                
                    for (let j = 0; j < IntermediateModules.length; j++) {
                        for(let prop in IntermediateModules[j]){
                            if(IntermediateModules[j][prop] == "BIZ"){
                                oOption = document.createElement("option")
                                //oOption.appendChild(document.createTextNode(IntermediateModules[j].name));
                                oOption.setAttribute("value", IntermediateModules[j].name);
                                handlerArr[i][4].appendChild(oOption);   
                            }
                        }        
                    }
                    
                }
                else  {
                    dataToSave[i].ExRVYKh = false;
                    pressedBtnsFromCount_sbt6[`TBIZR${i}`] = true;
                    handlerArr[i][2].style.display = 'none';
                    while(handlerArr[i][4].firstChild)
                        handlerArr[i][4].removeChild(handlerArr[i][4].firstChild);
                }
                //e.preventDefault();
            });
                    
        }
    }
}

function setTBIZR(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        if(handlerArr[i][3]){
                handlerArr[i][3].addEventListener('focus', ()=>{
                    handlerArr[i][3].style.boxShadow = 'none';
                    });
                    
                    handlerArr[i][3].addEventListener('blur', (e)=>{
                    if(handlerArr[i][3].value == ""){
                        let flag = confirm("Взрывозащита типа \"d\"");
                        if(flag)
                        {
                            dataToSave[i].TBIZR  = "Взрывозащита типа \"d\"";
                            handlerArr[i][3].value = "Взрывозащита типа \"d\"";
                            pressedBtnsFromCount_sbt6[`TBIZR${i}`] = true;
                            console.log("TBIZR: " + dataToSave[i].TBIZR);
                            //TBIZShPT.style.display = 'none';
        
                            //handlerArr[i][5].style.display = 'none';
                            e.preventDefault();
        
                            // if( dataToSave[i].ADRShPT != '' &&
                            // dataToSave[i].IPShPT >= 1 ){
                            //     handlerArr[i][6].checked = true;
                            //     dataToSave[i].configured = true;
                            // }
                            // else{    
                            //     handlerArr[i][6].checked = false;
                            //     dataToSave[i].configured = false;
                            // }
                            // list = false
                            return;
                        }
                        handlerArr[i][3].style.boxShadow = 'none';
                        pressedBtnsFromCount_sbt6[`TBIZR${i}`] = false;
                        //handlerArr[i][5].style.display = 'block';
                        return;
                    }
                    else if(handlerArr[i][3].value.length <= 20){
                        dataToSave[i].TBIZR = handlerArr[i][3].value;
                        handlerArr[i][3].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                        pressedBtnsFromCount_sbt6[`TBIZR${i}`] = true;
                        // if( dataToSave[i].ADRShPT != '' &&
                        // dataToSave[i].IPShPT >= 1 ){
                        //     handlerArr[i][6].checked = true;
                        //     dataToSave[i].configured = true;
                        // }
                        // else{    
                        //     handlerArr[i][6].checked = false;
                        //     dataToSave[i].configured = false;
                        // }
        
                        console.log("TBIZR: " + dataToSave[i].TBIZR + " L: " + dataToSave[i].TBIZR.length);
                    }
                    else
                        handlerArr[i][3].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                });
            } 
        }   
}

//-----------------------------Подсистема диагностики-----------------------------//
document.querySelector('div#diagnSysConfiguration').style.display = 'none';
const KDVKh = document.getElementById('KDVKh'),
KDVKhREZ = document.getElementById('KDVKhREZ'),
KAVKh = document.getElementById('KAVKh'),
KAVKhREZ = document.getElementById('KAVKhREZ');
    
const   sbtForm7 = document.getElementById('sbtForm7'),
lineLoopBtnsdiagnSys = document.getElementById('lineLoopBtnsdiagnSys'),
lineLoopPrevdiagnSys = document.getElementById('lineLoopPrevdiagnSys'),
lineLoopPosdiagnSys = document.getElementById('lineLoopPosdiagnSys'),
lastPosdiagnSys= document.getElementById('lastPosdiagnSys'),
lineLoopNextdiagnSys = document.getElementById('lineLoopNextdiagnSys');

lineLoopBtnsdiagnSys.style.display = 'none';

let pressedBtnsDiagnCount = [];
pressedBtnsDiagnCount['KDVKh'] = false;
pressedBtnsDiagnCount['KDVKhREZ'] = false;
pressedBtnsDiagnCount['KAVKh'] = false;
pressedBtnsDiagnCount['KAVKhREZ'] = false;

lineLoopPrevdiagnSys.addEventListener('click', ()=>{
    if(prevIndexdiagnSys < 1) prevIndexdiagnSys = lineLoopsdiagnSys.length;
    nextIndexdiagnSys = curPosdiagnSys;
    curPosdiagnSys = prevIndexdiagnSys;
    prevIndexdiagnSys--;
    if(prevIndexdiagnSys < 1) prevIndexdiagnSys = lineLoopsdiagnSys.length;
    lineLoopPosdiagnSys.value = curPosdiagnSys;
    hideForm('_VD_' ,lineLoopsdiagnSys.length);
    showLineLoopsRuchn('_VD_' + (curPosdiagnSys - 1));
    //hideAll();

});

lineLoopNextdiagnSys.addEventListener('click', ()=>{
        if(nextIndexdiagnSys > lineLoopsdiagnSys.length ) nextIndexdiagnSys = 1;
        prevIndexdiagnSys = curPosdiagnSys;
        curPosdiagnSys = nextIndexdiagnSys;
        nextIndexdiagnSys++;
        if(nextIndexdiagnSys > lineLoopsdiagnSys.length) nextIndexdiagnSys = 1;
        lineLoopPosdiagnSys.value = curPosdiagnSys;
        hideForm('_VD_' ,lineLoopsdiagnSys.length);
        showLineLoopsRuchn('_VD_' + (curPosdiagnSys - 1));
        //hideAll();
});


lineLoopPosdiagnSys.addEventListener('blur', ()=>{
curPosdiagnSys = parseInt(lineLoopPosdiagnSys.value, 10);
if(curPosdiagnSys + 1 > lineLoopsdiagnSys.length + 1){
    nextIndexdiagnSys  = 1;
    prevIndexdiagnSys  = curPosdiagnSys - 1;
}
else if(curPosdiagnSys - 1 < 1){
    prevIndexdiagnSys = lineLoopsdiagnSys.length;
    nextIndexdiagnSys = curPosdiagnSys + 1;
}
else{
    prevIndexdiagnSys  = curPosdiagnSys - 1;
    nextIndexdiagnSys  = curPosdiagnSys + 1;
}
hideForm('_VD_' ,lineLoopsdiagnSys.length);
showLineLoopsRuchn('_VD_' + (curPosdiagnSys - 1));
//hideAll();
});

//KDVKh
KDVKh.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

KDVKh.addEventListener('focus', ()=>{
    KDVKh.style.boxShadow = 'none';
});

KDVKh.addEventListener('blur', ()=>{
   if(KDVKh.value.search(regEx) == -1){
   if(parseInt(KDVKh.value, 10) >= 1 && parseInt(KDVKh.value, 10) <= 640){
       PodsysDiagnostiki.KDVKh = parseInt(KDVKh.value, 10);
       KDVKh.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       pressedBtnsDiagnCount['KDVKh'] = true;
       console.log("KRVYKh: "+ PodsysDiagnostiki.KDVKh);
   }
   else if(KDVKh.value == ""){
        PodsysDiagnostiki.KDVKh = 0;
        pressedBtnsDiagnCount['KDVKh'] = false;
       console.log("KDVKh: "+  PodsysDiagnostiki.KDVKh);
       return;
   }
   else
       {
        KDVKh.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
    KDVKh.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';  
});

//KDVKhREZ
KDVKhREZ.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

KDVKhREZ.addEventListener('focus', ()=>{
    KDVKhREZ.style.boxShadow = 'none';
});

KDVKhREZ.addEventListener('blur', ()=>{
   if(KDVKhREZ.value.search(regEx) == -1){
   if(parseInt(KDVKhREZ.value, 10) >= 0 && parseInt(KDVKhREZ.value, 10) <= 100){
       PodsysDiagnostiki.KDVKhREZ = parseInt(KDVKhREZ.value, 10);
       KDVKhREZ.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       pressedBtnsDiagnCount['KDVKhREZ'] = true;
       console.log("KDVKhREZ: "+ PodsysDiagnostiki.KDVKhREZ);
   }
   else if(KDVKhREZ.value == ""){
        PodsysDiagnostiki.KDVKhREZ = 0;
        pressedBtnsDiagnCount['KDVKhREZ'] = false;
       console.log("KDVKhREZ: "+  PodsysDiagnostiki.KDVKhREZ);
       return;
   }
   else
       {
        KDVKhREZ.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
    KDVKhREZ.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';  
});

//KAVKh
KAVKh.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

KAVKh.addEventListener('focus', ()=>{
    KAVKh.style.boxShadow = 'none';
});

KAVKh.addEventListener('blur', ()=>{
   if(KAVKh.value.search(regEx) == -1){
   if(parseInt(KAVKh.value, 10) >= 0 && parseInt(KAVKh.value, 10) <= 320){
       PodsysDiagnostiki.KAVkh = parseInt(KAVKh.value, 10);
       KAVKh.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       pressedBtnsDiagnCount['KAVKh'] = true;
       console.log("KAVKh: "+ PodsysDiagnostiki.KAVkh);
   }
   else if(KAVKh.value == ""){
       PodsysDiagnostiki.KAVkh = 0;
       pressedBtnsDiagnCount['KAVKh'] = false;
       console.log("KAVKh: "+  PodsysDiagnostiki.KAVkh);
       return;
   }
   else
       {
        KAVKh.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
   KAVKh.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';  
});

//KAVKhREZ
KAVKhREZ.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

KAVKhREZ.addEventListener('focus', ()=>{
    KAVKhREZ.style.boxShadow = 'none';
});

KAVKhREZ.addEventListener('blur', ()=>{
   if(KAVKhREZ.value.search(regEx) == -1){
   if(parseInt(KAVKhREZ.value, 10) >= 0 && parseInt(KAVKhREZ.value, 10) <= 100){
       PodsysDiagnostiki.KAVKhREZ = parseInt(KAVKhREZ.value, 10);
       KAVKhREZ.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       pressedBtnsDiagnCount['KAVKhREZ'] = true;
       console.log("KAVKhREZ: "+ PodsysDiagnostiki.KAVKhREZ);
   }
   else if(KAVKhREZ.value == ""){
       PodsysDiagnostiki.KAVKhREZ = 0;
       pressedBtnsDiagnCount['KAVKhREZ'] = false;
       console.log("KAVKhREZ: "+  PodsysDiagnostiki.KAVKhREZ);
       return;
   }
   else
       {
        KAVKhREZ.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
    KAVKhREZ.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';  
});

let lineLoopsdiagnSys = [], lineLoopsVA = [], dynamicEventHandlersdiagnSys = [], 
dynamicEventHandlersVA = [], dynamicEventHandlersVAbtns = [],
DataVhodDiskretniy = [], DataVhodAnalogoviy = [];
let curPosdiagnSys, prevIndexdiagnSys, nextIndexdiagnSys, curPosVA, prevIndexVA, nextIndexVA;

let pressedBtnsDiagnCount_VD = [];

let pressedBtnsDiagnCount_VA = [];

sbtForm7.addEventListener('click', (e)=>{
    e.preventDefault();
    if(PodsysDiagnostiki.KDVKh && PodsysDiagnostiki.KAVkh){
        //alert('Сконфигурировано!');
        lineLoopBtnsdiagnSys.style.display = 'block';
        lineLoopsdiagnSys.length = PodsysDiagnostiki.KDVKh;
        lineLoopsVA.length = PodsysDiagnostiki.KAVkh;
        // for (let i = 0; i < lineLoopsUpr.length; i++) {
        //     lineLoopsUprOp[i] = UpravlenieOpovesheniem.ZonaOpoveshenia;
        // }
        createlineLoopdiagnSys(PodsysDiagnostiki.KDVKh, PodsysDiagnostiki.KAVkh);
        // let lastPosUpr = document.getElementById('lastPosUpr'),
        //     lineLoopPosUpr = document.getElementById('lineLoopPosUpr');

        lastPosdiagnSys.innerHTML = 'из ' + lineLoopsdiagnSys.length;
        lineLoopPosdiagnSys.min = 1;
        lineLoopPosdiagnSys.max = lineLoopsdiagnSys.length;
        lineLoopPosdiagnSys.value = 1;
        curPosdiagnSys = 1;
        prevIndexdiagnSys = lineLoopsdiagnSys.length;
        nextIndexdiagnSys = curPosdiagnSys + 1;
        
        if(lineLoopsdiagnSys.length){
            for (let i = 0; i < lineLoopsdiagnSys.length; i++) {
                for (let j = 0; j < 5; j++) {
                    dynamicEventHandlersdiagnSys[i] = [];
                }
            }
         }

         if(lineLoopsVA.length){
            for (let i = 0; i < lineLoopsVA.length; i++) {
                for (let j = 0; j < 5; j++) {
                    dynamicEventHandlersVA[i] = [];
                }
            }
         }

        setDynHandlersdiagnSys(dynamicEventHandlersdiagnSys, lineLoopsdiagnSys.length);
        setDynHandlersVA(dynamicEventHandlersVA, lineLoopsVA.length);

        showLineLoopsRuchn('_VD_' + (curPosdiagnSys - 1));
        dynamicEventHandlersVAbtns[0] = document.getElementById('BtnsIDVA');
        dynamicEventHandlersVAbtns[1] = document.getElementById('BtnsPrevVA');
        dynamicEventHandlersVAbtns[2] = document.getElementById('SpanVA');
        dynamicEventHandlersVAbtns[3] = document.getElementById('LasPosVA');
        dynamicEventHandlersVAbtns[4] = document.getElementById('LastSpanVA');
        dynamicEventHandlersVAbtns[5] = document.getElementById('BtnsNextVA');

        dynamicEventHandlersVAbtns[0].style.display = 'block';
        dynamicEventHandlersVAbtns[4].innerHTML = 'из ' + lineLoopsVA.length;
        dynamicEventHandlersVAbtns[3].min = 1;
        dynamicEventHandlersVAbtns[3].max = lineLoopsVA.length;
        dynamicEventHandlersVAbtns[3].value = 1;
        curPosVA = 1;
        prevIndexVA = lineLoopsVA.length - 1;
        nextIndexVA = curPosVA +1;
                
        showLineLoopsRuchn('_VA_' + (curPosVA - 1));
        

        //hideAutoObnarUpr();
        if(lineLoopsdiagnSys.length){
            for (let i = 0; i < lineLoopsdiagnSys.length; i++) {                
                DataVhodDiskretniy[i] = Object.assign({},PodsysDiagnostiki.DI);
                pressedBtnsDiagnCount_VD[`ADRDVKh${i}`] = false;
                pressedBtnsDiagnCount_VD[`TBIZDVKh${i}`] = true;
                //dynamicEventHandlersUprOp[i][5].style.display = 'none';
            }
         }

         if(lineLoopsVA.length){
            for (let i = 0; i < lineLoopsVA.length; i++) {                
                DataVhodAnalogoviy[i] = Object.assign({},PodsysDiagnostiki.AI);
                pressedBtnsDiagnCount_VA[`ADRAVKh${i}`] = false;
                pressedBtnsDiagnCount_VA[`TBIZAVKh${i}`] = true;
                //dynamicEventHandlersUprOp[i][5].style.display = 'none';
            }
         }

            //lineLoopConf = document.getElementById('lineLoopKonf');
            dynamicEventHandlersVAbtns[1].addEventListener('click', (e)=>{
                e.preventDefault();
                nextIndexVA = curPosVA;
                curPosVA = prevIndexVA;
                prevIndexVA--;
                if(curPosVA <= 0) prevIndexVA = lineLoopsVA.length - 1;
                dynamicEventHandlersVAbtns[3].value = parseInt(curPosVA, 10) + 1;
                
                hideForm('_VA_', lineLoopsVA.length);
                showLineLoopsRuchn('_VA_' + (curPosVA ));  
                return;//curPosVA, prevIndexVA, nextIndexVA
            });

            dynamicEventHandlersVAbtns[3].addEventListener('click', (e)=>{
                e.preventDefault();
                curPosVA = parseInt(dynamicEventHandlersVAbtns[3].value, 10) - 1;
                if(curPosVA + 1 >= lineLoopsVA.length){
                    nextIndexVA = 1;
                    prevIndexVA = curPosVA - 1;
                }
                else if(curPosVA - 1 < 1){
                    prevIndexVA = lineLoopsVA.length - 1;
                    nextIndexVA = curPosVA + 1;
                }
                else{
                    prevIndexVA = curPosVA - 1;
                    nextIndexVA = curPosVA + 1;
                }
                //currentZonaOp = parseInt(curPosVA, 10);
                //hideIzvOp(dynamicEvHandlerIZV1, i, data);
                hideForm('_VA_', lineLoopsVA.length);
                showLineLoopsRuchn('_VA_' + (curPosVA ));  
            });

            dynamicEventHandlersVAbtns[5].addEventListener('click', (e)=>{
                e.preventDefault();
                if(nextIndexVA > lineLoopsVA.length - 1) nextIndexVA = 0;
                    prevIndexVA = curPosVA;
                    curPosVA = nextIndexVA;
                    nextIndexVA++;
                    if(nextIndexVA > lineLoopsVA.length + 1) nextIndexVA = 0;
                    dynamicEventHandlersVAbtns[3].value = parseInt(curPosVA, 10) + 1;
                    //currentZonaOp = parseInt(curPosIzv1[curLine], 10);
                    //hideIzvOp(dynamicEvHandlerIZV1, i, data);
                    hideForm('_VA_', lineLoopsVA.length);
                    showLineLoopsRuchn('_VA_' + (curPosVA ));  
            });

            // handlePrevVA(i, dataToSave[curPosUprOp-1].KShOPZONY, LasPosShleifOp, BtnsPrevShleifOp, dynamicEvHandlerShleifOp,
            //     dataToSave, curPosShleifOp, nextPosShleifOp, prevPosShleifOp);
            // handleNextVA(i, dataToSave[curPosUprOp-1].KShOPZONY,  LasPosShleifOp, BtnsNextShleifOp, dynamicEvHandlerShleifOp,
            //     dataToSave, curPosShleifOp, nextPosShleifOp, prevPosShleifOp);
            // handleVAPos(i, dataToSave[curPosUprOp-1].KShOPZONY, LasPosShleifOp,  dynamicEvHandlerShleifOp, dataToSave,
            //     curPosShleifOp, nextPosShleifOp, prevPosShleifOp);

            setADRDVKh(dynamicEventHandlersdiagnSys, lineLoopsdiagnSys.length, DataVhodDiskretniy);
            setExDVKh(dynamicEventHandlersdiagnSys, lineLoopsdiagnSys.length, DataVhodDiskretniy);
            setTBIZDVKh(dynamicEventHandlersdiagnSys, lineLoopsdiagnSys.length, DataVhodDiskretniy);

            setADRAVKh(dynamicEventHandlersVA, lineLoopsVA.length, DataVhodAnalogoviy);
            setExAVKh(dynamicEventHandlersVA, lineLoopsVA.length, DataVhodAnalogoviy);
            setTBIZAVKh(dynamicEventHandlersVA, lineLoopsVA.length, DataVhodAnalogoviy);
            // setKShOPZONY(dynamicEventHandlersUprOp, lineLoopsUprOp.length, lineLoopsDataUprOp);
            // setDlgZonaOp(dynamicEventHandlersUprOp, lineLoopsUprOp.length, lineLoopsDataUprOp);
            //setCheckboxUpr(dynamicEventHandlersUpr, lineLoopsUpr.length, lineLoopsDataUpr);

            
    }
    else
        alert('Конфигурация не завершена! Пропущены данные.');
});

function createlineLoopdiagnSys(val1, val2){
    if(val1 > 0 && val2 > 0){
        let elem, subelem, option, mainDiv, div_1, div_2;
        if(document.getElementById('lineLoopKonfDiagnSys_')){
            //let x = document.body.getElementById('lineLoopKonfDiagnSys_')
            //document.parentNode.removeChild(document.getElementById('lineLoopKonfDiagnSys_'));
            document.getElementById('diagnSysConfiguration').removeChild(document.getElementById('lineLoopKonfDiagnSys_'));
        }
           

        mainDiv = document.createElement('div');
        mainDiv.setAttribute('id','lineLoopKonfDiagnSys_');
        mainDiv.setAttribute('class','flex-item');

        for (let i = 0; i < val1; i++) {
            elem = document.createElement('form');
            elem.setAttribute("id", '_VD_' + i);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem = document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Наименование, адрес:'));
            div_2.appendChild(subelem);
            elem.appendChild(div_2);              
            
            subelem = document.createElement('input');
            subelem.setAttribute('class', 'flex-item');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `ADRDVKh${i}`);
            subelem.setAttribute('placeholder', `до 20 символов...`);
            div_2.appendChild(subelem);
            elem.appendChild(div_2);    

            div_1 = document.createElement('div');
            div_1.setAttribute('class', 'flex-items');

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode("Взрывозащита:"));
            div_1.appendChild(subelem);
            elem.appendChild(div_1);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'checkbox');
            subelem.setAttribute('id', `ExDVKh${i}`);
            div_1.appendChild(subelem);
            elem.appendChild(div_1);

            let div = document.createElement('div');
            div.setAttribute('id', `TypeBIZDV_${i}`);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem = document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Тип искробарьера:'));
            div_2.appendChild(subelem);
            div.appendChild(div_2);


            option = document.createElement('label');
            subelem.setAttribute('class', 'flex-item');
            subelem = document.createElement('input');
            subelem.setAttribute('list', `_TBIZDVKh_${i}`);
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `TBIZDVKh${i}`);
            option.appendChild(subelem);
            div_2.appendChild(option);
            div.appendChild(div_2);
                
            subelem = document.createElement('datalist');
            subelem.setAttribute('id', `_TBIZDVKh_${i}`);
            div.appendChild(subelem);
            div.style.display = 'none';
            elem.appendChild(div);

            elem.style.display = 'none';
            mainDiv.appendChild(elem);
        }
        document.querySelector('div#diagnSysConfiguration').appendChild(mainDiv);

        if(document.getElementById('lineLoopKonfDiagnSys__')){
            document.getElementById('diagnSysConfiguration').removeChild(document.getElementById('lineLoopKonfDiagnSys__'));
        }
            //document.parentNode.removeChild(document.getElementById('lineLoopKonfDiagnSys__'));

        mainDiv = document.createElement('div');
        mainDiv.setAttribute('id','lineLoopKonfDiagnSys__');
        mainDiv.setAttribute('class','flex-item');

        if(!(document.getElementById('BtnsIDVA'))){
            elem = document.createElement('div');
            elem.setAttribute('id', `BtnsIDVA`);
            elem.setAttribute('class', `izvBtns_`);
                        
            subelem = document.createElement('button');
            subelem.setAttribute('id', `BtnsPrevVA`);
            subelem.setAttribute('class', `izvBtns-item`);
            subelem.appendChild(document.createTextNode('Пред.'));
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('span');
            subelem.setAttribute('class', 'izvBtns-item');
            subelem.setAttribute('id', `SpanVA`);
            subelem.appendChild(document.createTextNode('Вход аналоговый №'));
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('input');
            subelem.setAttribute('type', 'number');
            subelem.setAttribute('id', `LasPosVA`);
            subelem.setAttribute('class', 'izvBtns-item');
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('span');
            subelem.setAttribute('id', `LastSpanVA`);
            subelem.setAttribute('class', 'izvBtns-item');
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('button');
            subelem.setAttribute('class', 'izvBtns-item');
            subelem.setAttribute('id', `BtnsNextVA`);
            subelem.appendChild(document.createTextNode('След.'));
    
            elem.appendChild(subelem);
    
            mainDiv.appendChild(elem);
        }

        // if(!(document.getElementById('lineLoopKonfDiagnSys__')))
        // mainDiv = document.createElement('div');
        // mainDiv.setAttribute('id','lineLoopKonfDiagnSys__');
        // mainDiv.setAttribute('class','flex-item');

        for (let i = 0; i < val2; i++) {
            elem = document.createElement('form');
            elem.setAttribute("id", '_VA_' + i);

            // if(mainDiv.getElementById('_VA_' + i))
            //     mainDiv.removeChild('_VA_' + i);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem = document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Наименование, адрес:'));
            div_2.appendChild(subelem);   
            elem.appendChild(div_2);                
            
            subelem = document.createElement('input');
            subelem.setAttribute('class', 'flex-item');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `ADRAVKh${i}`);
            subelem.setAttribute('placeholder', `до 20 символов...`);
            div_2.appendChild(subelem);   
            elem.appendChild(div_2);   

            div_1 = document.createElement('div');
            div_1.setAttribute('class', 'flex-items');

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode("Взрывозащита:"));
            div_1.appendChild(subelem);
            elem.appendChild(div_1);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'checkbox');
            subelem.setAttribute('id', `ExAVKh${i}`);
            div_1.appendChild(subelem);
            elem.appendChild(div_1);

            let div = document.createElement('div');
            div.setAttribute('id', `TypeBIZVA_${i}`);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem = document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Тип искробарьера:'));
            div_2.appendChild(subelem);
            div.appendChild(div_2);


            option = document.createElement('label');
            option.setAttribute('class', 'flex-item');
            subelem = document.createElement('input');
            subelem.setAttribute('list', `_TBIZAVKh_${i}`);
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `TBIZAVKh${i}`);
            option.appendChild(subelem);
            div_2.appendChild(subelem);
            div.appendChild(div_2);
                
            subelem = document.createElement('datalist');
            subelem.setAttribute('id', `_TBIZAVKh_${i}`);
            div.appendChild(subelem);
            div.style.display = 'none';
            elem.appendChild(div);

            elem.style.display = 'none';
            mainDiv.appendChild(elem);
            
        }
        document.querySelector('div#diagnSysConfiguration').appendChild(mainDiv);
    }
}

function setDynHandlersdiagnSys(handlerArr, size){
    for (let i = 0; i < size; i++) {
        handlerArr[i][0] = document.getElementById(`ADRDVKh${i}`);
        handlerArr[i][1] = document.getElementById(`ExDVKh${i}`);
        handlerArr[i][2] = document.getElementById(`TypeBIZDV_${i}`);
        handlerArr[i][3] = document.getElementById(`TBIZDVKh${i}`);
        handlerArr[i][4] = document.getElementById(`_TBIZDVKh_${i}`);
        
    }
}

function setDynHandlersVA(handlerArr, size){
    for (let i = 0; i < size; i++) {
        handlerArr[i][0] = document.getElementById(`ADRAVKh${i}`);
        handlerArr[i][1] = document.getElementById(`ExAVKh${i}`);
        handlerArr[i][2] = document.getElementById(`TypeBIZVA_${i}`);
        handlerArr[i][3] = document.getElementById(`TBIZAVKh${i}`);
        handlerArr[i][4] = document.getElementById(`_TBIZAVKh_${i}`);
    }
}

function setADRDVKh(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][0].addEventListener('focus', ()=>{
                handlerArr[i][0].style.boxShadow = 'none';
            });

            handlerArr[i][0].addEventListener('blur', ()=>{
                if(handlerArr[i][0].value == ""){
                    pressedBtnsDiagnCount_VD[`ADRDVKh${i}`] = false; 
                    handlerArr[i][0].style.boxShadow = 'none';
                    return;
                }
                else if(handlerArr[i][0].value.length <= 20){
                    dataToSave[i].ADRDVKh = handlerArr[i][0].value;
                    handlerArr[i][0].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                    pressedBtnsDiagnCount_VD[`ADRDVKh${i}`] = true;
                    console.log(i + " ADRRVYKh: " + dataToSave[i].ADRDVKh + " L: " + dataToSave[i].ADRDVKh.length);
                }
                else
                    handlerArr[i][0].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
            });
    }
}

function setExDVKh(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        
        if(handlerArr[i][1]){
            handlerArr[i][1].addEventListener('click', ()=>{
                if(handlerArr[i][1].checked)
                { 
                    dataToSave[i].ExDVKh = true;
                    if(handlerArr[i][3].value == "")
                        pressedBtnsDiagnCount_VD[`TBIZDVKh${i}`] = false;
                    handlerArr[i][2].style.display = 'block';
                
                    while(handlerArr[i][4].firstChild)
                        handlerArr[i][4].removeChild(handlerArr[i][4].firstChild);
                
                    let oOption = document.createElement("option");
                    // oOption.appendChild(document.createTextNode("Выберите тип:"));
                    // oOption.setAttribute("value", "");
                    // handlerArr[i][5].appendChild(oOption);   
                
                    for (let j = 0; j < IntermediateModules.length; j++) {
                        for(let prop in IntermediateModules[j]){
                            if(IntermediateModules[j][prop] == "BIZ"){
                                oOption = document.createElement("option")
                                //oOption.appendChild(document.createTextNode(IntermediateModules[j].name));
                                oOption.setAttribute("value", IntermediateModules[j].name);
                                handlerArr[i][4].appendChild(oOption);   
                            }
                        }        
                    }
                    
                }
                else  {
                    dataToSave[i].ExDVKh = false;
                    pressedBtnsDiagnCount_VD[`TBIZDVKh${i}`] = true;
                    handlerArr[i][2].style.display = 'none';
                    while(handlerArr[i][4].firstChild)
                        handlerArr[i][4].removeChild(handlerArr[i][4].firstChild);
                }
                //e.preventDefault();
            });
                    
        }
    }
}

function setTBIZDVKh(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        if(handlerArr[i][3]){
                handlerArr[i][3].addEventListener('focus', ()=>{
                    handlerArr[i][3].style.boxShadow = 'none';
                    });
                    
                    handlerArr[i][3].addEventListener('blur', (e)=>{
                    if(handlerArr[i][3].value == ""){
                        let flag = confirm("Взрывозащита типа \"d\"");
                        if(flag)
                        {
                            dataToSave[i].TBIZDVKh  = "Взрывозащита типа \"d\"";
                            handlerArr[i][3].value = "Взрывозащита типа \"d\"";
                            pressedBtnsDiagnCount_VD[`TBIZDVKh${i}`] = true;
                            console.log("TBIZDVKh: " + dataToSave[i].TBIZDVKh);
                            //TBIZShPT.style.display = 'none';
        
                            //handlerArr[i][5].style.display = 'none';
                            e.preventDefault();
        
                            // if( dataToSave[i].ADRShPT != '' &&
                            // dataToSave[i].IPShPT >= 1 ){
                            //     handlerArr[i][6].checked = true;
                            //     dataToSave[i].configured = true;
                            // }
                            // else{    
                            //     handlerArr[i][6].checked = false;
                            //     dataToSave[i].configured = false;
                            // }
                            // list = false
                            return;
                        }
                        handlerArr[i][3].style.boxShadow = 'none';
                        pressedBtnsDiagnCount_VD[`TBIZDVKh${i}`] = false;
                        return;
                    }
                    else if(handlerArr[i][3].value.length <= 20){
                        dataToSave[i].TBIZDVKh = handlerArr[i][3].value;
                        handlerArr[i][3].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                        pressedBtnsDiagnCount_VD[`TBIZDVKh${i}`] = true;
                        // if( dataToSave[i].ADRShPT != '' &&
                        // dataToSave[i].IPShPT >= 1 ){
                        //     handlerArr[i][6].checked = true;
                        //     dataToSave[i].configured = true;
                        // }
                        // else{    
                        //     handlerArr[i][6].checked = false;
                        //     dataToSave[i].configured = false;
                        // }
        
                        console.log("TBIZDVKh: " + dataToSave[i].TBIZDVKh + " L: " + dataToSave[i].TBIZDVKh.length);
                    }
                    else
                        handlerArr[i][3].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                });
            } 
        }   
}

function setADRAVKh(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][0].addEventListener('focus', ()=>{
                handlerArr[i][0].style.boxShadow = 'none';
            });

            handlerArr[i][0].addEventListener('blur', ()=>{
                if(handlerArr[i][0].value == ""){ 
                    handlerArr[i][0].style.boxShadow = 'none';
                    pressedBtnsDiagnCount_VA[`ADRAVKh${i}`] = false;
                    return;
                }
                else if(handlerArr[i][0].value.length <= 20){
                    dataToSave[i].ADRAVKh = handlerArr[i][0].value;
                    handlerArr[i][0].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                    pressedBtnsDiagnCount_VA[`ADRAVKh${i}`] = true;
                    console.log(i + " ADRAVKh: " + dataToSave[i].ADRAVKh + " L: " + dataToSave[i].ADRAVKh.length);
                }
                else
                    handlerArr[i][0].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
            });
    }
}

function setExAVKh(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        
        if(handlerArr[i][1]){
            handlerArr[i][1].addEventListener('click', ()=>{
                if(handlerArr[i][1].checked)
                { 
                    dataToSave[i].ExAVKh = true;
                    if(handlerArr[i][3].value == "")
                        pressedBtnsDiagnCount_VA[`TBIZAVKh${i}`] = false;
                    handlerArr[i][2].style.display = 'block';
                
                    while(handlerArr[i][4].firstChild)
                        handlerArr[i][4].removeChild(handlerArr[i][4].firstChild);
                
                    let oOption = document.createElement("option");
                    // oOption.appendChild(document.createTextNode("Выберите тип:"));
                    // oOption.setAttribute("value", "");
                    // handlerArr[i][5].appendChild(oOption);   
                
                    for (let j = 0; j < IntermediateModules.length; j++) {
                        for(let prop in IntermediateModules[j]){
                            if(IntermediateModules[j][prop] == "BIZ"){
                                oOption = document.createElement("option")
                                //oOption.appendChild(document.createTextNode(IntermediateModules[j].name));
                                oOption.setAttribute("value", IntermediateModules[j].name);
                                handlerArr[i][4].appendChild(oOption);   
                            }
                        }        
                    }
                    
                }
                else  {
                    dataToSave[i].ExAVKh = false;
                    pressedBtnsDiagnCount_VA[`TBIZAVKh${i}`] = true;
                    handlerArr[i][2].style.display = 'none';
                    while(handlerArr[i][4].firstChild)
                        handlerArr[i][4].removeChild(handlerArr[i][4].firstChild);
                }
                //e.preventDefault();
            });
                    
        }
    }
}

function setTBIZAVKh(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        if(handlerArr[i][3]){
                handlerArr[i][3].addEventListener('focus', ()=>{
                    handlerArr[i][3].style.boxShadow = 'none';
                    });
                    
                    handlerArr[i][3].addEventListener('blur', (e)=>{
                    if(handlerArr[i][3].value == ""){
                        let flag = confirm("Взрывозащита типа \"d\"");
                        if(flag)
                        {
                            dataToSave[i].TBIZAVKh  = "Взрывозащита типа \"d\"";
                            handlerArr[i][3].value = "Взрывозащита типа \"d\"";
                            pressedBtnsDiagnCount_VA[`TBIZAVKh${i}`] = true;
                            console.log("TBIZAVKh: " + dataToSave[i].TBIZAVKh);
                            //TBIZShPT.style.display = 'none';
        
                            //handlerArr[i][5].style.display = 'none';
                            e.preventDefault();
        
                            // if( dataToSave[i].ADRShPT != '' &&
                            // dataToSave[i].IPShPT >= 1 ){
                            //     handlerArr[i][6].checked = true;
                            //     dataToSave[i].configured = true;
                            // }
                            // else{    
                            //     handlerArr[i][6].checked = false;
                            //     dataToSave[i].configured = false;
                            // }
                            // list = false
                            return;
                        }
                        handlerArr[i][3].style.boxShadow = 'none';
                        pressedBtnsDiagnCount_VA[`TBIZAVKh${i}`] = false;
                        //handlerArr[i][5].style.display = 'block';
                        return;
                    }
                    else if(handlerArr[i][3].value.length <= 20){
                        dataToSave[i].TBIZAVKh = handlerArr[i][3].value;
                        handlerArr[i][3].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                        pressedBtnsDiagnCount_VA[`TBIZAVKh${i}`] = true;
                        // if( dataToSave[i].ADRShPT != '' &&
                        // dataToSave[i].IPShPT >= 1 ){
                        //     handlerArr[i][6].checked = true;
                        //     dataToSave[i].configured = true;
                        // }
                        // else{    
                        //     handlerArr[i][6].checked = false;
                        //     dataToSave[i].configured = false;
                        // }
        
                        console.log("TBIZAVKh: " + dataToSave[i].TBIZAVKh + " L: " + dataToSave[i].TBIZAVKh.length);
                    }
                    else
                        handlerArr[i][3].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                });
            } 
        }   
}

//-----------------------------Подсистема связи с устройствами с подключением 
//-----------------------------по последовательному интерфейсу RS-485
document.querySelector('div#connSysConfiguration').style.display = 'none';
const KRS485 = document.getElementById('KRS485'),
KRS485_checked = document.getElementById('KRS485_checked');

let pressedBtnsKRSCount = [];
pressedBtnsKRSCount['KRS485'] = false;

//KRS485
KRS485.onkeypress = (e)=>{
    e = e || event;
   if (e.ctrlKey || e.altKey || e.metaKey) return;
   var chr = getChar(e);
   console.log("Char pressed: " + chr);
   if(chr == ',' || chr == '.')
   {   
       // iKShS.value.replace(/[\,|\.]+/g,'');
       e.preventDefault();
       return;
   }
   if(chr == null) return;

   if (chr < '0' || chr > '9') {
       return false;
   }
};

KRS485.addEventListener('focus', ()=>{
    KRS485.style.boxShadow = 'none';
});

KRS485.addEventListener('blur', ()=>{
   if(KRS485.value.search(regEx) == -1){
   if(parseInt(KRS485.value, 10) >= 0 && parseInt(KRS485.value, 10) <= 160){
        ConnSysRS485.KRS485 = parseInt(KRS485.value, 10);
        KRS485_checked.checked = true;
       KRS485.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       pressedBtnsKRSCount['KRS485'] = true;
       console.log("KRS485: "+ ConnSysRS485.KRS485);
   }
   else if(KRS485.value == ""){
        ConnSysRS485.KRS485 = 0;
        pressedBtnsKRSCount['KRS485'] = false;
        KRS485_checked.checked = false;
       console.log("KRS485: "+  ConnSysRS485.KRS485);
       return;
   }
   else
       {
        KRS485.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
       }
   }
   else
   KRS485.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';  
});
//Funcs------------------------------

function hideAutoObnar(){
    if(lineLoops.length){
        for (let i = 0; i < lineLoops.length; i++) {
            dynamicEventHandlers[i][1].style.display = 'none';
            dynamicEventHandlers[i][4].style.display = 'none';
            dynamicEventHandlers[i][9].style.display = 'none';
            dynamicEventHandlers[i][13].style.display = 'none';
            // dynamicEventHandlers[i][17].style.display = 'none';
            // dynamicEventHandlers[i][21].style.display = 'none';
            // dynamicEventHandlers[i][26].style.display = 'none';
            
        }
    }
}

//обработка событий ТШС
function setTShS(handlerArr, size, dataToSave){
    if(size){
        for (let i = 0; i < size; i++) {
            handlerArr[i][0].onchange = ()=>{
                        if(handlerArr[i][0].selectedIndex == 1){
                            
                            //shleifCount['TShS'] = true;
                            //shleifCount[`SKhShS${i}`] = false;
                            shleifCount[`ZonaShS${i}`] = false;
                            shleifCount[`AdrShS${i}`] = false;

                            izvBezAdrCount[`TIZVauto${i}`] = false;
                            izvBezAdrCount[`IOIZV${i}`] = false;
                            izvBezAdrCount[`IPIZV${i}`] = false;
                            modbusCount[`KMBUSLNK${i}`] = true;

                            hideIzv(dynamicEvHandlerIZV, i, dataToSave);
                            handlerArr[i][8].value = "";
                            handlerArr[i][8].style.boxShadow = 'none';
                            shleifCount[`KIZVShS${i}`] = false;
                            dataToSave[i].KIZVShS = 0;

                            dataToSave[i].TShS = handlerArr[i][0].selectedIndex;
                            //console.log(i + " ТШС: " + dataToSave[i].TShS);
                            handlerArr[i][13].style.display = 'block';
                            //handlerArr[i][17].style.display = 'none';
                            handlerArr[i][1].style.display = 'block';
                            handlerArr[i][9].style.display = 'block';
                            handlerArr[i][12].style.display = 'none';
                            //handlerArr[i][21].style.display = 'block';
                            handlerArr[i][5].style.display = 'block';
                            handlerArr[i][11].style.display = 'block';
                            //handlerArr[i][20].style.display = 'none';
                            //handlerArr[i][26].style.display = 'none';
                            handlerArr[i][7].style.display = 'none';
                            if(izvBtnsID[i])
                                izvBtnsID[i].style.display = 'none';

                            if(lineLoopsData[i].KIZVShS != 0){
                                for (let j = 0; j < lineLoopsData[i].KIZVShS; j++) {
                                    if(dynamicEvHandlerIZV[i][j][4]  &&
                                        dynamicEvHandlerIZV[i][j][0] ){                                       
                                            dynamicEvHandlerIZV[i][j][4].style.display = 'none';
                                            dynamicEvHandlerIZV[i][j][0].style.display = 'none';
                                        }
                                }
                            }
                            document.querySelector(`.RRIShS_p_${i}`).style.display = 'none';
                
                            // while(handlerArr[i][7].firstChild)
                            //     handlerArr[i][7].removeChild(handlerArr[i][7].firstChild);
                                
                            //     oOption = document.createElement("option");
                            //     oOption.appendChild(document.createTextNode("Выберите тип:"));
                            //     oOption.setAttribute("value", "");
                            //     handlerArr[i][7].appendChild(oOption);   
                               
                            //     for (let j = 0; j < IntermediateModules.length; j++) {
                            //         for(let prop in IntermediateModules[j]){
                            //             if(IntermediateModules[j][prop] == "BIZ"){
                            //                 oOption = document.createElement("option")
                            //                 oOption.appendChild(document.createTextNode(IntermediateModules[j].name));
                            //                 oOption.setAttribute("value", "");
                            //                 handlerArr[i][7].appendChild(oOption);   
                            //             }
                            //         }        
                            //     }

                                while(handlerArr[i][6].firstChild)
                                handlerArr[i][6].removeChild(handlerArr[i][6].firstChild);
                            
                                        let oOption = document.createElement("option");
                                        // oOption.appendChild(document.createTextNode("Выберите тип:"));
                                        // oOption.setAttribute("value", "");
                                        // handlerArr[i][6].appendChild(oOption);  
                                        for (let j = 0; j < IntermediateModules.length; j++) {
                                            for(let prop in IntermediateModules[j]){
                                                if(IntermediateModules[j][prop] == "BIZ"){
                                                    oOption = document.createElement("option");
                                                    //oOption.appendChild(document.createTextNode(IntermediateModules[j].name));
                                                    oOption.setAttribute("value", IntermediateModules[j].name);
                                                    handlerArr[i][6].appendChild(oOption);   
                                                }
                                            }        
                                        }

                        }
                        else if(handlerArr[i][0].selectedIndex == 0 ){
                            //shleifCount['TShS'] = true;
                            modbusCount[`KMBUSLNK${i}`] = true;
                            //shleifCount[`SKhShS${i}`] = true;
                            shleifCount[`ZonaShS${i}`] = true;
                            shleifCount[`AdrShS${i}`] = true;
                            izvBezAdrCount[`TIZVauto${i}`] = true;
                            izvBezAdrCount[`IOIZV${i}`] = true;
                            izvBezAdrCount[`IPIZV${i}`] = true;

                            dataToSave[i].TShS = handlerArr[i][0].selectedIndex;
                            //console.log(i + " ТШС: " + dataToSave[i].TShS);
                            hideIzv(dynamicEvHandlerIZV, i, dataToSave);
                            handlerArr[i][8].value = "";
                            handlerArr[i][8].style.boxShadow = 'none';
                            shleifCount[`KIZVShS${i}`] = false;
                            dataToSave[i].KIZVShS = 0;

                            if(dataToSave[i].ExShS == true && dataToSave[i].KIZVShS >= 1){
                                //handlerArr[i][17].style.display = 'block';
                            }                                
                            else{
                                //handlerArr[i][13].style.display = 'block';
                            }
                                
                            
                            handlerArr[i][1].style.display = 'none';
                            handlerArr[i][9].style.display = 'none';
                            handlerArr[i][11].style.display = 'none';
                            handlerArr[i][12].style.display = 'block';
                            handlerArr[i][13].style.display = 'none';
                            handlerArr[i][5].style.display = 'none';
                            handlerArr[i][7].style.display = 'block';
                            //handlerArr[i][20].style.display = 'block';
                            //handlerArr[i][26].style.display = 'none';             
                            document.querySelector(`.RRIShS_p_${i}`).style.display = 'block';

                            while(handlerArr[i][7].firstChild)
                                handlerArr[i][7].removeChild(handlerArr[i][7].firstChild);
                
                            let oOption = document.createElement("option");
                            oOption.appendChild(document.createTextNode("Выберите тип:"));
                            oOption.setAttribute("value", "");
                            handlerArr[i][7].appendChild(oOption);  
                            for (let j = 0; j < IntermediateModules.length; j++) {
                                for(let prop in IntermediateModules[j]){
                                    if(IntermediateModules[j][prop] == "I"){
                                        oOption = document.createElement("option");
                                        oOption.appendChild(document.createTextNode(IntermediateModules[j].name));
                                        oOption.setAttribute("value", "");
                                        handlerArr[i][7].appendChild(oOption);   
                                    }
                                }        
                            }
                        }
                        else{
                            //shleifCount['TShS'] = true;
                            hideIzv(dynamicEvHandlerIZV, i, dataToSave);
                            handlerArr[i][8].value = "";
                            handlerArr[i][8].style.boxShadow = 'none';
                            shleifCount[`KIZVShS${i}`] = false;
                            dataToSave[i].KIZVShS = 0;

                            modbusCount[`KMBUSLNK${i}`] = false;
                            //shleifCount[`SKhShS${i}`] = true;
                            shleifCount[`ZonaShS${i}`] = true;
                            shleifCount[`AdrShS${i}`] = true;
                            izvBezAdrCount[`TIZVauto${i}`] = true;
                            izvBezAdrCount[`IOIZV${i}`] = true;
                            izvBezAdrCount[`IPIZV${i}`] = true;

                            dataToSave[i].TShS = handlerArr[i][0].selectedIndex;
                            //console.log(i + " ТШС: " + dataToSave[i].TShS);
                            //handlerArr[i][26].style.display = 'block';
                            handlerArr[i][7].style.display = 'none';
                            handlerArr[i][5].style.display = 'block';
                            handlerArr[i][13].style.display = 'none';
                            // handlerArr[i][17].style.display = 'none';
                            handlerArr[i][11].style.display = 'none';
                            handlerArr[i][12].style.display = 'block';
                            handlerArr[i][1].style.display = 'none';
                            handlerArr[i][9].style.display = 'none';
                            //handlerArr[i][20].style.display = 'block';
                            //handlerArr[i][21].style.display = 'none';
                            document.querySelector(`.RRIShS_p_${i}`).style.display = 'block';

                            if(izvBtnsID[i])
                                izvBtnsID[i].style.display = 'none';

                            if(lineLoopsData[i].KIZVShS != 0){
                                for (let j = 0; j < lineLoopsData[i].KIZVShS; j++) {
                                    if(dynamicEvHandlerIZV[i][j][4]  &&
                                        dynamicEvHandlerIZV[i][j][0] ){                                       
                                            dynamicEvHandlerIZV[i][j][4].style.display = 'none';
                                            dynamicEvHandlerIZV[i][j][0].style.display = 'none';
                                        }
                                }
                            }

                            while(handlerArr[i][7].firstChild)
                            handlerArr[i][7].removeChild(handlerArr[i][7].firstChild);
                            
                            let oOption = document.createElement("option");
                            oOption.appendChild(document.createTextNode("Выберите тип:"));
                            oOption.setAttribute("value", "");
                            handlerArr[i][7].appendChild(oOption);   
                           
                            for (let j = 0; j < IntermediateModules.length; j++) {
                                for(let prop in IntermediateModules[j]){
                                    if(IntermediateModules[j][prop] == "BIZ"){
                                        oOption = document.createElement("option")
                                        oOption.appendChild(document.createTextNode(IntermediateModules[j].name));
                                        oOption.setAttribute("value", "");
                                        handlerArr[i][7].appendChild(oOption);   
                                    }
                                }        
                            }
                        }
            
            }
        }
    }
}

//обработка событий СХШС
function setSKhShS(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][2].onchange = ()=>{
            //shleifCount['SKhShS'] = true;
            dataToSave[i].SHShS = handlerArr[i][2].selectedIndex;
            console.log(i + " СХШС: " + dataToSave[i].SHShS);
        };
        
    }
}

//ЕхШС
function setExShS(handlerArr, size, dataToSave){
   for (let i = 0; i < size; i++) {
       
       
   
        if(handlerArr[i][3]){
            handlerArr[i][3].addEventListener('click', ()=>{
        if(handlerArr[i][3].checked)
        { 
            dataToSave[i].ExShS = true;
            if(handlerArr[i][5].value == "")
                shleifCount[`TShSBIZ${i}`] = false;
            handlerArr[i][4].style.display = 'block';
            if( dataToSave[i].TShS == 0){ 
                // handlerArr[i][13].style.display = 'none'; 
                // handlerArr[i][17].style.display = 'block';
               
                while(handlerArr[i][7].firstChild)
                    handlerArr[i][7].removeChild(handlerArr[i][7].firstChild);
                
                            let oOption = document.createElement("option");
                            oOption.appendChild(document.createTextNode("Выберите тип:"));
                            oOption.setAttribute("value", "");
                            handlerArr[i][7].appendChild(oOption);  
                            for (let j = 0; j < IntermediateModules.length; j++) {
                                for(let prop in IntermediateModules[j]){
                                    if(IntermediateModules[j][prop] == "I"){
                                        oOption = document.createElement("option");
                                        oOption.appendChild(document.createTextNode(IntermediateModules[j].name));
                                        oOption.setAttribute("value", "");
                                        handlerArr[i][7].appendChild(oOption);   
                                    }
                                }        
                            }
            }
            else{
                               
                while(handlerArr[i][6].firstChild)
                    handlerArr[i][6].removeChild(handlerArr[i][6].firstChild);
                
                            let oOption = document.createElement("option");
                            // oOption.appendChild(document.createTextNode("Выберите тип:"));
                            // oOption.setAttribute("value", "");
                            // handlerArr[i][6].appendChild(oOption);  
                            for (let j = 0; j < IntermediateModules.length; j++) {
                                for(let prop in IntermediateModules[j]){
                                    if(IntermediateModules[j][prop] == "BIZ"){
                                        oOption = document.createElement("option");
                                        //oOption.appendChild(document.createTextNode(IntermediateModules[j].name));
                                        oOption.setAttribute("value", IntermediateModules[j].name);
                                        handlerArr[i][6].appendChild(oOption);   
                                    }
                                }        
                            }
            }
            
        }
        else  {
            dataToSave[i].ExShS = false;
            shleifCount[`TShSBIZ${i}`] = true;
            handlerArr[i][4].style.display = 'none';
            if( dataToSave[i].TShS == 0) {
                // handlerArr[i][17].style.display = 'none'; 
                // handlerArr[i][13].style.display = 'block';
            }
        }
        //e.preventDefault();
    });
        
    }
}
}

//ТШСБИЗ
function setTShSBIZ(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][5].addEventListener('blur', (e)=>{
            if(dataToSave[i].ExShS == true){
                if(dataToSave[i].TShS == 1){
                    if(handlerArr[i][5].value == ""){
                        let flag = confirm("Взрывозащита типа \"d\"");
                        if(flag)
                        {
                            shleifCount[`TShSBIZ${i}`] = true;
                            console.log(shleifCount);
                            dataToSave[i].TShSBIZ = "Взрывозащита типа \"d\"";
                            handlerArr[i][5].value = "Взрывозащита типа \"d\"";
                            console.log("ТШСБИЗ: " + dataToSave[i].TShSBIZ);
                            handlerArr[i][7].style.display = 'none';
                            handlerArr[i][5].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                            e.preventDefault();
                            
                            return;
                        }
                        shleifCount[`TShSBIZ${i}`] = false;
                        handlerArr[i][5].style.boxShadow = 'none';
                        console.log(shleifCount);
                        //andlerArr[i][7].style.display = 'block';
                    }
                    else
                    {
                        shleifCount[`TShSBIZ${i}`] = true;
                        console.log(shleifCount);
                        dataToSave[i].TShSBIZ = handlerArr[i][5].value;
                        handlerArr[i][5].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                        console.log("ТШСБИЗ: " + dataToSave[i].TShSBIZ);
                    }
                }
                else{
                    if(handlerArr[i][5].value == ""){
                        shleifCount[`TShSBIZ${i}`] = false;
                        handlerArr[i][5].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                        console.log(shleifCount);
                        return;
                    }
                    else{
                    dataToSave[i].TShSBIZ = handlerArr[i][5].value;   
                    shleifCount[`TShSBIZ${i}`] = true;
                    handlerArr[i][5].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                    console.log("ТШСБИЗ: " + dataToSave[i].TShSBIZ);
                    }
                }
            }
        });
        
        handlerArr[i][5].addEventListener('focus', () =>{
            if(handlerArr[i][5].value == ""){
                handlerArr[i][5].style.boxShadow = 'none';
            }
        });
    }
}

//Тип искробаръера список
function setAdrBiz(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][7].onchange = ()=>{
            if(handlerArr[i][7].selectedIndex == 0){
                shleifCount[`TShSBIZ${i}`] = false;
                return;
            }
                

            shleifCount[`TShSBIZ${i}`] = true;
            dataToSave[i].TShSBIZ = handlerArr[i][7].options[handlerArr[i][7].selectedIndex].text;
            console.log(dataToSave[i].TShSBIZ );
        };        
    }
}

//КИЗВШС
function setKIZVShS(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        
        handlerArr[i][8].onkeypress = (e)=>{
            e = e || event;
        if (e.ctrlKey || e.altKey || e.metaKey) return;
        var chr = getChar(e);
        console.log("Char pressed: " + chr);
        if(chr == ',' || chr == '.')
        {   
            // iKShS.value.replace(/[\,|\.]+/g,'');
            e.preventDefault();
            return;
        }
        if(chr == null) return;

        if (chr < '0' || chr > '9') {
            return false;
        }
        };

        handlerArr[i][8].addEventListener('focus', ()=>{
                handlerArr[i][8].style.boxShadow = 'none';
            });

            handlerArr[i][8].addEventListener('blur', ()=>{
                if( handlerArr[i][8].value.search(regEx) == -1){
                if(parseInt( handlerArr[i][8].value, 10) >= 1 && parseInt( handlerArr[i][8].value, 10) <= 32){
                    dataToSave[i].KIZVShS = parseInt( handlerArr[i][8].value, 10);
                    shleifCount[`KIZVShS${i}`] = true;
                    handlerArr[i][8].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';

                    createIzv(i,dataToSave[i].KIZVShS);

                for (let j = 0; j < dataToSave[i].KIZVShS; j++) {
                    // curPosIzv[i] = [];
                    // nextPosIzv[i] = [];
                    // prevPosIzv[i] = [];



                    if(dataToSave[i].ExShS && dataToSave[i].TShS == 0){
                        //izvAdrDaCount[`TAIZV${i}-${j}`] = false;
                        izvAdrDaCount[`ZonaIzv${i}-${j}`] = false;
                        izvAdrDaCount[`AdrIZV${i}-${j}`] = false;
                    }
                    else if(!dataToSave[i].ExShS &&dataToSave[i].TShS == 0){
                        //izvAdrNetCount[`TAIZV${i}-${j}`] = false;
                        izvAdrNetCount[`ZonaIzv${i}-${j}`] = false;
                        izvAdrNetCount[`AdrIZV${i}-${j}`] = false;
                    }
                    
                    
                }
                dynamicEvHandlerIZV = genIzvHandlers(lineLoops.length, 32, 10);
                //_izveshateli = genIzvHandlers(lineLoops.length, 32, 7);

                // izvBtnsID[i] = document.getElementById(`izvBtns${i}`);
                // izvLasPos[i] = document.getElementById(`izvBtnsPos${i}`);
                // izvLastSpan[i] = document.getElementById(`izvBtnslastPos${i}`);
                // izvBtnsNext[i] = document.getElementById(`izvBtnsNext${i}`);
                // izvBtnsPrev[i] = document.getElementById(`izvBtnsPrev${i}`);

                // izvPosition[curPos - 1] = 0;

                setHandlersIZV(dynamicEvHandlerIZV, i, dataToSave);

                for (let k = 0; k < dataToSave[i].KIZVShS; k++) {
                    console.log( dynamicEvHandlerIZV);
                    
                }
                hideIzv(dynamicEvHandlerIZV, i, dataToSave);

                // dynamicEvHandlerIZV[i][0][12].min = 1;
                // dynamicEvHandlerIZV[i][0][12].max = dataToSave[i].KIZVShS;

                // curPosIzv[i][0] = 0;
                // nextPosIzv[i][0] = 1;
                // prevPosIzv[i][0] = dataToSave[i].KIZVShS - 1;
                // izvLastSpan[i].innerHTML = ' из ' + dataToSave[i].KIZVShS;
                // izvLasPos[i].value =  curPosIzv[i][0] + 1;
                // izvLasPos[i].min = 1;
                // izvLasPos[i].max = dataToSave[i].KIZVShS;


                if(dataToSave[i].TShS == 0 && dataToSave[i].ExShS == false){
                    showIzvAdrExNet1(dynamicEvHandlerIZV, i, dataToSave[i].KIZVShS);
                }
                else if(dataToSave[i].TShS == 0 && dataToSave[i].ExShS == true){
                    showIzvAdrExDa1(dynamicEvHandlerIZV, i, dataToSave[i].KIZVShS);
                }
                else if(dataToSave[i].TShS == 2 ){
                    showIzvConfModbu1(dynamicEvHandlerIZV, i, dataToSave[i].KIZVShS);
                }

                // handlePrevIzv(i, dataToSave[curPos-1].KIZVShS, izvLasPos, izvBtnsPrev, dynamicEvHandlerIZV,
                //     dataToSave, curPosIzv, nextPosIzv, prevPosIzv);
                // handleNextIzv(i, dataToSave[curPos-1].KIZVShS,  izvLasPos, izvBtnsNext, dynamicEvHandlerIZV,
                //     dataToSave, curPosIzv, nextPosIzv, prevPosIzv);
                // handleIzvPos(i, dataToSave[curPos-1].KIZVShS, izvLasPos,  dynamicEvHandlerIZV, dataToSave,
                //     curPosIzv, nextPosIzv, prevPosIzv);

                setTAIZVadrNet(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli, izvAdrNetCount);
                setZonaIzvadrNet(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli, izvAdrNetCount);
                setAdrIZVadrNet(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli, izvAdrNetCount);
                setTAIZVadrDa(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli, izvAdrDaCount);
                setZonaIzvadrDa(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli, izvAdrDaCount);
                setAdrIZVadrDa(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli, izvAdrDaCount);
                setKMBUSLNK(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli);

                    console.log(i + "-КІЗВШС: " + dataToSave[i].KIZVShS);

                    // for (let i = 0; i < AutoSignalizatsiya.KShS; i++) {
                    //     for (let j = 0; j < array.length; j++) {
                    //         _izveshateli[i] = [];                            
                    //     }                       
                        
                    // }

                }
                else if( handlerArr[i][8].value == ""){
                    shleifCount[`KIZVShS${i}`] = false;
                    return;
                }
                else
                    {
                        handlerArr[i][8].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                    }
                }
                else
                    handlerArr[i][8].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
            }); 
    }  
}

//ЗОНАШС
function setZonaShS(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][10].onkeypress = (e)=>{
            e = e || event;
           if (e.ctrlKey || e.altKey || e.metaKey) return;
           var chr = getChar(e);
           console.log("Char pressed: " + chr);
           if(chr == ',' || chr == '.')
           {   
               // iKShS.value.replace(/[\,|\.]+/g,'');
               e.preventDefault();
               return;
           }
           if(chr == null) return;
    
           if (chr < '0' || chr > '9') {
               return false;
           }
        };
    
        handlerArr[i][10].addEventListener('focus', ()=>{
            handlerArr[i][10].style.boxShadow = 'none';
        });
    
        handlerArr[i][10].addEventListener('blur', ()=>{
            if(handlerArr[i][10].value.search(regEx) == -1){
            if(parseInt(handlerArr[i][10].value, 10) >= 1 && parseInt(handlerArr[i][10].value, 10) <= 255){
                dataToSave[i].ZONAShS = parseInt(handlerArr[i][10].value, 10);
                handlerArr[i][10].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                shleifCount[`ZonaShS${i}`] = true;
                console.log(i + " - ЗОНАШС: " + dataToSave[i].ZONAShS);
            }
            else if(handlerArr[i][10].value == ""){
                shleifCount[`ZonaShS${i}`] = false;
                return;
            }
            else
                {
                    handlerArr[i][10].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                }
            }
            else
                handlerArr[i][10].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
        });
        
    }

}

// АДРШС
function setAdrShS(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][11].addEventListener('focus', ()=>{
                handlerArr[i][11].style.boxShadow = 'none';
            });

            handlerArr[i][11].addEventListener('blur', ()=>{
                if(handlerArr[i][11].value == ""){ 
                    handlerArr[i][11].style.boxShadow = 'none';
                    shleifCount[`AdrShS${i}`] = false;
                    return;
                }
                else if(handlerArr[i][11].value.length <= 20){
                    dataToSave[i].ADRShS = handlerArr[i][11].value;
                    shleifCount[`AdrShS${i}`] = true;
                    handlerArr[i][11].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                    console.log(i + " АДРШС: " + dataToSave[i].ADRShS + " L: " + dataToSave[i].ADRShS.length);
                }
                else
                    handlerArr[i][11].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
            });
    }
}

//РРИШС

function setRRIShS(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][12].addEventListener('click', ()=>{
        if(handlerArr[i][12].checked)
        { 
            dataToSave[i].RRIShS = true;
            if(dataToSave[i].KIZVShS ){
                for(let j = 0; j < dataToSave[i].KIZVShS; j++){
                    if(dynamicEvHandlerIZV[i][j][1] && dataToSave[i].TShS == 0 )
                        createOption(dynamicEvHandlerIZV[i][j][1] , "ИАР");
                    if(dynamicEvHandlerIZV[i][j][5] && dataToSave[i].TShS == 0 )
                        createOption(dynamicEvHandlerIZV[i][j][5] , "ИАР-01");
                }
            }
                // createOption(handlerArr[i][14], "ИАР");
                // createOption(handlerArr[i][18], "ИАР-01");
        }
        else  {
            dataToSave[i].RRIShS = false;
            for(let j = 0; j < dataToSave[i].KIZVShS; j++){
                if(dynamicEvHandlerIZV[i][j][1] && dataToSave[i].TShS == 0 )
                    dynamicEvHandlerIZV[i][j][1].removeChild(dynamicEvHandlerIZV[i][j][1].lastChild);
                if(dynamicEvHandlerIZV[i][j][5] && dataToSave[i].TShS == 0 )
                    dynamicEvHandlerIZV[i][j][5].removeChild(dynamicEvHandlerIZV[i][j][5].lastChild);
            }
                // handlerArr[i][14].removeChild(handlerArr[i][14].lastChild);
                // handlerArr[i][18].removeChild(handlerArr[i][18].lastChild);
        }
    });
        
    }
}

//Обработка конф ТШС="Адр" ЕхШС ="нет"
//ТАИЗВ
function setTAIZVadrNet(handlerArr, size, KIZVsize, dataToSave){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < KIZVsize; j++) {
            if(handlerArr[i][j][1]){
                handlerArr[i][j][1].onchange = ()=>{
                    dataToSave[i][j][0] = handlerArr[i][j][1].selectedIndex;
                    //izvAdrNetCount[`TAIZV${i}-${j}`] = true;
                    console.log("Шлейф: " + i + " изв: " + j + " - ТАИЗВ: " +  dataToSave[i][j][0]);
                };   
            }
        }
    }
}

function setTAIZVadrNet(handlerArr, size, KIZVsize, dataToSave, izvAdrNetCount){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < KIZVsize; j++) {
            if(handlerArr[i][j][1]){
                handlerArr[i][j][1].onchange = ()=>{
                    dataToSave[i][j][0] = handlerArr[i][j][1].selectedIndex;
                    //izvAdrNetCount[`TAIZV${i}-${j}`] = true;
                    console.log("Шлейф: " + i + " изв: " + j + " - ТАИЗВ: " +  dataToSave[i][j][0]);
                };   
            }
        }
    }
}

//Зона
function setZonaIzvadrNet(handlerArr, size, KIZVsize, dataToSave){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < KIZVsize; j++) {
            if(handlerArr[i][j][2]){
                    handlerArr[i][j][2].onkeypress = (e)=>{
                        e = e || event;
                        if (e.ctrlKey || e.altKey || e.metaKey) return;
                        var chr = getChar(e);
                        console.log("Char pressed: " + chr);
                        if(chr == ',' || chr == '.')
                        {   
                            // iKShS.value.replace(/[\,|\.]+/g,'');
                            e.preventDefault();
                            return;
                        }
                        if(chr == null) return;
        
                        if (chr < '0' || chr > '9') {
                            return false;
                        }
                    };
                

                
                    handlerArr[i][j][2].addEventListener('focus', ()=>{
                        handlerArr[i][j][2].style.boxShadow = 'none';
                    });
                

    
                handlerArr[i][j][2].addEventListener('blur', ()=>{
                    if(handlerArr[i][j][2].value.search(regEx) == -1){
                    if(parseInt(handlerArr[i][j][2].value, 10) >= 1 && parseInt(handlerArr[i][j][2].value, 10) <= 255){
                        dataToSave[i][j][1] = parseInt(handlerArr[i][j][2].value, 10);
                        handlerArr[i][j][2].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                        //izvAdrNetCount[`ZonaIzv${i}-${j}`] = true;
                        console.log(j + " ЗонаИзв: " + dataToSave[i][j][1]);
                    }
                    else if(handlerArr[i][j][2].value == ""){
                        //izvAdrNetCount[`ZonaIzv${i}-${j}`] = false;
                        return;
                    }
                    else
                        {
                            handlerArr[i][j][2].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                        }
                    }
                    else
                        handlerArr[i][j][2].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                });
            }
        }
    }
}

function setZonaIzvadrNet(handlerArr, size, KIZVsize, dataToSave, izvAdrNetCount){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < KIZVsize; j++) {
            if(handlerArr[i][j][2]){
                    handlerArr[i][j][2].onkeypress = (e)=>{
                        e = e || event;
                        if (e.ctrlKey || e.altKey || e.metaKey) return;
                        var chr = getChar(e);
                        console.log("Char pressed: " + chr);
                        if(chr == ',' || chr == '.')
                        {   
                            // iKShS.value.replace(/[\,|\.]+/g,'');
                            e.preventDefault();
                            return;
                        }
                        if(chr == null) return;
        
                        if (chr < '0' || chr > '9') {
                            return false;
                        }
                    };
                

                
                    handlerArr[i][j][2].addEventListener('focus', ()=>{
                        handlerArr[i][j][2].style.boxShadow = 'none';
                    });
                

    
                handlerArr[i][j][2].addEventListener('blur', ()=>{
                    if(handlerArr[i][j][2].value.search(regEx) == -1){
                    if(parseInt(handlerArr[i][j][2].value, 10) >= 1 && parseInt(handlerArr[i][j][2].value, 10) <= 255){
                        dataToSave[i][j][1] = parseInt(handlerArr[i][j][2].value, 10);
                        handlerArr[i][j][2].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                        izvAdrNetCount[`ZonaIzv${i}-${j}`] = true;
                        console.log(i + " ЗонаИзв: " + dataToSave[i][j][1]);
                    }
                    else if(handlerArr[i][j][2].value == ""){
                        izvAdrNetCount[`ZonaIzv${i}-${j}`] = false;
                        return;
                    }
                    else
                        {
                            handlerArr[i][j][2].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                        }
                    }
                    else
                        handlerArr[i][j][2].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                });
            }
        }
    }
}


//АДРИЗВ
function setAdrIZVadrNet(handlerArr, size, KIZVsize, dataToSave){
    for (let i = 0; i < size; i++) {
            for (let j = 0; j < KIZVsize; j++) {
                if(handlerArr[i][j][3]){

                
                handlerArr[i][j][3].addEventListener('focus', ()=>{
                    handlerArr[i][j][3].style.boxShadow = 'none';
                });
            
                handlerArr[i][j][3].addEventListener('blur', ()=>{
                    if(handlerArr[i][j][3].value == ""){ 
                        //izvAdrNetCount[`AdrIZV${i}-${j}`] = false;
                        handlerArr[i][j][3].style.boxShadow = 'none';
                        return;
                    }
                    else if(handlerArr[i][j][3].value.length <= 20){
                        dataToSave[i][j][2] = handlerArr[i][j][3].value;
                        handlerArr[i][j][3].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                        //izvAdrNetCount[`AdrIZV${i}-${j}`] = true;
                        console.log(i + "АДРИЗВ: " + dataToSave[i][j][2] + " L: " + dataToSave[i][j][2]);
                    }
                    else
                        handlerArr[i][j][3].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                }); 
            } 
        } 
    }
}

function setAdrIZVadrNet(handlerArr, size, KIZVsize, dataToSave, izvAdrNetCount){
    for (let i = 0; i < size; i++) {
            for (let j = 0; j < KIZVsize; j++) {
                if(handlerArr[i][j][3]){

                
                handlerArr[i][j][3].addEventListener('focus', ()=>{
                    handlerArr[i][j][3].style.boxShadow = 'none';
                });
            
                handlerArr[i][j][3].addEventListener('blur', ()=>{
                    if(handlerArr[i][j][3].value == ""){ 
                        izvAdrNetCount[`AdrIZV${i}-${j}`] = false;
                        handlerArr[i][j][3].style.boxShadow = 'none';
                        return;
                    }
                    else if(handlerArr[i][j][3].value.length <= 20){
                        dataToSave[i][j][2] = handlerArr[i][j][3].value;
                        handlerArr[i][j][3].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                        izvAdrNetCount[`AdrIZV${i}-${j}`] = true;
                        console.log(i + "АДРИЗВ: " + dataToSave[i][j][2] + " L: " + dataToSave[i][j][2]);
                    }
                    else
                        handlerArr[i][j][3].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                }); 
            } 
        } 
    }
}

// //Обработка конф ТШС="Адр" ЕхШС ="да"
// //ТАИЗВ
function setTAIZVadrDa(handlerArr, size, KIZVsize, dataToSave){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < KIZVsize; j++) {
            if( handlerArr[i][j][5]){
                handlerArr[i][j][5].onchange = ()=>{
                    dataToSave[i][j][3] = handlerArr[i][j][5].selectedIndex;
                    //izvAdrDaCount[`TAIZV${i}-${j}`] = true;
                    console.log("Шлейф: " + i + " изв(adrDa): " + j + " - ТАИЗВ: " +  dataToSave[i][j][3]);
                }; 
            }  
        }
    }
}

function setTAIZVadrDa(handlerArr, size, KIZVsize, dataToSave, izvAdrDaCount){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < KIZVsize; j++) {
            if( handlerArr[i][j][5]){
                handlerArr[i][j][5].onchange = ()=>{
                    dataToSave[i][j][3] = handlerArr[i][j][5].selectedIndex;
                    //izvAdrDaCount[`TAIZV${i}-${j}`] = true;
                    console.log("Шлейф: " + i + " изв(adrDa): " + j + " - ТАИЗВ: " +  dataToSave[i][j][3]);
                }; 
            }  
        }
    }
}


//Зона
function setZonaIzvadrDa(handlerArr, size, KIZVsize, dataToSave){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < KIZVsize; j++) {
            if(handlerArr[i][j][6]){
                handlerArr[i][j][6].onkeypress = (e)=>{
                    e = e || event;
                   if (e.ctrlKey || e.altKey || e.metaKey) return;
                   var chr = getChar(e);
                   console.log("Char pressed: " + chr);
                   if(chr == ',' || chr == '.')
                   {   
                       // iKShS.value.replace(/[\,|\.]+/g,'');
                       e.preventDefault();
                       return;
                   }
                   if(chr == null) return;
    
                   if (chr < '0' || chr > '9') {
                       return false;
                   }
                };
    
                handlerArr[i][j][6].addEventListener('focus', ()=>{
                    handlerArr[i][j][6].style.boxShadow = 'none';
                });
    
                handlerArr[i][j][6].addEventListener('blur', ()=>{
                    if(handlerArr[i][j][6].value.search(regEx) == -1){
                    if(parseInt(handlerArr[i][j][6].value, 10) >= 1 && parseInt(handlerArr[i][j][6].value, 10) <= 255){
                        dataToSave[i][j][4] = parseInt(handlerArr[i][j][6].value, 10);
                        handlerArr[i][j][6].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                        //izvAdrDaCount[`ZonaIzv${i}-${j}`] = true;
                        console.log(i + " ЗонаИзв: " + dataToSave[i][j][4]);
                    }
                    else if(handlerArr[i][j][6].value == ""){
                        //izvAdrDaCount[`ZonaIzv${i}-${j}`] = false;
                        return;
                    }
                    else
                        {
                            handlerArr[i][j][6].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                        }
                    }
                    else
                        handlerArr[i][j][6].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                }); 
            }
        } 
    }
}

function setZonaIzvadrDa(handlerArr, size, KIZVsize, dataToSave, izvAdrDaCount){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < KIZVsize; j++) {
            if(handlerArr[i][j][6]){
                handlerArr[i][j][6].onkeypress = (e)=>{
                    e = e || event;
                   if (e.ctrlKey || e.altKey || e.metaKey) return;
                   var chr = getChar(e);
                   console.log("Char pressed: " + chr);
                   if(chr == ',' || chr == '.')
                   {   
                       // iKShS.value.replace(/[\,|\.]+/g,'');
                       e.preventDefault();
                       return;
                   }
                   if(chr == null) return;
    
                   if (chr < '0' || chr > '9') {
                       return false;
                   }
                };
    
                handlerArr[i][j][6].addEventListener('focus', ()=>{
                    handlerArr[i][j][6].style.boxShadow = 'none';
                });
    
                handlerArr[i][j][6].addEventListener('blur', ()=>{
                    if(handlerArr[i][j][6].value.search(regEx) == -1){
                    if(parseInt(handlerArr[i][j][6].value, 10) >= 1 && parseInt(handlerArr[i][j][6].value, 10) <= 255){
                        dataToSave[i][j][4] = parseInt(handlerArr[i][j][6].value, 10);
                        handlerArr[i][j][6].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                        izvAdrDaCount[`ZonaIzv${i}-${j}`] = true;
                        console.log(i + " ЗонаИзв: " + dataToSave[i][j][4]);
                    }
                    else if(handlerArr[i][j][6].value == ""){
                        izvAdrDaCount[`ZonaIzv${i}-${j}`] = false;
                        return;
                    }
                    else
                        {
                            handlerArr[i][j][6].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                        }
                    }
                    else
                        handlerArr[i][j][6].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                }); 
            }
        } 
    }
}


//АДРИЗВ
function setAdrIZVadrDa(handlerArr, size, KIZVsize, dataToSave){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < KIZVsize; j++) {
            if(handlerArr[i][j][7]){
                handlerArr[i][j][7].addEventListener('focus', ()=>{
                    handlerArr[i][j][7].style.boxShadow = 'none';
                });
            
                handlerArr[i][j][7].addEventListener('blur', ()=>{
                    if(handlerArr[i][j][7].value == ""){ 
                        //izvAdrDaCount[`AdrIZV${i}-${j}`] = false;
                        handlerArr[i][j][7].style.boxShadow = 'none';
                        return;
                    }
                    else if(handlerArr[i][j][7].value.length <= 20){
                        dataToSave[i][j][5] = handlerArr[i][j][7].value;
                        handlerArr[i][j][7].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                        //izvAdrDaCount[`AdrIZV${i}-${j}`] = true;
                        console.log(i + "АДРИЗВ: " + dataToSave[i][j][5] + " L: " + dataToSave[i][j][5].length);
                    }
                    else
                        handlerArr[i][j][7].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                }); 
            } 
        }
    }
}

function setAdrIZVadrDa(handlerArr, size, KIZVsize, dataToSave, izvAdrDaCount){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < KIZVsize; j++) {
            if(handlerArr[i][j][7]){
                handlerArr[i][j][7].addEventListener('focus', ()=>{
                    handlerArr[i][j][7].style.boxShadow = 'none';
                });
            
                handlerArr[i][j][7].addEventListener('blur', ()=>{
                    if(handlerArr[i][j][7].value == ""){ 
                        izvAdrDaCount[`AdrIZV${i}-${j}`] = false;
                        handlerArr[i][j][7].style.boxShadow = 'none';
                        return;
                    }
                    else if(handlerArr[i][j][7].value.length <= 20){
                        dataToSave[i][j][5] = handlerArr[i][j][7].value;
                        handlerArr[i][j][7].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                        izvAdrDaCount[`AdrIZV${i}-${j}`] = true;
                        console.log(i + "АДРИЗВ: " + dataToSave[i][j][5] + " L: " + dataToSave[i][j][5].length);
                    }
                    else
                        handlerArr[i][j][7].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                }); 
            } 
        }
    }
}


const regExBroken = /\d*(\.|\,)?\d+?/g;
// //Обработка конф ТШС="безадресный" 
let enteredVals = [], wordsCount = []; // Введнные пользователем значения
// //TIZV
function setTIZVauto(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][14].addEventListener('focus', ()=>{
            handlerArr[i][14].style.boxShadow = 'none';
        });

        handlerArr[i][14].addEventListener('blur', ()=>{
            if(handlerArr[i][14].value == ""){ 
                izvBezAdrCount[`TIZVauto${i}`] = false;
                handlerArr[i][14].style.boxShadow = 'none';
                return;
            }
            else if(handlerArr[i][14].value.length <= 20){
                dataToSave[i].izveshateli.KonfIzvBezAdr.TIZV = handlerArr[i][14].value;
                izvBezAdrCount[`TIZVauto${i}`] = true;
                //добавляем введённую инфу в массив
                addItemsDouble(handlerArr[i][15], i, handlerArr);
                // if(enteredVals.indexOf(iTIZV1.value) == -1){ 
                //     enteredVals.push(iTIZV1.value);
                //     let addToList = new addInfoToList(enteredVals);
                //     addToList.addItems(enteredItems);
                // }
                handlerArr[i][14].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                console.log(dataToSave[i].izveshateli.KonfIzvBezAdr.TIZV + " L: " + dataToSave[i].izveshateli.KonfIzvBezAdr.TIZV.length);
            }
            else
                handlerArr[i][14].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
        });
        
    }
}

///IOIZV
function setIOIZV(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][16].onkeypress = (e)=>{
            e = e || event;
           if (e.ctrlKey || e.altKey || e.metaKey) return;
           var chr = getChar(e);
           console.log("Char pressed: " + chr);
           if(chr == ',' || chr == '.')
           {   
               let count = 0, pos = -1;
               if(chr == ',' || chr == '.'){
                    if(handlerArr[i][16].value.indexOf('.') == -1)
                    {
                        while((pos = handlerArr[i][16].value.indexOf(',', pos + 1 )) != -1){
                            count++;
                        }
                        if(count >= 1) {e.preventDefault(); count = 0; return;}
                        else { count = 0;  }
                    }
                    else
                    {
                        while((pos = handlerArr[i][16].value.indexOf('.', pos + 1 )) != -1){
                            count++;
                        }
                        if(count >= 1) {e.preventDefault(); count = 0; return;}
                        else  { count = 0;  }   
                    }
               }

               return;
           }
           if(chr == null) return;

           if (chr < '0' || chr > '9') {
               return false;
           }
        };

        handlerArr[i][16].addEventListener('focus', ()=>{
            handlerArr[i][16].style.boxShadow = 'none';
        });

        handlerArr[i][16].addEventListener('blur', ()=>{
            if(handlerArr[i][16].value.indexOf(',')== -1 && handlerArr[i][16].value.indexOf('.')== -1)
                handlerArr[i][16].value += ',0';
            if(handlerArr[i][16].value[handlerArr[i][16].value.length - 1] == '.' || handlerArr[i][16].value[handlerArr[i][16].value.length - 1] == ',')
                handlerArr[i][16].value += '0';

            if(handlerArr[i][16].value.search(regExBroken) != -1){
            
                if(handlerArr[i][16].value.indexOf(',')!= -1) handlerArr[i][16].value = handlerArr[i][16].value.replace(/\,/, '.');

            if(parseFloat(handlerArr[i][16].value) >= 0 && parseFloat(handlerArr[i][16].value) <= 32){
                dataToSave[i].izveshateli.KonfIzvBezAdr.IOIZV = parseFloat(handlerArr[i][16].value);
                izvBezAdrCount[`IOIZV${i}`] = true;
                handlerArr[i][16].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                console.log(  dataToSave[i].izveshateli.KonfIzvBezAdr.IOIZV);
            }
            else if(handlerArr[i][16].value == ""){
                izvBezAdrCount[`IOIZV${i}`]= false;
                return;
            }
            else
                {
                    handlerArr[i][16].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                }
            }
            else
                handlerArr[i][16].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
        }); 
        
    }
}

// //iIPIZV
function setiIPIZV(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][17].onkeypress = (e)=>{
            e = e || event;
           if (e.ctrlKey || e.altKey || e.metaKey) return;
           var chr = getChar(e);
           console.log("Char pressed: " + chr);
           if(chr == ',' || chr == '.')
           {   
               let count = 0, pos = -1;
               if(chr == ',' || chr == '.'){
                    if(handlerArr[i][17].value.indexOf('.') == -1)
                    {
                        while((pos = handlerArr[i][17].value.indexOf(',', pos + 1 )) != -1){
                            count++;
                        }
                        if(count >= 1) {e.preventDefault(); count = 0; return;}
                        else { count = 0;  }
                    }
                    else
                    {
                        while((pos = handlerArr[i][17].value.indexOf('.', pos + 1 )) != -1){
                            count++;
                        }
                        if(count >= 1) {e.preventDefault(); count = 0; return;}
                        else  { count = 0;  }   
                    }
               }

               return;
           }
           if(chr == null) return;

           if (chr < '0' || chr > '9') {
               return false;
           }
        };

        handlerArr[i][17].addEventListener('focus', ()=>{
            handlerArr[i][17].style.boxShadow = 'none';
        });

        handlerArr[i][17].addEventListener('blur', ()=>{
            if(handlerArr[i][17].value.indexOf(',')== -1 && handlerArr[i][17].value.indexOf('.')== -1)
                handlerArr[i][17].value += ',0';
            if(handlerArr[i][17].value[handlerArr[i][17].value.length - 1] == '.' || handlerArr[i][17].value[handlerArr[i][17].value.length - 1] == ',')
                handlerArr[i][17].value += '0';
            if(handlerArr[i][17].value.search(regExBroken) != -1){
            
                if(handlerArr[i][17].value.indexOf(',')!= -1) handlerArr[i][17].value = handlerArr[i][17].value.replace(/\,/, '.');

            if(parseFloat(handlerArr[i][17].value) >= 0 && parseFloat(handlerArr[i][17].value) <= 32){
                dataToSave[i].izveshateli.KonfIzvBezAdr.IPIZV = parseFloat(handlerArr[i][17].value);
                izvBezAdrCount[`IPIZV${i}`] = true;
                handlerArr[i][17].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                console.log(  dataToSave[i].izveshateli.KonfIzvBezAdr.IPIZV);
            }
            else if(handlerArr[i][17].value == ""){
                izvBezAdrCount[`IPIZV${i}`]  = false;
                return;
            }
            else
                {
                    handlerArr[i][17].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                }
            }
            else
                handlerArr[i][17].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
        });   
    }
}




// //Обработка конф ТШС="Modbus" 
// //iKMBUSLNK
function setKMBUSLNK(handlerArr, size, KIZVsize, dataToSave){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < KIZVsize; j++) {
            if(handlerArr[i][j][9]){
                handlerArr[i][j][9].onkeypress = (e)=>{
                    e = e || event;
                   if (e.ctrlKey || e.altKey || e.metaKey) return;
                   var chr = getChar(e);
                   console.log("Char pressed: " + chr);
                   if(chr == ',' || chr == '.')
                   {   
                       // iKShS.value.replace(/[\,|\.]+/g,'');
                       e.preventDefault();
                       return;
                   }
                   if(chr == null) return;

                   if (chr < '0' || chr > '9') {
                       return false;
                   }
                };

                handlerArr[i][j][9].addEventListener('focus', ()=>{
                    handlerArr[i][j][9].style.boxShadow = 'none';
                });

                handlerArr[i][j][9].addEventListener('blur', ()=>{
                    if(handlerArr[i][j][9].value.search(regEx) == -1){
                    if(parseInt(handlerArr[i][j][9].value, 10) >= 0 && parseInt(handlerArr[i][j][9].value, 10) <= 20){
                        dataToSave[i][j][6] = parseInt(handlerArr[i][j][9].value, 10);
                        modbusCount[`KMBUSLNK${i}`] = true;
                        handlerArr[i][j][9].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                        console.log("KMBUSLNK: "+ dataToSave[i][j][6]);
                    }
                    else if(handlerArr[i][j][9].value == ""){
                        modbusCount[`KMBUSLNK${i}`] = false;
                        return;
                    }
                    else
                        {
                            handlerArr[i][j][9].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                        }
                    }
                    else
                        handlerArr[i][j][9].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                });
            }
        }
    }
}

// Обработка кнопки сабмит шлейфа


// переменные для перемещения по извещателям
let curPosIzv = [], nextPosIzv = [], prevPosIzv = [], izvPosition = [];
let izvBtnsID = [], izvLasPos = [], izvLastSpan = [], izvBtnsNext = [], izvBtnsPrev = [],
_izveshateli = [];
_izveshateli = genIzvHandlers(640, 32, 7);
// function getIzv(){
//     if(AutoSignalizatsiya.KShS)
//         _izveshateli = genIzvHandlers(lineLoops.length, 32, 7);
// }
// getIzv();

function setDlsSbt(handlerArr, size, dataToSave){
    
    for (let i = 0; i < size; i++) {
        handlerArr[i][20].addEventListener('click', (e) => {
            e.preventDefault();
            if(dataToSave[i].KIZVShS >= 1){


                createIzv(i,dataToSave[i].KIZVShS);

                for (let j = 0; j < dataToSave[i].KIZVShS; j++) {
                    curPosIzv[i] = [];
                    nextPosIzv[i] = [];
                    prevPosIzv[i] = [];



                    if(dataToSave[i].ExShS){
                        //izvAdrDaCount[`TAIZV${i}-${j}`] = false;
                        izvAdrDaCount[`ZonaIzv${i}-${j}`] = false;
                        izvAdrDaCount[`AdrIZV${i}-${j}`] = false;
                    }
                    else{
                        //izvAdrNetCount[`TAIZV${i}-${j}`] = false;
                        izvAdrNetCount[`ZonaIzv${i}-${j}`] = false;
                        izvAdrNetCount[`AdrIZV${i}-${j}`] = false;
                    }
                    
                    
                }
                dynamicEvHandlerIZV = genIzvHandlers(lineLoops.length, 32, 10);
                //_izveshateli = genIzvHandlers(lineLoops.length, 32, 7);

                izvBtnsID[i] = document.getElementById(`izvBtns${i}`);
                izvLasPos[i] = document.getElementById(`izvBtnsPos${i}`);
                izvLastSpan[i] = document.getElementById(`izvBtnslastPos${i}`);
                izvBtnsNext[i] = document.getElementById(`izvBtnsNext${i}`);
                izvBtnsPrev[i] = document.getElementById(`izvBtnsPrev${i}`);

                izvPosition[curPos - 1] = 0;

                setHandlersIZV(dynamicEvHandlerIZV, i, dataToSave);

                for (let k = 0; k < dataToSave[i].KIZVShS; k++) {
                    console.log( dynamicEvHandlerIZV);
                    
                }
                hideIzv(dynamicEvHandlerIZV, i, dataToSave);

                // dynamicEvHandlerIZV[i][0][12].min = 1;
                // dynamicEvHandlerIZV[i][0][12].max = dataToSave[i].KIZVShS;

                curPosIzv[i][0] = 0;
                nextPosIzv[i][0] = 1;
                prevPosIzv[i][0] = dataToSave[i].KIZVShS - 1;
                izvLastSpan[i].innerHTML = ' из ' + dataToSave[i].KIZVShS;
                izvLasPos[i].value =  curPosIzv[i][0] + 1;
                izvLasPos[i].min = 1;
                izvLasPos[i].max = dataToSave[i].KIZVShS;


                if(dataToSave[i].TShS == 0 && dataToSave[i].ExShS == false){
                    showIzvAdrExNet(dynamicEvHandlerIZV, i, 0);
                }
                else if(dataToSave[i].TShS == 0 && dataToSave[i].ExShS == true){
                    showIzvAdrExDa(dynamicEvHandlerIZV, i, 0);
                }
                else{
                    showIzvConfModbu(dynamicEvHandlerIZV, i, 0);
                }

                handlePrevIzv(i, dataToSave[curPos-1].KIZVShS, izvLasPos, izvBtnsPrev, dynamicEvHandlerIZV,
                    dataToSave, curPosIzv, nextPosIzv, prevPosIzv);
                handleNextIzv(i, dataToSave[curPos-1].KIZVShS,  izvLasPos, izvBtnsNext, dynamicEvHandlerIZV,
                    dataToSave, curPosIzv, nextPosIzv, prevPosIzv);
                handleIzvPos(i, dataToSave[curPos-1].KIZVShS, izvLasPos,  dynamicEvHandlerIZV, dataToSave,
                    curPosIzv, nextPosIzv, prevPosIzv);

                setTAIZVadrNet(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli, izvAdrNetCount);
                setZonaIzvadrNet(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli, izvAdrNetCount);
                setAdrIZVadrNet(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli, izvAdrNetCount);
                setTAIZVadrDa(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli, izvAdrDaCount);
                setZonaIzvadrDa(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli, izvAdrDaCount);
                setAdrIZVadrDa(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli, izvAdrDaCount);
                setKMBUSLNK(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli);
            }
            else{
                handlerArr[i][8].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
            }
        });   
    }
}


//кнопки извещателей
function handlePrevIzv(curLine, KIZVSHsLength, izvLasPos1, 
                        btnPrevHndlr, dynamicEvHandlerIZV1, data,
                        curPosIzv1, nextPosIzv1, prevPosIzv1){
                //let i = curLine;
                     //for(let i = 0; i < curLine; i++){
                         if( btnPrevHndlr[curLine]){
                            btnPrevHndlr[curLine].addEventListener('click', (e)=>{
                                e.preventDefault();
                               // if(prevPosIzv1[i] < 1) prevPosIzv1[i]  = KIZVSHsLength - 1;
                                nextPosIzv1[curLine] = curPosIzv1[curLine];
                                curPosIzv1[curLine] = prevPosIzv1[curLine];
                                prevPosIzv1[curLine]--;
                                if(curPosIzv1[curLine] <= 0) prevPosIzv1[curLine] = KIZVSHsLength - 1;
                                izvLasPos1[curLine].value = parseInt(curPosIzv1[curLine], 10) + 1;
                                
                                hideIzv(dynamicEvHandlerIZV1, curLine, data);
                                let current = curPosIzv1[curLine];
                                if(data[curLine].TShS == 0 && data[curLine].ExShS == false){
                                    showIzvAdrExNet(dynamicEvHandlerIZV1, curLine, current);
                                }
                                else if(data[curLine].TShS == 0 && data[curLine].ExShS == true){
                                    showIzvAdrExDa(dynamicEvHandlerIZV1, curLine, curPosIzv1[curLine]);
                                }
                                else{
                                    showIzvConfModbu(dynamicEvHandlerIZV1, curLine, curPosIzv1[curLine]);
                                }
                            });
                         }
                //}
}

function handleNextIzv(curLine, KIZVSHsLength, izvLasPos1, 
    btnNextHndlr, dynamicEvHandlerIZV1, data,
    curPosIzv1, nextPosIzv1, prevPosIzv1){

       // let i = curLine;

        //for(let i = 0; i < curLine; i++){
            if(btnNextHndlr[curLine]){
                btnNextHndlr[curLine].addEventListener('click', (e)=>{
                    e.preventDefault();
                    if(nextPosIzv1[curLine] > KIZVSHsLength - 1) nextPosIzv1[curLine] = 0;
                    prevPosIzv1[curLine] = curPosIzv1[curLine];
                    curPosIzv1[curLine] = nextPosIzv1[curLine];
                    nextPosIzv1[curLine]++;
                    if(nextPosIzv1[curLine] > KIZVSHsLength + 1) nextPosIzv1[curLine] = 0;
                    izvLasPos1[curLine].value = parseInt(curPosIzv1[curLine], 10) + 1;
                    
                    hideIzv(dynamicEvHandlerIZV1, curLine, data);
        
                    if(data[curLine].TShS == 0 && data[curLine].ExShS == false){
                        showIzvAdrExNet(dynamicEvHandlerIZV1, curLine, curPosIzv1[curLine]);
                    }
                    else if(data[curLine].TShS == 0 && data[curLine].ExShS == true){
                        showIzvAdrExDa(dynamicEvHandlerIZV1, curLine, curPosIzv1[curLine]);
                    }
                    else{
                        showIzvConfModbu(dynamicEvHandlerIZV1, curLine, curPosIzv1[curLine]);
                    }
            
            });
            }
            
    //}  
}


function handleIzvPos(curLine, KIZVSHsLength, izvLasPos1, 
     dynamicEvHandlerIZV1, data,
    curPosIzv1, nextPosIzv1, prevPosIzv1){
        
        //let i = curLine;
       // for(let i = 0; i < curLine; i++){
            if(izvLasPos1[curLine]){
                izvLasPos1[curLine].addEventListener('blur', (e)=>{
                    e.preventDefault();
                    curPosIzv1[curLine] = parseInt(izvLasPos1[curLine].value, 10) - 1;
                    if(curPosIzv1[curLine] + 1 >= KIZVSHsLength){
                        nextPosIzv1[curLine] = 1;
                        prevPosIzv1[curLine] = curPosIzv1[curLine] - 1;
                    }
                    else if(curPosIzv1[curLine] - 1 < 1){
                        prevPosIzv1[curLine] = KIZVSHsLength - 1;
                        nextPosIzv1[curLine] = curPosIzv1[curLine] + 1;
                    }
                    else{
                        prevPosIzv1[curLine] = curPosIzv1[curLine] - 1;
                        nextPosIzv1[curLine] = curPosIzv1[curLine] + 1;
                    }
                        hideIzv(dynamicEvHandlerIZV1, curLine, data);
        
                        if(data[curLine].TShS == 0 && data[curLine].ExShS == false){
                            showIzvAdrExNet(dynamicEvHandlerIZV1, curLine, curPosIzv1[curLine]);
                        }
                        else if(data[curLine].TShS == 0 && data[curLine].ExShS == true){
                            showIzvAdrExDa(dynamicEvHandlerIZV1, curLine, curPosIzv1[curLine]);
                        }
                        else{
                            showIzvConfModbu(dynamicEvHandlerIZV1, curLine, curPosIzv1[curLine]);
                        }
                });
            }
            
            
       // }

}


// iKMBUSLNK1.onkeypress = (e)=>{
//    `dlgSbt${i}`
//     e = e || event;
//    if (e.ctrlKey || e.altKey || e.metaKey) return;
//    var chr = getChar(e);
//    console.log("Char pressed: " + chr);
//    if(chr == ',' || chr == '.')
//    {   
//        // iKShS.value.replace(/[\,|\.]+/g,'');
//        e.preventDefault();
//        return;
//    }
//    if(chr == null) return;

//    if (chr < '0' || chr > '9') {
//        return false;
//    }
// };

// iKMBUSLNK1.addEventListener('focus', ()=>{
//     iKMBUSLNK1.style.boxShadow = 'none';
// });

// iKMBUSLNK1.addEventListener('blur', ()=>{
//     if(iKMBUSLNK1.value.search(regEx) == -1){
//     if(parseInt(iKMBUSLNK1.value, 10) >= 0 && parseInt(iKMBUSLNK1.value, 10) <= 20){
//         AutoSignalizatsiya.KonfModbus.KMBUSLNK = parseInt(iKMBUSLNK1.value, 10);
//         iKMBUSLNK1.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//         console.log("KMBUSLNK: "+ AutoSignalizatsiya.KonfModbus.KMBUSLNK);
//     }
//     else if(iKMBUSLNK1.value == ""){
//         return;
//     }
//     else
//         {
//             iKMBUSLNK1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//         }
//     }
//     else
//         iKMBUSLNK1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });



//обработчик событий динамических форм шлейфов
function setDynHandlers(handlerArr, size){
    for (let i = 0; i < size; i++) {
        
        handlerArr[i][0] =document.getElementById(`TShS`+i);
        handlerArr[i][1] =document.getElementById(`bezAdr_${i}`);
        handlerArr[i][2] =document.getElementById(`SKhShS${i}`);
        handlerArr[i][3] =document.getElementById(`ExShS${i}`);
        handlerArr[i][4] =document.getElementById(`TypeBIZ${i}`);
        handlerArr[i][5] =document.getElementById(`TShSBIZ${i}`);
        handlerArr[i][6] =document.getElementById(`_adrBIZ${i}`);
        handlerArr[i][7] =document.getElementById(`adrBIZ${i}`);
        handlerArr[i][8] =document.getElementById(`KIZVShS${i}`);
        handlerArr[i][9] =document.getElementById(`bezAdr__${i}`);
        handlerArr[i][10] =document.getElementById(`ZONAShS${i}`);
        handlerArr[i][11] =document.getElementById(`ADRShS${i}`);
        handlerArr[i][12] =document.getElementById(`RRIShS${i}`);
        handlerArr[i][13] =document.getElementById(`bezAdr___${i}`);
        handlerArr[i][14] =document.getElementById(`TIZV${i}`);
        handlerArr[i][15] =document.getElementById(`enteredItems${i}`);
        handlerArr[i][16] =document.getElementById(`IOIZV${i}`);
        handlerArr[i][17] =document.getElementById(`IPIZV${i}`);
        handlerArr[i][18] =document.getElementById(`confModbus${i}`);
        handlerArr[i][19] =document.getElementById(`KMBUSLNK${i}`);        
        handlerArr[i][20] =document.getElementById(`dlgSbt${i}`);        
    }
 }

function hideLineLoops(arrLength){
    if(arrLength){
        for (let i = 0; i < arrLength; i++) {
            let el = document.getElementById( i.toString());
            el.style.display = 'none';
        }
    }
}

function showLineLoops(arrLength, pos){
    if(arrLength > pos || pos > 0){
            let el = document.getElementById( (pos-1).toString());
            el.style.display = 'block';
        
    }
}
function createOption(node, nodeText){
    let oOption = document.createElement('option');
    oOption.appendChild(document.createTextNode(nodeText));
    oOption.setAttribute("value", "");
    node.appendChild(oOption);  
}      

function getChar(event) {
    if (event.which == null) { // IE
      if (event.keyCode < 32) return null; // спец. символ
      return String.fromCharCode(event.keyCode);
    }
  
    if (event.which != 0 && event.charCode != 0) { // все кроме IE
      if (event.which < 32) return null; // спец. символ
      return String.fromCharCode(event.which); // остальные
    }
  
    return null; // спец. символ
  }

  function cislo(){
    if (event.keyCode < 48 || event.keyCode > 57)
    event.returnValue= false;
}

function addItemsDouble(node, ind, eHandler){
    let oOption, childNodes = []; 
    if(node.hasChildNodes()) 
    {
        for (let i = 0; i < node.childNodes.length; i++) {
            if(node.childNodes[i].nodeType == 1) 
            {   
                childNodes.push(node.childNodes[i].value)
            }
        }
    }
    else{
        oOption = document.createElement('option'); 
        oOption.setAttribute("value", eHandler[ind][14].value);
        node.appendChild(oOption);
        return;
    }


        if(childNodes.indexOf(eHandler[ind][14].value) == -1){
            oOption = document.createElement('option'); 
            oOption.setAttribute("value", eHandler[ind][14].value);
            node.appendChild(oOption);
        }

}



// динамическое создание извещателей
let dynamicEvHandlerIZV = [];



function createIzv(lineLoopIndex, qIzv){
    if(lineLoopIndex >= 0){
        let elem, subelem, option, mainDiv, subDiv, div, div_1, div_2;
        mainDiv = document.getElementById((curPos - 1).toString());

        // if(document.getElementById(`izvBtns${lineLoopIndex}`)){
        //     mainDiv.removeChild(document.getElementById(`izvBtns${lineLoopIndex}`));
        // }
        //     elem = document.createElement('div');
        //     elem.setAttribute('id', `izvBtns${lineLoopIndex}`);
        //     elem.setAttribute('class', `izvBtns_`);
                        
        //     subelem = document.createElement('button');
        //     subelem.setAttribute('id', `izvBtnsPrev${lineLoopIndex}`);
        //     subelem.setAttribute('class', `izvBtns-item`);
        //     subelem.appendChild(document.createTextNode('Пред.'));
    
        //     elem.appendChild(subelem);
    
        //     subelem = document.createElement('span');
        //     subelem.setAttribute('class', 'izvBtns-item');
        //     subelem.setAttribute('id', `izvSpan${lineLoopIndex}`);
        //     subelem.appendChild(document.createTextNode('Извещатель №'));
    
        //     elem.appendChild(subelem);
    
        //     subelem = document.createElement('input');
        //     subelem.setAttribute('type', 'number');
        //     subelem.setAttribute('id', `izvBtnsPos${lineLoopIndex}`);
        //     subelem.setAttribute('class', 'izvBtns-item');
    
        //     elem.appendChild(subelem);
    
        //     subelem = document.createElement('span');
        //     subelem.setAttribute('id', `izvBtnslastPos${lineLoopIndex}`);
        //     subelem.setAttribute('class', 'izvBtns-item');
    
        //     elem.appendChild(subelem);
    
        //     subelem = document.createElement('button');
        //     subelem.setAttribute('class', 'izvBtns-item');
        //     subelem.setAttribute('id', `izvBtnsNext${lineLoopIndex}`);
        //     subelem.appendChild(document.createTextNode('След.'));
    
        //     elem.appendChild(subelem);
    
        //     mainDiv.appendChild(elem);
        
    
            if(document.getElementById(`IZV${lineLoopIndex}`)){
                mainDiv.removeChild(document.getElementById(`IZV${lineLoopIndex}`));
            }
                subDiv = document.createElement('div');
                subDiv.setAttribute('id',`IZV${lineLoopIndex}`);
    
                for (let j = 0; j < qIzv; j++) {
    
    
    
                    //----------------------------------------------
                    
                    div = document.createElement('div');
                    div.setAttribute('id', `AdrExNet${lineLoopIndex}_${j}`)
                    div.style.border = '1px solid #000';
                    div.style.padding = '10px';
                    div.style.marginBottom = '15px';
    
                    // subelem = document.createElement('h3');
                    // subelem.appendChild(document.createTextNode('Конфигурация извещателя при адресном типе шлейфа и при отсутствии взрывозащиты'));
                    // div.appendChild(subelem);
                    subelem = document.createElement('h3');
                    subelem.appendChild(document.createTextNode(`Извещатель № ${j+1}`));
                    subelem.style.textAlign = 'center';
                    div.appendChild(subelem);

                    div_1 = document.createElement('div');
                    div_1.setAttribute('class', 'flex-items');

                    subelem = document.createElement('p');
                    
                    subelem.appendChild(document.createTextNode('Тип извещателя:'));
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
    
                    subelem = document.createElement('select');
                    
                    subelem.setAttribute('id', `TAIZV${lineLoopIndex}_${j}`);
                    option = document.createElement('option');
                    option.appendChild(document.createTextNode('ИАД'));
                    subelem.appendChild(option);
                    option = document.createElement('option');
                    option.appendChild(document.createTextNode('ИАТ'));
                    subelem.appendChild(option);
                    
                    if(lineLoopsData[lineLoopIndex].RRIShS == true){
                        option = document.createElement('option');
                        option.appendChild(document.createTextNode('ИАР'));
                        subelem.appendChild(option);
                    }
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
                                     
                    div_1 = document.createElement('div');
                    div_1.setAttribute('class', 'ARM');
    
                    subelem = document.createElement('p');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.appendChild(document.createTextNode('Зона:'));
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
    
                    subelem = document.createElement('input');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.setAttribute('type', 'number');
                    subelem.setAttribute('id', `ZONAIZV${lineLoopIndex}_${j}`);
                    subelem.setAttribute('placeholder', `1...255`);
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
    
                    div_1 = document.createElement('div');
                    div_1.setAttribute('class', 'ARM');

                    subelem = document.createElement('p');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.appendChild(document.createTextNode('Наименование/адрес:'));
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
    
                    
                    subelem = document.createElement('input');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.setAttribute('type', 'text');
                    subelem.setAttribute('id', `ADRIZV${lineLoopIndex}_${j}`);
                    subelem.setAttribute('placeholder', `до 20 символов...`);
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
    
                    subDiv.appendChild(div);
    
                    div = document.createElement('div');
                    div.setAttribute('id', `AdrExDa${lineLoopIndex}_${j}`);
                    div.style.border = '1px solid #000';
                    div.style.padding = '10px';
                    div.style.marginBottom = '15px';
    
                    subelem = document.createElement('h3');
                    subelem.appendChild(document.createTextNode(`Извещатель № ${j+1}`));
                    subelem.style.textAlign = 'center';
                    div.appendChild(subelem);
                    // subelem = document.createElement('h3');
                    // subelem.appendChild(document.createTextNode('Конфигурация извещателя при адресном типе шлейфа и при присутствии взрывозащиты'));
                    // div.appendChild(subelem);
    
                    div_1 = document.createElement('div');
                    div_1.setAttribute('class', 'flex-items');

                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode('Тип извещателя:'));
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
    
                    subelem = document.createElement('select');
                    subelem.setAttribute('id', `TAIZV_${lineLoopIndex}_${j}`);
                    option = document.createElement('option');
                    option.appendChild(document.createTextNode('ИАД-01'));
                    subelem.appendChild(option);
                    option = document.createElement('option');
                    option.appendChild(document.createTextNode('ИАТ-01'));
                    subelem.appendChild(option);

                    if(lineLoopsData[lineLoopIndex].RRIShS == true){
                        option = document.createElement('option');
                        option.appendChild(document.createTextNode('ИАР-01'));
                        subelem.appendChild(option);
                    }
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
                    
                    div_1 = document.createElement('div');
                    div_1.setAttribute('class', 'ARM');
    
                    subelem = document.createElement('p');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.appendChild(document.createTextNode("Зона:"));
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
    
                    subelem = document.createElement('input');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.setAttribute('type', 'number');
                    subelem.setAttribute('id', `ZONAIZV_${lineLoopIndex}_${j}`);
                    subelem.setAttribute('placeholder', '1...255');
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);

                    div_1 = document.createElement('div');
                    div_1.setAttribute('class', 'ARM');
    
                    subelem = document.createElement('p');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.appendChild(document.createTextNode('Наименование/адрес'));
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);

    
                    subelem = document.createElement('input');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.setAttribute('type', 'text');
                    subelem.setAttribute('id', `ADRIZV_${lineLoopIndex}_${j}`);
                    subelem.setAttribute('placeholder', 'до 20 символов...');
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
    
                    subDiv.appendChild(div);
    
                    div = document.createElement('div');
                    div.setAttribute('id', `confModbus${lineLoopIndex}_${j}`);
                    div.style.border = '1px solid #000';
                    div.style.padding = '10px';
                    div.style.marginBottom = '15px';
        
                    subelem = document.createElement('h3');
                    subelem.appendChild(document.createTextNode(`Извещатель № ${j+1}`));
                    subelem.style.textAlign = 'center';
                    div.appendChild(subelem);
                    // subelem = document.createElement('h3');
                    // subelem.appendChild(document.createTextNode('Конфигурация извещателя при ТШС "MODBUS"'));
                    // div.appendChild(subelem);
                    
                    div_1 = document.createElement('div');
                    div_1.setAttribute('class', 'ARM');

                    subelem = document.createElement('p');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.appendChild(document.createTextNode('Количество линий связи:'));
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
        
                    subelem = document.createElement('input');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.setAttribute('type', 'text');
                    subelem.setAttribute('id', `KMBUSLNK${lineLoopIndex}_${j}`);
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
        
                    subDiv.appendChild(div);
                 
                    mainDiv.appendChild(subDiv);
                       
            }
           
        }
}

function setHandlersIZV(eHandler, index, data){
    for (let i = 0; i < data[index].KIZVShS; i++) {
        eHandler[index][i][0] = document.getElementById(`AdrExNet${index}_${i}`);
        eHandler[index][i][1] = document.getElementById(`TAIZV${index}_${i}`);
        eHandler[index][i][2] = document.getElementById(`ZONAIZV${index}_${i}`);
        eHandler[index][i][3] = document.getElementById(`ADRIZV${index}_${i}`);
        eHandler[index][i][4] = document.getElementById(`AdrExDa${index}_${i}`);
        eHandler[index][i][5] = document.getElementById(`TAIZV_${index}_${i}`);
        eHandler[index][i][6] = document.getElementById(`ZONAIZV_${index}_${i}`);
        eHandler[index][i][7] = document.getElementById(`ADRIZV_${index}_${i}`);
        eHandler[index][i][8] = document.getElementById(`confModbus${index}_${i}`);
        eHandler[index][i][9] = document.getElementById(`KMBUSLNK${index}_${i}`);
    }
}

//скрыть извещатели
function hideIzv(eHandler, index, data){
    for (let i = 0; i < data[index].KIZVShS; i++) {
        if(eHandler[index][i][0])
            eHandler[index][i][0].style.display = 'none';
        if(eHandler[index][i][4])
            eHandler[index][i][4].style.display = 'none';
        if(eHandler[index][i][8])
            eHandler[index][i][8].style.display = 'none';       
    }
}   

function showIzvAdrExNet(eHandler, index, pos){
    eHandler[index][pos][0].style.display = 'block';
}
function showIzvAdrExNet1(eHandler, index, pos){
    for(let i = 0; i < pos; i++){
        eHandler[index][i][0].style.display = 'block';
    }
}

function showIzvAdrExDa(eHandler, index, pos){
    eHandler[index][pos][4].style.display = 'block';
}
function showIzvAdrExDa1(eHandler, index, pos){
    for(let i = 0; i < pos; i++)
        eHandler[index][i][4].style.display = 'block';
}

function showIzvConfModbu(eHandler, index, pos){
    eHandler[index][pos][8].style.display = 'block';
}
function showIzvConfModbu1(eHandler, index, pos){
    for(let i = 0; i < pos; i++)
        eHandler[index][i][8].style.display = 'block';
}


//Ручное обнаружение
function createlineLoopRuchn(val){
    if(val > 0){
        let elem, subelem, option, mainDiv, div_1, div_2;
        mainDiv = document.createElement('div');
        mainDiv.setAttribute('id','lineLoopKonfRuchn');
        //mainDiv.setAttribute('class','flex-item');
        for (let i = 0; i < val; i++) {
            elem = document.createElement('form');
            elem.setAttribute("id", i + '_' + 1);
            
            // subelem = document.createElement('h3')
            // subelem.appendChild(document.createTextNode(`Конфигурация шлейфа #${i + 1}`));
            // elem.appendChild(subelem);
            div_1 = document.createElement('div');
            div_1.setAttribute('class', 'flex-items');

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode("Тип шлейфа:"));
            elem.appendChild(subelem);

            subelem = document.createElement('select');
            subelem.setAttribute("id", `TShS2_${i}`);
            option = document.createElement('option');
            option.appendChild(document.createTextNode("АДРЕСНЫЙ"));
            subelem.appendChild(option);
            option = document.createElement('option');
            option.appendChild(document.createTextNode("БЕЗАДРЕСНЫЙ"));
            subelem.appendChild(option);
            
            div_1.appendChild(subelem);
            elem.appendChild(div_1);

            div_1 = document.createElement('div');
            div_1.setAttribute('class', 'flex-items');

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode("Взрывозащита:"));
            div_1.appendChild(subelem);
            elem.appendChild(div_1);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'checkbox');
            subelem.setAttribute('id', `ExShS2_${i}`);
            div_1.appendChild(subelem);
            elem.appendChild(div_1);

            let div = document.createElement('div');
            div.setAttribute('id', `TypeBIZ2_${i}`);

            div_1 = document.createElement('div');
            div_1.setAttribute('class', 'ARM');

            subelem = document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Тип искробарьера:'));
            div_1.appendChild(subelem);
            div.appendChild(div_1);


            option = document.createElement('label');
            option.setAttribute('class', 'flex-item');
            subelem = document.createElement('input');
            subelem.setAttribute('list', `_adrBIZ2_${i}`);
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `TShSBIZ2_${i}`);
            option.appendChild(subelem);
            div_1.appendChild(option);
            div.appendChild(div_1);
            
            subelem = document.createElement('datalist');
            subelem.setAttribute('id', `_adrBIZ2_${i}`);
            div.appendChild(subelem);

            subelem = document.createElement('br');
            div.appendChild(subelem);

            subelem = document.createElement('select');
            subelem.setAttribute('id',`adrBIZ2_${i}`);
            option = document.createElement('option');
            option.appendChild(document.createTextNode('Выберите тип:'));
            subelem.appendChild(option);
            div.appendChild(subelem);

            elem.appendChild(div);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem = document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Количество извещателей:'));
            div_2.appendChild(subelem);
            elem.appendChild(div_2);

            subelem = document.createElement('input');
            subelem.setAttribute('class', 'flex-item');
            subelem.setAttribute('type', 'number');
            subelem.setAttribute('id', `KIZVShS2_${i}`);
            subelem.setAttribute('placeholder', '1...32');
            div_2.appendChild(subelem);
            elem.appendChild(div_2);

            div = document.createElement('div');
            div.setAttribute('id', `bezAdr__2_${i}`);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem = document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Зона:'));
            div_2.appendChild(subelem);
            div.appendChild(div_2);

            subelem = document.createElement('input');
            subelem.setAttribute('class', 'flex-item');
            subelem.setAttribute('type', 'number');
            subelem.setAttribute('id', `ZONAShS2_${i}`);
            subelem.setAttribute('placeholder', '1...255');
            div_2.appendChild(subelem);
            div.appendChild(div_2);

            
            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem = document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Наименование / адрес:'));
            div_2.appendChild(subelem);
            div.appendChild(div_2);

            subelem = document.createElement('input');
            subelem.setAttribute('class', 'flex-item');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `ADRShS2_${i}`);
            subelem.setAttribute('placeholder', `до 20 символов...`);
            div_2.appendChild(subelem);
            div.appendChild(div_2);

            elem.appendChild(div);

            div = document.createElement('div');
            div.setAttribute('id', `bezAdr___2_${i}`);   

            subelem = document.createElement('h3');
            subelem.appendChild(document.createTextNode('Конфигурация извещателя безадресного шлейфа'));
            div.appendChild(subelem);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'flex-items');

            subelem = document.createElement('p');
            //subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Тип извещателя:'));
            div_2.appendChild(subelem);
            div.appendChild(div_2);

            subelem = document.createElement('select');
            //subelem.setAttribute('class', 'flex-item');
            subelem.setAttribute('id', `TIZV2_${i}`);

            option = document.createElement('option');
            option.appendChild(document.createTextNode("Пассивный НР"));
            subelem.appendChild(option);

            option = document.createElement('option');
            option.appendChild(document.createTextNode("Пассивный НЗ"));
            subelem.appendChild(option);

            option = document.createElement('option');
            option.appendChild(document.createTextNode("Активный НР"));
            subelem.appendChild(option);

            // let subSub = document.createElement('input');
            // subSub.setAttribute('list', `enteredItems2_${i}`);
            //subSub.setAttribute('id', `TIZV2_${i}`);
            //subelem.appendChild(subSub);
            div_2.appendChild(subelem);
            div.appendChild(div_2);

            // subelem = document.createElement('datalist');
            // subelem.setAttribute('id', `enteredItems2_${i}`);
            // div.appendChild(subelem);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem= document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Ток в режиме "ДЕЖУРНЫЙ", мА:'));
            div_2.appendChild(subelem);
            div.appendChild(div_2);

            subelem = document.createElement('input');
            subelem.setAttribute('class', 'flex-item');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `IOIZV2_${i}`);
            div_2.appendChild(subelem);
            div.appendChild(div_2);
            
            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem= document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Ток в режиме "ПОЖАР", мА:'));
            div_2.appendChild(subelem);
            div.appendChild(div_2);

            subelem = document.createElement('input');
            subelem.setAttribute('class', 'flex-item');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `IPIZV2_${i}`);
            div_2.appendChild(subelem);
            div.appendChild(div_2);

            elem.appendChild(div);

            subelem = document.createElement('br');
            elem.appendChild(subelem);

            subelem = document.createElement('button');
            subelem.setAttribute('type', 'submit');
            subelem.setAttribute('id', `dlgSbt2_${i}`);
            subelem.setAttribute('class', `btn-after`);
            subelem.style.marginTop = '19px';
            subelem.style.marginBottom = '20px';
            subelem.appendChild(document.createTextNode('Сконфигурировать извещатели'));
            elem.appendChild(subelem);


            elem.style.display = 'none';
            mainDiv.appendChild(elem);
            document.querySelector('div#ruchSysConfiguration').appendChild(mainDiv);
            //document.body.appendChild(mainDiv);           
        }
    }
}

function setDynHandlersRuchn(handlerArr, size){
    for (let i = 0; i < size; i++) {
        
        handlerArr[i][0] =document.getElementById(`TShS2_`+i);
        handlerArr[i][1] =document.getElementById(`ExShS2_${i}`);
        handlerArr[i][2] =document.getElementById(`TypeBIZ2_${i}`);
        handlerArr[i][3] =document.getElementById(`TShSBIZ2_${i}`);
        handlerArr[i][4] =document.getElementById(`_adrBIZ2_${i}`);
        handlerArr[i][5] =document.getElementById(`adrBIZ2_${i}`);
        handlerArr[i][6] =document.getElementById(`KIZVShS2_${i}`);
        handlerArr[i][7] =document.getElementById(`bezAdr__2_${i}`);
        handlerArr[i][8] =document.getElementById(`ZONAShS2_${i}`);
        handlerArr[i][9] =document.getElementById(`ADRShS2_${i}`);
        handlerArr[i][10] =document.getElementById(`bezAdr___2_${i}`);
        handlerArr[i][11] =document.getElementById(`TIZV2_${i}`);
        handlerArr[i][12] =document.getElementById(`enteredItems2_${i}`);
        handlerArr[i][13] =document.getElementById(`IOIZV2_${i}`);
        handlerArr[i][14] =document.getElementById(`IPIZV2_${i}`);   
        handlerArr[i][15] =document.getElementById(`dlgSbt2_${i}`);        
    }
}

function showLineLoopsRuchn(position){
    let el = document.getElementById(position);
    el.style.display = 'block';
}

function hideAutoObnarRuchn(){
    for (let i = 0; i < lineLoopsRuchn.length; i++) {        
        dynamicEventHandlersRuchn[i][2].style.display = 'none';
        dynamicEventHandlersRuchn[i][10].style.display = 'none';        
    }    
}

function createIzvR(lineLoopIndex, qIzv){
    if(lineLoopIndex >= 0){
        let elem, subelem, option, mainDiv, subDiv, div, div_1;
        mainDiv = document.getElementById((curPosRuchn - 1) + "_" + 1);

        if(document.getElementById(`izvBtns1_${lineLoopIndex}`)){
            mainDiv.removeChild(document.getElementById(`izvBtns1_${lineLoopIndex}`));
        }
            elem = document.createElement('div');
            elem.setAttribute('id', `izvBtns1_${lineLoopIndex}`);
            elem.setAttribute('class', `izvBtns_`);
                        
            subelem = document.createElement('button');
            subelem.setAttribute('id', `izvBtnsPrev1_${lineLoopIndex}`);
            subelem.setAttribute('class', `izvBtns-item`);
            subelem.appendChild(document.createTextNode('Пред.'));
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('span');
            subelem.setAttribute('class', 'izvBtns-item');
            subelem.setAttribute('id', `izvSpan1_${lineLoopIndex}`);
            subelem.appendChild(document.createTextNode('Извещатель №'));
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('input');
            subelem.setAttribute('type', 'number');
            subelem.setAttribute('id', `izvBtnsPos1_${lineLoopIndex}`);
            subelem.setAttribute('class', 'izvBtns-item');
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('span');
            subelem.setAttribute('id', `izvBtnslastPos1_${lineLoopIndex}`);
            subelem.setAttribute('class', 'izvBtns-item');
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('button');
            subelem.setAttribute('class', 'izvBtns-item');
            subelem.setAttribute('id', `izvBtnsNext1_${lineLoopIndex}`);
            subelem.appendChild(document.createTextNode('След.'));
    
            elem.appendChild(subelem);
    
            mainDiv.appendChild(elem);
        
    
            if(document.getElementById(`IZV1_${lineLoopIndex}`)){
                mainDiv.removeChild(document.getElementById(`IZV1_${lineLoopIndex}`));
            }
                subDiv = document.createElement('div');
                subDiv.setAttribute('id',`IZV1_${lineLoopIndex}`);
    
                for (let j = 0; j < qIzv; j++) {
    
    
    
                    //----------------------------------------------
                    
                    div = document.createElement('div');
                    div.setAttribute('id', `AdrExNet1_${lineLoopIndex}_${j}`)
    
                    // subelem = document.createElement('h3');
                    // subelem.appendChild(document.createTextNode('Конфигурация извещателя при адресном типе шлейфа и при отсутствии взрывозащиты'));
                    // div.appendChild(subelem);
    
                    div_1 = document.createElement('div');
                    div_1.setAttribute('class', 'flex-items');

                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode('Тип извещателя:'));
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
    
                    subelem = document.createElement('select');
                    subelem.setAttribute('id', `TAIZV1_${lineLoopIndex}_${j}`);
                    // option = document.createElement('option');
                    // option.appendChild(document.createTextNode('ИАД'));
                    // subelem.appendChild(option);
                    // option = document.createElement('option');
                    // option.appendChild(document.createTextNode('ИАТ'));
                    // subelem.appendChild(option);
                        option = document.createElement('option');
                        option.appendChild(document.createTextNode('ИАР'));
                        subelem.appendChild(option);
                    

                    div_1.appendChild(subelem);
                    div.appendChild(div_1);                
                    
                    div_1 = document.createElement('div');
                    div_1.setAttribute('class', 'ARM');
    
                    subelem = document.createElement('p');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.appendChild(document.createTextNode('Зона:'));
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
    
                    subelem = document.createElement('input');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.setAttribute('type', 'number');
                    subelem.setAttribute('id', `ZONAIZV1_${lineLoopIndex}_${j}`);
                    subelem.setAttribute('placeholder', `1...255`);
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
                        
                    div_1 = document.createElement('div');
                    div_1.setAttribute('class', 'ARM');
    
                    subelem = document.createElement('p');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.appendChild(document.createTextNode('Наименование/адрес:'));
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
    
                    
                    subelem = document.createElement('input');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.setAttribute('type', 'text');
                    subelem.setAttribute('id', `ADRIZV1_${lineLoopIndex}_${j}`);
                    subelem.setAttribute('placeholder', `до 20 символов...`);
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
    
                    subDiv.appendChild(div);
    
                    div = document.createElement('div');
                    div.setAttribute('id', `AdrExDa1_${lineLoopIndex}_${j}`);
    
                    // subelem = document.createElement('h3');
                    // subelem.appendChild(document.createTextNode('Конфигурация извещателя при адресном типе шлейфа и при присутствии взрывозащиты'));
                    // div.appendChild(subelem);
    
                    div_1 = document.createElement('div');
                    div_1.setAttribute('class', 'flex-items');

                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode('Тип извещателя:'));
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
    
                    subelem = document.createElement('select');
                    subelem.setAttribute('id', `TAIZV_1_${lineLoopIndex}_${j}`);
                    // option = document.createElement('option');
                    // option.appendChild(document.createTextNode('ИАД-01'));
                    // subelem.appendChild(option);
                    // option = document.createElement('option');
                    // option.appendChild(document.createTextNode('ИАТ-01'));
                    // subelem.appendChild(option);
                        option = document.createElement('option');
                        option.appendChild(document.createTextNode('ИАР-01'));
                        subelem.appendChild(option);

    
                        div_1.appendChild(subelem);
                        div.appendChild(div_1);

                        div_1 = document.createElement('div');
                        div_1.setAttribute('class', 'ARM');
    
                    subelem = document.createElement('p');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.appendChild(document.createTextNode("Зона:"));
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
    
                    subelem = document.createElement('input');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.setAttribute('type', 'number');
                    subelem.setAttribute('id', `ZONAIZV_1_${lineLoopIndex}_${j}`);
                    subelem.setAttribute('placeholder', '1...255');
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);

                    div_1 = document.createElement('div');
                    div_1.setAttribute('class', 'ARM');
    
                    subelem = document.createElement('p');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.appendChild(document.createTextNode('Наименование/адрес'));
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
    
                    subelem = document.createElement('input');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.setAttribute('type', 'text');
                    subelem.setAttribute('id', `ADRIZV_1_${lineLoopIndex}_${j}`);
                    subelem.setAttribute('placeholder', 'до 20 символов...');
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);
    
                    subDiv.appendChild(div);
    
                    // div = document.createElement('div');
                    // div.setAttribute('id', `confModbus${lineLoopIndex}_${j}`);
        
                    // // subelem = document.createElement('h3');
                    // // subelem.appendChild(document.createTextNode('Конфигурация извещателя при ТШС "MODBUS"'));
                    // // div.appendChild(subelem);
        
                    // subelem = document.createElement('p');
                    // subelem.appendChild(document.createTextNode('Количество линий связи:'));
                    // div.appendChild(subelem);
        
                    // subelem = document.createElement('input');
                    // subelem.setAttribute('type', 'text');
                    // subelem.setAttribute('id', `KMBUSLNK${lineLoopIndex}_${j}`);
                    // div.appendChild(subelem);
        
                    // subDiv.appendChild(div);
                 
                    mainDiv.appendChild(subDiv);
                       
            }
           
        }
}

function setHandlersIZVR(eHandler, index, data){
    for (let i = 0; i < data[index].KIZVShS; i++) {
        eHandler[index][i][0] = document.getElementById(`AdrExNet1_${index}_${i}`);
        eHandler[index][i][1] = document.getElementById(`TAIZV1_${index}_${i}`);
        eHandler[index][i][2] = document.getElementById(`ZONAIZV1_${index}_${i}`);
        eHandler[index][i][3] = document.getElementById(`ADRIZV1_${index}_${i}`);
        eHandler[index][i][4] = document.getElementById(`AdrExDa1_${index}_${i}`);
        eHandler[index][i][5] = document.getElementById(`TAIZV_1_${index}_${i}`);
        eHandler[index][i][6] = document.getElementById(`ZONAIZV_1_${index}_${i}`);
        eHandler[index][i][7] = document.getElementById(`ADRIZV_1_${index}_${i}`);
    }
}

function hideIzvR(eHandler, index, data){
    for (let i = 0; i < data[index].KIZVShS; i++) {
        if(eHandler[index][i][0])
            eHandler[index][i][0].style.display = 'none';
        if(eHandler[index][i][4])
            eHandler[index][i][4].style.display = 'none';      
    }
}

function handlePrevIzvR(curLine, KIZVSHsLength, izvLasPos1, 
    btnPrevHndlr, dynamicEvHandlerIZV1, data,
    curPosIzv1, nextPosIzv1, prevPosIzv1){
        //for(let i = 0; i < curLine; i++){
            if( btnPrevHndlr[curLine]){
               btnPrevHndlr[curLine].addEventListener('click', (e)=>{
                   e.preventDefault();
                  // if(prevPosIzv1[i] < 1) prevPosIzv1[i]  = KIZVSHsLength - 1;
                   nextPosIzv1[curLine] = curPosIzv1[curLine];
                   curPosIzv1[curLine] = prevPosIzv1[curLine];
                   prevPosIzv1[curLine]--;
                   if(curPosIzv1[curLine] <= 0) prevPosIzv1[curLine] = KIZVSHsLength - 1;
                   izvLasPos1[curLine].value = parseInt(curPosIzv1[curLine], 10) + 1;
                   
                   hideIzvR(dynamicEvHandlerIZV1, curLine, data);
                   let current = curPosIzv1[curLine];
                   if(data[curLine].TShS == 0 && data[curLine].ExShS == false){
                       showIzvAdrExNet(dynamicEvHandlerIZV1, curLine, current);
                   }
                   else if(data[curLine].TShS == 0 && data[curLine].ExShS == true){
                       showIzvAdrExDa(dynamicEvHandlerIZV1, curLine, curPosIzv1[curLine]);
                   }
                //    else{
                //        showIzvConfModbu(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                //    }
               });
            }
   //}
}

function handleNextIzvR(curLine, KIZVSHsLength, izvLasPos1, 
    btnNextHndlr, dynamicEvHandlerIZV1, data,
    curPosIzv1, nextPosIzv1, prevPosIzv1){

       // let i = curLine;

        //for(let i = 0; i < curLine; i++){
            if(btnNextHndlr[curLine]){
                btnNextHndlr[curLine].addEventListener('click', (e)=>{
                    e.preventDefault();
                    if(nextPosIzv1[curLine] > KIZVSHsLength - 1) nextPosIzv1[curLine] = 0;
                    prevPosIzv1[curLine] = curPosIzv1[curLine];
                    curPosIzv1[curLine] = nextPosIzv1[curLine];
                    nextPosIzv1[curLine]++;
                    if(nextPosIzv1[curLine] > KIZVSHsLength + 1) nextPosIzv1[curLine] = 0;
                    izvLasPos1[curLine].value = parseInt(curPosIzv1[curLine], 10) + 1;
                    
                    hideIzvR(dynamicEvHandlerIZV1, curLine, data);
        
                    if(data[curLine].TShS == 0 && data[curLine].ExShS == false){
                        showIzvAdrExNet(dynamicEvHandlerIZV1, curLine, curPosIzv1[curLine]);
                    }
                    else if(data[curLine].TShS == 0 && data[curLine].ExShS == true){
                        showIzvAdrExDa(dynamicEvHandlerIZV1, curLine, curPosIzv1[curLine]);
                    }
                    // else{
                    //     showIzvConfModbu(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                    // }
            
            });
            }
            
    //}  
}

function handleIzvPosR(curLine, KIZVSHsLength, izvLasPos1, 
    dynamicEvHandlerIZV1, data,
   curPosIzv1, nextPosIzv1, prevPosIzv1){
       
       //let i = curLine;
       //for(let i = 0; i < curLine; i++){
           if(izvLasPos1[curLine]){
               izvLasPos1[curLine].addEventListener('blur', (e)=>{
                   e.preventDefault();
                   curPosIzv1[curLine] = parseInt(izvLasPos1[curLine].value, 10) - 1;
                   if(curPosIzv1[curLine] + 1 >= KIZVSHsLength){
                       nextPosIzv1[curLine] = 1;
                       prevPosIzv1[curLine] = curPosIzv1[curLine] - 1;
                   }
                   else if(curPosIzv1[curLine] - 1 < 1){
                       prevPosIzv1[curLine] = KIZVSHsLength - 1;
                       nextPosIzv1[curLine] = curPosIzv1[curLine] + 1;
                   }
                   else{
                       prevPosIzv1[curLine] = curPosIzv1[curLine] - 1;
                       nextPosIzv1[curLine] = curPosIzv1[curLine] + 1;
                   }
                       hideIzvR(dynamicEvHandlerIZV1, curLine, data);
       
                       if(data[curLine].TShS == 0 && data[curLine].ExShS == false){
                           showIzvAdrExNet(dynamicEvHandlerIZV1, curLine, curPosIzv1[curLine]);
                       }
                       else if(data[curLine].TShS == 0 && data[curLine].ExShS == true){
                           showIzvAdrExDa(dynamicEvHandlerIZV1, curLine, curPosIzv1[curLine]);
                       }
                    //    else{
                    //        showIzvConfModbu(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                    //    }
               });
           }
           
           
       //}

}

function createlineLoopUpr(val){
    if(val > 0){
        let elem, subelem, option, mainDiv, div_1, div_2;
        mainDiv = document.createElement('div');
        mainDiv.setAttribute('id','lineLoopKonfUpr');
        //mainDiv.setAttribute('class','flex-item');
        for (let i = 0; i < val; i++) {
            elem = document.createElement('form');
            elem.setAttribute("id", i + '_' + 2);
            
            // subelem = document.createElement('h3')
            // subelem.appendChild(document.createTextNode(`Конфигурация шлейфа #${i + 1}`));
            // elem.appendChild(subelem);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem = document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Наименование / адрес:'));
            div_2.appendChild(subelem);
            elem.appendChild(div_2);

            subelem = document.createElement('input');
            subelem.setAttribute('class', 'flex-item');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `ADRShPT${i}`);
            subelem.setAttribute('placeholder', `до 20 символов...`);
            div_2.appendChild(subelem);
            elem.appendChild(div_2);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem= document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Пусковой ток шлейфа, А:'));
            div_2.appendChild(subelem);
            elem.appendChild(div_2);

            subelem = document.createElement('input');
            subelem.setAttribute('class', 'flex-item');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `IPShPT${i}`);
            div_2.appendChild(subelem);
            elem.appendChild(div_2);
            
            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem= document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Импульсный ток шлейфа, А:'));
            div_2.appendChild(subelem);
            elem.appendChild(div_2);

            subelem = document.createElement('input');
            subelem.setAttribute('class', 'flex-item');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `ImpShPT${i}`);
            div_2.appendChild(subelem);
            elem.appendChild(div_2);

            div_1 = document.createElement('div');
            div_1.setAttribute('class', 'flex-items');

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode("Взрывозащита:"));
            div_1.appendChild(subelem);
            elem.appendChild(div_1);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'checkbox');
            subelem.setAttribute('id', `ExShPT${i}`);
            div_1.appendChild(subelem);
            elem.appendChild(div_1);

            let div = document.createElement('div');
            div.setAttribute('id', `TypeBIZ3_${i}`);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem = document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Тип искробарьера:'));
            div_2.appendChild(subelem);
            div.appendChild(div_2);


            option = document.createElement('label');
            option.setAttribute('class', 'flex-item');
            subelem = document.createElement('input');
            subelem.setAttribute('list', `_adrBIZ3_${i}`);
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `TBIZShPT${i}`);
            option.appendChild(subelem);
            div_2.appendChild(option);
            div.appendChild(div_2);
            
            subelem = document.createElement('datalist');
            subelem.setAttribute('id', `_adrBIZ3_${i}`);
            div.appendChild(subelem);
            elem.appendChild(div);
            
            
            div_1 = document.createElement('div');
            div_1.setAttribute('class', 'flex-items');

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode("Шлейф сконфигурирован:"));
            div_1.appendChild(subelem);
            elem.appendChild(div_1);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'checkbox');
            subelem.setAttribute('id', `checkboxUpr${i}`);
            //subelem.setAttribute('class', `btn-after`);
            subelem.setAttribute('disabled', `true`);
            div_1.appendChild(subelem);
            elem.appendChild(div_1);


            elem.style.display = 'none';
            mainDiv.appendChild(elem);
            document.querySelector('div#uprPojSysConfiguration').appendChild(mainDiv);
            //document.body.appendChild(mainDiv);           
        }
    }
}

function setDynHandlersUpr(handlerArr, size){
    for (let i = 0; i < size; i++) {
        
        handlerArr[i][0] =document.getElementById(`ADRShPT`+i);
        handlerArr[i][1] =document.getElementById(`IPShPT${i}`);
        handlerArr[i][2] =document.getElementById(`ExShPT${i}`);
        handlerArr[i][3] =document.getElementById(`TypeBIZ3_${i}`);
        handlerArr[i][4] =document.getElementById(`TBIZShPT${i}`);
        handlerArr[i][5] =document.getElementById(`_adrBIZ3_${i}`);
        handlerArr[i][6] =document.getElementById(`checkboxUpr${i}`);
        handlerArr[i][7] =document.getElementById(`ImpShPT${i}`);
    
    }
}

function hideAutoObnarUpr(){
    for (let i = 0; i < lineLoopsUpr.length; i++) {        
        dynamicEventHandlersUpr[i][3].style.display = 'none';
    }    
}

function hideLineLoopsUpr(arrLength){
    if(arrLength){
        for (let i = 0; i < arrLength; i++) {
            let el = document.getElementById( i + '_' + 2);
            el.style.display = 'none';
        }
    }  
}   

// Подсистема управления оповещением
function createlineLoopUprOp(val){
    if(val > 0){
        let elem, subelem,  mainDiv, div_2;
        mainDiv = document.createElement('div');
        mainDiv.setAttribute('id','lineLoopKonfUprOp');
        //mainDiv.setAttribute('class','flex-item');
        for (let i = 0; i < val; i++) {
            elem = document.createElement('form');
            elem.setAttribute("id", '_ZonaOpoveshenia_' + i);
            
            // subelem = document.createElement('h3')
            // subelem.appendChild(document.createTextNode(`Конфигурация шлейфа #${i + 1}`));
            // elem.appendChild(subelem);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem = document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode("Зона:"));
            div_2.appendChild(subelem);
            elem.appendChild(div_2);

            subelem = document.createElement('input');
            subelem.setAttribute('class', 'flex-item');
            subelem.setAttribute('type', 'number');
            subelem.setAttribute('id', `ZONAShOP${i}`);
            subelem.setAttribute('placeholder', `1...${UpravlenieOpovesheniem.KZONOP}`);
            //subelem.setAttribute('placeholder', '1...32');
            div_2.appendChild(subelem);
            elem.appendChild(div_2);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem = document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode('Наименование / адрес:'));
            div_2.appendChild(subelem);
            elem.appendChild(div_2);

            subelem = document.createElement('input');
            subelem.setAttribute('class', 'flex-item');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `ADRShOP${i}`);
            subelem.setAttribute('placeholder', `до 20 символов...`);
            div_2.appendChild(subelem);
            elem.appendChild(div_2);

            div_2 = document.createElement('div');
            div_2.setAttribute('class', 'ARM');

            subelem = document.createElement('p');
            subelem.setAttribute('class', 'flex-item');
            subelem.appendChild(document.createTextNode("Количество шлейфов управления оповещением:"));
            div_2.appendChild(subelem);
            elem.appendChild(div_2);

            subelem = document.createElement('input');
            subelem.setAttribute('class', 'flex-item');
            subelem.setAttribute('type', 'number');
            subelem.setAttribute('id', `KShOPZONY${i}`);
            subelem.setAttribute('placeholder', '1...480');
            div_2.appendChild(subelem);
            elem.appendChild(div_2);

            subelem = document.createElement('br');
            elem.appendChild(subelem);

            subelem = document.createElement('button');
            subelem.setAttribute('type', 'submit');
            subelem.setAttribute('id', `dlgSbtZonaOp${i}`);
            subelem.setAttribute('class', `btn-after`);
            subelem.style.marginTop = '19px';
            subelem.style.marginBottom = '20px';
            subelem.appendChild(document.createTextNode('Сконфигурировать шлейфы'));
            elem.appendChild(subelem);


            elem.style.display = 'none';
            mainDiv.appendChild(elem);
            document.querySelector('div#uprOpSysConfiguration').appendChild(mainDiv);
         
    }
}
}
function setDynHandlersUprOp(handlerArr, size){
    for (let i = 0; i < size; i++) {
        handlerArr[i][0] =document.getElementById(`ZONAShOP`+i);
        handlerArr[i][1] =document.getElementById(`ADRShOP${i}`);
        handlerArr[i][2] =document.getElementById(`KShOPZONY${i}`);   
        handlerArr[i][3] =document.getElementById(`dlgSbtZonaOp${i}`);   
    }
}

function createShleifOp(lineLoopIndex, qIzv){
    if(lineLoopIndex >= 0){
        let elem, subelem, option, mainDiv, subDiv, div, div_1, div_2;
        mainDiv = document.getElementById('_ZonaOpoveshenia_' + (curPosUprOp - 1));

        if(document.getElementById(`BtnsIDShleifOp${lineLoopIndex}`)){
            mainDiv.removeChild(document.getElementById(`BtnsIDShleifOp${lineLoopIndex}`));
        }
            elem = document.createElement('div');
            elem.setAttribute('id', `BtnsIDShleifOp${lineLoopIndex}`);
            elem.setAttribute('class', `izvBtns_`);
                        
            subelem = document.createElement('button');
            subelem.setAttribute('id', `BtnsPrevShleifOp${lineLoopIndex}`);
            subelem.setAttribute('class', `izvBtns-item`);
            subelem.appendChild(document.createTextNode('Пред.'));
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('span');
            subelem.setAttribute('class', 'izvBtns-item');
            subelem.setAttribute('id', `SpanShleifOp${lineLoopIndex}`);
            subelem.appendChild(document.createTextNode('Шлейф управления оповещением №'));
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('input');
            subelem.setAttribute('type', 'number');
            subelem.setAttribute('id', `LasPosShleifOp${lineLoopIndex}`);
            subelem.setAttribute('class', 'izvBtns-item');
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('span');
            subelem.setAttribute('id', `LastSpanShleifOp${lineLoopIndex}`);
            subelem.setAttribute('class', 'izvBtns-item');
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('button');
            subelem.setAttribute('class', 'izvBtns-item');
            subelem.setAttribute('id', `BtnsNextShleifOp${lineLoopIndex}`);
            subelem.appendChild(document.createTextNode('След.'));
    
            elem.appendChild(subelem);
    
            mainDiv.appendChild(elem);
        
    

    
                for (let j = 0; j < qIzv; j++) {

                    if(document.getElementById(`ShleifOp${lineLoopIndex}_${j}`)){
                        mainDiv.removeChild(document.getElementById(`ShleifOp${lineLoopIndex}_${j}`));
                    }
                        subDiv = document.createElement('div');
                        subDiv.setAttribute('id',`ShleifOp${lineLoopIndex}_${j}`);
                    //----------------------------------------------
                    
                    // div = document.createElement('div');
                    // div.setAttribute('id', `AdrExNet${lineLoopIndex}_${j}`)
    
                    // subelem = document.createElement('h3');
                    // subelem.appendChild(document.createTextNode('Конфигурация извещателя при адресном типе шлейфа и при отсутствии взрывозащиты'));
                    // div.appendChild(subelem);

                    div_2 = document.createElement('div');
                    div_2.setAttribute('class', 'ARM');
    
                    subelem = document.createElement('p');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.appendChild(document.createTextNode('Количество оповещателей:'));
                    div_2.appendChild(subelem);
                    subDiv.appendChild(div_2);

    
                    subelem = document.createElement('input');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.setAttribute('type', 'number');
                    subelem.setAttribute('id', `KOPSh${lineLoopIndex}_${j}`);
                    subelem.setAttribute('placeholder', `1...`);
                    div_2.appendChild(subelem);
                    subDiv.appendChild(div_2);

                    div_2 = document.createElement('div');
                    div_2.setAttribute('class', 'ARM');

                    subelem = document.createElement('p');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.appendChild(document.createTextNode('Сумарный ток оповещателей в режиме оповещения, мА:'));
                    div_2.appendChild(subelem);
                    subDiv.appendChild(div_2);

                    subelem = document.createElement('input');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.setAttribute('type', 'text');
                    subelem.setAttribute('id', `IPOPSh${lineLoopIndex}_${j}`);
                    div_2.appendChild(subelem);
                    subDiv.appendChild(div_2);

                    div_1 = document.createElement('div');
                    div_1.setAttribute('class', 'flex-items');

                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode("Взрывозащита:"));
                    div_1.appendChild(subelem);
                    subDiv.appendChild(div_1);

                    subelem = document.createElement('input');
                    subelem.setAttribute('type', 'checkbox');
                    subelem.setAttribute('id', `ExOPSh${lineLoopIndex}_${j}`);
                    div_1.appendChild(subelem);
                    subDiv.appendChild(div_1);

                    div = document.createElement('div');
                    div.setAttribute('id', `TypeBIZShleifOp_${lineLoopIndex}_${j}`);

                    div_1 = document.createElement('div');
                    div_1.setAttribute('class', 'ARM');

                    subelem = document.createElement('p');
                    subelem.setAttribute('class', 'flex-item');
                    subelem.appendChild(document.createTextNode('Тип искробарьера:'));
                    div_1.appendChild(subelem);
                    div.appendChild(div_1);


                    option = document.createElement('label');
                    option.setAttribute('class', 'flex-item');
                    subelem = document.createElement('input');
                    subelem.setAttribute('list', `_TBIZOPSh${lineLoopIndex}_${j}`);
                    subelem.setAttribute('type', 'text');
                    subelem.setAttribute('id', `TBIZOPSh${lineLoopIndex}_${j}`);
                    option.appendChild(subelem);
                    div_1.appendChild(option);
                    div.appendChild(div_1);
                    
                    subelem = document.createElement('datalist');
                    subelem.setAttribute('id', `_TBIZOPSh${lineLoopIndex}_${j}`);
                    div.appendChild(subelem);    
                    subDiv.appendChild(div);
                 
                    subelem = document.createElement('br');
                    subDiv.appendChild(subelem);

                    subelem = document.createElement('button');
                    subelem.setAttribute('type', 'submit');
                    subelem.setAttribute('id', `dlgSbtOpoveshateli${lineLoopIndex}_${j}`);
                    subelem.setAttribute('class', `btn-after`);
                    subelem.style.marginTop = '19px';
                    subelem.style.marginBottom = '20px';
                    subelem.appendChild(document.createTextNode('Сконфигурировать оповещатели'));
                    subDiv.appendChild(subelem);

                    mainDiv.appendChild(subDiv);           
            }  
        }
}

function setHandlersShleifOp(eHandler, index, data){
    for (let i = 0; i < data[index].KShOPZONY; i++) {
        eHandler[index][i][0] = document.getElementById(`KOPSh${index}_${i}`);
        eHandler[index][i][1] = document.getElementById(`IPOPSh${index}_${i}`);
        eHandler[index][i][2] = document.getElementById(`ExOPSh${index}_${i}`);
        eHandler[index][i][3] = document.getElementById(`TypeBIZShleifOp_${index}_${i}`);
        eHandler[index][i][4] = document.getElementById(`TBIZOPSh${index}_${i}`);
        eHandler[index][i][5] = document.getElementById(`_TBIZOPSh${index}_${i}`);
        eHandler[index][i][6] = document.getElementById(`dlgSbtOpoveshateli${index}_${i}`);
    }
}

function handlePrevShleifOp(curLine, KIZVSHsLength, izvLasPos1, 
    btnPrevHndlr, dynamicEvHandlerIZV1, data,
    curPosIzv1, nextPosIzv1, prevPosIzv1){
        //for(let i = 0; i < curLine; i++){
            if( btnPrevHndlr[curLine]){
               btnPrevHndlr[curLine].addEventListener('click', (e)=>{
                   e.preventDefault();
                  // if(prevPosIzv1[i] < 1) prevPosIzv1[i]  = KIZVSHsLength - 1;
                   nextPosIzv1[curLine] = curPosIzv1[curLine];
                   curPosIzv1[curLine] = prevPosIzv1[curLine];
                   prevPosIzv1[curLine]--;
                   if(curPosIzv1[curLine] <= 0) prevPosIzv1[curLine] = KIZVSHsLength - 1;
                   izvLasPos1[curLine].value = parseInt(curPosIzv1[curLine], 10) + 1;
                   currentZonaOp = parseInt(curPosIzv1[curLine], 10);
                //    hideIzvOp(dynamicEvHandlerIZV1, i, data);
                //    let current = curPosIzv1[i];
                   
                //     showOp(dynamicEvHandlerIZV1, i, current);
                hideIzvOp(curPosUprOp, lineLoopsDataUprOp[curLine].KShOPZONY);
                showOp(curPosUprOp - 1, curPosIzv1[curLine]);   
                return;

               });
            }
   //}
}

function handleNextShleifOp(curLine, KIZVSHsLength, izvLasPos1, 
    btnNextHndlr, dynamicEvHandlerIZV1, data,
    curPosIzv1, nextPosIzv1, prevPosIzv1){
        //for(let i = 0; i < curLine; i++){
            if(btnNextHndlr[curLine]){
                btnNextHndlr[curLine].addEventListener('click', (e)=>{
                    e.preventDefault();
                    if(nextPosIzv1[curLine] > KIZVSHsLength - 1) nextPosIzv1[curLine] = 0;
                    prevPosIzv1[curLine] = curPosIzv1[curLine];
                    curPosIzv1[curLine] = nextPosIzv1[curLine];
                    nextPosIzv1[curLine]++;
                    if(nextPosIzv1[curLine] > KIZVSHsLength + 1) nextPosIzv1[curLine] = 0;
                    izvLasPos1[curLine].value = parseInt(curPosIzv1[curLine], 10) + 1;
                    currentZonaOp = parseInt(curPosIzv1[curLine], 10);
                    //hideIzvOp(dynamicEvHandlerIZV1, i, data);
                    hideIzvOp(curPosUprOp, lineLoopsDataUprOp[curLine].KShOPZONY);
                    showOp(curPosUprOp - 1, curPosIzv1[curLine]);
                    //showOp(dynamicEvHandlerIZV1, i, curPosIzv1[i]);

                    // else{
                    //     showIzvConfModbu(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                    // }
            
            });
            }   
    //} 
}

function handleOpPos(curLine, KIZVSHsLength, izvLasPos1, 
    dynamicEvHandlerIZV1, data,
   curPosIzv1, nextPosIzv1, prevPosIzv1){
    //for(let i = 0; i < curLine; i++){
        if(izvLasPos1[curLine]){
            izvLasPos1[curLine].addEventListener('blur', (e)=>{
                e.preventDefault();
                curPosIzv1[curLine] = parseInt(izvLasPos1[curLine].value, 10) - 1;
                if(curPosIzv1[curLine] + 1 >= KIZVSHsLength){
                    nextPosIzv1[curLine] = 1;
                    prevPosIzv1[curLine] = curPosIzv1[curLine] - 1;
                }
                else if(curPosIzv1[curLine] - 1 < 1){
                    prevPosIzv1[curLine] = KIZVSHsLength - 1;
                    nextPosIzv1[curLine] = curPosIzv1[curLine] + 1;
                }
                else{
                    prevPosIzv1[curLine] = curPosIzv1[curLine] - 1;
                    nextPosIzv1[curLine] = curPosIzv1[curLine] + 1;
                }
                currentZonaOp = parseInt(curPosIzv1[curLine], 10);
                //hideIzvOp(dynamicEvHandlerIZV1, i, data);
                hideIzvOp(curPosUprOp, lineLoopsDataUprOp[curLine].KShOPZONY);
                showOp(curPosUprOp - 1, curPosIzv1[curLine]);
                //showOp(dynamicEvHandlerIZV1, i, curPosIzv1[i]);

                 //    else{
                 //        showIzvConfModbu(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                 //    }
            });
        }  
    //}
}

// function hideIzvOp(eHandler, index, data){
//     for (let i = 0; i < data[index].KShOPZONY; i++) {
//         eHandler[index][i][0].style.display = 'none';
//         eHandler[index][i][1].style.display = 'none';      
//         eHandler[index][i][2].style.display = 'none';   
//         eHandler[index][i][3].style.display = 'none';         
//     }
//     
// }
function hideIzvOp( indexZona, indexShleif){ 
    for (let i = 0; i < indexZona; i++) {
        for (let j = 0; j < indexShleif; j++) {
            if(document.querySelector(`#ShleifOp${i}_${j}`))
                document.querySelector(`#ShleifOp${i}_${j}`).style.display = 'none';   
        }   
    }
}

function showOp(indexZona, indexShleif){
    if(document.querySelector(`#ShleifOp${indexZona}_${indexShleif}`))
        document.querySelector(`#ShleifOp${indexZona}_${indexShleif}`).style.display = 'block';
}

function isThereFalse(obj){
    for(let val in obj){
        if(obj[val] == false) return false
    }
    return true;
}

function setAllFalse(obj){
    for(let val in obj){
        obj[val] = false
    }
}

// function showOp(eHandler, index, pos){
//     eHandler[index][pos][0].style.display = 'block';
//     eHandler[index][pos][1].style.display = 'block';      
//     eHandler[index][pos][2].style.display = 'block';   
//     //eHandler[index][pos][3].style.display = 'block';   
// }

//-----------------Наличие БДУ-----------------
document.querySelector('div#BDUConfiguration').style.display = 'none';
const BDU = document.getElementById('BDU');
const dialgo9 = document.getElementById('dialgo9');
// const bduPres = document.getElementById('bduPres');
// const bduEx = document.getElementById('bduEx');
const Ivnp = document.getElementById('Ivnp');
let ivnp = 0;

const Ivnpt = document.getElementById('Ivnpt');
let ivnpt = 0;

let pressedBtnsBDU = [];
pressedBtnsBDU[`ivnp`] = false;
pressedBtnsBDU[`ivnpt`] = false;

        BDU.addEventListener('click', () =>{
            dialog9.style.display = 'inline';
            dialog9.style.flexDirection = 'column';
            document.querySelector('div#autoSysConfiguration').style.display = 'none';
            document.querySelector('div#uprPojSysConfiguration').style.display = 'none';
            document.querySelector('div#ruchSysConfiguration').style.display = 'none';
            document.querySelector('div#uprOpSysConfiguration').style.display = 'none';
            document.querySelector('div#formSysConfiguration').style.display = 'none';
            document.querySelector('div#connSysConfiguration').style.display = 'none';
            document.querySelector('div#diagnSysConfiguration').style.display = 'none';
            document.querySelector('div#BDUConfiguration').style.display = 'block';

            BDU.style.backgroundColor = '#5f97ef';
            BDU.style.color = 'white';
            diagnSys.style.backgroundColor = '#fff';
            diagnSys.style.color = '#000';
            formSys.style.backgroundColor = '#fff';
            formSys.style.color = '#000';
            uprOpSys.style.backgroundColor = '#fff';
            uprOpSys.style.color = '#000';
            uprPojSys.style.backgroundColor = '#fff';
            uprPojSys.style.color = '#000';
            ruchSys.style.backgroundColor = '#fff';
            ruchSys.style.color = '#000';
            autoSys.style.backgroundColor = '#fff';
            autoSys.style.color = '#000';
            connSys.style.backgroundColor = '#fff';
            connSys.style.color = '#000';
        });

        // bduPres.addEventListener('click', () =>{
        //     if(bduPres.checked){
        //         blockBDU = BlokiDistanzionnogoUpravleniya[0].name;
        //         if(bduEx.checked)
        //             blockBDU = BlokiDistanzionnogoUpravleniya[1].name;
        //         console.log(blockBDU);
        //     }
        //     else
        //         blockBDU = '';
        // });

        // bduEx.addEventListener('click', ()=>{
            
        //         if(bduPres.checked){
        //             if(bduEx.checked){
        //                 blockBDU = BlokiDistanzionnogoUpravleniya[1].name;
        //                 console.log(blockBDU);
        //             }
        //             else{
        //                 blockBDU = BlokiDistanzionnogoUpravleniya[0].name;
        //                 console.log(blockBDU);
        //             }
        //         }
                
            

        // })
        Ivnp.onkeypress = (e)=>{
            e = e || event;
           if (e.ctrlKey || e.altKey || e.metaKey) return;
           var chr = getChar(e);
           console.log("Char pressed: " + chr);
           if(chr == ',' || chr == '.')
           {   
               let count = 0, pos = -1;
               if(chr == ',' || chr == '.'){
                    if(Ivnp.value.indexOf('.') == -1)
                    {
                        while((pos = Ivnp.value.indexOf(',', pos + 1 )) != -1){
                            count++;
                        }
                        if(count >= 1) {e.preventDefault(); count = 0; return;}
                        else { count = 0;  }
                    }
                    else
                    {
                        while((pos = Ivnp.value.indexOf('.', pos + 1 )) != -1){
                            count++;
                        }
                        if(count >= 1) {e.preventDefault(); count = 0; return;}
                        else  { count = 0;  }   
                    }
               }

               return;
           }
           if(chr == null) return;

           if (chr < '0' || chr > '9') {
               return false;
           }
        };

        Ivnp.addEventListener('focus', ()=>{
            Ivnp.style.boxShadow = 'none';
        });

        Ivnp.addEventListener('blur', ()=>{
            if(Ivnp.value.indexOf(',')== -1 && Ivnp.value.indexOf('.')== -1)
                Ivnp.value += ',0';
            if(Ivnp.value[Ivnp.value.length - 1] == '.' || Ivnp.value[Ivnp.value.length - 1] == ',')
                Ivnp.value += '0';

            if(Ivnp.value.search(regExBroken) != -1){
            
                if(Ivnp.value.indexOf(',')!= -1) Ivnp.value = Ivnp.value.replace(/\,/, '.');

            if(parseFloat(Ivnp.value) >= 0 && parseFloat(Ivnp.value) <= 1){
                ivnp = parseFloat(Ivnp.value);
                pressedBtnsBDU[`ivnp`] = true;
                Ivnp.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                // if( dataToSave[i].ADRShPT != '' &&
                //     dataToSave[i].IPShPT >= 1 ){
                //         handlerArr[i][6].checked = true;
                //         dataToSave[i].configured = true;
                // }
                // else{
                //     handlerArr[i][6].checked = false;
                //     dataToSave[i].configured = false;
                // }
                console.log("ivnp: " + ivnp);
            }
            else if(Ivnp.value == ""){
                pressedBtnsBDU[`ivnp`] = false;
                return;
            }
            else
                {
                    Ivnp.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                }
            }
            else
                Ivnp.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
        }); 


        Ivnpt.onkeypress = (e)=>{
            e = e || event;
           if (e.ctrlKey || e.altKey || e.metaKey) return;
           var chr = getChar(e);
           console.log("Char pressed: " + chr);
           if(chr == ',' || chr == '.')
           {   
               let count = 0, pos = -1;
               if(chr == ',' || chr == '.'){
                    if(Ivnpt.value.indexOf('.') == -1)
                    {
                        while((pos = Ivnpt.value.indexOf(',', pos + 1 )) != -1){
                            count++;
                        }
                        if(count >= 1) {e.preventDefault(); count = 0; return;}
                        else { count = 0;  }
                    }
                    else
                    {
                        while((pos = Ivnpt.value.indexOf('.', pos + 1 )) != -1){
                            count++;
                        }
                        if(count >= 1) {e.preventDefault(); count = 0; return;}
                        else  { count = 0;  }   
                    }
               }

               return;
           }
           if(chr == null) return;

           if (chr < '0' || chr > '9') {
               return false;
           }
        };

        Ivnpt.addEventListener('focus', ()=>{
            Ivnpt.style.boxShadow = 'none';
        });

        Ivnpt.addEventListener('blur', ()=>{
            if(Ivnpt.value.indexOf(',')== -1 && Ivnpt.value.indexOf('.')== -1)
                Ivnpt.value += ',0';
            if(Ivnpt.value[Ivnpt.value.length - 1] == '.' || Ivnpt.value[Ivnpt.value.length - 1] == ',')
                Ivnpt.value += '0';

            if(Ivnpt.value.search(regExBroken) != -1){
            
                if(Ivnpt.value.indexOf(',')!= -1) Ivnpt.value = Ivnpt.value.replace(/\,/, '.');

            if(parseFloat(Ivnpt.value) >= 0 && parseFloat(Ivnpt.value) <= 1){
                ivnpt = parseFloat(Ivnpt.value);
                pressedBtnsBDU[`ivnpt`] = true;
                Ivnpt.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                // if( dataToSave[i].ADRShPT != '' &&
                //     dataToSave[i].IPShPT >= 1 ){
                //         handlerArr[i][6].checked = true;
                //         dataToSave[i].configured = true;
                // }
                // else{
                //     handlerArr[i][6].checked = false;
                //     dataToSave[i].configured = false;
                // }
                console.log("Ivnpt: " + ivnpt);
            }
            else if(Ivnpt.value == ""){
                pressedBtnsBDU[`ivnpt`] = false;
                return;
            }
            else
                {
                    Ivnpt.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
                }
            }
            else
                Ivnpt.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
        }); 



//-----------------"РАСЧЕТ НОМЕНКЛАТУРЫ"-----------------


const calcList = document.getElementById('calcList');
const RaschetNom = document.getElementById('RaschetNom');
RaschetNom.style.display = 'none';
RaschetNom.style.flexDirection = 'column';
RaschetNom.style.margin = '30px 0';
RaschetNom.style.border = '1px solid #000';
RaschetNom.style.width = '100%';
document.querySelector('.summ').style.borderBottom = '1px solid #000';
document.querySelector('.rez').style.borderBottom = '1px solid #000';
//document.querySelector('.MI').style.borderBottom = '1px solid #000';
document.querySelector('.mopi').style.borderBottom = '1px solid #000';
document.querySelector('.kshptrez').style.borderBottom = '1px solid #000';
document.querySelector('.miup').style.borderBottom = '1px solid #000';
document.querySelector('.mszu').style.borderBottom = '1px solid #000';
document.querySelector('.mrv').style.borderBottom = '1px solid #000';
document.querySelector('.mipt').style.borderBottom = '1px solid #000';
document.querySelector('.mpi').style.borderBottom = '1px solid #000';
document.querySelector('.K_BR1').style.borderBottom = '1px solid #000';
document.querySelector('.K_BDU1').style.borderBottom = '1px solid #000';
document.querySelector('.K_BIZ1').style.borderBottom = '1px solid #000';
document.querySelector('.K_OT1').style.borderBottom = '1px solid #000';
document.querySelector('.K_PF1').style.borderBottom = '1px solid #000';
document.querySelector('.K_USO1').style.borderBottom = '1px solid #000';

document.querySelector('.heading-3').style.borderBottom = '1px solid #000';
document.querySelector('.heading-3').style.margin = '0';
document.querySelector('.heading-3').style.textAlign = 'center';
document.querySelector('.heading-4').style.borderBottom = '1px solid #000';
document.querySelector('.heading-4').style.margin = '0';
document.querySelector('.heading-4-1').style.borderBottom = '1px solid #000';
document.querySelector('.heading-4-1').style.margin = '0';
document.querySelector('.dMOPI1').style.borderBottom = '1px solid #000';
document.querySelector('.dMI1').style.borderBottom = '1px solid #000';
document.querySelector('.dMIUP1').style.borderBottom = '1px solid #000';
document.querySelector('.dMSZU1').style.borderBottom = '1px solid #000';
document.querySelector('.dMRV1').style.borderBottom = '1px solid #000';
document.querySelector('.dBDU1').style.borderBottom = '1px solid #000';
document.querySelector('.dMPI1').style.borderBottom = '1px solid #000';
document.querySelector('.dMIPT1').style.borderBottom = '1px solid #000';
document.querySelector('.dSumm1').style.borderBottom = '1px solid #000';

document.querySelector('.pMOPI1').style.borderBottom = '1px solid #000';
document.querySelector('.pMI1').style.borderBottom = '1px solid #000';
document.querySelector('.pMIimp1').style.borderBottom = '1px solid #000';
document.querySelector('.pMIUP1').style.borderBottom = '1px solid #000';
document.querySelector('.pMIUPimp1').style.borderBottom = '1px solid #000';
document.querySelector('.pMSZU1').style.borderBottom = '1px solid #000';
document.querySelector('.pMRV1').style.borderBottom = '1px solid #000';
document.querySelector('.pBDU1').style.borderBottom = '1px solid #000';
document.querySelector('.pMPI1').style.borderBottom = '1px solid #000';
document.querySelector('.pMIPT1').style.borderBottom = '1px solid #000';
document.querySelector('.pSumm1').style.borderBottom = '1px solid #000';
document.querySelector('.pSummImp1').style.borderBottom = '1px solid #000';
// document.querySelector('.pSummAccu1').style.borderBottom = '1px solid #000';

if(
    isThereFalse(autoInputCount) &&
    isThereFalse(shleifCount) &&
    isThereFalse(izvAdrNetCount) &&
    isThereFalse(izvAdrDaCount) &&
    isThereFalse(izvBezAdrCount) &&
    isThereFalse(modbusCount) 
     ){
        calcList.style.background = '#fff';
    }
else{
        calcList.style.background = '#f2f2f2';
    }
let KShSsumm = 0,
    KShSrez = 0,
    MI = 0,
    KShPTrez = 0,
    MIuser = 0,
    MOPI = 0,
    MIUP = 0,
    KUPShO = [],
    KUPShOsumm = 0,
    KShOrez = 0,
    MSZU = 0,
    Ndo = 0,
    Ndozad = 0,
    KONF_K_MRV = 0,
    Ndi = 0,
    NDdizad = 0,
    NDdazad = 0,
    KONF_K_MIPT = 0,
    KONF_K_MPI = 0,
    KMODULES = 0,
    KONF_K_BR = 0,
    KONF_K_BDU = 0,
    KONF_K_BIZ = 0,
    KONF_K_OT = 0,
    KONF_K_PF = 0,
    KONF_K_USO = 0;

let restMI = 0;

const KShSsumm1 = document.getElementById('KShSsumm');
const KShSrez1 = document.getElementById('KShSrez');
const MI1 = document.getElementById('MI');
const MOPI1 = document.getElementById('MOPI');
const KShptrez1 = document.getElementById('KShPTrez');
const MIUP1 = document.getElementById('MIUP');
const MSZU1 = document.getElementById('MSZU');
const MRV1 = document.getElementById('MRV');
const MIPT1 = document.getElementById('MIPT');
const MPI1 = document.getElementById('MPI');
const K_BR1 = document.getElementById('K_BR');
const K_BDU1 = document.getElementById('K_BDU');
const K_BIZ1 = document.getElementById('K_BIZ');
const K_OT1 = document.getElementById('K_OT');
const K_PF1 = document.getElementById('K_PF');
const K_USO1 = document.getElementById('K_USO');

const dMOPI1 = document.getElementById('dMOPI');
const dMI1 = document.getElementById('dMI');
const dMIUP1 = document.getElementById('dMIUP');
const dMSZU1 = document.getElementById('dMSZU');
const dMRV1 = document.getElementById('dMRV');
const dBDU1 = document.getElementById('dBDU');
const dMPI1 = document.getElementById('dMPI');
const dMIPT1 = document.getElementById('dMIPT');
const dSumm1 = document.getElementById('dSumm');

const pMOPI1 = document.getElementById('pMOPI');
const pMI1 = document.getElementById('pMI');
const pMIimp1 = document.getElementById('pMIimp');
const pMIUP1 = document.getElementById('pMIUP');
const pMIUPimp1 = document.getElementById('pMIUPimp');
const pMSZU1 = document.getElementById('pMSZU');
const pMRV1 = document.getElementById('pMRV');
const pBDU1 = document.getElementById('pBDU');
const pMPI1 = document.getElementById('pMPI');
const pMIPT1 = document.getElementById('pMIPT');
const pSumm1 = document.getElementById('pSumm');
const pSummImp1 = document.getElementById('pSummImp');
const pSummW1 = document.getElementById('pSummW');

calcList.addEventListener('click', function(){
    if(
        isThereFalse(autoInputCount) &&
        isThereFalse(shleifCount) &&
        isThereFalse(izvAdrNetCount) &&
        isThereFalse(izvAdrDaCount) &&
        isThereFalse(izvBezAdrCount) &&
        isThereFalse(modbusCount) &&
        isThereFalse(pressedBtnsBDU)
        // isThereFalse(pressedBtnsRuchnCount) &&
        // isThereFalse(pressedBtnsRuchnCount_sbt3) &&
        // isThereFalse(pressedBtnsRuchnCount_bezAdr) &&
        // isThereFalse(pressedBtnsRuchnCount_adrExShSn) &&
        // isThereFalse(pressedBtnsRuchnCount_adrExShSd) &&
        // isThereFalse(pressedBtnsPojCount) &&
        // isThereFalse(pressedBtnsPojCount_sbt4) &&
        // isThereFalse(pressedBtnsOpCount) &&
        // isThereFalse(pressedBtnsOpCount_sbt5) &&
        // isThereFalse(pressedBtnsOpCount_Shleif) &&
        // isThereFalse(pressedBtnsOpCount_Opoveshatel) &&
        // isThereFalse(pressedBtnsFromCount) &&
        // isThereFalse(pressedBtnsFromCount_sbt6) &&
        // isThereFalse(pressedBtnsDiagnCount) &&
        // isThereFalse(pressedBtnsDiagnCount_VD) &&
        // isThereFalse(pressedBtnsDiagnCount_VA) &&
        // isThereFalse(pressedBtnsKRSCount)
    ){
        RaschetNom.style.display = 'inline-flex';
        clkKonf.style.backgroundColor = 'white';
        clkKonf.style.color = '#000';
        calcList.style.backgroundColor = '#5f97ef';
        calcList.style.color = 'white';
        KonfiguratsiaSPZ.style.display = 'none';
        
        podsystemi.style.display = 'none';

        //Суммарное количество шлейфов
        KShSsumm = AutoSignalizatsiya.KShS + RutshnayaSignalizatsiya.KShSR;
        KShSsumm1.innerHTML = KShSsumm;
        //Количество резервных входов
        if((AutoSignalizatsiya.KMIShS + RutshnayaSignalizatsiya.KMIShSR) > 0)
        {
            KShSrez = Math.ceil((1 + AutoSignalizatsiya.REZShS/100) * AutoSignalizatsiya.KShS + (1 + RutshnayaSignalizatsiya.REZShSR/100) * RutshnayaSignalizatsiya.KShSR); 
            KShSrez1.innerHTML = KShSrez;
            //MI
            MI = Math.ceil((KShSsumm + KShSrez)/IOmoduls[4].ShS);
            //MI1.innerHTML = MI;
            MIuser = (AutoSignalizatsiya.KMIShS + RutshnayaSignalizatsiya.KMIShSR)*4; 
            //3.4.4.3
            if((KShSsumm + KShSrez) > ((AutoSignalizatsiya.KMIShS + RutshnayaSignalizatsiya.KMIShSR)*4)){
                
                 restMI = (KShSsumm + KShSrez) - MIuser;
                 MOPI = Math.ceil(restMI/IOmoduls[0].ShS);
                if(MOPI)
                    MOPI1.innerHTML = MOPI;
                else
                    MOPI1.innerHTML = 0;
            }
        }

        //Количество модулей управления пожаротушения
        //Количество резервных выходов
        if(UpravleniePojaroTusheniem.KMIShPT ){
            KShPTrez = Math.ceil((1 + UpravleniePojaroTusheniem.REZShPT/100) * UpravleniePojaroTusheniem.KShPT);
            KShptrez1.innerHTML = KShPTrez;
            if((UpravleniePojaroTusheniem.KShPT + KShPTrez)/2 > UpravleniePojaroTusheniem.KMIShPT){
                let MIdiff = UpravleniePojaroTusheniem.KShPT + KShPTrez - UpravleniePojaroTusheniem.KMIShPT*2;
                if(MIdiff != 0){
                    MIUP = Math.ceil(MIdiff / 4);
                }                    
                else{                                                   
                    MIUP = 0;
                }
                MIUP1.innerHTML = MIUP;
            }
        }
        KUPShOsumm = 0;
        KShOrez = 0;
        //Количество модулей подключения оповещателей
        for(let i = 0; i < UpravlenieOpovesheniem.KZONOP; i++){
            KUPShO[i] = [];
            for(let j = 0; j < lineLoopsDataUprOp[i].KShOPZONY; j++){
                if((_ShleifOp[i][j][0]*_ShleifOp[i][j][1]) > 150 ){
                    KUPShO[i][j] = 2;
                    KUPShOsumm += KUPShO[i][j];
                }
                else{
                    KUPShO[i][j] = 1;
                    KUPShOsumm += KUPShO[i][j];
                    //Количество терминальных модулей 
                    KONF_K_USO++;
                }   
            }
        }
        KShOrez = (1 + UpravlenieOpovesheniem.REZShO/100) * KUPShOsumm;
        MSZU =  Math.ceil((KUPShOsumm + KShOrez)/8);

        if(MSZU)
            MSZU1.innerHTML = MSZU;
        else
            MSZU1.innerHTML = 0;

        console.log(KUPShO);
        console.log(KUPShOsumm);

        //Количество модулей дискретных выходов
        if(UpravleniePojaroTusheniem.KMIShPT && (AutoSignalizatsiya.KMIShS + RutshnayaSignalizatsiya.KMIShSR)){
            //Количество дискретных выходов
            Ndo = (UpravleniePojaroTusheniem.KMIShPT + AutoSignalizatsiya.KMIShS + RutshnayaSignalizatsiya.KMIShSR) * IOmoduls[4].DO;
            Ndozad = Math.ceil(FVSIUiVsSP.KRVYH *(1 + FVSIUiVsSP.KRREZ/100));

            if(Ndozad >= Ndo){
                KONF_K_MRV = Math.ceil((Ndozad - Ndo)/IOmoduls[1].DO);
                MRV1.innerHTML = KONF_K_MRV;
            }
            else
                MRV1.innerHTML = 0;
        }

        //Количество модулей, обеспечивающих подключение дискретных входов/входов неисправности
        Ndi = (UpravleniePojaroTusheniem.KMIShPT + AutoSignalizatsiya.KMIShS + RutshnayaSignalizatsiya.KMIShSR) * IOmoduls[4].DI;
        NDdizad = Math.ceil(PodsysDiagnostiki.KDVKh * (1 + PodsysDiagnostiki.KDVKhREZ/100));
        if(NDdizad >= Ndi){
            KONF_K_MRV += Math.ceil((NDdizad - Ndi)/IOmoduls[1].DI);
            MRV1.innerHTML = KONF_K_MRV;
        }
        //Количество модулей, обеспечивающих подключение аналогового сигнала постоянного тока
        NDdazad = Math.ceil(PodsysDiagnostiki.KAVkh * (1 + PodsysDiagnostiki.KAVKhREZ/100));
        KONF_K_MIPT = Math.ceil(NDdazad/IOmoduls[5].AI);
        MIPT1.innerHTML = KONF_K_MIPT;

        //Количество модулей последовательного интерфейса
        KONF_K_MPI = Math.ceil(ConnSysRS485.KRS485/IOmoduls[6].RS485);
        if(PresenceOfARM && (KONF_K_MRV 
            + UpravleniePojaroTusheniem.KMIShPT 
            + AutoSignalizatsiya.KMIShS 
            + RutshnayaSignalizatsiya.KMIShSR
            + MOPI
            + MIUP
            + MSZU
            + KONF_K_MIPT) > BlokiUpravleniya[0].slotVV){
                KONF_K_MPI = 1;
                MPI1.innerHTML = KONF_K_MPI;
        }
        else {
            KONF_K_MPI = 0;
            MPI1.innerHTML = KONF_K_MPI;
        }

        //Количество блоков управления
        KMODULES = KONF_K_MRV 
        + UpravleniePojaroTusheniem.KMIShPT 
        + AutoSignalizatsiya.KMIShS 
        + RutshnayaSignalizatsiya.KMIShSR
        + MOPI
        + MIUP
        + MSZU
        + KONF_K_MIPT
        + KONF_K_MPI;
        if(KMODULES > BlokiUpravleniya[0].slotVV){
            KONF_K_BR = Math.ceil((KMODULES/BlokiUpravleniya[1].slotVV) - 1);
            K_BR1.innerHTML = KONF_K_BR;
        }            
        else{
            KONF_K_BR = 0;
            K_BR1.innerHTML = KONF_K_BR;
        }
            

        if(KONF_K_BR > KBR_MAX){
            alert("Конфигурация превышает возможности комплекта САПС \"ПАРУС\"");
            setAllFalse(autoInputCount);
            setAllFalse(shleifCount);
            setAllFalse(izvAdrNetCount);
            setAllFalse(izvAdrDaCount);
            setAllFalse(izvBezAdrCount);
            setAllFalse(modbusCount);

            RaschetNom.style.display = 'none';
            clkKonf.style.backgroundColor = '#5f97ef';
            clkKonf.style.color = 'white';
            calcList.style.backgroundColor = '#f2f2f2';
            calcList.style.color = '#000';
            KonfiguratsiaSPZ.style.display = 'block';
            return;
        }

        //Количество блоков дистанционного пуска
        KONF_K_BDU = UpravleniePojaroTusheniem.ZonaPojaroTushenia.KBDUZONY +  UpravleniePojaroTusheniem.ZonaPojaroTushenia.KExBDUZONY;
        K_BDU1.innerHTML = KONF_K_BDU;
        calculateCurrent();
        
        
        //Определение количества промежуточных модулей

        //Количество барьеров искрозащиты KONF_K_BIZ
        for (let i = 0; i < AutoSignalizatsiya.KShS; i++) {                
           if(lineLoopsData[i].ExShS == true)
            KONF_K_BIZ++;
        }

        for (let i = 0; i < RutshnayaSignalizatsiya.KShSR; i++) {                
            if(lineLoopsDataRuchn[i].ExShS == true)
             KONF_K_BIZ++;
         }

         for (let i = 0; i < UpravleniePojaroTusheniem.KShPT; i++) {                
            if(lineLoopsDataUpr[i].ExShPT == true)
             KONF_K_BIZ++;
         }

         for (let i = 0; i < lineLoopsUprOp.length; i++) {   
            for (let j = 0; j < lineLoopsDataUprOp[i].KShOPZONY; j++) {                
                if(_ShleifOp[i][j][2] == true)
                KONF_K_BIZ++;
            }
        }

        for (let i = 0; i < lineLoopsFormSys.length; i++) {                
            if(lineLoopsDataFormSys[i].ExRVYKh == true)
             KONF_K_BIZ++;
         }

         for (let i = 0; i < lineLoopsdiagnSys.length; i++) {                
            if(DataVhodDiskretniy[i].ExDVKh == true)
             KONF_K_BIZ++;
         }
         
         for (let i = 0; i < lineLoopsVA.length; i++) {                
            if(DataVhodAnalogoviy[i].ExAVKh == true)
             KONF_K_BIZ++;
         }
         K_BIZ1.innerHTML = KONF_K_BIZ;

         //Количство ограничителей тока
         KONF_K_OT = 1;
         if(KONF_K_BR){
            KONF_K_OT += KONF_K_BR;
         }
         K_OT1.innerHTML = KONF_K_OT;

         //Количество модулей коммутации и фильтров
         KONF_K_PF = Math.ceil((KShSsumm + KShSrez + KShPTrez + UpravleniePojaroTusheniem.KShPT + KUPShOsumm + KShOrez) / 14); 
         K_PF1.innerHTML = KONF_K_PF;
         
         //Количество терминальных модулей 
         K_USO1.innerHTML = KONF_K_USO;
        //  for(let i = 0; i < UpravlenieOpovesheniem.KZONOP; i++){
        //     for(let j = 0; j < lineLoopsDataUprOp[i].KShOPZONY; j++){
        //         if(KUPShO[i][j] == 1){
        //             KONF_K_USO++;
        //         }
        //     }
        // }
    }
    else{
        alert('Не все поля заполнены в режиме \"Конфигурация СПЗ\"');
        RaschetNom.style.display = 'none';
        clkKonf.style.backgroundColor = '#5f97ef';
        clkKonf.style.color = 'white';
        calcList.style.backgroundColor = '#fff';
        calcList.style.color = '#000';
        KonfiguratsiaSPZ.style.display = 'block';
    }
});

//------------------------------Перерасчет тока------------------------------
function calculateCurrent(){
    //Дежурный режим:
    //Ток потребления ППКП или БР1:
    let Id_PPKP = 35;
    
    //Ток потребления модулем МОПИ:
    //при подключении адресных извещателей:
    let fooArr = [];
    let Id_summ = 0;
    let IAd_summ = 30;
    let BId_summ = 30;
    let Id_MI_summ = 13.6;
    let Id_MIUP_summ = 0;
    let Id_MSZU_summ = 0;
    let Id_MRV_summ = 0;
    let Id_BDU = 0;
    let Id_MPI = 0;
    let Id_MIPT = 0;

    //Режим пожарной тревоги:
    //Ток потребления ППКП или БР1:
    let Ip_PPKP = 55;
    
    //При подключении адресных извещателей:
    let Ip_MOPI = 30;
    let Ip_MI = 13.6;
    let Ip_MI_imp = 0;
    let Ip_miup_post = 11;
    let Ip_miup_imp = 0;
    let Ip_mszu = 10.4;
    let Ip_mrv = 12.4;
    let Ip_bdu = 0;
    let Ip_mpi = 0;
    let Ip_mipt = 0;
    let Ipt_summ = 0;
    let Ipt_imp = 0;
    let W = 0;

    //При подключении безадресных активных извещателей с нормально разомкнутыми контактами:
    
    

    if(AutoSignalizatsiya.KShS && RutshnayaSignalizatsiya.KShSR){
        fooArr.length = AutoSignalizatsiya.KShS + RutshnayaSignalizatsiya.KShSR;
        for (let i = 0; i < AutoSignalizatsiya.KShS; i++) {                
            fooArr[i] = Object.assign({}, lineLoopsData[i]);  
        }
        for (let i = AutoSignalizatsiya.KShS ; i < AutoSignalizatsiya.KShS + RutshnayaSignalizatsiya.KShSR; i++) {                
            for(let j = 0; j < RutshnayaSignalizatsiya.KShSR; j++){
                fooArr[i] = Object.assign({}, lineLoopsDataRuchn[j]);  
                i++;
            }
        }
        //Ток потребления модулем МОПИ:
        if(MOPI){
        
            for(let i = fooArr.length - 1; i >= fooArr.length - restMI; i--){
                
                if(fooArr[i].TShS == 0){//при подключении адресных извещателей:
                    IAd_summ += (fooArr[i].KIZVShS * 0.35 + 1.2);
                    Ip_MOPI += (fooArr[i].KIZVShS * 1.00 + 1.2);
                    //Id_MI_summ += (fooArr[i].KIZVShS * 0.35 + 1.2 + (FVSIUiVsSP.KRVYH * 6.2) + (PodsysDiagnostiki.KDVKh * 1.1));
                }
                else if(fooArr[i].TShS == 1){
                    if(fooArr[i].izveshateli.KonfIzvBezAdr.TIZV == 2 || fooArr[i].SHShS == 2){
                        Ip_MOPI += (fooArr[i].KIZVShS * fooArr[i].izveshateli.KonfIzvBezAdr.IOIZV + 1.2 + 2 * fooArr[i].izveshateli.KonfIzvBezAdr.IPIZV);
                        IAd_summ += (fooArr[i].KIZVShS * fooArr[i].izveshateli.KonfIzvBezAdr.IOIZV + 1.2);
                        //Id_MI_summ += (fooArr[i].KIZVShS * 0.35 + 1.2 + (FVSIUiVsSP.KRVYH * 6.2) + (PodsysDiagnostiki.KDVKh * 1.1));
                    }  
                    else if(fooArr[i].izveshateli.KonfIzvBezAdr.TIZV == 0 || fooArr[i].SHShS == 0){
                        Ip_MOPI += (1.2 + 2 * fooArr[i].izveshateli.KonfIzvBezAdr.IPIZV);
                        IAd_summ += 1.2;
                        //Id_MI_summ += ( 1.2 + (FVSIUiVsSP.KRVYH * 6.2) + (PodsysDiagnostiki.KDVKh * 1.1));
                    }
                    else if(fooArr[i].izveshateli.KonfIzvBezAdr.TIZV == 1 || fooArr[i].SHShS == 1){
                        Ip_MOPI += (1.2 + 6.4);
                        IAd_summ += 1.2;
                        //Id_MI_summ += ( 1.2 + (FVSIUiVsSP.KRVYH * 6.2) + (PodsysDiagnostiki.KDVKh * 1.1));
                    }
                }
            }
        
        }
        dMOPI1.innerHTML = IAd_summ;
        pMOPI1.innerHTML = Ip_MOPI;
        //MI
        let Ishd = 0;        
        let Ishp = 0;
        for(let i = 0; i < fooArr.length - restMI; i++){
                
            if(fooArr[i].TShS == 0){//при подключении адресных извещателей:

                Ishd += (fooArr[i].KIZVShS * 0.35 + 1.2) //+ (FVSIUiVsSP.KRVYH * 6.2) + (PodsysDiagnostiki.KDVKh * 1.1));
                Ishp += (fooArr[i].KIZVShS * 1.0 + 1.2);
            }
            else if(fooArr[i].TShS == 1){
                if(fooArr[i].izveshateli.KonfIzvBezAdr.TIZV == 2 || fooArr[i].SHShS == 2){
                    Ishp += (fooArr[i].KIZVShS * fooArr[i].izveshateli.KonfIzvBezAdr.IOIZV + 1.2 + 2 * fooArr[i].izveshateli.KonfIzvBezAdr.IPIZV);
                    Ishd += (fooArr[i].KIZVShS * fooArr[i].izveshateli.KonfIzvBezAdr.IOIZV + 1.2 ); //+ (FVSIUiVsSP.KRVYH * 6.2) + (PodsysDiagnostiki.KDVKh * 1.1));
                }  
                else if(fooArr[i].izveshateli.KonfIzvBezAdr.TIZV == 0 || fooArr[i].SHShS == 0){
                    Ishp += (1.2 + 2 * fooArr[i].izveshateli.KonfIzvBezAdr.IPIZV);
                    Ishd +=  1.2; //+ (FVSIUiVsSP.KRVYH * 6.2) + (PodsysDiagnostiki.KDVKh * 1.1));
                }
                else if(fooArr[i].izveshateli.KonfIzvBezAdr.TIZV == 1 || fooArr[i].SHShS == 1){
                    Ishp += 6.4;
                    Ishd +=  1.2 ;//+ (FVSIUiVsSP.KRVYH * 6.2) + (PodsysDiagnostiki.KDVKh * 1.1));
                }
            }
        }
        let Inekp = 0;
        for(let i = 0; i < UpravleniePojaroTusheniem.KShPT; i++){
            Inekp += lineLoopsDataUpr[i].ImpShPT;
        }

        Id_MI_summ += Ishd + (FVSIUiVsSP.KRVYH * 6.2) + (PodsysDiagnostiki.KDVKh * 1.1);
        Ip_MI += Ishp + (FVSIUiVsSP.KRVYH * 6.2) + (PodsysDiagnostiki.KDVKh * 1.1);
        Ip_MI_imp = Ip_MI + UpravleniePojaroTusheniem.KShPT * 8.6 + Inekp;

        dMI1.innerHTML = Id_MI_summ;
        pMI1.innerHTML = Ip_MI;
        pMIimp1.innerHTML = Ip_MI_imp;

        if(MIUP){
            if(UpravleniePojaroTusheniem.ZonaPojaroTushenia.KDDZONY == 0){
                Id_MIUP_summ = 11 + 0;
                Ip_miup_post += 0;
            }
            else{
                Id_MIUP_summ = 11 + ((UpravleniePojaroTusheniem.ZonaPojaroTushenia.KDDZONY - 1) * 0.5 + 1.8);
                Ip_miup_post += ((UpravleniePojaroTusheniem.ZonaPojaroTushenia.KDDZONY - 1) * 0.5 + 1.8);
            }
            Ip_miup_imp = UpravleniePojaroTusheniem.KShPT * 8.6 + Inekp;

            dMIUP1.innerHTML = Id_MIUP_summ;
            pMIUP1.innerHTML = Ip_miup_post;
            pMIUPimp1.innerHTML = Ip_miup_imp;
        }
        if(MSZU){
            let N = 0;
            for(let i = 0; i < UpravlenieOpovesheniem.KZONOP; i++){
                for(let j = 0; j < lineLoopsDataUprOp[i].KShOPZONY; j++){
                    N += _ShleifOp[i][j][0];                   
                }
            }
            Id_MSZU_summ = 10.4 + (N - 1) *0.5 + 1.8;

            if(PodsysDiagnostiki.KDVKh == 0){
                Ip_mszu += UpravleniePojaroTusheniem.KShPT * 8.6 + Inekp;
            }
            else{
                Ip_mszu += UpravleniePojaroTusheniem.KShPT * 8.6 + Inekp + ((PodsysDiagnostiki.KDVKh - 1) * 0.5 + 1.8);
            }
            dMSZU1.innerHTML = Id_MSZU_summ;
            pMSZU1.innerHTML = Ip_mszu;
        }
        if(KONF_K_MRV){
            if(PodsysDiagnostiki.KDVKh == 0){
                Id_MRV_summ = 12.4 + FVSIUiVsSP.KRVYH * 6.2 + 0;
                Ip_mrv += FVSIUiVsSP.KRVYH * 6.2 + 0;
            }    
            else{
                Id_MRV_summ = 12.4 + FVSIUiVsSP.KRVYH * 6.2 + ((PodsysDiagnostiki.KDVKh - 1) * 0.5 + 1.8);
                Ip_mrv += FVSIUiVsSP.KRVYH * 6.2 + ((PodsysDiagnostiki.KDVKh - 1) * 0.5 + 1.8);
            }
            dMRV1.innerHTML = Id_MRV_summ;
            pMRV1.innerHTML = Ip_mrv;
        }
        if(UpravleniePojaroTusheniem.ZonaPojaroTushenia.KBDUZONY || UpravleniePojaroTusheniem.ZonaPojaroTushenia.KExBDUZONY){
            Id_BDU = 22.4 + PodsysDiagnostiki.KDVKh * 1.1;
            Ip_bdu = 22.4 + UpravleniePojaroTusheniem.KShPT * 8.6 + Inekp + PodsysDiagnostiki.KDVKh  * 1.1;
            dBDU1.innerHTML = Id_BDU;
            pBDU1.innerHTML = Ip_bdu;
        }
        Id_MPI = 30.1;
        dMPI1.innerHTML = Id_MPI;
        Id_MIPT = 100;
        dMIPT1.innerHTML = Id_MIPT;
        let sum = IAd_summ + Id_MI_summ + Id_MIUP_summ + Id_MSZU_summ + Id_MRV_summ + Id_BDU + Id_MPI + Id_MIPT;
        Id_summ = 32 + sum + ((UpravleniePojaroTusheniem.ZonaPojaroTushenia.KBDUZONY +  UpravleniePojaroTusheniem.ZonaPojaroTushenia.KExBDUZONY) * 22.4 + ivnp);
        dSumm1.innerHTML = Id_summ;
        console.log("Ток потребления в дежурном режиме: "+Id_summ);

        Ip_mpi = 30.1;
        pMPI1.innerHTML = Ip_mpi;
        Ip_mipt = 100;
        pMIPT1.innerHTML = Ip_mipt;
        let sumP =   Ip_MOPI +   Ip_MI +  Ip_miup_post + Ip_mszu + Ip_mrv + Ip_bdu + Ip_mpi + Ip_mipt;
        Ipt_summ = 55 + sumP + ((UpravleniePojaroTusheniem.ZonaPojaroTushenia.KBDUZONY +  UpravleniePojaroTusheniem.ZonaPojaroTushenia.KExBDUZONY) * 22.4 + ivnpt);
        pSumm1.innerHTML = Ipt_summ;
        console.log("Ток потребления в пожарном режиме: "+Ipt_summ);
        // Ip_MI_imp + Ip_miup_imp + 
        Ipt_imp = Ipt_summ + Ip_miup_imp + Ip_MI_imp;
        pSummImp1.innerHTML = Ipt_imp;
        console.log("Импульсный: "+Ipt_summ);
        W = (24 * Id_summ + 3 * Ipt_summ) * 1.25; 
        pSummW1.innerHTML = W;
        console.log("Ток аккумудятора: "+W);
    }




}


//Classes------------------------------
class addInfoToList{
    constructor(mass){
        this.mass = mass;
    }
    addItems(node) {
        if(this.mass.length != 0){
            let oOption, childNodes = []; 
            if(node.hasChildNodes()) 
            {
                for (let i = 0; i < node.childNodes.length; i++) {
                    if(node.childNodes[i].nodeType == 1) 
                    {   
                        childNodes.push(node.childNodes[i].value)
                    }
                }
            }
        
            for (let i = 0; i < this.mass.length; i++) {
                if(childNodes.indexOf(this.mass[i]) == -1){
                    oOption = document.createElement('option'); 
                    oOption.setAttribute("value", this.mass[i]);
                    node.appendChild(oOption);
                }
                else
                    continue;
            }
            
        }
    }

}


      //const socket = new io.Socket('localhost', {port: 3000});
        // socket.connect();
        // socket.on('message', (data)=> {

        // })


//-------------------Working function------------------------------
// function download(content, fileName, contentType) {
//     var a = document.createElement("a");
//     var file = new Blob([content], {type: contentType});
//     a.href = URL.createObjectURL(file);
//     a.download = fileName;
//     a.click();
// }
// download(jsonData, 'json1.json', 'text/plain');
}, false);