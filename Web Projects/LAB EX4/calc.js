
var i;

/*--------------------------------------------GPA cALCULATION-----------------------------------------------------------------------------*/
var n;
//var gpa_calc=0.00;
function getvalue_gpa(){
n = document.getElementById("no1").value;
n = parseInt(n);
getvalues_gpa();
}

function getvalues_gpa(){
    document.write("<link rel='stylesheet' type='text/css' href='style.css'></link>");
    document.write("<link href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap' rel='stylesheet'></link>"); 
    document.write("<div class='box1'>Enter your grades below : - </div>")
for(i=0;i<n;i++)
{
    document.write("<div class='box2'><select aria-placeholder='Select the grade' id='grade' class='grades'><option value='S'>S</option><option value='A'>A</option><option value='B'>B</option><option value='C'>C</option><option value='D'>D</option><option value='E'>E</option><option value='N'>N</option></select><input type='number' placeholder='Credits' id='credit' class='credits' ></div> <br>");
    //document.write("<input type='number' placeholder='Credits' id='credit"+(i)+"' class='credits' ></div> <br>");
}
document.write("<div class='box2'> <button type='submit' id='sub3' onclick='gpa()'>Submit</button></div>");
document.write("<div class='home'> <button id='sub7' onclick='home()'>Back</button></div>")
}


function gradenum(x){
    var pt
    switch(x){
        case 'S': 
        pt=10;
        break;
        case 'A': 
        pt=9;
        break;
        case 'B': 
        pt=8;
        break;
        case 'C': 
        pt=7;
        break;
        case 'D': 
        pt=6;
        break;
        case 'E': 
        pt=5;
        break;
        case 'N': 
        pt=0;
        break;
        default:
            pt=0;
    }
    return pt;
}

function gpa(){
    var grades= new Array();
    var credits= new Array();
    var point = new Array();
    var total_credits=0;
    var sum_gpa=0;
    var gpa_calc;
    for(i=0;i<n;i++)
    { 
        grades[i]=document.getElementsByClassName("grades")[i].value;
        credits[i]=document.getElementsByClassName("credits")[i].value;
        credits[i]=parseInt(credits[i]);
        //console.log(grades);
        //console.log(credits);}
    }

    for(i=0;i<n;i++)
    {
        point[i]=gradenum(grades[i]);
        console.log(point);
    }

    for(i=0;i<n;i++)
    {
        total_credits=total_credits + credits[i];
        sum_gpa = sum_gpa + ((point[i])*(credits[i]));
    }
    console.log(total_credits);
    console.log(sum_gpa);
    gpa_calc=sum_gpa/total_credits;
    console.log(gpa_calc.toFixed(2));
    //document.getElementsByTagName("p") = gpa_calc;
    document.write("<div id='gpa'></div");
    document.getElementById('gpa').innerHTML='GPA : '+(gpa_calc.toFixed(2));
    }

var m;
var sem=new Array();


function getvalue_cgpa(){
    m = document.getElementById("no2").value;
    m = parseInt(m);
    document.write("<link rel='stylesheet' type='text/css' href='style.css'></link>");
    document.write("<link href='https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap' rel='stylesheet'></link>");
    document.write("<div class='box1'>Enter your grades below : - </div>")
    for(i=0;i<m;i++)
    {
        document.write("<div class='box2'><input type='text' placeholder='Semester No.' id='sem"+(i+1)+"' class='sem' > <input type='number' placeholder='Credits Covered' id='creds"+(i+1)+"' class='creds' > <input type='text' placeholder='GPA' id='gpa"+(i+1)+"' class='gpas'></div><br>");
        //document.write("<input type='number' placeholder='Credits Covered' id='creds"+(i+1)+"' class='creds' >");
        //document.write("<input type='text' placeholder='GPA' id='gpa"+(i+1)+"' class='gpas' ><br>");
    }
    document.write("<div class='box2'><button type='submit' id='sub4' onclick='cgpa()'>Submit</button></div><br>");
    document.write("<div class='home'> <button id='sub6' onclick='home()'>Back</button></div>")
    }

    function cgpa(){
        var credits=new Array();
        var gpa=new Array();
        var total_credits=0.00;
        var sum_cgpa=0.00;
        var cgpa_calc=0.00;
        for(i=0;i<m;i++)
        {
            credits[i]=document.getElementById("creds"+(i+1)).value;
            credits[i]=parseInt(credits[i]);
            gpa[i]=document.getElementById("gpa"+(i+1)).value;
            gpa[i]=parseFloat(gpa[i]);
            console.log(credits);
            console.log(gpa);
        }

        for(i=0;i<m;i++)
        {
            total_credits = total_credits + credits[i];
            sum_cgpa = sum_cgpa + ((credits[i])*(gpa[i]));
            console.log(total_credits);
            console.log(sum_cgpa);
        }

        cgpa_calc=sum_cgpa/total_credits;
        console.log(cgpa_calc.toFixed(2));
        document.write("<div id='cgpa'></div>");
        document.getElementById('cgpa').innerHTML='CGPA : '+(cgpa_calc.toFixed(2));
    }

    /*-------------------------------------------------------------------------------------------------------------------------------------------------------*/

    function home(){
        location.reload();
    }
