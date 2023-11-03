const baseUrl="http://localhost:3000/bununYazanaKimiOldum"
const dataTable=document.getElementById('create_row')
const goster=document.getElementById('goster')
const dogumgu=document.getElementById('d')

async function  fechdata() {
  try {
    const response= await axios.get(baseUrl)
    console.log(response);
    addtable(response.data)
  } catch (error) {
    console.log(error);
  }
  
}

function addtable(data){
  dataTable.innerHTML=``
  data.forEach(item => {
    // const
  });
}


fechdata()
// goster.addEventListener('click',()=>{
//   console.log(dogumgu.value);
// })


