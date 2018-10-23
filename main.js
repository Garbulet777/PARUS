'use strict';
//let x= [];

document.addEventListener('DOMContentLoaded', function(){
    const socket = io.connect();

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
function showBu(){
    // BU.innerText = BlokiUpravleniya[0].name;
    sel.style.display = 'block';  
}
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
            if(dlg1Configured == false)
                dialog1.style.display = 'block';
                clkKonf.style.backgroundColor = '#5f97ef';
                clkKonf.style.color = 'white';
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
            
            autoSys.style.backgroundColor = '#5f97ef';
            autoSys.style.color = 'white';
            ruchSys.style.backgroundColor = '#fff';
            ruchSys.style.color = '#000';
            uprPojSys.style.backgroundColor = '#fff';
            uprPojSys.style.color = '#000';
            uprOpSys.style.backgroundColor = '#fff';
            uprOpSys.style.color = '#000';

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

            ruchSys.style.backgroundColor = '#5f97ef';
            ruchSys.style.color = 'white';
            autoSys.style.backgroundColor = '#fff';
            autoSys.style.color = '#000';
            uprPojSys.style.backgroundColor = '#fff';
            uprPojSys.style.color = '#000';
            uprOpSys.style.backgroundColor = '#fff';
            uprOpSys.style.color = '#000';

            if(RutshnayaSignalizatsiya.KShSR)
                iKShSR2.value = RutshnayaSignalizatsiya.KShSR;
            if(RutshnayaSignalizatsiya.KMIShSR > 0)
                iKMIShSR2.value = RutshnayaSignalizatsiya.KMIShSR;
            if(RutshnayaSignalizatsiya.REZShS > 0)
                iREZShSR2.value = RutshnayaSignalizatsiya.REZShSR;
        });

        uprPojSys.addEventListener('click', () => {
            dialog4.style.display = 'inline';
            dialog4.style.flexDirection = 'column';
            document.querySelector('div#autoSysConfiguration').style.display = 'none';
            document.querySelector('div#uprPojSysConfiguration').style.display = 'block';
            document.querySelector('div#ruchSysConfiguration').style.display = 'none';
            document.querySelector('div#uprOpSysConfiguration').style.display = 'none';

            uprPojSys.style.backgroundColor = '#5f97ef';
            uprPojSys.style.color = 'white';
            uprOpSys.style.backgroundColor = '#fff';
            uprOpSys.style.color = '#000';
            ruchSys.style.backgroundColor = '#fff';
            ruchSys.style.color = '#000';
            autoSys.style.backgroundColor = '#fff';
            autoSys.style.color = '#000';

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
            document.querySelector('div#uprOpSysConfiguration').style.display = 'block';

            uprOpSys.style.backgroundColor = '#5f97ef';
            uprOpSys.style.color = 'white';
            uprPojSys.style.backgroundColor = '#fff';
            uprPojSys.style.color = '#000';
            ruchSys.style.backgroundColor = '#fff';
            ruchSys.style.color = '#000';
            autoSys.style.backgroundColor = '#fff';
            autoSys.style.color = '#000';

            // if(RutshnayaSignalizatsiya.KShSR)
            //     iKShSR2.value = RutshnayaSignalizatsiya.KShSR;
            // if(RutshnayaSignalizatsiya.KMIShSR > 0)
            //     iKMIShSR2.value = RutshnayaSignalizatsiya.KMIShSR;
            // if(RutshnayaSignalizatsiya.REZShS > 0)
            //     iREZShSR2.value = RutshnayaSignalizatsiya.REZShSR;
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
            if(projname.value && TypeOfPPKP){

                if(ARM_PARUS.checked) PresenceOfARM = true;
                else  PresenceOfARM = false;

                NameOfProject = projname.value;

                if(NameOfProject && TypeOfPPKP)
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
    destroyKonf();
});

iKShS.addEventListener('blur', ()=>{
    if(iKShS.value.search(regEx) == -1){
    if(parseInt(iKShS.value, 10) >= 1 && parseInt(iKShS.value, 10) <= 640){
        AutoSignalizatsiya.KShS = parseInt(iKShS.value, 10);

        iKShS.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
        console.log(AutoSignalizatsiya.KShS);
    }
    else if(iKShS.value == ""){
        return;
    }
    else
        {
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
    let div = document.getElementById('lineLoopKonf');
    document.body.removeChild(div);
}

function createlineLoop(val){
    if(val > 0){
        let elem, subelem, option, mainDiv;
        mainDiv = document.createElement('div');
        mainDiv.setAttribute('id','lineLoopKonf');
        mainDiv.setAttribute('class','flex-item');
        for (let i = 0; i < val; i++) {
            elem = document.createElement('form');
            elem.setAttribute("id", i);
            
            // subelem = document.createElement('h3')
            // subelem.appendChild(document.createTextNode(`Конфигурация шлейфа #${i + 1}`));
            // elem.appendChild(subelem);

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode("Тип шлейфа:"));
            elem.appendChild(subelem);

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

            
            elem.appendChild(subelem);


            let div = document.createElement('div');
            div.setAttribute('id', `bezAdr_${i}`);
            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode("Схема включения:"));
            div.appendChild(subelem);
            subelem = document.createElement('select');
            subelem.setAttribute('id', `SKhShS${i}`);

            option = document.createElement('option');
            option.appendChild(document.createTextNode("Пассивный ПР"));
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

            div.appendChild(subelem);
            elem.appendChild(div);

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode("Взрывозащита:"));
            elem.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'checkbox');
            subelem.setAttribute('id', `ExShS${i}`);
            elem.appendChild(subelem);

            div = document.createElement('div');
            div.setAttribute('id', `TypeBIZ${i}`);
            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode('Тип искробарьера:'));
            div.appendChild(subelem);


            option = document.createElement('label');
            subelem = document.createElement('input');
            subelem.setAttribute('list', `_adrBIZ${i}`);
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `TShSBIZ${i}`);
            option.appendChild(subelem);
            div.appendChild(option);
            
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

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode('Количество извещателей:'));
            elem.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'number');
            subelem.setAttribute('id', `KIZVShS${i}`);
            subelem.setAttribute('placeholder', '1...32');
            elem.appendChild(subelem);

            div = document.createElement('div');
            div.setAttribute('id', `bezAdr__${i}`);

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode('Зона:'));
            div.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'number');
            subelem.setAttribute('id', `ZONAShS${i}`);
            subelem.setAttribute('placeholder', '1...255');
            div.appendChild(subelem);

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode('Наименование / адрес:'));
            div.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `ADRShS${i}`);
            subelem.setAttribute('placeholder', `до 20 символов...`);
            div.appendChild(subelem);

            elem.appendChild(div);

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode('Разрешить подключение ручных извещателей:'));
            subelem.setAttribute('class', `RRIShS_p_${i}`);
            elem.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'checkbox');
            subelem.setAttribute('id',`RRIShS${i}`);
            elem.appendChild(subelem);

            div = document.createElement('div');
            div.setAttribute('id', `bezAdr___${i}`);   

            subelem = document.createElement('h3');
            subelem.appendChild(document.createTextNode('Конфигурация извещателя при типе шлейфа "безадресный" и при присутствии взрывозащиты'));
            div.appendChild(subelem);

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode('Тип извещателя:'));
            div.appendChild(subelem);

            subelem = document.createElement('label');
            let subSub = document.createElement('input');
            subSub.setAttribute('list', `enteredItems${i}`);
            subSub.setAttribute('id', `TIZV${i}`);
            subelem.appendChild(subSub);
            div.appendChild(subelem);

            subelem = document.createElement('datalist');
            subelem.setAttribute('id', `enteredItems${i}`);
            div.appendChild(subelem);

            subelem= document.createElement('p');
            subelem.appendChild(document.createTextNode('Ток в режиме "ДЕЖУРНЫЙ", мА:'));
            div.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `IOIZV${i}`);
            div.appendChild(subelem);

            subelem= document.createElement('p');
            subelem.appendChild(document.createTextNode('Ток в режиме "ПОЖАР", мА:'));
            div.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `IPIZV${i}`);
            div.appendChild(subelem);

            elem.appendChild(div);

            subelem = document.createElement('br');
            elem.appendChild(subelem);

            subelem = document.createElement('button');
            subelem.setAttribute('type', 'submit');
            subelem.setAttribute('id', `dlgSbt${i}`);
            subelem.setAttribute('class', `btn-after`);
            subelem.style.marginTop = '19px';
            subelem.style.marginBottom = '20px';
            subelem.appendChild(document.createTextNode('Сконфигурировать извещатели'));
            elem.appendChild(subelem);


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
    }
    else if(iKMIShS1.value == ""){
        return;
    }
    else
        {
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
    }
    else if(iREZShS1.value == ""){
        return;
    }
    else
        {
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

let 
    izvNodes = {
        adrExNet: '',
        Taizv: '',
        zonaIzv: '',
        adrIzv: '',
        adrExDa: '',
        TaizvD: '',
        zonaIzvD: '',
        adrIzvD: '',
        konfModbus: '',
        KMBUSLNK: '',
        btnsID: '',
        prev: '',
        cur:'',
        next: '',
        pos: '',
        lastPos:''

    };

// if(document.querySelector('div#lineLoopKonf'))
// {

//     lineLoopConf.addEventListener('mouseover',()=>{
//         setTShS(dynamicEventHandlers, lineLoops.length, lineLoopsData);
//     });
// }


sbtForm2.addEventListener('click', (e)=>{
    e.preventDefault();
    if(AutoSignalizatsiya.KShS ){
            alert('Сконфигурировано!');
            lineLoopBtns.style.display = 'block';
            lineLoops.length = AutoSignalizatsiya.KShS;
            for (let i = 0; i < lineLoops.length; i++) {
                lineLoops[i] = AutoSignalizatsiya.KonfShleifa;
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
                    lineLoopsData[i] = AutoSignalizatsiya.KonfShleifa;
                    dynamicEventHandlers[i][5].style.display = 'none';
                }
             }

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
                setDlsSbt(dynamicEventHandlers, lineLoops.length, lineLoopsData);
        }
    else
        alert('Конфигурация не завершена! Пропущены данные.');
});



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
document.querySelector('div.lineLoopBtnsRuchn').style.display = 'none';
// const adrBIZ2 = document.getElementById('adrBIZ2'),
// bezAdr2_2 = document.getElementById('bezAdr2_2'),
// AdrExNet2 = document.getElementById('AdrExNet2'),
// AdrExDa2 = document.getElementById('AdrExDa2'),
// iKIZVShS2 = document.getElementById('iKIZVShS2'),
// iZONAShS2 = document.getElementById('iZONAShS2'),
// iADRShS2 = document.getElementById('iADRShS2'),
// iTAIZV2 = document.getElementById('iTAIZV2'),
// iTAIZV2_1 = document.getElementById('iTAIZV2_1'),
// iZONAIZV2 = document.getElementById('iZONAIZV2'),
// iZONAIZV2_1 = document.getElementById('iZONAIZV2_1'),
// iADRIZV2 = document.getElementById('iADRIZV2'),
// iADRIZV2_1 = document.getElementById('iADRIZV2_1'),
// iTIZV2 = document.getElementById('iTIZV2'),
// iIOIZV2 = document.getElementById('iIOIZV2'),
// iIPIZV2 = document.getElementById('iIPIZV2'),
// KMIShSR = document.getElementById('KMIShSR');  

// bezAdr1.style.display = 'none';
// bezAdr1_1.style.display = 'none';
// bezAdr2_2.style.display = 'none';
// KMIShSR.style.display = 'none';

// adrBIZ2.style.display = 'block';
// AdrExNet2.style.display = 'none';   
// AdrExDa2.style.display = 'none';  



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
       iKShSR2.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       console.log("Ручная сигнализация " + RutshnayaSignalizatsiya.KShSR);
   }
   else if(iKShSR2.value == ""){
       RutshnayaSignalizatsiya.KonfShleifa.KIZVShS = 0;
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
        KMIShSR_open.style.display = 'block';
    }
    else  
    {
        RutshnayaSignalizatsiya.MIShSR = false;
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
       iKMIShSR2.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       console.log("КМИШСР: " + RutshnayaSignalizatsiya.KMIShSR);
   }
   else if(iKMIShSR2.value == ""){
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
        console.log("РЕЗШСР: " + RutshnayaSignalizatsiya.REZShSR);
    }
    else if(iREZShSR2.value == ""){
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




sbtForm3.addEventListener('click', (e)=>{
    e.preventDefault();
    if(RutshnayaSignalizatsiya.KShSR ){
            alert('Сконфигурировано!');
            document.querySelector('div.lineLoopBtnsRuchn').style.display = 'block';
            lineLoopBtns.style.display = 'block';
            lineLoopsRuchn.length = RutshnayaSignalizatsiya.KShSR;
            for (let i = 0; i < lineLoopsRuchn.length; i++) {
                lineLoopsRuchn[i] = RutshnayaSignalizatsiya.KonfShleifa;
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
                    lineLoopsDataRuchn[i] = RutshnayaSignalizatsiya.KonfShleifa;
                    //dynamicEventHandlersRuchn[i][5].style.display = 'none';
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

                handlePrevIzvR(lineLoopsRuchn.length, dataToSave[curPosRuchn-1].KIZVShS, izvLasPosR, izvBtnsPrevR, dynamicEvHandlerIZVR,
                    dataToSave, curPosIzvR, nextPosIzvR, prevPosIzvR);
                handleNextIzvR(lineLoopsRuchn.length, dataToSave[curPosRuchn-1].KIZVShS,  izvLasPosR, izvBtnsNextR, dynamicEvHandlerIZVR,
                    dataToSave, curPosIzvR, nextPosIzvR, prevPosIzvR);
                handleIzvPosR(lineLoopsRuchn.length, dataToSave[curPosRuchn-1].KIZVShS, izvLasPosR,  dynamicEvHandlerIZVR, dataToSave,
                    curPosIzvR, nextPosIzvR, prevPosIzvR);

                setTAIZVadrNet(dynamicEvHandlerIZVR, lineLoopsRuchn.length, dataToSave[i].KIZVShS, _izveshateliR);
                setZonaIzvadrNet(dynamicEvHandlerIZVR, lineLoopsRuchn.length, dataToSave[i].KIZVShS, _izveshateliR);
                setAdrIZVadrNet(dynamicEvHandlerIZVR, lineLoopsRuchn.length, dataToSave[i].KIZVShS, _izveshateliR);
                setTAIZVadrDa(dynamicEvHandlerIZVR, lineLoopsRuchn.length, dataToSave[i].KIZVShS, _izveshateliR);
                setZonaIzvadrDa(dynamicEvHandlerIZVR, lineLoopsRuchn.length, dataToSave[i].KIZVShS, _izveshateliR);
                setAdrIZVadrDa(dynamicEvHandlerIZVR, lineLoopsRuchn.length, dataToSave[i].KIZVShS, _izveshateliR);
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

                            // if(izvBtnsID[i])
                            //     izvBtnsID[i].style.display = 'none';

                            // if(lineLoopsData[i].KIZVShS != 0){
                            //     for (let j = 0; j < lineLoopsData[i].KIZVShS; j++) {
                            //         if(dynamicEvHandlerIZV[i][j][4]  &&
                            //             dynamicEvHandlerIZV[i][j][0] ){                                       
                            //                 dynamicEvHandlerIZV[i][j][4].style.display = 'none';
                            //                 dynamicEvHandlerIZV[i][j][0].style.display = 'none';
                            //             }
                            //     }
                            // }
                        

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
                
                            if(dataToSave[i].ExShS == true && dataToSave[i].KIZVShS >= 1){
                                //handlerArr[i][17].style.display = 'block';
                            }                                
                            else{
                                //handlerArr[i][13].style.display = 'block';
                            }
                            
                            handlerArr[i][2].style.display = 'none';
                            handlerArr[i][10].style.display = 'none';
                            
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
// iTShS2.onchange = ()=>{
//     if(iTShS2.selectedIndex == 1){
//         RutshnayaSignalizatsiya.KonfShleifa.TShS = iTShS2.selectedIndex;
        
//         AdrExNet2.style.display = 'none';
//         AdrExDa2.style.display = 'none';
//         bezAdr2_2.style.display = 'block';
//         rtBiz.style.display = 'block';

//         while(adrBIZ2.firstChild)
//             adrBIZ2.removeChild(adrBIZ2.firstChild);
            
//             let oOption = document.createElement("option");
//             oOption.appendChild(document.createTextNode("Выберите тип:"));
//             oOption.setAttribute("value", "");
//             adrBIZ2.appendChild(oOption);   
           
//             for (let i = 0; i < IntermediateModules.length; i++) {
//                 for(let prop in IntermediateModules[i]){
//                     if(IntermediateModules[i][prop] == "BIZ"){
//                         oOption = document.createElement("option")
//                         oOption.appendChild(document.createTextNode(IntermediateModules[i].name));
//                         oOption.setAttribute("value", "");
//                         adrBIZ2.appendChild(oOption);   
//                     }
//                 }        
//             }
//     }
//     else if(iTShS2.selectedIndex == 0){
//         RutshnayaSignalizatsiya.KonfShleifa.TShS = iTShS2.selectedIndex;

//         if(RutshnayaSignalizatsiya.KonfShleifa.ExShS == true)
//             AdrExDa2.style.display = 'block';
//         else
//             AdrExNet2.style.display = 'block';
           
//         // AdrExNet2.style.display = 'block';
//         // AdrExDa2.style.display = 'block';
//         bezAdr2_2.style.display = 'none';
//         rtBiz.style.display = 'none';
//         while(adrBIZ2.firstChild)
//             adrBIZ2.removeChild(adrBIZ2.firstChild);

//         let oOption = document.createElement("option");
//         oOption.appendChild(document.createTextNode("Выберите тип:"));
//         oOption.setAttribute("value", "");
//         adrBIZ2.appendChild(oOption);  
//         for (let i = 0; i < IntermediateModules.length; i++) {
//             for(let prop in IntermediateModules[i]){
//                 if(IntermediateModules[i][prop] == "I"){
//                      oOption = document.createElement("option");
//                     oOption.appendChild(document.createTextNode(IntermediateModules[i].name));
//                     oOption.setAttribute("value", "");
//                     adrBIZ2.appendChild(oOption);   
//                 }
//             }        
//         }
//     }
// };



// // ExShSR
function setExShSR(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
            if(handlerArr[i][1]){
                handlerArr[i][1].addEventListener('click', ()=>{
            if(handlerArr[i][1].checked)
            { 
                dataToSave[i].ExShS = true;

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

// iExShS2.addEventListener('click', function(){
//     if(this.checked)
//     { 
//         RutshnayaSignalizatsiya.KonfShleifa.ExShS = true;
//         TypeBIZ2.style.display = 'block';
//         if( RutshnayaSignalizatsiya.KonfShleifa.TShS == 0){ 
//             AdrExNet2.style.display = 'none'; 
//             AdrExDa2.style.display = 'block';
//             rtBiz.style.display = 'none';
//             while(adrBIZ2.firstChild)
//             adrBIZ2.removeChild(adrBIZ2.firstChild);

//             let oOption = document.createElement("option");
//             oOption.appendChild(document.createTextNode("Выберите тип:"));
//             oOption.setAttribute("value", "");
//             adrBIZ2.appendChild(oOption);  
//             for (let i = 0; i < IntermediateModules.length; i++) {
//                 for(let prop in IntermediateModules[i]){
//                     if(IntermediateModules[i][prop] == "I"){
//                         oOption = document.createElement("option");
//                         oOption.appendChild(document.createTextNode(IntermediateModules[i].name));
//                         oOption.setAttribute("value", "");
//                         adrBIZ2.appendChild(oOption);   
//                     }
//                 }        
//             }
//         }
        
//     }
//     else  {
//         RutshnayaSignalizatsiya.KonfShleifa.ExShS = false;
//         TypeBIZ2.style.display = 'none';
//         if( RutshnayaSignalizatsiya.KonfShleifa.TShS == 0) {
//             AdrExDa2.style.display = 'none'; 
//             AdrExNet2.style.display = 'block';
//             rtBiz.style.display = 'block';
//         }
//     }
//     //e.preventDefault();
// });

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
                            
                            return;
                        }
                        //andlerArr[i][7].style.display = 'block';
                    }
                    else
                    {
                        dataToSave[i].TShSBIZ = handlerArr[i][3].value;
                        console.log("ТШСБИЗR: " + dataToSave[i].TShSBIZ);
                    }
                }
                else{
                    if(handlerArr[i][3].value == ""){
                        return;
                    }
                    else{
                    dataToSave[i].TShSBIZ = handlerArr[i][3].value;   
                    
                    console.log("ТШСБИЗR: " + dataToSave[i].TShSBIZ);
                    }
                }
            }
        });
        
    }
}


//     rtBiz.addEventListener('blur', (e)=>{
//         if(RutshnayaSignalizatsiya.KonfShleifa.ExShS == true){
//             if(RutshnayaSignalizatsiya.KonfShleifa.TShS == 1){
//                 if(rtBiz.value == ""){
//                     let flag = confirm("Взрывозащита типа \"d\"");
//                     if(flag)
//                     {
//                         RutshnayaSignalizatsiya.KonfShleifa.TShSBIZ = "Взрывозащита типа \"d\"";
//                         rtBiz.value = "Взрывозащита типа \"d\"";
//                         console.log("ТШСБИЗ: " + RutshnayaSignalizatsiya.KonfShleifa.TShSBIZ);
//                         adrBIZ2.style.display = 'none';
//                         e.preventDefault();
//                         list = false
//                         return;
//                     }
//                     adrBIZ2.style.display = 'block';
//                 }
//                 else
//                 {
//                     RutshnayaSignalizatsiya.KonfShleifa.TShSBIZ = rtBiz.value;
//                     console.log("ТШСБИЗ: " + RutshnayaSignalizatsiya.KonfShleifa.TShSBIZ);
//                     list = false;
//                     flag = false;
//                 }
//             }
//             else{
//                 if(rtBiz.value == ""){
//                     return;
//                 }
//                 else
//                 RutshnayaSignalizatsiya.KonfShleifa.TShSBIZ = rtBiz.value;    
//             }
//             list = false;
//         }
//     })
 
//     //List 
//     adrBIZ2.onchange = ()=>{
//         if(adrBIZ2.selectedIndex == 0)
//             return;

//         RutshnayaSignalizatsiya.KonfShleifa.TShSBIZ = adrBIZ2.options[adrBIZ2.selectedIndex].text;
//         console.log(RutshnayaSignalizatsiya.KonfShleifa.TShSBIZ );
//     };

function setAdrBizR(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][5].onchange = ()=>{
            if(handlerArr[i][5].selectedIndex == 0)
                return;

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
                    handlerArr[i][6].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                    console.log(i + "-КІЗВШСR: " + dataToSave[i].KIZVShS);

                    // for (let i = 0; i < AutoSignalizatsiya.KShS; i++) {
                    //     for (let j = 0; j < array.length; j++) {
                    //         _izveshateli[i] = [];                            
                    //     }                       
                        
                    // }

                }
                else if( handlerArr[i][6].value == ""){
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
//     iKIZVShS2.onkeypress = (e)=>{
//         e = e || event;
//        if (e.ctrlKey || e.altKey || e.metaKey) return;
//        var chr = getChar(e);
//        console.log("Char pressed: " + chr);
//        if(chr == ',' || chr == '.')
//        {   
//            // iKShS.value.replace(/[\,|\.]+/g,'');
//            e.preventDefault();
//            return;
//        }
//        if(chr == null) return;
    
//        if (chr < '0' || chr > '9') {
//            return false;
//        }
//     };
    
//         iKIZVShS2.addEventListener('focus', ()=>{
//             iKIZVShS2.style.boxShadow = 'none';
//         });
    
//         iKIZVShS2.addEventListener('blur', ()=>{
//             if(iKIZVShS2.value.search(regEx) == -1){
//             if(parseInt(iKIZVShS2.value, 10) >= 1 && parseInt(iKIZVShS2.value, 10) <= 32){
//                 RutshnayaSignalizatsiya.KonfShleifa.KIZVShS = parseInt(iKIZVShS2.value, 10);
//                 iKIZVShS2.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//                 console.log("КИЗВШС: " + RutshnayaSignalizatsiya.KonfShleifa.KIZVShS);
//             }
//             else if(iKIZVShS2.value == ""){
//                 return;
//             }
//             else
//                 {
//                     iKIZVShS2.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//                 }
//             }
//             else
//                 iKIZVShS2.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
            
//             if(iKIZVShS2.value == "") RutshnayaSignalizatsiya.KonfShleifa.KIZVShS = 0;
//         });

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
                handlerArr[i][8].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                console.log(i + " - ЗОНАШСR: " + dataToSave[i].ZONAShS);
            }
            else if(handlerArr[i][8].value == ""){
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

//     iZONAShS2.onkeypress = (e)=>{
//         e = e || event;
//        if (e.ctrlKey || e.altKey || e.metaKey) return;
//        var chr = getChar(e);
//        console.log("Char pressed: " + chr);
//        if(chr == ',' || chr == '.')
//        {   
//            // iKShS.value.replace(/[\,|\.]+/g,'');
//            e.preventDefault();
//            return;
//        }
//        if(chr == null) return;
    
//        if (chr < '0' || chr > '9') {
//            return false;
//        }
//     };
    
//     iZONAShS2.addEventListener('focus', ()=>{
//         iZONAShS2.style.boxShadow = 'none';
//     });
    
//     iZONAShS2.addEventListener('blur', ()=>{
//         if(iZONAShS2.value.search(regEx) == -1){
//         if(parseInt(iZONAShS2.value, 10) >= 1 && parseInt(iZONAShS2.value, 10) <= 255){
//             RutshnayaSignalizatsiya.KonfShleifa.ZONAShS = parseInt(iZONAShS2.value, 10);
//             iZONAShS2.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//             console.log("ЗонаШС: " +  RutshnayaSignalizatsiya.KonfShleifa.ZONAShS);
//         }
//         else if(iZONAShS2.value == ""){
//             return;
//         }
//         else
//             {
//                 iZONAShS2.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//             }
//         }
//         else
//             iZONAShS2.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//     });


//     //iADRShS2
function setAdrShSR(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][9].addEventListener('focus', ()=>{
                handlerArr[i][11].style.boxShadow = 'none';
            });

            handlerArr[i][9].addEventListener('blur', ()=>{
                if(handlerArr[i][9].value == ""){ 
                    handlerArr[i][9].style.boxShadow = 'none';
                    return;
                }
                else if(handlerArr[i][9].value.length <= 20){
                    dataToSave[i].ADRShS = handlerArr[i][9].value;
                    handlerArr[i][9].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                    console.log(i + " АДРШСR: " + dataToSave[i].ADRShS + " L: " + dataToSave[i].ADRShS.length);
                }
                else
                    handlerArr[i][9].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
            });
    }
}

//     iADRShS2.addEventListener('focus', ()=>{
//         iADRShS2.style.boxShadow = 'none';
//     });
    
//     iADRShS2.addEventListener('blur', ()=>{
//         if(iADRShS2.value == ""){ 
//             iADRShS2.style.boxShadow = 'none';
//             return;
//         }
//         else if(iADRShS2.value.length <= 20){
//             RutshnayaSignalizatsiya.KonfShleifa.ADRShS = iADRShS2.value;
//             iADRShS2.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//             console.log("АДРШС: " + RutshnayaSignalizatsiya.KonfShleifa.ADRShS + " L: " + RutshnayaSignalizatsiya.KonfShleifa.ADRShS.length);
//         }
//         else
//             iADRShS2.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//     });

//     //Конфигурация извещателя ТШС="адресный"ЕхШС = "Нет"
//     //ТАИЗВ

//     iTAIZV2.onchange = ()=>{
//         RutshnayaSignalizatsiya.AdrExNet.TAIZV = iTAIZV2.selectedIndex;
//         console.log( RutshnayaSignalizatsiya.AdrExNet.TAIZV);
//     };

//     //ZonaIzv
// iZONAIZV2.onkeypress = (e)=>{
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

// iZONAIZV2.addEventListener('focus', ()=>{
//     iZONAIZV2.style.boxShadow = 'none';
// });

// iZONAIZV2.addEventListener('blur', ()=>{
//     if(iZONAIZV2.value.search(regEx) == -1){
//     if(parseInt(iZONAIZV2.value, 10) >= 1 && parseInt(iZONAIZV2.value, 10) <= 255){
//         RutshnayaSignalizatsiya.AdrExNet.ZONAIZV = parseInt(iZONAIZV2.value, 10);
//         iZONAIZV2.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//         console.log("ЗонаИзв: " + RutshnayaSignalizatsiya.AdrExNet.ZONAIZV);
//     }
//     else if(iZONAIZV2.value == ""){
//         return;
//     }
//     else
//         {
//             iZONAIZV2.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//         }
//     }
//     else
//         iZONAIZV2.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

// // ADRIZV 
// iADRIZV2.addEventListener('focus', ()=>{
//     iADRIZV2.style.boxShadow = 'none';
// });

// iADRIZV2.addEventListener('blur', ()=>{
//     if(iADRIZV2.value == ""){ 
//         iADRIZV2.style.boxShadow = 'none';
//         return;
//     }
//     else if(iADRIZV2.value.length <= 20){
//         RutshnayaSignalizatsiya.AdrExNet.ADRIZV = iADRIZV2.value;
//         iADRIZV2.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//         console.log("АдрИзв: " + RutshnayaSignalizatsiya.AdrExNet.ADRIZV + " L: " + RutshnayaSignalizatsiya.AdrExNet.ADRIZV.length);
//     }
//     else
//         iADRIZV2.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

// //Обработка конф ТШС="Адр" ЕхШС ="да"
// //ТАИЗВ
// iTAIZV2.onchange = ()=>{
//     RutshnayaSignalizatsiya.AdrExDa.TAIZV = iTAIZV2.selectedIndex;
//     console.log( RutshnayaSignalizatsiya.AdrExDa.TAIZV);
// };

// //ZonaIzv
// iZONAIZV2_1.onkeypress = (e)=>{
// e = e || event;
// if (e.ctrlKey || e.altKey || e.metaKey) return;
// var chr = getChar(e);
// console.log("Char pressed: " + chr);
// if(chr == ',' || chr == '.')
// {   
//    // iKShS.value.replace(/[\,|\.]+/g,'');
//    e.preventDefault();
//    return;
// }
// if(chr == null) return;

// if (chr < '0' || chr > '9') {
//    return false;
// }
// };

// iZONAIZV2_1.addEventListener('focus', ()=>{
// iZONAIZV2_1.style.boxShadow = 'none';
// });

// iZONAIZV2_1.addEventListener('blur', ()=>{
// if(iZONAIZV2_1.value.search(regEx) == -1){
// if(parseInt(iZONAIZV2_1.value, 10) >= 1 && parseInt(iZONAIZV2_1.value, 10) <= 255){
//     RutshnayaSignalizatsiya.AdrExDa.ZONAIZV = parseInt(iZONAIZV2_1.value, 10);
//     iZONAIZV2_1.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//     console.log("ЗонаИзв: " + RutshnayaSignalizatsiya.AdrExDa.ZONAIZV);
// }
// else if(iZONAIZV2_1.value == ""){
//     return;
// }
// else
//     {
//         iZONAIZV2_1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//     }
// }
// else
//     iZONAIZV2_1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

// // ADRIZV 
// iADRIZV2_1.addEventListener('focus', ()=>{
// iADRIZV2_1.style.boxShadow = 'none';
// });

// iADRIZV2_1.addEventListener('blur', ()=>{
// if(iADRIZV2_1.value == ""){ 
//     iADRIZV2_1.style.boxShadow = 'none';
//     return;
// }
// else if(iADRIZV2_1.value.length <= 20){
//     RutshnayaSignalizatsiya.AdrExDa.ADRIZV = iADRIZV2_1.value;
//     iADRIZV2_1.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//     console.log("АдрИзв: " + RutshnayaSignalizatsiya.AdrExDa.ADRIZV + " L: " + RutshnayaSignalizatsiya.AdrExDa.ADRIZV.length);
// }
// else
//     iADRIZV2_1.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

// //Конфигурация извещателя при ТШС="Безадресный"
// //iTIZV2
function setTIZVautoR(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][11].addEventListener('focus', ()=>{
            handlerArr[i][11].style.boxShadow = 'none';
        });

        handlerArr[i][11].addEventListener('blur', ()=>{
            if(handlerArr[i][11].value == ""){ 
                handlerArr[i][11].style.boxShadow = 'none';
                return;
            }
            else if(handlerArr[i][11].value.length <= 20){
                dataToSave[i].izveshateli.KonfIzvBezAdr.TIZV = handlerArr[i][11].value;
                //добавляем введённую инфу в массив
                addItemsDouble(handlerArr[i][12], i, handlerArr);
                // if(enteredVals.indexOf(iTIZV1.value) == -1){ 
                //     enteredVals.push(iTIZV1.value);
                //     let addToList = new addInfoToList(enteredVals);
                //     addToList.addItems(enteredItems);
                // }
                handlerArr[i][11].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                console.log("TIZVR: " + dataToSave[i].izveshateli.KonfIzvBezAdr.TIZV + " L: " + dataToSave[i].izveshateli.KonfIzvBezAdr.TIZV.length);
            }
            else
                handlerArr[i][11].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
        });
        
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
                handlerArr[i][13].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                console.log("IOIZVR: " + dataToSave[i].izveshateli.KonfIzvBezAdr.IOIZV);
            }
            else if(handlerArr[i][13].value == ""){
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



// iIOIZV2.onkeypress = (e)=>{
//     e = e || event;
//    if (e.ctrlKey || e.altKey || e.metaKey) return;
//    var chr = getChar(e);
//    console.log("Char pressed: " + chr);
//    if(chr == ',' || chr == '.')
//    {   
//        let count = 0, pos = -1;
//        if(chr == ',' || chr == '.'){
//             if(iIOIZV2.value.indexOf('.') == -1)
//             {
//                 while((pos = iIOIZV2.value.indexOf(',', pos + 1 )) != -1){
//                     count++;
//                 }
//                 if(count >= 1) {e.preventDefault(); count = 0; return;}
//                 else { count = 0;  }
//             }
//             else
//             {
//                 while((pos = iIOIZV2.value.indexOf('.', pos + 1 )) != -1){
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

// iIOIZV2.addEventListener('focus', ()=>{
//     iIOIZV2.style.boxShadow = 'none';
// });

// iIOIZV2.addEventListener('blur', ()=>{
//     if(iIOIZV2.value.indexOf(',')== -1 && iIOIZV2.value.indexOf('.')== -1)
//         iIOIZV2.value += ',0';
//     if(iIOIZV2.value[iIOIZV2.value.length - 1] == '.' || iIOIZV2.value[iIOIZV2.value.length - 1] == ',')
//         iIOIZV2.value += '0';

//     if(iIOIZV2.value.search(regExBroken) != -1){
    
//     if(iIOIZV2.value.indexOf(',')!= -1) iIOIZV2.value = iIOIZV2.value.replace(/\,/, '.');

//     if(parseFloat(iIOIZV2.value) >= 0 && parseFloat(iIOIZV2.value) <= 32){
//         RutshnayaSignalizatsiya.KonfIzvBezAdr.IOIZV = parseFloat(iIOIZV2.value);
//         iIOIZV2.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//         console.log("IOIZV: " + RutshnayaSignalizatsiya.KonfIzvBezAdr.IOIZV);
//     }
//     else if(iIOIZV2.value == ""){
//         return;
//     }
//     else
//         {
//             iIOIZV2.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//         }
//     }
//     else
//         iIOIZV2.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

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
                handlerArr[i][14].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                console.log("IPIZVR: " +  dataToSave[i].izveshateli.KonfIzvBezAdr.IPIZV);
            }
            else if(handlerArr[i][14].value == ""){
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



// iIPIZV2.onkeypress = (e)=>{
//     e = e || event;
//    if (e.ctrlKey || e.altKey || e.metaKey) return;
//    var chr = getChar(e);
//    console.log("Char pressed: " + chr);
//    if(chr == ',' || chr == '.')
//    {   
//        let count = 0, pos = -1;
//        if(chr == ',' || chr == '.'){
//             if(iIPIZV2.value.indexOf('.') == -1)
//             {
//                 while((pos = iIPIZV2.value.indexOf(',', pos + 1 )) != -1){
//                     count++;
//                 }
//                 if(count >= 1) {e.preventDefault(); count = 0; return;}
//                 else { count = 0;  }
//             }
//             else
//             {
//                 while((pos = iIPIZV2.value.indexOf('.', pos + 1 )) != -1){
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

// iIPIZV2.addEventListener('focus', ()=>{
//     iIPIZV2.style.boxShadow = 'none';
// });

// iIPIZV2.addEventListener('blur', ()=>{
//     if(iIPIZV2.value.indexOf(',')== -1 && iIPIZV2.value.indexOf('.')== -1)
//          iIPIZV2.value += ',0';
//     if(iIPIZV2.value[iIPIZV2.value.length - 1] == '.' || iIPIZV2.value[iIPIZV2.value.length - 1] == ',')
//          iIPIZV2.value += '0';

//     if(iIPIZV2.value.search(regExBroken) != -1){
    
//         if(iIPIZV2.value.indexOf(',')!= -1) iIPIZV2.value = iIPIZV2.value.replace(/\,/, '.');

//     if(parseFloat(iIPIZV2.value) >= 0 && parseFloat(iIPIZV2.value) <= 32){
//         RutshnayaSignalizatsiya.KonfIzvBezAdr.IPIZV = parseFloat(iIPIZV2.value);
//         iIPIZV2.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//         console.log( "IPIZV: " + RutshnayaSignalizatsiya.KonfIzvBezAdr.IPIZV);
//     }
//     else if(iIPIZV2.value == ""){
//         return;
//     }
//     else
//         {
//             iIPIZV2.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//         }
//     }
//     else
//         iIPIZV2.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });


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
//         ADRShPT = document.getElementById('ADRShPT'),
//         IPShPT = document.getElementById('IPShPT'),
//         ExShPT = document.getElementById('ExShPT'),
//         TBIZShPT = document.getElementById('TBIZShPT'),
//         TBIZShPT_Select = document.getElementById('TBIZShPT_Select');

//         TBIZShPT.style.display = 'none';
//         TBIZShPT_Select.style.display = 'none';

const lineLoopBtnsUpr = document.getElementById('lineLoopBtnsUpr'),
    lineLoopPrevUpr = document.getElementById('lineLoopPrevUpr'),
    lineLoopPosUpr = document.getElementById('lineLoopPosUpr'),
    lastPosUpr = document.getElementById('lastPosUpr'),
    lineLoopNextUpr = document.getElementById('lineLoopNextUpr');

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
       console.log(UpravleniePojaroTusheniem.KShPT);
   }
   else if(KShPT.value == ""){
       UpravleniePojaroTusheniem.KShPT= 0;
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
       console.log(UpravleniePojaroTusheniem.KMIShPT);
   }
   else if(KMIShPT.value == ""){
       UpravleniePojaroTusheniem.KMIShPT= 0;
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
       console.log(UpravleniePojaroTusheniem.REZShPT);
   }
   else if(REZShPT.value == ""){
       UpravleniePojaroTusheniem.REZShPT= 0;
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
       console.log(UpravleniePojaroTusheniem.ZonaPojaroTushenia.ZONAShPT);
   }
   else if(ZONAShPT.value == ""){
       UpravleniePojaroTusheniem.ZonaPojaroTushenia.ZONAShPT= 0;
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
        ADRZONYPT.style.boxShadow = 'none';
        return;
    }
    else if(ADRZONYPT.value.length <= 20){
        UpravleniePojaroTusheniem.ZonaPojaroTushenia.ADRZONYPT = ADRZONYPT.value;
        ADRZONYPT.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
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
       console.log("KShPTZONY: " + UpravleniePojaroTusheniem.ZonaPojaroTushenia.KShPTZONY);
   }
   else if(KShPTZONY.value == ""){
       UpravleniePojaroTusheniem.ZonaPojaroTushenia.KShPTZONY= 0;
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
       console.log("KDDZONY: " + UpravleniePojaroTusheniem.ZonaPojaroTushenia.KDDZONY);
   }
   else if(KDDZONY.value == ""){
       UpravleniePojaroTusheniem.ZonaPojaroTushenia.KDDZONY= 0;
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
       console.log("KBDUZONY: " + UpravleniePojaroTusheniem.ZonaPojaroTushenia.KBDUZONY);
   }
   else if(KBDUZONY.value == ""){
       UpravleniePojaroTusheniem.ZonaPojaroTushenia.KBDUZONY= 0;
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
       console.log("KExBDUZONY: " +UpravleniePojaroTusheniem.ZonaPojaroTushenia.KExBDUZONY);
   }
   else if(KExBDUZONY.value == ""){
       UpravleniePojaroTusheniem.ZonaPojaroTushenia.KExBDUZONY= 0;
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
       console.log("KExLSBDU: " + UpravleniePojaroTusheniem.ZonaPojaroTushenia.KExLSBDU);
   }
   else if(KExLSBDU.value == ""){
       UpravleniePojaroTusheniem.ZonaPojaroTushenia.KExLSBDU= 0;
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

sbtForm4.addEventListener('click', (e)=>{
    e.preventDefault();
    if(UpravleniePojaroTusheniem.KShPT ){
            alert('Сконфигурировано!');
            lineLoopBtnsUpr.style.display = 'block';
            lineLoopsUpr.length = UpravleniePojaroTusheniem.KShPT;
            for (let i = 0; i < lineLoopsUpr.length; i++) {
                lineLoopsUpr[i] = UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia;
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
                    lineLoopsDataUpr[i] = UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia;
                    dynamicEventHandlersUpr[i][5].style.display = 'none';
                }
             }

                //lineLoopConf = document.getElementById('lineLoopKonf');
                setAdrShPT(dynamicEventHandlersUpr, lineLoopsUpr.length, lineLoopsDataUpr);
                setIPShPT(dynamicEventHandlersUpr, lineLoopsUpr.length, lineLoopsDataUpr);
                setExShPT(dynamicEventHandlersUpr, lineLoopsUpr.length, lineLoopsDataUpr);
                setTBIZShPT(dynamicEventHandlersUpr, lineLoopsUpr.length, lineLoopsDataUpr);   
                //setCheckboxUpr(dynamicEventHandlersUpr, lineLoopsUpr.length, lineLoopsDataUpr);

                
        }
    else
        alert('Конфигурация не завершена! Пропущены данные.');
});
// //ADRShPT
function setAdrShPT(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][0].addEventListener('focus', ()=>{
                handlerArr[i][0].style.boxShadow = 'none';
            });

            handlerArr[i][0].addEventListener('blur', ()=>{
                if(handlerArr[i][0].value == ""){ 
                    handlerArr[i][0].style.boxShadow = 'none';
                    return;
                }
                else if(handlerArr[i][0].value.length <= 20){
                    dataToSave[i].ADRShPT = handlerArr[i][0].value;
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
// ADRShPT.addEventListener('focus', ()=>{
//     ADRShPT.style.boxShadow = 'none';
//     });
    
//     ADRShPT.addEventListener('blur', ()=>{
//     if(ADRShPT.value == ""){
//         ADRShPT.style.boxShadow = 'none';
//         return;
//     }
//     else if(ADRShPT.value.length <= 20){
//         UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia.ADRShPT = ADRShPT.value;
//         ADRShPT.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//         console.log("АдрИзв: " + UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia.ADRShPT + " L: " + UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia.ADRShPT);
//     }
//     else
//         ADRShPT.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

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
// IPShPT.onkeypress = (e)=>{
//     e = e || event;
//    if (e.ctrlKey || e.altKey || e.metaKey) return;
//    var chr = getChar(e);
//    console.log("Char pressed: " + chr);
//    if(chr == ',' || chr == '.')
//    {   
//        let count = 0, pos = -1;
//        if(chr == ',' || chr == '.'){
//             if(IPShPT.value.indexOf('.') == -1)
//             {
//                 while((pos = IPShPT.value.indexOf(',', pos + 1 )) != -1){
//                     count++;
//                 }
//                 if(count >= 1) {e.preventDefault(); count = 0; return;}
//                 else { count = 0;  }
//             }
//             else
//             {
//                 while((pos = IPShPT.value.indexOf('.', pos + 1 )) != -1){
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

// IPShPT.addEventListener('focus', ()=>{
//     IPShPT.style.boxShadow = 'none';
// });

// IPShPT.addEventListener('blur', ()=>{
//     if(IPShPT.value.indexOf(',')== -1 && IPShPT.value.indexOf('.')== -1)
//         IPShPT.value += ',0';
//     if(IPShPT.value[IPShPT.value.length - 1] == '.' || IPShPT.value[IPShPT.value.length - 1] == ',')
//         IPShPT.value += '0';

//     if(IPShPT.value.search(regExBroken) != -1){
        
//         if(IPShPT.value.indexOf(',')!= -1) IPShPT.value = IPShPT.value.replace(/\,/, '.');

//         if(parseFloat(IPShPT.value) >= 0 && parseFloat(IPShPT.value) <= 3){
//             UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia.IPShPT = parseFloat(IPShPT.value);
//             IPShPT.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//             console.log("IOIZV: " + RutshnayaSignalizatsiya.KonfIzvBezAdr.IOIZV);
//         }
//         else if(IPShPT.value == ""){
//             return;
//         }
//         else
//             {
//                 IPShPT.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//             }
//     }
//     else
//         IPShPT.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

// //ExShPT
function setExShPT(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
            handlerArr[i][2].addEventListener('click', ()=>{
                    if(handlerArr[i][2].checked)
                    { 
                        dataToSave[i].ExShPT = true;
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
                        handlerArr[i][3].style.display = 'none';
                        while(handlerArr[i][5].firstChild)
                            handlerArr[i][5].removeChild(handlerArr[i][5].firstChild);
                        handlerArr[i][5].style.display = 'none';
                    }
            }); 
    }
}
// ExShPT.addEventListener('click', ()=>{
//     if(ExShPT.checked)
//     { 
//         UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia.ExShPT = true;
//         TBIZShPT.style.display = 'block';    
//         while(TBIZShPT_Select.firstChild)
//             TBIZShPT_Select.removeChild(TBIZShPT_Select.firstChild);
        
//         let oOption = document.createElement("option");
//         oOption.appendChild(document.createTextNode("Выберите тип:"));
//         oOption.setAttribute("value", "");
//         TBIZShPT_Select.appendChild(oOption);   
       
//         for (let i = 0; i < IntermediateModules.length; i++) {
//             for(let prop in IntermediateModules[i]){
//                 if(IntermediateModules[i][prop] == "BIZ"){
//                     oOption = document.createElement("option")
//                     oOption.appendChild(document.createTextNode(IntermediateModules[i].name));
//                     oOption.setAttribute("value", "");
//                     TBIZShPT_Select.appendChild(oOption);   
//                 }
//             }        
//         }
//         TBIZShPT_Select.style.display = 'block';    
//     }
//     else  {
//         UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia.ExShPT = false;
//         TBIZShPT.style.display = 'none';
//         while(TBIZShPT_Select.firstChild)
//             TBIZShPT_Select.removeChild(TBIZShPT_Select.firstChild);
//         TBIZShPT_Select.style.display = 'none';
//     }
// });

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
                //handlerArr[i][5].style.display = 'block';
                return;
            }
            else if(handlerArr[i][4].value.length <= 20){
                dataToSave[i].TBIZShPT = handlerArr[i][4].value;
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

        // handlerArr[i][4].onchange = ()=>{
        //     if(TBIZShPT_Select.selectedIndex != 0){
        //         UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia.TBIZShPT = TBIZShPT_Select.options[TBIZShPT_Select.selectedIndex].text;
        //     }
        // };
    }   
}
// TBIZShPT.addEventListener('focus', ()=>{
//     TBIZShPT.style.boxShadow = 'none';
//     });
    
//     TBIZShPT.addEventListener('blur', (e)=>{
//     if(TBIZShPT.value == ""){
//         let flag = confirm("Взрывозащита типа \"d\"");
//         if(flag)
//         {
//             UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia.TBIZShPT  = "Взрывозащита типа \"d\"";
//             TBIZShPT.value = "Взрывозащита типа \"d\"";
//             console.log("ТШСБИЗ: " + UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia.TBIZShPT);
//             //TBIZShPT.style.display = 'none';

//             TBIZShPT_Select.style.display = 'none';
//             e.preventDefault();
//             list = false
//             return;
//         }
//         TBIZShPT.style.boxShadow = 'none';
//         TBIZShPT_Select.style.display = 'block';
//         return;
//     }
//     else if(TBIZShPT.value.length <= 20){
//         UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia.TBIZShPT = TBIZShPT.value;
//         TBIZShPT.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//         console.log("АдрИзв: " + UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia.TBIZShPT + " L: " + UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia.TBIZShPT);
//     }
//     else
//         TBIZShPT.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

// TBIZShPT_Select.onchange = ()=>{
//     if(TBIZShPT_Select.selectedIndex != 0){
//         UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia.TBIZShPT = TBIZShPT_Select.options[TBIZShPT_Select.selectedIndex].text;
//     }
// };

// function setCheckboxUpr(handlerArr, size, dataToSave){
//     for (let i = 0; i < size; i++) {
//         handlerArr[i][6].addEventListener('click', (e) =>{
//             e.preventDefault();
//             if( dataToSave[i].ADRShPT != '' &&
//                 dataToSave[i].IPShPt >= 1 ){
//                     handlerArr[i][6].checked = true;
//             }
//             else    
//                 handlerArr[i][6].checked = false;
//         });
//     }
// }



// //-----------------------------Подсистема управления оповещением-----------------------------//
const KZONOP = document.getElementById('KZONOP'),
        REZShO = document.getElementById('REZShO');
//         ZONAShOP = document.getElementById('ZONAShOP'),
//         ADRShOP = document.getElementById('ADRShOP'),
//         KShOPZONY = document.getElementById('KShOPZONY'),
//         KOPSh = document.getElementById('KOPSh'),
//         IPOPSh = document.getElementById('IPOPSh'),
//         ExOPSh = document.getElementById('ExOPSh'),
//         TBIZOPSh = document.getElementById('TBIZOPSh'),
//         TBIZOPSh_Select = document.getElementById('TBIZOPSh_Select'),
//         ADROP = document.getElementById('ADROP'),
//         IPOP = document.getElementById('IPOP');

//         TBIZOPSh.style.display = 'none';
const   sbtForm5 = document.getElementById('sbtForm5'),
        lineLoopBtnsUprOp = document.getElementById('lineLoopBtnsUprOp'),
        lineLoopPrevUprOp = document.getElementById('lineLoopPrevUprOp'),
        lineLoopPosUprOp = document.getElementById('lineLoopPosUprOp'),
        lastPosUprOp = document.getElementById('lastPosUprOp'),
        lineLoopNextUprOp = document.getElementById('lineLoopNextUprOp');

lineLoopPrevUprOp.addEventListener('click', ()=>{
            if(prevIndexUprOp < 1) prevIndexUprOp = lineLoopsUprOp.length;
            nextIndexUprOp = curPosUprOp;
            curPosUprOp = prevIndexUprOp;
            prevIndexUprOp--;
            if(prevIndexUprOp < 1) prevIndexUprOp = lineLoopsUprOp.length;
            lineLoopPosUprOp.value = curPosUprOp;
            hideZonaOp(lineLoopsUprOp.length);
            showLineLoopsRuchn('_ZonaOpoveshenia_' + (curPosUprOp - 1));
        
    
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
       UpravlenieOpovesheniem.KZONOP = parseInt(KZONOP.value, 10);
       KZONOP.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       console.log("KZONOP: "+ UpravlenieOpovesheniem.KZONOP);
   }
   else if(KZONOP.value == ""){
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
       REZShO.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
       console.log("REZShO: "+ UpravlenieOpovesheniem.REZShO);
   }
   else if(REZShO.value == ""){
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

sbtForm5.addEventListener('click', (e) =>{
    e.preventDefault();
    if(UpravlenieOpovesheniem.KZONOP ){
        alert('Сконфигурировано!');
        lineLoopBtnsUprOp.style.display = 'block';
        lineLoopsUprOp.length = UpravlenieOpovesheniem.KZONOP ;
        for (let i = 0; i < lineLoopsUpr.length; i++) {
            lineLoopsUprOp[i] = UpravlenieOpovesheniem.ZonaOpoveshenia;
        }
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
                lineLoopsDataUprOp[i] = UpravlenieOpovesheniem.ZonaOpoveshenia;
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
                    handlerArr[i][0].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                    console.log(i + "-ZONAShOP: " + dataToSave[i].ZONAShOP);

                    // for (let i = 0; i < AutoSignalizatsiya.KShS; i++) {
                    //     for (let j = 0; j < array.length; j++) {
                    //         _izveshateli[i] = [];                            
                    //     }                       
                        
                    // }

                }
                else if( handlerArr[i][0].value == ""){
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
// ZONAShOP.onkeypress = (e)=>{
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

// ZONAShOP.addEventListener('focus', ()=>{
//     ZONAShOP.style.boxShadow = 'none';
// });

// ZONAShOP.addEventListener('blur', ()=>{
//    if(ZONAShOP.value.search(regEx) == -1){
//    if(parseInt(ZONAShOP.value, 10) >= 0 && parseInt(ZONAShOP.value, 10) <= 100){
//        UpravlenieOpovesheniem.ZonaOpoveshenia.ZONAShOP = parseInt(ZONAShOP.value, 10);
//        ZONAShOP.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//        console.log(UpravlenieOpovesheniem.ZonaOpoveshenia.ZONAShOP);
//    }
//    else if(ZONAShOP.value == ""){
//        UpravlenieOpovesheniem.ZonaOpoveshenia.ZONAShOP= 0;
//        console.log( UpravlenieOpovesheniem.ZonaOpoveshenia.ZONAShOP);
//        return;
//    }
//    else
//        {
//         ZONAShOP.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//        }
//    }
//    else
//     ZONAShOP.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';  
// });

// //ADRShOP

function setADRShOP(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][1].addEventListener('focus', ()=>{
                handlerArr[i][1].style.boxShadow = 'none';
            });

            handlerArr[i][1].addEventListener('blur', ()=>{
                if(handlerArr[i][1].value == ""){ 
                    handlerArr[i][1].style.boxShadow = 'none';
                    return;
                }
                else if(handlerArr[i][1].value.length <= 20){
                    dataToSave[i].ADRShOP = handlerArr[i][1].value;
                    handlerArr[i][1].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                    console.log(i + " ADRShOP: " + dataToSave[i].ADRShOP + " L: " + dataToSave[i].ADRShOP.length);
                }
                else
                    handlerArr[i][1].style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
            });
    }
}
// ADRShOP.addEventListener('focus', ()=>{
//     ADRShOP.style.boxShadow = 'none';
//     });
    
//     ADRShOP.addEventListener('blur', ()=>{
//     if(ADRShOP.value == ""){
//         ADRShOP.style.boxShadow = 'none';
//         return;
//     }
//     else if(ADRShOP.value.length <= 20){
//         UpravlenieOpovesheniem.ZonaOpoveshenia.ADRShOP = ADRShOP.value;
//         ADRShOP.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//         console.log("АдрИзв: " + UpravlenieOpovesheniem.ZonaOpoveshenia.ADRShOP + " L: " + UpravlenieOpovesheniem.ZonaOpoveshenia.ADRShOP);
//     }
//     else
//         ADRShOP.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

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
                    console.log(i + "-KShOPZONY: " + dataToSave[i].KShOPZONY);

                    // for (let i = 0; i < AutoSignalizatsiya.KShS; i++) {
                    //     for (let j = 0; j < array.length; j++) {
                    //         _izveshateli[i] = [];                            
                    //     }                       
                        
                    // }

                }
                else if( handlerArr[i][2].value == ""){
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
// KShOPZONY.onkeypress = (e)=>{
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

// KShOPZONY.addEventListener('focus', ()=>{
//     KShOPZONY.style.boxShadow = 'none';
// });

// KShOPZONY.addEventListener('blur', ()=>{
//    if(KShOPZONY.value.search(regEx) == -1){
//    if(parseInt(KShOPZONY.value, 10) >= 1 && parseInt(KShOPZONY.value, 10) <= 480){
//        UpravlenieOpovesheniem.ZonaOpoveshenia.KShOPZONY = parseInt(KShOPZONY.value, 10);
//        KShOPZONY.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//        console.log(UpravlenieOpovesheniem.ZonaOpoveshenia.KShOPZONY);
//    }
//    else if(KShOPZONY.value == ""){
//        UpravlenieOpovesheniem.ZonaOpoveshenia.KShOPZONY= 0;
//        console.log( UpravlenieOpovesheniem.ZonaOpoveshenia.KShOPZONY);
//        return;
//    }
//    else
//        {
//         KShOPZONY.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//        }
//    }
//    else
//     KShOPZONY.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';  
// });

// переменные для перемещения по извещателям
let curPosShleifOp = [], nextPosShleifOp = [], prevPosShleifOp = [], PositionShleifOp = [];
let BtnsIDShleifOp = [], LasPosShleifOp = [], LastSpanShleifOp = [], BtnsNextShleifOp = [], BtnsPrevShleifOp = [],
_ShleifOp = [], dynamicEvHandlerShleifOp;

function setDlgZonaOp(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][3].addEventListener('click', (e) => {
            e.preventDefault();
            if(dataToSave[i].KShOPZONY >= 1){

                createShleifOp(i,dataToSave[i].KShOPZONY);

                for (let j = 0; j < dataToSave[i].KShOPZONY; j++) {
                    curPosShleifOp[i] = [];
                    nextPosShleifOp[i] = [];
                    prevPosShleifOp[i] = [];
                    
                }
                dynamicEvHandlerShleifOp = genIzvHandlers(lineLoopsUprOp.length, lineLoopsDataUprOp[i].KShOPZONY, 10);
                _ShleifOp = genIzvHandlers(lineLoopsUprOp.length, lineLoopsDataUprOp[i].KShOPZONY, 4);

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

                handlePrevShleifOp(lineLoopsUprOp.length, dataToSave[curPosUprOp-1].KShOPZONY, LasPosShleifOp, BtnsPrevShleifOp, dynamicEvHandlerShleifOp,
                    dataToSave, curPosShleifOp, nextPosShleifOp, prevPosShleifOp);
                handleNextShleifOp(lineLoopsUprOp.length, dataToSave[curPosUprOp-1].KShOPZONY,  LasPosShleifOp, BtnsNextShleifOp, dynamicEvHandlerShleifOp,
                    dataToSave, curPosShleifOp, nextPosShleifOp, prevPosShleifOp);
                handleOpPos(lineLoopsUprOp.length, dataToSave[curPosUprOp-1].KShOPZONY, LasPosShleifOp,  dynamicEvHandlerShleifOp, dataToSave,
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
                        console.log(j + " КОПШ: " + dataToSave[i][j][0]);
                    }
                    else if(handlerArr[i][j][0].value == ""){
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
// KOPSh.onkeypress = (e)=>{
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

// KOPSh.addEventListener('focus', ()=>{
//     KOPSh.style.boxShadow = 'none';
// });

// KOPSh.addEventListener('blur', ()=>{
//    if(KOPSh.value.search(regEx) == -1){
//    if(parseInt(KOPSh.value, 10) >= 1 && parseInt(KOPSh.value, 10) <= 480){
//        UpravlenieOpovesheniem.ShleifUpravleniaOpovesheniem.KOPSh = parseInt(KOPSh.value, 10);
//        KOPSh.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//        console.log(UpravlenieOpovesheniem.ShleifUpravleniaOpovesheniem.KOPSh);
//    }
//    else if(KOPSh.value == ""){
//        UpravlenieOpovesheniem.ShleifUpravleniaOpovesheniem.KOPSh= 0;
//        console.log( UpravlenieOpovesheniem.ShleifUpravleniaOpovesheniem.KOPSh);
//        return;
//    }
//    else
//        {
//         KOPSh.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//        }
//    }
//    else
//     KOPSh.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';  
// });

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
        
                    if(parseFloat(handlerArr[i][j][1].value) >= 0 && parseFloat(handlerArr[i][j][1].value) <= 3){
                        dataToSave[i][j][1] = parseFloat(handlerArr[i][j][1].value);
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
// IPOPSh.onkeypress = (e)=>{
//     e = e || event;
//    if (e.ctrlKey || e.altKey || e.metaKey) return;
//    var chr = getChar(e);
//    console.log("Char pressed: " + chr);
//    if(chr == ',' || chr == '.')
//    {   
//        let count = 0, pos = -1;
//        if(chr == ',' || chr == '.'){
//             if(IPOPSh.value.indexOf('.') == -1)
//             {
//                 while((pos = IPOPSh.value.indexOf(',', pos + 1 )) != -1){
//                     count++;
//                 }
//                 if(count >= 1) {e.preventDefault(); count = 0; return;}
//                 else { count = 0;  }
//             }
//             else
//             {
//                 while((pos = IPOPSh.value.indexOf('.', pos + 1 )) != -1){
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

// IPOPSh.addEventListener('focus', ()=>{
//     IPOPSh.style.boxShadow = 'none';
// });

// IPOPSh.addEventListener('blur', ()=>{
//     if(IPOPSh.value.indexOf(',')== -1 && IPOPSh.value.indexOf('.')== -1)
//         IPOPSh.value += ',0';
//     if(IPOPSh.value[IPOPSh.value.length - 1] == '.' || IPOPSh.value[IPOPSh.value.length - 1] == ',')
//         IPOPSh.value += '0';

//     if(IPOPSh.value.search(regExBroken) != -1){
        
//         if(IPOPSh.value.indexOf(',')!= -1) IPOPSh.value = IPOPSh.value.replace(/\,/, '.');

//         if(parseFloat(IPOPSh.value) >= 0 && parseFloat(IPOPSh.value) <= 20){
//             UpravlenieOpovesheniem.ShleifUpravleniaOpovesheniem.IPOPSh = parseFloat(IPOPSh.value);
//             IPOPSh.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//             console.log("IPOPSh: " + UpravlenieOpovesheniem.ShleifUpravleniaOpovesheniem.IPOPSh);
//         }
//         else if(IPOPSh.value == ""){
//             return;
//         }
//         else
//             {
//                 IPOPSh.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
//             }
//     }
//     else
//         IPOPSh.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

// //ExOPSh
function setExOPSh(handlerArr, size, KShOPZONY, dataToSave){
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < KShOPZONY; j++) {
            if(handlerArr[i][j][2]){
                handlerArr[i][j][2].addEventListener('click', ()=>{
                    if(handlerArr[i][j][2].checked)
                    { 
                        dataToSave[i][j][2] = true;
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
// ExOPSh.addEventListener('click', ()=>{
//     if(ExOPSh.checked)
//     { 
//         UpravlenieOpovesheniem.ShleifUpravleniaOpovesheniem.ExOPSh = true;
//         TBIZOPSh.style.display = 'block';    
//         while(TBIZOPSh_Select.firstChild)
//             TBIZOPSh_Select.removeChild(TBIZOPSh_Select.firstChild);
        
//         let oOption = document.createElement("option");
//         oOption.appendChild(document.createTextNode("Выберите тип:"));
//         oOption.setAttribute("value", "");
//         TBIZOPSh_Select.appendChild(oOption);   
       
//         for (let i = 0; i < IntermediateModules.length; i++) {
//             for(let prop in IntermediateModules[i]){
//                 if(IntermediateModules[i][prop] == "O"){
//                     oOption = document.createElement("option")
//                     oOption.appendChild(document.createTextNode(IntermediateModules[i].name));
//                     oOption.setAttribute("value", "");
//                     TBIZOPSh_Select.appendChild(oOption);   
//                 }
//             }        
//         }
//         TBIZOPSh_Select.style.display = 'block';    
//     }
//     else  {
//         UpravlenieOpovesheniem.ShleifUpravleniaOpovesheniem.ExOPSh = false;
//         TBIZOPSh.style.display = 'none';
//         while(TBIZOPSh_Select.firstChild)
//             TBIZOPSh_Select.removeChild(TBIZOPSh_Select.firstChild);
//         TBIZOPSh_Select.style.display = 'none';
//     }
// });

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
                            console.log("TBIZOPSh: " + dataToSave[i][j][4]);
                            //TBIZOPSh.style.display = 'none';

                            //TBIZOPSh_Select.style.display = 'none';
                            e.preventDefault();
                            return;
                        }
                        //handlerArr[i][j][4].style.boxShadow = 'none';
                        //TBIZOPSh_Select.style.display = 'block';
                        return;
                    }
                    else if(handlerArr[i][j][4].value.length <= 20){
                        dataToSave[i][j][4] = handlerArr[i][j][4].value;
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
// TBIZOPSh.addEventListener('focus', ()=>{
//     TBIZOPSh.style.boxShadow = 'none';
//     });
    
//     TBIZOPSh.addEventListener('blur', (e)=>{
//     if(TBIZOPSh.value == ""){
//         let flag = confirm("Взрывозащита типа \"d\"");
//         if(flag)
//         {
//             UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia.TBIZOPSh  = "Взрывозащита типа \"d\"";
//             TBIZOPSh.value = "Взрывозащита типа \"d\"";
//             console.log("ТШСБИЗ: " + UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia.TBIZOPSh);
//             //TBIZOPSh.style.display = 'none';

//             TBIZOPSh_Select.style.display = 'none';
//             e.preventDefault();
//             list = false
//             return;
//         }
//         TBIZOPSh.style.boxShadow = 'none';
//         TBIZOPSh_Select.style.display = 'block';
//         return;
//     }
//     else if(TBIZOPSh.value.length <= 20){
//         UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia.TBIZOPSh = TBIZOPSh.value;
//         TBIZOPSh.style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
//         console.log("АдрИзв: " + UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia.TBIZOPSh + " L: " + UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia.TBIZOPSh);
//     }
//     else
//         TBIZOPSh.style.boxShadow = ' 0 0 10px rgba(255,0,0,0.5)';
// });

// TBIZOPSh_Select.onchange = ()=>{
//     if(TBIZOPSh_Select.selectedIndex != 0){
//         UpravleniePojaroTusheniem.ShleifUpravleniaPojaroTushenia.TBIZOPSh = TBIZOPSh_Select.options[TBIZOPSh_Select.selectedIndex].text;
//     }
// };


function setDlgOpoveshatel(){

}

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
                            handlerArr[i][20].style.display = 'none';
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
                            dataToSave[i].TShS = handlerArr[i][0].selectedIndex;
                            //console.log(i + " ТШС: " + dataToSave[i].TShS);
                
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
                            handlerArr[i][20].style.display = 'block';
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
                            handlerArr[i][20].style.display = 'block';
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
                            dataToSave[i].TShSBIZ = "Взрывозащита типа \"d\"";
                            handlerArr[i][5].value = "Взрывозащита типа \"d\"";
                            console.log("ТШСБИЗ: " + dataToSave[i].TShSBIZ);
                            handlerArr[i][7].style.display = 'none';
                            e.preventDefault();
                            
                            return;
                        }
                        //andlerArr[i][7].style.display = 'block';
                    }
                    else
                    {
                        dataToSave[i].TShSBIZ = handlerArr[i][5].value;
                        console.log("ТШСБИЗ: " + dataToSave[i].TShSBIZ);
                    }
                }
                else{
                    if(handlerArr[i][5].value == ""){
                        return;
                    }
                    else{
                    dataToSave[i].TShSBIZ = handlerArr[i][5].value;   
                    
                    console.log("ТШСБИЗ: " + dataToSave[i].TShSBIZ);
                    }
                }
            }
        });
        
    }
}

//Тип искробаръера список
function setAdrBiz(handlerArr, size, dataToSave){
    for (let i = 0; i < size; i++) {
        handlerArr[i][7].onchange = ()=>{
            if(handlerArr[i][7].selectedIndex == 0)
                return;

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
                    handlerArr[i][8].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                    console.log(i + "-КІЗВШС: " + dataToSave[i].KIZVShS);

                    // for (let i = 0; i < AutoSignalizatsiya.KShS; i++) {
                    //     for (let j = 0; j < array.length; j++) {
                    //         _izveshateli[i] = [];                            
                    //     }                       
                        
                    // }

                }
                else if( handlerArr[i][8].value == ""){
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
                console.log(i + " - ЗОНАШС: " + dataToSave[i].ZONAShS);
            }
            else if(handlerArr[i][10].value == ""){
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
                    return;
                }
                else if(handlerArr[i][11].value.length <= 20){
                    dataToSave[i].ADRShS = handlerArr[i][11].value;
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
                // createOption(handlerArr[i][14], "ИАР");
                // createOption(handlerArr[i][18], "ИАР-01");
        }
        else  {
            dataToSave[i].RRIShS = false;

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
                        console.log(i + " ЗонаИзв: " + dataToSave[i][j][1]);
                    }
                    else if(handlerArr[i][j][2].value == ""){
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
                        handlerArr[i][j][3].style.boxShadow = 'none';
                        return;
                    }
                    else if(handlerArr[i][j][3].value.length <= 20){
                        dataToSave[i][j][2] = handlerArr[i][j][3].value;
                        handlerArr[i][j][3].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
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
                        console.log(i + " ЗонаИзв: " + dataToSave[i][j][4]);
                    }
                    else if(handlerArr[i][j][6].value == ""){
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
                        handlerArr[i][j][7].style.boxShadow = 'none';
                        return;
                    }
                    else if(handlerArr[i][j][7].value.length <= 20){
                        dataToSave[i][j][5] = handlerArr[i][j][7].value;
                        handlerArr[i][j][7].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
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
                handlerArr[i][14].style.boxShadow = 'none';
                return;
            }
            else if(handlerArr[i][14].value.length <= 20){
                dataToSave[i].izveshateli.KonfIzvBezAdr.TIZV = handlerArr[i][14].value;
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
                handlerArr[i][16].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                console.log(  dataToSave[i].izveshateli.KonfIzvBezAdr.IOIZV);
            }
            else if(handlerArr[i][16].value == ""){
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
                handlerArr[i][17].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                console.log(  dataToSave[i].izveshateli.KonfIzvBezAdr.IPIZV);
            }
            else if(handlerArr[i][17].value == ""){
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
                        handlerArr[i][j][9].style.boxShadow = ' 0 0 10px rgba(0,255,0,0.5)';
                        console.log("KMBUSLNK: "+ dataToSave[i][j][6]);
                    }
                    else if(handlerArr[i][j][9].value == ""){
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

// переменные для перемещения по извещателям
let curPosIzv = [], nextPosIzv = [], prevPosIzv = [], izvPosition = [];
let izvBtnsID = [], izvLasPos = [], izvLastSpan = [], izvBtnsNext = [], izvBtnsPrev = [],
_izveshateli = [];

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
                    
                }
                dynamicEvHandlerIZV = genIzvHandlers(lineLoops.length, 32, 10);
                _izveshateli = genIzvHandlers(lineLoops.length, 32, 7);

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

                handlePrevIzv(lineLoops.length, dataToSave[curPos-1].KIZVShS, izvLasPos, izvBtnsPrev, dynamicEvHandlerIZV,
                    dataToSave, curPosIzv, nextPosIzv, prevPosIzv);
                handleNextIzv(lineLoops.length, dataToSave[curPos-1].KIZVShS,  izvLasPos, izvBtnsNext, dynamicEvHandlerIZV,
                    dataToSave, curPosIzv, nextPosIzv, prevPosIzv);
                handleIzvPos(lineLoops.length, dataToSave[curPos-1].KIZVShS, izvLasPos,  dynamicEvHandlerIZV, dataToSave,
                    curPosIzv, nextPosIzv, prevPosIzv);

                setTAIZVadrNet(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli);
                setZonaIzvadrNet(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli);
                setAdrIZVadrNet(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli);
                setTAIZVadrDa(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli);
                setZonaIzvadrDa(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli);
                setAdrIZVadrDa(dynamicEvHandlerIZV, lineLoops.length, dataToSave[i].KIZVShS, _izveshateli);
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
                     for(let i = 0; i < curLine; i++){
                         if( btnPrevHndlr[i]){
                            btnPrevHndlr[i].addEventListener('click', (e)=>{
                                e.preventDefault();
                               // if(prevPosIzv1[i] < 1) prevPosIzv1[i]  = KIZVSHsLength - 1;
                                nextPosIzv1[i] = curPosIzv1[i];
                                curPosIzv1[i] = prevPosIzv1[i];
                                prevPosIzv1[i]--;
                                if(curPosIzv1[i] <= 0) prevPosIzv1[i] = KIZVSHsLength - 1;
                                izvLasPos1[i].value = parseInt(curPosIzv1[i], 10) + 1;
                                
                                hideIzv(dynamicEvHandlerIZV1, i, data);
                                let current = curPosIzv1[i];
                                if(data[i].TShS == 0 && data[i].ExShS == false){
                                    showIzvAdrExNet(dynamicEvHandlerIZV1, i, current);
                                }
                                else if(data[i].TShS == 0 && data[i].ExShS == true){
                                    showIzvAdrExDa(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                                }
                                else{
                                    showIzvConfModbu(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                                }
                            });
                         }
      
                }

}

function handleNextIzv(curLine, KIZVSHsLength, izvLasPos1, 
    btnNextHndlr, dynamicEvHandlerIZV1, data,
    curPosIzv1, nextPosIzv1, prevPosIzv1){

       // let i = curLine;

        for(let i = 0; i < curLine; i++){
            if(btnNextHndlr[i]){
                btnNextHndlr[i].addEventListener('click', (e)=>{
                    e.preventDefault();
                    if(nextPosIzv1[i] > KIZVSHsLength - 1) nextPosIzv1[i] = 0;
                    prevPosIzv1[i] = curPosIzv1[i];
                    curPosIzv1[i] = nextPosIzv1[i];
                    nextPosIzv1[i]++;
                    if(nextPosIzv1[i] > KIZVSHsLength + 1) nextPosIzv1[i] = 0;
                    izvLasPos1[i].value = parseInt(curPosIzv1[i], 10) + 1;
                    
                    hideIzv(dynamicEvHandlerIZV1, i, data);
        
                    if(data[i].TShS == 0 && data[i].ExShS == false){
                        showIzvAdrExNet(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                    }
                    else if(data[i].TShS == 0 && data[i].ExShS == true){
                        showIzvAdrExDa(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                    }
                    else{
                        showIzvConfModbu(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                    }
            
            });
            }
            
    }  
}


function handleIzvPos(curLine, KIZVSHsLength, izvLasPos1, 
     dynamicEvHandlerIZV1, data,
    curPosIzv1, nextPosIzv1, prevPosIzv1){
        
        //let i = curLine;
        for(let i = 0; i < curLine; i++){
            if(izvLasPos1[i]){
                izvLasPos1[i].addEventListener('blur', (e)=>{
                    e.preventDefault();
                    curPosIzv1[i] = parseInt(izvLasPos1[i].value, 10) - 1;
                    if(curPosIzv1[i] + 1 >= KIZVSHsLength){
                        nextPosIzv1[i] = 1;
                        prevPosIzv1[i] = curPosIzv1[i] - 1;
                    }
                    else if(curPosIzv1[i] - 1 < 1){
                        prevPosIzv1[i] = KIZVSHsLength - 1;
                        nextPosIzv1[i] = curPosIzv1[i] + 1;
                    }
                    else{
                        prevPosIzv1[i] = curPosIzv1[i] - 1;
                        nextPosIzv1[i] = curPosIzv1[i] + 1;
                    }
                        hideIzv(dynamicEvHandlerIZV1, i, data);
        
                        if(data[i].TShS == 0 && data[i].ExShS == false){
                            showIzvAdrExNet(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                        }
                        else if(data[i].TShS == 0 && data[i].ExShS == true){
                            showIzvAdrExDa(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                        }
                        else{
                            showIzvConfModbu(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                        }
                });
            }
            
            
        }

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
        let elem, subelem, option, mainDiv, subDiv, div;
        mainDiv = document.getElementById((curPos - 1).toString());

        if(document.getElementById(`izvBtns${lineLoopIndex}`)){
            mainDiv.removeChild(document.getElementById(`izvBtns${lineLoopIndex}`));
        }
            elem = document.createElement('div');
            elem.setAttribute('id', `izvBtns${lineLoopIndex}`);
            elem.setAttribute('class', `izvBtns_`);
                        
            subelem = document.createElement('button');
            subelem.setAttribute('id', `izvBtnsPrev${lineLoopIndex}`);
            subelem.setAttribute('class', `izvBtns-item`);
            subelem.appendChild(document.createTextNode('Пред.'));
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('span');
            subelem.setAttribute('class', 'izvBtns-item');
            subelem.setAttribute('id', `izvSpan${lineLoopIndex}`);
            subelem.appendChild(document.createTextNode('Извещатель №'));
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('input');
            subelem.setAttribute('type', 'number');
            subelem.setAttribute('id', `izvBtnsPos${lineLoopIndex}`);
            subelem.setAttribute('class', 'izvBtns-item');
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('span');
            subelem.setAttribute('id', `izvBtnslastPos${lineLoopIndex}`);
            subelem.setAttribute('class', 'izvBtns-item');
    
            elem.appendChild(subelem);
    
            subelem = document.createElement('button');
            subelem.setAttribute('class', 'izvBtns-item');
            subelem.setAttribute('id', `izvBtnsNext${lineLoopIndex}`);
            subelem.appendChild(document.createTextNode('След.'));
    
            elem.appendChild(subelem);
    
            mainDiv.appendChild(elem);
        
    
            if(document.getElementById(`IZV${lineLoopIndex}`)){
                mainDiv.removeChild(document.getElementById(`IZV${lineLoopIndex}`));
            }
                subDiv = document.createElement('div');
                subDiv.setAttribute('id',`IZV${lineLoopIndex}`);
    
                for (let j = 0; j < qIzv; j++) {
    
    
    
                    //----------------------------------------------
                    
                    div = document.createElement('div');
                    div.setAttribute('id', `AdrExNet${lineLoopIndex}_${j}`)
    
                    // subelem = document.createElement('h3');
                    // subelem.appendChild(document.createTextNode('Конфигурация извещателя при адресном типе шлейфа и при отсутствии взрывозащиты'));
                    // div.appendChild(subelem);
    
                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode('Тип извещателя:'));
                    div.appendChild(subelem);
    
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

                    div.appendChild(subelem);                    
                    
    
                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode('Зона:'));
                    div.appendChild(subelem);
    
                    subelem = document.createElement('input');
                    subelem.setAttribute('type', 'number');
                    subelem.setAttribute('id', `ZONAIZV${lineLoopIndex}_${j}`);
                    subelem.setAttribute('placeholder', `1...255`);
                    div.appendChild(subelem);
    
                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode('Наименование/адрес:'));
                    div.appendChild(subelem);
    
                    
                    subelem = document.createElement('input');
                    subelem.setAttribute('type', 'text');
                    subelem.setAttribute('id', `ADRIZV${lineLoopIndex}_${j}`);
                    subelem.setAttribute('placeholder', `до 20 символов...`);
                    div.appendChild(subelem);
    
                    subDiv.appendChild(div);
    
                    div = document.createElement('div');
                    div.setAttribute('id', `AdrExDa${lineLoopIndex}_${j}`);
    
                    // subelem = document.createElement('h3');
                    // subelem.appendChild(document.createTextNode('Конфигурация извещателя при адресном типе шлейфа и при присутствии взрывозащиты'));
                    // div.appendChild(subelem);
    
                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode('Тип извещателя:'));
                    div.appendChild(subelem);
    
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
    
                    div.appendChild(subelem);
    
                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode("Зона:"));
                    div.appendChild(subelem);
    
                    subelem = document.createElement('input');
                    subelem.setAttribute('type', 'number');
                    subelem.setAttribute('id', `ZONAIZV_${lineLoopIndex}_${j}`);
                    subelem.setAttribute('placeholder', '1...255');
                    div.appendChild(subelem);
    
                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode('Наименование/адрес'));
                    div.appendChild(subelem);
    
                    subelem = document.createElement('input');
                    subelem.setAttribute('type', 'text');
                    subelem.setAttribute('id', `ADRIZV_${lineLoopIndex}_${j}`);
                    subelem.setAttribute('placeholder', 'до 20 символов...');
                    div.appendChild(subelem);
    
                    subDiv.appendChild(div);
    
                    div = document.createElement('div');
                    div.setAttribute('id', `confModbus${lineLoopIndex}_${j}`);
        
                    // subelem = document.createElement('h3');
                    // subelem.appendChild(document.createTextNode('Конфигурация извещателя при ТШС "MODBUS"'));
                    // div.appendChild(subelem);
        
                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode('Количество линий связи:'));
                    div.appendChild(subelem);
        
                    subelem = document.createElement('input');
                    subelem.setAttribute('type', 'text');
                    subelem.setAttribute('id', `KMBUSLNK${lineLoopIndex}_${j}`);
                    div.appendChild(subelem);
        
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
        eHandler[index][i][0].style.display = 'none';
        eHandler[index][i][4].style.display = 'none';
        eHandler[index][i][8].style.display = 'none';       
    }
}   

function showIzvAdrExNet(eHandler, index, pos){
    eHandler[index][pos][0].style.display = 'block';
}

function showIzvAdrExDa(eHandler, index, pos){
    eHandler[index][pos][4].style.display = 'block';
}

function showIzvConfModbu(eHandler, index, pos){
    eHandler[index][pos][8].style.display = 'block';
}

//Ручное обнаружение
function createlineLoopRuchn(val){
    if(val > 0){
        let elem, subelem, option, mainDiv;
        mainDiv = document.createElement('div');
        mainDiv.setAttribute('id','lineLoopKonfRuchn');
        mainDiv.setAttribute('class','flex-item');
        for (let i = 0; i < val; i++) {
            elem = document.createElement('form');
            elem.setAttribute("id", i + '_' + 1);
            
            // subelem = document.createElement('h3')
            // subelem.appendChild(document.createTextNode(`Конфигурация шлейфа #${i + 1}`));
            // elem.appendChild(subelem);

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

            elem.appendChild(subelem);

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode("Взрывозащита:"));
            elem.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'checkbox');
            subelem.setAttribute('id', `ExShS2_${i}`);
            elem.appendChild(subelem);

            let div = document.createElement('div');
            div.setAttribute('id', `TypeBIZ2_${i}`);
            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode('Тип искробарьера:'));
            div.appendChild(subelem);


            option = document.createElement('label');
            subelem = document.createElement('input');
            subelem.setAttribute('list', `_adrBIZ2_${i}`);
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `TShSBIZ2_${i}`);
            option.appendChild(subelem);
            div.appendChild(option);
            
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

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode('Количество извещателей:'));
            elem.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'number');
            subelem.setAttribute('id', `KIZVShS2_${i}`);
            subelem.setAttribute('placeholder', '1...32');
            elem.appendChild(subelem);

            div = document.createElement('div');
            div.setAttribute('id', `bezAdr__2_${i}`);

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode('Зона:'));
            div.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'number');
            subelem.setAttribute('id', `ZONAShS2_${i}`);
            subelem.setAttribute('placeholder', '1...255');
            div.appendChild(subelem);

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode('Наименование / адрес:'));
            div.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `ADRShS2_${i}`);
            subelem.setAttribute('placeholder', `до 20 символов...`);
            div.appendChild(subelem);

            elem.appendChild(div);

            div = document.createElement('div');
            div.setAttribute('id', `bezAdr___2_${i}`);   

            subelem = document.createElement('h3');
            subelem.appendChild(document.createTextNode('Конфигурация извещателя при типе шлейфа "безадресный" и при присутствии взрывозащиты'));
            div.appendChild(subelem);

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode('Тип извещателя:'));
            div.appendChild(subelem);

            subelem = document.createElement('label');
            let subSub = document.createElement('input');
            subSub.setAttribute('list', `enteredItems2_${i}`);
            subSub.setAttribute('id', `TIZV2_${i}`);
            subelem.appendChild(subSub);
            div.appendChild(subelem);

            subelem = document.createElement('datalist');
            subelem.setAttribute('id', `enteredItems2_${i}`);
            div.appendChild(subelem);

            subelem= document.createElement('p');
            subelem.appendChild(document.createTextNode('Ток в режиме "ДЕЖУРНЫЙ", мА:'));
            div.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `IOIZV2_${i}`);
            div.appendChild(subelem);

            subelem= document.createElement('p');
            subelem.appendChild(document.createTextNode('Ток в режиме "ПОЖАР", мА:'));
            div.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `IPIZV2_${i}`);
            div.appendChild(subelem);

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
        let elem, subelem, option, mainDiv, subDiv, div;
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
    
                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode('Тип извещателя:'));
                    div.appendChild(subelem);
    
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
                    

                    div.appendChild(subelem);                    
                    
    
                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode('Зона:'));
                    div.appendChild(subelem);
    
                    subelem = document.createElement('input');
                    subelem.setAttribute('type', 'number');
                    subelem.setAttribute('id', `ZONAIZV1_${lineLoopIndex}_${j}`);
                    subelem.setAttribute('placeholder', `1...255`);
                    div.appendChild(subelem);
    
                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode('Наименование/адрес:'));
                    div.appendChild(subelem);
    
                    
                    subelem = document.createElement('input');
                    subelem.setAttribute('type', 'text');
                    subelem.setAttribute('id', `ADRIZV1_${lineLoopIndex}_${j}`);
                    subelem.setAttribute('placeholder', `до 20 символов...`);
                    div.appendChild(subelem);
    
                    subDiv.appendChild(div);
    
                    div = document.createElement('div');
                    div.setAttribute('id', `AdrExDa1_${lineLoopIndex}_${j}`);
    
                    // subelem = document.createElement('h3');
                    // subelem.appendChild(document.createTextNode('Конфигурация извещателя при адресном типе шлейфа и при присутствии взрывозащиты'));
                    // div.appendChild(subelem);
    
                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode('Тип извещателя:'));
                    div.appendChild(subelem);
    
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

    
                    div.appendChild(subelem);
    
                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode("Зона:"));
                    div.appendChild(subelem);
    
                    subelem = document.createElement('input');
                    subelem.setAttribute('type', 'number');
                    subelem.setAttribute('id', `ZONAIZV_1_${lineLoopIndex}_${j}`);
                    subelem.setAttribute('placeholder', '1...255');
                    div.appendChild(subelem);
    
                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode('Наименование/адрес'));
                    div.appendChild(subelem);
    
                    subelem = document.createElement('input');
                    subelem.setAttribute('type', 'text');
                    subelem.setAttribute('id', `ADRIZV_1_${lineLoopIndex}_${j}`);
                    subelem.setAttribute('placeholder', 'до 20 символов...');
                    div.appendChild(subelem);
    
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
        eHandler[index][i][0].style.display = 'none';
        eHandler[index][i][4].style.display = 'none';      
    }
}

function handlePrevIzvR(curLine, KIZVSHsLength, izvLasPos1, 
    btnPrevHndlr, dynamicEvHandlerIZV1, data,
    curPosIzv1, nextPosIzv1, prevPosIzv1){
        for(let i = 0; i < curLine; i++){
            if( btnPrevHndlr[i]){
               btnPrevHndlr[i].addEventListener('click', (e)=>{
                   e.preventDefault();
                  // if(prevPosIzv1[i] < 1) prevPosIzv1[i]  = KIZVSHsLength - 1;
                   nextPosIzv1[i] = curPosIzv1[i];
                   curPosIzv1[i] = prevPosIzv1[i];
                   prevPosIzv1[i]--;
                   if(curPosIzv1[i] <= 0) prevPosIzv1[i] = KIZVSHsLength - 1;
                   izvLasPos1[i].value = parseInt(curPosIzv1[i], 10) + 1;
                   
                   hideIzvR(dynamicEvHandlerIZV1, i, data);
                   let current = curPosIzv1[i];
                   if(data[i].TShS == 0 && data[i].ExShS == false){
                       showIzvAdrExNet(dynamicEvHandlerIZV1, i, current);
                   }
                   else if(data[i].TShS == 0 && data[i].ExShS == true){
                       showIzvAdrExDa(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                   }
                //    else{
                //        showIzvConfModbu(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                //    }
               });
            }
   }
}

function handleNextIzvR(curLine, KIZVSHsLength, izvLasPos1, 
    btnNextHndlr, dynamicEvHandlerIZV1, data,
    curPosIzv1, nextPosIzv1, prevPosIzv1){

       // let i = curLine;

        for(let i = 0; i < curLine; i++){
            if(btnNextHndlr[i]){
                btnNextHndlr[i].addEventListener('click', (e)=>{
                    e.preventDefault();
                    if(nextPosIzv1[i] > KIZVSHsLength - 1) nextPosIzv1[i] = 0;
                    prevPosIzv1[i] = curPosIzv1[i];
                    curPosIzv1[i] = nextPosIzv1[i];
                    nextPosIzv1[i]++;
                    if(nextPosIzv1[i] > KIZVSHsLength + 1) nextPosIzv1[i] = 0;
                    izvLasPos1[i].value = parseInt(curPosIzv1[i], 10) + 1;
                    
                    hideIzvR(dynamicEvHandlerIZV1, i, data);
        
                    if(data[i].TShS == 0 && data[i].ExShS == false){
                        showIzvAdrExNet(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                    }
                    else if(data[i].TShS == 0 && data[i].ExShS == true){
                        showIzvAdrExDa(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                    }
                    // else{
                    //     showIzvConfModbu(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                    // }
            
            });
            }
            
    }  
}

function handleIzvPosR(curLine, KIZVSHsLength, izvLasPos1, 
    dynamicEvHandlerIZV1, data,
   curPosIzv1, nextPosIzv1, prevPosIzv1){
       
       //let i = curLine;
       for(let i = 0; i < curLine; i++){
           if(izvLasPos1[i]){
               izvLasPos1[i].addEventListener('blur', (e)=>{
                   e.preventDefault();
                   curPosIzv1[i] = parseInt(izvLasPos1[i].value, 10) - 1;
                   if(curPosIzv1[i] + 1 >= KIZVSHsLength){
                       nextPosIzv1[i] = 1;
                       prevPosIzv1[i] = curPosIzv1[i] - 1;
                   }
                   else if(curPosIzv1[i] - 1 < 1){
                       prevPosIzv1[i] = KIZVSHsLength - 1;
                       nextPosIzv1[i] = curPosIzv1[i] + 1;
                   }
                   else{
                       prevPosIzv1[i] = curPosIzv1[i] - 1;
                       nextPosIzv1[i] = curPosIzv1[i] + 1;
                   }
                       hideIzvR(dynamicEvHandlerIZV1, i, data);
       
                       if(data[i].TShS == 0 && data[i].ExShS == false){
                           showIzvAdrExNet(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                       }
                       else if(data[i].TShS == 0 && data[i].ExShS == true){
                           showIzvAdrExDa(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                       }
                    //    else{
                    //        showIzvConfModbu(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                    //    }
               });
           }
           
           
       }

}

function createlineLoopUpr(val){
    if(val > 0){
        let elem, subelem, option, mainDiv;
        mainDiv = document.createElement('div');
        mainDiv.setAttribute('id','lineLoopKonfUpr');
        mainDiv.setAttribute('class','flex-item');
        for (let i = 0; i < val; i++) {
            elem = document.createElement('form');
            elem.setAttribute("id", i + '_' + 2);
            
            // subelem = document.createElement('h3')
            // subelem.appendChild(document.createTextNode(`Конфигурация шлейфа #${i + 1}`));
            // elem.appendChild(subelem);

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode('Наименование / адрес:'));
            elem.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `ADRShPT${i}`);
            subelem.setAttribute('placeholder', `до 20 символов...`);
            elem.appendChild(subelem);

            subelem= document.createElement('p');
            subelem.appendChild(document.createTextNode('Пусковой ток шлейфа, А:'));
            elem.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `IPShPT${i}`);
            elem.appendChild(subelem);

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode("Взрывозащита:"));
            elem.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'checkbox');
            subelem.setAttribute('id', `ExShPT${i}`);
            elem.appendChild(subelem);

            let div = document.createElement('div');
            div.setAttribute('id', `TypeBIZ3_${i}`);
            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode('Тип искробарьера:'));
            div.appendChild(subelem);


            option = document.createElement('label');
            subelem = document.createElement('input');
            subelem.setAttribute('list', `_adrBIZ3_${i}`);
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `TBIZShPT${i}`);
            option.appendChild(subelem);
            div.appendChild(option);
            
            subelem = document.createElement('datalist');
            subelem.setAttribute('id', `_adrBIZ3_${i}`);
            div.appendChild(subelem);
            elem.appendChild(div);
            

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode("Шлейф сконфигурирован:"));
            elem.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'checkbox');
            subelem.setAttribute('id', `checkboxUpr${i}`);
            //subelem.setAttribute('class', `btn-after`);
            subelem.setAttribute('disabled', `true`);
            elem.appendChild(subelem);


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
        let elem, subelem, option, mainDiv;
        mainDiv = document.createElement('div');
        mainDiv.setAttribute('id','lineLoopKonfUprOp');
        mainDiv.setAttribute('class','flex-item');
        for (let i = 0; i < val; i++) {
            elem = document.createElement('form');
            elem.setAttribute("id", '_ZonaOpoveshenia_' + i);
            
            // subelem = document.createElement('h3')
            // subelem.appendChild(document.createTextNode(`Конфигурация шлейфа #${i + 1}`));
            // elem.appendChild(subelem);

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode("Зона:"));
            elem.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'number');
            subelem.setAttribute('id', `ZONAShOP${i}`);
            //subelem.setAttribute('placeholder', '1...32');
            elem.appendChild(subelem);

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode('Наименование / адрес:'));
            elem.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'text');
            subelem.setAttribute('id', `ADRShOP${i}`);
            subelem.setAttribute('placeholder', `до 20 символов...`);
            elem.appendChild(subelem);

            subelem = document.createElement('p');
            subelem.appendChild(document.createTextNode("Количество шлейфов управления оповещением:"));
            elem.appendChild(subelem);

            subelem = document.createElement('input');
            subelem.setAttribute('type', 'number');
            subelem.setAttribute('id', `KShOPZONY${i}`);
            subelem.setAttribute('placeholder', '1...480');
            elem.appendChild(subelem);

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
        let elem, subelem, option, mainDiv, subDiv, div;
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
            subelem.appendChild(document.createTextNode('Извещатель №'));
    
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
    
                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode('Количество оповещателей:'));
                    subDiv.appendChild(subelem);
    
                    subelem = document.createElement('input');
                    subelem.setAttribute('type', 'number');
                    subelem.setAttribute('id', `KOPSh${lineLoopIndex}_${j}`);
                    subelem.setAttribute('placeholder', `1...`);
                    subDiv.appendChild(subelem);

                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode('Сумарный ток оповещателей в режиме оповещения, мА:'));
                    subDiv.appendChild(subelem);

                    subelem = document.createElement('input');
                    subelem.setAttribute('type', 'text');
                    subelem.setAttribute('id', `IPOPSh${lineLoopIndex}_${j}`);
                    subDiv.appendChild(subelem);

                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode("Взрывозащита:"));
                    subDiv.appendChild(subelem);

                    subelem = document.createElement('input');
                    subelem.setAttribute('type', 'checkbox');
                    subelem.setAttribute('id', `ExOPSh${lineLoopIndex}_${j}`);
                    subDiv.appendChild(subelem);

                    div = document.createElement('div');
                    div.setAttribute('id', `TypeBIZShleifOp_${lineLoopIndex}_${j}`);
                    subelem = document.createElement('p');
                    subelem.appendChild(document.createTextNode('Тип искробарьера:'));
                    div.appendChild(subelem);


                    option = document.createElement('label');
                    subelem = document.createElement('input');
                    subelem.setAttribute('list', `_TBIZOPSh${lineLoopIndex}_${j}`);
                    subelem.setAttribute('type', 'text');
                    subelem.setAttribute('id', `TBIZOPSh${lineLoopIndex}_${j}`);
                    option.appendChild(subelem);
                    div.appendChild(option);
                    
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
        for(let i = 0; i < curLine; i++){
            if( btnPrevHndlr[i]){
               btnPrevHndlr[i].addEventListener('click', (e)=>{
                   e.preventDefault();
                  // if(prevPosIzv1[i] < 1) prevPosIzv1[i]  = KIZVSHsLength - 1;
                   nextPosIzv1[i] = curPosIzv1[i];
                   curPosIzv1[i] = prevPosIzv1[i];
                   prevPosIzv1[i]--;
                   if(curPosIzv1[i] <= 0) prevPosIzv1[i] = KIZVSHsLength - 1;
                   izvLasPos1[i].value = parseInt(curPosIzv1[i], 10) + 1;
                   
                //    hideIzvOp(dynamicEvHandlerIZV1, i, data);
                //    let current = curPosIzv1[i];
                   
                //     showOp(dynamicEvHandlerIZV1, i, current);
                hideIzvOp(curPosUprOp, lineLoopsDataUprOp[i].KShOPZONY);
                showOp(curPosUprOp - 1, curPosIzv1[i]);   
                return;

               });
            }
   }
}

function handleNextShleifOp(curLine, KIZVSHsLength, izvLasPos1, 
    btnNextHndlr, dynamicEvHandlerIZV1, data,
    curPosIzv1, nextPosIzv1, prevPosIzv1){
        for(let i = 0; i < curLine; i++){
            if(btnNextHndlr[i]){
                btnNextHndlr[i].addEventListener('click', (e)=>{
                    e.preventDefault();
                    if(nextPosIzv1[i] > KIZVSHsLength - 1) nextPosIzv1[i] = 0;
                    prevPosIzv1[i] = curPosIzv1[i];
                    curPosIzv1[i] = nextPosIzv1[i];
                    nextPosIzv1[i]++;
                    if(nextPosIzv1[i] > KIZVSHsLength + 1) nextPosIzv1[i] = 0;
                    izvLasPos1[i].value = parseInt(curPosIzv1[i], 10) + 1;
                    
                    //hideIzvOp(dynamicEvHandlerIZV1, i, data);
                    hideIzvOp(curPosUprOp, lineLoopsDataUprOp[i].KShOPZONY);
                    showOp(curPosUprOp - 1, curPosIzv1[i]);
                    //showOp(dynamicEvHandlerIZV1, i, curPosIzv1[i]);

                    // else{
                    //     showIzvConfModbu(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                    // }
            
            });
            }   
    } 
}

function handleOpPos(curLine, KIZVSHsLength, izvLasPos1, 
    dynamicEvHandlerIZV1, data,
   curPosIzv1, nextPosIzv1, prevPosIzv1){
    for(let i = 0; i < curLine; i++){
        if(izvLasPos1[i]){
            izvLasPos1[i].addEventListener('blur', (e)=>{
                e.preventDefault();
                curPosIzv1[i] = parseInt(izvLasPos1[i].value, 10) - 1;
                if(curPosIzv1[i] + 1 >= KIZVSHsLength){
                    nextPosIzv1[i] = 1;
                    prevPosIzv1[i] = curPosIzv1[i] - 1;
                }
                else if(curPosIzv1[i] - 1 < 1){
                    prevPosIzv1[i] = KIZVSHsLength - 1;
                    nextPosIzv1[i] = curPosIzv1[i] + 1;
                }
                else{
                    prevPosIzv1[i] = curPosIzv1[i] - 1;
                    nextPosIzv1[i] = curPosIzv1[i] + 1;
                }
                //hideIzvOp(dynamicEvHandlerIZV1, i, data);
                hideIzvOp(curPosUprOp, lineLoopsDataUprOp[i].KShOPZONY);
                showOp(curPosUprOp - 1, curPosIzv1[i]);
                //showOp(dynamicEvHandlerIZV1, i, curPosIzv1[i]);

                 //    else{
                 //        showIzvConfModbu(dynamicEvHandlerIZV1, i, curPosIzv1[i]);
                 //    }
            });
        }  
    }
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

// function showOp(eHandler, index, pos){
//     eHandler[index][pos][0].style.display = 'block';
//     eHandler[index][pos][1].style.display = 'block';      
//     eHandler[index][pos][2].style.display = 'block';   
//     //eHandler[index][pos][3].style.display = 'block';   
// }
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