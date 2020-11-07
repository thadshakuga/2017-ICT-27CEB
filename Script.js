function Calculate()
{
	let b=document.getElementById('unit').value;
	
	if(b<=30)
	{
		document.getElementById("rs").innerHTML=Number(b)*7.85+"Rs";
	}
	else if(b<=60)
	{
		var rs=235.50+(Number(b)-30)*7.85;
		document.getElementById("rs").innerHTML=rs+"Rs";
	}
	else if(b<=90)
	{
		var rs=471+(Number(b)-60)*10;
		document.getElementById("rs").innerHTML=rs;
	}
	else if(b<=120)
	{
		var rs=771+(Number(b)-90)*27.75;
		document.getElementById("rs").innerHTML=rs;
	}
	else
	{
		document.getElementById("rs").innerHTML=1603.50+(Number(b)-120)*32+48;
	}
}