document.getElementById("btnSubmit").addEventListener("click",function(){
	var name  = document.getElementById("txtName").value;
	if(name == null || name == ""){
		alert("Hãy nhập tên nhà cung cấp");
	}
	else if(name.length<3){
		alert("Tên nhà cung cấp phải từ 3 ký tự trở lên");
	}else document.getElementById("frmManufacturer").submit();
})