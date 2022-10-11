var tomb1 = new Array(2,15,20,32,44,120,345,10,2,-3,-14);
var tomb2 = new Array();
var db = 0;
var osszeg = 0;
var max = 0;
var index = 0;
var min = 0;
var tulajdonsag = 20;
var van = false;
var sorszam = 0;

function megszamlalas(tomb1,db)
{
    for (let i = 0; i < tomb1.length; i++)
    {
        db += 1;
    }
    console.log(`A tömbben ${db} elem van.`);

}
megszamlalas(tomb1,db);

function osszegzes(tomb1,osszeg)
{
    for(let i = 0; i < tomb1.length; i++)
    {
        osszeg += tomb1[i];
    }
    console.log(`A tömb elemeinek összege: ${osszeg}.`);
}
osszegzes(tomb1,osszeg);

function maxkivalasztas(tomb1,max)
{
    for (let i = 1; i < tomb1.length; i++)
    {        
        if (tomb1[i] > max)
            {
                max = tomb1[i];
                index = i;              
            }
    }
    console.log(`A tömb legnagyobb eleme: ${max} és ez a tömb: ${index+1}. eleme.`);
}
maxkivalasztas(tomb1,max);

function minkivalasztas(tomb1,min)
{
    for (let i = 1; i < tomb1.length; i++)
    {       
        if (tomb1[i] < min)
            {
                min= tomb1[i];
                index = i;               
            }
    }
    console.log(`A tömb legkisebb eleme: ${min} és ez a tömb: ${index+1}. eleme.`);
}
minkivalasztas(tomb1,min);

function eldontes(tomb1,tulajdonsag,van)
{
    i = 0;
    while(i <= tomb1.length && tomb1[i] != tulajdonsag)
    {
        i++; 
    }
    if(i <= tomb1.length)
    {
        van = true;
        console.log("van");
    }
    else{
        console.log("nincs");
    }

}
eldontes(tomb1,tulajdonsag,van);

function kereses(tomb1,tulajdonsag,sorszam)
{
    i = 0;
    while (i <= tomb1.length && tomb1[i] != tulajdonsag)
    {
        i += 1;
    }
    if (i <= tomb1.length)
    {
        sorszam = i;
    }
    else{
        sorszam = -1;
    }
    console.log(`${sorszam}. elem ${tomb1[i]}`);
}

kereses(tomb1,tulajdonsag,sorszam);

function kivalasztas(tomb1,tulajdonsag,sorszam)
{
    i = 0;
    while(i <= tomb1.length && tomb1[i] != tulajdonsag)
    {
        i+=1;
        sorszam = i;
    }
    
    console.log(`${sorszam}. elem: ${tomb1[i]}`);
}
kivalasztas(tomb1,tulajdonsag,sorszam);

function kivalogatas(tomb1,tulajdonsag,tomb2)
{
    szamlalo = 0;
    for(i <= 0; i < tomb1.length; i++)
    {
        if(tomb1[i] == tulajdonsag)
        {
            tomb2[szamlalo] = tomb1[i];
            szamlalo = szamlalo + 1
        }
    }
    console.log(`${szamlalo} elem van ebből a számból: ${tulajdonsag}`);
}
kivalogatas(tomb1,tulajdonsag,tomb2);