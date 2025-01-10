function saveData(){
    localStorage.setItem("USERNAME",document.getElementById("name").value)
    localStorage.setItem("EMAIL",document.getElementById("email").value)
    localStorage.setItem("MOBILENO",document.getElementById("mobileNo").value)
    localStorage.setItem("PASSWORD",document.getElementById("password").value)
}
function showData(){
    const data = localStorage.getItem("USERNAME");
    const data1 = localStorage.getItem("EMAIL");
    const data2 = localStorage.getItem("MOBILENO");
    const data3 = localStorage.getItem("PASSWORD");
    if(data){
        document.getElementById("result").textContent=(`USERNAME:${data}`);
    if(data1){
        document.getElementById("result").textContent=(`EMAIL:${data1}`);
    }
    if(data2){
    document.getElementById("result").textContent=(`MOBILENO:${data2}`);
    }
    if(data3){
        document.getElementById("result").textContent=(`PASSWORD:${data}`);
    }
    }else{
        document.getElementById("result").textContent=("Data Not Found");
        document.getElementById("result1").textContent=("Data Not Found");
        document.getElementById("result2").textContent=("Data Not Found");
        document.getElementById("result3").textContent=("Data Not Found");
    }
}
function deleteData(){
    localStorage.removeItem("USERNAME");
    localStorage.removeItem("EMAIL");
    localStorage.removeItem("MOBILENO");
    localStorage.removeItem("PASSWORD");
}

function clearData(){
    localStorage.clear();
    alert("Data Cleared")
}