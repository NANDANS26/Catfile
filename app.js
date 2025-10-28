async function apicall()
{
   let res= await fetch("https://meowfacts.herokuapp.com/")
   let final =await res.json()
   let ultimateres=final.data[0]
   document.getElementById('fine').innerText=ultimateres
   console.log(final.data[0]);
}