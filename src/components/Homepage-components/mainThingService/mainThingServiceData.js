const mainThingServices = [
    {
        id:1,
        title:'GRIJANJE',
        serviceList: [
            {service:'Montaža/servis dizalica topline'},
            {service:'Postavljanje podnog grijanja'},
            {service:'Montaža/servis plinskih aparata'},
            {service:'Postavljanje radijatorskog grijanja'},
            // {service:'Postavljanje zidnog grijanja'},
        ],
        img:require('./photos/grijanje-naslovna.JPG')
            
        
    },
    {
        id:2,
        title:'KLIMATIZACIJA',
        serviceList: [
            // {service:'Montaža/servis vanjskih jedinica'},
            {service:'Montaža/servis klima uređaja'},
            {service:'Freonske instalacije'},
        ],
        img:require('./photos/klima-naslovna.JPG')
    },
    {
        id:3,
        title:'VODOINSTALACIJE',
        serviceList: [
            {service:'Vodovodne instalacije'},
            {service:'Kanalizacijske instalacije'},
            {service:'Montaža solarnih panela za toplu vodu'},
        ],
        img:require('./photos/vodo-naslovna.JPG')
    }

]
export default mainThingServices